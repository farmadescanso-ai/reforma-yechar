/**
 * Carga los datos oficiales del panel (incluye JOYFA) en localStorage.
 * Uso en https://reforma-yechar.pages.dev/ → F12 → Consola:
 *   var s=document.createElement('script');s.src='https://raw.githubusercontent.com/farmadescanso-ai/reforma-yechar/main/tools/cargar-datos-actuales.js';document.head.appendChild(s);
 */
(function () {
  var URL = 'https://raw.githubusercontent.com/farmadescanso-ai/reforma-yechar/main/data/reforma-yechar-data-actual.json';
  var VER = '2026-06-02-joyfa-v2';

  function ok(d) {
    return d && Array.isArray(d.presupuestos) && d.presupuestos.some(function (p) {
      return (p.codigoProveedor || '') === 'JOYF' || String(p.proveedor || '').toUpperCase().indexOf('JOYFA') >= 0;
    });
  }

  if (window.__reformaYecharCargandoDatos) return;
  window.__reformaYecharCargandoDatos = true;

  fetch(URL, { cache: 'no-store' })
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    })
    .then(function (text) {
      if (text.trim().charAt(0) === '<') throw new Error('Respuesta no es JSON (¿página antigua en caché?)');
      var d = JSON.parse(text);
      if (!ok(d)) throw new Error('El JSON no contiene JOYFA MOBILIARIO');
      localStorage.setItem('reforma-yechar-data', JSON.stringify(d));
      localStorage.setItem('reforma-yechar-data-version', VER);
      alert('Datos actualizados (JOYFA incluido). La página se recargará.');
      location.reload();
    })
    .catch(function (e) {
      window.__reformaYecharCargandoDatos = false;
      alert('No se pudieron cargar los datos:\n' + e.message + '\n\nPrueba de nuevo o importa manualmente el JSON desde GitHub.');
      console.error(e);
    });
})();
