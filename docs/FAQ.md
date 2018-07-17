---
id: faq
title: FAQ
---

## Prerequisites 

<details>
<summary>
    **Do I need specific expertise to use 4D for iOS?**
</summary>

With 4D for iOS, you can easily create mobile projects directly from 4D, without needing any prior expertise building native iOS apps!

The mobile project editor has been designed so that you can use 4D for iOS without any specific knowledge in mobile app developement. 

</details>

<details>
<summary>
**Are there any prerequisites for 4D for iOS?**
</summary>

To use 4D for iOS, you'll need to install the latest version of Xcode on your Mac.

See the prerequisites list [here](prerequisites.html).

</details>


<details>
<summary>
**Can I use Windows to develop with 4D for iOS?**
</summary>

No. You must develop on macOS, as we need XCode to compile the final application and to run the Simulator.

</details>


## License 

<details>
<summary>
**Do I need a 4D Web Server to run 4D for iOS?**
</summary>

No –  4D for iOS is included in 4D Server v17 R2 and up.

</details>



<details>
<summary>
**Is there a test or evaluation license available?**
</summary>

If you already have a 4D Developer Pro or 4D Server license for 4D v17 R2 or newer, 4D for iOS is included.

If you're not a 4D Partner or don't participate in the 4D Maintenance program, you have to wait for 4D v18.

</details>


<details>
<summary>
**What 4D license do I need to develop with 4D for iOS?**
</summary>

You need a 4D Developer Pro v17 R2 (macOS) license to develop 4D for iOS apps.

</details>


<details>
<summary>
**What 4D license do I need to deploy apps created with 4D for iOS?**
</summary>

You need a 4D Server (macOS or Windows) v17 R2 or newer license to deploy 4D for iOS apps.

There's no additional license needed. Your 4D for iOS apps will share the same licenses as those for 4D Remote (client).

Clients can connect on Macs, Windows PCs, or iPhones, as long as the total amount of concurrent users are covered by the 4D Server license.

Please note that you're not allowed to install your mobile app on more devices than the total amount of the 4D Server's remote (client) licenses.

</details>


<details>
<summary>
**I have a 4D Server plus an expansion for two clients (in total, four clients), how many mobile devices can I use?**
</summary>

You can use up to four mobile devices.

</details>


## MISC


<details>
<summary>
**I have an application with a lot of data, can I embed all of it on my iOS device?**
</summary>

4D for iOs allows you to embed a maximum of 10,000 records in your app. 

For now, the best way to deal with large amounts of data is to create an intermediate table and filter the results you want to display.

Future versions of 4D for iOS will include a way to apply filters so only the required information is displays.

</details>


<details>
<summary>
**Can I modify and update data from my iOS app?**
</summary>

For now, 4D for iOS allows you to build read-only apps.

Future versions will allow you to add and modify your records right from your iOS app and synchronize your data with the server.

</details>


<details>
<summary>
**Can I reload only the records that have been modified?**
</summary>

When you reload data, all your data is downloaded to replace the existing data.

Incremental synchronization is planned for a future release.

</details>


<details>
<summary>
**Where is my data actually stored?**
</summary>

Your data is stored locally on your iOS device. This allows you to access your data in offline mode.

</details>


<details>
<summary>
**Can I use related tables in 4D for iOS?**
</summary>

We know that you use a lot related tables for your business applications and we're working on accessing related tables for a future 4D for iOS release. 

</details>


<details>
<summary>
**Can I use calculated fields in 4D for iOS?**
</summary>

You can create pre-calculated fields in 4D and publish them from the [Structure section](structure.html) of the 4D for iOS project editor.

</details>


<details>
<summary>
**Do I need to have images in my database?**
</summary>

Images are not mandatory, but we highly recommend that you use images to offer the best user experience.

4D for iOS offers a variety of [list form](list-form-templates.html) and [detail form](detail-form-templates.html) templates. With or without images, with charts...

</details>

<details>
<summary>
**Do I need to create an icon for my iOS app?**
</summary>

It's highly recommended to have an icon for your 4D for iOS app. If you don't have one, the default icon (the 4D logo) will be displayed. 

If you already have an icon for your 4D Desktop application, you can drag and drop it directly into the icon area on the [General](general.html) section of the project editor.

</details>


<details>
<summary>
**How can I test my app?**
</summary>

4D for iOS allows you to test your apps in the [Simulator](simulator.html) and/or right on your iOS [device](install-device.html) (iPhone and iPad).

</details>


<details>
<summary>
**Do I need to create special iOS templates to build my apps on an iPhone or iPad?**
</summary>

All of templates available in 4D for iOS are optimized for the iPhone. They also work well on iPads.

</details>



<details>
<summary>
	 **Do I need an Apple Developer Account?**
</summary>

To test your app on an iOS device, you'll need to create at least a [free Apple Developer account](free-developer-account.html).

To deploy a 4D for iOS app, you'll need to enroll in the [Apple Developer Enterprise Program](register-apple-developer-enterprise-program.html) (for an in-house deployment) or in the [Apple Developer Program](register-apple-developer-program-organization.html) (for an App Store deployment).

</details>

<details>
<summary>
**Can I customize my 4D for iOS app?**
</summary>

4D for iOS generates a real Xcode project that you can [open and modify](open-xcode.html) according to your needs. 

</details>




