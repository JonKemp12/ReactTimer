var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

// Load the component
var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render Pause when started', () => {
      // Create an instance of the component with status started;
      var controls = TestUtils.renderIntoDocument(<Controls status="started"/>);
      // fetch the DOM node for the form in a jQuery selector::
      var $el = $(ReactDOM.findDOMNode(controls));
      // check the button if found.
      // Use jQuery to search the DOM for a button that contains "Pause"
      var $pauseButton = $el.find('button:contains(Pause)');
      // and check there is exactly 1 of them
      expect($pauseButton.length).toBe(1);
    });

    it('should render Start when paused', () => {
      // Create an instance of the component with status paused;
      var controls = TestUtils.renderIntoDocument(<Controls status="paused"/>);
      // fetch the DOM node for the form in a jQuery selector::
      var $el = $(ReactDOM.findDOMNode(controls));
      // check the button if found.
      // Use jQuery to search the DOM for a button that contains "Start"
      var $startButton = $el.find('button:contains(Start)');
      // and check there is exactly 1 of them
      expect($startButton.length).toBe(1);
    });
  });
});
