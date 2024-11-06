import './index.css'

const MatchCard = props => {
  const {DetailsRecent} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = DetailsRecent
  const winOrLoseStyle =
    matchStatus === 'Won' ? 'win-paragraph' : 'lose-paragraph'
  return (
    <li className="each-recet-match">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recetImgDesign"
      />
      <p className="team-name-heading">{competingTeam} </p>
      <p className="win-or-lose-heading">{result} </p>
      <p className={winOrLoseStyle}>{matchStatus} </p>
    </li>
  )
}

export default MatchCard
