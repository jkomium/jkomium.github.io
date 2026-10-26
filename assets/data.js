/* ==========================================================================
   CONTENIDO DEL PORTFOLIO — editá SOLO este archivo para cambiar textos y datos
   --------------------------------------------------------------------------
   Textos en dos idiomas:  { en:"English", es:"Español" }
   fecha: "AAAA-MM". Solo se usa para ordenar (más nuevo / más antiguo).
          NO se muestra en la página. Las fechas actuales son provisorias:
          siguen el orden en que se pasaron los proyectos. Ajustalas.
   videos: cada video lleva  file:"Nombre.mp4"  como identificador. Su link de
           YouTube se pega en la tabla "youtube" de abajo (también se puede
           poner  yt:"link"  directo en un video que no tenga archivo).
           Un elemento CON videos tiene página propia.
           Un elemento SIN videos muestra una etiqueta al pasar el mouse
           (descripción + link, si tiene).
   oculto: true en un elemento lo saca de la página (sigue en el código y se puede volver a mostrar quitando esa línea).
   rel:    ["juegos/id", "sistemas/id"] → elementos relacionados en la página.
   ========================================================================== */
window.CONFIG = {

  nombre: "jkom",

  /* Imágenes del hero: al abrir la página se elige una al azar (50/50). Sin imágenes = iniciales. */
  avatars: ["JKOMIMG1.PNG", "JKOMIMG2.png"],

  /* Contacto: dejá vacío lo que no uses y no se muestra. */
  contacto: {
    discord: "jkom1",
    tiktok: "https://www.tiktok.com/@jkomium1",
    roblox: "https://www.roblox.com/users/585060/profile",
    devforum: "",
    youtube: "",
    email: ""
  },

  /* ==========================================================================
     VIDEOS EN YOUTUBE — un solo lugar para pegar todos los links
     --------------------------------------------------------------------------
     Subí cada video como "No listado" (con "Permitir inserción" activado) y
     pegá su link entre las comillas, al lado del nombre del archivo.
     Un mismo video usado en dos lugares (por ejemplo el sistema de diálogo)
     usa una sola entrada. Si un link queda vacío, la página usa el archivo
     local de /videos como respaldo; cuando todos estén completos podés borrar
     el acceso directo /videos y no subirlo.
     Formatos válidos: https://youtu.be/XXXXXXXXXXX  o  https://www.youtube.com/watch?v=XXXXXXXXXXX
     ========================================================================== */
  youtube: {
    "Randomizer hispano.mp4": "",
    "Ramiro21 gameplay.mp4": "",
    "Fernan item asylum.mp4": "",
    "NPCs Item asylum.mp4": "",
    "Sistema de dialogo item asylum.mp4": "",
    "Anticheat.mp4": "",
    "Momos.mp4": "",
    "Juego autos.mp4": "",
    "Coche nashe.mp4": "",
    "Censor.mp4": "",
    "Juego WHITE UI.mp4": "",
    "Juego WHITE.mp4": "",
    "SR25.mp4": "",
    "M4.mp4": "",
    "M4A1.mp4": "",
    "UCH.mp4": "",
    "ASCII.mp4": "",
    "TestUrMight.mp4": "",
    "Dynamo.mp4": ""
    /* Sin usar por ahora: "Sistema de armas basico.mp4", "Underbound.mp4" */
  },

  /* ==========================================================================
     1) JUEGOS — proyectos míos, juegos enteros
     ========================================================================== */
  juegos: [
    {
      id: "spanish-rumble",
      fecha: "2026-08",
      titulo: "Spanish Rumble",
      rol: { en: "Scripting & framework architecture", es: "Scripting y arquitectura del framework" },
      desc: {
        en: "A Spanish-language randomizer brawler inspired by Item Asylum: you get three random tools and have to fight your way through with them. My biggest personal project, in active development.",
        es: "Un brawler randomizer en español inspirado en Item Asylum: recibes tres herramientas al azar y tienes que pelear con ellas. Mi proyecto personal más grande, en desarrollo activo."
      },
      long: {
        en: "Spanish Rumble drops you into the arena with three random tools and nothing else. Whatever you get is what you have to win with.\n\nIt has been in development for two and a half months and it is the personal project I've taken the furthest. Under it sits a large, modular framework: it stays light, supports every device, and its architecture makes changes cheap, so new content slots in without touching the rest of the game.",
        es: "Spanish Rumble te lanza a la arena con tres herramientas al azar y nada más. Lo que te toque es con lo que tienes que ganar.\n\nLleva dos meses y medio de desarrollo y es el proyecto personal que más lejos he llevado. Debajo hay un framework grande y modular: se mantiene liviano, soporta todos los dispositivos y su arquitectura hace que cambiar cosas cueste poco, así el contenido nuevo entra sin tocar el resto del juego."
      },
      puntos: [
        { en: "Large modular framework: changes and new content slot in without friction.",
          es: "Framework grande y modular: los cambios y el contenido nuevo se integran sin fricción." },
        { en: "Optimized to stay light, with support for every device.",
          es: "Optimizado para mantenerse liviano, con soporte para todos los dispositivos." },
        { en: "Three random tools per player, each with its own skills.",
          es: "Tres herramientas al azar por jugador, cada una con sus propias habilidades." },
        { en: "Playtested with content creators and still being updated.",
          es: "Probado con creadores de contenido y en actualización continua." }
      ],
      rel: ["sistemas/dialogue-system"],
      videos: [
        { t: { en: "Randomizer hispano", es: "Randomizer hispano" },
          file: "Randomizer hispano.mp4" },
        { t: { en: "Ramiro21 gameplay", es: "Gameplay de Ramiro21" },
          file: "Ramiro21 gameplay.mp4",
          d: { en: "A showcase recorded by the YouTuber Ramiro21, who was invited to the game's playtest.",
               es: "Un video showcase grabado por el youtuber Ramiro21, a quien se invitó al playtest del juego." },
          link: { label: { en: "Watch the full video", es: "Ver el video completo" },
                  url: "https://www.youtube.com/watch?v=Ui8Jt6JFCkM" } },
        { t: { en: "Fernan — Item Asylum", es: "Fernan — Item Asylum" },
          file: "Fernan item asylum.mp4" },
        { t: { en: "NPCs — Item Asylum", es: "NPCs — Item Asylum" },
          file: "NPCs Item asylum.mp4" },
        { t: { en: "Dialogue system — Item Asylum", es: "Sistema de diálogo — Item Asylum" },
          file: "Sistema de dialogo item asylum.mp4" }
      ]
    },
    {
      id: "one-night-at-momos",
      fecha: "2026-05",
      titulo: "One Night at Momo's",
      rol: { en: "Scripting & mechanics", es: "Scripting y mecánicas" },
      desc: {
        en: "A Five Nights at Freddy's–style game about a streamer. It started as a joke, but it ships with its own mechanics and properly scripted systems.",
        es: "Un juego estilo Five Nights at Freddy's sobre un streamer. Nació como una broma, pero tiene mecánicas propias y sistemas bien scripteados."
      },
      videos: [
        { t: { en: "Gameplay", es: "Gameplay" }, file: "Momos.mp4" }
      ]
    },
    {
      id: "run-from-asgore",
      oculto: true,
      fecha: "2025-10",
      titulo: "Run From Asgore",
      desc: {
        en: "One against everyone: one player becomes Asgore and hunts down the rest in a car.",
        es: "Uno contra todos: a alguien le toca ser Asgore y persigue a los demás con un auto."
      },
      link: "https://www.roblox.com/games/130321648642486/Run-From-Asgore"
    },
    {
      id: "escape-from-asgore-simulator",
      oculto: true,
      fecha: "2025-03",
      titulo: "Escape From Asgore Simulator",
      desc: {
        en: "A pure obstacle-course sprint: run, dodge and reach the end.",
        es: "Una carrera de obstáculos pura: corre, esquiva y llega hasta el final."
      },
      link: "https://www.roblox.com/games/109278988001743/Escape-From-Asgore-Simulator"
    }
  ],

  /* ==========================================================================
     2) SISTEMAS — sistemas propios, independientes
     ========================================================================== */
  sistemas: [
    {
      id: "car-chassis",
      fecha: "2026-09",
      titulo: "Car Chassis",
      rol: { en: "Vehicle system", es: "Sistema de vehículos" },
      desc: {
        en: "A custom vehicle chassis built around its own handling and suspension.",
        es: "Un chasis de vehículo propio, construido alrededor de su manejo y su suspensión."
      },
      nota: {
        en: "I contributed to building this system; it was not made entirely by me.",
        es: "Contribuí en la creación de este sistema; no está hecho completamente por mí."
      },
      videos: [ { t: { en: "Driving", es: "Manejo" }, file: "Juego autos.mp4" } ]
    },
    {
      id: "dialogue-system",
      fecha: "2026-08",
      titulo: "Dialogue System",
      rol: { en: "Gameplay system", es: "Sistema de gameplay" },
      desc: {
        en: "A fully custom dialogue system: response options, animated speaker sprites, per-line sound and expressive text presets.",
        es: "Un sistema de diálogos totalmente propio: opciones de respuesta, sprites animados, sonido por línea y presets de texto expresivo."
      },
      rel: ["juegos/spanish-rumble"],
      videos: [ { t: { en: "In game", es: "En el juego" }, file: "Sistema de dialogo item asylum.mp4" } ]
    },
    {
      id: "anticheat",
      fecha: "2026-07-15",
      titulo: "Anticheat",
      rol: { en: "Anti-exploit", es: "Anti-exploit" },
      desc: {
        en: "If it detects any interception of the game's remotes, using a tracer that checks the stack environment, it shows the exploiter their own IP address on their own computer, and sends their username to a webhook so the game is notified about the exploiter.",
        es: "Si detecta alguna intercepción en los remotos del juego, usando un tracer y revisando el environment del stack, le muestra en su propia computadora al exploiter su dirección IP, y también manda su usuario a un webhook para que se le notifique al juego del exploiter."
      },
      long: {
        en: "If it detects any interception of the game's remotes, using a tracer that checks the stack environment, it shows the exploiter their own IP address on their own computer, and sends their username to a webhook so the game is notified about the exploiter.\n\nBuilt to stop exploiters who don't know how to bypass the client: the ones who just copy and paste whatever they find on Pastebin.",
        es: "Si detecta alguna intercepción en los remotos del juego, usando un tracer y revisando el environment del stack, le muestra en su propia computadora al exploiter su dirección IP, y también manda su usuario a un webhook para que se le notifique al juego del exploiter.\n\nHecho para frenar a los exploiters que no saben cómo bypassear el cliente: los que solo hacen copy paste de cualquier pastebin que ven."
      },
      videos: [ { t: { en: "Demo", es: "Demo" }, file: "Anticheat.mp4" } ]
    },
    {
      id: "face-censor",
      fecha: "2026-07",
      titulo: "Face Censor",
      rol: { en: "Client system", es: "Sistema de cliente" },
      desc: {
        en: "A circular censor that covers a character's face and stays locked on top of it from any camera angle.",
        es: "Una censura circular que cubre la cara de un personaje y se mantiene encima desde cualquier ángulo de cámara."
      },
      videos: [ { t: { en: "Demo", es: "Demo" }, file: "Censor.mp4" } ]
    },
    {
      id: "donation-game",
      fecha: "2026-06",
      titulo: "Donation Game",
      rol: { en: "UI & backend", es: "UI y backend" },
      desc: {
        en: "UI work plus the systems behind it: DataStores and external API connections.",
        es: "Trabajo de UI y los sistemas que lo respaldan: DataStores y conexión con APIs externas."
      },
      videos: [
        { t: { en: "Interface", es: "Interfaz" }, file: "Juego WHITE UI.mp4" },
        { t: { en: "In game", es: "En el juego" }, file: "Juego WHITE.mp4" }
      ]
    },
    {
      id: "viewmodels",
      oculto: true,
      fecha: "2026-05",
      titulo: "Viewmodels",
      rol: { en: "Weapon viewmodel framework", es: "Framework de viewmodels de armas" },
      desc: {
        en: "A config-driven framework that brings many weapon viewmodels to life, however simple their rig is.",
        es: "Un framework basado en configuración que da vida a muchos viewmodels de armas, por simple que sea su rig."
      },
      long: {
        en: "An attempt to give life to many viewmodels through a simple configuration and an extensive framework. However basic the rig or the scripting around it, you still get a good viewmodel, because everything is already set up inside the system.\n\nIt was tested on plenty of viewmodels.",
        es: "Un sistema pensado para darle vida a múltiples viewmodels a través de una configuración simple y un extenso framework. Por más básico que sea el rig, o tus habilidades programando, ya tienes todo montado en el sistema y obtienes un buen viewmodel.\n\nSe probó con bastantes viewmodels."
      },
      videos: [
        { t: { en: "SR25", es: "SR25" }, file: "SR25.mp4" },
        { t: { en: "M4", es: "M4" }, file: "M4.mp4" },
        { t: { en: "M4A1", es: "M4A1" }, file: "M4A1.mp4" }
      ]
    },
    {
      id: "parkour",
      oculto: true,
      fecha: "2026-04",
      titulo: "Parkour",
      rol: { en: "Movement system", es: "Sistema de movimiento" },
      desc: {
        en: "A parkour system inspired by Ultimate Chicken Horse.",
        es: "Un sistema de parkour inspirado en Ultimate Chicken Horse."
      },
      videos: [ { t: { en: "Demo", es: "Demo" }, file: "UCH.mp4" } ]
    },
    {
      id: "delivery",
      fecha: "2026-03",
      titulo: "Delivery System",
      desc: {
        en: "The delivery interface and system: it weighs distance, active packages and how carefully you drove, tracked through a state watcher.",
        es: "La interfaz y el sistema de entregas: toma en cuenta la distancia, los paquetes activos y qué tan cuidadoso fuiste en el viaje, a través de un watcher de estado."
      },
      videos: [ { t: { en: "Demo", es: "Demo" }, file: "Coche nashe.mp4" } ]
    },
    {
      id: "ascii-renderer",
      fecha: "2026-02",
      titulo: "ASCII Renderer",
      rol: { en: "Rendering experiment", es: "Experimento de renderizado" },
      desc: {
        en: "An ASCII renderer built inside Roblox.",
        es: "Un renderizador ASCII construido dentro de Roblox."
      },
      videos: [ { t: { en: "Demo", es: "Demo" }, file: "ASCII.mp4" } ]
    },
    {
      id: "test-your-might",
      fecha: "2026-01",
      titulo: "Test Your Might",
      rol: { en: "Minigame", es: "Minijuego" },
      desc: {
        en: "A take on the classic Test Your Might strength minigame.",
        es: "Una versión del clásico minijuego de fuerza Test Your Might."
      },
      videos: [ { t: { en: "Demo", es: "Demo" }, file: "TestUrMight.mp4" } ]
    },
    {
      id: "dynamo-flashlight",
      oculto: true,
      fecha: "2025-12",
      titulo: "Dynamo Flashlight",
      rol: { en: "Item mechanic", es: "Mecánica de ítem" },
      desc: {
        en: "A dynamo-powered flashlight mechanic.",
        es: "Una mecánica de linterna a dínamo."
      },
      videos: [ { t: { en: "Demo", es: "Demo" }, file: "Dynamo.mp4" } ]
    }
  ],

  /* ==========================================================================
     3) EQUIPOS — grupos para los que trabajé (vacío = la sección no se muestra)
     --------------------------------------------------------------------------
     Mismo formato que los demás. Ejemplo:
       { id:"mi-equipo", fecha:"2026-01", titulo:"Nombre del equipo",
         rol:{en:"Scripter", es:"Scripter"},
         desc:{en:"...", es:"..."},
         videos:[ { t:{en:"...",es:"..."}, file:"archivo.mp4" } ] }
     ========================================================================== */
  equipos: [],

  /* ---- Servicios ---- */
  servicios: [
    { t: { en: "Combat systems", es: "Sistemas de combate" },
      d: { en: "Items, skills, hitboxes and projectiles, validated on the server and built to scale.",
           es: "Ítems, habilidades, hitboxes y proyectiles, validados en el servidor y hechos para escalar." } },
    { t: { en: "NPCs & AI", es: "NPCs e IA" },
      d: { en: "Enemies that chase, strike and react believably instead of waiting to be hit.",
           es: "Enemigos que persiguen, atacan y reaccionan de forma creíble, en vez de esperar a que les pegues." } },
    { t: { en: "Interfaces", es: "Interfaces" },
      d: { en: "Responsive UI for PC and mobile: HUDs, health bars, wheels and dialogues.",
           es: "UI adaptable a PC y móvil: HUDs, barras de vida, ruedas y diálogos." } },
    { t: { en: "Optimization", es: "Optimización" },
      d: { en: "Bandwidth, memory and load-time work that keeps a game lean without losing features.",
           es: "Trabajo de bandwidth, memoria y tiempos de carga para mantener el juego liviano sin perder funciones." } },
    { t: { en: "Anti-exploit", es: "Anti-exploit" },
      d: { en: "Server validation, abuse guards and detection so exploiters have a hard time.",
           es: "Validación en el servidor, protecciones contra abuso y detección para que a los exploiters les cueste." } },
    { t: { en: "Full systems", es: "Sistemas completos" },
      d: { en: "DataStores, purchases, external APIs and the glue that ties them together.",
           es: "DataStores, compras, APIs externas y todo lo que las une." } }
  ],

  /* ---- Precio mínimo de contratación (USD) ---- */
  precioMinimo: 100,
  precioRobux: "30k",

  /* ---- Métodos de pago (se muestran debajo del precio) ---- */
  pagos: ["PayPal", "Robux", "MercadoPago", "Crypto"]
};
