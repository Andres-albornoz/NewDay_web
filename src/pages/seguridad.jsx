
import { Link } from 'react-router';

const programas = [
  {
    nombre: 'tiros',
    imagen: './imagenes/tiros.png',
    texto: 'entrenamiento de tiro y defensa personal'
  },
  {
    nombre: 'soldados',
    imagen: './imagenes/soldados.png',
    texto: 'entrenamiento como soldados y policias'
  },
];

function Seguridad() {
  return (
    <>
      <section className="banner-container">
        <Link to="/nosotros">
          <img src="./imagenes/Seguridad.png" alt="fondo" />
        </Link>

        <div>
          En la Fundación NewDay somos conscientes de la creciente necesidad
          de seguridad dentro de nuestra comunidad y en toda la ciudad de
          NewDay. Asimismo, reconocemos el interés de muchos ciudadanos en
          contribuir activamente a la protección de su entorno. Por este
          motivo, hemos creado la Iniciativa de Seguridad de la Fundación
          NewDay, destinada a promover la formación y participación ciudadana
          en materia de seguridad.
        </div>
      </section>

      <div className="encabezado">Programas</div>

      <div>
        Como parte de esta iniciativa, la Fundación ofrece programas de
        formación en tiro y defensa personal abiertos a todos los ciudadanos.
        Asimismo, dispone de programas de preparación y formación policial
        y militar para quienes deseen incorporarse a las fuerzas del orden
        y contribuir directamente a la seguridad de nuestra ciudad.

        <br/>
        <br/>

        Estos programas buscan brindar apoyo y oportunidades a los ciudadanos
        interesados en formar parte de las instituciones de seguridad,
        al mismo tiempo que fomentan una comunidad más responsable,
        preparada y comprometida con el cumplimiento de las leyes y la
        protección de NewDay.
      </div>

      <div className="servicios-grid">
        {programas.map((programa) => (
          <div
            key={programa.nombre}
            className="servicio-card"
          >
            <div className="imagenes_cuadradas">
              <img src={programa.imagen} alt={programa.nombre} />
            </div>

            <span>{programa.nombre}</span>
            <span>{programa.texto}</span>
          </div>
        ))}
      </div>

      <section className="banner-container"></section>

      <div className="encabezado">Inscripción</div>

      <div>
        Si desea obtener más información sobre nuestros programas de seguridad
        o formalizar su inscripción, ingrese su IMC en el siguiente campo. 
        Un representante de la Fundación se pondrá en contacto con usted
        para brindarle asistencia y continuar con el proceso correspondiente.

        <br/>
        <br/>
        <label htmlFor="IMC">IMC:</label>
        <input type="text" id="IMC" placeholder="Escribe tu IMC"></input>
        <br/>
        <br/>

        Este programa también funciona como complemento de la Iniciativa de
        Reforma Ciudadana
      </div>
    </>
  );
}

export default Seguridad;
