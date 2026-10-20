import React from 'react'

const Card = ({Content , contentProps}) => {
  return (
    <div className="card">
        <Content {...contentProps}/>
    </div>
  )
}

export default Card