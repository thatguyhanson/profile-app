import Wrapper from '../components/Wrapper';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProfileDetailPage() {

    const { id } = useParams();
    const [profile, setProfile] = useState({ name: "", title: "", email: "", bio: "", image: null });

    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-id.php?id=${id}`)
            .then(res => res.json())
            .then(res => setProfile(res))
    }, [id])

    return (
        profile ? (
            <Wrapper>
                <h1>{profile.name}</h1>
                <img src={profile.image_url} alt={profile.name} />
                <p>{profile.email}</p>
                <p>{profile.title}</p>
                <p>{profile.bio}</p>
            </Wrapper>) : 
            ( <Wrapper>
                <p>Profile does not exist.</p>
            </Wrapper> )
    );
};