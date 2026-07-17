---
layout: base.njk
title: "Part 1 - Installing Blender"
hideBackToTop: true
---

Installation guide for <a href="https://www.blender.org/download" target="_blank" rel="noopener noreferrer"><strong>Blender version 5.2 LTS</strong></a> On Windows 11, MacOS and Linux.

<h2>Windows & MacOS</h2>

Select the appropriate installer for x86, ARM or Apple Silicon depending on your CPU architecture. Click Download Blender. Once downloading is finished on Windows, click on the .msi file and follow the installation prompts. On MacOS, click on the .dmg file, drag the Blender.app icon to the Applications folder.

<h2>Linux</h2>

For manual setup, select Linux on the dropdown and download the .tar.xz file. Extract the file to your desired location:
```bash
/your/file/location/ tar -xf blender-5.2.0-linux-x64.tar.xz
/your/file/location/blender-5.2.0/blender
```

<h3>Debian, Ubuntu, Mint</h3>

```bash
sudo apt update
sudo apt install blender
```
<h3>Fedora</h3>

```bash
sudo dnf install blender
```
<h3>Arch Linux</h3>

```bash
sudo pacman -S blender
```
<h3>Distro-agnostic (Snap or Flatpak)</h3>

```bash
flatpak install flathub org.blender.Blender

or

sudo snap install blender --classic
```