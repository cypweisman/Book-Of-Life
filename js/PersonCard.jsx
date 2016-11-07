const React = require('react')

const PersonCard = (props) => (
  <div className='show-card'>
    <img src={`public/img/${props.photo}`} className='show-card-img' />
    <div className='show-card-text'>
      <h3 className='show-card-title'>{props.name}</h3>
    </div>
  </div>
)

const { string } = React.PropTypes

PersonCard.propTypes = {
  photo: string.isRequired,
  name: string.isRequired
}

module.exports = PersonCard
