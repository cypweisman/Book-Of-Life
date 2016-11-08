const React = require('react')


class Details extends React.Component {
  render () {
    const params = this.props.params || {}
    const { name, photo, music, activity, special_moment, last_visit } = params
    return (
      <div className='container'>

        <div className="detail-photo">
          <img src={`public/img/posters/${photo}`} />
        </div>

        <div className='flip-container' >
            <div className='flipper'>
              <div className='front'>
                <h1>Your favorite song together :)</h1>
              </div>
              <div className='back'>
                <h1>{music}</h1>
              </div>
            </div>
        </div>

        <div className='flip-container' >
            <div className='flipper'>
              <div className='front'>
                <h1>What you have fun doing alongside {name} </h1>
              </div>
              <div className='back'>
                <h1>{activity}</h1>
              </div>
            </div>
        </div>

        <div className='flip-container' >
            <div className='flipper'>
              <div className='front'>
                <h1>Special Moment :)</h1>
              </div>
              <div className='back'>
                <h1>{special_moment}</h1>
              </div>
            </div>
        </div>

        <div className='flip-container' >
            <div className='flipper'>
              <div className='front'>
                <h1>What you did on your last visit </h1>
              </div>
              <div className='back'>
                <h1>{last_visit}</h1>
              </div>
            </div>
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