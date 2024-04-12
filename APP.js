function APP (){
    
    return(
        document.getElementById('master').style.display = 'flex', 
        document.getElementById('master').style.height = '100dvh',
        document.getElementById('master').style.width = '100dvw', 
        document.getElementById('master').style.margin = '0px', 
        document.getElementById('master').style.padding = '0px', 
        document.body.style.padding = '0px', 
        document.body.style.margin = '0px', 
        <div className = "app" 
        style = {{
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            backgroundColor: '#b5bac9',   
            height: '99%',
            width: '99%',
            margin: '0px',
            padding: '0px',
            border: 'solid 1px black',
            overflowy: 'scroll',
            overflowx: 'hidden',
        }}>
            <SIDEBAR />
            <COLUMNA />
            
        </div>
    )
}

ReactDOM.render(
    <APP />,
    document.getElementById('master')
    
);
