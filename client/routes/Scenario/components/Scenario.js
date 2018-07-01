import React from 'react'
import PropTypes from 'prop-types'
import PlayerCard from 'components/player-card/PlayerCard'

export const Scenario = ({ hand, increment, doubleAsync }) => (
  <div style={{ margin: '0 auto' }} >
    <div>Game board</div>
    <div><h2>Hand</h2>
      {hand.map(card => <PlayerCard card={card} key={card.card}/>)}
    </div>
  </div>
)
Scenario.propTypes = {
  hand: PropTypes.array.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Scenario
