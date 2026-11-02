import { Link } from 'react-router'

function NotFound() {
  return (
    <>
      <div className="encabezado">404</div>
      <div className="box-text">La página que buscas no existe.</div>
      <div className="boton">
        <Link to="/">volver al inicio</Link>
      </div>
    </>
  )
}

export default NotFound
