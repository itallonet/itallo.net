const Card = ({ image, title, link, date }) => {
    return (
        <div onClick={() => window.location.href = link} style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            boxShadow: '0px 0px 15px -4px rgba(0, 0, 0, 0.75)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease-in-out',
            margin: '10px'
        }}>
            <div style={{
                width: '300px',
                borderRadius: '10px',
                height: '190px',
                background: 'rgba(0, 0, 0, 0.5)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(0, 0, 0, 0.3)',
                padding:'10px 20px',
                display: "flex",
                justifyContent: 'center',
                alignItems: 'start',
                flexDirection: 'column'
            }}> 
                <span>{date}</span>
                <span style={{
                    fontWeight: 'bolder',
                    fontSize: 'x-large',
                }}>{title}</span>
            </div>
        </div>
    )
}

export default Card;