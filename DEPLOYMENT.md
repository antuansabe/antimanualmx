# Guía de Deployment - Antimanual MX

## ✅ Pre-requisitos completados

### Técnico
- ✅ Build sin errores (`npm run build`)
- ✅ Todas las rutas funcionan correctamente
- ✅ Responsive en móvil
- ✅ Imágenes optimizadas (WebP/AVIF)
- ✅ Meta tags configurados correctamente
- ✅ Headers de seguridad configurados
- ✅ Console.logs eliminados en producción

### Seguridad
- ✅ HTTPS forzado (configuración en headers)
- ✅ Headers de seguridad configurados:
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: SAMEORIGIN
  - Strict-Transport-Security
  - X-XSS-Protection
  - Referrer-Policy
  - Permissions-Policy
- ✅ No hay API keys expuestas
- ✅ Formularios con validación

## 🚀 Opciones de Deployment

### Opción 1: Vercel (Recomendado)

1. **Conectar repositorio**:
   ```bash
   # Si no tienes git init
   git init
   git add .
   git commit -m "Preparación para deployment"

   # Conectar a GitHub
   git remote add origin <tu-repo-url>
   git push -u origin main
   ```

2. **Deployment en Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Importa el repositorio
   - Vercel detectará Next.js automáticamente
   - Click en "Deploy"

3. **Configuración de dominio** (Opcional):
   - En Vercel Dashboard → Settings → Domains
   - Agregar `antimanual.mx`
   - Configurar DNS según instrucciones

### Opción 2: Netlify

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x o superior

2. **Deploy**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Opción 3: Docker + VPS

Crear `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Deploy:
```bash
docker build -t antimanual-mx .
docker run -p 3000:3000 antimanual-mx
```

## 🔧 Variables de Entorno

Actualmente el proyecto no requiere variables de entorno. Para futuro:

```env
# .env.production
NEXT_PUBLIC_SITE_URL=https://antimanual.mx
```

## 📝 Post-Deployment Checklist

### Inmediato
- [ ] Verificar que todas las rutas funcionen en producción
- [ ] Probar en móvil y desktop
- [ ] Verificar SSL activo
- [ ] Revisar console del navegador (no debe haber errores)

### Primeras 24 horas
- [ ] Monitorear Analytics (si está configurado)
- [ ] Verificar tiempos de carga (< 3s ideal)
- [ ] Probar formularios de contacto
- [ ] Verificar que los links externos funcionen

### Primera semana
- [ ] Revisar feedback de usuarios
- [ ] Monitorear errores en producción
- [ ] Optimizar imágenes adicionales si es necesario
- [ ] Configurar sitemap.xml (si no existe)

## 🔒 Seguridad Post-Deployment

1. **SSL/TLS**: Verificar que esté activo y funcionando
2. **Headers**: Verificar con [SecurityHeaders.com](https://securityheaders.com)
3. **Performance**: Analizar con [PageSpeed Insights](https://pagespeed.web.dev/)
4. **Accesibilidad**: Verificar con [WAVE](https://wave.webaim.org/)

## 📊 Monitoreo

Servicios recomendados (gratuitos):
- **Uptime**: UptimeRobot, Pingdom
- **Performance**: Vercel Analytics, Google PageSpeed
- **Errors**: Sentry (tier gratuito)

## 🆘 Rollback

Si algo sale mal:

### En Vercel:
- Deployments → Previous Deployment → Promote to Production

### En local:
```bash
git revert HEAD
git push origin main
```

## 📞 Soporte

Para problemas técnicos:
- Revisar logs de deployment
- Verificar configuración de headers
- Contactar soporte de la plataforma utilizada
