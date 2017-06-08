

// Countdown page:
var React = require('react');

// Clock component
const Clock = require('Clock');

var Countdown = React.createClass({
  render: function() {
    return (
      <div>
        <Clock totalSecs={219}/>
      </div>
    );
  }
});

module.exports = Countdown;
