const Paragraph = (props) => {
    return (
        <article style={{display: 'flex', justifyContent: "center"}}><p style={{width: "100%", fontSize: '16px'}}>{props.children}</p></article>
    )
}

export default Paragraph;