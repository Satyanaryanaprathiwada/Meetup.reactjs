// import {Redirect} from 'react-router-dom'

import {Component} from 'react'
import OptionItem from '../OptionItem'
import MeetupContext from '../../Context/MeetupContext'

import {
  NavBar,
  Logo,
  ContentDiv,
  Div,
  RegImg,
  Form,
  Hed,
  Label,
  NameInput,
  Select,
  RegSubBtn,
  ErrorPara,
} from './registerStyle'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    nameInput: '',
    errMsg: false,
    activeTopic: topicsList[0].displayText,
  }

  onChangeInput = e => {
    this.setState({
      nameInput: e.target.value,
    })
  }

  onChangeTopic = event => {
    this.setState({
      activeTopic: event.target.value,
    })
  }

  toggleErrMsg = () => {
    this.setState(prev => ({
      errMsg: !prev.errMsg,
    }))
  }

  renderHome = () => {}

  submitForm = event => {
    event.preventDefault()

    const {nameInput, activeTopic} = this.state
    const name = nameInput
    const topic = activeTopic

    if (name !== '') {
      const {history} = this.props
      history.replace('/')
    } else {
      this.toggleErrMsg()
    }
    this.setState({
      nameInput: name,
      activeTopic: topic,
    })
  }

  render() {
    const {errMsg, nameInput, activeTopic} = this.state

    return (
      <MeetupContext.Provider
        value={{
          nameInput,
          activeTopic,
        }}
      >
        <NavBar>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </NavBar>
        <ContentDiv>
          <Div>
            <RegImg
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
          </Div>
          <Form onSubmit={this.submitForm}>
            <Hed>Let us Join</Hed>
            <Label htmlFor="name">NAME</Label>
            <NameInput
              id="name"
              type="text"
              placeholder="Your name"
              onChange={this.onChangeInput}
              value={nameInput}
            />
            <Label htmlFor="topic">TOPICS</Label>
            <Select
              id="topic"
              value={activeTopic}
              onChange={this.onChangeTopic}
            >
              {topicsList.map(each => (
                <OptionItem key={each.id} details={each} />
              ))}
            </Select>
            <RegSubBtn type="submit">Register Now</RegSubBtn>
            {errMsg && <ErrorPara>Please enter your name</ErrorPara>}
          </Form>
        </ContentDiv>
      </MeetupContext.Provider>
    )
  }
}

export default Register
