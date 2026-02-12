import Introduction from '../components/Introduction';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';

const Home = ( {profiles} ) => {
    return (
        <Wrapper id="home">
            <Introduction />
            <div className="grids">
            {profiles.map(profile => (
                <Card key={profile.id} {...profile} />
            ))}
            </div>
        </Wrapper>
    );
}

export default Home;