const React = require('react')
const PersonCard = require('./PersonCard')
const { object } = React.PropTypes
const data = require('../public/data')

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.persons.map((person) => (
        <div className='show'>
          <img src={`/public/img/posters/${person.photo}`} className='show-img' />
          <div className='show-text'>
            <h3 className='show-title'>{person.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
)


module.exports = Search