var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

// Load the component
var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSecs={62}/>);
      // use jQuery:
      // Set the var to the clock DOM:
      var $el = $(ReactDOM.findDOMNode(clock));
      // Then query the result by class
      var actual = $el.find('.clock-text').text();
      // And assert it is correct:
      expect(actual).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      // render the component into a variable:
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var totalSecs = 615;
      var expected = '10:15';
      // See what we get:
      var actual = clock.formatSeconds(totalSecs);
      expect(actual).toBe(expected);
    });
    it('should format seconds less than 10', () => {
      // render the component into a variable:
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var totalSecs = 61;
      var expected = '01:01';
      // See what we get:
      var actual = clock.formatSeconds(totalSecs);
      expect(actual).toBe(expected);
    });
  })
});
