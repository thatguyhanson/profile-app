import { useState, useEffect, useCallback, memo } from "react";
import Filters from './Filters';
import FetchedProfilesGrid from './FetchedProfilesGrid';

const FetchedProfiles = memo(() => {
    const [titles, setTitles] = useState([]);
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [profiles, setProfiles] = useState([]);

    const handleChange = useCallback((event) => {
        setTitle(event.target.value);
    }, []);

    const handleSearch = useCallback((event) => {
        setName(event.target.value);
    }, []);

    const handleClear = useCallback(() => {
        setTitle("");
        setName("");

        document.getElementById('title').value = '';
        document.getElementById('search').value = '';
    }, []);

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
            <FetchedProfilesGrid profiles={profiles} />
        </>
    );
});

FetchedProfiles.displayName = 'FetchedProfiles';

export default FetchedProfiles;
