const Footer = () => {
    return (
        <footer>
            <div id="f-social">
                <a href="https://github.com/itallonet" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/itallonet" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="mailto:itallorian3@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </div>
            <span>&copy; {new Date().getFullYear()} ItalloNet | All rights reserved</span>
        </footer>
    )
}

export default Footer;