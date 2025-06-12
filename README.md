**# i18next Practice

Esta es una aplicación web sencilla que muestra cómo implementar internacionalización (i18n) en JavaScript usando [i18next](https://www.i18next.com/) y archivos de traducción en formato JSON.

## Características

- Cambio dinámico de idioma entre español e inglés.
- Carga de archivos de traducción desde la carpeta `/locales`.
- Textos traducibles usando atributos `data-i18n` en el HTML.
- Fácil de extender para agregar más idiomas o textos.

## Estructura del proyecto

```
i18next-practice/
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── locales/
│   ├── en.json
│   └── es.json
└── index.html
```

## ¿Cómo ejecutarlo? (usando Live Server en VS Code)

1. **Instala la extension Live Server en VS Code
2. **Abre la carpeta del proyecto en Visual Studio Code.**
3. **Haz clic derecho sobre `index.html` y selecciona “Open with Live Server”**  
   (o haz clic en el botón “Go Live” en la esquina inferior derecha de VS Code).
4. **Se abrirá tu navegador en una dirección como `http://127.0.0.1:5500/`**  
   (la dirección puede variar según tu configuración).
5. Cambia el idioma usando el selector para ver la traducción de los textos.

> **Nota:** Es importante usar Live Server o cualquier servidor local, ya que la carga de archivos JSON de traducción no funciona si abres el archivo HTML directamente (por ejemplo, con `file://`).

## Agregar más idiomas

1. Crea un nuevo archivo JSON en la carpeta `locales` (por ejemplo, `fr.json` para francés).
2. Agrega las claves y traducciones correspondientes.
3. Añade una opción más en el selector de idioma en `index.html`.

## Créditos

- [i18next](https://www.i18next.com/)
- [i18next-http-backend](https://github.com/i18next/i18next-http-backend)
