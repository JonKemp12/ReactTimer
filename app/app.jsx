// For webpack - import the React libs:
var React = require('react');
var ReactDOM = require('react-dom');
// Add the router components:
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Declare the object from its source:
// var Greeter = require('boilerplate');

// Declare the Main component
var Main = require('Main');
// Declare app components here:
var Timer = require('Timer');
const Countdown = require('Countdown');

// Load foundation by using
// style to inject the css from the foundation.min.css
// Removed as now using scss foundation-sites
// require('style!css!foundation-sites/dist/foundation.min.css');
// And do it by calling the function:
$(document).foundation();

// Load application (sass) CSS (alias to app/styles/app.scss?):
require('style!css!sass!applicationStyles')

// render a DOM component, passing the DOM and rhe element
// which is this app.

ReactDOM.render(
//  render router components:
// Route renders the Main component and the Navigation from the root (/)
// IndexRoute renders the children
// The Main will always be rendered as it is off root path '/'
// About will be rendered if the route path contains 'about'
// Or: if URL=/about will render About
//  else URL=/ will render Weather

// Router history causes the URL to have /#/[link]
  <Router history={hashHistory}>
    {/* Main is always rendered as URL starts with root path '/' */}
    <Route path="/" component={Main}>
    {/* Add routes to app components here: */}
    <Route path="countdown" component={Countdown}/>
    <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
