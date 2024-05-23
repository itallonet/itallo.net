const Image = ({ source, legend }) => {
    return (
        <article style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div style={{
                width: '100%',
                height: '120px',
                background: `url(${source})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity: 0.3,
                borderRadius: '10px',
                boxShadow: '0px 0px 15px -4px rgba(0, 0, 0, 0.75)',
            }}></div>
            <small style={{ opacity: 0.5, marginTop: '5px' }}>{legend}</small>
        </article>
    )
}

export default Image;