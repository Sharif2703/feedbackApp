// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedBackStatus: true}

  showLove = () => this.setState({feedBackStatus: false})

  render() {
    const {feedBackStatus} = this.state
    const {resources} = this.props

    const enmote = eachImage => (
      <li className="each-item" key={eachImage.id}>
        <button type="button" onClick={this.showLove}>
          <img src={eachImage.imageUrl} alt={eachImage.name} />
          <p>{eachImage.name}</p>
        </button>
      </li>
    )

    return (
      <div className="feedback-bg">
        {feedBackStatus ? (
          <div className="feedback-card">
            <h1>How satisfied are you with our customer support performance</h1>
            <ul className="items-con">
              {resources.emojis.map(eachImage => enmote(eachImage))}
            </ul>
          </div>
        ) : (
          <div className="feedback-card">
            <img src={resources.loveEmojiUrl} alt="love emoji" />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
