import './About.css'
import myPhoto from './myPhoto.jpg'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = about => {
  return (
    <>
      <h1>Hello and welcome!</h1>
      <p>my name is kefan xiao.</p>
      <p>
        i am currently a student at nyu majoring in computer science and
        minoring in business studies.
      </p>
      <p>i am also a software engineer intern at stackshine.</p>
      <p>i hoop. i lift. i code.</p>
      <img className="myPhoto" src={myPhoto} alt="Me" />
    </>
  )
}

// make this component available to be imported into any other file
export default About
