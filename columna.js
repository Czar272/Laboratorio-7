function COLUMNA(props) {
    return(
        <div className = "columna"
        style = {{

            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'transparent',
            height: '100%',
            width: '100%',
        }}
        >
            <HEADER armas = {"  Armas  "} Personajes = {"    Personajes    "} Lugares = {"     Lugares     "}/>
            <CONTENT />
        </div>
    )

}

