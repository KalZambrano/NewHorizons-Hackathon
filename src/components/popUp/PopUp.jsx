import {React, useRef} from 'react'
import './PopUp.css'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopUp = ({closePopUp, classShow}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidestoShow: 3,
        slidestoScroll: 1
    }

    var myClassName = 'popUp-background'+classShow

  return (
    <div className={myClassName} id='popUp'>
        <div className='popUp-container'>
            <button onClick={()=>closePopUp()}>X</button>
            <Slider {...settings} className='slider'>
                <div className='carrousel-card'>
                    <div className='title'>
                        <h1>Tienes actividades pendientes</h1>
                    </div>
                    <div className='body'>
                        <div className='tasks-container'>
                            <div className='task-warning'>
                                <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', marginBottom:'10px'}}>
                                    <span>☹️</span>
                                    <div style={{textAlign:'left'}}>Formas parte del 15% de alumnos que aún no envian la actividad. No te descuides</div>
                                </div>
                                <div className='task-card'>
                                    <div className='task-header'><div className='task-type'>Material · Foro</div></div>
                                    <div className='task-body'>
                                        <div className='task-title'>Foro S11</div>
                                        <div className='task-status por-entregar'>
                                            <span className='exclamation-icon'>!</span>
                                            Por entregar
                                        </div>
                                    </div>
                                    <div className='task-footer'>
                                        <div className='date-info'>Desde: 24 de marzo de 2025, 00:00</div>
                                        <div className='date-info'>Hasta: 22 de julio de 2025, 23:59</div>
                                    </div>
                                    <div className='progress-container'>
                                        <div className='progress-bar'>
                                            <div className='progress-fill active' style={{width:'85%'}}></div>
                                        </div>
                                        <div className='progress-text visible'>85% de tus compañeros ya han enviado la actividad</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carrousel-card'>
                    <div className='title'>
                        <h1>Aún tienes contenido sin revisar</h1>
                    </div>
                    <div className='body'>
                        <div className='tasks-container'>
                            <div className='task-warning'>
                                <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', marginBottom:'10px'}}>
                                    <span>☹️</span>
                                    <div style={{textAlign:'left'}}>Formas parte del 15% de alumnos que aún no revisaron este material. Ponte al día con los demas</div>
                                </div>
                                <div className='task-card'>
                                    <div className='task-header'><div className='task-type'>Material · PDF</div></div>
                                    <div className='task-body'>
                                        <div className='task-title'>Base de Datos - Calidad de Software</div>
                                        <div className='task-status pendiente'>
                                            <span className='exclamation-icon'>O</span>
                                            Pendiente
                                        </div>
                                    </div>
                                    <div className='progress-container'>
                                        <div className='progress-bar'>
                                            <div className='progress-fill active' style={{width:'85%'}}></div>
                                        </div>
                                        <div className='progress-text visible'>85% de tus compañeros ya han revisado este material</div>
                                    </div>
                                </div>
                            </div>
                            <div className='task-warning'>
                                <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', marginBottom:'10px'}}>
                                    <span>☹️</span>
                                    <div style={{textAlign:'left'}}>Formas parte del 15% de alumnos que aún no revisaron este material. Ponte al día con los demas</div>
                                </div>
                                <div className='task-card'>
                                    <div className='task-header'><div className='task-type'>Material · PDF</div></div>
                                    <div className='task-body'>
                                        <div className='task-title'>Base de Datos - Calidad de Software</div>
                                        <div className='task-status pendiente'>
                                            <span className='exclamation-icon'>O</span>
                                            Pendiente
                                        </div>
                                    </div>
                                    <div className='progress-container'>
                                        <div className='progress-bar'>
                                            <div className='progress-fill active' style={{width:'85%'}}></div>
                                        </div>
                                        <div className='progress-text visible'>85% de tus compañeros ya han revisado este material</div>
                                    </div>
                                </div>
                            </div>
                            <div className='task-warning'>
                                <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', marginBottom:'10px'}}>
                                    <span>☹️</span>
                                    <div style={{textAlign:'left'}}>Formas parte del 15% de alumnos que aún no revisaron este material. Ponte al día con los demas</div>
                                </div>
                                <div className='task-card'>
                                    <div className='task-header'><div className='task-type'>Material · PDF</div></div>
                                    <div className='task-body'>
                                        <div className='task-title'>Base de Datos - Calidad de Software</div>
                                        <div className='task-status pendiente'>
                                            <span className='exclamation-icon'>O</span>
                                            Pendiente
                                        </div>
                                    </div>
                                    <div className='progress-container'>
                                        <div className='progress-bar'>
                                            <div className='progress-fill active' style={{width:'85%'}}></div>
                                        </div>
                                        <div className='progress-text visible'>85% de tus compañeros ya han revisado este material</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carrousel-card'>
                    <div className='title'>
                        <h1>Preparate para tu Práctica Calificada 1 de Base de Datos</h1>
                    </div>
                    <div className='body'>
                        <div className='tasks-container'>
                            <div className='task-card'>
                                    <div className='task-header'><div className='task-type'>Material · POWER POINT</div></div>
                                    <div className='task-body'>
                                        <div className='task-title'>S12_s1 - Aplicaciones Web con HIBERNATE</div>
                                        <div className='task-status revisado'>
                                            <span className='exclamation-icon'>!</span>
                                            Revisado
                                        </div>
                                    </div>
                                    <div className='progress-container'>
                                        <div className='progress-bar'>
                                            <div className='progress-fill active' style={{width:'85%'}}></div>
                                        </div>
                                        <div className='progress-text visible'>85% de tus compañeros ya han revisado este material</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            
            <div className='footer'>
                <button onClick={()=>closePopUp()}>Entendido</button>
            </div>
        </div>
    </div>
  )
}

export default PopUp