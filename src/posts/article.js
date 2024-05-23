const Article = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
            <div style={{width: '75%'}}>{props.children}</div>
        </div>
    )
}

export default Article;