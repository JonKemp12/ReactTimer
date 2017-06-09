// For webpack - import the React libs:
var React = require('react');

// Create a sub-component for our form:
// User interaction component
// Takes parent handler prop
var CountdownForm = React.createClass({
  // Submit func:
  onFormSubmit: function (e) {
    e.preventDefault();

    var strSecs = this.refs.totalSecs.value;

    // Clear form and add to updates var
    // Check it's just a number
    if (strSecs.match(/^[0-9]*$/)){
      this.refs.totalSecs.value = '';
      // Call the parent function;
      this.props.onSetCountdown(parseInt(strSecs,10));
    }
  },
  // Render func:
  render: function () {
    return (
      <div>
      <form ref="form" onSubmit={this.onFormSubmit} className>
        <input type="text" ref="totalSecs" placeholder="Enter seconds"/>
        <button className="button expanded hollow" >Start Countdown</button>
      </form>
    </div>
    )
  }
});

// Export the object:
module.exports = CountdownForm;
