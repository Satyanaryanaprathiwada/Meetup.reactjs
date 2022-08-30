import React from 'react'

const MeetupContext = React.createContext({
  errMsg: false,
  nameInput: '',
  activeTopic: '',
})

export default MeetupContext
