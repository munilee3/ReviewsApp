import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {review: 0}

  onClickPreviousReview = () => {
    const {review} = this.state
    if (review > 0) {
      this.setState(prevState => ({review: prevState.review - 1}))
    } else {
      this.setState({review: 0})
    }
  }

  onClickNextReview = () => {
    const {reviewsList} = this.props
    const {review} = this.state
    const reviewsCount = reviewsList.length - 1
    if (review < reviewsCount) {
      this.setState(prevState => ({review: prevState.review + 1}))
    } else {
      this.setState({review: reviewsCount})
    }
  }

  render() {
    const {review} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[review]

    return (
      <div className="app-container">
        <div className="reviews-container">
          <button
            type="button"
            className="arrow-button"
            onClick={this.onClickPreviousReview}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <h1 className="review-heading">Reviews</h1>
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="companyName">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            className="arrow-button"
            onClick={this.onClickNextReview}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
