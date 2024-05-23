const Code = (props) => {
    return (
        <div style={{ background: 'rgba(0, 0, 0, 0.1)', padding: '30px', borderRadius: '10px' }}>
            <code>{props.children}</code>
        </div>
    )
}

export default Code;