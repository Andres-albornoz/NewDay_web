/*
import { useEffect, useState } from "react";
import "./App.css";
import "./src/pages/hoja_personaje.jsx";

const STORAGE_KEY = "newday-personajes";

const crearPersonajeVacio = () => ({
  id: null,
  nombre: "",
  jugador: "",
  arquetipo: "Intelectual",
  rol: "",
  historia: "",
  atributos: {
    Físico: 0,
    Ingenio: 0,
    Labia: 0,
    Percepción: 0,
    Herramientas: 0,
  },
  especialidades: "",
  conocimientos: "",
  marcas: "",
});

function leerPersonajes() {
  try {
    const guardados = localStorage.getItem(STORAGE_KEY);
    return guardados ? JSON.parse(guardados) : [];
  } catch {
    return [];
  }
}

function App() {
  const [seccion, setSeccion] = useState("inicio");
  const [personajes, setPersonajes] = useState(leerPersonajes);
  const [personajeActual, setPersonajeActual] = useState(crearPersonajeVacio());
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(personajes));
  }, [personajes]);

  function abrirFormulario(personaje = null) {
    setPersonajeActual(
      personaje
        ? { ...personaje, atributos: { ...personaje.atributos } }
        : crearPersonajeVacio()
    );
    setSeccion("editor");
  }

  function actualizarCampo(campo, valor) {
    setPersonajeActual((anterior) => ({
      ...anterior,
      [campo]: valor,
    }));
  }

  function actualizarAtributo(atributo, valor) {
    setPersonajeActual((anterior) => ({
      ...anterior,
      atributos: {
        ...anterior.atributos,
        [atributo]: Number(valor),
      },
    }));
  }

  function guardarPersonaje(evento) {
    evento.preventDefault();

    if (!personajeActual.nombre.trim()) {
      alert("Debes indicar el nombre del personaje.");
      return;
    }

    if (personajeActual.id) {
      setPersonajes((anteriores) =>
        anteriores.map((personaje) =>
          personaje.id === personajeActual.id
            ? { ...personajeActual, nombre: personajeActual.nombre.trim() }
            : personaje
        )
      );
    } else {
      setPersonajes((anteriores) => [
        ...anteriores,
        {
          ...personajeActual,
          id: crypto.randomUUID(),
          nombre: personajeActual.nombre.trim(),
        },
      ]);
    }

    setPersonajeActual(null);
    setSeccion("personajes");
  }

  function eliminarPersonaje(id) {
    const confirmar = window.confirm(
      "¿Seguro que quieres eliminar este personaje? Esta acción no se puede deshacer."
    );

    if (!confirmar) return;

    setPersonajes((anteriores) =>
      anteriores.filter((personaje) => personaje.id !== id)
    );
  }

  const personajesFiltrados = personajes.filter((personaje) =>
    `${personaje.nombre} ${personaje.jugador} ${personaje.arquetipo}`
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  // Extraemos el id a una constante primitiva. React Compiler genera las
  // comparaciones de su caché de memoización a partir de esta variable; si se
  // usa directamente `personajeActual?.id` dentro del render, el compilador
  // puede generar `personajeActual.id` sin la comprobación de null y romper
  // cuando el personaje actual vuelve a ser null (al guardar o cancelar).
  const personajeActualId = personajeActual ? personajeActual.id : null;

  // Un único string (en lugar de varias expresiones condicionales) mantiene
  // siempre el mismo nodo de texto en el <h1>: así React solo actualiza su
  // contenido y nunca tiene que insertar/eliminar nodos de texto.
  const tituloSeccion =
    seccion === "editor"
      ? personajeActualId
        ? "Editar expediente"
        : "Nuevo expediente"
      : seccion === "personajes"
        ? "Hojas de personaje"
        : "Panel principal";

  return (
    <div className="app">
      <header className="barra-superior">
        <button
          className="marca"
          onClick={() => setSeccion("inicio")}
          aria-label="Ir al inicio"
        >
          <span className="marca-simbolo">ND</span>
          <span>
            <strong>NEW DAY</strong>
            <small>Sistema de gestión</small>
          </span>
        </button>

        <nav className="navegacion">
          <button
            className={seccion === "inicio" ? "nav-activo" : ""}
            onClick={() => setSeccion("inicio")}
          >
            Inicio
          </button>
          <button
            className={
              seccion === "personajes" || seccion === "editor"
                ? "nav-activo"
                : ""
            }
            onClick={() => setSeccion("personajes")}
          >
            Personajes
          </button>
        </nav>

        <span className="estado-sistema">
          <span className="punto-estado" />
          SISTEMA LOCAL
        </span>
      </header>

      <main className="contenido">
        <div className="encabezado-pagina">
          <div>
            <p className="sobretitulo">NEW DAY / ARCHIVO CENTRAL</p>
            <h1>{tituloSeccion}</h1>
          </div>
          <span className="codigo-documento">ND-SG / 001</span>
        </div>

        {seccion === "inicio" && (
          <section className="inicio">
            <div className="panel-bienvenida">
              <div className="bienvenida-texto">
                <p className="sobretitulo">ARCHIVO DE PERSONAJES</p>
                <h2>La ciudad registra a sus habitantes.</h2>
                <p>
                  Administra los expedientes, consulta los datos de los
                  personajes y prepara la información de tus partidas de New
                  Day.
                </p>
                <button
                  className="boton-principal"
                  onClick={() => abrirFormulario()}
                >
                  + Crear personaje
                </button>
              </div>
              <div className="sello">
                <span>ND</span>
                <small>REGISTRO</small>
                <small>INTERNO</small>
              </div>
            </div>

            <div className="estadisticas">
              <article className="tarjeta-estadistica">
                <span>EXPEDIENTES REGISTRADOS</span>
                <strong>{personajes.length}</strong>
                <small>Personajes guardados en este navegador</small>
              </article>
              <article className="tarjeta-estadistica">
                <span>ARQUETIPOS UTILIZADOS</span>
                <strong>
                  {new Set(
                    personajes.map((personaje) => personaje.arquetipo)
                  ).size}
                </strong>
                <small>Arquetipos presentes en el archivo</small>
              </article>
            </div>

            <section className="panel">
              <div className="panel-titulo">
                <div>
                  <p className="sobretitulo">ACCESO RÁPIDO</p>
                  <h2>Expedientes recientes</h2>
                </div>
                <button
                  className="boton-secundario"
                  onClick={() => setSeccion("personajes")}
                >
                  Ver todos →
                </button>
              </div>

              {personajes.length === 0 ? (
                <div className="vacio">
                  <span className="vacio-icono">+</span>
                  <h3>No hay expedientes registrados</h3>
                  <p>
                    Crea tu primer personaje para comenzar a construir el
                    archivo de New Day.
                  </p>
                </div>
              ) : (
                <div className="lista-personajes">
                  {personajes.slice(-3).reverse().map((personaje) => (
                    <article className="fila-personaje" key={personaje.id}>
                      <div className="avatar">
                        {personaje.nombre.charAt(0).toUpperCase()}
                      </div>
                      <div className="datos-fila">
                        <strong>{personaje.nombre}</strong>
                        <small>
                          {personaje.arquetipo}
                          {personaje.rol ? ` · ${personaje.rol}` : ""}
                        </small>
                      </div>
                      <button
                        className="boton-secundario"
                        onClick={() => abrirFormulario(personaje)}
                      >
                        Abrir
                      </button>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </section>
        )}

        {seccion === "personajes" && (
          <section className="panel">
            <div className="panel-titulo">
              <div>
                <p className="sobretitulo">BASE DE DATOS LOCAL</p>
                <h2>Registro de personajes</h2>
              </div>
              <button
                className="boton-principal"
                onClick={() => abrirFormulario()}
              >
                + Nuevo personaje
              </button>
            </div>

            <div className="buscador">
              <span>⌕</span>
              <input
                value={busqueda}
                onChange={(evento) => setBusqueda(evento.target.value)}
                placeholder="Buscar por nombre, jugador o arquetipo..."
              />
            </div>

            {personajesFiltrados.length === 0 ? (
              <div className="vacio">
                <h3>
                  {personajes.length === 0
                    ? "El registro está vacío"
                    : "No se encontraron resultados"}
                </h3>
                <p>
                  {personajes.length === 0
                    ? "Crea un expediente para comenzar."
                    : "Prueba con otro término de búsqueda."}
                </p>
              </div>
            ) : (
              <div className="tabla-contenedor">
                <table>
                  <thead>
                    <tr>
                      <th>PERSONAJE</th>
                      <th>JUGADOR</th>
                      <th>ARQUETIPO</th>
                      <th>ROL</th>
                      <th>ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {personajesFiltrados.map((personaje) => (
                      <tr key={personaje.id}>
                        <td>
                          <strong>{personaje.nombre}</strong>
                        </td>
                        <td>{personaje.jugador || "—"}</td>
                        <td>
                          <span className="etiqueta">
                            {personaje.arquetipo}
                          </span>
                        </td>
                        <td>{personaje.rol || "—"}</td>
                        <td>
                          <div className="acciones">
                            <button
                              className="accion-editar"
                              onClick={() => abrirFormulario(personaje)}
                            >
                              Editar
                            </button>
                            <button
                              className="accion-eliminar"
                              onClick={() => eliminarPersonaje(personaje.id)}
                            >
                              Eliminar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <p className="nota-pie">
              REGISTROS: {personajesFiltrados.length} · ALMACENAMIENTO LOCAL
            </p>
          </section>
        )}

        {seccion === "editor" && personajeActual && (
          <form className="panel formulario" onSubmit={guardarPersonaje}>
            <div className="panel-titulo">
              <div>
                <p className="sobretitulo">DOCUMENTO DE REGISTRO</p>
                <h2>Datos del personaje</h2>
              </div>
              <span className="codigo-documento">FICHA / ND-01</span>
            </div>

            <div className="seccion-formulario">
              <h3>01. Identificación</h3>
              <div className="rejilla-formulario">
                <label>
                  Nombre del personaje *
                  <input
                    required
                    value={personajeActual.nombre}
                    onChange={(evento) =>
                      actualizarCampo("nombre", evento.target.value)
                    }
                    placeholder="Nombre completo"
                  />
                </label>
                <label>
                  Nombre del jugador
                  <input
                    value={personajeActual.jugador}
                    onChange={(evento) =>
                      actualizarCampo("jugador", evento.target.value)
                    }
                    placeholder="Jugador responsable"
                  />
                </label>
                <label>
                  Arquetipo
                  <select
                    value={personajeActual.arquetipo}
                    onChange={(evento) =>
                      actualizarCampo("arquetipo", evento.target.value)
                    }
                  >
                    <option>Intelectual</option>
                    <option>Callejero</option>
                    <option>Instrumental</option>
                    <option>Arcano</option>
                    <option>Tirador</option>
                  </select>
                </label>
                <label>
                  Rol
                  <input
                    value={personajeActual.rol}
                    onChange={(evento) =>
                      actualizarCampo("rol", evento.target.value)
                    }
                    placeholder="Rol o especialización"
                  />
                </label>
              </div>
            </div>

            <div className="seccion-formulario">
              <h3>02. Atributos</h3>
              <p className="ayuda">
                Introduce el valor correspondiente a cada atributo.
              </p>
              <div className="rejilla-atributos">
                {Object.entries(personajeActual.atributos).map(
                  ([atributo, valor]) => (
                    <label key={atributo}>
                      {atributo}
                      <input
                        type="number"
                        min="0"
                        max="2"
                        value={valor}
                        onChange={(evento) =>
                          actualizarAtributo(atributo, evento.target.value)
                        }
                      />
                    </label>
                  )
                )}
              </div>
            </div>

            <div className="seccion-formulario">
              <h3>03. Especialidades y conocimientos</h3>
              <div className="rejilla-formulario">
                <label className="ancho-completo">
                  Especialidades
                  <textarea
                    rows="4"
                    value={personajeActual.especialidades}
                    onChange={(evento) =>
                      actualizarCampo("especialidades", evento.target.value)
                    }
                    placeholder={"Ejemplo:\nInvestigación: 3\nMedicina: 2"}
                  />
                </label>
                <label className="ancho-completo">
                  Conocimientos básicos
                  <textarea
                    rows="4"
                    value={personajeActual.conocimientos}
                    onChange={(evento) =>
                      actualizarCampo("conocimientos", evento.target.value)
                    }
                    placeholder={"Ejemplo:\nHistoria: 3\nArmas de fuego: 2"}
                  />
                </label>
              </div>
            </div>

            <div className="seccion-formulario">
              <h3>04. Marcas e información adicional</h3>
              <label>
                Marcas
                <textarea
                  rows="3"
                  value={personajeActual.marcas}
                  onChange={(evento) =>
                    actualizarCampo("marcas", evento.target.value)
                  }
                  placeholder="Registra las marcas del personaje..."
                />
              </label>
              <label className="campo-historia">
                Historia y observaciones
                <textarea
                  rows="4"
                  value={personajeActual.historia}
                  onChange={(evento) =>
                    actualizarCampo("historia", evento.target.value)
                  }
                  placeholder="Información adicional del expediente..."
                />
              </label>
            </div>

            <div className="acciones-formulario">
              <button
                type="button"
                className="boton-secundario"
                onClick={() => {
                  setPersonajeActual(null);
                  setSeccion("personajes");
                }}
              >
                Cancelar
              </button>
              <button type="submit" className="boton-principal">
                Guardar expediente
              </button>
            </div>
          </form>
        )}
      </main>

      <footer className="pie-pagina">
        <span>NEW DAY · SISTEMA DE GESTIÓN</span>
        <span>PROTOTIPO LOCAL · VERSIÓN 0.1</span>
      </footer>
    </div>
  );
}

export default App;
/**/

import { Route, Routes } from 'react-router'
import Layout from './core/Layout.jsx'
import Index from './pages/index.jsx'
import seguridad from './pages/seguridad.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="Index" element={<Index />} />
        <Route path="seguridad" element={<seguridad />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
