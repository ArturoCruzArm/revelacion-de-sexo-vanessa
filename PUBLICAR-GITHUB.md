# Cómo Publicar en GitHub Pages - Guía Rápida

Tu repositorio Git ya está listo con todos los archivos. Sigue estos pasos:

## Opción 1: Usando GitHub Desktop (Más Fácil)

### Paso 1: Descargar GitHub Desktop
1. Ve a https://desktop.github.com/
2. Descarga e instala GitHub Desktop
3. Inicia sesión con tu cuenta de GitHub (créala en github.com si no tienes)

### Paso 2: Publicar el Repositorio
1. Abre GitHub Desktop
2. File → Add Local Repository
3. Selecciona la carpeta: `C:\Users\foro7\gender-reveal-invitation`
4. Haz clic en "Publish repository"
5. Nombre sugerido: `revelacion-sexo` o `gender-reveal`
6. Marca "Public" (importante para GitHub Pages gratuito)
7. Desmarca "Keep this code private"
8. Haz clic en "Publish repository"

### Paso 3: Activar GitHub Pages
1. Ve a tu repositorio en github.com
2. Haz clic en "Settings" (⚙️)
3. En el menú lateral, haz clic en "Pages"
4. En "Branch", selecciona "main" y carpeta "/ (root)"
5. Haz clic en "Save"
6. Espera 1-2 minutos

### Paso 4: Obtener tu URL
Tu invitación estará en:
```
https://TU-USUARIO.github.io/revelacion-sexo/
```

GitHub te mostrará la URL exacta en la sección Pages.

---

## Opción 2: Usando la Terminal (Git)

### Paso 1: Crear Repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre del repositorio: `revelacion-sexo`
3. Descripción: "Invitación web para revelación de sexo"
4. Selecciona "Public"
5. NO marques "Add a README file"
6. Haz clic en "Create repository"

### Paso 2: Conectar y Subir
Copia tu URL del repositorio (algo como: `https://github.com/TU-USUARIO/revelacion-sexo.git`)

Luego ejecuta en la terminal:

```bash
cd C:\Users\foro7\gender-reveal-invitation

# Conectar con tu repositorio (reemplaza con TU URL)
git remote add origin https://github.com/TU-USUARIO/revelacion-sexo.git

# Subir los archivos
git push -u origin main
```

Si te pide usuario y contraseña:
- Usuario: tu nombre de usuario de GitHub
- Contraseña: usa un Personal Access Token (no tu contraseña normal)
  - Genéralo en: https://github.com/settings/tokens
  - Selecciona: "repo" scope
  - Guárdalo en un lugar seguro

### Paso 3: Activar GitHub Pages
1. Ve a tu repositorio en github.com
2. Settings → Pages
3. Branch: "main" → carpeta "/ (root)"
4. Save
5. Espera 1-2 minutos

---

## Opción 3: Subir Archivos Manualmente (Sin Git)

### Paso 1: Crear Repositorio
1. Ve a https://github.com/new
2. Nombre: `revelacion-sexo`
3. Public
4. Create repository

### Paso 2: Subir Archivos
1. En la página de tu repositorio nuevo, haz clic en "uploading an existing file"
2. Arrastra estos 5 archivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `.gitignore`
3. Mensaje del commit: "Agregar invitación"
4. Haz clic en "Commit changes"

### Paso 3: Activar GitHub Pages
1. Settings → Pages
2. Branch: "main" → "/ (root)"
3. Save

---

## Verificar que Funciona

Después de activar GitHub Pages:

1. Espera 1-2 minutos
2. Refresca la página de Settings → Pages
3. Verás un mensaje: "Your site is live at https://..."
4. Haz clic en el enlace o cópialo

### Si ves errores 404:
- Espera 5 minutos más (a veces tarda)
- Verifica que el repositorio sea público
- Asegúrate de que `index.html` esté en la raíz (no en subcarpeta)

---

## Compartir tu Invitación

Una vez que tengas la URL, compártela:

### WhatsApp
Envía el enlace directamente:
```
¡Hola! Te invito a la revelación de sexo de mi bebé 💕
https://tu-usuario.github.io/revelacion-sexo/
```

### Acortar URL (opcional)
Si el enlace es muy largo, acórtalo en:
- https://bit.ly
- https://tinyurl.com

Ejemplo: `https://bit.ly/revelacion-vanessa`

---

## Actualizar la Invitación Después

Si necesitas cambiar algo (fecha, texto, etc.):

### Con GitHub Desktop:
1. Edita los archivos en tu computadora
2. Abre GitHub Desktop
3. Verás los cambios en la pestaña "Changes"
4. Escribe un mensaje: "Actualizar fecha" (por ejemplo)
5. Haz clic en "Commit to main"
6. Haz clic en "Push origin"
7. Los cambios aparecerán en 1-2 minutos

### Desde GitHub.com:
1. Ve a tu repositorio
2. Haz clic en el archivo que quieres editar (ej: `index.html`)
3. Haz clic en el ícono del lápiz (Edit)
4. Haz los cambios
5. Scroll abajo → "Commit changes"

---

## Personalización Rápida

### Cambiar el número de WhatsApp:
1. Edita `script.js`
2. Línea 162: `const phoneNumber = '5214776688796';`
3. Cambia el número (formato: código país + número)

### Cambiar colores:
1. Edita `styles.css`
2. Líneas 2-11: Variables de color
3. Cambia los códigos hexadecimales

### Modificar textos:
1. Edita `index.html`
2. Busca el texto que quieres cambiar
3. Guarda

Después de cualquier cambio, haz commit y push (ver sección anterior).

---

## Soporte

### La página no carga
- Espera 5 minutos después de activar Pages
- Verifica que el repo sea público
- Limpia caché del navegador (Ctrl + F5)

### El botón de WhatsApp no funciona
- Revisa el número en `script.js` línea 162
- Formato correcto: sin espacios, sin +, solo números
- Ejemplo: `5214771234567`

### Necesitas ayuda
- Lee el README.md completo
- Revisa GitHub Docs: https://docs.github.com/pages
- Contacta a alguien con experiencia en Git/GitHub

---

¡Tu invitación está lista para compartirse! 🎉
