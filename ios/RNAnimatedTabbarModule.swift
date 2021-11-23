//
//  RNAnimatedTabbarModule.swift
//  RNAnimatedTabbarModule
//
//  Copyright © 2021 Mohammad Hasan. All rights reserved.
//

import Foundation

@objc(RNAnimatedTabbarModule)
class RNAnimatedTabbarModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
