import { Outlet, useNavigation } from 'react-router-dom';

import NavBar from '../components/Navbar';

function RootLayout() {
const navigation = useNavigation();



  return (
    <>
      <NavBar />
      <main>
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;