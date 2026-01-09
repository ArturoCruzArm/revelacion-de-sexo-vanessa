# Configuración DNS para revelacion-de-sexo-vanessa.invitados.org

## ✅ Estado Actual

Tu invitación ya está publicada en GitHub Pages:
- **Repositorio**: https://github.com/ArturoCruzArm/revelacion-de-sexo-vanessa
- **Dominio configurado**: revelacion-de-sexo-vanessa.invitados.org
- **Estado**: Building (procesando)

## 📋 Configuración DNS Requerida

Para que tu dominio personalizado funcione, necesitas configurar los registros DNS en tu proveedor de dominio (`invitados.org`).

### Opción 1: Usar un registro CNAME (Recomendado para subdominios)

En el panel de control DNS de `invitados.org`, agrega:

```
Tipo: CNAME
Nombre: revelacion-de-sexo-vanessa
Valor: arturoCruzArm.github.io
TTL: 3600 (o automático)
```

**Importante**: NO incluyas el dominio completo en "Nombre", solo el subdominio.

### Opción 2: Usar registros A (Alternativa)

Si tu proveedor no permite CNAME para subdominios, usa registros A:

```
Tipo: A
Nombre: revelacion-de-sexo-vanessa
Valor: 185.199.108.153
TTL: 3600

Tipo: A
Nombre: revelacion-de-sexo-vanessa
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Nombre: revelacion-de-sexo-vanessa
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Nombre: revelacion-de-sexo-vanessa
Valor: 185.199.111.153
TTL: 3600
```

Estos son las IPs oficiales de GitHub Pages.

### Agregar registro AAAA para IPv6 (Opcional pero recomendado)

```
Tipo: AAAA
Nombre: revelacion-de-sexo-vanessa
Valor: 2606:50c0:8000::153
TTL: 3600

Tipo: AAAA
Nombre: revelacion-de-sexo-vanessa
Valor: 2606:50c0:8001::153
TTL: 3600

Tipo: AAAA
Nombre: revelacion-de-sexo-vanessa
Valor: 2606:50c0:8002::153
TTL: 3600

Tipo: AAAA
Nombre: revelacion-de-sexo-vanessa
Valor: 2606:50c0:8003::153
TTL: 3600
```

## ⏱️ Tiempos de Propagación

- **DNS**: 5 minutos a 48 horas (usualmente 10-30 minutos)
- **GitHub Pages build**: 1-2 minutos
- **Certificado SSL**: Se generará automáticamente después de que el DNS esté configurado (puede tardar hasta 1 hora)

## 🔍 Verificar la Configuración

### 1. Verificar que GitHub Pages está activo

```bash
cd gender-reveal-invitation
gh api repos/ArturoCruzArm/revelacion-de-sexo-vanessa/pages
```

Busca: `"status":"built"` (cuando termine de construir)

### 2. Verificar DNS (desde tu computadora)

**Windows:**
```bash
nslookup revelacion-de-sexo-vanessa.invitados.org
```

Debería mostrar una IP de GitHub Pages (185.199.108.153 o similar).

**PowerShell:**
```bash
Resolve-DnsName revelacion-de-sexo-vanessa.invitados.org
```

### 3. Verificar desde navegador

Una vez que el DNS esté propagado:

**HTTP (funcionará primero):**
```
http://revelacion-de-sexo-vanessa.invitados.org
```

**HTTPS (funcionará después de generar certificado):**
```
https://revelacion-de-sexo-vanessa.invitados.org
```

## 🔐 Habilitar HTTPS

Una vez que el DNS esté configurado y GitHub haya generado el certificado SSL (1-24 horas):

```bash
cd gender-reveal-invitation
gh api repos/ArturoCruzArm/revelacion-de-sexo-vanessa/pages -X PUT -F https_enforced=true
```

O desde la interfaz web:
1. Ve a https://github.com/ArturoCruzArm/revelacion-de-sexo-vanessa/settings/pages
2. Marca "Enforce HTTPS"

## 🌐 Accesos Mientras el DNS se Propaga

Mientras esperas que el DNS se configure, puedes acceder a tu invitación en:

**URL temporal de GitHub:**
```
https://arturoCruzArm.github.io/revelacion-de-sexo-vanessa/
```

Esta URL funcionará inmediatamente (1-2 minutos después de publicar).

## 📝 Ejemplo de Configuración DNS

### Cloudflare (si usas Cloudflare)

1. Ve a tu panel de Cloudflare
2. Selecciona el dominio `invitados.org`
3. Ve a DNS → Records
4. Agrega nuevo registro:
   - Type: `CNAME`
   - Name: `revelacion-de-sexo-vanessa`
   - Target: `arturoCruzArm.github.io`
   - Proxy status: DNS only (nube gris, NO naranja)
   - TTL: Auto
5. Save

### GoDaddy

1. Ve a DNS Management
2. Agrega registro:
   - Type: `CNAME`
   - Host: `revelacion-de-sexo-vanessa`
   - Points to: `arturoCruzArm.github.io`
   - TTL: 1 Hour
3. Save

### Namecheap

1. Advanced DNS
2. Add New Record:
   - Type: `CNAME Record`
   - Host: `revelacion-de-sexo-vanessa`
   - Value: `arturoCruzArm.github.io`
   - TTL: Automatic
3. Save

### Google Domains

1. DNS → Custom records
2. Create new record:
   - Type: `CNAME`
   - Host name: `revelacion-de-sexo-vanessa`
   - Data: `arturoCruzArm.github.io`
   - TTL: 3600
3. Save

## ⚠️ Problemas Comunes

### "Domain's DNS record could not be retrieved"

**Causa**: El DNS aún no está configurado o no se ha propagado.

**Solución**:
1. Verifica que agregaste el registro DNS correctamente
2. Espera 10-30 minutos para propagación
3. Usa `nslookup` para verificar

### "Certificate doesn't exist yet"

**Causa**: GitHub aún no ha generado el certificado SSL.

**Solución**:
1. Asegúrate de que el DNS esté configurado correctamente
2. Espera hasta 24 horas (usualmente 1 hora)
3. El sitio funcionará en HTTP mientras tanto

### El sitio muestra 404

**Causa**: GitHub Pages aún está construyendo el sitio.

**Solución**:
1. Espera 2-3 minutos
2. Verifica el estado: `gh repo view --web` → pestaña Actions
3. Refresca la página

### HTTPS redirige a HTTP

**Causa**: HTTPS enforcement no está activado o el certificado no está listo.

**Solución**:
1. Espera a que el certificado esté listo
2. Activa HTTPS enforcement (ver sección anterior)

## 📊 Verificar Estado del Sitio

```bash
# Ver repositorio en navegador
gh repo view --web

# Ver estado de GitHub Pages
gh api repos/ArturoCruzArm/revelacion-de-sexo-vanessa/pages

# Ver últimos builds
gh run list --limit 5
```

## 🔄 Actualizar Contenido

Si haces cambios en los archivos:

```bash
cd gender-reveal-invitation

# Hacer cambios en los archivos
# Por ejemplo, editar index.html

# Subir cambios
git add .
git commit -m "Actualizar invitación"
git push

# GitHub Pages se actualizará automáticamente en 1-2 minutos
```

## 📞 Compartir la Invitación

Una vez que el DNS esté configurado, comparte:

```
https://revelacion-de-sexo-vanessa.invitados.org
```

O mientras tanto, usa:

```
https://arturoCruzArm.github.io/revelacion-de-sexo-vanessa/
```

## 🎯 Checklist Final

- [x] Repositorio creado en GitHub
- [x] Archivo CNAME agregado
- [x] GitHub Pages activado
- [x] Dominio personalizado configurado
- [ ] Registros DNS agregados (CNAME o A)
- [ ] DNS propagado (verificar con nslookup)
- [ ] Sitio accesible en HTTP
- [ ] Certificado SSL generado
- [ ] HTTPS enforcement activado
- [ ] Sitio accesible en HTTPS

---

**Siguiente paso**: Configura los registros DNS en tu proveedor de `invitados.org` siguiendo las instrucciones arriba.

**URL temporal**: https://arturoCruzArm.github.io/revelacion-de-sexo-vanessa/
**URL final**: https://revelacion-de-sexo-vanessa.invitados.org
