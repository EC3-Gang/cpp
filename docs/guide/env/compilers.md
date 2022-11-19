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

### Installing G++ on Windows

Unlike Linux, GCC is not pre-installed on Windows.
Instead, you can visit [here](https://jmeubank.github.io/tdm-gcc/download/) and install a `gcc` compiler.
There are different versions for 64-bit and 32-bit editions.

P.S. We don't quite recommend using Windows

### Running C++ with G++

Shouldn't be that hard but in case you didn't know:

```sh
g++ <input file name> -o <output file name> -O2 && ./<output file name>
```

You can alternatively use CMake but that's not the point of this guide.
::: details Example CMakeLists.txt

```cmake
set(CMAKE_CXX_COMPILER g++-12)

cmake_minimum_required(VERSION 3.23)
project(main)

set(CMAKE_CXX_STANDARD 23)

add_executable(main main.cpp)
```

:::

### Installing Clang

Simply refer to [this](https://releases.llvm.org/download.html).
