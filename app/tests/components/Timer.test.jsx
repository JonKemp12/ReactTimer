var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

// Load the component
var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  // test handleSetCountdown
  describe('handleStatusChange', () => {

    it('should set state to started and count up', (done) => {
      // Create an instance of the component
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      // Start counter
      timer.handleStatusChange('started');
      // Check starts at zero:
      expect(timer.state.totalSecs).toBe(0);

      // check it increased after 1 sec:
      setTimeout(() => {
        expect(timer.state.totalSecs).toBe(1);
        // Check it is paused:
        expect(timer.state.status).toBe('started');
        // Called to check result after async test finished:
        done();
      }, 1001);
    });

    it('should set state to paused on pause', (done) => {
      // Create an instance of the component
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      // Force a totalSecs value:
      timer.setState({totalSecs: 10});

      // Start counter
      timer.handleStatusChange('started');
      // Pause imediately
      timer.handleStatusChange('paused');

      // check it increased has not changed in 1 sec:
      setTimeout(() => {
        expect(timer.state.totalSecs).toBe(10);
        // Check it is paused:
        expect(timer.state.status).toBe('paused');
        // Called to check result after async test finished:
        done();
      }, 1001);
    });

    it('should clear timer on stopped status', (done) => {
      // Create an instance of the component
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      // Force a totalSecs value:
      timer.setState({totalSecs: 10});

      // Start counter
      timer.handleStatusChange('started');
      // Pause imediately
      timer.handleStatusChange('stopped');

      // check it increased has not changed in 1 sec:
      setTimeout(() => {
        expect(timer.state.totalSecs).toBe(0);
        // Check it is paused:
        expect(timer.state.status).toBe('stopped');
        // Called to check result after async test finished:
        done();
      }, 1001);
    });
  });
});
