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

package me.ahoo.wow.event

import me.ahoo.wow.event.annotation.eventProcessorMetadata
import me.ahoo.wow.infra.Decorator
import me.ahoo.wow.messaging.function.MessageFunction
import me.ahoo.wow.messaging.function.MultipleMessageFunctionRegistrar
import me.ahoo.wow.messaging.function.SimpleMultipleMessageFunctionRegistrar
import reactor.core.publisher.Mono

abstract class AbstractEventFunctionRegistrar(
    override val delegate: MultipleMessageFunctionRegistrar<MessageFunction<Any, DomainEventExchange<*>, Mono<*>>> =
        SimpleMultipleMessageFunctionRegistrar()
) :
    MultipleMessageFunctionRegistrar<MessageFunction<Any, DomainEventExchange<*>, Mono<*>>> by delegate,
    Decorator<MultipleMessageFunctionRegistrar<MessageFunction<Any, DomainEventExchange<*>, Mono<*>>>>

class DomainEventFunctionRegistrar(
    actual: MultipleMessageFunctionRegistrar<MessageFunction<Any, DomainEventExchange<*>, Mono<*>>> =
        SimpleMultipleMessageFunctionRegistrar()
) : AbstractEventFunctionRegistrar(actual) {

    fun registerProcessor(processor: Any) {
        processor.javaClass
            .eventProcessorMetadata()
            .toMessageFunctionRegistry(processor)
            .forEach {
                register(it)
            }
    }
}
