import { useState } from "react";

const Home = () => {
    // let name = 'unknown';
    const [name, setName] = useState('known');
    const [blogs, setBlogs] = useState([
        { title: 'Breaking news' },
        { title: 'what a surprising news!' },
        { title: 'Web dev top tips' }
    ]);
    const handleClick = () => {
        setName('William');

    }

    return (
        <div className="home">

            <h2>Home page</h2>
            <p>{name}</p>
            <button onClick={handleClick}>click here</button>
        </div>
    )
}

export default Home;