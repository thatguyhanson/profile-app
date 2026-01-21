import { useState } from 'react'
import Card from './components/Card'
import Card2 from './components/Card2'
import Intro from './components/Introduction'
import Header from './components/Header'
import './App.css'

function App() {

    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <Intro />
            <Card />
            <Card2 />
        </>
    )
}
export default App;
