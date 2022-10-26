import React from 'react'
import { HeaderContainer, AboutContainer, InfoContainer, StyledImage} from './AboutStyle'
import codeSvg from '../../assets/coding.svg'


const About = () => {
  return (
   <AboutContainer>
    <StyledImage src={codeSvg} alt="coding" />
    <HeaderContainer>
      <h1>About Software Developer <span>Kenan</span></h1>
    </HeaderContainer>
    <InfoContainer>
      <h1>I'm Kenan</h1>
      <h2>I'm currently learning Full-Stack Development Languages</h2>
      <h2>I've already known JS, ReactJS, ReactNative, SQL</h2>
      <h2><a href="mailto:test@gmail.com">Send Email:</a> Kenan@gmail.com</h2>
    </InfoContainer>
   </AboutContainer>
   
  )
}

export default About