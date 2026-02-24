import { memo } from 'react';
import ProfileForm from '../components/ProfileForm';
import Wrapper from '../components/Wrapper';

const AddProfile = memo(({ onAddProfile }) => (
    <Wrapper id="add-profile">
        <h2>Add a New Profile</h2>
        <ProfileForm onAddProfile={onAddProfile} />
    </Wrapper>
));

AddProfile.displayName = 'AddProfile';

export default AddProfile;