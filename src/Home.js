import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // let name = 'unknown';
    const [name, setName] = useState('known');
    const [blogs, setBlogs] = useState([
        { title: 'Breaking news', id: 0, content: 'pesudo content' },
        { title: 'what a surprising news!', id: 1, content: 'pesudo content' },
        { title: 'Web dev top tips', id: 2, content: 'NULL' },
        { title: 'next js 14 release', id: 3, content: 'Null' }
    ]);
    const handleClick = () => {
        setName('William');

    }

    return (
        <div className="home">
            <BlogList blogs={blogs} />
            <p>{name}</p>
            <button onClick={handleClick}>click here</button>
        </div>
    )
}

export default Home;