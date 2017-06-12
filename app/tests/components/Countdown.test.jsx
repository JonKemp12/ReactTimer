var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

// Load the component
var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  // test handleSetCountdown
  describe('handleSetCountdown', () => {
    // To run async tests with mocha, need to use done, when finished:
    it('should set state to started and countdown', (done) => {
      // Create an instance of the componentdocountdown.state.totalSecs).toBe(10);
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      // call the function with 10 secs:
      countdown.handleSetCountdown(10);

      // count state should be 10 and it has started:
      expect(countdown.state.totalSecs).toBe(10);
      expect(countdown.state.status).toBe('started');

      // check it gets decremented after 1 sec:
      setTimeout(() => {
        expect(countdown.state.totalSecs).toBe(9);
        // Called to check result after async test finished:
        done();
      }, 1001);
    });

    it('should countdown to zero after time expires', (done) => {
      // Create an instance of the componentdocountdown.state.totalSecs).toBe(10);
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      // call the function with 1 secs:
      countdown.handleSetCountdown(1);

      // check it gets decremented to 0 after 3 sec:
      setTimeout(() => {
        expect(countdown.state.totalSecs).toBe(0);
        // Called to check result after async test finished:
        done();
      }, 3001);
    });
  });
});
