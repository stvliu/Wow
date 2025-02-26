/*
 * Copyright [2021-present] [ahoo wang <ahoowang@qq.com> (https://github.com/Ahoo-Wang)].
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *      http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package me.ahoo.wow.compensation.domain

import me.ahoo.wow.api.annotation.AggregateRoot
import me.ahoo.wow.api.annotation.OnCommand
import me.ahoo.wow.compensation.api.ApplyExecutionFailed
import me.ahoo.wow.compensation.api.ApplyExecutionSuccess
import me.ahoo.wow.compensation.api.ApplyRetrySpec
import me.ahoo.wow.compensation.api.CompensationPrepared
import me.ahoo.wow.compensation.api.CreateExecutionFailed
import me.ahoo.wow.compensation.api.ExecutionFailedApplied
import me.ahoo.wow.compensation.api.ExecutionFailedCreated
import me.ahoo.wow.compensation.api.ExecutionFailedStatus
import me.ahoo.wow.compensation.api.ExecutionSuccessApplied
import me.ahoo.wow.compensation.api.ForcePrepareCompensation
import me.ahoo.wow.compensation.api.IRetrySpec
import me.ahoo.wow.compensation.api.PrepareCompensation
import me.ahoo.wow.compensation.api.RetrySpec.Companion.materialize
import me.ahoo.wow.compensation.api.RetrySpecApplied

@AggregateRoot
class ExecutionFailed(private val state: ExecutionFailedState) {

    @OnCommand
    fun onCreate(
        command: CreateExecutionFailed,
        retrySpec: IRetrySpec,
        nextRetryAtCalculator: NextRetryAtCalculator
    ): ExecutionFailedCreated {
        val retryState = nextRetryAtCalculator.nextRetryState(retrySpec, 0, command.executeAt)
        return ExecutionFailedCreated(
            eventId = command.eventId,
            processor = command.processor,
            functionKind = command.functionKind,
            error = command.error,
            executeAt = command.executeAt,
            retryState = retryState,
            retrySpec = retrySpec.materialize()
        )
    }

    @Suppress("UnusedParameter")
    @OnCommand
    fun onPrepare(command: PrepareCompensation, nextRetryAtCalculator: NextRetryAtCalculator): CompensationPrepared {
        check(this.state.canRetry()) {
            "ExecutionFailed can not retry."
        }
        return compensationPrepared(nextRetryAtCalculator)
    }

    @Suppress("UnusedParameter")
    @OnCommand
    fun onForcePrepare(
        command: ForcePrepareCompensation,
        nextRetryAtCalculator: NextRetryAtCalculator
    ): CompensationPrepared {
        check(this.state.canForceRetry()) {
            "ExecutionFailed can not force retry."
        }
        return compensationPrepared(nextRetryAtCalculator)
    }

    private fun compensationPrepared(nextRetryAtCalculator: NextRetryAtCalculator): CompensationPrepared {
        val retries = this.state.retryState.retries + 1
        val retryState = nextRetryAtCalculator.nextRetryState(this.state.retrySpec, retries)
        return CompensationPrepared(
            eventId = this.state.eventId,
            processor = this.state.processor,
            functionKind = this.state.functionKind,
            retryState = retryState
        )
    }

    @OnCommand
    fun onFailed(command: ApplyExecutionFailed): ExecutionFailedApplied {
        check(this.state.status == ExecutionFailedStatus.PREPARED) { "ExecutionFailed is not prepared." }
        return ExecutionFailedApplied(
            error = command.error,
            executeAt = command.executeAt
        )
    }

    @OnCommand
    fun onSucceed(command: ApplyExecutionSuccess): ExecutionSuccessApplied {
        check(this.state.status == ExecutionFailedStatus.PREPARED) { "ExecutionFailed is not prepared." }
        return ExecutionSuccessApplied(
            executeAt = command.executeAt
        )
    }

    @OnCommand
    fun onApplyRetrySpec(applyRetrySpec: ApplyRetrySpec): RetrySpecApplied {
        return RetrySpecApplied(
            maxRetries = applyRetrySpec.maxRetries,
            minBackoff = applyRetrySpec.minBackoff,
            executionTimeout = applyRetrySpec.executionTimeout
        )
    }
}
