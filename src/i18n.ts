import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            about: "ABOUT",
            education: "EDUCATION",
            projects: "PROJECTS",
            activities: "ACTIVITIES",
            skills: "SKILLS",
            contact: "CONTACT"
          },
          sections: {
            quote: "\"Any sufficiently advanced technology is indistinguishable from magic.\"",
            quote_author: "Arthur C. Clarke",

            about_title: "ABOUT",
            years_old: "years old",
            about_desc_1: "I care about why things are built, and who they are built for, as much as how they are built.",
            about_desc_2: "Currently interested in AI, creative technology and product development.",

            education_title: "EDUCATION",
            education_desc_1: "The world is full of incredible people nobody really knows about.",
            education_desc_2: "Here, I was lucky enough to meet many of them.",
            education_uni: "Universidad Austral",
            education_time: "Feb. 2023 - Dec. 2027 (Expected)",
            education_degree: "Bachelor's degree in Software Engineering",
            education_location: "Buenos Aires, Argentina",
            education_location_coords: "34.6037 S, 58.3816 W",
            education_coursework_label: "Relevant Coursework",
            education_coursework: "Algorithms and Data Structures, Computer Architecture, Operating Systems, Databases, Artificial Intelligence, Programming Languages, Concurrent Programming, Computer Networking, Computer Security",

            projects_title: "PROJECTS",
            projects_desc_1: "There's nothing more rewarding than working with talented people on fun projects.",
            projects_desc_2: "Some of these I'm proud of. All of them taught me something.",

            project_1_name: "Pay and Pray",
            project_1_stack: "Kotlin, TypeScript, Spring Boot, React, PostgreSQL, Docker",
            project_1_date: "May 2026 - Jun. 2026",
            project_1_bullets: [
              "Collaborated developing a portfolio tracker by integrating the SEC EDGAR API to surface financial metrics and official 10-K/10-Q filings for US-listed companies.",
              "Supported web and native Android usage by building a React + Capacitor frontend with portfolio P&L calculations, watchlist management, and side-by-side company metric comparisons.",
              "Streamlined delivery by setting up GitHub Actions CI/CD pipelines running unit, integration, and Cypress E2E tests."
            ],

            project_2_name: "Snippet Searcher",
            project_2_stack: "Kotlin, TypeScript, Spring Boot, React, PostgreSQL, Docker, Azure",
            project_2_date: "Oct. 2025 - Dec. 2025",
            project_2_bullets: [
              "Collaborated building a microservices web application for managing and sharing code snippets.",
              "Secured the platform by implementing authentication with Auth0 and request authorization through Spring Gateway.",
              "Improved responsiveness by offloading time-intensive tasks to asynchronous inter-service communication using Redis.",
              "Monitored system health by setting up observability in New Relic with custom attributes, dashboards, and alerts.",
              "Automated deployments and integration checks by establishing GitHub Actions CI/CD pipelines targeting Azure VMs.",
              "Validated critical user flows by implementing E2E tests using Cypress."
            ],

            project_3_name: "PrintScript",
            project_3_stack: "Kotlin, Clikt",
            project_3_date: "Aug. 2025 - Nov. 2025",
            project_3_bullets: [
              "Collaborated developing a public library of language tools for a TypeScript subset by implementing an interpreter, formatter, and linter.",
              "Streamlined tool usage by building a CLI for language tool execution using the Clikt library.",
              "Enforced module independence and reusable build logic by configuring a multi-project Gradle build with shared conventions for linting, formatting, and code coverage.",
              "Automated versioned package publishing by setting up GitHub Actions CI/CD pipelines deploying to Apache Maven registry.",
              "Successfully verified library compliance through a TCK suite covering memory and runtime constraints."
            ],

            project_4_name: "Sonora",
            project_4_stack: "TypeScript, Tailwind CSS, React, NestJS, PostgreSQL",
            project_4_date: "Aug. 2025 - Nov. 2025",
            project_4_bullets: [
              "Collaborated developing a web application for browsing and reviewing music content.",
              "Developed music discovery features by integrating the Spotify API to import artists, albums, and tracks with metadata and audio previews.",
              "Improved API discoverability by documenting all endpoints with Swagger and OpenAPI annotations.",
              "Enabled user engagement by implementing social features including follows, reviews, reactions, and a listen later queue."
            ],

            project_5_name: "Chess and Checkers Engine",
            project_5_stack: "Java",
            project_5_date: "Jun. 2025 - Jul. 2025",
            project_5_bullets: [
              "Designed a reusable game engine using an Entity Component System architecture to share core logic across chess, checkers, and their variants.",
              "Validated correctness of 33+ game rules by implementing a dynamic test runner and integrating a third-party test suite covering movements, captures, check, castling, and checkmate.",
              "Enabled a playable chess and checkers UI by integrating the game engine to a provided JavaFX interface."
            ],

            activities_title: "ACTIVITIES",
            activities_desc: "Try everything. If the goal is to experience, you always win.",
            activity_details_label: "Details",
            activity_1_name: "Your Time, Your World Cup",
            activity_1_label: "AI Competition",
            activity_1_date: "Jun. 2026",
            activity_1_place: "1st Place",
            activity_1_note: "Won a Messi jersey ;)",
            activity_1_bullets: [
              "Collaborated developing a web application that classified all 72 FIFA World Cup 2026 group-stage matches into three interest levels through user preferences and schedule availability.",
              "Eliminated the need for historical user data by designing a Bayesian elicitation system that estimates individual utility functions through adaptive questionnaires.",
              "Improved recommendation accuracy over time by implementing a Kalman filter that attributes user feedback to individual match features.",
              "Reduced onboarding friction by processing natural language descriptions with the OpenAI API to automatically derive Bayesian priors and generate personalized recommendation explanations.",
              "Simplified match planning by enabling users to add recommended matches to their calendars using the Google Calendar API."
            ],

            skills_title: "TECHNICAL SKILLS",
            skills_languages_label: "Languages",
            skills_languages: "Kotlin, Java, TypeScript, JavaScript, HTML/CSS, Python, SQL",
            skills_frameworks_label: "Libraries / Frameworks",
            skills_frameworks: "Spring Boot, Nest JS, React",
            skills_tools_label: "Developer Tools",
            skills_tools: "Git / GitHub, Docker",

            contact_title: "CONTACT",
            contact_desc: "One of the most important things I've learned in recent years: the people you can reach just by sending an email would genuinely surprise you.",
            name: "Julian Ritondale",
            phone: "+54 11-2160-4006",
            email: "julianritondale@gmail.com",
            linkedin: "linkedin.com/in/julianritondale",
            website: "julian-ritondale.github.io"
          }
        }
      },
      es: {
        translation: {
          nav: {
            about: "SOBRE MÍ",
            education: "EDUCACIÓN",
            projects: "PROYECTOS",
            activities: "ACTIVIDADES",
            skills: "HABILIDADES",
            contact: "CONTACTO"
          },
          sections: {
            quote: "\"Cualquier tecnología lo suficientemente avanzada es indistinguible de la magia.\"",
            quote_author: "Arthur C. Clarke",

            about_title: "SOBRE MÍ",
            years_old: "años",
            about_desc_1: "Me importa el por qué se construyen las cosas, y para quién se construyen, tanto como el cómo se construyen.",
            about_desc_2: "Actualmente interesado en IA, tecnología creativa y desarrollo de productos.",

            education_title: "EDUCACIÓN",
            education_desc_1: "El mundo está lleno de personas increíbles que nadie conoce realmente.",
            education_desc_2: "Aquí tuve la suerte de conocer a muchas de ellas.",
            education_uni: "Universidad Austral",
            education_time: "Feb. 2023 - Dic. 2027 (Esperado)",
            education_degree: "Grado en Ingeniería Informática",
            education_location: "Buenos Aires, Argentina",
            education_location_coords: "34.6037 S, 58.3816 O",
            education_coursework_label: "Materias relevantes",
            education_coursework: "Algoritmos y Estructuras de Datos, Arquitectura de Computadoras, Sistemas Operativos, Bases de Datos, Inteligencia Artificial, Lenguajes de Programación, Programación Concurrente, Redes de Comunicación de Datos, Seguridad Informática",

            projects_title: "PROYECTOS",
            projects_desc_1: "No hay nada más gratificante que trabajar con personas talentosas en proyectos divertidos.",
            projects_desc_2: "De algunos estoy orgulloso. Todos me enseñaron algo.",

            project_1_name: "Pay and Pray",
            project_1_stack: "Kotlin, TypeScript, Spring Boot, React, PostgreSQL, Docker",
            project_1_date: "May. 2026 - Jun. 2026",
            project_1_bullets: [
              "Colaboré desarrollando un rastreador de portafolio integrando la API de SEC EDGAR para mostrar métricas financieras y reportes oficiales 10-K/10-Q de empresas listadas en EE.UU.",
              "Colaboré construyendo soporte web y Android nativo con un frontend en React + Capacitor con cálculos de P&L, gestión de listas de seguimiento y comparaciones de métricas entre empresas.",
              "Agilicé la entrega configurando pipelines de CI/CD en GitHub Actions con pruebas unitarias, de integración y E2E con Cypress."
            ],

            project_2_name: "Snippet Searcher",
            project_2_stack: "Kotlin, TypeScript, Spring Boot, React, PostgreSQL, Docker, Azure",
            project_2_date: "Oct. 2025 - Dic. 2025",
            project_2_bullets: [
              "Colaboré construyendo una aplicación web de microservicios para gestionar y compartir fragmentos de código.",
              "Aseguré la plataforma implementando autenticación con Auth0 y autorización de solicitudes mediante Spring Gateway.",
              "Mejoré la capacidad de respuesta delegando tareas intensivas a comunicación asincrónica entre servicios usando Redis.",
              "Monitoreé la salud del sistema configurando observabilidad en New Relic con atributos personalizados, dashboards y alertas.",
              "Automaticé despliegues y verificaciones de integración estableciendo pipelines de CI/CD en GitHub Actions hacia VMs de Azure.",
              "Validé flujos críticos de usuario implementando pruebas E2E con Cypress."
            ],

            project_3_name: "PrintScript",
            project_3_stack: "Kotlin, Clikt",
            project_3_date: "Ago. 2025 - Nov. 2025",
            project_3_bullets: [
              "Colaboré desarrollando una librería pública de herramientas de lenguaje para un subconjunto de TypeScript implementando intérprete, formateador y linter.",
              "Agilicé el uso de herramientas construyendo una CLI con la librería Clikt.",
              "Reforcé la independencia de módulos configurando un build multi-proyecto en Gradle con convenciones compartidas para linting, formateo y cobertura de código.",
              "Automaticé la publicación de paquetes versionados configurando pipelines de CI/CD en GitHub Actions hacia el registro de Apache Maven.",
              "Verifiqué el cumplimiento de la librería mediante una suite TCK con restricciones de memoria y tiempo de ejecución."
            ],

            project_4_name: "Sonora",
            project_4_stack: "TypeScript, Tailwind CSS, React, NestJS, PostgreSQL",
            project_4_date: "Ago. 2025 - Nov. 2025",
            project_4_bullets: [
              "Colaboré desarrollando una aplicación web para explorar y reseñar contenido musical.",
              "Implementé funciones de descubrimiento musical integrando la API de Spotify para importar artistas, álbumes y canciones con metadatos y previews de audio.",
              "Facilité la discoverabilidad de la API documentando todos los endpoints con Swagger y anotaciones OpenAPI.",
              "Potencié la interacción social implementando seguimientos, reseñas, reacciones y una cola de escucha pendiente."
            ],

            project_5_name: "Motor de Ajedrez y Damas",
            project_5_stack: "Java",
            project_5_date: "Jun. 2025 - Jul. 2025",
            project_5_bullets: [
              "Diseñé un motor de juego reutilizable usando una arquitectura Entity Component System para compartir lógica entre ajedrez, damas y sus variantes.",
              "Validé más de 33 reglas de juego implementando un ejecutor de tests dinámico e integrando una suite de tests de terceros que cubre movimientos, capturas, jaque, enroque y jaque mate.",
              "Conecté el motor a una interfaz JavaFX para ofrecer una experiencia de juego completa en ajedrez y damas."
            ],

            activities_title: "ACTIVIDADES",
            activities_desc: "Intentalo todo. Si el objetivo es vivir la experiencia, siempre vas a ganar.",
            activity_details_label: "Detalles",
            activity_1_name: "Tu Tiempo, Tu Mundial",
            activity_1_label: "Competencia de IA",
            activity_1_date: "Jun. 2026",
            activity_1_place: "1er Puesto",
            activity_1_note: "Me gané una camiseta de Messi ;)",
            activity_1_bullets: [
              "Colaboré desarrollando una aplicación web que clasificó los 72 partidos del grupo del Mundial FIFA 2026 en tres niveles de interés según preferencias y disponibilidad horaria del usuario.",
              "Eliminé la necesidad de datos históricos diseñando un sistema de elicitación bayesiana que estima funciones de utilidad individuales mediante cuestionarios adaptativos.",
              "Mejoré la precisión de recomendaciones implementando un filtro de Kalman que atribuye el feedback del usuario a características individuales de cada partido.",
              "Reduje la fricción inicial procesando descripciones en lenguaje natural con la API de OpenAI para derivar priors bayesianos y generar explicaciones personalizadas.",
              "Simplifiqué la planificación permitiendo agregar partidos recomendados al calendario personal mediante la API de Google Calendar."
            ],

            skills_title: "HABILIDADES TÉCNICAS",
            skills_languages_label: "Lenguajes",
            skills_languages: "Kotlin, Java, TypeScript, JavaScript, HTML/CSS, Python, SQL",
            skills_frameworks_label: "Librerías / Frameworks",
            skills_frameworks: "Spring Boot, NestJS, React",
            skills_tools_label: "Herramientas",
            skills_tools: "Git / GitHub, Docker",

            contact_title: "CONTACTO",
            contact_desc: "Una de las cosas más importantes que aprendí en los últimos años: las personas a las que podés llegar simplemente mandándoles un mail realmente te sorprenderían.",
            name: "Julián Ritondale",
            phone: "+54 11-2160-4006",
            email: "julianritondale@gmail.com",
            linkedin: "linkedin.com/in/julianritondale",
            website: "julian-ritondale.github.io"
          }
        }
      }
    }
  });

export default i18n;
