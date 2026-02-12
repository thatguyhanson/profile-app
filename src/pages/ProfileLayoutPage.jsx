import { Outlet, Link } from "react-router-dom"
import Wrapper from "../components/Wrapper"

export default function ProfileLayoutPage() {

    return (
        <>
            <Outlet />
            <Wrapper>
                <Link to="/fetched-profiles">Back</Link>
            </Wrapper>
        </>
    );
}