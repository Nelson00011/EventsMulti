import { useParams, Link } from 'react-router-dom';

function EditEvent() {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.eventId}</p>
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  );
}

export default EditEvent;