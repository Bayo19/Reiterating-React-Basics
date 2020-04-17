import React from 'react'

import Card  from '../card/card-component'

// Style
import './card-list-styles.css'

const CardList = (props) => {

    return (
        <div className='card-list'>
            {props.monsters.map(function(monster){
            return (
            <Card key={monster.id} monster={monster} />
            )
          })}
        </div>
    )
}

export default CardList