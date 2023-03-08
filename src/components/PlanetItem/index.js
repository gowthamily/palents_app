// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props

  const {name, imageUrl, description} = eachPlanet

  return (
    <div className="planets-container">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
