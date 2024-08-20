---
layout: home
---

releng-tool aims to provide a way to prepare a structured environment to
assist in the building of a project. When dealing with the release
engineering of a project, assets may be found in multiple locations and may
require various methods to extract, build and more. releng-tool can be used to
process a defined set of projects which identifies where resources can be
fetched, how packages can be extracted and methods to patch, configure, build
and install each individual package for a target root.

{:refdef: style='text-align: center;'}
![overview]({{site.baseurl}}/assets/overview.png)
{: refdef}

For detailed information on releng-tool, please see
[releng-tool's documentation][releng-tool documentation].

Requirements
============

* [Python][python] 2.7 or 3.4+

Host tools such as [Git][git], scp, etc. may be required depending on the
project being processed (e.g. if a package's sources fetch from a Git source,
a Git client tool is required to perform said fetch).

Installation
============

<a href="https://pypi.org/project/releng-tool/">
    <img src="https://badgen.net/pypi/v/releng-tool?label=PyPI" alt="" />
</a>
<img src="https://badgen.net/static/Python/2.7%20%7C%203.4-3.12" alt="" />

This tool can be installed or updated using [pip]:

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
[python]: https://www.python.org/
[releng-tool documentation]: https://docs.releng.io/
[releng-tool examples]: https://github.com/releng-tool/releng-tool-examples
