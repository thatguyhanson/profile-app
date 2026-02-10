import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="not-found">
        <h2>404 - Meow</h2>
        <p>This page doesn't exist, meow.</p>
        <Link to="/" className="back-home">Back to Safety, Meow</Link>
    </div>
);
export default NotFound;