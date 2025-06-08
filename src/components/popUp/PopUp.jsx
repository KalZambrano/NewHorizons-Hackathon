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
                            <div className='task-card'>
                                <div className='task-header'><div className='task-type'>Material · Foro</div></div>
                                <div className='task-body'>
                                    <div className='task-title'>Foro S11</div>
                                    <div style={{display:'flex', gap:'20px', justifyContent:'center',alignItems:'center'}}>
                                    <div className='task-status por-entregar'>
                                        <span className='exclamation-icon'>!</span>
                                        Por entregar
                                    </div>
                                    <div class="porc-finished">👁️‍🗨️ 92</div>
                                    </div>
                                </div>
                                <div className='task-footer'>
                                    <div className='date-info'>Desde: 24 de marzo de 2025, 00:00</div>
                                    <div className='date-info'>Hasta: 22 de julio de 2025, 23:59</div>
                                </div>
                            </div>
                            <div className='task-card'>
                                <div className='task-header'><div className='task-type'>Material · Foro</div></div>
                                <div className='task-body'>
                                    <div className='task-title'>Foro S11</div>
                                    <div style={{display:'flex', gap:'20px', justifyContent:'center',alignItems:'center'}}>
                                    <div className='task-status por-entregar'>
                                        <span className='exclamation-icon'>!</span>
                                        Por entregar
                                    </div>
                                    <div class="porc-finished">👁️‍🗨️ 92</div>
                                    </div>
                                </div>
                                <div className='task-footer'>
                                    <div className='date-info'>Desde: 24 de marzo de 2025, 00:00</div>
                                    <div className='date-info'>Hasta: 22 de julio de 2025, 23:59</div>
                                </div>
                            </div>
                            <div className='task-card'>
                                <div className='task-header'><div className='task-type'>Material · Foro</div></div>
                                <div className='task-body'>
                                    <div className='task-title'>Foro S11</div>
                                    <div style={{display:'flex', gap:'20px', justifyContent:'center',alignItems:'center'}}>
                                    <div className='task-status por-entregar'>
                                        <span className='exclamation-icon'>!</span>
                                        Por entregar
                                    </div>
                                    <div class="porc-finished">👁️‍🗨️ 92</div>
                                    </div>
                                </div>
                                <div className='task-footer'>
                                    <div className='date-info'>Desde: 24 de marzo de 2025, 00:00</div>
                                    <div className='date-info'>Hasta: 22 de julio de 2025, 23:59</div>
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
                            <div className='task-card'>
                                <div className='task-header'><div className='task-type'>Material · Power Point</div></div>
                                <div className='task-body'>
                                    <div className='task-title'>S12_s1 - Aplicaciones Web con HIBERNATE</div>
                                    <div style={{display:'flex', gap:'20px', justifyContent:'center',alignItems:'center'}}>
                                    <div className='task-status pendiente'>
                                        <span className='exclamation-icon'>O</span>
                                        Pendiente
                                    </div>
                                    <div class="porc-finished">👁️‍🗨️ 92</div>
                                    </div>
                                </div>
                            </div>
                            <div className='task-card'>
                                <div className='task-header'><div className='task-type'>Material · Power Point</div></div>
                                <div className='task-body'>
                                    <div className='task-title'>S12_s1 - Aplicaciones Web con HIBERNATE</div>
                                    <div style={{display:'flex', gap:'20px', justifyContent:'center',alignItems:'center'}}>
                                    <div className='task-status pendiente'>
                                        <span className='exclamation-icon'>O</span>
                                        Pendiente
                                    </div>
                                    <div class="porc-finished">👁️‍🗨️ 92</div>
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
                                <div className='task-header'><div className='task-type'>Material · PDF</div></div>
                                <div className='task-body'>
                                    <div className='task-title'>Base de Datos - Calidad de Software</div>
                                    <div style={{display:'flex', gap:'20px', justifyContent:'center',alignItems:'center'}}>
                                    <div className='task-status revisado'>
                                        <span className='exclamation-icon'>✔</span>
                                        Revisado
                                    </div>
                                    <div class="porc-finished">👁️‍🗨️ 92</div>
                                    </div>
                                </div>
                            </div>
                            <div className='task-card'>
                                <div className='task-header'><div className='task-type'>Material · PDF</div></div>
                                <div className='task-body'>
                                    <div className='task-title'>Base de Datos - Calidad de Software</div>
                                    <div style={{display:'flex', gap:'20px', justifyContent:'center',alignItems:'center'}}>
                                    <div className='task-status revisado'>
                                        <span className='exclamation-icon'>✔</span>
                                        Revisado
                                    </div>
                                    <div class="porc-finished">👁️‍🗨️ 92</div>
                                    </div>
                                </div>
                            </div>
                            <div className='task-card'>
                                <div className='task-header'><div className='task-type'>Material · PDF</div></div>
                                <div className='task-body'>
                                    <div className='task-title'>Base de Datos - Calidad de Software</div>
                                    <div style={{display:'flex', gap:'20px', justifyContent:'center',alignItems:'center'}}>
                                    <div className='task-status revisado'>
                                        <span className='exclamation-icon'>✔</span>
                                        Revisado
                                    </div>
                                    <div class="porc-finished">👁️‍🗨️ 92</div>
                                    </div>
                                </div>
                            </div>
                            <div className='task-card'>
                                <div className='task-header'><div className='task-type'>Material · PDF</div></div>
                                <div className='task-body'>
                                    <div className='task-title'>Base de Datos - Calidad de Software</div>
                                    <div style={{display:'flex', gap:'20px', justifyContent:'center',alignItems:'center'}}>
                                    <div className='task-status revisado'>
                                        <span className='exclamation-icon'>✔</span>
                                        Revisado
                                    </div>
                                    <div class="porc-finished">👁️‍🗨️ 92</div>
                                    </div>
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