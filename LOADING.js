function LOADING(){
    return(
        <div  style={{
            height:'auto',
            width:'100%', 
            boxSizing: 'border-box',
            backgroundColor:'rgba(250,250,250,0)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: '30px',
            marginTop: '30px'
        }}>
            <img src="https://i.gifer.com/1ISp.gif" alt="Logo" style={{ 
                width: '40%',
                height: 'auto',
                marginBottom: '20px'
             }} />
            <div><img src='https://i.gifer.com/1ISp.gif' alt='No hay posts' style={{
                width:'90%', 
                heigth:'auto',
            }}></img></div>
        </div>
    )
}