import { memo } from 'react';
import { Outlet, Link } from "react-router-dom"
import Wrapper from "../components/Wrapper"

const ProfileLayoutPage = memo(() => {
    return (
        <>
            <Outlet />
            <Wrapper>
                <Link to="/fetched-profiles">Back</Link>
            </Wrapper>
        </>
    );
});

ProfileLayoutPage.displayName = 'ProfileLayoutPage';

export default ProfileLayoutPage;