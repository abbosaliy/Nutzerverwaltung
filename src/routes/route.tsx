import { Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import './route.scss';

function Sidebar() {
  return (
    <div className="user-container">
      <aside>
        <div className="user-text">Nutzerverwaltung</div>
        <nav>
          <Link to={'pages'}>
            <Button
              size="large"
              variant="contained"
            >
              Übersicht
            </Button>
          </Link>
          <Link to={'user'}>
            <Button
              size="large"
              variant="contained"
            >
              Erstellen
            </Button>
          </Link>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Sidebar;
