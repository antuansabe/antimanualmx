# 🛡️ ANTIMANUAL: ACTIVISMO DIGITAL COLECTIVO

[![Estado del Proyecto](https://img.shields.io/badge/estado-en%20desarrollo-yellow.svg)](https://github.com/antimanualmx/antimanual)
[![Licencia](https://img.shields.io/badge/licencia-GPL--3.0-blue.svg)](LICENSE)
[![Contribuciones](https://img.shields.io/badge/contribuciones-bienvenidas-brightgreen.svg)](CONTRIBUTING.md)

> *"Transformar el miedo digital en poder ciudadano a través de herramientas prácticas, educación accesible y organización colectiva."*

**Antimanual** es una plataforma de **activismo digital ciudadano** que empodera a mexicanos con herramientas prácticas, conocimiento accesible y una red de apoyo para proteger sus derechos digitales y navegar seguros en internet.

## 🎯 Visión

Construimos una plataforma que transforma la complejidad de la seguridad digital en acciones concretas y accesibles para todos. No es un proyecto gubernamental, es una iniciativa **100% ciudadana e independiente**.

### ¿Por qué Antimanual?

- **📱 Herramientas Prácticas**: Del miedo a la acción en 3 clics
- **🤝 Red de Apoyo**: Nadie se defiende solo
- **🎓 Educación Progresiva**: De usuario a defensor digital
- **📊 Transparencia Total**: Datos abiertos sobre libertades digitales

## 🚀 Funcionalidades Principales

### 1. 🔧 Kit de Emergencia Digital
- **Botón de Pánico**: Protocolo inmediato ante amenazas
- **Borrado Seguro**: Elimina rastros digitales paso a paso
- **Comunicación Cifrada**: Configura Signal, Element, Briar
- **Navegación Anónima**: Tor Browser + VPN setup

### 2. 🤝 Red de Apoyo Colectivo
- **Directorio de Organizaciones**: R3D, Artículo 19, SocialTIC y más
- **Sistema de Alertas**: Amenazas por región y campañas activas
- **Mentorías P2P**: Activistas experimentados te guían

### 3. 🎓 Academia Activista
- **Nivel 1**: Activista Digital Básico
- **Nivel 2**: Defensor Comunitario
- **Nivel 3**: Facilitador de Seguridad

### 4. 📊 Observatorio de Libertades
- **Métricas en Tiempo Real**: Censura, ataques, leyes
- **Informes Ciudadanos**: Estado mensual de libertades digitales
- **API Pública**: Datos abiertos para investigadores

## 🏗️ Instalación para Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### Configuración Local

```bash
# Clonar el repositorio
git clone https://github.com/antimanualmx/antimanual.git
cd antimanual

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Ejecutar linter
npm run test         # Ejecutar tests
npm run test:watch   # Tests en modo watch
npm run test:ci      # Tests para CI/CD
```

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript (strict mode)
- **Estilos**: Tailwind CSS + CSS Modules
- **Animaciones**: Framer Motion + Lottie
- **Estado**: Zustand + React Query
- **Testing**: Jest + React Testing Library + Playwright
- **CI/CD**: GitHub Actions
- **Hosting**: Vercel

## 📁 Estructura del Proyecto

```
antimanual/
├── app/                    # App Router de Next.js
│   ├── (routes)/          # Rutas de la aplicación
│   ├── api/               # API Routes
│   └── components/        # Componentes globales
├── features/              # Módulos por funcionalidad
│   ├── herramientas/     # Kit de emergencia
│   ├── red-apoyo/        # Directorio y mapas
│   ├── academia/         # Sistema educativo
│   └── observatorio/     # Métricas y datos
├── shared/               # Código compartido
│   ├── ui/              # Sistema de diseño
│   ├── hooks/           # Custom hooks
│   └── utils/           # Utilidades
├── public/              # Assets estáticos
└── tests/               # Tests e2e
```

## 🤝 Contribuir

¡Antimanual es un proyecto comunitario y necesitamos tu ayuda! 

### Formas de Contribuir

1. **💻 Código**: Revisa los [issues abiertos](https://github.com/antimanualmx/antimanual/issues)
2. **📝 Contenido**: Ayuda con guías y traducciones
3. **🎨 Diseño**: Mejora la UX/UI
4. **🔍 Testing**: Reporta bugs y sugiere mejoras
5. **📢 Difusión**: Comparte el proyecto

### Proceso de Contribución

1. Fork del repositorio
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

Lee nuestra [Guía de Contribución](CONTRIBUTING.md) para más detalles.

## 📊 Roadmap

### Fase 1: MVP (En desarrollo)
- [x] Setup inicial del proyecto
- [ ] Landing page con manifiesto
- [ ] Kit de emergencia básico (3 herramientas)
- [ ] Sistema de navegación principal

### Fase 2: Red de Apoyo
- [ ] Directorio de 10 organizaciones
- [ ] Mapa interactivo de México
- [ ] Sistema de contacto directo

### Fase 3: Academia
- [ ] Nivel 1 completo (4 módulos)
- [ ] Sistema de progreso
- [ ] Certificados verificables

Ver el [roadmap completo](ROADMAP.md) para más detalles.

## 🏆 Métricas de Éxito

### Objetivos 2024
- **5,000** herramientas utilizadas
- **500** usuarios protegidos
- **20** organizaciones aliadas
- **90%** satisfacción de usuarios

## 🔒 Seguridad

La seguridad es nuestra prioridad. Si encuentras una vulnerabilidad:

1. **NO** la publiques en issues públicos
2. Envía un correo a seguridad@antimanual.mx
3. Incluye pasos para reproducir el problema
4. Recibirás respuesta en 48 horas

## 📜 Licencia

Este proyecto está bajo la Licencia GPL-3.0 - ver [LICENSE](LICENSE) para detalles.

## 🙏 Agradecimientos

- A todas las organizaciones de derechos digitales en México
- A la comunidad de software libre
- A cada activista digital que lucha por un internet libre

## 📞 Contacto

- **Web**: [antimanual.mx](https://antimanual.mx)
- **Email**: hola@antimanual.mx
- **Twitter**: [@antimanualmx](https://twitter.com/antimanualmx)
- **Discord**: [Únete a nuestra comunidad](https://discord.gg/antimanual)

---

<p align="center">
  <strong>🛡️ ANTIMANUAL • ACTIVISMO DIGITAL COLECTIVO 🛡️</strong>
  <br>
  <em>Cada línea de código es un acto de resistencia</em>
</p># antimanualmx
