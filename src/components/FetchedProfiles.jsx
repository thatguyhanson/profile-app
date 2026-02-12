import { useState, useEffect } from "react";
import Filters from './Filters';
import Card from "./Card";
import { Link } from 'react-router-dom'

export default function FetchedProfiles() {

    const [titles, setTitles] = useState([]);
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [profiles, setProfiles] = useState([]);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSearch = (event) => {
        setName(event.target.value);
    }

    const handleClear = () => {
        setTitle("");
        setName("");

        document.getElementById('title').value = '';
        document.getElementById('search').value = '';
    }

    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/%7Ezong6/profile-app/get-titles.php`)
            .then(res => res.json())
            .then(res => setTitles(res.titles));
    }, [])

    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${title}&name=${name}&limit=10`)
            .then(res => res.json())
            .then(res => setProfiles(res.profiles));
    }, [title, name])

    return (
        <>
            <Filters titles={titles} title={title} name={name} handleChange={handleChange} handleSearch={handleSearch} handleClick={handleClear} />
            <div className="grids">
                {profiles.length > 0 ? (
                    profiles.map(profile => (
                        <Link key={profile.id} to={`/fetched-profiles/profile/${profile.id}`}>
                        <Card key={profile.id} name={profile.name}
                            title={profile.title} image={profile.image_url} />
                        </Link>
                    ))
                ) : (
                    <p>No profiles found.</p>
                )}
            </div>
        </>
    );
}