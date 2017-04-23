## Offline App
[![NinjaDevs.IO](https://drive.google.com/uc?export=download&id=0B1pDFiUHXp9WMWZ4cW8yQ1p2bjg)](http://ninjadevs.io/)

This is an example of how to cache images in Ionic 3! using ImgCache.js

## Getting Started
* Install Ionic CLI `npm install ionic -g --save`
* Install Cordova `npm install -g cordova`

## Run it on the browser
* Run `ionic serve` in a terminal from the project root.

## Before run it on devices
* Install iOS Sim (npm install -g ios-sim)
* Install iOS Deploy (npm install -g ios-deploy)
* Add Android platform `ionic platform add android`
* Add iOS platform after `ionic platform add ios`

## Before run it on android
* Install [Android Studio](http://developer.android.com/intl/es/sdk/index.html)
* Open Android SDK Manager and install:
  * Android SDK Tools
  * Android SDK Platform-tools
  * Android SDK Build-tools
  * System images (in case you need to use Android Emulator)
  * Android Support Repository
  * Android Support Library
  * Google Play services
  * Google Repository
  * Intel x86 Emulator Accelerator (in case you need to use Android Emulator)

## Build and Run
* ionic build ios/android --prod
* ionic run ios/android --emulator --devices
