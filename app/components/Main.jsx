const React = require('react')
const Navigation = require('Navigation')
const Timer = require('Timer')
const Countdown = require('Countdown')

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          <p>Main.jsx Render</p>
          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = Main
