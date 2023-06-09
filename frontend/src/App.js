import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import EventDetailPage, { loader as eventsDetailLoader, 
  action as deleteEventAction  }  from './pages/EventDetail';
import EventsPage, { loader as eventsLoader} from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import NotFoundPage from './pages/NotFoundPage';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import AuthenticationPage, { action as authAction } from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';
import { checkAuthLoader, loader as tokenLoader } from './uti/auth';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: 'root',
    errorElement: <NotFoundPage />,
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: "auth",  element: <AuthenticationPage />, action: authAction },
      { path: "logout", action: logoutAction },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ':eventId',
            loader: eventsDetailLoader,
            id: 'event-detail',
            children:
            [{ index: true , element: <EventDetailPage />, action: deleteEventAction },
            { path: 'edit', element: <EditEventPage />, action: manipulateEventAction, loader: checkAuthLoader }]
          },
          { path: 'new', element: <NewEventPage />, action: manipulateEventAction, loader: checkAuthLoader }],
      },
      { path: '*', element: <NotFoundPage /> },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
