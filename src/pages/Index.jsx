import { Link } from 'react-router';
import { imagen } from '../core/imagenes.js';

const servicios = [
  {
    nombre: 'Seguridad',
    imagen: imagen('Seguridad.png'),
    enlace: '/Seguridad'
  },
  {
    nombre: 'Investigacion',
    imagen: imagen('cientifico.png'),
    enlace: '/Investigacion'
  },
  {
    nombre: 'Apollo',
    imagen: imagen('apollo.png'),
    enlace: '/Apollo'
  },
];

function Index() {
  return (
    <>
      <section className="banner-container banner-institucional">
        <Link to="/nosotros">
          <img src={imagen('negro.png')} alt="fondo" />
        </Link>

        <div>
          La Fundación de NewDay es un grupo centrado en el
          apoyo y salvación de la ciudad de NewDay, mediante
          programas de seguridad, investigación y reformación,
          para mantener el bienestar y orden de todos los ciudadanos.
        </div>
      </section>

      <div className="encabezado">Programas</div>

      <div>
        en la fundación de NewDay sabemos la importancia de las oportunidades
        y las opciones para el desarrollo de los ciudadanos por esto nosotros
        ofrecemos tres programas de seguridad, investigacion y formacion para
        el desarrollo de la ciudad y sus ciudadanos, cada uno de estos programas
        tiene un objetivo y una meta, asegurar el mejor futuro para la ciudad y sus ciudadanos
      </div>

      <div className="servicios-grid">
        {servicios.map((servicios) => (
          <Link
            key={servicios.nombre}
            to={servicios.enlace}
            className="servicio-card"
          >
            <div className="imagenes_cuadradas">
              <img src={servicios.imagen} alt={servicios.nombre} />
            </div>

            <span>{servicios.nombre}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Index;
