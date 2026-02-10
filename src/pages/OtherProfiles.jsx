import FetchedProfiles from '../components/FetchedProfiles';
import Card from '../components/Card';
import Wrapper from '../components/Wrapper';

const OtherProfiles = ({ profiles }) => (
    <Wrapper id="profiles">
        <h2>Remote Profiles</h2>
        <FetchedProfiles />
        <hr />
        <h2>Local Profiles</h2>
        <div className="grids">
            {profiles.map(profile => (
                <Card key={profile.id} {...profile} />
            ))}
        </div>
    </Wrapper>
);

export default OtherProfiles;