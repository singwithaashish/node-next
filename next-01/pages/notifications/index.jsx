import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'

function index() {
  const [notifications, setNotifications] = useState([])
  // useEffect(async () => {
  //   const token = localStorage.getItem('token')
  //   if (!token) {
  //     window.location.href = '/'
  //   }

  //   const noti = await fetch('http://localhost:5000/notifications/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: token
  //     }
  //   })

  //   const notiData = await noti.json()
  //   console.log(notiData)
  //   setNotifications(notiData.user.notifications)


  // }, [])
  return (
    <Container>
      <h1>Notifications are Coming soon</h1>
      {notifications && notifications.map(noti => {
        return (
          <div>
            <h3>{noti.message}</h3>
          </div>
        )
      })}
    </Container>
  )
}

export default index