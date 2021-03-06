const React = require('react')
const { Link } = require('react-router')


const PersonCard = (props) => (
  <div>
    <Link to={`/details/${props.person_id}`} >
      <div className='person-card'>
          <img src={`public/img/posters/${props.photo}`} className='person-card-img' />
        <div>
          <h3 className='person-card-title'>{props.name}</h3>
        </div>
      </div>
    </Link>
  </div>

)

const { string } = React.PropTypes

PersonCard.propTypes = {
  photo: string.isRequired,
  name: string.isRequired
}

module.exports = PersonCard
