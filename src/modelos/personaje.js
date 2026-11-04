const personaje = {
    id: 'PER_01',

    // Información básica
    nombre: 'John Doe',
    edad: 30,
    historias: 1,

    // Configuración
    arquetipo: 'ARQ_01',
    rol: 'ROL_In_01',

    // Marcas
    estado_marcas: 'despierta',
    marcas: [
        'MAR_Ce_01'
    ],

    // Especialidades
    especialidades: {
        'ESP_San_01': 0,
        'ESP_San_02': 0,
        'ESP_San_03': 0,
        'ESP_San_04': 0,
        'ESP_San_05': 0,
        'ESP_San_06': 0
    },

    // Atributos
    atributos: {
        vida: { valor: 5, estado: '/' },
        aguante: { valor: 5, estado: '/' },
        conexion: { valor: 3, estado: '/' },
        espiritu: { valor: 3, estado: '/' }
    },

    // Conocimientos básicos
    conocimientos_basicos: {},

    // Progresión
    puntos: {
        aprendizajes: {
            disponibles: 20,
            totales: 20
        },
        hitos: 15
    },

    // Inventario
    inventario: {}
};