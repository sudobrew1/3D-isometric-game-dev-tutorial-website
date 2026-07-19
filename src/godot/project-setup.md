---
layout: base.njk
title: "Part 1 - Creating a New Project"
---

Let's get started with creating a new project for our pre-rendered isometric game. Open up Godot and follow the steps below.

### 1. Getting Started

After Opening Godot, the Project Manager will appear. Click the Create button in the upper left hand corner to create a new Godot project. Name your project and select a project path for your game to live in. Choose `Forward+`. Mobile and Compatibility are not going to be covered in this tutorial. If you would like to include a Version Control system, select `Git` from the dropdown menu. Keep the `Edit Now` box checked and click Create.

<figure>
    <a href="/images/godot-project-setup-screen.png" class="lightbox">
        <img src="/images/godot-project-setup-screen.png" alt="Godot project setup screen"
            width="2021" height="1404" loading="lazy">
    </a>
</figure>

### 2. Selecting the Root Node

For our game, we need to it to be 2D instead of 3D. In the upper-right hand corner, underneath Create Root Node, select `2D Scene`. Your editor should now look like this:

<figure>
    <a href="/images/godot-node2d-scene.png" class="lightbox">
        <img src="/images/godot-node2d-scene.png" alt="Godot Node2D screen"
            width="3822" height="2023" loading="lazy">
    </a>
</figure>