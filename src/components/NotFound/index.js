import {ContentDiv, NotFoundImg, Hed, Para} from './notfoundStyle'

const NotFound = () => (
  <ContentDiv>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Hed>Page Not Found</Hed>
    <Para>We are sorry, the page you requested could not be found</Para>
  </ContentDiv>
)

export default NotFound
