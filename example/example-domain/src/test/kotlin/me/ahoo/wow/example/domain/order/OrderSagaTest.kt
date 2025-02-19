package me.ahoo.wow.example.domain.order

import io.mockk.every
import io.mockk.mockk
import me.ahoo.wow.example.api.order.OrderCancelled
import me.ahoo.wow.example.api.order.OrderCreated
import me.ahoo.wow.example.api.order.OrderItem
import me.ahoo.wow.id.GlobalIdGenerator
import me.ahoo.wow.test.SagaVerifier
import org.junit.jupiter.api.Test
import java.math.BigDecimal

class OrderSagaTest {
    @Test
    fun onOrderCreated() {
        val orderItem = OrderItem(
            GlobalIdGenerator.generateAsString(),
            GlobalIdGenerator.generateAsString(),
            BigDecimal.valueOf(10),
            10,
        )
        SagaVerifier.sagaVerifier<OrderSaga>()
            .`when`(
                mockk<OrderCreated> {
                    every {
                        customerId
                    } returns "customerId"
                    every {
                        items
                    } returns listOf(orderItem)
                    every {
                        fromCart
                    } returns true
                },
            )
            .expectNoCommand()
            .verify()
    }

    @Test
    fun onOrderCreatedWithOrderState() {
        SagaVerifier.sagaVerifier<OrderSaga>()
            .`when`(
                event = OrderCancelled,
                state = mockk<OrderState>()
            )
            .expectNoCommand()
            .verify()
    }
}
