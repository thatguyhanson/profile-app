import ProfileForm from '../components/ProfileForm';
import Wrapper from '../components/Wrapper';

const AddProfile = ({ onAddProfile }) => (
    <Wrapper id="add-profile">
        <h2>Add a New Profile</h2>
        <ProfileForm onAddProfile={onAddProfile} />
    </Wrapper>
);

export default AddProfile;