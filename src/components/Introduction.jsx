import { memo } from 'react';

const Introduction = memo(() => {
    const name = "Hanson Huang";
    const year = "Senior";
    const major = "Web Dev";
    const university = "Purdue University";

    return (
        < >
            <h1>Hi, my name is {name}</h1>
            <p>I am a {year} in {major} at {university}.</p>
        </>
    );
});

Introduction.displayName = 'Introduction';

export default Introduction;