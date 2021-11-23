package com.mohammadhasan.rnanimatedtabbar

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

class RNAnimatedTabbarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "RNAnimatedTabbarModule"

    override fun getConstants(): MutableMap<String, Any> {
        return hashMapOf("count" to 1)
    }
}
