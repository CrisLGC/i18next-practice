i18next
  .use(i18nextHttpBackend) // Usa el backend HTTP para cargar archivos JSON
  .init({
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Idioma de respaldo si no se encuentra la traducción
    debug: true, // Muestra información de depuración en la consola
    backend: {
      loadPath: '/locales/{{lng}}.json' // Ruta de los archivos de traducción
    }
  }, function(err, t) {
    updateContent(); // Actualiza el contenido traducido al inicializar
  });

// Función para actualizar el contenido de todos los elementos con el atributo data-i18n
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(function(element) {
    const key = element.getAttribute('data-i18n'); // Obtiene la clave de traducción
    element.innerHTML = i18next.t(key); // Asigna el texto traducido al elemento
  });
}

// Evento para cambiar el idioma cuando el usuario selecciona otro en el selector
document.getElementById('languageSwitcher').addEventListener('change', function(e) {
  i18next.changeLanguage(e.target.value, updateContent); // Cambia el idioma y actualiza el contenido
});