import { memo } from 'react';
import Wrapper from '../components/Wrapper';

const About = memo(() => {
    return (
        <Wrapper id="about">
            <h2>About</h2>
            <p>Welcome to the my profile app.</p>
        </Wrapper>
    );
});

About.displayName = 'About';

export default About;