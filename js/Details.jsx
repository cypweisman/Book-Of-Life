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
                <img src="https://pbs.twimg.com/profile_images/761645430937522177/f5-8JkIE.jpg" alt="Smiley face" height="390" width="390" />
              </div>
              <div className='back'>
                <p>{music}</p>
              </div>
            </div>
        </div>

        <div className='flip-container' >
            <div className='flipper'>
              <div className='front'>
                <img src="https://pbs.twimg.com/profile_images/761645430937522177/f5-8JkIE.jpg" alt="Smiley face" height="390" width="390" />
              </div>
              <div className='back'>
                <p>{activity}</p>
              </div>
            </div>
        </div>

        <div className='flip-container' >
            <div className='flipper'>
              <div className='front'>
                <img src="https://pbs.twimg.com/profile_images/761645430937522177/f5-8JkIE.jpg" alt="Smiley face" height="390" width="390" />
              </div>
              <div className='back'>
                <p>{special_moment}</p>
              </div>
            </div>
        </div>

        <div className='flip-container' >
            <div className='flipper'>
              <div className='front'>
                <img src="https://pbs.twimg.com/profile_images/761645430937522177/f5-8JkIE.jpg" alt="Smiley face" height="390" width="390" />
              </div>
              <div className='back'>
                <p>{last_visit}</p>
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