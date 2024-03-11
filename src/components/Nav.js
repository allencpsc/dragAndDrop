const Nav = (props) => {
    const {location} = props
    return(
        <h1>
            Hello Woruldo-
            { props.greeting }
            {location}
        </h1>
    )
}

export default Nav
