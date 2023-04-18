import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';

import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import EventsPage from './pages/EventsPage';
import EventsDetailPage from './pages/EventsDetails';
import EditEvent from './pages/EditEvent';
import NewEvent from './pages/NewEvent';

import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';

//Router main creation here
const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />,
    children: [
  { index: true, element: <HomePage /> },
  { path: 'events', element: <EventsRootLayout />, children: [
    { path: '', element: <EventsPage /> },
    { path: ':eventId', element: <EventsDetailPage /> },
    { path: ':eventId/edit', element: <EditEvent /> },
    { path: 'new', element: <NewEvent /> },
    { path: '*', element: <NotFoundPage /> },
  ] },
  
  ],}
]);

function App() {
  return (<RouterProvider router={router} />)
};

export default App;
