---
layout: home
---

releng-tool aims to provide a method to prepare a structured environment to
assist in the release engineering of a project. When dealing with the release
engineering of a project, assets may be found in multiple locations and may
require various methods to extract, build and more. releng-tool can be used to
process a defined set of projects which identifies where resources can be
fetched, how packages can be extracted and methods to patch, configure, build
and install each individual package for a target root.

{:refdef: style='text-align: center;'}
![overview]({{site.baseurl}}/assets/overview.png)
{: refdef}

Requirements
============

* [Python] 2.7 or 3.4+

Host tools such as [Git], scp, etc. may be required depending on the project
being processed (e.g. if a package's sources fetch from a Git source, a Git
client tool is required to perform said fetch).

Installation
============

This tool can be installed using [pip]:

~~~ bash
pip install releng-tool
~~~

If the ``pip`` entry point is not available on the host system, this tool can be
installed as follows:

~~~ bash
python -m pip install releng-tool
~~~

Usage
=====

A user can invoke a project build using the following:

~~~ bash
releng-tool
~~~

If the ``releng-tool`` entry point is not available on the host system, the tool
can be invoked as follows:

~~~ bash
python -m releng_tool
~~~

For detailed information on the releng-tool project's user guide, please consult
the [releng-tool user's documentation].

Developing a releng-tool project
================================

<a href="https://pypi.org/project/releng-tool/">
    <img src="https://img.shields.io/pypi/v/releng-tool.svg" alt="" />
</a>
<img src="https://img.shields.io/pypi/pyversions/releng-tool.svg" alt="" />

A releng-tool project can define multiple packages, each can be based off of
different languages, configured to use custom toolchains and more. For details
on building a releng-tool project, please consult the
[releng-tool developer's documentation].

Examples
========

Examples of releng-tool projects can be found in
[releng-tool's examples repository][releng-tool examples].

[Git]: https://git-scm.com/
[Python]: https://www.python.org/
[pip]: https://pip.pypa.io/
[releng-tool developer's documentation]: https://docs.releng.io/developer-guide.html
[releng-tool examples]: https://github.com/releng-tool/releng-tool-examples
[releng-tool user's documentation]: https://docs.releng.io/user-guide.html
