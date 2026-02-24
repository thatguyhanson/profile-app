import { memo } from 'react';
import Introduction from '../components/Introduction';
import Wrapper from '../components/Wrapper';
import ProfileGrid from '../components/ProfileGrid';

const Home = memo(({ profiles }) => {
    return (
        <Wrapper id="home">
            <Introduction />
            <ProfileGrid profiles={profiles} />
        </Wrapper>
    );
});

Home.displayName = 'Home';

export default Home;