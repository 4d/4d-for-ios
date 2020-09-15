---
id: deep-linking
title: Deep Linking
---

> **OBJECTIVES**
>
> Share the content iOS app contente with your collegues using Deep Linking.

18R5 comes with a new great feature. You are now able to share the content that you are currently looking at with all your collegues. But you will ask how this work ??

Here is an illustration that summarizes deep linking:

![Deep linking animation](assets/en/deeplinking/4d-for-ios-deeplinking.png)

There are 2 ways of implementing deep linking in IOS: **URL scheme** and **Universal Links**. While URL schemes are a well-known way of having deep linking, Universal links are the new way Apple has implemented to easily connect your webpage and your app under the same link.

Here is a comparision between the two options that are offered in the project editor:

## URL Scheme

| PROS  | CONS | 
|---------------|----------------| 
|Easy to implement|Will always ask for permission|
|No extra backen required|Won't work if app is not installed|
|      			|Won't work in Android|

## Universal links

| PROS  | CONS | 
|---------------|----------------| 
|Won't ask for permission|Static backend with sll needed|
|Won't open the browser|More complex to implement|
|Compatible with Android|Won't work in Android|
|Fallback url if app is not installed||

# CUSTOM URL SCHEME

## OLD BUT EFFICIENT WAY

At the simplest level, the URL scheme allows users to open an app from other apps. 

But the true power of URL schemes is in the ability to perform specific actions as your app opens.

## CUSTOM URL SCHEME IN THE PROJECT EDITOR

It is very simple to include url scheme to your 4D for iOS :

1. Select the Share predefine action from the Action section and select the scope : entity to share a detail form content and table to share a list form
2. Activate the Deep Linking feature in the Publishing section fo the project editor
3. The Url Scheme is automatically filled in using the app name that you previously defined in the General section but you can still edit it

![Deep linking Project editor](assets/en/deeplinking/deep-linking-project-editor-publishing-section.png)

4. Fill you On Mobile App Action method 
5. Build your app
6. And thats all you need to do !

There you go ! You are now able to share the content that you are currently looking at with all you collegues. It can be a list form or a detail form.

Here is a example of the On Mobile App Action :

```4d


C_OBJECT($0; $response)
C_OBJECT($1; $request)
$request:=$1  // Informations provided by mobile application
$response:=New object  // Informations returned to mobile application
$action:=New object
$action:=MobileAppServer.Action.new($1)
Case of 
    : ($request.action="shareContact")
        $response:=$action.shareContext()
    Else 
        // Unknown action
End case 
$0:=$response

```

## USING URL SCHEME IN YOUR 4D FOR IOS APP
 
1. click on the action button to display all you current available actions 
2. Select the share action that you previously defined in the project editor
3. A new view that you are already familiar with, to allow yout sharing content appears.
4. Select the way you want to share it
5. Send it

# UNIVERSAL LINKS

## MODERN WAY

Universal links give you several key benefits that you don’t get when you use custom URL schemes. Specifically, universal links are:

* Unique: Unlike custom URL schemes, universal links can’t be claimed by other apps, because they use standard HTTP or HTTPS links to your website.

* Secure: When users install your app, iOS checks a file that you’ve uploaded to your web server to make sure that your website allows your app to open URLs on its behalf. Only you can create and upload this file, so the association of your website with your app is secure.

* Flexible: Universal links work even when your app is not installed. When your app isn’t installed, tapping a link to your website opens the content in Safari.

* Simple: One URL works for both your website and your app.

* Private: Other apps can communicate with your app without needing to know whether your app is installed.

## UNIVERSAL LINKS IN THE PROJECT EDITOR

To include the Universal link logic into your app, you will have to follow quite the same process than for the Url Scheme :

1. Select the Share predefine action from the Action section and select the scope : entity to share a detail form content and table to share a list form
2. Activate the Deep Linking feature in the Publishing section fo the project editor
3. Fill your website url the universal link field
4. Fill you On Mobile App Action method 
5. Build your app
6. Trigger universal links from the the On Web Connection method.

Here is a example of the On Web Connection method :

```4d

$handler:=MobileAppServer.WebHandler.new()
Case of
    : ($handler.handle($1; $2; $3; $4; $5; $6))
        // Managed by default mobile code
    Else
        // your web code
End case

```

So as you can see, this new feature open a large range of possibilities using 4D for iOS with a minimum effort.

//Deep linking is a crucial feature in today’s apps as users consume content faster. This feature allow to bring them directly to the desired location. So I can only advise you to use it in your 4D for iOS apps.

# PUSH NOTIFICATION

The great thing is that Deep Linking is fully working with [push notifications](push-notification.html). This means that you can send Deep links to your users and bring them directly to the right page.

The documentation is [here](https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/18R4/Documentation/Classes/PushNotification.md) to help you manage your push notification and Deep linking feature.




