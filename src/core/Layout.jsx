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
          <NavLink to="/seguridad">seguridad</NavLink> |
          <NavLink to="/investigacion">investigacion</NavLink> |
          <NavLink to="/reformacion">reformacion</NavLink> |
          <input type="text" id="NMC" placeholder="Escribe tu NMC"></input>
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
