import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to new blog";
  const likes = 50;

  return (
    <div className="App">
      <Navbar /> 
      <div className="content">
        <Home></Home>
        <h1>App component: {title} </h1>
        <h2> Likes: {likes} times</h2>
      </div>
    </div>
  );
}

export default App;
