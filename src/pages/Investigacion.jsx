import { Link } from 'react-router';

const programas_Investigacion = [
  {
    nombre: 'Investigacion',
    imagen: './imagenes/Investigacion.png',
    texto: 'apollo y financiamiento de proyectos de investigación'
  },
  {
    nombre: 'formacion',
    imagen: './imagenes/Formacion.png',
    texto: 'formacion y educacion cientifica y tecnologica'
  },
];

function Investigacion() {
  return (
    <>
      <section className="banner-container">
        <Link to="/nosotros">
          <img src="./imagenes/cientifico.png" alt="fondo" />
        </Link>

        <div>
            En la Fundación NewDay creemos en la ciencia como pilar fundamental
            para el crecimiento y avance de nuestra sociedad. Por ello, creamos 
            la <strong>Iniciativa de Investigación de la Fundación NewDay</strong> 
            destinada a promover la investigación científica y tecnológica en
            diversas áreas mediante el apoyo y la educación de jóvenes y adultos
            interesados en la ciencia y la tecnología.
        </div>
      </section>

      <div className="encabezado">Programas</div>

      <div>    
        Como parte de esta iniciativa, la Fundación ofrece financiamiento
        para proyectos de investigación científica y tecnológica, tanto a 
        instituciones como a individuos. <br/>
        Asimismo, dispone de programas de preparación y formación cientificas
        y tecnologicas para quienes deseen explorar estas displinas o adquirir
        conocimientos en estas áreas.

        <br/>
        <br/>

        Estos programas buscan brindar apoyo y oportunidades a los ciudadanos
        interesados en formar parte de las instituciones de investigación, al 
        mismo tiempo que fomentan una comunidad más conocedores, intelectuales
        y cultos con el objetivo de potenciar el avanse de la ciudad y la
        comunidad de NewDay.
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
        Si desea obtener más información sobre nuestros programas de investigación
        o formalizar su inscripción, ingrese su IMC en el siguiente campo. 
        Un representante de la Fundación se pondrá en contacto con usted
        para brindarle asistencia y continuar con el proceso correspondiente.
        
        <br />
        <label htmlFor="IMC">IMC:</label>
        <input type="text" id="IMC" placeholder="Escribe tu IMC"></input>
        <br />

        Este programa también funciona como complemento de la Iniciativa de
        Reforma Ciudadana
      </div>
    </>
  );
}

export default Investigacion;
