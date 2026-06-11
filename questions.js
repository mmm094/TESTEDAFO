// ============================================================
//  BANCO COMPLETO DE PREGUNTAS DE EDAFOLOGÍA
//  Fuentes: Recopilatorio 197, Exámenes 2017-2025, Test clase
// ============================================================

const QUESTIONS = [

  // ─────────────────────────────────────────────────────────
  //  TEMA 1 · PERFIL, HORIZONTES Y NOMENCLATURA
  // ─────────────────────────────────────────────────────────
  {
    id: 1, tema: 1,
    text: "El perfil del suelo es:",
    options: [
      "Un corte superficial de la capa arable",
      "Una sucesión vertical de horizontes desde la superficie hasta el material original",
      "Un conjunto de partículas minerales menores de 2 mm",
      "La parte orgánica del suelo",
      "La roca madre sin alterar"
    ],
    correct: 1
  },
  {
    id: 2, tema: 1,
    text: "El horizonte del suelo H indica:",
    options: [
      "Horizonte mineral con humus",
      "Horizonte orgánico superficial hidromórfico",
      "Horizonte de acumulación de carbonatos",
      "Horizonte de alteración",
      "Horizonte de roca dura"
    ],
    correct: 1
  },
  {
    id: 3, tema: 1,
    text: "El horizonte Cy, ¿qué indica el sufijo 'y'?",
    options: [
      "Acumulación de carbonatos",
      "Acumulación de sales solubles",
      "Acumulación de arcilla",
      "Acumulación de yeso",
      "Presencia de gley"
    ],
    correct: 3
  },
  {
    id: 4, tema: 1,
    text: "¿Cuáles son los rasgos distintivos de un horizonte 'Bwz'?",
    options: [
      "Es un horizonte subsuperficial de acumulación de arcilla iluvial y sodio",
      "Se trata de un horizonte de diagnóstico subsuperficial",
      "Horizonte de alteración con elevado contenido en sales solubles",
      "Horizonte de alteración con elevado contenido de arcilla",
      "Nada de lo anterior"
    ],
    correct: 2
  },
  {
    id: 5, tema: 1,
    text: "¿Qué es un horizonte Bwk?",
    options: [
      "Horizonte orgánico hidromorfo",
      "Horizonte de alteración con acumulación secundaria de carbonatos",
      "Horizonte de acumulación de yeso",
      "Horizonte de eluviación",
      "Horizonte de roca dura"
    ],
    correct: 1
  },
  {
    id: 6, tema: 1,
    text: "¿Qué símbolo representa un horizonte de transición?",
    options: ["Ck", "Cy", "BC", "R", "Oa"],
    correct: 2
  },
  {
    id: 7, tema: 1,
    text: "Un horizonte Bt:",
    options: [
      "Es de eluviación de arcilla",
      "Es de acumulación/iluviación de arcilla",
      "Es orgánico superficial",
      "Es roca madre",
      "Es acumulación de yeso"
    ],
    correct: 1
  },
  {
    id: 8, tema: 1,
    text: "Un horizonte mineral superficial de materia orgánica humificada se designa con:",
    options: ["Oa", "Ah", "Cy", "R", "Bwz"],
    correct: 1
  },
  {
    id: 9, tema: 1,
    text: "Criterio que NO se utiliza en campo para diferenciar horizontes:",
    options: ["Color", "Estructura", "Textura", "Capacidad de cambio catiónico", "Consistencia"],
    correct: 3
  },
  {
    id: 10, tema: 1,
    text: "¿Dónde se encontrará el subhorizonte 'k'?",
    options: [
      "En horizontes con acumulación secundaria de carbonatos",
      "Solo en orgánicos",
      "Solo en roca dura",
      "Solo en suelos gley",
      "En acumulación de yeso"
    ],
    correct: 0
  },
  {
    id: 11, tema: 1,
    text: "¿Dónde podríamos esperar encontrar un horizonte de acumulación de carbonatos?",
    options: [
      "En suelos de clima árido/semiárido y materiales carbonatados",
      "En turberas ácidas",
      "En suelos permanentemente lavados y húmedos",
      "Solo en horizontes O",
      "Nunca en Almería"
    ],
    correct: 0
  },
  {
    id: 12, tema: 1,
    text: "El sufijo que indica formas de acumulación de CaCO₃ es:",
    options: ["g", "k", "y", "z", "t"],
    correct: 1
  },
  {
    id: 13, tema: 1,
    text: "En la nomenclatura de horizontes, la 'w' representa:",
    options: [
      "Alteración/desarrollo de color o estructura sin acumulación iluvial importante",
      "Acumulación de yeso",
      "Sales solubles",
      "Materia orgánica",
      "Roca dura"
    ],
    correct: 0
  },
  {
    id: 14, tema: 1,
    text: "¿Qué quiere decir un horizonte nominado A/B?",
    options: [
      "Horizonte de transición con predominio de A sobre B",
      "Horizonte mezclado al 50% exacto",
      "Horizonte orgánico puro",
      "Horizonte C con carbonatos",
      "Roca madre"
    ],
    correct: 0
  },
  {
    id: 15, tema: 1,
    text: "La definición más general de horizonte R es:",
    options: [
      "Roca dura o material consolidado subyacente",
      "Horizonte orgánico",
      "Arcilla iluvial",
      "Acumulación de sales",
      "Horizonte de eluviación"
    ],
    correct: 0
  },
  {
    id: 16, tema: 1,
    text: "El sequum es:",
    options: [
      "Conjunto de horizontes eluvial-iluvial relacionados en un perfil",
      "Una fracción granulométrica",
      "Una arcilla 2:1",
      "Un tipo de humus",
      "Un color Munsell"
    ],
    correct: 0
  },
  {
    id: 17, tema: 1,
    text: "Un horizonte de diagnóstico es:",
    options: [
      "Horizonte con propiedades definidas usadas para clasificación del suelo",
      "Cualquier capa sin criterios",
      "Solo horizonte R",
      "Solo capa arable",
      "Solo material geológico"
    ],
    correct: 0
  },
  {
    id: 18, tema: 1,
    text: "Un epipedion es:",
    options: [
      "Horizonte diagnóstico superficial",
      "Horizonte diagnóstico subsuperficial",
      "Roca madre",
      "Fracción fina",
      "Complejo de cambio"
    ],
    correct: 0
  },
  {
    id: 19, tema: 1,
    text: "Un endopedion es:",
    options: [
      "Horizonte diagnóstico subsuperficial",
      "Horizonte superficial",
      "Horizonte orgánico fresco",
      "Roca consolidada",
      "Muestra de laboratorio"
    ],
    correct: 0
  },
  {
    id: 20, tema: 1,
    text: "La superficie de un pedión suele oscilar en:",
    options: ["1 a 10 m² aproximadamente", "1 cm²", "1000 ha", "Siempre 1 km²", "No tiene superficie"],
    correct: 0
  },
  {
    id: 21, tema: 1,
    text: "Un conjunto de pediones contiguos de características similares constituye:",
    options: ["Polipedión", "Agregado", "Horizonte", "Litosecuencia", "Solum"],
    correct: 0
  },
  {
    id: 22, tema: 1,
    text: "La letra sufijo 'g' indica:",
    options: [
      "Propiedades gleicas/reducción por hidromorfía",
      "Acumulación de yeso",
      "Carbonatos",
      "Arcilla iluvial",
      "Materia orgánica"
    ],
    correct: 0
  },
  {
    id: 23, tema: 1,
    text: "En un horizonte Oa:",
    options: [
      "La materia orgánica original apenas se reconoce",
      "Tiene bajo grado de descomposición",
      "No hay actividad microbiana",
      "No existen horizontes Oa",
      "Todas son falsas"
    ],
    correct: 0
  },
  {
    id: 24, tema: 1,
    text: "Los principales horizontes genéticos son:",
    options: [
      "H, O, A, E, B, C, Y, R, K",
      "Solo A, B y C",
      "Solo O y R",
      "Solo Ck y Cy",
      "Arena, limo y arcilla"
    ],
    correct: 0
  },
  {
    id: 25, tema: 1,
    text: "Diferencia entre suelo y material geológico:",
    options: [
      "El color",
      "En un suelo los horizontes tienen estructura y el material geológico no",
      "La actividad microbiana únicamente",
      "No existen horizontes de transición",
      "Solo el tamaño de grano"
    ],
    correct: 1
  },
  {
    id: 26, tema: 1,
    text: "Actualmente la definición aceptada de suelo es:",
    options: [
      "La escuela rusa",
      "s=f(C,O,R,MO,T) de Jenny 1941",
      "La de Soil Science",
      "La de Dokuchaev 1867",
      "La de Robinson"
    ],
    correct: 2
  },
  {
    id: 27, tema: 1,
    text: "¿Qué es el solum?",
    options: [
      "Horizonte C y R",
      "Parte del perfil más afectada por procesos edafogenéticos y bióticos",
      "Solo el horizonte orgánico",
      "Material original inalterado",
      "La capa freática"
    ],
    correct: 1
  },
  {
    id: 28, tema: 1,
    text: "Un Bt es un ejemplo de horizonte:",
    options: [
      "Subsuperficial de acumulación de arcilla",
      "Orgánico superficial",
      "De roca dura",
      "De acumulación de yeso exclusivamente",
      "De eluviación"
    ],
    correct: 0
  },
  {
    id: 29, tema: 1,
    text: "¿Qué se utiliza para determinar la diferencia entre suelo y material geológico? [Examen 2025]",
    options: [
      "La existencia de horizontes con estructura edáfica",
      "Solo el color",
      "Solo la textura",
      "Solo el pH",
      "Solo el contenido en sales"
    ],
    correct: 0
  },

  // ─────────────────────────────────────────────────────────
  //  TEMA 2 · COMPONENTES INORGÁNICOS, MINERALES Y ARCILLAS
  // ─────────────────────────────────────────────────────────
  {
    id: 30, tema: 2,
    text: "Minerales secundarios son:",
    options: [
      "Minerales formados a bajas temperaturas en condiciones propias de la superficie terrestre",
      "Minerales heredados sin alteración de rocas ígneas",
      "Minerales exclusivos de la fracción gruesa",
      "Minerales magmáticos de alta temperatura",
      "Fragmentos de roca mayores de 2 mm"
    ],
    correct: 0
  },
  {
    id: 31, tema: 2,
    text: "¿Qué definición se ajusta mejor a la de 'mineral primario'?",
    options: [
      "Mineral formado en condiciones de alta presión y temperatura",
      "Mineral con tendencia a acumularse en la fracción gruesa del suelo",
      "Mineral formado en las condiciones propias del medio edáfico",
      "Mineral heredado de rocas ígneas y/o metamórficas",
      "Nada de lo anterior"
    ],
    correct: 3
  },
  {
    id: 32, tema: 2,
    text: "La estabilidad de un mineral depende de:",
    options: [
      "Su capacidad de intercambio catiónico",
      "De la naturaleza del mineral",
      "Del grado de sustitución isomórfica",
      "De las condiciones del medio",
      "Solo de la naturaleza del mineral y de las condiciones del medio"
    ],
    correct: 4
  },
  {
    id: 33, tema: 2,
    text: "¿A qué se debe la escasa presencia en la fracción fina de minerales 1:1 con espacio basal variable?",
    options: [
      "A que no se producen sustituciones",
      "A que no presentan cargas permanentes",
      "A que su estructura no es laminar",
      "A que sus capas se unen mediante puentes de hidrógeno",
      "Nada de lo anterior"
    ],
    correct: 3
  },
  {
    id: 34, tema: 2,
    text: "Indique cuál de las siguientes fórmulas podría corresponder a un mineral tipo 2:1 dioctaédrico:",
    options: [
      "SiO₁₀(OH)₂AlFe",
      "Si₂O₅(OH)₄Al₂",
      "Si₄O₁₀(OH)₂Al₂",
      "Si₄O₁₀(OH)₂Mg₃",
      "SiO₂·nH₂O"
    ],
    correct: 2
  },
  {
    id: 35, tema: 2,
    text: "¿Cuál es el origen de los minerales interestratificados presentes en la fracción fina del suelo?",
    options: [
      "La hidrólisis",
      "Los procesos de neoformación",
      "La transformación progresiva de minerales primarios",
      "Son minerales heredados del material geológico",
      "Ninguno de los anteriores"
    ],
    correct: 2
  },
  {
    id: 36, tema: 2,
    text: "La fracción fina del suelo está constituida por:",
    options: [
      "Limos y arcillas",
      "Gravas y piedras",
      "Arena gruesa solamente",
      "Roca dura",
      "Solo materia orgánica"
    ],
    correct: 0
  },
  {
    id: 37, tema: 2,
    text: "Las sustituciones isomórficas se producen cuando:",
    options: [
      "Un catión de tamaño similar sustituye a otro en la red cristalina generando déficit de carga",
      "Se disuelve la materia orgánica",
      "El agua evapora",
      "Se añade carbonato",
      "Se sedimenta arena"
    ],
    correct: 0
  },
  {
    id: 38, tema: 2,
    text: "Fórmula de filosilicato 2:1, mica, grupo dioctaédrico, x=1: [Examen 2025]",
    options: [
      "[Si₃AlO₁₀(OH)₂Mg₃]K",
      "[Si₄O₁₀(OH)₂Mg₃]Ca",
      "[Si₃AlO₁₀(OH)₂Al₂]K",
      "[Si₄O₁₀(OH)₂Al₂]K",
      "[Si₃AlO₁₀(OH)₂Mg₂]Ca"
    ],
    correct: 2
  },
  {
    id: 39, tema: 2,
    text: "¿Qué hace referencia el término 'arena'?",
    options: [
      "Partícula del suelo con diámetro inferior a 2 mm",
      "Partícula con diámetro entre 2 y 0,005 mm",
      "Partícula con diámetro entre 2 y 0,05 mm",
      "Partícula mineral de tamaño mayor a 2 mm",
      "Ninguna de las definiciones anteriores"
    ],
    correct: 2
  },
  {
    id: 40, tema: 2,
    text: "Tamaño de partículas de la arcilla según USDA:",
    options: ["2–0,05 mm", "0,05–0,002 mm", "<0,002 mm", ">2 mm", "<2 mm"],
    correct: 2
  },

  // ─────────────────────────────────────────────────────────
  //  TEMA 3 · MATERIA ORGÁNICA Y HUMUS
  // ─────────────────────────────────────────────────────────
  {
    id: 41, tema: 3,
    text: "Fracción orgánica más polimerizada:",
    options: ["Ácidos fúlvicos", "Ácidos húmicos", "Proteínas", "Huminas", "Azúcares solubles"],
    correct: 3
  },
  {
    id: 42, tema: 3,
    text: "Tipos de humus: MULL, ¿qué es?",
    options: [
      "Humus con alta actividad biológica en medio aireado",
      "Humus ácido con baja actividad biológica",
      "Materia orgánica sin transformar en medio encharcado",
      "Horizonte mineral sin humificación",
      "Residuo orgánico fresco"
    ],
    correct: 0
  },
  {
    id: 43, tema: 3,
    text: "¿Qué es la mineralización secundaria?",
    options: [
      "La que afecta a restos orgánicos frescos",
      "La que afecta al humus",
      "La que afecta a sustancias no húmicas",
      "La que afecta a sustancias húmicas",
      "Nada de lo anterior"
    ],
    correct: 1
  },
  {
    id: 44, tema: 3,
    text: "¿En qué se diferencia la humificación biológica y la abiótica?",
    options: [
      "La biológica tiene lugar en medios aerobios y la abiótica en anaerobios",
      "En la biológica intervienen microorganismos; en la abiótica no dependen directamente de ellos",
      "La abiótica depende solo del clima y la biológica es independiente",
      "La abiótica no depende de microorganismos sino exclusivamente del clima",
      "No existe diferencia"
    ],
    correct: 1
  },
  {
    id: 45, tema: 3,
    text: "Diferencias más correctas entre ácidos húmicos (AH) y ácidos fúlvicos (AF):",
    options: [
      "Los AH son más claros que los AF y menos solubles en HCl",
      "Los AH tienen mayor peso molecular y mayor relación núcleo/cadenas que los AF",
      "Los AH están más polimerizados y su movilidad es muy superior a la de AF",
      "Los AF tienen mayor contenido en C y floculan con menos Ca²⁺",
      "Los AH tienen estructura aromática mientras que los AF no"
    ],
    correct: 1
  },
  {
    id: 46, tema: 3,
    text: "Humus, ¿qué es?",
    options: [
      "Conjunto de sustancias húmicas y no húmicas estabilizadas",
      "Arena fina con materia orgánica",
      "Arcilla dispersa",
      "Carbonatos secundarios",
      "Solo hojarasca fresca"
    ],
    correct: 0
  },
  {
    id: 47, tema: 3,
    text: "La materia orgánica del suelo:",
    options: [
      "Aumenta CIC, favorece estructura y regula temperatura",
      "Disminuye la CIC",
      "Impide la agregación",
      "No influye en agua",
      "Solo aporta color"
    ],
    correct: 0
  },
  {
    id: 48, tema: 3,
    text: "Componente bioquímico más difícil de descomponer en restos vegetales:",
    options: ["Azúcares", "Proteínas", "Celulosa", "Lignina", "Almidón"],
    correct: 3
  },
  {
    id: 49, tema: 3,
    text: "Sobre el origen de las sustancias orgánicas del suelo se puede decir que:",
    options: [
      "Biomasa senescente, materiales orgánicos biológicos y xenobióticos",
      "Descomposición de tejidos y moléculas orgánicas complejas",
      "Reorganización de productos de degradación",
      "Todas son ciertas",
      "Ninguna es cierta"
    ],
    correct: 3
  },
  {
    id: 50, tema: 3,
    text: "El proceso de mineralización corresponde a:",
    options: [
      "Desprendimiento de carbono a la atmósfera",
      "Transformación de elementos orgánicos a inorgánicos",
      "Liberación de sustancias solubles y gases",
      "Todas las anteriores",
      "Solo polimerización"
    ],
    correct: 3
  },
  {
    id: 51, tema: 3,
    text: "En los compuestos orgánicos que constituyen los tejidos vegetales predominan:",
    options: ["Hidratos de carbono", "Ceras y grasas", "Fenoles", "Sales solubles", "Carbonatos"],
    correct: 0
  },
  {
    id: 52, tema: 3,
    text: "La materia orgánica en el suelo:",
    options: [
      "Aumenta la CIC",
      "Favorece la estructura",
      "Regula la temperatura",
      "Disminuye la consistencia del suelo",
      "Todas son verdaderas"
    ],
    correct: 4
  },
  {
    id: 53, tema: 3,
    text: "¿Cuál es el humus más evolucionado?",
    options: ["Mull", "Moder", "Mor", "Turba fresca", "Hojarasca sin descomponer"],
    correct: 0
  },
  {
    id: 54, tema: 3,
    text: "Proceso por el que lo orgánico pasa a compuestos inorgánicos simples, H₂O y CO₂ con microorganismos: [Examen 2025]",
    options: ["Mineralización", "Humificación", "Humificación abiótica", "Maduración climática", "Iluviación"],
    correct: 0
  },

  // ─────────────────────────────────────────────────────────
  //  TEMA 4 · AGUA DEL SUELO
  // ─────────────────────────────────────────────────────────
  {
    id: 55, tema: 4,
    text: "Tipos de agua con capacidad de retención:",
    options: [
      "Gravitacional de flujo rápido solamente",
      "Gravitacional de flujo rápido y lento",
      "Capilar absorbible, capilar no absorbible e higroscópica",
      "Solo agua útil",
      "Solo agua higroscópica"
    ],
    correct: 2
  },
  {
    id: 56, tema: 4,
    text: "Una vez que ha desaparecido el agua gravitacional de flujo lento, en el suelo queda:",
    options: [
      "Solo agua capilar",
      "Solo agua capilar e higroscópica",
      "Agua gravitacional de flujo rápido, capilar e higroscópica",
      "Solo agua utilizable",
      "Solo aire en macroporos"
    ],
    correct: 1
  },
  {
    id: 57, tema: 4,
    text: "¿Cómo influye la humedad del suelo en el potencial matricial?",
    options: [
      "Cuanto menor es la humedad menor es el potencial matricial",
      "Cuanto mayor es la humedad menor es el potencial matricial",
      "No existe relación",
      "Depende de la conductividad eléctrica",
      "Depende de la ETP"
    ],
    correct: 0
  },
  {
    id: 58, tema: 4,
    text: "¿Qué entiende usted por agua útil?",
    options: [
      "Cantidad necesaria para completar la reserva del suelo",
      "Agua que escapa a la gravedad y queda retenida",
      "La retenida entre capacidad de campo y capacidad de retención",
      "Agua retenida entre 0,33 y 15 atmósferas",
      "Agua retenida entre 330 y 15000 kPa"
    ],
    correct: 3
  },
  {
    id: 59, tema: 4,
    text: "¿A qué se debe la lentitud en los movimientos ascendentes del agua en el suelo?",
    options: [
      "A diferencias de pF entre horizontes",
      "Al predominio de poros capilares",
      "Al predominio de poros no capilares",
      "A la porosidad capilar y fenómenos de histéresis",
      "Nada de lo anterior"
    ],
    correct: 3
  },
  {
    id: 60, tema: 4,
    text: "Un suelo se encuentra en capacidad de retención:",
    options: [
      "Tras eliminar el agua gravitacional rápida y lenta",
      "Cuando todos los poros están saturados",
      "Cuando solo hay agua higroscópica",
      "Cuando el suelo está seco al aire",
      "Cuando hay punto de marchitamiento"
    ],
    correct: 0
  },
  {
    id: 61, tema: 4,
    text: "Tipos de agua en el punto de marchitamiento:",
    options: [
      "Agua gravitacional",
      "Agua útil máxima",
      "Agua higroscópica y capilar no absorbible",
      "Solo agua de lluvia",
      "Solo agua saturada"
    ],
    correct: 2
  },
  {
    id: 62, tema: 4,
    text: "La parte del potencial total debida a fuerzas de atracción del agua por superficies sólidas es:",
    options: ["Potencial matricial", "Potencial gravitacional", "Potencial osmótico", "Potencial redox", "Potencial térmico"],
    correct: 0
  },
  {
    id: 63, tema: 4,
    text: "El agua más fuertemente retenida es:",
    options: ["Agua higroscópica", "Agua gravitacional rápida", "Agua libre", "Agua de saturación", "Agua de escorrentía"],
    correct: 0
  },
  {
    id: 64, tema: 4,
    text: "¿En qué suelos habría mayor capacidad de retención de agua?",
    options: [
      "Suelos con textura fina/arcillosa y materia orgánica",
      "Suelos arenosos gruesos",
      "Gravas limpias",
      "Rocas desnudas",
      "Suelos sin humus"
    ],
    correct: 0
  },
  {
    id: 65, tema: 4,
    text: "En un suelo saturado:",
    options: [
      "Todo el espacio poroso está ocupado por agua",
      "La conductividad hidráulica es baja",
      "El pH>7 siempre",
      "El agua está retenida en el punto de presión",
      "El Eh es positivo"
    ],
    correct: 0
  },

  // ─────────────────────────────────────────────────────────
  //  TEMA 5 · AIREACIÓN Y FASE GASEOSA
  // ─────────────────────────────────────────────────────────
  {
    id: 66, tema: 5,
    text: "La inadecuada renovación del aire del suelo provoca:",
    options: [
      "Aumento progresivo de CO₂",
      "Disminución total de la humedad",
      "Aumento de la nitrificación siempre",
      "Aumento de O₂ por difusión",
      "Desaparición del agua capilar"
    ],
    correct: 0
  },
  {
    id: 67, tema: 5,
    text: "Los suelos con mayor concentración de CO₂ se encontraron en zonas con:",
    options: [
      "pH básico, alta concentración vegetal y elevada temperatura/humedad",
      "pH ácido, baja vegetación y sequedad",
      "Roca desnuda y baja temperatura",
      "Solo textura arenosa",
      "Ausencia de microorganismos"
    ],
    correct: 0
  },
  {
    id: 68, tema: 5,
    text: "En la fase gaseosa del suelo:",
    options: [
      "En primavera y otoño hay menos O₂",
      "En periodos de mayor actividad biológica hay más CO₂",
      "Está en continuo intercambio con aire atmosférico",
      "El movimiento puede ser en masa o difusión",
      "Las respuestas b, c y d son correctas"
    ],
    correct: 4
  },
  {
    id: 69, tema: 5,
    text: "La fase gaseosa del suelo:",
    options: [
      "Se produce en capacidad máxima",
      "Es constante todo el año",
      "Siempre tiene misma densidad",
      "No existe en capacidad máxima",
      "Es igual a la atmosférica siempre"
    ],
    correct: 3
  },

  // ─────────────────────────────────────────────────────────
  //  TEMA 6 · TEXTURA Y ANÁLISIS GRANULOMÉTRICO
  // ─────────────────────────────────────────────────────────
  {
    id: 70, tema: 6,
    text: "Los elementos finos del suelo, según USDA, ¿qué tamaño tienen?",
    options: [
      "Mayor de 2 mm",
      "Menor o igual de 2 mm",
      "Entre 2 y 0,05 mm",
      "Menor de 0,002 mm",
      "Entre 0,05 y 0,002 mm"
    ],
    correct: 1
  },
  {
    id: 71, tema: 6,
    text: "¿En qué se basan la pipeta Robinson y el densímetro de Bouyoucos?",
    options: ["Ley de Darcy", "Ley de Stokes", "Ley de Fick", "Ley de Henry", "Ley de Ohm"],
    correct: 1
  },
  {
    id: 72, tema: 6,
    text: "La fracción limo:",
    options: [
      "Provoca apelmazamientos",
      "Tiene alta cohesión plástica como arcilla",
      "Es siempre >2 mm",
      "No afecta a textura",
      "Es igual a arena gruesa"
    ],
    correct: 0
  },
  {
    id: 73, tema: 6,
    text: "Un suelo de textura arenosa se comporta como un suelo de:",
    options: [
      "Baja retención de agua, buena aireación y baja CIC",
      "Alta CIC, frío y difícil laboreo",
      "Muy plástico y pegajoso",
      "Muy alto contenido en arcilla",
      "Hidromorfo permanente"
    ],
    correct: 0
  },
  {
    id: 74, tema: 6,
    text: "La determinación textural de una muestra se basa en:",
    options: [
      "Ley de Stokes y velocidad de sedimentación",
      "Ley de Darcy exclusivamente",
      "Medida Munsell",
      "Valoración ácido-base",
      "Intercambio con acetato"
    ],
    correct: 0
  },
  {
    id: 75, tema: 6,
    text: "Si no se utilizara un dispersante en la determinación del suelo:",
    options: [
      "Las partículas finas/agregadas sedimentarían como partículas mayores",
      "La arena flotaría",
      "La muestra se volvería líquida",
      "No cambiaría nada",
      "Se mediría mejor la arcilla"
    ],
    correct: 0
  },
  {
    id: 76, tema: 6,
    text: "Cuando determinamos textura por método de Bouyoucos:",
    options: [
      "El densímetro mide la densidad de la suspensión según sedimentan partículas",
      "Se mide directamente pH",
      "Se usa Munsell",
      "Se extraen bases",
      "Se calcula humus"
    ],
    correct: 0
  },
  {
    id: 77, tema: 6,
    text: "¿Cuáles son los mejores suelos para la agricultura?",
    options: [
      "Suelos francos, equilibrados, con buena estructura y materia orgánica",
      "Arenas puras",
      "Arcillas compactas sódicas",
      "Rocas duras",
      "Suelos sin poros"
    ],
    correct: 0
  },
  {
    id: 78, tema: 6,
    text: "La textura de un suelo:",
    options: [
      "Es una propiedad típicamente edáfica",
      "Es organización natural de partículas",
      "Su determinación se basa en la ley de Stokes",
      "Expresa relación porcentual del tamaño de partículas",
      "Solo depende de la estructura"
    ],
    correct: 3
  },
  {
    id: 79, tema: 6,
    text: "Los suelos francos:",
    options: [
      "Tienen fracción gruesa y fina equilibrada",
      "Tienen gran contenido en arcilla",
      "Tienen pH>7",
      "Están solo en zonas áridas",
      "Solo en zonas húmedas"
    ],
    correct: 0
  },
  {
    id: 80, tema: 6,
    text: "Antes de determinar textura por Bouyoucos:",
    options: [
      "Se reduce materia orgánica con Cr₂O₇K₂",
      "Se eliminan agentes cementantes",
      "Se separa fracción >2 µm",
      "Se oxida con Cr₂O₇K₂",
      "Se dispersa la muestra"
    ],
    correct: 4
  },

  // ─────────────────────────────────────────────────────────
  //  TEMA 7 · ESTRUCTURA, CONSISTENCIA Y COLOR
  // ─────────────────────────────────────────────────────────
  {
    id: 81, tema: 7,
    text: "¿A qué hace referencia el 'tipo estructural'?",
    options: [
      "A la supraestructura, subestructura y microestructura",
      "A la consistencia y estabilidad de agregados",
      "Al grado de desarrollo de la estructura",
      "A la forma de los agregados estructurales",
      "A las dimensiones de agregados dentro de cada tipo"
    ],
    correct: 3
  },
  {
    id: 82, tema: 7,
    text: "De los colores siguientes, indique el suelo de tonalidad más clara:",
    options: ["10YR 6/6", "10YR 5/4", "10YR 3/3", "10YR 2/2", "10YR 3/2"],
    correct: 0
  },
  {
    id: 83, tema: 7,
    text: "La estructura masiva o terminal en un suelo:",
    options: [
      "Mejora siempre la aireación",
      "Ocasiona problemas de permeabilidad e incremento de CO₂",
      "Aumenta macroporosidad siempre",
      "Solo aparece en horizontes O",
      "Es la estructura ideal"
    ],
    correct: 1
  },
  {
    id: 84, tema: 7,
    text: "¿Cómo mejoraría la estructura de un suelo arenoso?",
    options: [
      "Añadiendo sodio",
      "Aportando materia orgánica",
      "Eliminando arcilla",
      "Compactándolo en húmedo",
      "Lavando bases"
    ],
    correct: 1
  },
  {
    id: 85, tema: 7,
    text: "Los suelos Gley, encharcados o hidromorfos en tablas Munsell:",
    options: [
      "Presentan colores rojizos",
      "Presentan colores grises, verdosos o azulados",
      "Presentan cromas muy altos rojos",
      "Siempre son 10R 6/8",
      "No tienen color"
    ],
    correct: 1
  },
  {
    id: 86, tema: 7,
    text: "Estructura del suelo, ¿qué es?",
    options: [
      "Forma de agregación de las partículas",
      "Porcentaje de arena, limo y arcilla",
      "Color del suelo",
      "pH del suelo",
      "Contenido en sales"
    ],
    correct: 0
  },
  {
    id: 87, tema: 7,
    text: "La medida del color del suelo con tablas Munsell combina:",
    options: [
      "Hue, value y chroma",
      "pH, Eh y CIC",
      "Arena, limo y arcilla",
      "T, S y V",
      "Ca, Mg y Na"
    ],
    correct: 0
  },
  {
    id: 88, tema: 7,
    text: "Los colores rojizos del suelo indican:",
    options: [
      "Óxidos férricos tipo hematites",
      "Fe reducido en hidromorfía",
      "Carbonatos",
      "Yeso",
      "Materia orgánica fresca"
    ],
    correct: 0
  },
  {
    id: 89, tema: 7,
    text: "Los colores gris-verdoso y azulado en el suelo indican:",
    options: [
      "Condiciones reductoras/hidromorfía",
      "Hematites abundante",
      "Carbonatos",
      "Sequía extrema",
      "Suelo rico en arena"
    ],
    correct: 0
  },
  {
    id: 90, tema: 7,
    text: "Unidades estructurales de menor a mayor:",
    options: [
      "Agregado, microagregado, clúster, dominio",
      "Dominio, flóculo, microagregado y ped",
      "Ped, microagregado, flóculo, dominio",
      "Clúster, ped, dominio, agregado",
      "Ninguna"
    ],
    correct: 1
  },
  {
    id: 91, tema: 7,
    text: "Los bloques estructurales se definen por su:",
    options: [
      "Color únicamente",
      "Tamaño, geometría y desarrollo",
      "pH y Eh",
      "Materia orgánica únicamente",
      "Ley de Stokes"
    ],
    correct: 1
  },
  {
    id: 92, tema: 7,
    text: "El VALUE dentro del color del suelo se representa como:",
    options: [
      "Mezcla con gris/luminosidad; se representa en ordenadas",
      "Matiz en abscisas",
      "Croma en páginas",
      "Contenido de hematites",
      "Saturación en bases"
    ],
    correct: 0
  },
  {
    id: 93, tema: 7,
    text: "La consistencia del suelo se determina sobre:",
    options: [
      "Los agregados",
      "La solución del suelo",
      "La atmósfera",
      "La roca madre únicamente",
      "La materia orgánica soluble"
    ],
    correct: 0
  },
  {
    id: 94, tema: 7,
    text: "El laboreo en condiciones de humedad inadecuadas produce:",
    options: [
      "Degradación de estructura y compactación/amasado",
      "Mejora siempre la porosidad",
      "Aumenta la CIC por sí solo",
      "Forma gley",
      "Disminuye sales"
    ],
    correct: 0
  },
  {
    id: 95, tema: 7,
    text: "El suelo con mayor contenido en óxidos de hierro tipo hematites será: [Examen 2025]",
    options: [
      "Munsell 10YR 6/6",
      "Munsell 7.5YR 2/2",
      "Munsell 5YR 7/1",
      "Munsell 10R 6/8",
      "Munsell 2.5Y 4/1"
    ],
    correct: 3
  },
  {
    id: 96, tema: 7,
    text: "¿A qué se refiere el 'grado' estructural? [Examen 2025]",
    options: [
      "Al desarrollo o intensidad con que se manifiesta la estructura",
      "A la forma de agregados",
      "Al tamaño de agregados",
      "Al color Munsell",
      "Al pH"
    ],
    correct: 0
  },
  {
    id: 97, tema: 7,
    text: "¿Suelos con la misma textura tendrían la misma estructura?",
    options: [
      "No necesariamente; la estructura depende también de MO, cationes, manejo y procesos",
      "Sí, siempre",
      "La estructura no existe",
      "Solo si tienen mismo color",
      "Solo con el mismo pH"
    ],
    correct: 0
  },
  {
    id: 98, tema: 7,
    text: "Una buena estructura del suelo:",
    options: [
      "Aumentará Na⁺⁺",
      "Tendrá gran contenido en arcilla",
      "Favorece microorganismos aeróbicos",
      "Impide biodegradación",
      "Produce efecto floculante exclusivamente"
    ],
    correct: 2
  },

  // ─────────────────────────────────────────────────────────
  //  TEMA 8 · INTERCAMBIO CATIÓNICO, CIC Y BASES
  // ─────────────────────────────────────────────────────────
  {
    id: 99, tema: 8,
    text: "Cuando la concentración de cationes en la solución del suelo disminuye, en el complejo de cambio ¿qué ocurre?",
    options: [
      "Disminuye la velocidad y disminuye la selectividad",
      "Disminuye la velocidad y aumenta la selectividad",
      "Aumenta la velocidad y disminuye la selectividad",
      "Aumenta la velocidad de intercambio y aumenta la selectividad",
      "No afecta al intercambio"
    ],
    correct: 3
  },
  {
    id: 100, tema: 8,
    text: "¿Cuál es el origen de las cargas negativas permanentes presentes en los minerales de la arcilla?",
    options: [
      "Ionización de grupos OH de la capa octaédrica",
      "Sustituciones isomórficas en la capa tetraédrica",
      "Sustituciones isomórficas en la capa octaédrica",
      "Sustituciones isomórficas en capa tetraédrica, octaédrica o ambas",
      "No presentan cargas permanentes"
    ],
    correct: 3
  },
  {
    id: 101, tema: 8,
    text: "¿De qué depende especialmente la capacidad de cambio catiónico de un suelo?",
    options: [
      "De la concentración de cationes presentes",
      "De su contenido en arcilla y materia orgánica",
      "De su riqueza en óxidos e hidróxidos de Fe y Al",
      "De los contenidos y tipos de arcilla y materia orgánica",
      "De su porcentaje de sodio de cambio"
    ],
    correct: 3
  },
  {
    id: 102, tema: 8,
    text: "¿Cuál es el origen de los rasgos negativos permanentes que presentan los coloides orgánicos del suelo?",
    options: [
      "Ionización de grupos OH",
      "Sustituciones isomórficas",
      "Ionización de grupos COOH y grupos OH",
      "Ionización de grupos NH₂ por debajo del PI",
      "Los coloides orgánicos no tienen cargas permanentes"
    ],
    correct: 4
  },
  {
    id: 103, tema: 8,
    text: "El exceso de Na⁺ en el complejo de cambio provoca:",
    options: [
      "Floculación y estabilidad",
      "Dispersión coloidal y menor desarrollo/estabilidad de estructura",
      "Aumento de estructura granular",
      "Aumento de porosidad estable",
      "Disminución de pH siempre"
    ],
    correct: 1
  },
  {
    id: 104, tema: 8,
    text: "El grado de saturación en bases del complejo de cambio (V) es:",
    options: [
      "Relación entre suma de bases y capacidad de cambio",
      "Relación entre agua y aire",
      "Porcentaje de arcilla",
      "Contenido de carbonatos",
      "Relación C/N"
    ],
    correct: 0
  },
  {
    id: 105, tema: 8,
    text: "¿En qué jardín es más idónea la combinación a nivel de fertilidad?",
    options: [
      "Caolinita + MO",
      "Montmorillonita + MO",
      "MO sola",
      "Arcilla sola",
      "Arena sola"
    ],
    correct: 1
  },
  {
    id: 106, tema: 8,
    text: "Secuencia de textura de mayor a menor CIC:",
    options: [
      "Arena > franco > arcilla",
      "Franco > arena > arcilla",
      "Arcilla > franco > arenosa",
      "Arenosa > arcillosa > franca",
      "Todas iguales"
    ],
    correct: 2
  },
  {
    id: 107, tema: 8,
    text: "Las bases de cambio son:",
    options: [
      "Ca, Na, Mg y H",
      "Ca, Mg, Na, K y Al",
      "Ca, Na, K, Mg y Fe",
      "Na, Ca, K, Mg",
      "Solo H y Al"
    ],
    correct: 3
  },
  {
    id: 108, tema: 8,
    text: "La capacidad total de cambio catiónico (T):",
    options: [
      "Aumenta con el pH",
      "Disminuye en relación con MO",
      "Aumenta cuanto menor es la textura",
      "Disminuye cuantos más coloides hay",
      "Todas son ciertas"
    ],
    correct: 0
  },
  {
    id: 109, tema: 8,
    text: "Según el modelo de doble capa difusa: [Examen 2025]",
    options: [
      "La concentración de cationes aumenta cerca de la superficie de la partícula",
      "Las concentraciones de cationes disminuyen cerca de la superficie",
      "Una mayor carga de catión aumenta el espesor de la doble capa",
      "Las respuestas a y c son verdaderas",
      "Todas son falsas"
    ],
    correct: 0
  },
  {
    id: 110, tema: 8,
    text: "Los factores que intervienen en el intercambio catiónico son:",
    options: [
      "Naturaleza del complejo absorbente, naturaleza de los iones, pH y concentración en solución",
      "Solo textura gruesa",
      "Solo precipitación",
      "Solo estructura masiva",
      "Solo temperatura atmosférica"
    ],
    correct: 0
  },

  // ─────────────────────────────────────────────────────────
  //  TEMA 9 · pH, Eh Y REACCIÓN DEL SUELO
  // ─────────────────────────────────────────────────────────
  {
    id: 111, tema: 9,
    text: "¿Dónde se produce la mayor pérdida de radiación solar que llega a la Tierra?",
    options: [
      "En la capa superior de la atmósfera por reflexión",
      "En el horizonte C",
      "En la zona saturada",
      "En el complejo de cambio",
      "En el agua higroscópica"
    ],
    correct: 0
  },
  {
    id: 112, tema: 9,
    text: "Cuando el pH disminuye, ¿qué hace el Eh?",
    options: [
      "Disminuye y predominan condiciones reductoras",
      "Aumenta y predominan condiciones oxidantes",
      "No se modifica",
      "Disminuye y predominan condiciones oxidantes",
      "Aumenta y predominan condiciones reductoras"
    ],
    correct: 1
  },
  {
    id: 113, tema: 9,
    text: "¿Cuál de los siguientes valores de Eh indica condiciones reductoras?",
    options: ["+500 mV", "+700 mV", "−100 mV", "+200 mV", "+300 mV"],
    correct: 2
  },
  {
    id: 114, tema: 9,
    text: "La zona límite entre condiciones aerobias y anaerobias corresponde a un Eh aproximado de:",
    options: ["+700 mV", "+500 mV", "+200 mV", "−100 mV", "−300 mV"],
    correct: 2
  },
  {
    id: 115, tema: 9,
    text: "El potencial de óxido-reducción Eh se mide en:",
    options: ["pH", "mV", "atmósferas", "cmol(+)/kg", "kPa"],
    correct: 1
  },
  {
    id: 116, tema: 9,
    text: "Los suelos con horizontes de acumulación de carbonatos (Ck) tendrán un pH:",
    options: ["Ácido", "Básico", "Neutro exacto", "Siempre menor de 5", "Sin relación"],
    correct: 1
  },
  {
    id: 117, tema: 9,
    text: "El potencial de óxido-reducción disminuye cuando:",
    options: [
      "Disminuye el oxígeno y predominan condiciones reductoras",
      "Aumenta mucho el oxígeno",
      "El pH disminuye siempre",
      "Aumenta hematites",
      "Se seca el suelo"
    ],
    correct: 0
  },
  {
    id: 118, tema: 9,
    text: "En un suelo de carácter dístrico su pH será:",
    options: ["Ácido", "Básico", "Neutro siempre", "Alcalino sódico", "Sin relación"],
    correct: 0
  },
  {
    id: 119, tema: 9,
    text: "¿Qué pH tendrá un suelo con carbonatos?",
    options: ["Básico o alcalino", "Ácido fuerte", "Neutro exacto siempre", "Menor que 5", "No influye"],
    correct: 0
  },
  {
    id: 120, tema: 9,
    text: "En un suelo gley o hidromorfo:",
    options: [
      "Está permanentemente o frecuentemente en condiciones reductoras",
      "Su pH>7 siempre",
      "Su Eh es positivo",
      "La CIC es alta",
      "Todas son ciertas"
    ],
    correct: 0
  },
  {
    id: 121, tema: 9,
    text: "Para un mismo valor de Eh:",
    options: [
      "El estado redox dependerá del pH",
      "El pH no influye",
      "Siempre es oxidante",
      "Siempre es reductor",
      "Solo depende de textura"
    ],
    correct: 0
  },
  {
    id: 122, tema: 9,
    text: "Cuando disminuye el pH, el Eh: [Examen 2025]",
    options: [
      "Aumenta y predominan condiciones reductoras",
      "Aumenta y predominan condiciones oxidantes",
      "No afecta si Eh=200 mV",
      "Disminuye y predominan condiciones reductoras",
      "Todas son falsas"
    ],
    correct: 1
  },
  {
    id: 123, tema: 9,
    text: "¿Cuáles son los agentes que provocan acidificación del suelo?",
    options: [
      "Precipitaciones intensas",
      "Pérdida de bases de cambio",
      "Extracción de nutrientes por cultivos",
      "Texturas gruesas",
      "Todas pueden contribuir"
    ],
    correct: 4
  },
  {
    id: 124, tema: 9,
    text: "Suelos sobre materiales carbonatados como calizas y dolomías tienen pH:",
    options: ["Ácido", "Básico", "Neutro", "Saturado en Ca", "Siempre dístrico"],
    correct: 1
  },
  {
    id: 125, tema: 9,
    text: "¿En qué zonas nos encontraremos suelos ácidos? [Examen 2025]",
    options: [
      "Zonas húmedas/lavadas y materiales ácidos",
      "Zonas carbonatadas semiáridas",
      "Horizontes Ck",
      "Suelos con calizas y dolomías",
      "Zonas con yeso siempre"
    ],
    correct: 0
  },

  // ─────────────────────────────────────────────────────────
  //  TEMA 10 · FACTORES FORMADORES Y EDAFOGÉNESIS
  // ─────────────────────────────────────────────────────────
  {
    id: 126, tema: 10,
    text: "Una litosecuencia es:",
    options: [
      "Serie de suelos donde el material original determina los procesos edáficos",
      "Serie controlada solo por clima",
      "Serie controlada solo por edad",
      "Serie en una ladera por relieve",
      "Serie hidromorfa"
    ],
    correct: 0
  },
  {
    id: 127, tema: 10,
    text: "Un suelo natural presenta concentraciones típicas de materia orgánica, minerales, agua y aire respectivamente:",
    options: [
      "1%, 50%, 25% y 24%",
      "25%, 25%, 25% y 25%",
      "50%, 1%, 24% y 25%",
      "10%, 40%, 40% y 10%",
      "0%, 100%, 0% y 0%"
    ],
    correct: 0
  },
  {
    id: 128, tema: 10,
    text: "En la dinámica del suelo, la transformación es una:",
    options: [
      "Alteración química/meteorización",
      "Translocación física exclusivamente",
      "Adición de agua solamente",
      "Pérdida de suelo por erosión únicamente",
      "Medida del color"
    ],
    correct: 0
  },
  {
    id: 129, tema: 10,
    text: "El proceso de translocación de iones en solución dentro del suelo se conoce como:",
    options: ["Lavado/lixiviación", "Humificación", "Mineralización secundaria", "Agregación", "Saturación"],
    correct: 0
  },
  {
    id: 130, tema: 10,
    text: "Uno de los procesos básicos de formación del suelo es:",
    options: [
      "Adición, pérdida, transformación o translocación",
      "Solo combustión",
      "Solo cristalización magmática",
      "Solo evaporación",
      "Solo fotosíntesis"
    ],
    correct: 0
  },
  {
    id: 131, tema: 10,
    text: "Una climosecuencia es:",
    options: [
      "Serie de suelos donde varía el clima manteniendo otros factores relativamente constantes",
      "Serie controlada solo por litología",
      "Serie por pendiente",
      "Serie por edad",
      "Serie por actividad humana"
    ],
    correct: 0
  },
  {
    id: 132, tema: 10,
    text: "Factor no considerado fundamental en la formación del suelo:",
    options: ["Organismos", "Relieve", "Clima", "Materia orgánica", "Tiempo"],
    correct: 3
  },
  {
    id: 133, tema: 10,
    text: "La evolución es el proceso responsable de:",
    options: [
      "La formación de horizontes edáficos por diferenciación del perfil",
      "La cristalización ígnea",
      "Solo sedimentación",
      "Solo horizontes orgánicos H",
      "Sin relación"
    ],
    correct: 0
  },
  {
    id: 134, tema: 10,
    text: "A igualdad de condiciones, la meteorización actuará más difícilmente sobre:",
    options: [
      "Minerales más resistentes/estables como cuarzo",
      "Minerales ferromagnesianos inestables",
      "Material muy fracturado",
      "Rocas porosas",
      "Minerales solubles"
    ],
    correct: 0
  },
  {
    id: 135, tema: 10,
    text: "¿En qué clima los suelos tienen más contenido en materia orgánica?",
    options: [
      "Climas fríos y húmedos",
      "Climas cálidos y secos",
      "Desiertos cálidos",
      "Zonas salinas secas",
      "No depende del clima"
    ],
    correct: 0
  },
  {
    id: 136, tema: 10,
    text: "¿En qué clima se pueden encontrar horizontes Ck?",
    options: [
      "Climas áridos o semiáridos con lavado limitado",
      "Climas muy húmedos con lavado intenso",
      "Turberas ácidas",
      "Zonas permanentemente saturadas",
      "Solo clima polar"
    ],
    correct: 0
  },
  {
    id: 137, tema: 10,
    text: "¿Podemos tener diferentes suelos a partir de la misma roca madre?",
    options: [
      "Sí, por influencia de clima, relieve, organismos y tiempo",
      "No, la roca madre lo determina todo",
      "Solo si cambia el color",
      "Solo si cambia el laboratorio",
      "Nunca"
    ],
    correct: 0
  },
  {
    id: 138, tema: 10,
    text: "Un suelo se puede formar a partir de:",
    options: [
      "Una roca",
      "Otro suelo",
      "Material consolidado",
      "Materiales volcánicos o plutónicos",
      "Todas son verdaderas"
    ],
    correct: 4
  },
  {
    id: 139, tema: 10,
    text: "Un suelo originado a partir de granito tendrá:",
    options: [
      "Tendencia arcillosa y color rojizo",
      "Tendencia arenosa y pH ácido",
      "Alta CIC siempre",
      "Colores oscuros y estructura desarrollada",
      "Acumulación de carbonatos siempre"
    ],
    correct: 1
  },
  {
    id: 140, tema: 10,
    text: "¿Qué factor formador del suelo es independiente del resto? [Examen 2025]",
    options: ["Clima", "Tiempo", "Relieve", "Todos dependen unos de otros", "Organismos"],
    correct: 3
  },

  // ─────────────────────────────────────────────────────────
  //  TEMA 11 · PRÁCTICAS Y ANÁLISIS DE LABORATORIO
  // ─────────────────────────────────────────────────────────
  {
    id: 141, tema: 11,
    text: "¿Qué objeto tiene el tratamiento del suelo con peróxido de hidrógeno en la determinación de la estructura?",
    options: [
      "Eliminar las sales solubles",
      "Destruir sesquióxidos",
      "Oxidar la materia orgánica",
      "Provocar la dispersión de la muestra",
      "Nada de lo anterior"
    ],
    correct: 2
  },
  {
    id: 142, tema: 11,
    text: "Previo a la determinación granulométrica de una muestra:",
    options: [
      "Se destruye materia orgánica y carbonatos/cementantes",
      "Se añade humus",
      "Se compacta la muestra",
      "Se aumenta la salinidad",
      "Se mide solo color"
    ],
    correct: 0
  },
  {
    id: 143, tema: 11,
    text: "¿Qué es una prueba en blanco en un análisis convencional?",
    options: [
      "Análisis sin muestra para corregir el consumo de reactivos",
      "Una muestra blanca de suelo",
      "Un ensayo con más materia orgánica",
      "Un horizonte E",
      "Una valoración sin reactivos"
    ],
    correct: 0
  },
  {
    id: 144, tema: 11,
    text: "En la determinación de materia orgánica por vía húmeda:",
    options: [
      "Se oxida la MO con exceso de dicromato y se valora el sobrante con sal de Mohr",
      "Se mide por Ley de Stokes",
      "Se añade acetato amónico",
      "Se determina color Munsell",
      "Se mide Eh"
    ],
    correct: 0
  },
  {
    id: 145, tema: 11,
    text: "Cuando se añade acetato amónico a las partículas coloidales del suelo:",
    options: [
      "Los cationes amonio reemplazan a los cationes ligados a la superficie",
      "Se destruye la materia orgánica",
      "Se mide la textura",
      "Aumenta el carbonato cálcico",
      "Se colorea el fósforo de azul"
    ],
    correct: 0
  },
  {
    id: 146, tema: 11,
    text: "Para evaluación de fósforo, las determinaciones espectrofotométricas se basan en:",
    options: [
      "Complejos fosfo-molíbdicos azules que absorben luz",
      "Sedimentación de partículas",
      "Efervescencia de carbonatos",
      "Medida directa de pH",
      "Saturación de poros"
    ],
    correct: 0
  },
  {
    id: 147, tema: 11,
    text: "Una muestra para análisis de laboratorio debe cumplir:",
    options: [
      "Ser representativa, suficiente y correctamente preparada/etiquetada",
      "Ser solo arcilla",
      "Estar saturada obligatoriamente",
      "Ser tomada solo en horizonte R",
      "No secarse nunca"
    ],
    correct: 0
  },
  {
    id: 148, tema: 11,
    text: "Finalidad del dicromato potásico en determinación de materia orgánica:",
    options: [
      "Oxidar la materia orgánica",
      "Dispersar arcilla",
      "Extraer bases",
      "Medir Eh",
      "Detectar yeso"
    ],
    correct: 0
  },
  {
    id: 149, tema: 11,
    text: "Para extraer las bases de cambio se emplea:",
    options: [
      "Acetato amónico",
      "Agua destilada solamente",
      "Peróxido de hidrógeno",
      "Dicromato potásico",
      "HCl concentrado siempre"
    ],
    correct: 0
  },
  {
    id: 150, tema: 11,
    text: "Objeto del tratamiento del suelo con sales sódicas en determinación de estructura/textura:",
    options: [
      "Provocar dispersión de la muestra",
      "Oxidar materia orgánica",
      "Medir pH",
      "Extraer carbonatos",
      "Crear agregados"
    ],
    correct: 0
  },
  {
    id: 151, tema: 11,
    text: "Una vez seca la muestra de suelo tomada:",
    options: [
      "Se desmenuza, tamiza y prepara la tierra fina",
      "Se satura inmediatamente",
      "Se quema siempre",
      "Se tira la fracción fina",
      "Se mide solo color"
    ],
    correct: 0
  }
];

// Nombres de los temas para la interfaz
const THEME_NAMES = {
  1:  "Perfil, horizontes y nomenclatura",
  2:  "Componentes inorgánicos, minerales y arcillas",
  3:  "Materia orgánica y humus",
  4:  "Agua del suelo",
  5:  "Aireación y fase gaseosa",
  6:  "Textura y análisis granulométrico",
  7:  "Estructura, consistencia y color",
  8:  "Intercambio catiónico, CIC y bases",
  9:  "pH, Eh y reacción del suelo",
  10: "Factores formadores y edafogénesis",
  11: "Prácticas y análisis de laboratorio"
};
