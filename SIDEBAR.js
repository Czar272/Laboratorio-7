function SIDEBAR(props)  {
    return(
        <div className = "sidebar"
        style = {{

            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#666F88',
            height: '100%',
            width: '10%',
            border: 'solid 1px black',
        }}>
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

SIDEBAR.prototype = {
    armas: String,
    Personajes: String,
    Lugares: Strings
}