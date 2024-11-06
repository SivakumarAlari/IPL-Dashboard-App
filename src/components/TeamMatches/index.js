import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatch extends Component {
  state = {
    latestMatchList: [],
    isLoading: true,
    recentMatch: [],
    teamBanner: '',
  }

  componentDidMount() {
    this.getTeamMatch()
  }

  getTeamMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const matchData = await response.json()

    const data = matchData.latest_match_details
    const bannerImgUrl = matchData.team_banner_url
    const updatedMatchData = {
      id: data.id,
      competingTeam: data.competing_team,
      date: data.date,
      venue: data.venue,
      result: data.result,
      competingTeamLogo: data.competing_team_logo,
      firstInnings: data.first_innings,
      secondInnings: data.second_innings,
      manOfTheMatch: data.man_of_the_match,
      umpires: data.umpires,
    }

    const formattedDataList = matchData.recent_matches.map(recentMatch => ({
      competingTeam: recentMatch.competing_team,
      competingTeamLogo: recentMatch.competing_team_logo,
      result: recentMatch.result,
      matchStatus: recentMatch.match_status,
      id: recentMatch.id,
    }))

    this.setState({
      latestMatchList: updatedMatchData,
      isLoading: false,
      recentMatch: formattedDataList,
      teamBanner: bannerImgUrl,
    })
  }

  render() {
    const {latestMatchList, recentMatch, teamBanner} = this.state
    const {isLoading} = this.state
    return (
      <>
        <div className="team-match-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            <div className="latest-match-container">
              <img src={teamBanner} className="teamImage" alt="team banner" />
              <h1 className="latest-heading">Latest Matches</h1>

              <LatestMatch matchDetails={latestMatchList} />

              <ul className="latestMatch-container">
                {recentMatch.map(eachRecentMatch => (
                  <MatchCard
                    key={eachRecentMatch.id}
                    DetailsRecent={eachRecentMatch}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default TeamMatch

// import {Component} from 'react'
// import Loader from 'react-loader-spinner'
// import LatestMatch from '../LatestMatch '
// import './index.css'

// class TeamMatch extends Component {
//   state = {latestMatchList: [], isLoading: true}

//   componentDidMount() {
//     this.getTeamMatch()
//   }

//   getTeamMatch = async () => {
//     const response = await fetch('https://apis.ccbp.in/ipl/KKR')
//     const matchData = await response.json()
//     const updatedMatchData = {
//       teamUrl: matchData.team_banner_url,
//       competingTeam: matchData.competing_team,
//       date: matchData.date,
//       venue: matchData.venue,
//       result: matchData.result,
//       competingTeamLogo: matchData.competing_team_logo,
//       firstInnings: matchData.first_innings,
//       secondInnings: matchData.second_innings,
//       manOfTheMatch: matchData.man_of_the_match,
//       umpires: matchData.umpires,
//     }
//     this.setState({latestMatchList: updatedMatchData, isLoading: false})
//   }

//   render() {
//     const {latestMatchList, isLoading} = this.state
//     return (

//         {isLoading ? (
//           <div data-testid="loader">
//             <Loader type="Rings" color="#ffffff" height={80} width={80} />
//           </div>
//         ) : (
//                 <div className="latest-match-container">
//         <img src={latestMatchList.teamUrl} className="teamImage" />
//         <h1 className="latest-heading">Latest Matches </h1>
//           <div className="latestMatch">
//             {latestMatchList.map(eachTeam => (
//               <LatestMatch key={eachTeam.id} teamDetails={eachTeam} />
//             ))}
//           </div>
//               </div>
//         )}

//     )
//   }
// }

// export default TeamMatch
