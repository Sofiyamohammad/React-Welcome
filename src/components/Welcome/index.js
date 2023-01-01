import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  subscriptionOn = () => {
    this.setState(() => ({isSubscribed: false}))
  }

  subscriptionOff = () => {
    this.setState(() => ({isSubscribed: true}))
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you!Happy Learning</p>
        {isSubscribed ? (
          <button
            type="button"
            className="subscribe-button"
            onClick={this.subscriptionOn}
          >
            Subscribe
          </button>
        ) : (
          <button
            type="button"
            className="subscribe-button"
            onClick={this.subscriptionOff}
          >
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
