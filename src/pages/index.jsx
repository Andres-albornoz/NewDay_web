import { Link } from 'react-router';
import hero from '../assets/hero.png';
import negro from '../assets/negro.png';

const servicios = [
  {
    nombre: 'seguridad',
    imagen: `${import.meta.env.BASE_URL}imagenes/soldado.png`,
    id: 'seguridad'
  },
  {
    nombre: 'cientificos',
    imagen: `${import.meta.env.BASE_URL}imagenes/cientificos.png`,
    id: 'cientificos'
  },
  {
    nombre: 'apollos',
    imagen: hero,
    id: 'apollos'
  },
];

function Index() {
  return (
    <>
        <section className="banner-container">
            <Link to="/nosotros">
            <img src={negro} alt="fondo" />
            </Link>

            <div>
                La Fundacion de NewDay es un grupo centrado en el apollo y salvacion de la ciudad de NewDay, mediante progrmas de seguridad, investigacion y reformacion, 
                para mantener y asegurar la seguridad, bienestar y orden de todos los ciudadanos<p/>
            </div>  
        </section>

        

        <div className="encabezado">progrmas</div>

        <div>
            en la fundacion de NewDay sabemos la inportancia de las oportunidades y las opciones para el desarrollo de los ciudadanos por esto nosotros ofresemos tres
            programas de seguridad, investigacion y reformacion para el desarrollo de la ciudad y sus ciudadanos, cada uno de estos programas tiene un objetivo y una meta,
            hacegurar el mejor futuro para la ciudad y sus ciudadanos
        </div>

        <div className="servicios-grid">
            {servicios.map((servicio) => (
            <Link key={servicio.id} to={`/servicios/${servicio.id}`} className="servicio-card">
                <div className="imagenes_cuadradas">
                <img src={servicio.imagen} alt={servicio.nombre} />
                </div>
                <span>{servicio.nombre}</span>
            </Link>
            ))}
        </div>
    </>
  );
}

export default Index;