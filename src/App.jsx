import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Wrapper from './components/Wrapper'
import Header from './components/Header'

import Home from './pages/HomePage'
import AddProfile from './pages/AddProfile';
import OtherProfiles from './pages/OtherProfiles';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ProfileDetailPage from './pages/ProfileDetailPage'
import ProfileLayoutPage from './pages/ProfileLayoutPage'

// Assets
import hanson from './assets/hanson.png'
import mako from './assets/mako.jpg'
import milo from './assets/milo.jpeg'
import huh from './assets/confusedCat.jpeg'
import daBusDriver from './assets/dabusdriver.png'
import kat from './assets/katy.jpg'
import './App.css'

function App() {

    const [profiles, setProfiles] = useState([
        { id: 0, name: "Hanson", title: "Web Developer", email: "huan1826@purdue.edu", bio: "", image: hanson },
        { id: 1, name: "Mako", title: "Fat Cat", email: "mako@meow.com", bio: "meow.", image: mako },
        { id: 2, name: "Milo", title: "Hair Eater", email: "milo@meow.com", bio: "meow", image: milo },
        { id: 3, name: "Huh", title: "Confused Cat", email: "", bio: "", image: huh },
        { id: 4, name: "Da Bus Driver", title: "Bus Driver", email: "", bio: "", image: daBusDriver },
        { id: 5, name: "Dr. House", title: "Cat Owner", email: "", bio: "", image: kat }
    ]);

    const titles = [...new Set(profiles.map(profile => profile.title))];

    const [title, setTitle] = useState("");
    const [name, setName] = useState("");

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

    const filteredProfiles = profiles.filter(profile =>
        (profile.title === title || !title) && (profile.name.toLowerCase().includes(name.toLowerCase()) || !name)
    );

    const [styles, setStyles] = useState("dark-mode");

    const toggleStyles = () => {
        setStyles(styles === "dark-mode" ? "light-mode" : "dark-mode");
    }

    const updateProfiles = (profile) => {
        setProfiles(pre => ([...pre, profile]))
    }

    return (
        <Router>
            <div className={styles}>
                <Wrapper id="header">
                    <Header toggleStyles={toggleStyles} currentStyle={styles} />
                </Wrapper>

                <Routes>
                    <Route path="/" element={<Home profiles={profiles} />} />
                    <Route path="/fetched-profiles" element={<OtherProfiles profiles={profiles} />} />
                    <Route path="/fetched-profiles/profile" element={<ProfileLayoutPage />}>
                        <Route path=":id" element={<ProfileDetailPage />} />
                    </Route>
                    <Route path="/add-profile" element={<AddProfile onAddProfile={updateProfiles} />} />
                    <Route path="/about" element={<About />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>

                <footer className="footer">
                    <p>Permissions granted for all images used.</p>
                </footer>
            </div>
        </Router>
    )
}

export default App;