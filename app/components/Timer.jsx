const React = require('react')
const Clock = require('Clock')
const Controls = require('Controls')

const Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },
  handleStatusChange: function (newTimerStatus) {
    console.log(newTimerStatus);
    this.setState({timerStatus: newTimerStatus})

  },
  handleStart: function () {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  },
  componentWillUpdate: function () {
    clearInterval(this.timer)
  },
    componentDidUpdate: function (prevState, prevProps) {
      if (this.state.timerStatus !== prevState.timerStatus) {
        switch (this.state.timerStatus) {
          case 'started':
            this.handleStart()
            break
          case 'stopped':
            this.setState({count:0})
          case 'paused':
            clearInterval(this.timer)
            this.timer = undefined
            break
      }
    }
  },
    render: function () {
      const {count, timerStatus} = this.state;

      return (
        <div>
          <h1 className='page-title'>Timer</h1>
          <Clock totalSeconds={count}/>
          <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
        </div>
      )
    }
  })

module.exports = Timer
