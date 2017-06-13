// Countdown Controls page:
var React = require('react');


var Controls = React.createClass({
  // Will need to status prop to know which controls to show:
  propTypes: {
    status: React.PropTypes.string.isRequired
  },

  // Render
  render: function () {
    var {status} = this.props;
    var renderStartStopButton = () => {
      // If started, render stop:
      if (status === 'started') {
        // secondary is grey
        return <button className="button secondary">Pause</button>
      } else if (status === 'paused') {
        // primary is blue to start it.
        return <button className="button primary">Start</button>
      };
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  },

});

module.exports = Controls;
