# Panel de Control - Reforma Yéchar

Panel web para el seguimiento del presupuesto y evolución de la obra de reforma en Yéchar.

## Contenido inicial

Los presupuestos extraídos de tus documentos están precargados:

- **Casa 1 - Fran Lara** (JOFRANJE S.L): 4.648,81 € — Puerta, ventanas cocina, mosquitera
- **Casa 2 - Paco Lara** (JOFRANJE S.L): 9.267,44 € — Carpintería completa
- **Climatización** (Antonio Moreno / Construcciones Muleño): 4.198,81 € — Aire acondicionado
- **Obra Final** (Reformas y Construcciones Muleño): 36.570 € — Reforma vivienda planta baja (sin IVA)
- **Instalación eléctrica** (S.P.G Instalaciones): 4.499 € — Electricidad y telecomunicaciones (B.I., IVA 21%)

**Total presupuestado: ~59.184 €**

## Cómo usar

1. **Abrir el panel**: Abre `index.html` en tu navegador (doble clic o arrastrar al navegador).
2. **Marcar partidas terminadas**: Haz clic en el cuadro junto a cada partida para marcarla como terminada.
3. **Registrar pagos**: Ve a "Registrar pago" y añade importe, fecha y concepto.
4. **Añadir presupuestos**: Si recibes más presupuestos, usa "Añadir presupuesto" para incorporarlos.

## Persistencia

Los datos se guardan en el **localStorage** del navegador. No se envía nada a ningún servidor. Todo queda en tu equipo.

## Estructura

```
reforma-yechar/
├── index.html          # Panel completo (abre este archivo)
├── data/
│   └── presupuestos-inicial.json   # Copia de los datos iniciales
└── README.md
```

## Reiniciar datos

Para volver a los datos iniciales, abre la consola del navegador (F12) y ejecuta:

```javascript
localStorage.removeItem('reforma-yechar-data');
location.reload();
```
