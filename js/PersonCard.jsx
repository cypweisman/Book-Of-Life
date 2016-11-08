const React = require('react')

const PersonCard = (props) => (
  <div className='person-card'>
    <img src={`public/img/posters/${props.photo}`} className='person-card-img' />
    <div className='person-card-text'>
      <h3 className='person-card-title'>{props.name}</h3>
    </div>
  </div>
)

const { string } = React.PropTypes

PersonCard.propTypes = {
  photo: string.isRequired,
  name: string.isRequired
}

module.exports = PersonCard