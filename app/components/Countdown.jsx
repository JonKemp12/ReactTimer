

// Countdown page:
var React = require('react');

// Clock component
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  // Set up initial state:
  getInitialState: function () {
    return {totalSecs: 0};
  },

  // form handler:
  handleCountdown: function (totalSecs) {
    // Put the value into the state var:
    this.setState({
      totalSecs: totalSecs
    });
  },

  // Render the clock and form:
  render: function() {
    var {totalSecs} = this.state;

    return (
      <div>
        <Clock totalSecs={totalSecs}/>
        <CountdownForm onSetCountdown={this.handleCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
