import './index.css'

const TabItems = props => {
  const {eachItem, isActive, gettingTabId} = props
  const {tabId, displayText} = eachItem
  const classIs = isActive ? 'active-tab' : ''
  const returnTabId = () => {
    gettingTabId(tabId)
  }
  return (
    <li className="tab-items">
      <button
        className={`display-button ${classIs}`}
        type="button"
        onClick={returnTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
