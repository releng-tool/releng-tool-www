---
layout: home
lang: pl
desc_documentation: Dokumentacja
desc_sources: Źródła
---

Funkcją releng-tool jest przygotowanie odpowiedniego środowiska do wydania
projektu. W trakcie wydawania projektu, zasoby mogą wystąpić w różnych
lokalizacjach i wymagać niejednorodnych sposobów rozpakowania, budowania, itp.
releng-tool pomoże w przetworzeniu określonego zestawu projektów i
zidentyfikuje, gdzie można pobrać zasoby, jak można rozpakować pakiety oraz
metody łatania, konfigurowania, budowania i instalacji pakietów do docelowych
katalogów.

{:refdef: style='text-align: center;'}
![overview]({{site.baseurl}}/assets/overview.png)
{: refdef}

Wymagania
=========

* [Python] 2.7 lub 3.4+

Narzędzia hosta takie jak [Git], scp, itd. mogą być wymagane w zależności od
projektu (np. jeśli źródła pakietu pobiera się z Git, należy posiadać narzędzie
dla klientów Git w celu zainstalowania danego źródła).

Instalacja
==========

releng-tool można zainstalować korzystając z [pip]:

~~~ bash
pip install -U releng-tool
~~~

Jeśli punkt wejścia ``pip`` jest niedostępny w systemie hosta, narzędzie można
również zainstalować w następujący sposób:

~~~ bash
python -m pip install -U releng-tool
~~~

Korzystanie
===========

Użytkownik może wywołać budowę projektu w następujący sposób:

~~~ bash
releng-tool
~~~

Jeśli punkt wejścia ``releng-tool`` jest niedostępny w systemie hosta, narzędzie
można również wywołać poprzez:

~~~ bash
python -m releng-tool
~~~

Aby zapoznać się ze szczegółami dot. przewodnika użytkownika releng-tool,
zapraszamy na stronę z [dokumentacją użytkownika releng-tool].

Tworzenie projektu z releng-tool
================================

<a href="https://pypi.org/project/releng-tool/">
    <img src="https://img.shields.io/pypi/v/releng-tool.svg" alt="" />
</a>
<img src="https://img.shields.io/pypi/pyversions/releng-tool.svg" alt="" />

Projekt releng-tool może zdefiniować wiele pakietów, każdy z nich może być
napisany w innym języku, skonfigurowany w celu korzystania z niestandardowych
toolchainów, itd. Szczegółowe informacje dot. tworzenia projektu z releng-tool
można znaleźć na stronie [dokumentacji programisty releng-tool].

Przykłady
=========

Przykłady projektów releng-tool można znaleźć w rejestrze
[przykładów releng-tool].

[Git]: https://git-scm.com/
[Python]: https://www.python.org/
[dokumentacji programisty releng-tool]: https://docs.releng.io/developer-guide.html
[dokumentacją użytkownika releng-tool]: https://docs.releng.io/user-guide.html
[pip]: https://pip.pypa.io/
[przykładów releng-tool]: https://github.com/releng-tool/releng-tool-examples
