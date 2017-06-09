var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

// Load the component
var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds value', () => {
    // create a spy function:
    var spy = expect.createSpy();
    // Now render the form object in a var and inject the spy into it so we can tell if it is called:
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    // fetch the DOM node for the form in a jQuery selector::
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    // Now set the input field value:
    countdownForm.refs.totalSecs.value = '109';
    // Now simulate the submit button:
    // use jQuery to search for nested children with the 'form' tag,
    // find the first element ([0])
    TestUtils.Simulate.submit($el.find('form')[0]);

    // Now see if the spy was called with the correct input value:
    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should NOT call onSetCountdown if invalid seconds value', () => {
    // create a spy function:
    var spy = expect.createSpy();
    // Now render the form object in a var and inject the spy into it so we can tell if it is called:
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    // fetch the DOM node for the form in a jQuery selector::
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    // Now set the input field value:
    countdownForm.refs.totalSecs.value = 'a100';
    // Now simulate the submit button:
    // use jQuery to search for nested children with the 'form' tag,
    // find the first element ([0])
    TestUtils.Simulate.submit($el.find('form')[0]);

    // Now see if the spy was called with the correct input value:
    expect(spy).toNotHaveBeenCalled();  
  });
});
