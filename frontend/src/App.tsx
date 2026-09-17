import { Outlet } from 'react-router-dom';
import { Fab, Toolbar } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Header, ScrollTop } from './components';

const App = () => {
  return (
    <div>
      <Header />
      {/* <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header> */}
      <main>
        <Toolbar />
        <Outlet />
      </main>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default App;
