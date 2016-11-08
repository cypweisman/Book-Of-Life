const React = require('react')

class Details extends React.Component {
  render () {
    const params = this.props.params || {}
    const { name, photo, music, special_moment } = params
    return (
      <div className='container'>
        <div className='video-info'>
          <h1 className='video-title'>{name}</h1>
          <h2 className='video-year'>{music}</h2>
          <img className='video-poster' src={`public/img/posters/${photo}`} />
          <p className='video-description'>{special_moment}</p>
        </div>
      </div>
    )
  }
}

const { object } = React.PropTypes

Details.propTypes = {
  params: object.isRequired
}

module.exports = Details