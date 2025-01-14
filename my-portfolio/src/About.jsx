import profilePic from './assets/profile.jpg'

function About(){

    return(
        <div className='business-card'>
            <img className="profilepic" src={profilePic} alt="profile picture"></img>
    
            <p className='about'>I've been working as a finance manager since 2012.<br></br> 
            2023 I have decided to finish my computer science degree. <br></br>
            I enjoy boardgames, reading, and cooking.</p>
        </div>
    )
}

export default About