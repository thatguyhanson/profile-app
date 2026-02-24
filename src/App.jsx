// React
import { useState, useContext, useCallback, useMemo, lazy, Suspense } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Wrapper from './components/Wrapper'
import Header from './components/Header'

// Context
import ModeContext from './context/ModeContext';
import ProfileContext from './context/ProfileContext';

// Pages
import Home from './pages/HomePage'

// Pages - Lazy Load
const AddProfile = lazy(() => import('./pages/AddProfile'));
const OtherProfiles = lazy(() => import('./pages/OtherProfiles'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProfileDetailPage = lazy(() => import('./pages/ProfileDetailPage'));
const ProfileLayoutPage = lazy(() => import('./pages/ProfileLayoutPage'));

// Loading fallback component
const LoadingFallback = () => (
    <Wrapper>
        <p>Loading...</p>
    </Wrapper>
);

// Styles
import './App.css'

function App() {
    
    const { profiles } = useContext(ProfileContext);
    
    const titles = useMemo(() => 
        [...new Set(profiles.map(profile => profile.title))], 
        [profiles]
    );

    const [title, setTitle] = useState("");
    const [name, setName] = useState("");

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

    const filteredProfiles = useMemo(() => 
        profiles.filter(profile =>
            (profile.title === title || !title) && (profile.name.toLowerCase().includes(name.toLowerCase()) || !name)
        ),
        [profiles, title, name]
    );

    const {styles} = useContext(ModeContext);

    return (
        <Router>
            <div className={styles}>
                <Wrapper id="header">
                    <Header/>
                </Wrapper>

                <Suspense fallback={<LoadingFallback />}>
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
                </Suspense>

                <footer className="footer">
                    <p>Permissions granted for all images used.</p>
                </footer>
            </div>
        </Router>
    )
}

export default App;