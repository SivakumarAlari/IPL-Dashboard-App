import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeamList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImgUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeamList: updatedData, isLoading: false})
  }

  render() {
    const {iplTeamList, isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="main-container">
            <div className="header-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo-design"
              />
              <h1 className="dashboard-heading">IPL Dashboard</h1>
            </div>
            <ul className="team-list">
              {iplTeamList.map(eachTeam => (
                <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
