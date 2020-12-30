plugins {
    kotlin("js") version "1.4.21"
}

group = "io.kay"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test-js"))
}

kotlin {
    js(LEGACY) {
        nodejs {
            binaries.executable()
        }
    }
}