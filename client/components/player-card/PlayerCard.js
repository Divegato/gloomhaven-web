import React from 'react'
import PropTypes from 'prop-types'

export const PlayerCard = ({ card }) => (
  <div className="class-{card.playerClass}">
    <div>{card.name}</div>
    <div>{card.top}</div>
    <div>{card.initiative}</div>
    <div>{card.bottom}</div>
  </div>
)
PlayerCard.propTypes = {
}

export default PlayerCard
