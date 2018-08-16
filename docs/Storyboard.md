---
id: storyboard
title: Storyboard
sidebar_label: What is a storyboard?
---


## What is a storyboard?

A storyboard allow you to prototype and design multiple user interfaces for your apps using Xcode.

You can
- manipulate and configure basic user interface elements.
- visualise your screen and application flow.

In apple/Xcode world the application screens are called scene or view controller.

🔗[Apple documentation](https://developer.apple.com/xcode/interface-builder/)

### 4D Form vs storyboard

To simplify 4D for iOS use only one application screen by storyboard.

So one storyboard could be equivalent to a 4D form.

### Format of storyboards

Storyboards are XML files.

So we can read and manipulate it while following the official grammar.

<div markdown="1" class="caution">
There is no Apple specification for the content of this files.

The only things we know is that Xcode produce it, read it and compile it.

⚠️ So be cautious when editing it manually or programmatically.
</div>

<div markdown="1" class="tips">
💡 The command macOS command `ibtool` allow to check the file.
</div>

#### Open source effort

Different open sources framework allow to parse it, as 4D for iOS do:
- https://github.com/IBDecodable/IBDecodable
- https://github.com/krzyzanowskim/Natalie
- https://github.com/SwiftGen/SwiftGen

#### Advanced description of the xml files content.

The file contains first a "document" node, which contains a list of scenes.

Then each "scene" contains a "view controller" with a root "view".

And finally there is under this root "view" a hierarchical tree of views.

<div markdown="1" class="tips">
document
<div markdown="1" class="prerequisites">
scenes
<div markdown="1" class="tips">
scene 1
<div markdown="1" class="prerequisites">
view controller
<div markdown="1" class="tips">
root view
<div markdown="1" class="objectives">
views
…
</div>
</div>
</div>
</div>
<div markdown="1" class = "tips">
scene 2

…
</div>
</div>
</div>
