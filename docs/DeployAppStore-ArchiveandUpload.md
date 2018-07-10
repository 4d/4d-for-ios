---
id: deploy-app-store-archive-and-upload
title: Archive and upload your Project
sidebar_label: Archive and upload your Project
---

<div markdown="1" class = "objectives">
<b>OBJECTIVES</b>

* Archive and upload your project to App Store Connect
</div>


## STEP 1. Xcode configuration
* If you have chosen an Apple Developer Account as an individual, your account is immediately available. 
* If your have chosen an Apple Developer Account as an organization, you must wait for Apple validation.
* When your account is accessible, add it to Xcode in Preferences > Accounts.
* Xcode will automatically install the necessary provisioning and certificates. 

## STEP 2. Get your Team ID

* Log into your Apple Developer Account. You can find your Team ID in Membership.

![alt-text](assets/deploy-in-house/Team-ID-4D-for-iOS.png)

## STEP 3. 4D for iOS configuration

* Launch 4D for iOS

* On the SECTIONS tab:

<b>General: Enter your Team ID</b>

![alt-text](assets/deploy-app-store/Team-ID.png)

<b>Publishing: Enter your production URL</b> 

(HTTPS is mandatory for deployment).


![alt-text](assets/deploy-app-store/Publishing.png)
 
* On the BUILD tab:

<b>Build and Run: Build your Project</b>

![alt-text](assets/deploy-app-store/BuildTab.png)


## STEP 4. Open your project with Xcode 

* From the 4D for iOS Project Editor's BUILD tab, click on Project > Open the project with Xcode

![alt-text](assets/deploy-in-house/Open-your-project-Xcode-4D-for-iOS.png)

## STEP 5. Archive your project from Xcode

* From Xcode go to the simulator Menu and select <b>Generic iOS Device</b>.

![alt-text](assets/deploy-in-house/Deployment-Generic-iOS-Device.png)

* Then from the menu, click on Product and select <b>Archive</b>

![alt-text](assets/deploy-in-house/Archive-your-Project.png)

## STEP 6. Validate your project

* At the end of the archive process, the Organizer window appears with the archive you have just created.

* Click on the <b>Validate</b> button to start the validation process.

![alt-text](assets/deploy-app-store/Organizer-Project-Validation.png)

* The first step is selecting the App Store distribution options.

![alt-text](assets/deploy-app-store/App-Store-Distribution-options.png)

* Then you need to re-sign your app. Let Xcode manage this by  checking the <b>Automatically manage signing</b> option.

![alt-text](assets/deploy-app-store/Re-sign-your-App.png)

* Review your app's content.

![alt-text](assets/deploy-app-store/Review-App.png)

* If your project passes the validation process, you should see this message:

![alt-text](assets/deploy-app-store/Archive-validation-complete.png)

If an error occurs a message will be displayed. These errors must be resolved before attempting the validation process again.

* Click <b>Done</b>. This will return you to the Organizer window.


## STEP 7. Upload to App Store

Once the validation process has been completed, you're ready to add your app to the App Store.   

* Click the <b>Upload to App Store</b> button.

![alt-text](assets/deploy-app-store/Upload-to-AppStore.png)

* When your project has been successfully uploaded, you'll see this window:

![alt-text](assets/deploy-app-store/upload-Successful.png)


## STEP 8. Select the build for the App Store 

* From App Store Connect > App Store > iOS App, select your app and click the <b>+</b> button that appears in the Build section

![alt-text](assets/deploy-app-store/Add-build-app-store-connect.png)

* Select the build you want to submit and click <b>Done</b>.

![alt-text](assets/deploy-app-store/Select-build-app-store-connect.png)

* Finally, click on the <b>Submit for Review</b> button.


## STEP 9. Submit for Review

* The final step to submitting your app for review is answering a few quick questions about your app. 

![alt-text](assets/deploy-app-store/Export-Compliance-Content-Rights-Advertising-Identifer.png)

* When you've finished with the questions, click <b>Submit</b>.

* The average App Store review time is around two days!
