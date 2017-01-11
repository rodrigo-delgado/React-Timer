//Load Files Dependecies

const React = require('react')
const ReactDOM = require('react-dom')
const expect = require('expect')
const $ = require('jQuery')
const TestUtils = require('react-addons-test-utils')
//Load component that we need to test
const Clock = require('Clock')

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist()
  })

  // describe('render', () => {
  //   it('should render clock to output', () => {
  //
  //     var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
  //     var $el = $(ReactDOM.findDOMNode(clock));
  //     var actualText = $el.find('.clock-text').text();
  //
  //     expect(actualText).toBe('01:02');
  //   })
  // })
  describe('formatSeconds', () => {
    it('should format seconds', () => {
      //we need to render the component inside the test
      const clock = TestUtils.renderIntoDocument(<Clock/>)
      const seconds = 615
      const expected = '10:15'
      const actual = clock.formatSeconds(seconds)

      expect(actual).toBe(expected)
    })
  })
  describe('formatSeconds', () => {
    it('should format seconds when min/sec are less than 10', () => {
      //we need to render the component inside the test
      const clock = TestUtils.renderIntoDocument(<Clock/>)
      const seconds = 61
      const expected = '01:01'
      const actual = clock.formatSeconds(seconds)

      expect(actual).toBe(expected)
    })
  })
})
