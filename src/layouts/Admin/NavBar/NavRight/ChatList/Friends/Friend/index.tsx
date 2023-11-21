import React from 'react'
import { Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Friend = ({ data, activeId, clicked }: any) => {
  const photo = `/src/assets/images/user/${data.photo}`
  let timeClass = ['d-block']
  if (data.status) {
    timeClass = [...timeClass, 'text-c-green']
  } else {
    timeClass = [...timeClass, 'text-muted']
  }

  let time: JSX.Element = <></>
  if (data.time) {
    time = <small className={timeClass.join(' ')}>{data.time}</small>
  }

  let newFriend: JSX.Element = <></>
  if (data.new) {
    newFriend = <div className='live-status'>{data.new}</div>
  }

  return (
    <React.Fragment>
      <Media className={activeId === data.id ? 'userlist-box active' : 'userlist-box'} onClick={clicked}>
        <Link to='#' className='media-left'>
          {' '}
          <img className='media-object img-radius' src={photo} alt={data.name} />
          {newFriend}
        </Link>
        <Media.Body>
          <h6 className='chat-header'>
            {data.name}
            {time}
          </h6>
        </Media.Body>
      </Media>
    </React.Fragment>
  )
}

export default Friend
