import { memo } from 'react';

const Wrapper = memo(({ children, id }) => {
    return (
        <div className="section" id={id}>
            <div className="container">
                {children}
            </div>
        </div>
    );
});

Wrapper.displayName = 'Wrapper';

export default Wrapper;