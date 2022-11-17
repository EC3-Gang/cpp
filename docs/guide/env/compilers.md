# Running Code

## Running Code Locally
You need a compiler to be able to compile C++ programs and run them on your computer. You can either google for installation instructions, or continue reading ⬇️.

### Installing GCC on Linux
If you're a chad Linux user, GCC should have been installed by default. To check, run the following command:
```sh
which g++
```
If you have `g++` installed, you should see something like this:
![GCC installed](/whichg++.gif)
If you get `g++ not found`, you can either install it with your distro's package manager or build it from source.

::: details Installation instructions for certain distros
##### Ubuntu
```sh
sudo apt install build-essential
```

##### Arch Linux
```sh
sudo pacman -S gcc
```

##### OpenSUSE
```sh
sudo zypper install gcc-c++
```

##### Fedora
```sh
sudo dnf install gcc-c++
```

##### Gentoo Linux
```sh
sudo emerge --ask sys-devel/gcc
```

##### Void Linux
```sh
sudo xbps-install gcc
```

##### Alpine Linux
```sh
sudo apk add gcc
```
:::

### Installing Clang
Simply refer to [this](https://releases.llvm.org/download.html).

## For all you vscode simps

### g++ and gdb installation

First check if you have g++ by running the following on cmd:
```sh
g++ --version
```
If g++ has been installed, this should be the following output:
```sh
g++ (GCC) 11.2.0 (note that this can be any other version)
Copyright (C) 2016 (note that the year can also be different) Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```
If it does not print this then you have to download g++.

To download g++, first download msys2 [here](https://www.msys2.org).

After everything has downloaded, launch msys.

Here, type:
```sh
pacman -S --needed base-devel mingw-w64-x86_64-toolchain
```
When prompted, hit enter to download all, or enter "Y" to download.

After downloading, search edit environment variables for your account and hit enter.

Edit your path setting and add the following to it:
```sh
C:\msys64\mingw64\bin
```
Now click ok and close it.

Now, open up a new cmd and type:
```sh
mkdir <insert project name>
cd <insert same project name>
code .
```
This will create a new directory and launch vscode with the directory.

Make sure to install a C++ extension on vscode.

### Running code on vscode

After you have written your code, remember to add the .cpp file extension. Then, press CTRL+SHIFT+B and select the g++ option and wait for the .exe file to build

Now, simply type .\<file> into a new vscode terminal to run the code.
