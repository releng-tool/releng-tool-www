---
layout: home
lang: es
desc_documentation: Documentación
desc_news: Noticias
desc_sources: Fuentes
---

releng-tool tiene como objetivo proporcionar un método para preparar un entorno
estructurado para asistir en la ingeniería de releases de un proyecto. Cuando se
trata de la ingeniería de releases de un proyecto, los elementos pueden
encontrarse en múltiples ubicaciones y pueden requerir varios métodos de
extracción, construcción y más. Se puede utilizar releng-tool para procesar un
conjunto definido de proyectos que identifica dónde se pueden obtener los
recursos, cómo se pueden extraer los paquetes y los métodos para parchear,
configurar, construir e instalar cada paquete individual para una raíz de
destino.

{:refdef: style='text-align: center;'}
![overview]({{site.baseurl}}/assets/overview.png)
{: refdef}

Requisitos
==========

* [Python] 3.9+

Es posible que se necesiten herramientas de host como [Git], scp, etc.,
dependiendo del proyecto que se esté procesando (por ejemplo, si las fuentes de
un paquete se obtienen de una fuente Git, se necesita una herramienta cliente
Git para realizar dicha obtención).

Instalación
===========

Esta herramienta se puede instalar usando [pipx]:

~~~ bash
pipx install releng-tool
~~~

Esta herramienta se puede instalar usando [pip]:

~~~ bash
pip install -U releng-tool
~~~

Si el punto de entrada ``pip`` no está disponible en el sistema host, esta
herramienta se puede instalar de la siguiente manera:

~~~ bash
python -m pip install -U releng-tool
~~~

Uso
===

Un usuario puede invocar una compilación de proyecto utilizando lo siguiente:

~~~ bash
releng-tool
~~~

Si el punto de entrada ``releng-tool`` no está disponible en el sistema host, la
herramienta puede invocarse de la siguiente manera:

~~~ bash
python -m releng-tool
~~~

Para obtener información detallada sobre la guía del usuario del proyecto
releng-tool, consulte la [documentación del usuario releng-tool].

Desarrollo de un proyecto releng-tool
=====================================

<a href="https://pypi.org/project/releng-tool/">
    <img src="https://badgen.net/pypi/v/releng-tool?label=PyPI" alt="" />
</a>
<img src="https://badgen.net/static/Python/3.9+" alt="" />

Un proyecto releng-tool puede definir múltiples paquetes, cada uno de los cuales
puede estar basado en diferentes idiomas, configurado para usar cadenas de
herramientas personalizadas y más. Para más detalles sobre la creación de un
proyecto releng-tool, consulte la [documentación del desarrollador releng-tool].

Ejemplos
========

Ejemplos de proyectos releng-tool se pueden encontrar en el
[repositorio de ejemplos de releng-tool].

[Git]: https://git-scm.com/
[Python]: https://www.python.org/
[documentación del desarrollador releng-tool]: https://docs.releng.io/developer-guide.html
[documentación del usuario releng-tool]: https://docs.releng.io/user-guide.html
[pip]: https://pip.pypa.io/
[pipx]: https://pipx.pypa.io/
[repositorio de ejemplos de releng-tool]: https://github.com/releng-tool/releng-tool-examples
