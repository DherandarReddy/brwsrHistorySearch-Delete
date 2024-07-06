import './index.css'

const Cmp = props => {
  const {Details, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = Details
  const deleteItem = () => {
    deleteUser(id)
  }
  return (
    <li key={id}>
      <div className="InnerContainer">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
        <button type="button" data-testid="delete" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default Cmp
