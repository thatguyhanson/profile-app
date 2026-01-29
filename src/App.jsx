import { useState } from 'react'
import Card from './components/Card'
import Intro from './components/Introduction'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Filters from './components/Filters'
import hanson from './assets/hanson.png'
import mako from './assets/mako.jpg'
import milo from './assets/milo.jpeg'
import huh from './assets/confusedCat.jpeg'
import daBusDriver from './assets/dabusdriver.png'
import kat from './assets/katy.jpg'
import './App.css'

function App() {

    const profiles = [
        {id: 0, name: "Hanson", title: "Web Developer", image: hanson},
        {id: 1, name: "Mako", title: "Fat Cat", image: mako},
        {id: 2, name: "Milo", title: "Hair Eater", image: milo},
        {id: 3, name: "Huh", title: "Confused Cat", image: huh},
        {id: 4, name: "Da Bus Driver", title: "Bus Driver", image: daBusDriver},
        {id : 5, name: "Dr. House", title: "Cat Owner", image: kat}
    ]

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

    return (
        <div className={styles}>
            <Wrapper id="header">
                <Header toggleStyles={toggleStyles} currentStyle={styles} />
            </Wrapper>
            <Wrapper id="about">
                <Intro />
            </Wrapper>
            <Wrapper id="profiles">
                <div className="filter">
                    <Filters titles={titles} title={title} name={name} handleChange={handleChange} handleSearch={handleSearch} handleClick={handleClear}/>
                </div>
                <div className ="grids">
                    {filteredProfiles.length > 0 ? (
                        filteredProfiles.map(profile => (
                            <Card key={profile.id} name={profile.name}
                            title={profile.title} image={profile.image} />
                        ))
                    ) : (
                        <p>No profiles found.</p>
                    )}
                </div>
            </Wrapper>
            <footer className="footer">
                <p>Any people shown in this project have given express permission for me to use their images or their images are available online.</p>
            </footer>
        </div>
    )
}

export default App;