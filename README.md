# Invitación Web - Revelación de Sexo 🤍

Una hermosa invitación web interactiva para la revelación de sexo del bebé de Vanessa Cruz, con diseño elegante en tonos beige y dorado.

## Vista Previa

Esta invitación incluye:

### Diseño Visual
- Paleta de colores beige/crema con acentos dorados
- Animales adorables en acuarela (jirafa, osito, mapache, elefante)
- Nubes decorativas flotantes
- Estrellas doradas colgantes con efecto swing
- Corazones flotantes en tonos pastel
- Moños rosa y azul para predicción de género
- Tipografías elegantes: Great Vibes y Crimson Text
- Diseño 100% responsive (móviles, tablets y computadoras)

### Funcionalidades Interactivas
- **Animación de entrada suave**: Fade in al cargar la página
- **Efecto parallax**: Nubes y estrellas se mueven suavemente al hacer scroll
- **Juego de predicción de género**: Los invitados pueden seleccionar si creen que será niña o niño
- **Confeti de corazones**: Animación cuando se selecciona una predicción
- **Contador de pases**: Sistema +/- para indicar cuántos invitados asistirán (1-10)
- **Mensaje pre-escrito para WhatsApp**: Genera automáticamente un mensaje con:
  - Confirmación de asistencia
  - Número de pases
  - Predicción de género seleccionada
- **Validación de formulario**: Previene errores antes de enviar

### Secciones Incluidas
1. Encabezado con animales animados
2. Mensaje de bienvenida del bebé
3. Detalles del evento (fecha, hora, ubicación)
4. Código de vestimenta con indicaciones de color
5. Juego interactivo de predicción
6. Contador de invitados
7. Mensaje personal de Vanessa
8. Temática de regalos sugeridos
9. Botón de confirmación por WhatsApp
10. Despedida con firma

## Cómo Publicar en GitHub Pages

### Paso 1: Crear una cuenta en GitHub (si no tienes una)
1. Ve a [github.com](https://github.com)
2. Haz clic en "Sign up"
3. Completa el registro

### Paso 2: Crear un nuevo repositorio
1. Inicia sesión en GitHub
2. Haz clic en el botón "+" en la esquina superior derecha
3. Selecciona "New repository"
4. Nombra tu repositorio (por ejemplo: `revelacion-sexo` o `baby-reveal`)
5. Marca la opción "Public"
6. NO marques "Add a README file" (ya tenemos uno)
7. Haz clic en "Create repository"

### Paso 3: Subir los archivos

#### Opción A: Usando la interfaz web de GitHub (más fácil)
1. En tu nuevo repositorio, haz clic en "uploading an existing file"
2. Arrastra los 4 archivos principales:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Escribe un mensaje como "Agregar invitación de revelación"
4. Haz clic en "Commit changes"

#### Opción B: Usando Git (desde la terminal)
```bash
# Navega a la carpeta del proyecto
cd gender-reveal-invitation

# Inicializa git
git init

# Agrega todos los archivos
git add .

# Haz el primer commit
git commit -m "Agregar invitación de revelación de sexo"

# Conecta con tu repositorio de GitHub (reemplaza con tu URL)
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git

# Renombra la rama a main
git branch -M main

# Sube los archivos
git push -u origin main
```

### Paso 4: Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings" (Configuración)
3. En el menú lateral izquierdo, haz clic en "Pages"
4. En "Source", selecciona "Deploy from a branch"
5. En "Branch", selecciona "main" y la carpeta "/ (root)"
6. Haz clic en "Save"
7. Espera 1-2 minutos

### Paso 5: Acceder a tu invitación
Tu invitación estará disponible en:
```
https://TU-USUARIO.github.io/TU-REPOSITORIO/
```

Por ejemplo: `https://vanessa-cruz.github.io/revelacion-sexo/`

## Personalizar la Invitación

### Cambiar información del evento

En el archivo `index.html`, busca y modifica:

**Fecha y hora:**
```html
<p class="event-date">Sábado 24 de Enero de 2026</p>
<p class="event-time">3:00 PM</p>
```

**Nombre de la anfitriona:**
```html
<p class="host-name">Vanessa Cruz</p>
```

**Fecha límite de confirmación:**
```html
<p class="confirmation-text">
    Por favor, confirma antes del <strong>17 de Enero de 2026</strong>
</p>
```

### Cambiar el número de WhatsApp

En el archivo `script.js`, busca esta línea (aproximadamente línea 162):
```javascript
const phoneNumber = '5214776688796';
```

Cambia el número por el tuyo en formato internacional:
- México: `52` + 10 dígitos (ej: `5214771234567`)
- USA: `1` + 10 dígitos (ej: `15551234567`)
- España: `34` + 9 dígitos (ej: `34612345678`)

### Personalizar colores

En el archivo `styles.css`, al inicio encontrarás las variables de color:

```css
:root {
    --beige-fondo: #f5e6d3;      /* Color de fondo */
    --dorado: #d4af37;            /* Dorado para títulos */
    --texto-principal: #8b7355;   /* Color del texto */
    --rosa-pastel: #f4c2c2;       /* Rosa para niña */
    --azul-pastel: #b8d4e8;       /* Azul para niño */
    --gris-suave: #d9d9d9;        /* Gris claro */
    --blanco: #ffffff;            /* Blanco */
    --beige-claro: #fdf8f0;       /* Beige claro */
}
```

Cambia los códigos hexadecimales por los colores que prefieras.

### Modificar el mensaje de WhatsApp

En `script.js`, busca la función `generateWhatsAppMessage()` (línea 172) y personaliza el texto:

```javascript
function generateWhatsAppMessage() {
    const guestWord = appState.guestCount === 1 ? 'pase' : 'pases';
    let message = `¡Hola Vanessa! 🤍\n\n`;
    message += `Confirmo mi asistencia a la revelación de sexo de tu bebé.\n\n`;
    message += `📅 Fecha: 24 de Enero de 2026\n`;
    message += `👥 Asistirán: ${appState.guestCount} ${guestWord}\n`;

    // Personaliza este mensaje como prefieras

    return message;
}
```

### Cambiar límite de invitados

En `script.js`, busca esta línea (aproximadamente línea 143):
```javascript
if (appState.guestCount < 10) {
```

Cambia `10` por el número máximo de invitados por familia que desees permitir.

## Agregar Imágenes Reales

Si tienes imágenes en acuarela profesionales:

1. Crea una carpeta llamada `images` en tu repositorio
2. Sube tus imágenes con nombres como:
   - `giraffe.png`
   - `bear.png`
   - `raccoon.png`
   - `elephant.png`
   - `cloud.png`
   - `star.png`

3. En `index.html`, reemplaza los emojis por imágenes:
```html
<!-- Antes -->
<div class="animal giraffe">🦒</div>

<!-- Después -->
<div class="animal giraffe">
    <img src="images/giraffe.png" alt="Jirafa" data-src="images/giraffe.png">
</div>
```

4. El lazy loading ya está implementado en `script.js` para optimizar la carga.

## Optimizaciones Incluidas

- **Animaciones CSS eficientes**: Uso de `transform` y `opacity` para mejor rendimiento
- **Lazy loading**: Preparado para cargar imágenes según se necesiten
- **Intersection Observer**: Animaciones activadas solo cuando son visibles
- **RequestAnimationFrame**: Efecto parallax optimizado
- **Prevención de doble tap**: Evita zoom accidental en móviles
- **Responsive Design**: Media queries para móviles (480px) y tablets (768px)

## Compartir la Invitación

Una vez publicada en GitHub Pages, puedes compartir el enlace por:

- **WhatsApp**: Copia y pega el enlace directamente
- **Facebook**: Publica el enlace en tu muro o envía por Messenger
- **Instagram**: Agrega el enlace en tu bio o Stories (sticker de enlace)
- **Email**: Envía el enlace con un mensaje personalizado
- **Mensajes de texto**: SMS con el enlace corto

### Acortar el enlace (opcional)

Si tu URL de GitHub es muy larga, usa servicios como:
- [bit.ly](https://bit.ly)
- [tinyurl.com](https://tinyurl.com)
- [rebrand.ly](https://rebrand.ly)

Ejemplo: `https://bit.ly/revelacion-vanessa`

## Probar Localmente

Antes de subir a GitHub, puedes probar la invitación en tu computadora:

1. Abre la carpeta `gender-reveal-invitation`
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado
4. Prueba todas las funcionalidades:
   - Botones de predicción
   - Contador de invitados
   - Botón de WhatsApp (se abrirá WhatsApp Web)
   - Scroll para ver el efecto parallax

## Soporte Técnico

Si encuentras problemas:

### La página no se muestra
1. Verifica que los archivos estén en la raíz del repositorio (no en una subcarpeta)
2. El archivo debe llamarse exactamente `index.html` (minúsculas)
3. El repositorio debe ser público
4. GitHub Pages debe estar activado en Settings → Pages

### El botón de WhatsApp no funciona
1. Verifica que el número de teléfono esté correcto en `script.js`
2. El formato debe ser: código de país + número (sin espacios, guiones o signos +)
3. Ejemplo correcto: `5214771234567`
4. Ejemplo incorrecto: `+52 477 123 4567`

### Las animaciones no funcionan
1. Verifica que `script.js` esté en la misma carpeta que `index.html`
2. Abre la consola del navegador (F12) y busca errores
3. Asegúrate de que el navegador sea moderno (Chrome, Firefox, Safari, Edge)

### El diseño se ve mal en móvil
1. El diseño es responsive y debería adaptarse automáticamente
2. Prueba limpiando la caché del navegador
3. Verifica que `styles.css` se haya cargado correctamente

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**:
  - Variables CSS para fácil personalización
  - Grid y Flexbox para layouts responsive
  - Animaciones y transiciones suaves
  - Efecto parallax
  - Gradientes y sombras
- **JavaScript ES6**:
  - Intersection Observer API
  - RequestAnimationFrame
  - Event listeners
  - Manipulación del DOM
  - LocalStorage (preparado para futuras mejoras)
- **Google Fonts**:
  - Great Vibes (títulos cursivos elegantes)
  - Dancing Script (subtítulos)
  - Crimson Text (texto principal)
- **Diseño responsive**: Mobile-first approach
- **Performance**: Animaciones optimizadas con GPU

## Futuras Mejoras (Opcionales)

Ideas que podrías agregar:

1. **Galería de fotos**: Agregar fotos del embarazo
2. **Cuenta regresiva**: Contador hasta el día del evento
3. **Música de fondo**: Audio suave al cargar (con botón de silencio)
4. **Guardar predicciones**: Usar localStorage para recordar la elección
5. **Compartir en redes**: Botones para Facebook, Instagram, etc.
6. **Mapa interactivo**: Embed de Google Maps con la ubicación
7. **RSVP tracking**: Integración con Google Sheets para llevar control
8. **Modo oscuro**: Toggle para cambiar entre tema claro y oscuro
9. **Descarga de calendario**: Botón para agregar al calendario (.ics)
10. **Versión en inglés**: Opción multiidioma

## Estructura de Archivos

```
gender-reveal-invitation/
│
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # Funcionalidades interactivas
├── README.md           # Este archivo
└── .gitignore          # Archivos a ignorar en Git
```

## Créditos

Diseño y desarrollo de invitación web para:
**Vanessa Cruz**

Evento: Revelación de Sexo
Fecha: 24 de Enero de 2026

---

Hecho con amor 🤍
Para un momento muy especial 💕

¿Preguntas? Contacta a Vanessa al 477 668 8796
