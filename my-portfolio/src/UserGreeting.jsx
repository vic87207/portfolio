function UserGreeting(props){

    return(props.isLoggedIn ? <h2>Hello {props.username}</h2>:<h2>Please log in</h2>)

}

export default UserGreeting