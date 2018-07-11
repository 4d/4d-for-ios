---
id: prerequisites
title: Prerequisites
sidebar_label: Prerequisites
---


## Software requirements

* 4D Developer Pro v17 R2 64-bit (Development)
* 4D Server v17 R2 64-bit (Deployment) 
* macOS version 10.13 (or later)
* Latest [Xcode](https://itunes.apple.com/us/app/xcode/id497799835) version installed on your Mac. It is necessary to open Xcode and install essential components prior to using 4D for iOS.
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac (optional). 
Install this software if you want to automate app installation on your physical device.


## Hardware requirements

* 8GB of RAM (Minimum recommended)


## Configuration

* In the 4D Database Settings, display the Web/4D Mobile page and check **Activate 4D Mobile service**.

![4D Mobile services](assets/prerequisites/4D-Mobile-services.png)

* Tables and fields must be **exposed with 4D Mobile Service**. Display the Table Inspector in the Structure Editor and select the table to modify. By default, **Expose with 4D Mobile Service** is enabled.

![Expose table fields](assets/prerequisites/Expose-table-fields-4D-mobile.png)

* Your HTTP and HTTPS ports must be well-configured. HTTPS is mandatory for  4D for iOS deployment.

* Your Web Server must be started. It's available from the Run menu:

![Start web server](assets/prerequisites/Start-web-server.png)