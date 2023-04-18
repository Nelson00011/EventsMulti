import { Link, useNavigate } from 'react-router-dom';


const HomePage= () => {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/events');
      }



return (
<div>
    <h1>My Home Page</h1>
    <p>Go to <Link to="/events">the list of events</Link>.</p>
    <p>
        <button onClick={navigateHandler}>Navigate</button>
    </p>
</div>)
};

export default HomePage;