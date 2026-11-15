# iluminarIA · Landing independiente

Producto de FORZA TECH. React + TypeScript + Vite. Sin backend, autenticación ni conexiones a los proyectos hermanos. Todos los recursos de ejecución son locales. No se publicó ni desplegó.

## Ejecutar

Requiere Node.js 20.19+ o 22.12+ y npm.

```powershell
cd "D:\Users\Franco\EnergIA Sur\MVP_energIA_sur\iluminaria_landing"
npm install
npm run dev
```

URL: http://127.0.0.1:5178. Se usa `strictPort`: si está ocupado, Vite falla sin interferir con otros servicios. Para otro puerto: `npm run dev -- --port 5180`.

```powershell
npm run check
npm run build
npm run preview
```

`build` comprueba TypeScript y genera `dist/`. `preview` sirve la compilación en el mismo puerto; detener antes el servidor de desarrollo.

## Futuro acceso

Copiar `.env.example` a `.env.local`, completar solo `VITE_APP_LOGIN_URL=https://direccion-real-del-acceso` y reiniciar Vite (recompilar al publicar). Es configuración pública, no colocar secretos. `src/config.ts` centraliza la validación: solo URLs absolutas HTTP(S), sin credenciales incrustadas. Vacía o inválida abre el modal “El acceso a la plataforma estará disponible próximamente”. El modal nativo mantiene el foco, admite Escape y devuelve el foco al activador. No se piden credenciales ni se almacena información.

## Contenido y recursos

- Textos de beneficios y FAQ: `src/content.ts`. Resto de secciones y componentes: `src/App.tsx`. Estilos y puntos de corte: `src/styles.css`.
- **Reales:** `public/assets/lumi-greeting.png` y `lumi-analyzing.png`, copias independientes de los originales transparentes de `energia_sur_frontend/public/assets/lumi/`. No se alteraron las poses ni proporciones.
- **FORZA TECH:** `public/assets/forza-tech.png` es el PNG oficial adjuntado por el usuario. Se utiliza sin recrear ni modificar en cabecera y footer, sobre superficie clara. La ruta se centraliza en `src/config.ts`.
- **Medidor:** no se encontró una foto local del equipo. `Meter` es un esquema CSS de un equipo monofásico de riel DIN, sin marca, modelo ni afirmaciones de compatibilidad. Está rotulado como ilustración. Para sustituirlo, copiar una fotografía autorizada a `public/assets/medidor.webp` y reemplazar el componente por un `img` con `width`, `height`, `object-fit:contain` y un texto alternativo fiel. Confirmar equipo y compatibilidad antes de cambiar el texto.
- **Dashboard:** interfaz creada para la landing; datos ficticios en formato argentino, no conexión activa. Las pestañas de cada demostración son independientes. La curva diaria es potencia en kW; 8,4 kWh es energía acumulada, no potencia. Proyección ilustrativa: 240 kWh frente a un objetivo de 260 kWh. Aviso de tensión ilustrativo, sin indicar que sea un umbral universal. No se copiaron capturas con posibles datos privados.
- **Lumi:** se revisaron `energIA_sur_machine_learning/README.md`, `docs/AUDIT-RUTINAS.md` y la estructura del servicio. Hay reglas, perfiles estadísticos y rutinas condicionadas por cobertura; la auditoría no acredita un modelo de consumo entrenado ni reconocimiento de aparatos. Se describe ese alcance y se presenta el ML como desarrollo pendiente de validación. La conversación mostrada es un ejemplo editorial, no una respuesta del servicio.
- Enchufes inteligentes e industria: solo posibilidades futuras sujetas a validación.
- Favicon y `social.svg`: recursos vectoriales de la nueva identidad, no logos de FORZA TECH. Al publicar, actualizar `og:image` a una URL absoluta servida desde el dominio real y, si hace falta por compatibilidad con redes, exportar `social.svg` a PNG 1200×630. No se inventó URL canónica de producción.

## Accesibilidad y rendimiento

Navegación semántica, enlace para saltar al contenido, foco visible, menú móvil con estado expandido, FAQ nativa, diálogo nativo y etiquetas de botones. Animación solo de flotación y hover; `prefers-reduced-motion` desactiva ambas. Dimensiones de imágenes reservadas y carga diferida fuera del hero. Sin fuentes remotas, servicios externos ni formularios simulados.

## Alcance

Solo se crearon archivos dentro de `iluminaria_landing`. Los proyectos frontend, backend y ML se consultaron en modo lectura. No se migró su marca ni se cambiaron variables de entorno.

## Volver arriba

Botón flotante accesible que aparece después de 400 px de desplazamiento. Funciona con teclado, devuelve el foco a la marca de la cabecera y usa desplazamiento instantáneo cuando está activado `prefers-reduced-motion`. Se adapta a celulares y no tapa los controles de la demostración.

## Repositorio

Origen: https://github.com/fbiason/iluminaria.git. La raíz del repositorio es esta carpeta independiente. `node_modules/`, `dist/`, `.env*` privados y capturas de QA están excluidos; `.env.example` público sí se incluye.

## Consumo y comunicación de Lumi

La pestaña Consumo reproduce la estructura de `ConsumptionView.tsx` de la app: “Cuánto gastaste de luz”, electricidad usada y referencia de cargos eléctricos. `src/ConsumptionDemo.tsx` permite alternar Hoy, 7 días y 30 días. Importes ARS en negrita y formato argentino. Tarifa sintética: cargo fijo de $180 + $120/kWh (sin impuestos ni créditos); consumos 8,40 / 58,80 / 252,00 kWh, referencias $1.188,00 / $7.236,00 / $30.420,00. No son tarifas vigentes ni una factura. Se conserva la identificación de demostración y no se accede a datos reales.

“Lumi aprende de vos” se refiere a perfiles estadísticos de consumo y hábitos confirmados por el usuario, según la auditoría de rutinas existente; no afirma entrenamiento validado ni reconocimiento automático de aparatos. Se destacan avisos de alta y baja tensión según límites configurados. Los ejemplos de Alertas usan dos momentos distintos y límites ficticios de 210/240 V, sin presentarlos como valores universales. La conversación es editorial e ilustrativa, con una propuesta concreta de comparación de horarios.
