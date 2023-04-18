import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  {id: 'ei',
    title: "Event 1"},
    { id: 'e2',
    title: "Event 2"},
    { id: 'e3',
    title: "Event 3"}
];

const EventsPage = () => {
return (
    <div>
    <h1>The Events Page</h1>
    <ul>
      {DUMMY_EVENTS.map((c,i)=> (<li key={i}><Link to={c.id}>{c.title}</Link></li>))}
    </ul>
    
    </div>
)
};

export default EventsPage;