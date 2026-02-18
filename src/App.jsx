// React
import { useState, useContext } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Wrapper from './components/Wrapper'
import Header from './components/Header'

// Context
import ModeContext from './context/ModeContext';
import ProfileContext from './context/ProfileContext';

// Pages
import Home from './pages/HomePage'
import AddProfile from './pages/AddProfile';
import OtherProfiles from './pages/OtherProfiles';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ProfileDetailPage from './pages/ProfileDetailPage'
import ProfileLayoutPage from './pages/ProfileLayoutPage'

// Styles
import './App.css'

function App() {
    
    const { profiles } = useContext(ProfileContext);
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

    const {styles} = useContext(ModeContext);

    return (
        <Router>
            <div className={styles}>
                <Wrapper id="header">
                    <Header/>
                </Wrapper>

                <Routes>
                    <Route path="/" element={<Home profiles={filteredProfiles} />} />
                    <Route path="/fetched-profiles" element={<OtherProfiles />} />
                    <Route path="/fetched-profiles/profile" element={<ProfileLayoutPage />}>
                        <Route path=":id" element={<ProfileDetailPage />} />
                    </Route>
                    <Route path="/add-profile" element={<AddProfile />} />
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