import './index.css'

const MatchItem = props => {
  const {eachItem, gettingScore} = props
  const {id, thumbnailUrl} = eachItem
  const imageClicked = () => {
    gettingScore(id)
  }
  return (
    <li className="thumbnail-item">
      <buttton
        className="thumbnail-button"
        type="button"
        onClick={imageClicked}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </buttton>
    </li>
  )
}

export default MatchItem
