import { memo } from 'react';
import FetchedProfiles from '../components/FetchedProfiles';
import Wrapper from '../components/Wrapper';

const OtherProfiles = memo(() => (
    <Wrapper id="profiles">
        <h2>Remote Profiles</h2>
        <FetchedProfiles />
        <hr />
    </Wrapper>
));

OtherProfiles.displayName = 'OtherProfiles';

export default OtherProfiles;