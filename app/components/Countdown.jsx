

// Countdown page:
var React = require('react');

// Clock component
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  // Set up initial state:
  getInitialState: function () {
    return {
      totalSecs: 0,
      status: 'stopped'
    };
  },

  // React calls this function if the component was changed:
  componentDidUpdate: function (prevProps, prevState) {
    // Check to see if the status has changed:
    if (this.state.status !== prevState.status) {
      switch (this.state.status) {
        case 'started':
          // So start the timer:
          this.startTimer();
          break;
        default:
      };
    };
  },

  // Start a timer:
  startTimer: function () {
    // Timer takes a function and a delay vaue in ms
    this.timer = setInterval(() => {
      var newSecs = this.state.totalSecs -1;
      // update the state if not 0 already!
      if (newSecs >= 0) {
        this.setState({
          totalSecs: newSecs
        });
      };
    }, 1000);
  },

  // form handler:
  handleSetCountdown: function (totalSecs) {
    // Put the value into the state var:
    this.setState({
      totalSecs: totalSecs,
      status: 'started'
    });
  },

  // Render the clock and form:
  render: function() {
    var {totalSecs} = this.state;

    return (
      <div>
        <Clock totalSecs={totalSecs}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
