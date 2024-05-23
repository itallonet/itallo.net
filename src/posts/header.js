import ProfilePic from "../assets/images/profile.jpg"

const Header = () => {
    return (
        <header id="home">
            <div id="banner">
                <img src={ProfilePic} />
            </div>
        </header>
    )
}

export default Header;