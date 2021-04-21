---
id: prerequisites
title: Prerequisites
---

## Software requirements

* 4D Developer Pro v17 R2 64-bit (Development)
* 4D Server v17 R2 64-bit (Deployment)
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac (optional).

Apple configurator 2 requires **macOS 10.14** or a more recent version. If you want to automate app installation on your physical device, you need to install this software.

Xcode 10.2 requieres **macOS 10.14** or a more recent version.

## Version comparison table

| Xcode  | Swift | iOS  | 4D          | macOS   |
| ------ | ----- | ---- | ----------- | ------- |
| 12.4   | 5.3.2 | 14.4 | 18R6 beta   | 10.15.4 |
| 12.2   | 5.3   | 14.2 | 18R5 & 18.3 | 10.15.4 |
| 12.0   | 5.3   | 14.0 | 18R4        | 10.15.4 |
| 11.5   | 5.2.4 | 13.5 | 18R3        | 10.15.2 |
| 11.4   | 5.2   | 13.4 | 18.2        | 10.15.2 |
| 11.3.1 | 5.1.3 | 13.3 | 18.1        | 10.14.4 |
| 11.3.1 | 5.1.3 | 13.3 | 18R2        | 10.14.4 |
| 11.2   | 5.1   | 13.2 | 18          | 10.14.4 |
| 10.2.1 | 5.0   | 12.2 | 17R6        | 10.14.4 |
| 10.2   | 4.2.1 | 12.2 | 17R5        | 10.14.3 |
| 10.1   | 4.2.1 | 12   | 17R4        | 10.13.6 |
| 10.0   | 4.2   | 12   | 17R3        | 10.13.6 |
| 9.4    | 4.1.2 | 11.4 | 17R2        | 10.13.2 |
| 9.3.1  | 4.1   | 11.3 | 17R2        | 10.13.2 |

### Using 17R6 with macOS 10.14.3

4D 17R6 requires Swift5.0 runtime (already installed with macOS 10.14.4).

 - Install `Swift 5 Runtime Support for Command Line Tools` from [More Downloads for Apple Developers](https://developer.apple.com/download/more/)

### Using 17R4 with Xcode 10.2

Due to Apple Swift language abi instability, you cannot use the standard 4D 17R4 with Xcode 10.2.

Fortunately, we provide an alternative component compatible with Xcode 10.2.

You can replace the internal user component `4D Mobile App.4dbase`, that you can find into `../4D.app/Contents/Resources/Internal User Components/`, by the provided one:

<a class="button"
href="https://download.4d.com/Products/Current/4D_v17R4/4D%20Mobile%20App%20-%20Xcode%2010.2/4D%20Mobile%20App.4dbase.zip">4D Mobile App.4dbase.zip</a>

## Hardware requirements

* 8GB of RAM (Minimum recommended).

## Configuration

* In the 4D Database Settings, display the Compatibility page and check **Use object notation to access object properties (Unicode required).**

![Use object notation](assets/en/prerequisites/Use-object-notation.png)

* Your HTTP and HTTPS ports must be well-configured. HTTPS is mandatory for 4D for iOS deployment.

![Web Configuration](assets/en/prerequisites/Web-Configuration.png)

* Your Web Server must be started. It is available from the Run menu:

![Start web server](assets/en/prerequisites/Start-web-server.png)
