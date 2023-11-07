import { useState } from "react";

// Write your Color component here

//accepts props from a parent compound and renders the view
const Color = (props) => {
  return <div className={props.color}></div>;
};

const App = () => {
  //invoke the useState, and deconstruct the selected Color and setSelectedColor from returned array
  //recall that convention is [name, setName]
  const [selectorColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">
        {/* Three instances of the Color component */}
        {/* passes the name of color class through the component, then uses that class to determine the corresponding color */}
        <Color color="red" />
        <Color color="blue" />
        <Color color="green" />
      </div>
    </div>
  );
};

export default App;
