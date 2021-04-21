---
id: forms
title: Forms
---

The Forms section allows you to select both list and detail form templates for each table.

4D for iOS provides various templates with custom transition effects to build modern iOS applications.

Here's the breakdown of this screen, from top to bottom:

* **List and Detail Forms:** Allows switching between list and detail form definitions for each table.
* **Published tables:** Displays all tables published in the Structure section. 
* **Available Forms:** Allows switching between template selection and content definition.

![List form template selection](assets/en/project-editor/Forms-section-templates-selection-4D-for-iOS.png)

## List Form definition

It's very simple, empty templates are used by default for an app's list and detail forms.

Select a template for your first table.
The content definition screen appears.
You can then drag and drop the fields from the Fields list directly onto the Model displayed on the right.
Most of the list forms include optional Search and Section fields.

![List form content definition](assets/en/project-editor/Forms-section-content-definition-4D-for-iOS.png)

About the Search field, a really nice Barcode search feature was added in the R6 version.

To activate it, just click on the magnifying glass and check the **Barcode Scanner** option!

![Barcode Search activation](assets/en/project-editor/project-editor-Qrcode-barcode-search-4D-for-iOS.gif)

This feature will allow:

* Filtering a list form by scanning a Barcode that contains a text value. This will fill the Search Bar and open the detail form if there is only one value left after filtering.
* Displaying specific list and detail forms by simply scanning a barcode which values are URL Schemes or Universal Links after [Deep linking](deep-linking) feature activation.

![Barcode Search app](assets/en/project-editor/text-Qrcode-barcode-search-4D-for-iOS..gif)


## Detail Form definition

![Detail form template selection](assets/en/project-editor/Forms-section-detail-form-templates-selection-4D-for-iOS.png)

As for the List Form definition, select a template and add your fields onto your detail form.

There are several ways to add your fields in Detail forms:

* You can drag and drop fields anywhere into the SVG view to add it and display it just after the last added field or between any other field that is already displayed.

* Double-click on a field. It will be added to the list.

* Right-click on one of the fields that are available in the Fields table at the left: this will display a menu to add all missing fields to your Detail forms.

![Detail form content definition](assets/en/project-editor/Forms-section-detail-form-content-definition-4D-for-iOS.png)

You can add as many fields for most of the detail forms available.

And at any moment, you can reorder your field by selecting it and dropping it at any place in your detail form.

> **TIPS**
>
> * Want to change the template for your list or detail form? 
>
> * Field types are automatically recognized, saved, and placed in the appropriate areas for you (depending on the template and field types) when you change templates.


## Gallery

You probably noticed that, when you want to select a template in the form section, a "More" icon is available for both list and detail forms since 4D v18R3.

![More template button](assets/en/project-editor/Forms-more-button.png)

Just click on that icon to display the entire list.

![Template picker more button](assets/en/project-editor/Forms-template-gallery.png)

Then, the only thing you need to do is selecting the template that suits your needs and 4D for iOS will handle all the installation process to help you work faster and more efficiently.

You can now start working on the template, as it is ready-to-use!

> **TIPS**
>
> The Gallery is also available [online](https://4d-for-ios.github.io/gallery/).


## Where to go from here?

Next step: choose a template that suits your needs, and in case something is missing, a [tutorial](gallery-template-update.html) will help you making a **template update**.
