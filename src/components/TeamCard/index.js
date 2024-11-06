import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImgUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-design">
      <div>
        <li className="each-ipl-team-container">
          <img src={teamImgUrl} alt={name} className="image-design" />
          <p id="team-name-heading">{name} </p>
        </li>
      </div>
    </Link>
  )
}
export default TeamCard
