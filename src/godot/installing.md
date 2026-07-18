---
layout: base.njk
title: "Part 1 - Installing Godot"
hideBackToTop: true
---

Installation guide for <a href="https://godotengine.org" target="_blank" rel="noopener noreferrer"><strong>Godot version 4.7.1 </strong></a> On Windows 11, MacOS and Linux.

## Windows & MacOS

Click on the Download Latest link and download <strong>Godot Engine 4.7.1</strong>. If you want C# support for your game, click and download <strong>Godot Engine - .NET</strong>. C# and .NET support is available on Windows, MacOS and Linux.

After downloading in Windows, extract the .zip folder to your desired location and double click on `Godot_v4.7.1-stable_win64.exe`. Godot should open open immediately.

On MacOS, extract the .zip file to your desired location and `Godot.app` should appear. Click on Open in the prompt and Godot will start.

## Linux

For manual setup download and extract to your desired location:
```bash
unzip Godot_v4.7.1-stable_linux.x86_64.zip
chmod +x Godot_v4.7.1-stable_linux.x86_64  # to give executable permissions
sudo mv Godot_v4.7.1-stable_linux.x86_64 /usr/local/godot  # to install globally on your system
#or
mv Godot_v4.7.1-stable_linux.x86_64 ~/.local/bin/godot # to install for your user only
```
Now run your terminal and simply type:

```bash
~ sudo godot # if you installed globally
#or
~ godot # if you installed for your user
```

<h3>Debian, Ubuntu</h3>

```bash
sudo apt install godot  # Ubuntu
sudo apt install godot3 # Debian
```
<h3>Fedora</h3>

```bash
sudo dnf install godot
```
<h3>Arch Linux</h3>

```bash
sudo pacman -S godot    #standard
sudo pacman -S godot-mono   # .NET/C# build
```
<h3>Distro-agnostic</h3>

```bash
flatpak install flathub org.godotengine.Godot   # standard build
flatpak install flathub org.godotengine.GodotSharp    # C#/.NET build
```