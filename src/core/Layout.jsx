import { NavLink, Link, Outlet } from 'react-router';

function Layout() {
  return (
    <div className="site">
      <header>
        <h1>
          <Link to="/">fundacion de new day</Link>
        </h1>
        <nav>
          |
          <NavLink to="/">home</NavLink> |
          <NavLink to="/Seguridad">Seguridad</NavLink> |
          <NavLink to="/Investigacion">Investigacion</NavLink> |
          <NavLink to="/Apollo">Apollo</NavLink> |
          <input
            type="text"
            id="IMC-consulta"
            aria-label="Consultar IMC"
            placeholder="Escribe tu IMC"
          />
          |
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2005 alcaldia y fundacion de NewDay. todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Layout;
