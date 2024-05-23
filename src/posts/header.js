import ProfilePic from "../assets/images/profile.jpg"

const Header = () => {
    return (
        <header id="home">
            <div id="banner">
                <img style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/'} src={ProfilePic} />
            </div>
        </header>
    )
}

export default Header;