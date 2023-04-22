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
import AuthenticationPage from './pages/Authentication';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/auth",  element: <AuthenticationPage /> },
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
            { path: 'edit', element: <EditEventPage />, action: manipulateEventAction }]
          },
          { path: 'new', element: <NewEventPage />, action: manipulateEventAction }],
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
