import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm") version "1.4.21"
    id("org.flywaydb.flyway") version "7.5.1"
}

group = "io.kay"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.javalin:javalin:3.13.0")
    implementation("org.flywaydb:flyway-core:7.5.1")

    runtimeOnly("org.slf4j:slf4j-simple:1.7.30")
    runtimeOnly("org.postgresql:postgresql:42.2.18")
}

val compileKotlin: KotlinCompile by tasks
compileKotlin.kotlinOptions.jvmTarget = "11"

flyway {
    url = "jdbc:postgresql://localhost:5432/bethast"
    user = "bethast"
    password = "bethast"
}
