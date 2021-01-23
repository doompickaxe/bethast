package io.kay.bethast

import io.javalin.http.Context

class ComponentHandler {
    fun add(ctx: Context) {
        ctx.status(201).result("Created!")
    }
}
