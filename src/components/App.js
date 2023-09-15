import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}
import React from "react";
import NavBar from './NavBar'; // Import the NavBar component
import Home from './Home'; // Import the Home component
import About from './About'; // Import the About component

function App() {
  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      <Home /> {/* Include the Home component */}
      <About /> {/* Include the About component */}
    </div>
  );
}

export default App;



function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      {/* add your <About> component here */}
    </div>
  );
}

export default App;
