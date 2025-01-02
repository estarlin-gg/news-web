# React News App

Esta es una aplicación web construida con **React** que consume datos de noticias en tiempo real utilizando la API de **NewsAPI**. La aplicación permite a los usuarios buscar y visualizar artículos de noticias de diferentes categorías, tales como **general**, **negocios**, **tecnología**, **deportes**, entre otras.

## Funcionalidades

- **Búsqueda por categoría**: Los usuarios pueden seleccionar una categoría desde un menú desplegable (`select`) para ver las noticias relacionadas con esa categoría.
- **Listado de artículos**: La aplicación muestra un listado de artículos con su título, resumen, imagen y un enlace a la noticia completa.
- **Interactividad sencilla**: Los usuarios pueden elegir diferentes categorías para explorar las noticias que más les interesen.

## Tecnologías utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **NewsAPI**: API pública para acceder a las últimas noticias de diversas fuentes de noticias.
- **Axios**: Cliente HTTP para hacer solicitudes a la API.
- **TailwindCSS**: Framework para diseño de interfaces.

## Cómo funciona

1. **Selección de categoría**: En la interfaz, los usuarios pueden seleccionar una categoría de noticias a través de un `select`.
2. **Mostrar noticias**: Al seleccionar una categoría, la aplicación hace una solicitud a NewsAPI para obtener los artículos más recientes de esa categoría.
3. **Leer artículos**: Los artículos se presentan con un resumen, título, imagen y un enlace para leer más.

Este proyecto es una forma fácil y rápida de acceder a las noticias más relevantes, permitiendo filtrar por temas de interés.

