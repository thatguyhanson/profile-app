import { memo } from 'react';
import { Link } from 'react-router-dom';

const NotFound = memo(() => (
    <div className="not-found">
        <h2>404 - Meow</h2>
        <p>This page doesn't exist, meow.</p>
        <Link to="/" className="back-home">Back to Safety, Meow</Link>
    </div>
));

NotFound.displayName = 'NotFound';

export default NotFound;