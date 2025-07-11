---
layout: home
lang: de
desc_documentation: Dokumentation
desc_news: Nachricht
desc_sources: Quellen
---

releng-tool bietet eine Methode zur Vorbereitung einer strukturierten Umgebung,
um bei der Release-Engineering eines Projekts zu unterstützen. Wenn es um die
Release-Engineering eines Projekts geht, können sich Anlagen an mehreren
Standorten befinden und verschiedene Methoden zum Extrahieren, Erstellen und
mehr erfordern. releng-tool kann verwendet werden, um einen definierten Satz von
Projekten zu verarbeiten, der angibt, wo Ressourcen abgerufen werden können, wie
Pakete extrahiert werden können und Methoden zum Patchen, Konfigurieren,
Erstellen und Installieren jedes einzelnen Pakets für einen Zielbereich.

{:refdef: style='text-align: center;'}
![overview]({{site.baseurl}}/assets/overview.png)
{: refdef}

Anforderungen
=============

* [Python] 3.9+

Host-Werkzeuge wie [Git], scp, etc. können je nach bearbeitetem Projekt
erforderlich sein (z.B. wenn die Quellen eines Pakets aus einerGit-Quelle
stammen, wird einGit-Client-Tool benötigt, um diesen Abruf durchzuführen).

Installation
============

Dieses Werkzeug kann mit [pipx] installiert werden:

~~~ bash
pipx install releng-tool
~~~

Dieses Werkzeug kann mit [pip] installiert werden:

~~~ bash
pip install -U releng-tool
~~~

Wenn der ``pip`` Zugangspunkt auf dem Hostsystem nicht verfügbar ist, kann
dieses Tool wie folgt installiert werden:

~~~ bash
python -m pip install -U releng-tool
~~~

Verwendung
==========

Ein Benutzer kann einen Projekt-Build wie folgt aufrufen:

~~~ bash
releng-tool
~~~

Wenn der Zugangspunkt ``releng-tool`` auf dem Hostsystem nicht verfügbar ist,
kann das Tool wie folgt aufgerufen werden:

~~~ bash
python -m releng-tool
~~~

Detaillierte Informationen zur Bedienungsanleitung des Projekts releng-tool
finden Sie in der [Benutzerdokumentation von releng-tool].


Entwicklung eines releng-tool projekts 
======================================

<a href="https://pypi.org/project/releng-tool/">
    <img src="https://badgen.net/pypi/v/releng-tool?label=PyPI" alt="" />
</a>
<img src="https://badgen.net/static/Python/3.9+" alt="" />

Ein releng-tool-Projekt kann mehrere Pakete definieren, die jeweils auf
verschiedenen Sprachen basieren, die so konfiguriert sind, dass sie
benutzerdefinierte Toolchains und mehr verwenden. Details zum Bau eines
releng-tool-Projekts finden Sie in der
[Entwicklerdokumentation von releng-tool].

Beispiele
=========

Beispiele für Projekte mit releng-tool finden Sie im
[Beispiel-Repository von releng-tool].

[Beispiel-Repository von releng-tool]: https://github.com/releng-tool/releng-tool-examples
[Benutzerdokumentation von releng-tool]: https://docs.releng.io/user-guide.html
[Entwicklerdokumentation von releng-tool]: https://docs.releng.io/developer-guide.html
[Git]: https://git-scm.com/
[Python]: https://www.python.org/
[pip]: https://pip.pypa.io/
[pipx]: https://pipx.pypa.io/
