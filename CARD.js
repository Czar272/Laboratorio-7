function CARD() {

    return(
        <div className = "card" 
        style ={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            height: '60%',
            width: '90%',
            marginTop: '50px',
            borderRadius: '10%',
            border: 'solid 1px black'
        }}
        >


        </div>
    )
}

CARD.prototype = {
    display: String
}