// Nav component
var React = require('react');

// require the React Router component link using ES6 de-structuring
var {Link, IndexLink} = require('react-router');

// The Navigation bar at the top:
// Can use functional component
var Nav = () => {
    return (
      // Create a top bar with menu on left and search on right
      <div className="top-bar">
        <div className="top-bar-left">
          {/* This is the menu as a list:*/}
          <ul className="menu">
            <li className="menu-text">Jon's React Timer App</li>
            <li>
              {/*Use IndexLink when linking to root component to avoid always
                matching and, therefore, keeping wrong style.
                That is, it stops multiple pages being marked as 'active' :*/}
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/"activeClassName="active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            {/* Add anchor with target to blank for new tab:*/}
            <li className="menu-text">Created by <a href="https://github.com/JonKemp12" target="_blank">Jon</a></li>
        </ul>
        </div>
      </div>
    );
};


module.exports = Nav;
