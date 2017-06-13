// Clock component
var React = require('react');

var Clock = React.createClass({
  // Set up props:
  getDefaultProps: function () {
    totalSecs: 0
  },
  propTypes: {
    totalSecs: React.PropTypes.number
  },

  // Func to return seconds value as min:sec string:
  formatSeconds: function (totalSecs) {
    var secs = totalSecs % 60;
    var mins = Math.floor(totalSecs / 60);

    // add leading zeros:
    if (secs < 10) {
      secs = '0'+secs;
    }
    if (mins < 10) {
      mins = '0'+mins;
    }
    return mins + ':' + secs;
  },

  // Render function:
  render: function () {
    var {totalSecs} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSecs)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
