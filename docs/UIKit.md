
---
id: uikit
title: UIKit
sidebar_label: iOS UI Framework
---


# What is the UIKit framework?

The UIKit is the framework provides the graphical user interface components for your native iOS apps. 

🔗 [Apple documentation](https://developer.apple.com/documentation/uikit)

:bulb: **What is a framework?**

A framework is a modular and reusable set of code that is used as the building blocks of higher-level pieces of software.

## The "main" components

### Component used to display data 

To display records fields data, 4D for iOS use mainly two components `UILabel` and `UIImageView`.

#### UILabel

ℹ️ `UILabel` is the principal element used to display **text** on iOS app.

🔗 [Apple documentation](https://developer.apple.com/documentation/uikit/uilabel)

⬅️ We assign `String` type to its `text` attribute.

All other data type must be converted to `String` before assigning it.
* For instance a `Date` could be formmatted using a `DataFormatter`

#### UIImageView

ℹ️ `UIImageView` is the principal element used to display **text** on iOS app.

🔗 [Apple documentation](https://developer.apple.com/documentation/uikit/uiimageview)

⬅️ We assign `UIImage` type to its `image` attribute.

##### URL

An image could be download from `URL`. The attribute to assign is `webURL`.

##### Rest

4D for iOS use information from 4D rest API. The attribute is `restImage`, which launch a download the image from 4D server.

### Others components

#### UITableViewController & UITableView

A table view displays lists of information.

:bulb: 4D for iOS provide `ListFormTable` to display a list of records

#### UICollectionViewController & UICollectionView

Very similar to `UITableView` but with more customization called layout. We could arrange view in different way.

:bulb: 4D for iOS provide `ListFormCollection` to display a list of records

#### UITabBarController

Allow to displays tabs at the bottom of the window for selecting between the different views.

##### UITabBarItem

One button element of the bottom tab to select a view.

#### UINavigationController

Manage the navigation of hierachical content.

##### UINavigationBar

The bar displayed at the top of the screen, containg buttongs for navigating or to make action.

#### UIScrollView

Add support for displaying large content with scrolling.
