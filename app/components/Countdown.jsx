const React = require('react')
const CountdownForm = require('CountdownForm')
const Clock = require('Clock')
const Controls = require('Controls')


const Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
      if (this.state.countdownStatus !== prevState.countdownStatus) {
        switch (this.state.countdownStatus) {
          case 'started':
            this.startTimer()
            break;
          case 'stopped':
            this.setState({count: 0})
          case 'paused':
            clearInterval(this.timer)
            this.timer = undefined
            break;
        }
      }
    },
  // componentWillUpdate: function (nextProps, nextState) {
  //
  // },
  // componentWillMount: function () {
  //   console.log('componentWillMount here');
  // },
  // componentDidMount: function () {
  //   console.log('componentDidMount here');
  // },
  componentWillUnmount: function () {
    clearInterval(this.timer)
    this.timer = undefined
  },

  startTimer: function () {
    this.timer = setInterval(() => {
      const newCount = this.state.count -1
      this.setState({
        count: newCount >= 0 ? newCount : 0
      })
      if (newCount === 0)
       this.setState({countdownStatus: 'stopped'})
    }, 1000)
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    })
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus})
  },
  render: function () {
    const {count, countdownStatus} = this.state;
    const renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    }
    return (
      <div>
        <h1 className='page-title'>Countdown</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    )
  }
})

module.exports = Countdown
