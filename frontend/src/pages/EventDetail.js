import { useRouteLoaderData, json, redirect  } from 'react-router-dom';

import EventItem from '../components/EventItem';

function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');


  return (
    <div>
      <EventItem event={ data.event }/>
    </div>
  );
}

export default EventDetailPage;

export async function loader({ params , request }){
  const id = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${id}` , 
  { method: request.method,
  });

  
  
  if (!response.ok) {
     throw json({message:"Could no fetch details for selected event"}, {
      status: 500
    });
  } else {
    return response;
  }

}

export async function action({ params, request }){
  const eventId = params.eventId;
  //Deleting Action
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method, 
  });

  if(!response.ok){
    throw json({ message: "Could not delete event." }, 
    { 
      status: 500
    });
  }
  return (redirect('/events'));
}