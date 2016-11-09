const React = require('react')
const { Link } = require('react-router')

const PersonCard = (props) => (
  <Link to={`/details/${props.person_id}`} className='person-card'>
    <div>
      <img src={`public/img/posters/${props.photo}`} className='person-card-img' />
      <div className='person-card-text'>
        <h3 className='person-card-title'>{props.name}</h3>
      </div>
    </div>
  </Link>

)

const { string } = React.PropTypes

PersonCard.propTypes = {
  photo: string.isRequired,
  name: string.isRequired
}

module.exports = PersonCard
