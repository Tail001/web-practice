const Home = () => {
    const handleClick = () => {
        console.log("hello this is home");
    } 

    return (
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>click here</button>
        </div>
    )
}

export default Home;