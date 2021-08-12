---
id: deploy-app-store-archive-and-upload
title: プロジェクトのアーカイブとアップロード
---

> **OBJECTIVES**
> 
> Archive and upload your project to App Store Connect.

## ⒈ ⒈ Xcodeの設定
* If you have chosen an Apple Developer Account as an individual, your account is immediately available.
* If your have chosen an Apple Developer Account as an organization, you must wait for Apple validation.
* When your account is accessible, add it to Xcode in Preferences > Accounts.
* Xcode will automatically install the necessary provisioning and certificates.

## ⒉ ⒉ Team IDを取得する

* Log into your Apple Developer Account. You can find your Team ID in Membership.

![⒉ Team IDを取得する](assets/en/deploy-in-house/Team-ID-4D-for-iOS.png)

## ⒊ ⒊ 4D for iOS configuration

* Launch 4D for iOS
* On the SECTIONS tab:

**General: Enter your Team ID**

![Team ID](assets/en/deploy-app-store/Team-ID.png)

**Publishing: Enter your production URL**

(HTTPS is mandatory for deployment).

![Publishing](assets/en/deploy-app-store/Publishing.png)

* On the BUILD tab:

**Build and Run: Build your Project**

![BuildTab](assets/en/deploy-app-store/BuildTab.png)

## ⒋ ⒋ Open your project with Xcode

* From the 4D for iOS Project Editor's BUILD tab, click on Project > Open the project with Xcode

![⒋ Open your project with Xcode](assets/en/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## ⒌ ⒌ Archive your project from Xcode

* From Xcode go to the simulator Menu and select **Generic iOS Device**.

![Generic iOS Device](assets/en/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Then from the menu, click on Product and select **Archive**

![⒌ Archive your project from Xcode](assets/en/deploy-in-house/Archive-your-Project.png)

## ⒍ ⒍ Validate your project

* At the end of the archive process, the Organizer window appears with the archive you have just created.

* Click on the **Validate** button to start the validation process.

![⒍ Validate your project](assets/en/deploy-app-store/Organizer-Project-Validation.png)

* The first step is selecting the App Store distribution options.

![App Store distribution options](assets/en/deploy-app-store/App-Store-Distribution-options.png)

* Then you need to re-sign your app. Let Xcode manage this by  checking the **Automatically manage signing** option.

![Re-sign your app](assets/en/deploy-app-store/Re-sign-your-App.png)

* Review your app's content.

![App review](assets/en/deploy-app-store/Review-App.png)

* If your project passes the validation process, you should see this message:

![Validation](assets/en/deploy-app-store/Archive-validation-complete.png)

If an error occurs a message will be displayed. These errors must be resolved before attempting the validation process again.

* Click **Done**. This will return you to the Organizer window.

## ⒎ ⒎ Upload to App Store

Once the validation process has been completed, you're ready to add your app to the App Store.

* Click the **Upload to App Store** button.

![⒎ Upload to App Store](assets/en/deploy-app-store/Upload-to-AppStore.png)

* When your project has been successfully uploaded, you'll see this window:

![Upload successful](assets/en/deploy-app-store/upload-Successful.png)

## ⒏ ⒏ Select the build for the App Store

* From App Store Connect > App Store > iOS App, select your app and click the **+** button that appears in the Build section

![Add build](assets/en/deploy-app-store/Add-build-app-store-connect.png)

* Select the build you want to submit and click **Done**.

![Build selection](assets/en/deploy-app-store/Select-build-app-store-connect.png)

* Finally, click on the **Submit for Review** button.

## ⒐ ⒐ Submit for Review

* The final step to submitting your app for review is answering a few quick questions about your app.

![⒐ Submit for Review](assets/en/deploy-app-store/Export-Compliance-Content-Rights-Advertising-Identifer.png)

* When you've finished with the questions, click **Submit**.

* The average App Store review time is around two days!
