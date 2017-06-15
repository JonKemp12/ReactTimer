

// Timer page:
var React = require('react');

// Clock component
const Clock = require('Clock');
const Controls = require('Controls');


var Timer = React.createClass({
  // Set up initial state:
  getInitialState: function () {
    return {
      totalSecs: 0,
      status: 'stopped'
    };
  },

  // This function gets called when a component is switched out
  componentWillUnmount: function () {
    // console.log('componentWillUnmount happened');

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

    // Start a timer:
    startTimer: function () {
      // Timer takes a function and a delay value in ms
      this.timer = setInterval(() => {
        var newSecs = this.state.totalSecs +1;
        this.setState({totalSecs: newSecs});
      }, 1000);
    },

    //Function to handle the status changed called from children:
    handleStatusChange: function (newStatus) {
      this.setState({
        status: newStatus
      });
    },

  render: function() {
    var {status, totalSecs} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSecs={totalSecs}/>
        <Controls status={status} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
