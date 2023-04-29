import { useParams, Link } from 'react-router-dom';

function EventsDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>Event ID: {params.eventId}</p>
      {/* <p><Link to=".." relative="path">Back</Link></p> */}
    </>
  );
}

export default EventsDetailPage;