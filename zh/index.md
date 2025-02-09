---
layout: home
lang: zh
desc_documentation: 文档
desc_sources: 源代码
---

releng-tool 旨在提供一种方法，为结构化环境做充分准备，以协助项目的发布工程。在处理项目的发布工程时，我们可能会在多个位置找到资产，并且可能需要各种方法来提取和构建这些资产。 releng-tool 可用于处理一组已定义的项目，这些项目可识别并获取资源的位置，提供如何提取组件以及为目标根修补，配置，构建和安装每个单独包的方法。


{:refdef: style='text-align: center;'}
![overview]({{site.baseurl}}/assets/overview.png)
{: refdef}

要求
===

* [Python] 2.7 或 3.4+

根据正在处理的项目，我们可能需要加入诸如 [Git]，scp 等主机工具（例如，如果从 Git 源获取组件的源，则需要 Git 客户端工具来执行所述提取）。

安装
===

你可以使用 [pipx] 安装此工具：

~~~ bash
pipx install releng-tool
~~~

你可以使用 [pip] 安装此工具：

~~~ bash
pip install -U releng-tool
~~~

如果主机系统上的 ``pip`` 入口点不可用，则可以按如下方式安装此工具：

~~~ bash
python -m pip install -U releng-tool
~~~

用法
===

用户可以使用以下方法调用项目构建：

~~~ bash
releng-tool
~~~

如果 ``releng-tool`` 入口点在主机系统上不可用，则可以按如下方式调用该工具：

~~~ bash
python -m releng-tool
~~~

有关 releng-tool 项目用户指南的详细信息，请参阅 [releng-tool 用户文档][releng-tool user documentation]。

开发 releng-tool 项目
===================

<a href="https://pypi.org/project/releng-tool/">
    <img src="https://badgen.net/pypi/v/releng-tool?label=PyPI" alt="" />
</a>
<img src="https://badgen.net/static/Python/2.7%20%7C%203.4-3.12" alt="" />

releng-tool 项目可以定义多个组件，每个组件可以基于不同的语言，配置为使用自定义工具链等。有关构建 releng-tool 项目的详细信息，请参阅 [releng-tool 开发商的文档][releng-tool developer documentation]。

例子
===

有关 releng-tool 项目的示例可以在 [releng-tool 的示例存储库][releng-tool examples]中找到。

[Git]: https://git-scm.com/
[Python]: https://www.python.org/
[pip]: https://pip.pypa.io/
[pipx]: https://pipx.pypa.io/
[releng-tool developer documentation]: https://docs.releng.io/developer-guide.html
[releng-tool examples]: https://github.com/releng-tool/releng-tool-examples
[releng-tool user documentation]: https://docs.releng.io/user-guide.html
