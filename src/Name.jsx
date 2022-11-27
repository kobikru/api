import React from 'react'

function Name(props) {
  return (
    <div>{props.users.map((u) => {
        return <li>{u}</li>;
      })}</div>
  )
}

export default Name