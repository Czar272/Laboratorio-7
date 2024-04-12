function CONTENT() {

    const [datos, setDatos] = React.useState([])
    const [loading, setLoading] = React.useState(true); 

    async function llamarAPI() {

            let cart = await fetch('http://127.0.0.1:8000')
            let cartas = await cart.json()
            console.log(cartas)
            setDatos(cartas) 
            setLoading(false)        


            if(!cart.ok){
                setLoading(false) 
                throw new error("Error al cargar datos de la API")
            }
    }

    React.useEffect(() => {
        llamarAPI()
    }, [])

    if (loading) {
        return <LOADING />;
    } else if (datos.length === 0) {
        return <NOPOST />; 
    }
    return(
        <div className = "content"
        style = {{
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            backgroundColor: 'white',
            marginTop: '5%',
            marginLeft: '5%',
            marginRight: '10%',
            height: '100%',
            width: '90%',
            border: 'solid 1px black'
        }}
        >
            <CARD display = {"algo"}/>
        </div>
    )
}