function HEADER(props) {
    return(
        <div className = "header"
        style = {{

            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#788199',
            height: '10%',
            width: '100%',
            border: 'solid 1px black'
        }}
        >
            <p style = {{
                fontsize: '10%'
            }}>
                {props.armas}
                {props.Personajes}
                {props.Lugares}
            </p>
            
        </div>
    )
}
HEADER.prototype = {
    armas: String,
    Personajes: String,
    Lugares: String
}