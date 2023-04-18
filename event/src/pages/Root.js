import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar';
import classes from './Root.module.css';


function RootLayout() {
    return (
      <div>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    );
  }
  
  export default RootLayout;