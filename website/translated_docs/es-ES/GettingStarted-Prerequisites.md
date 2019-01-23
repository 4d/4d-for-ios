---
id: prerequisites
title: Prerequisites
sidebar_label: Prerequisites
---
## Software requirements

* 4D Developer Pro v17 R2 64-bit (Development)
* 4D Server v17 R2 64-bit (Deployment) 
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac (optional). 

Apple configurator 2 requires macOS 10.14 or later. Install this software if you want to automate app installation on your physical device.

## Version comparison table

| Xcode | Swift | iOS      | 4D   |
| ----- | ----- | -------- | ---- |
| 10.0  | 4.2   | iOS 12   | 17R3 |
| 9.4   | 4.1.2 | iOS 11.4 | 17R2 |
| 9.3.1 | 4.1   | iOS 11.3 | 17R2 |

## Hardware requirements

* 8GB of RAM (Minimum recommended)

## Configuration

* In the 4D Database Settings, display the Compatibility page and check **Use object notation to access object properties (Unicode required).**

![Use object notation](assets/prerequisites/Use-object-notation.png)

* Your HTTP and HTTPS ports must be well-configured. HTTPS is mandatory for 4D for iOS deployment.

![Web Configuration](assets/prerequisites/Web-Configuration.png)

* Your Web Server must be started. It's available from the Run menu:

![Start web server](assets/prerequisites/Start-web-server.png)