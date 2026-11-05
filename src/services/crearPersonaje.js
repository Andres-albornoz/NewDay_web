import {roles} from './data/Roles.js'

export function crearPersonaje(nombre, edad, arq, rol, marca) {

    // Busca los datos del rol seleccionado
    const datosRol = roles.find(r => r.id === rol);

    // Comprueba que el rol exista
    if (!datosRol) {
        console.error('El rol seleccionado no existe');
        return null;
    }

    // Crea un objeto vacío para las especialidades
    const especialidadesPersonaje = {};

    // Añade cada especialidad del rol con nivel 0
    datosRol.especialidades.forEach(especialidad => {
        especialidadesPersonaje[especialidad] = 0;
    });

    // Crea y devuelve el personaje
    return {
        id: crypto.randomUUID(),

        nombre: nombre,
        edad: edad,

        arquetipo: arq,
        rol: rol,

        estado_marcas: 'despierta',

        marcas: [
            marca
        ],

        especialidades: especialidadesPersonaje,

        atributos: {
            vida: { valor: 5, estado: '/' },
            aguante: { valor: 5, estado: '/' },
            conexion: { valor: 3, estado: '/' },
            espiritu: { valor: 3, estado: '/' }
        },

        // Copia las estadísticas iniciales del rol
        estadisticas: {
            ...datosRol.estadisticas
        },

        conocimientos_basicos: {},

        puntos: {
            historias: 1,

            hitos: {
                disponibles: 15,
                conseguidos: 0
            },

            aprendizajes: {
                disponibles: 20,
                conseguidos: 0
            }
        },

        inventario: {}
    };
}