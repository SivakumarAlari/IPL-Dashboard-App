import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails

  return (
    <div className="latest-match-containers">
      <div className="first-part-container">
        <div className="date-venue-container">
          <p className="competeTeam-heading ">{competingTeam} </p>
          <p className="date-heading">{date} </p>
          <p className="venue-heading">{venue} </p>
          <p className="result-heading">{result} </p>
        </div>
        <div className="team-image-container ">
          <img
            src={competingTeamLogo}
            className="ownImage-design"
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <div className="team-image-second ">
        <img
          src={competingTeamLogo}
          className="ownImage-design"
          alt={competingTeam}
        />
      </div>
      <hr className="href-design " />
      <div className="bottom-part-container">
        <p className="first-heading ">First Innings </p>
        <p className="bat-first-paragraph ">{firstInnings} </p>
        <p className="first-heading">Second Innings </p>
        <p className="bat-first-paragraph">{secondInnings} </p>
        <p className="man-ofThe-match-paragraph ">Man Of The Match </p>
        <p className="player-name">{manOfTheMatch} </p>
        <p className="man-ofThe-match-paragraph">Umpires </p>
        <p className="player-name">{umpires} </p>
      </div>
    </div>
  )
}

export default LatestMatch
