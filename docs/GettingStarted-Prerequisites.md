---
id: prerequisites
title: Prerequisites
---

## Software requirements

* 4D Developer Pro v17 R2 64-bit (Development)
* 4D Server v17 R2 64-bit (Deployment) 
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac (optional). 

Apple configurator 2 requires **macOS 10.14** or later.
Install this software if you want to automate app installation on your physical device.

Xcode 10.2 requieres **macOS 10.14** or later.

## Version comparison table

| Xcode | Swift | iOS | 4D |
|---|---|---|---|
| 10.2 | 4.2.1 | iOS 12.2 | 17R5 |
| 10.1 | 4.2.1 | iOS 12 | 17R4 |
| 10.0 | 4.2 | iOS 12 | 17R3 |
| 9.4| 4.1.2| iOS 11.4 | 17R2 |
| 9.3.1| 4.1| iOS 11.3 | 17R2 |

### Using 17R4 with Xcode 10.2

Due to apple swift language abi instability, you can not use the standard 4D 17R4 with Xcode 10.2.

Fortunately we provide an alternative component compatible with Xcode 10.2.

You can replace the internal user component `4D Mobile App.4dbase`, that you can find into `../4D.app/Contents/Resources/Internal User Components/`, by the provided one:

<a class="button"
href="https://download.4d.com/Products/Current/4D_v17R4/4D%20Mobile%20App%20-%20Xcode%2010.2/4D%20Mobile%20App.4dbase.zip">4D Mobile App.4dbase.zip</a>

## Hardware requirements

* 8GB of RAM (Minimum recommended)

## Configuration

* In the 4D Database Settings, display the Compatibility page and check **Use object notation to access object properties (Unicode required).**

![Use object notation](assets/en/prerequisites/Use-object-notation.png)

* Your HTTP and HTTPS ports must be well-configured. HTTPS is mandatory for  4D for iOS deployment.

![Web Configuration](assets/en/prerequisites/Web-Configuration.png)

* Your Web Server must be started. It's available from the Run menu:

![Start web server](assets/en/prerequisites/Start-web-server.png)
