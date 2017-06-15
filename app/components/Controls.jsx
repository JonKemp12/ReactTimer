// Countdown Controls page:
var React = require('react');


var Controls = React.createClass({
  // Will need to status prop to know which controls to show:
  propTypes: {
    status: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired,
  },

  // Function to handle all click status changes
  // this returns the function from the parent to handle the new status
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

// This fun is called when the component is passed new props:
  componentWillReceiveProps: function (newProps) {
    // console.log('componentWillReceiveProps:', newProps.status);
  },

  // Render
  render: function () {
    var {status} = this.props;
    var renderStartStopButton = () => {
      // If started, render stop:
      if (status === 'started') {
        // secondary is grey, call the status change on click
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (status === 'paused' || status === 'stopped') {
        // primary is blue to start it.
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      };
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  },

});

module.exports = Controls;
