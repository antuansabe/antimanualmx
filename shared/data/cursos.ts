export interface Modulo {
  id: string;
  titulo: string;
  descripcion: string;
  duracion: number; // en minutos
  orden: number;
  contenido: ContenidoModulo[];
  ejercicios?: Ejercicio[];
  recursos: Recurso[];
}

export interface ContenidoModulo {
  tipo: 'texto' | 'video' | 'imagen' | 'lista' | 'alerta' | 'codigo' | 'historia';
  contenido: string;
  titulo?: string;
  metadata?: any;
}

export interface Ejercicio {
  id: string;
  tipo: 'quiz' | 'practica' | 'reflexion';
  pregunta: string;
  opciones?: string[];
  respuestaCorrecta?: number;
  explicacion: string;
}

export interface Recurso {
  titulo: string;
  tipo: 'enlace' | 'descarga' | 'herramienta';
  url: string;
  descripcion: string;
}

export interface Curso {
  id: string;
  nivel: number;
  titulo: string;
  descripcion: string;
  duracionTotal: number; // en minutos
  modulos: Modulo[];
  prerequisitos: string[];
  objetivos: string[];
  certificado: boolean;
}

// Curso Nivel 1: Activista Digital Básico
export const cursoNivel1: Curso = {
  id: 'nivel-1-activista-digital-basico',
  nivel: 1,
  titulo: 'Activista Digital Básico',
  descripcion: 'Fundamentos de seguridad digital y primeros pasos en el activismo',
  duracionTotal: 240, // 4 horas
  prerequisitos: [],
  objetivos: [
    'Conocer a los activistas digitales más influyentes de la historia',
    'Comprender cómo las herramientas digitales han transformado movimientos sociales',
    'Identificar casos de éxito donde la tecnología sirvió al bien común',
    'Desarrollar hábitos básicos de seguridad y autodefensa digital',
    'Conectar con organizaciones de apoyo en México'
  ],
  certificado: true,
  modulos: [
    {
      id: 'modulo-1-heroes-digitales',
      titulo: 'Héroes de la Resistencia Digital',
      descripcion: 'Conoce a los activistas que cambiaron el mundo con tecnología',
      duracion: 60,
      orden: 1,
      contenido: [
        {
          tipo: 'texto',
          titulo: 'Introducción: La tecnología como arma de liberación',
          contenido: `A lo largo de la historia moderna, individuos valientes han utilizado la tecnología para desafiar el poder, defender los derechos humanos y crear un mundo más justo. Estas son sus historias.

En esta sección conocerás a los pioneros del activismo digital: desde hackers éticos hasta periodistas que arriesgaron sus vidas, pasando por desarrolladores que crearon herramientas para proteger a millones de personas.`
        },
        {
          tipo: 'historia',
          titulo: '🌟 Aaron Swartz (1986-2013): El arquitecto del internet libre',
          contenido: `**"La información es poder. Pero como todo poder, hay quienes quieren guardárselo para sí mismos."**

Aaron Swartz fue un prodigio de la programación que a los 14 años ayudó a crear RSS, tecnología que todavía usamos para sindicar contenido en internet. Pero su verdadero legado fue luchar por un internet libre y accesible.

**Sus contribuciones:**
• **Creative Commons**: Co-creó este sistema de licencias que permite compartir conocimiento libremente
• **Reddit**: Co-fundó esta plataforma que se convirtió en uno de los espacios de discusión más importantes
• **Demand Progress**: Organización que lideró la lucha contra SOPA/PIPA, leyes que habrían censurado internet

**Su activismo más controversial:**
En 2011, descargó millones de artículos académicos de JSTOR con la intención de liberarlos. Creía que el conocimiento científico, a menudo financiado con fondos públicos, debería ser accesible para todos, no solo para quienes pueden pagar.

**El precio de la resistencia:**
El gobierno de EE.UU. lo persiguió con cargos criminales que podrían haberle costado 35 años de prisión. Bajo esta presión insoportable, Aaron se quitó la vida a los 26 años.

**Su legado hoy:**
Gracias a activistas como Aaron, hoy tenemos acceso a millones de publicaciones científicas gratuitas a través de iniciativas como Sci-Hub. Él inspiró a toda una generación a luchar por un internet libre.

💡 **Lección**: El acceso al conocimiento es un derecho fundamental, no un privilegio.`
        },
        {
          tipo: 'historia',
          titulo: '🛡️ Laura Poitras: La cineasta que expuso la vigilancia masiva',
          contenido: `**"La privacidad no es sobre tener algo que ocultar. Es sobre tener algo que proteger: tu libertad."**

Laura Poitras es la documentalista estadounidense que Edward Snowden eligió para revelar uno de los secretos más grandes del siglo XXI: la NSA estaba espiando a millones de personas en todo el mundo.

**El momento histórico:**
En 2013, Snowden contactó anónimamente a Poitras y al periodista Glenn Greenwald. Durante semanas, les compartió miles de documentos clasificados que probaban que agencias de inteligencia estaban recolectando datos de llamadas, mensajes y navegación de personas inocentes.

**Su preparación fue impecable:**
• Usó cifrado de extremo a extremo para todas las comunicaciones
• Documentó todo en Hong Kong mientras Snowden huía
• Creó el documental "Citizenfour" ganador del Oscar

**Herramientas que usó:**
• **PGP/GPG**: Para cifrar emails
• **Tails OS**: Sistema operativo que no deja rastro
• **Tor**: Para navegar anónimamente
• **SecureDrop**: Plataforma segura para que fuentes compartan información

**Impacto:**
Sus revelaciones cambiaron la conversación global sobre privacidad. Ahora sabemos que:
- La vigilancia masiva existe y es real
- Nuestras comunicaciones pueden ser interceptadas
- Necesitamos cifrado fuerte para protegernos
- La rendición de cuentas gubernamental es esencial

💡 **Lección**: Documentar abusos de poder requiere valentía, pero también conocimiento técnico para hacerlo de forma segura.`
        },
        {
          tipo: 'historia',
          titulo: '✊ Alaa Abd El-Fattah: La voz digital de la Primavera Árabe',
          contenido: `**"Internet no es solo una herramienta de comunicación, es un espacio de resistencia."**

Alaa Abd El-Fattah es un desarrollador de software y activista egipcio que jugó un papel crucial en la Primavera Árabe de 2011, utilizando blogs y redes sociales para organizar protestas que derrocaron dictaduras.

**Sus inicios:**
A principios de los 2000, cuando bloguear era revolucionario, Alaa creó espacios digitales donde los egipcios podían hablar libremente sobre corrupción, tortura y abuso gubernamental.

**Durante la revolución de 2011:**
• Coordinó protestas masivas usando Twitter y Facebook
• Documentó abusos policiales en tiempo real
• Enseñó a otros activistas a usar VPNs y comunicaciones cifradas
• Creó redes de información que burlaban la censura

**Las herramientas del pueblo:**
Alaa y sus compañeros demostraron que herramientas simples podían derrotar sistemas de control:
- **Facebook Events**: Para convocar manifestaciones sin que el gobierno lo supiera
- **Twitter**: Para coordinar en tiempo real y mostrar al mundo lo que pasaba
- **Proxies y VPNs**: Para sortear bloqueos de internet
- **Smartphones**: Para documentar abusos y compartirlos instantáneamente

**El precio del activismo:**
Alaa ha pasado la mayor parte de la última década en prisión. El gobierno egipcio lo considera una amenaza por su capacidad de movilizar a las masas usando tecnología.

**Desde prisión, sigue inspirando:**
Incluso encarcelado, sus escritos sobre tecnología, libertad y resistencia continúan circulando. Su hermana Sanaa Seif y su madre Laila Soueif mantienen viva su lucha.

💡 **Lección**: Las redes sociales pueden ser herramientas poderosas de organización, pero los activistas digitales enfrentan represión real.`
        },
        {
          tipo: 'historia',
          titulo: '🔐 Moxie Marlinspike: El arquitecto de la privacidad moderna',
          contenido: `**"La privacidad no es negociable. Es la base de todos los demás derechos."**

Moxie Marlinspike (seudónimo) es el hacker y criptógrafo que creó Signal, la aplicación de mensajería más segura del mundo, usada por periodistas, activistas y cualquier persona que valore su privacidad.

**Por qué importa Signal:**
Antes de Signal, las opciones eran:
- WhatsApp: Propiedad de Facebook, con acceso a metadatos
- Telegram: No cifrado de extremo a extremo por defecto
- SMS: Sin cifrado alguno

Signal cambió el juego ofreciendo cifrado de extremo a extremo **gratuito y de código abierto**.

**Quién usa Signal:**
• Edward Snowden: "Uso Signal todos los días"
• Ejército de EE.UU. y funcionarios gubernamentales
• Periodistas de investigación en todo el mundo
• Activistas en países autoritarios
• **Tú**: Porque tu privacidad importa

**El protocolo Signal:**
Moxie y su equipo no solo crearon una app, inventaron el **protocolo de cifrado** que ahora también usa WhatsApp. Es tan seguro que:
- Ni Signal puede leer tus mensajes
- Las autoridades han solicitado datos y solo pueden obtener fecha de registro
- Cada mensaje tiene "forward secrecy": incluso si hackean tu teléfono hoy, no pueden descifrar mensajes pasados

**Filosofía de diseño:**
"Haz que la seguridad sea tan fácil que la gente la use sin pensar"
- No requiere número de teléfono
- Mensajes que se autodestruyen
- Llamadas y videollamadas cifradas
- Transferencia de archivos segura

**Su impacto en México:**
En un país donde periodistas y activistas son vigilados, Signal se ha vuelto esencial para comunicaciones sensibles.

💡 **Lección**: Las mejores herramientas de privacidad son aquellas tan fáciles de usar que cualquiera puede adoptarlas.`
        },
        {
          tipo: 'historia',
          titulo: '🌍 Wael Ghonim: El activista que usó Facebook para derrocar un dictador',
          contenido: `**"El poder de la gente es mucho más fuerte que la gente en el poder."**

Wael Ghonim era un ejecutivo de Google en Egipto cuando decidió usar sus habilidades digitales para cambiar su país. Su historia demuestra cómo una sola persona con conocimiento digital puede iniciar una revolución.

**El inicio:**
En junio de 2010, la policía egipcia torturó y asesinó a Khaled Said, un joven de 28 años, por exponer corrupción policial. Wael creó una página de Facebook: **"Todos somos Khaled Said"**

**La estrategia era brillante:**
• Publicaba evidencia de brutalidad policial
• Compartía historias de víctimas de tortura
• Organizaba "protestas silenciosas" donde la gente solo se paraba junta
• Usaba memes y contenido viral para llegar a millones

**La organización del 25 de enero de 2011:**
Usando la página de Facebook, Wael convocó a una manifestación masiva en la Plaza Tahrir. Lo que siguió:
- Millones de egipcios salieron a las calles
- Durante 18 días, el mundo vio a un pueblo exigir dignidad
- El dictador Hosni Mubarak, quien gobernaba desde 1981, renunció

**Las herramientas que uso:**
• **Facebook Pages**: Para llegar a audiencias masivas
• **Tor**: Para publicar anónimamente y evitar censura
• **Proxy servers**: Para sortear bloqueos de internet
• **Smartphones**: Para documentar y compartir en tiempo real

**Su captura y liberación:**
Durante las protestas, la policía secreta lo secuestró. Pasó 11 días con los ojos vendados, siendo interrogado. Cuando salió, su primera entrevista en TV conmovió a millones.

**Lecciones aprendidas:**
Años después, Wael reflexiona sobre los límites de las redes sociales:
- Pueden iniciar revoluciones pero no sostener democracias
- Los algoritmos pueden polarizar tanto como unir
- La tecnología es una herramienta, no la solución

💡 **Lección**: Las redes sociales amplifican voces, pero el verdadero cambio requiere organización sostenida más allá de lo digital.`
        },
        {
          tipo: 'historia',
          titulo: '🇲🇽 Carmen Aristegui: Periodismo digital contra el poder en México',
          contenido: `**"El periodismo incomoda, o no es periodismo."**

Carmen Aristegui es la periodista más reconocida de México, quien ha usado plataformas digitales para exponer casos de corrupción que de otro modo habrían permanecido ocultos.

**Investigaciones que cambiaron México:**

**1. La Casa Blanca de Peña Nieto (2014)**
Su equipo reveló que el presidente tenía una mansión de 7 millones de dólares registrada a nombre de una empresa que le vendía contratos al gobierno.
- Usaron bases de datos públicas
- Periodismo de investigación tradicional + verificación digital
- Publicación simultánea en web, radio y redes sociales
- Impacto: Escándalo internacional, crisis de legitimidad

**2. Pegasus en México (2017)**
Junto con The New York Times y Citizen Lab, expuso que el gobierno mexicano espió a periodistas, activistas y defensores de derechos humanos con software israelí Pegasus.
- Análisis forense de dispositivos móviles
- Verificación de mensajes de phishing
- Colaboración internacional de periodistas
- Impacto: Denuncias internacionales, investigaciones gubernamentales

**Herramientas y métodos:**
• **Verificación de bases de datos gubernamentales**
• **Análisis de documentos filtrados** (colaboración con Anonymous)
• **Plataformas digitales** para evitar censura tradicional
• **Redes de apoyo internacional** para protección

**Resistencia digital contra la censura:**
Cuando MVS Radio la despidió por presión gubernamental (2015):
- Creó su propio medio digital: **Aristegui Noticias**
- Financiamiento mediante crowdfunding y donaciones
- Independencia editorial total
- Mayor alcance que antes del despido

**La nueva generación:**
Su equipo incluye periodistas digitales nativos:
- Irving Huerta (investigación digital)
- Rafael Cabrera (verificación de datos)
- Sebastián Barragán (análisis forense digital)

**Su modelo inspiró:**
→ Mexicanos Contra la Corrupción y la Impunidad
→ Animal Político
→ Pie de Página
→ Otros medios independientes digitales

💡 **Lección**: El periodismo digital independiente es posible y necesario. La tecnología permite sortear censura y financiarse directamente.`
        },
        {
          tipo: 'alerta',
          contenido: '🔴 IMPORTANTE: Estos activistas enfrentaron consecuencias reales. Algunos fueron encarcelados, otros perdieron sus vidas, muchos viven en exilio. El activismo digital es poderoso pero también riesgoso. La seguridad digital no es opcional.'
        },
        {
          tipo: 'lista',
          titulo: '📚 Lecciones de los héroes digitales',
          contenido: `• **El conocimiento debe ser libre** (Aaron Swartz)
• **La privacidad es un derecho fundamental** (Laura Poitras)
• **Las redes sociales pueden movilizar masas** (Alaa Abd El-Fattah, Wael Ghonim)
• **Las herramientas seguras deben ser fáciles de usar** (Moxie Marlinspike)
• **El periodismo independiente es posible digitalmente** (Carmen Aristegui)
• **La resistencia tiene consecuencias reales** (Todos ellos)
• **La tecnología es un medio, no el fin** (La lucha continúa más allá de lo digital)`
        }
      ],
      ejercicios: [
        {
          id: 'reflexion-heroes',
          tipo: 'reflexion',
          pregunta: '¿Cuál de estos activistas te inspiró más y por qué? ¿Qué aspectos de su trabajo podrías aplicar en tu propio contexto?',
          explicacion: 'No hay respuesta correcta. Reflexiona sobre cómo sus estrategias, herramientas o filosofías pueden adaptarse a tus propias circunstancias.'
        },
        {
          id: 'quiz-heroes',
          tipo: 'quiz',
          pregunta: '¿Qué herramienta creó Moxie Marlinspike que usa cifrado de extremo a extremo?',
          opciones: [
            'Telegram',
            'Signal',
            'WhatsApp',
            'Tor'
          ],
          respuestaCorrecta: 1,
          explicacion: 'Signal es la aplicación de mensajería más segura, creada por Moxie Marlinspike. Aunque WhatsApp usa el protocolo Signal, la app Signal ofrece mayor privacidad.'
        }
      ],
      recursos: [
        {
          titulo: 'Documental: The Internet\'s Own Boy (Aaron Swartz)',
          tipo: 'enlace',
          url: 'https://www.youtube.com/watch?v=9vz06QO3UkQ',
          descripcion: 'Documental sobre la vida y legado de Aaron Swartz'
        },
        {
          titulo: 'Documental: Citizenfour (Laura Poitras)',
          tipo: 'enlace',
          url: 'https://www.imdb.com/title/tt4044364/',
          descripcion: 'Ganador del Oscar sobre las revelaciones de Snowden'
        },
        {
          titulo: 'Signal - Descarga la app',
          tipo: 'herramienta',
          url: 'https://signal.org/download/',
          descripcion: 'Mensajería segura recomendada por Edward Snowden'
        }
      ]
    },
    {
      id: 'modulo-2-tecnologia-bien-comun',
      titulo: 'Tecnología para el Bien Común',
      descripcion: 'Casos reales donde herramientas digitales salvaron vidas y ayudaron comunidades',
      duracion: 60,
      orden: 2,
      contenido: [
        {
          tipo: 'texto',
          titulo: 'Cuando la tecnología salva vidas',
          contenido: `La tecnología no es neutral. Puede usarse para vigilar y controlar, pero también para liberar y proteger. En esta sección verás ejemplos concretos de cómo herramientas digitales han servido al bien común y protegido a comunidades vulnerables.`
        },
        {
          tipo: 'historia',
          titulo: '🗺️ Ushahidi: Mapeo colaborativo tras el terremoto de Haití',
          contenido: `**"La información salva vidas cuando llega a tiempo."**

En enero de 2010, un terremoto de 7.0 devastó Haití. La infraestructura colapsó, los hospitales estaban saturados y las organizaciones humanitarias no sabían dónde dirigir ayuda.

**La solución vino de Kenia:**
Activistas kenianos habían creado **Ushahidi** (que significa "testimonio" en suajili) para mapear violencia post-electoral en 2008. Ahora lo adaptarían para Haití.

**Cómo funcionó:**
1. Ciudadanos enviaban SMS reportando:
   - Personas atrapadas bajo escombros
   - Necesidades médicas urgentes
   - Suministros disponibles
   - Caminos bloqueados

2. Voluntarios en todo el mundo:
   - Traducían mensajes (del creole al inglés)
   - Verificaban información
   - Georreferenciaban reportes
   - Priorizaban emergencias

3. Equipos de rescate usaban el mapa para:
   - Encontrar sobrevivientes
   - Distribuir agua y alimentos
   - Coordinar esfuerzos médicos

**Resultados:**
• Más de 40,000 reportes procesados
• Cientos de vidas salvadas
• Modelo replicado en desastres posteriores

**Herramientas usadas:**
→ SMS (no requiere smartphone ni internet)
→ Crowdsourcing (sabiduría de las masas)
→ Mapeo geoespacial
→ Plataforma de código abierto

**Impacto duradero:**
Hoy, Ushahidi se usa en:
- Monitoreo de elecciones (Kenya, México, Zimbabwe)
- Respuesta a desastres (Japón, Filipinas)
- Documentación de violencia (Siria, Sudán del Sur)
- Reporte de corrupción (India, Brasil)

💡 **Lección**: La tecnología simple, accesible y de código abierto puede ser más efectiva que soluciones complejas en crisis humanitarias.`
        },
        {
          tipo: 'historia',
          titulo: '🏥 CrowdMed: Diagnósticos médicos mediante inteligencia colectiva',
          contenido: `**"Cuando un médico no puede diagnosticarte, quizás 1,000 médicos sí puedan."**

Millones de personas viven con enfermedades sin diagnosticar, visitando médico tras médico sin respuestas. CrowdMed usa la inteligencia colectiva para resolver casos médicos complejos.

**El problema:**
- Enfermedades raras son difíciles de diagnosticar
- Pacientes gastan años y fortunas sin respuestas
- Médicos especialistas son escasos y costosos

**La solución digital:**
1. Paciente comparte su historia médica anónimamente
2. Médicos, estudiantes y detectores médicos (cualquiera con conocimiento) proponen diagnósticos
3. Sistema de "predicción de mercado" pondera opiniones
4. Algoritmos de IA analizan patrones
5. Paciente recibe posibles diagnósticos para discutir con su médico

**Casos de éxito:**

**María, 34 años (México):**
Después de 7 años con dolor crónico sin explicación y 15 médicos:
- Subió su caso a la plataforma
- 42 profesionales médicos participaron
- En 3 semanas tenía 3 diagnósticos posibles
- Su doctor confirmó: Síndrome de Ehlers-Danlos
- Finalmente recibió tratamiento adecuado

**Por qué funciona:**
• **Diversidad de perspectivas**: Médicos de diferentes especialidades ven lo que otros no
• **Experiencia compartida**: Pacientes con condiciones similares reconocen síntomas
• **IA + Humanos**: La tecnología amplifica, no reemplaza, juicio médico
• **Accesibilidad**: Cuesta menos que una consulta con especialista

**El modelo se replica:**
→ Diagnóstico de enfermedades raras
→ Segunda opinión médica accesible
→ Conexión entre pacientes con condiciones similares
→ Investigación médica colaborativa

💡 **Lección**: El conocimiento distribuido, cuando se organiza correctamente, puede resolver problemas que los expertos individuales no pueden.`
        },
        {
          tipo: 'historia',
          titulo: '🌾 FarmBot: Agricultura de código abierto para combatir hambre',
          contenido: `**"La tecnología que alimenta al mundo debe pertenecer al mundo."**

FarmBot es un robot de jardinería de código abierto que permite a cualquiera cultivar alimentos con precisión, usando tecnología de hardware libre.

**El problema global:**
- 800 millones de personas pasan hambre
- Agricultura industrial agota suelos y usa pesticidas
- Pequeños agricultores no tienen acceso a tecnología
- Conocimiento agrícola se pierde con cada generación

**La solución de código abierto:**
Un robot CNC (como impresoras 3D) adaptado para agricultura:
- Planta semillas con precisión milimétrica
- Riega solo donde y cuando se necesita
- Detecta y elimina maleza sin químicos
- Monitorea salud de plantas con sensores
- Todo controlado desde smartphone

**Lo revolucionario:**
• **Hardware de código abierto**: Planos gratuitos, modificables
• **Software libre**: Personalizable para cualquier clima/cultivo
• **Documentación completa**: Tutoriales para construir tu propio FarmBot
• **Comunidad global**: Agricultores compartiendo mejoras

**Casos de impacto:**

**1. Escuelas en California:**
Estudiantes construyen FarmBots, aprenden:
- Robótica y programación
- Biología y nutrición
- Sostenibilidad ambiental

**2. Comunidades urbanas:**
Azoteas y lotes baldíos convertidos en granjas
- Alimentos frescos en "desiertos alimentarios"
- Reducción de huella de carbono
- Creación de empleos locales

**3. Campos de refugiados:**
Tecnología adaptada para cultivar en condiciones extremas
- Autonomía alimentaria
- Dignidad y esperanza
- Habilidades transferibles

**Herramientas tecnológicas:**
→ Arduino y Raspberry Pi (computación)
→ Sensores de humedad y pH
→ Visión computacional (detectar maleza)
→ Base de datos de plantas (OpenFarm)
→ Aplicación web de código abierto

**El principio filosófico:**
"Si patentamos la tecnología, limitamos quién puede usarla. Si la liberamos, permitimos que evolucione infinitamente más rápido."

💡 **Lección**: El hardware y software libre democratiza tecnologías que podrían resolver crisis globales.`
        },
        {
          tipo: 'historia',
          titulo: '📱 Umbrella App: Seguridad digital para periodistas en peligro',
          contenido: `**"Los periodistas necesitan las mismas herramientas de seguridad que los agentes secretos."**

Desarrollada por Security First, Umbrella es una app gratuita que enseña a periodistas y activistas a mantenerse seguros en situaciones peligrosas.

**Por qué existe:**
En países como México, periodistas enfrentan:
- Secuestros y asesinatos (152 periodistas asesinados desde 2000)
- Vigilancia gubernamental y criminal
- Amenazas en línea y offline
- Falta de entrenamiento en seguridad

**Qué ofrece Umbrella:**

**1. Lecciones de seguridad:**
- Seguridad física (detectar vigilancia, rutas seguras)
- Seguridad digital (cifrado, anonimato, contraseñas)
- Seguridad psicosocial (trauma, estrés, apoyo)
- Situaciones específicas (protestas, zonas de guerra, desastres)

**2. Checklists personalizadas:**
"Voy a cubrir una protesta" → Muestra:
- Qué llevar (batería extra, efectivo, contactos de emergencia)
- Configuración de teléfono (desactivar Touch ID, cifrar dispositivo)
- Protocolos de comunicación (señales de emergencia, código seguro)

**3. Feeds de seguridad:**
Alertas en tiempo real sobre:
- Amenazas en tu zona
- Advertencias de viaje
- Nuevas tácticas de vigilancia

**4. Funciona offline:**
Toda la información descargable
- No necesita internet para consultarse
- Crucial en zonas sin conectividad
- Contenido actualizable cuando hay conexión

**Casos reales de uso:**

**Periodista en Guerrero, México:**
"Antes de cubrir la desaparición de normalistas, consulté Umbrella. Aprendí a:
- Cifrar mis comunicaciones con fuentes
- Guardar evidencia de forma segura
- Crear plan de evacuación
- Informar a red de seguridad de mi ubicación
Estas precauciones probablemente me salvaron la vida."

**Activista LGBTQ+ en Uganda:**
"Umbrella me enseñó a protegerme de vigilancia digital. Cuando descubrí que el gobierno monitoreaba activistas, ya sabía usar VPN, Tor y Signal."

**Herramientas integradas:**
→ Calculadora de riesgo
→ Guías de seguridad por país
→ Protocolos de emergencia
→ Directorio de organizaciones de apoyo

**De código abierto:**
El código está en GitHub para que:
- Expertos en seguridad lo auditen
- Se adapte a contextos específicos
- Nadie pueda meter "puertas traseras"

💡 **Lección**: Capacitación en seguridad debe ser accesible, práctica y diseñada para situaciones reales de riesgo.`
        },
        {
          tipo: 'historia',
          titulo: '🏘️ Safetipin: Mujeres mapeando espacios seguros',
          contenido: `**"Las mujeres conocen qué calles son peligrosas. Ahora tienen forma de compartir ese conocimiento."**

Safetipin nació en India después de brutales casos de violencia contra mujeres. Es una app que permite mapear qué tan seguro es un espacio público.

**El problema:**
Las mujeres ajustan sus vidas alrededor de la seguridad:
- Evitan ciertas calles, especialmente de noche
- Cambian rutas de regreso a casa
- No acceden a oportunidades por miedo
- Este conocimiento de "espacios peligrosos" no se comparte formalmente

**La solución tecnológica:**

**1. Auditoría colaborativa:**
Usuarias califican espacios públicos según:
- Iluminación (¿Hay farolas funcionando?)
- Visibilidad (¿Puede alguien verte si necesitas ayuda?)
- Densidad de personas (¿Hay gente alrededor?)
- Seguridad (¿Te sientes segura?)
- Género (¿Hay diversidad de género o solo hombres?)
- Vigilancia (¿Hay cámaras de seguridad?)

**2. Mapa en tiempo real:**
- Verde: Zona segura
- Amarillo: Precaución
- Rojo: Evitar

**3. Planificador de rutas:**
Como Google Maps, pero prioriza seguridad sobre rapidez
- "Ruta más segura a casa" en lugar de "más rápida"

**Impacto en ciudades:**

**Delhi, India:**
- 50,000 puntos mapeados
- Gobierno usó datos para:
  → Instalar alumbrado en zonas oscuras
  → Aumentar patrullaje en áreas rojas
  → Diseñar transporte público más seguro

**Bogotá, Colombia:**
- Identificación de "puntos calientes" de acoso
- Campañas educativas focalizadas
- Mejoras de infraestructura urbana

**Ciudad de México:**
- Mujeres mapeando transporte público
- Identificación de rutas de microbuses peligrosas
- Presión para cámaras en Metro

**Herramientas usadas:**
→ GPS y geolocalización
→ Crowdsourcing (datos de miles de usuarias)
→ Aprendizaje automático (detecta patrones)
→ Datos abiertos (gobiernos pueden usarlos)

**El efecto multiplicador:**
No solo ayuda a mujeres individuales, sino:
- Presiona a autoridades con datos concretos
- Crea comunidad de mujeres vigilantes
- Visibiliza un problema sistemático
- Mide impacto de políticas públicas

💡 **Lección**: Los datos generados por comunidades vulnerables pueden transformarse en poder político para exigir cambios.`
        },
        {
          tipo: 'alerta',
          contenido: '💚 REFLEXIÓN: Todas estas tecnologías comparten características: son de código abierto, priorizan a comunidades vulnerables, funcionan offline, y ponen el poder en manos de quienes más lo necesitan.'
        },
        {
          tipo: 'lista',
          titulo: '🔑 Principios de tecnología para el bien común',
          contenido: `• **Código abierto**: Transparencia y auditoría comunitaria
• **Accesibilidad**: Funciona en dispositivos básicos y sin internet constante
• **Privacidad por diseño**: Protege a usuarios vulnerables
• **Solución de problemas reales**: No tecnología en busca de problemas
• **Empoderamiento local**: Da herramientas, no crea dependencia
• **Escalabilidad**: De un barrio a ciudades enteras
• **Sostenibilidad**: Modelo que puede mantenerse sin grandes financiamientos`
        }
      ],
      ejercicios: [
        {
          id: 'practica-bien-comun',
          tipo: 'practica',
          pregunta: 'Identifica un problema en tu comunidad que podría beneficiarse de una herramienta digital. Describe: ¿Qué problema resolver? ¿Quién se beneficiaría? ¿Qué herramientas existentes podrían adaptarse?',
          explicacion: 'Piensa en problemas locales: falta de información sobre servicios públicos, coordinación entre vecinos, documentación de problemas urbanos, etc.'
        },
        {
          id: 'quiz-bien-comun',
          tipo: 'quiz',
          pregunta: '¿Qué característica comparten todas las herramientas presentadas en este módulo?',
          opciones: [
            'Todas requieren smartphone de última generación',
            'Todas son de código abierto y priorizan accesibilidad',
            'Todas fueron creadas por gobiernos',
            'Todas cuestan dinero usar'
          ],
          respuestaCorrecta: 1,
          explicacion: 'Las herramientas para el bien común generalmente son de código abierto, accesibles y diseñadas para empoderar a comunidades, no generar ganancias.'
        }
      ],
      recursos: [
        {
          titulo: 'Ushahidi - Plataforma de mapeo',
          tipo: 'herramienta',
          url: 'https://www.ushahidi.com/',
          descripcion: 'Crea mapas colaborativos para tu comunidad'
        },
        {
          titulo: 'Umbrella App - Seguridad para activistas',
          tipo: 'herramienta',
          url: 'https://secfirst.org/umbrella/',
          descripcion: 'Aprende seguridad física y digital'
        },
        {
          titulo: 'FarmBot - Agricultura de código abierto',
          tipo: 'enlace',
          url: 'https://farm.bot/',
          descripcion: 'Planos y software para cultivar con tecnología'
        }
      ]
    },
    {
      id: 'modulo-3-primeros-pasos-seguros',
      titulo: 'Primeros Pasos Seguros',
      descripcion: 'Herramientas y prácticas básicas de seguridad digital',
      duracion: 60,
      orden: 3,
      contenido: [
        {
          tipo: 'texto',
          titulo: 'Tu modelo de amenazas personal',
          contenido: `Antes de implementar herramientas, necesitas entender **quién** podría querer vigilarte, **qué** quieren saber, y **qué** consecuencias enfrentarías.

No todos necesitan el mismo nivel de seguridad. Un estudiante compartiendo memes políticos no enfrenta los mismos riesgos que un periodista investigando cárteles.`
        },
        {
          tipo: 'lista',
          titulo: '❓ Preguntas para evaluar tu riesgo',
          contenido: `**¿Qué quieres proteger?**
• Comunicaciones con fuentes sensibles
• Ubicación física
• Identidad de colaboradores
• Evidencia de abusos
• Tu propia integridad física

**¿De quién lo quieres proteger?**
• Gobierno local, estatal o federal
• Empresas con intereses contrarios a tu causa
• Grupos criminales
• Acosadores en línea
• Competidores que roban información

**¿Cuál es la probabilidad de que necesites protección?**
• ¿Tu activismo es visible públicamente?
• ¿Has recibido amenazas anteriormente?
• ¿Otros en tu área han sido atacados?
• ¿Tu causa es particularmente controversial?

**¿Qué tan graves serían las consecuencias?**
• Pérdida de empleo
• Acoso en línea
• Persecución legal
• Violencia física
• Amenazas a familiares`
        },
        {
          tipo: 'texto',
          titulo: 'Niveles de seguridad progresivos',
          contenido: `**NIVEL 1 - Higiene digital básica (TODOS)**
Para cualquier persona que use internet:
• Contraseñas únicas y fuertes
• Autenticación de dos factores (2FA)
• Actualizaciones de software al día
• Navegador configurado para privacidad
• Antivirus actualizado

**NIVEL 2 - Activista digital (Personas con cierta exposición)**
Si tu activismo es público en redes sociales:
• VPN para navegar
• Signal para comunicaciones sensibles
• Configuración de privacidad en redes sociales
• Cifrado de dispositivos
• Respaldos seguros de información

**NIVEL 3 - Alto riesgo (Periodistas, defensores de DDHH)**
Si enfrentas amenazas activas:
• Sistema operativo enfocado en seguridad (Tails, Qubes)
• Tor para anonimato
• PGP para cifrar emails
• Dispositivos secundarios para trabajo sensible
• Protocolos de emergencia establecidos
• Red de seguridad y apoyo psicosocial`
        },
        {
          tipo: 'texto',
          titulo: 'Herramienta 1: Gestor de contraseñas',
          contenido: `**El problema:**
Usamos contraseñas débiles (123456, nombre+fecha) o la misma contraseña para todo. Cuando hackean un sitio, tienen acceso a todas tus cuentas.

**La solución: Bitwarden**
Un gestor de contraseñas de código abierto y gratuito que:
• Genera contraseñas aleatorias únicas para cada sitio
• Las almacena cifradas
• Solo necesitas recordar UNA contraseña maestra fuerte
• Funciona en todos tus dispositivos

**Contraseña maestra recomendada:**
No uses: "Contraseña123"
Usa: "Café-Montaña-Gato-2024!" (frase memorable + símbolos)

**Instalación:**
1. Descarga Bitwarden (bitwarden.com)
2. Crea cuenta con contraseña maestra FUERTE
3. Instala extensión de navegador
4. Gradualmente cambia contraseñas de cuentas importantes`
        },
        {
          tipo: 'texto',
          titulo: 'Herramienta 2: Autenticación de dos factores (2FA)',
          contenido: `**El problema:**
Incluso con contraseña fuerte, pueden robarla mediante phishing. 2FA añade una segunda capa.

**Opciones de 2FA (de más a menos segura):**

1. **Llave física (YubiKey)** - La más segura
   - Dispositivo USB que debes tener físicamente
   - Imposible de hackear remotamente
   - Costo: $25-50 USD

2. **Aplicación autenticadora (Authy, Google Authenticator)**
   - Genera códigos de 6 dígitos cada 30 segundos
   - Funciona sin internet
   - Gratuita
   - ✅ RECOMENDADA PARA MAYORÍA

3. **SMS** - Evitar si es posible
   - Vulnerable a SIM swapping
   - Mejor que nada, pero no ideal

**Configuración rápida:**
1. Descarga Authy o Google Authenticator
2. Ve a configuración de seguridad de cada cuenta importante
3. Busca "Autenticación de dos factores" o "2FA"
4. Escanea código QR con la app
5. Guarda códigos de recuperación en lugar seguro`
        },
        {
          tipo: 'texto',
          titulo: 'Herramienta 3: Signal - Mensajería cifrada',
          contenido: `**Por qué importa:**
WhatsApp (propiedad de Meta) tiene acceso a:
- Quién habla con quién
- Cuándo hablan
- Cuántos mensajes intercambian
- Tu lista de contactos
- Tus grupos

Signal NO tiene acceso a nada de eso. Ni siquiera ellos pueden leer tus mensajes.

**Características de Signal:**
• Cifrado de extremo a extremo en TODO (mensajes, llamadas, video)
• Mensajes que desaparecen automáticamente
• No recolecta metadatos
• Código abierto (cualquiera puede auditarlo)
• Gratis y sin anuncios
• Respaldado por Edward Snowden

**Configuración recomendada:**
1. Descarga Signal (signal.org)
2. Verifica número de seguridad con contactos importantes
3. Activa "Mensajes que desaparecen" (1 semana) para chats sensibles
4. Desactiva vista previa de notificaciones
5. Activa PIN de Signal para proteger respaldos

**Cuándo usar Signal vs WhatsApp:**
• **Signal**: Coordinación de activismo, comunicación con fuentes, información sensible
• **WhatsApp**: Chat con familia, organizar comidas, memes`
        },
        {
          tipo: 'texto',
          titulo: 'Herramienta 4: VPN - Navegación privada',
          contenido: `**Qué hace una VPN:**
Imagina que tu conexión de internet es un tubo transparente. Tu proveedor de internet, gobierno, hackers en WiFi público... todos pueden ver qué sitios visitas.

Una VPN crea un túnel cifrado. Solo ven que estás conectado a la VPN, no qué haces dentro.

**Casos de uso:**
• Conectarte a WiFi público (cafeterías, aeropuertos)
• Evitar que tu ISP venda tu historial de navegación
• Acceder a contenido bloqueado geográficamente
• Proteger tu ubicación real

**VPNs recomendadas:**
1. **ProtonVPN** (Gratis con límites, de confianza)
2. **Mullvad** (€5/mes, acepta efectivo, muy privada)
3. **IVPN** (Similar a Mullvad)

**VPNs a EVITAR:**
❌ VPNs "gratis" que venden tus datos
❌ VPNs con sede en países con vigilancia masiva
❌ VPNs que guardan logs de navegación

**Configuración básica:**
1. Descarga VPN de confianza
2. Actívala antes de conectarte a WiFi público
3. Elige servidor en país con buenas leyes de privacidad
4. Verifica que funciona: ipleak.net`
        },
        {
          tipo: 'codigo',
          titulo: 'Configuración de Firefox para máxima privacidad',
          contenido: `Pasos para configurar Firefox (el navegador más privado):

1. CONFIGURACIÓN BÁSICA
   about:preferences#privacy
   - Protección contra rastreo: "Estricta"
   - Cookies: "Eliminar al cerrar Firefox"
   - No rastrear (DNT): Activar
   - Permisos de ubicación/cámara/micrófono: Bloquear por defecto

2. DNS SOBRE HTTPS
   about:preferences#general (scroll hasta abajo)
   - Activar "DNS sobre HTTPS"
   - Proveedor: Cloudflare o NextDNS

3. EXTENSIONES ESENCIALES
   - uBlock Origin (bloquea rastreadores y anuncios)
   - Privacy Badger (detecta rastreadores ocultos)
   - HTTPS Everywhere (fuerza conexiones seguras)
   - Firefox Multi-Account Containers (aísla sitios)

4. CONFIGURACIÓN AVANZADA (about:config)
   privacy.resistFingerprinting = true
   privacy.trackingprotection.enabled = true
   geo.enabled = false
   webgl.disabled = true

5. MOTOR DE BÚSQUEDA
   Cambiar a DuckDuckGo o Startpage
   (No Google, que rastrea todo)`
        },
        {
          tipo: 'lista',
          titulo: '✅ Tu checklist de seguridad básica',
          contenido: `□ Bitwarden instalado y contraseñas cambiadas en cuentas principales
□ 2FA activado en: Email, redes sociales, banca
□ Signal instalado y contactos importantes migrados
□ VPN instalada (al menos gratis como ProtonVPN)
□ Firefox configurado con extensiones de privacidad
□ Cifrado de dispositivo activado (FileVault/BitLocker)
□ Respaldo de información importante en disco cifrado
□ Códigos de recuperación de 2FA guardados en lugar seguro
□ Configuración de privacidad revisada en todas las redes sociales
□ Antivirus actualizado (Windows Defender es suficiente en Windows)`
        }
      ],
      ejercicios: [
        {
          id: 'practica-seguridad',
          tipo: 'practica',
          pregunta: 'Completa al menos 5 items de la checklist de seguridad. Describe cuáles completaste y qué desafíos encontraste.',
          explicacion: 'La seguridad digital no se logra en un día. Empieza con lo básico y añade capas con el tiempo.'
        },
        {
          id: 'quiz-herramientas',
          tipo: 'quiz',
          pregunta: '¿Qué herramienta usarías para proteger comunicaciones sensibles con fuentes periodísticas?',
          opciones: [
            'WhatsApp',
            'Facebook Messenger',
            'Signal',
            'Telegram'
          ],
          respuestaCorrecta: 2,
          explicacion: 'Signal ofrece el cifrado más fuerte y no recolecta metadatos, siendo la opción más segura para periodistas y activistas.'
        }
      ],
      recursos: [
        {
          titulo: 'Bitwarden - Gestor de contraseñas',
          tipo: 'herramienta',
          url: 'https://bitwarden.com/',
          descripcion: 'Gestor de contraseñas gratuito y de código abierto'
        },
        {
          titulo: 'Signal - Mensajería segura',
          tipo: 'herramienta',
          url: 'https://signal.org/',
          descripcion: 'La app de mensajería más segura del mundo'
        },
        {
          titulo: 'ProtonVPN - VPN gratuita',
          tipo: 'herramienta',
          url: 'https://protonvpn.com/',
          descripcion: 'VPN de confianza con versión gratuita'
        },
        {
          titulo: 'Security in a Box - Guía completa',
          tipo: 'enlace',
          url: 'https://securityinabox.org/es/',
          descripcion: 'Recursos de seguridad digital en español'
        }
      ]
    },
    {
      id: 'modulo-4-red-apoyo-mexico',
      titulo: 'Red de Apoyo en México',
      descripcion: 'Organizaciones, recursos y comunidad para activistas digitales',
      duracion: 60,
      orden: 4,
      contenido: [
        {
          tipo: 'texto',
          titulo: 'No estás solo: El ecosistema de apoyo en México',
          contenido: `El activismo digital en México cuenta con una red robusta de organizaciones, colectivos y recursos. Conocerlos puede marcar la diferencia entre sentirte aislado y tener un equipo de apoyo.`
        },
        {
          tipo: 'historia',
          titulo: '🔴 R3D - Red en Defensa de los Derechos Digitales',
          contenido: `**Misión:** Defender libertades fundamentales en internet

**Qué hacen:**
• **Investigación y documentación**: Exponen casos de espionaje gubernamental (Pegasus), censura y vigilancia
• **Incidencia en políticas**: Cabildean para leyes que protejan derechos digitales
• **Litigio estratégico**: Llevan casos a tribunales para sentar precedentes
• **Capacitación**: Talleres de seguridad digital para periodistas y activistas

**Casos icónicos:**
• Exposición del espionaje con Pegasus en México
• Defensa de neutralidad de red ante IFT
• Batalla legal contra retención de datos biométricos

**Cómo te pueden ayudar:**
- Reportar amenazas digitales o vigilancia
- Consultar sobre derechos digitales
- Acceder a capacitaciones gratuitas
- Unirte a campañas de defensa digital

**Contacto:** r3d.mx | @R3Dmx`
        },
        {
          tipo: 'historia',
          titulo: '📰 Artículo 19 - Libertad de expresión y prensa',
          contenido: `**Misión:** Proteger a periodistas y defender libertad de expresión

**Servicios para periodistas:**
• **Asesoría legal gratuita**: Si enfrentas demandas por tu trabajo periodístico
• **Seguridad integral**: Protocolos de seguridad física y digital
• **Acompañamiento psicosocial**: Apoyo emocional tras amenazas o ataques
• **Documentación de agresiones**: Registro de casos para presión política

**Recursos destacados:**
→ **Plataforma de Seguridad Integral**: seguridadintegral.articulo19.org
   - Guías sobre seguridad física y digital
   - Protocolos ante amenazas
   - Directorio de apoyo legal

→ **Informe anual**: Documenta todas las agresiones contra prensa en México

**Casos que han apoyado:**
- Periodistas amenazados por coberturas de narco
- Defensores de derechos humanos bajo vigilancia
- Activistas demandados por "difamación"

**Cómo acceder:**
- Línea de emergencia 24/7 para periodistas en riesgo
- Talleres presenciales y en línea
- Consultoría en protocolos de seguridad

**Contacto:** articulo19.org | @article19mex`
        },
        {
          tipo: 'historia',
          titulo: '💻 SocialTIC - Tecnología e innovación social',
          contenido: `**Misión:** Usar tecnología para fortalecer organizaciones sociales

**Lo que ofrecen:**
• **Capacitaciones en herramientas digitales**: Desde Excel hasta análisis de datos complejos
• **Seguridad digital**: Talleres prácticos de autodefensa digital
• **Gestión de datos**: Cómo recolectar, analizar y visualizar datos para causas sociales
• **Tecnologías cívicas**: Desarrollar herramientas digitales para comunidades

**Programas destacados:**
→ **Escuela de Datos**: Aprende a usar datos para incidencia
→ **Verificación de desinformación**: Cómo identificar y combatir fake news
→ **Seguridad holística**: No solo digital, también física y emocional

**Recursos gratuitos:**
- Guías descargables sobre seguridad digital
- Webinars sobre herramientas para activismo
- Consultoría para organizaciones sin fines de lucro

**Casos de impacto:**
- Capacitación a comunidades indígenas para documentar despojos
- Herramientas de mapeo para defensoras del territorio
- Plataformas de denuncia ciudadana

**Contacto:** socialtic.org | @socialtic`
        },
        {
          tipo: 'texto',
          titulo: '🆘 Otros recursos y organizaciones clave',
          contenido: `**Mexicanos Contra la Corrupción (MCCI)**
Periodismo de investigación e incidencia anticorrupción
- Plataforma: contralacorrupcion.mx
- Apoya a periodistas con investigaciones de datos

**Luchadoras**
Feminismo y seguridad digital
- Guías específicas para mujeres activistas
- Talleres sobre violencia digital de género
- Contacto: luchadoras.mx

**Iniciativa Mesoamericana de Mujeres Defensoras de DDHH**
Protección integral para defensoras
- Red de apoyo transnacional
- Seguridad física, digital y emocional
- Contacto: im-defensoras.org

**Artículo 12**
Documentación de tortura y defensa de víctimas
- Acompañamiento legal
- Peritajes especializados
- Contacto: articulo12.org.mx

**Centro de Derechos Humanos Miguel Agustín Pro Juárez (Centro Prodh)**
Defensa de derechos humanos desde litigio estratégico
- Casos emblemáticos (Ayotzinapa, Tlatlaya)
- Seguridad para defensores
- Contacto: centroprodh.org.mx`
        },
        {
          tipo: 'lista',
          titulo: '🛠️ Herramientas y plataformas mexicanas',
          contenido: `**Verificado**
• Combate a desinformación
• verificado.mx

**Animal Político**
• Periodismo independiente
• Verificador de discurso político
• animalpolitico.com

**Serendipia**
• Periodismo de datos
• Investigaciones profundas
• serendipia.digital

**Data Cívica**
• Análisis de datos para políticas públicas
• datacivica.org

**Codeando México**
• Comunidad de tecnólogos cívicos
• Hackathons y proyectos abiertos
• codeandomexico.org`
        },
        {
          tipo: 'texto',
          titulo: '📞 Qué hacer en caso de emergencia',
          contenido: `**Si recibes amenazas:**
1. **NO borres las amenazas** - Son evidencia
2. **Toma screenshots** con fecha y hora visible
3. **Contacta inmediatamente:**
   - Artículo 19: +52 55 1054 6500 (24/7)
   - R3D: contacto@r3d.mx
   - Policía cibernética: 089 o 55 5242 5100

**Si detectas vigilancia digital:**
1. **No confrontes** al presunto vigilante
2. **Documenta**: Capturas de pantalla, logs, comportamiento extraño
3. **Cambia contraseñas** desde dispositivo seguro
4. **Activa 2FA** en todas las cuentas
5. **Contacta a R3D** para análisis forense

**Si pierdes o roban tu dispositivo:**
1. **Borra remotamente** (Find My iPhone, Android Device Manager)
2. **Cambia contraseñas** desde otro dispositivo
3. **Notifica a contactos** sobre posible suplantación
4. **Reporta a policía** (para seguro, no esperes mucho de ellos)

**Si te hackean:**
1. **Desconecta internet** del dispositivo
2. **NO pagues rescate** si es ransomware
3. **Contacta a expertos**: SocialTIC o R3D
4. **Formatea** después de respaldar evidencia
5. **Cambia TODAS las contraseñas** desde dispositivo limpio`
        },
        {
          tipo: 'lista',
          titulo: '🤝 Cómo conectar con la comunidad',
          contenido: `**Grupos y comunidades:**
• **DefensoresDigitales** - Telegram de apoyo mutuo
• **HacksHackers México** - Periodistas y programadores
• **Cyborgfeminista** - Feminismo y tecnología
• **Rancho Electrónico** - Seguridad y privacidad

**Eventos anuales:**
• **Campus Party México** - Tecnología y activismo
• **Foro Internacional por los DDHH** - Networking
• **RightsCon** - Evento global de derechos digitales

**Capacitaciones regulares:**
• R3D ofrece talleres mensuales gratuitos
• SocialTIC tiene cursos en línea
• Artículo 19 da certificaciones en seguridad

**Cómo contribuir:**
• Voluntariado en organizaciones
• Donativos (todas aceptan PayPal o transferencia)
• Difusión de campañas
• Participación en consultas públicas
• Compartir conocimiento con otros`
        },
        {
          tipo: 'alerta',
          contenido: '💡 IMPORTANTE: Guardar contactos de emergencia en lugar seguro, ANTES de que los necesites. En una crisis, no querrás estar buscando números de teléfono.'
        }
      ],
      ejercicios: [
        {
          id: 'practica-red',
          tipo: 'practica',
          pregunta: 'Elige UNA organización de esta lista que resuene con tu tipo de activismo. Visita su sitio web, síguelos en redes sociales y suscríbete a su newsletter o boletín. Describe qué te llamó la atención.',
          explicacion: 'Construir tu red de apoyo empieza por conocer quién hace qué. No necesitas contactarlos todos, solo saber que existen cuando los necesites.'
        },
        {
          id: 'reflexion-final',
          tipo: 'reflexion',
          pregunta: 'Después de completar este nivel: ¿Qué aprendiste que te sorprendió? ¿Qué herramientas vas a implementar primero? ¿Cómo planeas aplicar este conocimiento en tu activismo?',
          explicacion: 'Reflexionar sobre lo aprendido ayuda a consolidar conocimiento y crear plan de acción concreto.'
        }
      ],
      recursos: [
        {
          titulo: 'R3D - Red en Defensa de los Derechos Digitales',
          tipo: 'enlace',
          url: 'https://r3d.mx/',
          descripcion: 'Organización líder en derechos digitales en México'
        },
        {
          titulo: 'Artículo 19 - Plataforma de Seguridad Integral',
          tipo: 'enlace',
          url: 'https://seguridadintegral.articulo19.org/',
          descripcion: 'Recursos completos de seguridad para periodistas'
        },
        {
          titulo: 'SocialTIC - Recursos de seguridad digital',
          tipo: 'enlace',
          url: 'https://socialtic.org/blog/',
          descripcion: 'Guías y tutoriales prácticos en español'
        },
        {
          titulo: 'Directorio de Organizaciones de DDHH en México',
          tipo: 'descarga',
          url: 'https://www.hchr.org.mx/organizaciones-de-la-sociedad-civil/',
          descripcion: 'Lista completa de organizaciones por estado y causa'
        }
      ]
    }
  ]
};

export const cursosDisponibles = [cursoNivel1];
