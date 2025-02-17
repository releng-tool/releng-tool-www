---
layout: home
---

releng-tool aims to provide a way for developers to tailor the building
of multiple software components to help prepare packages for desired
runtime environments (e.g. cross-platform portable packages, embedded
targets, etc.). When building a package, assets may be located in
multiple locations and may require various methods to extract, build and
more. releng-tool allows developers to define a set of packages,
specifying where resources should be fetched from, how packages should
be extracted and the processes for patching, configuring, building and
installing each package for a target sysroot.

{:refdef: style='text-align: center;'}
![overview]({{site.baseurl}}/assets/overview.png)
{: refdef}

The structure of a package depends on the specific project. The simplest
type is a script-based package, where users can define custom scripts for
various stages. A package does not need to handle every stage. Helper
package types are available (e.g. Autotools, Cargo, CMake, Make, Meson,
various Python types and SCons) for projects using common build systems.

For detailed information on releng-tool, please see
[releng-tool's documentation][releng-tool documentation].

Requirements
============

* [Python][python] 3.9+

Host tools such as [Git][git], scp, etc. may be required depending on the
project being processed (e.g. if a package's sources fetch from a Git source,
a Git client tool is required to perform said fetch).

Installation
============

<a href="https://pypi.org/project/releng-tool/">
    <img src="https://badgen.net/pypi/v/releng-tool?label=PyPI" alt="" />
</a>
<img src="https://badgen.net/static/Python/3.9+" alt="" />

This tool can be installed using [pipx]:

~~~ bash
pipx install releng-tool
~~~

Alternatively, this tool can be installed or updated using [pip]:

~~~ bash
pip install -U releng-tool
~~~

If the `pip` entry point is not available on the host system, this tool
can be installed/updated as follows:

~~~ bash
python -m pip install -U releng-tool
~~~

This package is also available on:
- [Arch User Repository (AUR)][aur]

Usage
=====

A user can invoke a project build using the following:

~~~ bash
releng-tool
~~~

If the `releng-tool` entry point is not available on the host system, the
tool can be invoked as follows:

~~~ bash
python -m releng-tool
~~~

Examples
========

Examples of releng-tool projects can be found in
[releng-tool's examples repository][releng-tool examples].


[aur]: https://aur.archlinux.org/packages/releng-tool/
[git]: https://git-scm.com/
[pip]: https://pip.pypa.io/
[pipx]: https://pipx.pypa.io/
[python]: https://www.python.org/
[releng-tool documentation]: https://docs.releng.io/
[releng-tool examples]: https://github.com/releng-tool/releng-tool-examples
