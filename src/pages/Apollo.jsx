import { Link } from 'react-router';
import { imagen } from '../core/imagenes.js';

const programas_apoyo = [
  {
    nombre: 'acompañamiento',
    imagen: imagen('acompañamiento.png'),
    texto: 'Acompañamiento y apoyo grupal'
  },
  {
    nombre: 'capacitación',
    imagen: imagen('capacitación.png'),
    texto: 'Formación y preparación laboral'
  },
];

function Apollo() {
  return (
    <>
      <section className="banner-container">
        <Link to="/nosotros">
          <img src={imagen('apoyo .png')} alt="fondo" />
        </Link>

        <div>
            En la Fundación NewDay sabemos de las dificultades y peligros que
            pueden llegar a tener muchos de nuestros ciudadanos, lo ineficiente
            y peligroso que puede llegar a ser los medios tradicionales de castigo
            y encarselamiento, como la carcel o reformatorios <br/>
            por esto hemos creado la Iniciativa de Reforma y apoyo  Ciudadano de la
            Fundación NewDay, para todos aquellos ciudadanos que se encuentren con
            dificultades <br/>
            tambien aporta opciones y alternativas a los ciudadanos que se encuentren
            condenados a reformatorios o carceles, para que puedan tener una segunda oportunidad
            y puedan reinsertarse a la sociedad de manera productiva y positiva.
        </div>
      </section>

      <div className="encabezado">Programas</div>

      <div>    
        Como parte de esta iniciativa, la Fundación ofrece programas de asistencia
        y acompañamiento para aquellos ciudadanos que se encuentren atravesando 
        dificultades personales, sociales o económicas. Estos programas buscan 
        proporcionar orientación, recursos y oportunidades que les permitan superar
        sus circunstancias y mejorar su calidad de vida.

        <br/>
        <br/>

        Asimismo, dispone de programas de rehabilitación, formación y preparación
        laboral destinados a ciudadanos condenados a penas de encarcelamiento o 
        internados en reformatorios, ofreciéndoles alternativas para cumplir sus 
        condenas mediante actividades formativas y de contribución a la comunidad, 
        cuando sea posible.
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
