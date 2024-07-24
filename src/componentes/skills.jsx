import '../App.css'
import arduino from '../assets/skills/arduino.svg'
import vite from '../assets/skills/brand-vite.svg'
import fastapi from '../assets/skills/fastapi.svg'
import css from '../assets/skills/file-type-css.svg'
import html from '../assets/skills/file-type-html.svg'
import vba from '../assets/skills/file-type-vba.svg'
import google from '../assets/skills/google-cloud.svg'
import js from '../assets/skills/javascript-js.svg'
import laravel from '../assets/skills/laravel.svg'
import sql from '../assets/skills/microsoft-sqlserver.svg'
import mikroc from '../assets/skills/mikroc.svg'
import mysql from '../assets/skills/mysql-original-wordmark.svg'
import next from '../assets/skills/next-js.svg'
import python from '../assets/skills/python.svg'
import react from '../assets/skills/react.svg'

function Skills() {  

return (
    <>
    <h1 className='titulo2'>Habilidades</h1>
    <div className='skillicons'>
        <div className='skilliconCont'>
            <img className='skillicon ' src={python} alt="logo" ></img>
            <h2 className='skill-font'>Python</h2>
        </div>
        <div className='skilliconCont'>
            <img className='skillicon ' src={fastapi} alt="logo" ></img>
            <h2 className='skill-font'>FastApi</h2>
        </div>
        <div className='skilliconCont'>
            <img className='skillicon ' src={laravel} alt="logo" ></img>
            <h2 className='skill-font'>Laravel</h2>
        </div>
        <div className='skilliconCont'>
            <img className='skillicon ' src={next} alt="logo" ></img>
            <h2 className='skill-font'>Next js</h2>
        </div>
        <div className='skilliconCont'>
            <img className='skillicon ' src={vite} alt="logo" ></img>
            <h2 className='skill-font'>Vite</h2>
        </div>
        <div className='skilliconCont'>
            <img className='skillicon ' src={react} alt="logo" ></img>
            <h2 className='skill-font'>React</h2>
        </div>
        <div className='skilliconCont'>
            <img className='skillicon ' src={js} alt="logo" ></img>
            <h2 className='skill-font'>Javascript</h2>
        </div>
        <div className='skilliconCont'>
            <img className='skillicon ' src={css} alt="logo" ></img>
            <h2 className='skill-font'>Css</h2>
        </div>
        <div className='skilliconCont'>
            <img className='skillicon ' src={html} alt="logo" ></img>
            <h2 className='skill-font'>Html</h2>
        </div>
        <div className='skilliconCont'>
            <img className='skillicon ' src={google} alt="logo" ></img>
            <h2 className='skill-font'>Google <br />
                Cloud </h2>            
        </div>
        <div className='skilliconCont'>
            <img className='skillicon ' src={mysql} alt="logo" ></img>
            <h2 className='skill-font'>MySQL</h2>
        </div>
        <div className='skilliconCont'>
            <img className='skillicon ' src={sql} alt="logo" ></img>
            <h2 className='skill-font'>Microsoft <br />SQL </h2>
        </div>
        <div className='skilliconCont'>
            <img className='skillicon ' src={arduino} alt="logo" ></img> 
            <h2 className='skill-font'>Arduino</h2>
        </div>                     
        <div className='skilliconCont'>
            <img className='skillicon ' src={mikroc } alt="logo" ></img>
            <h2 className='skill-font'>MikroC</h2>
        </div>
        <div className='skilliconCont'>
            <img className='skillicon ' src={vba} alt="logo" ></img>
            <h2 className='skill-font'>VBA</h2>
        </div>           
    </div>
    </>
  )
}
export default Skills