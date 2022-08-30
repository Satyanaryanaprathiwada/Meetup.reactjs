import {Link} from 'react-router-dom'
import MeetupContext from '../../Context/MeetupContext'
import {NavBar, Logo, ContentDiv, Hed, Para, RegBtn, HomeImg} from './homeStyle'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {nameInput, activeTopic} = value
      const name = nameInput !== ''
      const topic = activeTopic !== ''
      console.log(nameInput)
      console.log(activeTopic)
      return (
        <>
          <NavBar>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </NavBar>
          <ContentDiv>
            {name ? (
              <Hed>Welcome {nameInput}</Hed>
            ) : (
              <Hed>Welcome to Meetup</Hed>
            )}
            {topic ? (
              <Para>Welcome to {activeTopic}</Para>
            ) : (
              <Para>Please register for the topic</Para>
            )}
            <Link to="/register">
              <RegBtn type="button">Register</RegBtn>
            </Link>
            <HomeImg
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </ContentDiv>
        </>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home
