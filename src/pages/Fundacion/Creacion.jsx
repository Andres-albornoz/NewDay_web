import { useState } from 'react';
import { Roles } from '../../data/Roles';

function Creacion() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [arquetipo, setArquetipo] = useState('');
    const [rol, setRol] = useState('');
    const [Marca, setMarca] = useState('');
    const [especialidades, setEspecialidades] = useState({});

    // Busca el objeto del rol seleccionado
    const rolSeleccionado = Roles.find(
        (r) => r.id === rol
    );

    // Calcula los puntos utilizados
    const puntosUsados = Object.values(especialidades)
        .reduce((total, nivel) => total + nivel, 0);

    // Cambia el nivel de una especialidad
    function cambiarNivel(id, nuevoNivel) {
        // Evita valores fuera del límite
        if (nuevoNivel < 0 || nuevoNivel > 5) return;

        const especialidadesActualizadas = {
            ...especialidades,
            [id]: nuevoNivel
        };

        // Calcula los puntos después del cambio
        const nuevosPuntosUsados = Object.values(
            especialidadesActualizadas
        ).reduce((total, nivel) => total + nivel, 0);

        // Evita utilizar más de 15 puntos
        if (nuevosPuntosUsados > 15) return;

        setEspecialidades(especialidadesActualizadas);
    }

    // Cambia el rol y crea sus especialidades
    function seleccionarRol(event) {
        const nuevoRol = event.target.value;

        setRol(nuevoRol);

        const rolEncontrado = Roles.find(
            (r) => r.id === nuevoRol
        );

        if (rolEncontrado) {
            const nuevasEspecialidades = {};

            rolEncontrado.Especialidades.forEach((id) => {
                nuevasEspecialidades[id] = 0;
            });

            setEspecialidades(nuevasEspecialidades);
        } else {
            setEspecialidades({});
        }

        function seleccionarMarca(event) {
        const nuevMarca = event.target.value;

        setMarca(nuevaMarca);

        const MarcaEncontrada = Marca.find(
            (m) => m.id === nuevaMarca
        );
        }
    }

    return (
        <div>
            <input
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                placeholder="Nombre del personaje"
            />

            <input
                type="number"
                value={edad}
                onChange={(event) => setEdad(event.target.value)}
                placeholder="Edad"
            />

            {/* Selección de Marca */}
            <select
                value={Marca}
                onChange={seleccionarRol}
                disabled={!arquetipo}
            >
                <option value="">Selecciona unna Marca</option>

                {Marca
                    .map((Marca) => (
                        <option
                            key={Marca.id}
                            value={Marca.id}
                        >
                            {Marca.nombre}
                        </option>
                    ))
                }
            </select>

            {/* Selección de arquetipo */}
            <select
                value={arquetipo}
                onChange={(event) => {
                    setArquetipo(event.target.value);
                    setRol('');
                    setEspecialidades({});
                }}
            >
                <option value="">Selecciona un arquetipo</option>

                <option value="ARQ_01">Intelectual</option>
                <option value="ARQ_02">Callejero</option>
                <option value="ARQ_03">Mecánico</option>
                <option value="ARQ_04">Tirador</option>
                <option value="ARQ_05">Arcano</option>
            </select>

            {/* Selección de rol */}
            <select
                value={rol}
                onChange={seleccionarRol}
                disabled={!arquetipo}
            >
                <option value="">Selecciona un rol</option>

                {Roles
                    .filter((rol) => rol.id_ARQ === arquetipo)
                    .map((rol) => (
                        <option
                            key={rol.id}
                            value={rol.id}
                        >
                            {rol.nombre}
                        </option>
                    ))
                }
            </select>

            {/* Puntos utilizados */}
            {rolSeleccionado && (
                <div>
                    <p>
                        Puntos utilizados: {puntosUsados} / 15
                    </p>

                    {/* Especialidades del rol */}
                    {Object.entries(especialidades).map(([id, nivel]) => (
                        <div key={id}>
                            <span>{id}</span>

                            <input
                                type="number"
                                min="0"
                                max="5"
                                value={nivel}
                                onChange={(event) =>
                                    cambiarNivel(
                                        id,
                                        Number(event.target.value)
                                    )
                                }
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Creacion;