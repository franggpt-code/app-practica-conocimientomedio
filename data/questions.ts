import type { Question, QuizBlock } from "@/types/quiz";

export const blockLabels: Record<QuizBlock, string> = {
  materia: "Materia y objetos",
  estados: "Estados de la materia",
  materiales: "Materiales y propiedades",
  calor: "Calor y temperatura",
  cambios: "Cambios de estado",
  dilatacion: "Dilatación",
  energia: "Formas de energía",
  ahorro: "Ahorro de energía"
};

export const questions: Question[] = [
  {
    id: "materia-1",
    block: "materia",
    type: "multiple",
    prompt: "Todo lo que ocupa un lugar y tiene masa se llama...",
    options: ["materia", "sombra", "ruido"],
    correctAnswer: "materia",
    explanation: "La materia forma los objetos y ocupa espacio."
  },
  {
    id: "materia-2",
    block: "materia",
    type: "trueFalse",
    prompt: "El aire es materia aunque no lo veamos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "El aire ocupa espacio y tiene masa, por eso es materia."
  },
  {
    id: "materia-3",
    block: "materia",
    type: "multiple",
    prompt: "¿Cuál de estos ejemplos es un objeto hecho de materia?",
    options: ["una mesa", "una idea", "un sueño"],
    correctAnswer: "una mesa",
    explanation: "Una mesa ocupa espacio y está hecha de materiales."
  },
  {
    id: "materia-4",
    block: "materia",
    type: "fillBlank",
    prompt: "Completa: Los objetos están hechos de ____.",
    options: ["materia", "minutos", "silencio"],
    correctAnswer: "materia",
    explanation: "La materia es lo que forma los objetos."
  },
  {
    id: "materia-5",
    block: "materia",
    type: "classify",
    prompt: "Clasifica cada ejemplo.",
    items: ["piedra", "aire del globo", "alegría"],
    categories: ["Es materia", "No es materia"],
    correct: {
      piedra: "Es materia",
      "aire del globo": "Es materia",
      alegría: "No es materia"
    },
    explanation: "La piedra y el aire ocupan espacio; la alegría es un sentimiento."
  },
  {
    id: "materia-6",
    block: "materia",
    type: "multiple",
    prompt: "Si inflas un globo, aumenta su tamaño porque entra...",
    options: ["aire", "luz", "música"],
    correctAnswer: "aire",
    explanation: "El aire ocupa espacio dentro del globo."
  },
  {
    id: "materia-7",
    block: "materia",
    type: "trueFalse",
    prompt: "La luz de una linterna ocupa el mismo espacio que una pelota.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explanation: "La pelota es materia; la luz es una forma de energía."
  },
  {
    id: "materia-8",
    block: "materia",
    type: "multiple",
    prompt: "¿Qué podemos decir de una botella de agua?",
    options: ["Tiene materia dentro y fuera", "Solo tiene color", "No ocupa espacio"],
    correctAnswer: "Tiene materia dentro y fuera",
    explanation: "La botella y el agua son materia."
  },
  {
    id: "estados-1",
    block: "estados",
    type: "multiple",
    prompt: "Un sólido suele tener...",
    options: ["forma propia", "forma de cualquier vaso", "solo burbujas"],
    correctAnswer: "forma propia",
    explanation: "Los sólidos mantienen su forma."
  },
  {
    id: "estados-2",
    block: "estados",
    type: "multiple",
    prompt: "El agua de un vaso está en estado...",
    options: ["líquido", "sólido", "gas"],
    correctAnswer: "líquido",
    explanation: "El agua líquida toma la forma del recipiente."
  },
  {
    id: "estados-3",
    block: "estados",
    type: "multiple",
    prompt: "El vapor que sale de una olla está en estado...",
    options: ["gaseoso", "sólido", "líquido duro"],
    correctAnswer: "gaseoso",
    explanation: "El vapor es agua en forma de gas."
  },
  {
    id: "estados-4",
    block: "estados",
    type: "fillBlank",
    prompt: "Completa: Los ____ no tienen forma propia y ocupan todo el espacio posible.",
    options: ["gases", "sólidos", "cuadernos"],
    correctAnswer: "gases",
    explanation: "Los gases se expanden y llenan el espacio."
  },
  {
    id: "estados-5",
    block: "estados",
    type: "match",
    prompt: "Relaciona cada estado con su característica.",
    pairs: [
      { left: "Sólido", right: "Tiene forma propia" },
      { left: "Líquido", right: "Toma la forma del recipiente" },
      { left: "Gas", right: "Se reparte por todo el espacio" }
    ],
    options: ["Tiene forma propia", "Toma la forma del recipiente", "Se reparte por todo el espacio"],
    explanation: "Cada estado de la materia se comporta de una manera distinta."
  },
  {
    id: "estados-6",
    block: "estados",
    type: "classify",
    prompt: "Clasifica estos ejemplos por su estado.",
    items: ["hielo", "zumo", "aire"],
    categories: ["Sólido", "Líquido", "Gas"],
    correct: {
      hielo: "Sólido",
      zumo: "Líquido",
      aire: "Gas"
    },
    explanation: "El hielo mantiene forma, el zumo fluye y el aire es gas."
  },
  {
    id: "estados-7",
    block: "estados",
    type: "trueFalse",
    prompt: "Un líquido siempre conserva la misma forma aunque lo cambiemos de vaso.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explanation: "Los líquidos cambian de forma según el recipiente."
  },
  {
    id: "estados-8",
    block: "estados",
    type: "multiple",
    prompt: "¿Qué hay dentro de una rueda hinchada?",
    options: ["gas", "madera", "vidrio"],
    correctAnswer: "gas",
    explanation: "Normalmente contiene aire, que es un gas."
  },
  {
    id: "materiales-1",
    block: "materiales",
    type: "multiple",
    prompt: "Un material flexible es el que...",
    options: ["se puede doblar sin romperse", "siempre se rompe", "no se puede tocar"],
    correctAnswer: "se puede doblar sin romperse",
    explanation: "Flexible significa que se dobla con facilidad."
  },
  {
    id: "materiales-2",
    block: "materiales",
    type: "fillBlank",
    prompt: "Completa: El vidrio es ____ porque deja pasar la luz.",
    options: ["transparente", "elástico", "rugoso"],
    correctAnswer: "transparente",
    explanation: "Un material transparente permite ver a través de él."
  },
  {
    id: "materiales-3",
    block: "materiales",
    type: "multiple",
    prompt: "¿Qué material elegirías para una ventana?",
    options: ["vidrio", "cartón opaco", "barro seco"],
    correctAnswer: "vidrio",
    explanation: "El vidrio deja pasar la luz y permite ver."
  },
  {
    id: "materiales-4",
    block: "materiales",
    type: "trueFalse",
    prompt: "Un material frágil se rompe con facilidad.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Frágil significa que puede romperse fácilmente."
  },
  {
    id: "materiales-5",
    block: "materiales",
    type: "multiple",
    prompt: "El mango de una sartén suele ser de plástico porque...",
    options: ["aísla del calor", "se derrite siempre", "produce electricidad"],
    correctAnswer: "aísla del calor",
    explanation: "El plástico conduce peor el calor que el metal."
  },
  {
    id: "materiales-6",
    block: "materiales",
    type: "classify",
    prompt: "Clasifica según la propiedad más adecuada.",
    items: ["goma", "cristal fino", "acero"],
    categories: ["Flexible", "Frágil", "Resistente"],
    correct: {
      goma: "Flexible",
      "cristal fino": "Frágil",
      acero: "Resistente"
    },
    explanation: "La goma se dobla, el cristal se rompe fácil y el acero resiste."
  },
  {
    id: "materiales-7",
    block: "materiales",
    type: "match",
    prompt: "Relaciona material y uso razonable.",
    pairs: [
      { left: "Metal", right: "Cacerola" },
      { left: "Algodón", right: "Camiseta" },
      { left: "Plástico", right: "Mango aislante" }
    ],
    options: ["Cacerola", "Camiseta", "Mango aislante"],
    explanation: "Elegimos materiales por sus propiedades."
  },
  {
    id: "materiales-8",
    block: "materiales",
    type: "multiple",
    prompt: "Un material conductor del calor deja que el calor...",
    options: ["pase fácilmente", "desaparezca", "se convierta en sombra"],
    correctAnswer: "pase fácilmente",
    explanation: "Los metales son buenos conductores del calor."
  },
  {
    id: "calor-1",
    block: "calor",
    type: "multiple",
    prompt: "¿Qué medimos con un termómetro?",
    options: ["temperatura", "peso", "sonido"],
    correctAnswer: "temperatura",
    explanation: "El termómetro sirve para medir la temperatura."
  },
  {
    id: "calor-2",
    block: "calor",
    type: "trueFalse",
    prompt: "El calor pasa del cuerpo más caliente al más frío.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "El calor se transfiere hacia lo que está más frío."
  },
  {
    id: "calor-3",
    block: "calor",
    type: "multiple",
    prompt: "Si tocas una taza caliente, notas calor porque...",
    options: ["la taza te transfiere calor", "la taza pesa más", "el color cambia"],
    correctAnswer: "la taza te transfiere calor",
    explanation: "El calor pasa desde la taza caliente hacia tu mano."
  },
  {
    id: "calor-4",
    block: "calor",
    type: "multiple",
    prompt: "Por lo general, el agua hierve cerca de...",
    options: ["100 ºC", "0 ºC", "10 ºC"],
    correctAnswer: "100 ºC",
    explanation: "A presión normal, el agua hierve alrededor de 100 ºC."
  },
  {
    id: "calor-5",
    block: "calor",
    type: "fillBlank",
    prompt: "Completa: Cuando algo tiene más temperatura, está más ____.",
    options: ["caliente", "pequeño", "silencioso"],
    correctAnswer: "caliente",
    explanation: "La temperatura indica si algo está caliente o frío."
  },
  {
    id: "calor-6",
    block: "calor",
    type: "classify",
    prompt: "Clasifica los objetos.",
    items: ["sopa recién hecha", "helado", "agua templada"],
    categories: ["Caliente", "Frío", "Templado"],
    correct: {
      "sopa recién hecha": "Caliente",
      helado: "Frío",
      "agua templada": "Templado"
    },
    explanation: "La temperatura nos ayuda a comparar cómo están los objetos."
  },
  {
    id: "calor-7",
    block: "calor",
    type: "trueFalse",
    prompt: "Todos los materiales transmiten el calor igual de rápido.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explanation: "Algunos materiales conducen mejor el calor que otros."
  },
  {
    id: "calor-8",
    block: "calor",
    type: "multiple",
    prompt: "¿Qué parte de un destornillador conduce mejor el calor?",
    options: ["la barra metálica", "el mango de plástico", "la etiqueta"],
    correctAnswer: "la barra metálica",
    explanation: "El metal suele conducir bien el calor."
  },
  {
    id: "cambios-1",
    block: "cambios",
    type: "multiple",
    prompt: "Cuando el hielo se transforma en agua líquida ocurre...",
    options: ["fusión", "solidificación", "condensación"],
    correctAnswer: "fusión",
    explanation: "La fusión es el paso de sólido a líquido."
  },
  {
    id: "cambios-2",
    block: "cambios",
    type: "multiple",
    prompt: "Cuando el agua líquida se convierte en hielo ocurre...",
    options: ["solidificación", "evaporación", "fusión"],
    correctAnswer: "solidificación",
    explanation: "La solidificación es el paso de líquido a sólido."
  },
  {
    id: "cambios-3",
    block: "cambios",
    type: "multiple",
    prompt: "Las gotitas del espejo tras una ducha aparecen por...",
    options: ["condensación", "dilatación", "combustión"],
    correctAnswer: "condensación",
    explanation: "El vapor se enfría y pasa a líquido."
  },
  {
    id: "cambios-4",
    block: "cambios",
    type: "multiple",
    prompt: "El paso de líquido a gas se llama...",
    options: ["evaporación", "solidificación", "elasticidad"],
    correctAnswer: "evaporación",
    explanation: "Al evaporarse, un líquido se convierte en gas."
  },
  {
    id: "cambios-5",
    block: "cambios",
    type: "match",
    prompt: "Relaciona cada cambio con su ejemplo.",
    pairs: [
      { left: "Fusión", right: "Un cubito se derrite" },
      { left: "Solidificación", right: "Agua que se congela" },
      { left: "Condensación", right: "Vapor que forma gotas" }
    ],
    options: ["Un cubito se derrite", "Agua que se congela", "Vapor que forma gotas"],
    explanation: "Cada cambio de estado tiene un nombre propio."
  },
  {
    id: "cambios-6",
    block: "cambios",
    type: "trueFalse",
    prompt: "Quemar madera es solo un cambio de estado.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explanation: "Al quemarse aparecen sustancias nuevas, como ceniza y humo."
  },
  {
    id: "cambios-7",
    block: "cambios",
    type: "classify",
    prompt: "Clasifica el tipo de cambio.",
    items: ["hielo que se derrite", "papel que arde", "agua que hierve"],
    categories: ["Cambio de estado", "Cambio químico"],
    correct: {
      "hielo que se derrite": "Cambio de estado",
      "papel que arde": "Cambio químico",
      "agua que hierve": "Cambio de estado"
    },
    explanation: "En los cambios químicos se forman sustancias nuevas."
  },
  {
    id: "cambios-8",
    block: "cambios",
    type: "fillBlank",
    prompt: "Completa: El paso de gas a líquido se llama ____.",
    options: ["condensación", "fusión", "fragilidad"],
    correctAnswer: "condensación",
    explanation: "La condensación ocurre cuando un gas se enfría y pasa a líquido."
  },
  {
    id: "dilatacion-1",
    block: "dilatacion",
    type: "multiple",
    prompt: "Cuando un material aumenta de tamaño por el calor, se...",
    options: ["dilata", "condensa", "congela"],
    correctAnswer: "dilata",
    explanation: "Dilatarse significa hacerse un poco más grande."
  },
  {
    id: "dilatacion-2",
    block: "dilatacion",
    type: "trueFalse",
    prompt: "Los metales pueden dilatarse cuando se calientan.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Por eso algunas piezas metálicas cambian un poco con el calor."
  },
  {
    id: "dilatacion-3",
    block: "dilatacion",
    type: "multiple",
    prompt: "Una puerta metálica puede rozar más en verano porque...",
    options: ["el metal se dilata con el calor", "el metal se evapora", "el metal se vuelve líquido"],
    correctAnswer: "el metal se dilata con el calor",
    explanation: "Con calor, el metal puede aumentar un poco su tamaño."
  },
  {
    id: "dilatacion-4",
    block: "dilatacion",
    type: "fillBlank",
    prompt: "Completa: Al enfriarse, muchos materiales se ____ un poco.",
    options: ["contraen", "encienden", "mojan"],
    correctAnswer: "contraen",
    explanation: "Contraerse es hacerse un poco más pequeño."
  },
  {
    id: "dilatacion-5",
    block: "dilatacion",
    type: "multiple",
    prompt: "En las vías del tren se dejan pequeños espacios para...",
    options: ["permitir la dilatación", "guardar agua", "hacer música"],
    correctAnswer: "permitir la dilatación",
    explanation: "Así el metal puede cambiar un poco de tamaño sin romperse."
  },
  {
    id: "dilatacion-6",
    block: "dilatacion",
    type: "classify",
    prompt: "Clasifica lo que suele pasar.",
    items: ["metal al calentarse", "metal al enfriarse", "hielo al derretirse"],
    categories: ["Se dilata", "Se contrae", "Cambia de estado"],
    correct: {
      "metal al calentarse": "Se dilata",
      "metal al enfriarse": "Se contrae",
      "hielo al derretirse": "Cambia de estado"
    },
    explanation: "La dilatación depende de la temperatura; derretirse es otro cambio."
  },
  {
    id: "dilatacion-7",
    block: "dilatacion",
    type: "trueFalse",
    prompt: "Dilatación significa que un objeto desaparece por el calor.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explanation: "Dilatación significa aumento de tamaño, no desaparición."
  },
  {
    id: "dilatacion-8",
    block: "dilatacion",
    type: "multiple",
    prompt: "¿Qué ejemplo muestra dilatación?",
    options: ["un cable que se alarga un poco con calor", "agua que se congela", "papel que se corta"],
    correctAnswer: "un cable que se alarga un poco con calor",
    explanation: "Al calentarse, algunos materiales aumentan un poco su tamaño."
  },
  {
    id: "energia-1",
    block: "energia",
    type: "multiple",
    prompt: "La energía que nos llega del Sol se llama energía...",
    options: ["solar", "sonora", "elástica"],
    correctAnswer: "solar",
    explanation: "El Sol nos da luz y calor."
  },
  {
    id: "energia-2",
    block: "energia",
    type: "multiple",
    prompt: "Una bombilla encendida produce sobre todo...",
    options: ["luz", "tierra", "hielo"],
    correctAnswer: "luz",
    explanation: "La bombilla transforma energía eléctrica en luz."
  },
  {
    id: "energia-3",
    block: "energia",
    type: "trueFalse",
    prompt: "El sonido es una forma de energía.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "El sonido se produce por vibraciones y transporta energía."
  },
  {
    id: "energia-4",
    block: "energia",
    type: "match",
    prompt: "Relaciona la forma de energía con el ejemplo.",
    pairs: [
      { left: "Luminosa", right: "Linterna encendida" },
      { left: "Térmica", right: "Radiador caliente" },
      { left: "Sonora", right: "Tambor sonando" }
    ],
    options: ["Linterna encendida", "Radiador caliente", "Tambor sonando"],
    explanation: "La energía puede aparecer como luz, calor o sonido."
  },
  {
    id: "energia-5",
    block: "energia",
    type: "multiple",
    prompt: "Un ventilador usa energía eléctrica para producir...",
    options: ["movimiento", "arena", "nieve"],
    correctAnswer: "movimiento",
    explanation: "La electricidad mueve las aspas del ventilador."
  },
  {
    id: "energia-6",
    block: "energia",
    type: "classify",
    prompt: "Clasifica cada ejemplo de energía.",
    items: ["estufa", "altavoz", "bicicleta en marcha"],
    categories: ["Térmica", "Sonora", "Mecánica"],
    correct: {
      estufa: "Térmica",
      altavoz: "Sonora",
      "bicicleta en marcha": "Mecánica"
    },
    explanation: "El calor es térmico, el ruido es sonoro y el movimiento es mecánico."
  },
  {
    id: "energia-7",
    block: "energia",
    type: "fillBlank",
    prompt: "Completa: La energía ____ permite que funcionen muchos aparatos.",
    options: ["eléctrica", "frágil", "viscosa"],
    correctAnswer: "eléctrica",
    explanation: "Muchos aparatos de casa funcionan con electricidad."
  },
  {
    id: "energia-8",
    block: "energia",
    type: "multiple",
    prompt: "¿Qué energía se nota al frotar las manos y calentarlas?",
    options: ["térmica", "luminosa", "magnética"],
    correctAnswer: "térmica",
    explanation: "Al frotar, sentimos calor en las manos."
  },
  {
    id: "ahorro-1",
    block: "ahorro",
    type: "multiple",
    prompt: "¿Qué acción ayuda a ahorrar energía?",
    options: ["apagar luces que no usamos", "abrir la nevera mucho rato", "dejar la tele encendida"],
    correctAnswer: "apagar luces que no usamos",
    explanation: "Si no necesitamos una luz, apagarla ahorra energía."
  },
  {
    id: "ahorro-2",
    block: "ahorro",
    type: "trueFalse",
    prompt: "Cerrar bien la nevera ayuda a gastar menos energía.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Si la nevera queda abierta, pierde frío y trabaja más."
  },
  {
    id: "ahorro-3",
    block: "ahorro",
    type: "multiple",
    prompt: "Para aprovechar la luz natural conviene...",
    options: ["abrir cortinas de día", "encender todas las lámparas", "tapar las ventanas"],
    correctAnswer: "abrir cortinas de día",
    explanation: "La luz del Sol nos ayuda a usar menos electricidad."
  },
  {
    id: "ahorro-4",
    block: "ahorro",
    type: "fillBlank",
    prompt: "Completa: Ahorrar energía cuida el ____.",
    options: ["planeta", "ruido", "lápiz"],
    correctAnswer: "planeta",
    explanation: "Usar menos energía ayuda a cuidar nuestro entorno."
  },
  {
    id: "ahorro-5",
    block: "ahorro",
    type: "classify",
    prompt: "Clasifica las acciones.",
    items: ["ducha corta", "luces encendidas sin estar", "usar luz del Sol"],
    categories: ["Ahorra energía", "Gasta de más"],
    correct: {
      "ducha corta": "Ahorra energía",
      "luces encendidas sin estar": "Gasta de más",
      "usar luz del Sol": "Ahorra energía"
    },
    explanation: "Los hábitos sencillos ayudan a consumir menos."
  },
  {
    id: "ahorro-6",
    block: "ahorro",
    type: "multiple",
    prompt: "Si sales de una habitación, lo mejor es...",
    options: ["apagar la luz", "subir la calefacción", "encender otra lámpara"],
    correctAnswer: "apagar la luz",
    explanation: "Apagar lo que no usamos evita gastar energía."
  },
  {
    id: "ahorro-7",
    block: "ahorro",
    type: "trueFalse",
    prompt: "Usar aparatos solo cuando hacen falta es una forma de ahorro.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Usar bien los aparatos reduce el consumo."
  },
  {
    id: "ahorro-8",
    block: "ahorro",
    type: "match",
    prompt: "Relaciona cada situación con la decisión adecuada.",
    pairs: [
      { left: "Habitación vacía", right: "Apagar la luz" },
      { left: "Día soleado", right: "Aprovechar la ventana" },
      { left: "Móvil cargado", right: "Desenchufar cargador" }
    ],
    options: ["Apagar la luz", "Aprovechar la ventana", "Desenchufar cargador"],
    explanation: "Pequeñas decisiones diarias ayudan a ahorrar."
  },
  {
    id: "materia-9",
    block: "materia",
    type: "multiple",
    prompt: "¿Cuál de estas cosas ocupa espacio aunque sea ligera?",
    options: ["una pluma", "una canción", "una idea"],
    correctAnswer: "una pluma",
    explanation: "Una pluma es materia porque ocupa un lugar, aunque pese poco."
  },
  {
    id: "estados-9",
    block: "estados",
    type: "trueFalse",
    prompt: "El aceite es líquido porque puede cambiar de forma según el recipiente.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Los líquidos toman la forma del vaso, botella o plato que los contiene."
  },
  {
    id: "materiales-9",
    block: "materiales",
    type: "fillBlank",
    prompt: "Completa: Una goma elástica es ____ porque vuelve a su forma.",
    options: ["elástica", "transparente", "frágil"],
    correctAnswer: "elástica",
    explanation: "Un material elástico puede deformarse y recuperar su forma."
  },
  {
    id: "calor-9",
    block: "calor",
    type: "multiple",
    prompt: "Si metes una cuchara fría en sopa caliente, la cuchara...",
    options: ["se calienta", "se convierte en gas", "se vuelve de papel"],
    correctAnswer: "se calienta",
    explanation: "El calor pasa de la sopa caliente a la cuchara más fría."
  },
  {
    id: "cambios-9",
    block: "cambios",
    type: "fillBlank",
    prompt: "Completa: Cuando se seca un charco al sol, el agua se ____.",
    options: ["evapora", "solidifica", "rompe"],
    correctAnswer: "evapora",
    explanation: "El agua líquida pasa poco a poco a gas por el calor del Sol."
  },
  {
    id: "dilatacion-9",
    block: "dilatacion",
    type: "trueFalse",
    prompt: "La contracción ocurre cuando algunos materiales se hacen un poco más pequeños al enfriarse.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Al enfriarse, muchos materiales se contraen un poco."
  },
  {
    id: "energia-9",
    block: "energia",
    type: "multiple",
    prompt: "¿Qué forma de energía usa una radio enchufada para funcionar?",
    options: ["eléctrica", "química", "muscular"],
    correctAnswer: "eléctrica",
    explanation: "La radio necesita electricidad para producir sonido."
  },
  {
    id: "ahorro-9",
    block: "ahorro",
    type: "multiple",
    prompt: "¿Qué conviene hacer con el grifo mientras te cepillas los dientes?",
    options: ["cerrarlo", "dejarlo abierto", "abrirlo al máximo"],
    correctAnswer: "cerrarlo",
    explanation: "Cerrar el grifo ahorra agua y también energía para calentarla o moverla."
  },
  {
    id: "cambios-10",
    block: "cambios",
    type: "match",
    prompt: "Relaciona cada situación con el cambio que ocurre.",
    pairs: [
      { left: "Ropa mojada al sol", right: "Evaporación" },
      { left: "Agua en cubitera", right: "Solidificación" },
      { left: "Mantequilla en una sartén", right: "Fusión" }
    ],
    options: ["Evaporación", "Solidificación", "Fusión"],
    explanation: "El calor y el frío pueden cambiar el estado de algunas sustancias."
  },
  {
    id: "energia-10",
    block: "energia",
    type: "classify",
    prompt: "Clasifica cada caso por la energía que destaca.",
    items: ["pilas de un juguete", "campana sonando", "Sol iluminando una ventana"],
    categories: ["Química", "Sonora", "Luminosa"],
    correct: {
      "pilas de un juguete": "Química",
      "campana sonando": "Sonora",
      "Sol iluminando una ventana": "Luminosa"
    },
    explanation: "Las pilas guardan energía química, la campana produce sonido y el Sol da luz."
  }
];
