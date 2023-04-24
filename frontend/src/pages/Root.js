import { useEffect } from 'react';

import { Outlet, useLoaderData, useRouteLoaderData,  useSubmit } from 'react-router-dom';

import NavBar from '../components/Navbar';
import { getTokenDuration } from '../uti/auth';

function RootLayout() {
// const navigation = useNavigation();

const token = useLoaderData();
const submit = useSubmit();

useEffect(()=>{
if(!token){
  return; 
}

if(token === "EXPIRED" ){
  submit(null, { action: '/logout', method: 'post'})
}

setTimeout(()=> {
submit(null, { action: '/logout', method: 'post'})
}, 1*60*60*1000);
}, [token, submit]);

const tokenDuration = getTokenDuration();


  return (
    <>
      <NavBar />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;