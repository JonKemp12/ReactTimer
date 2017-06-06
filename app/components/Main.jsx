// Main container component

var React = require('react');

// Requires Nav bar component
var Nav = require('Nav');

// Instead create stateless functional component
var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        <div>
          <p>Main.jsx rendered.</p>
            {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
