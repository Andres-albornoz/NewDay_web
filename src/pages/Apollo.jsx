import { Link } from 'react-router';

const programas_apollo = [
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

function Apollo() {
  return (
    <>
      <section className="banner-container">
        <Link to="/nosotros">
          <img src="./imagenes/Seguridad.png" alt="fondo" />
        </Link>

        <div>
            En la Fundación NewDay sabemos de las dificultades y peligros que
            pueden llegar a tener muchos de nuestros ciudadanos, lo ineficiente
            y peligroso que puede llegar a ser los medios tradicionales de castigo
            y encarselamiento, como la carcel o reformatorios <br/>
            por esto hemos creado la Iniciativa de Reforma y apollo Ciudadano de la
            Fundación NewDay, para todos aquellos ciudadanos que se encuentren con
            dificultades <br/>
            tambien aporta opciones y alternativas a los ciudadanos que se encuentren
            condenados a reformatorios o carceles, para que puedan tener una segunda oportunidad
            y puedan reinsertarse a la sociedad de manera productiva y positiva.
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
        {programas_apollo.map((programas_apollo) => (
          <div
            key={programas_apollo.nombre}
            className="servicio-card"
          >
            <div className="imagenes_cuadradas">
              <img src={programas_apollo.imagen} alt={programas_apollo.nombre} />
            </div>

            <span>{programas_apollo.nombre}</span>
            <span>{programas_apollo.texto}</span>
          </div>
        ))}
      </div>

      <section className="banner-container"></section>

      <div className="encabezado">Inscripción</div>

      <div>
        Si desea obtener más información sobre nuestros programas de apollo
        y reforma o formalizar su inscripción, ingrese su IMC en el siguiente 
        campo. Un representante de la Fundación se pondrá en contacto con usted
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

export default Apollo;
