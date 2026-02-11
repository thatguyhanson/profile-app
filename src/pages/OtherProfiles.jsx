import FetchedProfiles from '../components/FetchedProfiles';
import Card from '../components/Card';
import Wrapper from '../components/Wrapper';

const OtherProfiles = ({ profiles }) => (
    <Wrapper id="profiles">
        <h2>Remote Profiles</h2>
        <FetchedProfiles />
        <hr />
    </Wrapper>
);

export default OtherProfiles;