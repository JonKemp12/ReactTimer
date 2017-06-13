

// Countdown page:
var React = require('react');

// Clock component
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

var Countdown = React.createClass({
  // Set up initial state:
  getInitialState: function () {
    return {
      totalSecs: 0,
      status: 'stopped'
    };
  },

  // This function gets called just before it is shown:
  // NOTE: no refs or DOM are here yet.
  componentWillMount: function () {
    console.log('componentWillMount happened');
  },

  // This one gets called after the component is created
  componentDidMount: function () {
    console.log('componentDidMount happened');
  },

  // This function gets called when a component is switched out
  componentWillUnmount: function () {
    console.log('componentWillUnmount happened');

    // Want to clear the timer:
    // stop the timer:
    clearInterval(this.timer);
    this.timer = undefined;
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

        case 'stopped':
          // So clear the count and..
          this.setState({totalSecs: 0});
        case 'paused':
          // stop the timer:
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        default:
      };
    };
  },

// React calls this func just before the update to props or state.
// With the new values for them
  componentWillUpdate: function (nextProps, nextState) {

  },



  // Start a timer:
  startTimer: function () {
    // Timer takes a function and a delay vaue in ms
    this.timer = setInterval(() => {
      var newSecs = this.state.totalSecs -1;
      // update the state if not 0 already!
      if (newSecs >= 0) {
        this.setState({totalSecs: newSecs});
      };
      // Stop when at zero
      if (newSecs === 0) {
        this.setState({status: 'stopped'});
      }
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

  //Function to handle the status changed called from children:
  handleStatusChange: function (newStatus) {
    this.setState({
      status: newStatus
    });
  },

  // Render the clock and form:
  render: function() {
    var {totalSecs, status} = this.state;
    //Optional render control buttons:
    var renderControlArea = () => {
      if (status !== 'stopped') {
        // Running or paused so need to render the controls with the props
        // for current status and func to use to change it:
        return <Controls status={status} onStatusChange={this.handleStatusChange}/>
      } else {
        // Just render the input form:
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    }

    return (
      <div>
        <h1 className="page-title">Countdown</h1>
        <Clock totalSecs={totalSecs}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
