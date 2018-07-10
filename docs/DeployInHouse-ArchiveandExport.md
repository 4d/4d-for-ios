---
id: deploy-in-house-archive-and-export
title: Archive and export your Project
sidebar_label: Archive and export your Project
---

<div markdown="1" class = "objectives">
<b>OBJECTIVES</b>

* Archive and export your 4D for iOS project
* Generate .ipa and manifest files
</div>

<div markdown="1" class = "prerequisites">
<b>PREREQUISITES</b>

* A secured web server
* 57 x 57 px icon
* 512 x 512 px icon

</div>

## STEP 1. Xcode configuration

Following validation of your account by Apple, open Xcode and add your Apple Enterprise Developer account in Preferences > Accounts.

Xcode will automatically install required provisioning and certificates. 

## STEP 2. Get your Team ID

* Log into your Apple Developer Account. You can find your Team ID in Membership.

![alt-text](assets/deploy-in-house/Team-ID-4D-for-iOS.png)

## STEP 3. 4D for iOS configuration

* Launch 4D for iOS 

* On the SECTIONS tab:

	* General: Enter your Team ID.
	
	![alt-text](assets/deploy-in-house/Enterprise-Team-ID.png)

	* Publishing: Enter your production URL (HTTPS is mandatory for deployment).

* On the BUILD tab:
	* Build and Run: Build your project.

## STEP 4. Open your project with Xcode 

* From the 4D for iOS Project Editor's BUILD tab, click on Project > Open the project with Xcode

![alt-text](assets/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## STEP 5. Archive your project from Xcode

* From Xcode, go to the simulator Menu and select <b>Generic iOS Device</b>

![alt-text](assets/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Then from the menu, click on Product and select <b>Archive</b>

![alt-text](assets/deploy-in-house/Archive-your-Project.png)

## STEP 6. Export your project

* At the end of the archive process, the Organizer window appears with the archive you just created

* Click <b>Export</b>. 

![alt-text](assets/deploy-in-house/Organizer-window-archive.png)

## STEP 7. Select your distribution method

* Select <b>Enterprise</b> and click <b>Next</b>.

![alt-text](assets/deploy-in-house/Distribution-Method-selection.png)

## STEP 8. Select your Enterprise distribution options

* You can leave all option boxes checked.

![alt-text](assets/deploy-in-house/Enterprise-distribution-options.png)

* You can choose to let Xcode generate a manifest.plist file for you or generate it manually.

* Click <b>Next</b>.


####What is a manifest?

The manifest is an XML-based property list and should contain:

* <b>URL</b> : URL pointing to the .ipa file.
* <b>display-image</b>: URL pointing to a 57 x 57 px (72 x 72 px for iPad) PNG icon used during download and installation.
* <b>full-size-image</b>: URL pointing to a 512 x 512 px PNG image representing the iTunes app.
* <b>bundle-identifier</b>: Your app identifier string. You can get it from your app's .plist file.
* <b>bundle-version</b>: Your app's current bundle version string. You can get it from your app's .plist file.
* <b>title</b>: Your app's name.

Here is an example of a manifest.plist file :

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>items</key>
	<array>
		<dict>
			<key>assets</key>
			<array>
				<dict>
					<key>kind</key>
					<string>software-package</string>
					<key>url</key>
					<string>https://...Contact.ipa</string>
				</dict>
				<dict>
					<key>kind</key>
					<string>display-image</string>
					<key>url</key>
					<string>https://...Contact_icon_57.png</string>
				</dict>
				<dict>
					<key>kind</key>
					<string>full-size-image</string>
					<key>url</key>
					<string>https://...Contact_icon_512.png</string>
				</dict>
			</array>
			<key>metadata</key>
			<dict>
				<key>bundle-identifier</key>
				<string>com.contactApp.ContactDemoapp</string>
				<key>bundle-version</key>
				<string>1.0</string>
				<key>kind</key>
				<string>software</string>
				<key>title</key>
				<string>Contact Demo app</string>
			</dict>
		</dict>
	</array>
</dict>
</plist>
```


## STEP 9. Distribution manifest information

* We recommand letting Xcode do the job of entering your app URL as well as the icons URLs. You will, of course, have the option to change those URLs later.

![alt-text](assets/deploy-in-house/Distribution-manifest-information.png)

* Click <b>Next</b>. 


## STEP 10. Re-sign your application

* Let Xcode manage the <b>Automatically manage signing</b> option.

![alt-text](assets/deploy-in-house/Re-sign-your-application.png)

* Click <b>Next</b>.

## STEP 11. Review your app.ipa content

* Here you can verify that your application identifier is correct as well as your Team ID.

![alt-text](assets/deploy-in-house/Review-ipa-content.png)

* Click on <b>Export</b> and select where to save your app folder on your computer.






