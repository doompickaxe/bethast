package io.kay.bethast

import io.javalin.Javalin
import io.javalin.apibuilder.ApiBuilder.*

fun main() {
    val componentHandler = ComponentHandler()

    Javalin.create()
        .routes {
            path("/api") {
                post("/component", componentHandler::add)
            }
            path("/") {
                get { ctx -> ctx.result("Hello World") }
            }
        }.start(8080)
}
