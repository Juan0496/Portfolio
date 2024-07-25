import '../App.css'
import React from 'react';
const  Proyectos = React.forwardRef((props,ref) =>{
  const {titulo1,titulo2, texto} = props
return (
<div className='proyectosTit' ref={ref} >     
  <p className='titulo1'>{titulo1}</p>    
  <h2 className='titulo2'>{titulo2}</h2>   
  <div className='descripcion-me'> 
    <div className="descripcion-me-cont">
      <p className='h1S'>
        {texto}
      </p>  
    </div> 
  
  </div>
</div>
) 
});
export default Proyectos