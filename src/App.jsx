import { useState } from 'react'
import Card from './components/Card'
import Intro from './components/Introduction'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import hanson from './assets/hanson.png'
import mako from './assets/mako.jpg'
import milo from './assets/milo.jpeg'
import './App.css'

function App() {

    const profiles = [
        {id: 0, name: "Hanson", title: "Webdev", image: hanson},
        {id: 1, name: "Mako", title: "Fat Cat", image: mako},
        {id: 2,name: "Milo", title: "Hair Eater", image: milo}
    ]
    
    return (
        <>
            <Wrapper id="header">
                <Header />
            </Wrapper>
            <Wrapper id="about">
                <Intro />
            </Wrapper>
            <Wrapper id="profiles">
                {profiles.map(profile => (
                    <Card key={profile.id} name={profile.name}
                    title={profile.title} image={profile.image} />
                ))}
            </Wrapper>
        </>
    )
}
export default App;
