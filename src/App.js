import React from 'react'
import Navbar from './components/Navbar'
import Fade from 'react-reveal/Fade';
import {useSpring, animated} from 'react-spring'



export const App = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <>
        
        <div className="container">


            <div className="row">
                <div className="col-md-6 p-0 order-2 order-md-1">
                        <img className="img-fluid" src="assets/Holding-Phone.png" alt="phone" />
                </div>
                <div className="col-md-6 order-1 order-md-2">
                       
                          <div className="row">
                          <div className="col-12">
                                    <h2 className="float-left pt-4">Lagom</h2>
                                    <h2 className="float-right">
                                            <Navbar/>
                                    </h2>
                                    <div className="clearfix"></div>
                                    <div className="line"></div>
                           </div>
                           </div>
                            <div className="row">
                                <div className="col-12">
                                <div className="pl-2 pr-2 pt-5 pb-5  pl-md-5 pr-md-5 pt-md-5 mt-5">
                                      <Fade left>
                                            <h1 className="text-md-left text_mobile">
                                                Digital products lovingly made with a human touch.
                                            </h1>
                                        </Fade>    
                                    </div>
                                </div>
                                    
                            </div>
                      
              
                       
                
                  
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6 p-3">
                    <div className="row">
                        <div className="col-12 pl-4 pr-4 pt-3 pb-3">
                        <animated.div style={props}>
                        <h4 className="float-left">Dribbble</h4>
                           
                            </animated.div>
                                            <h4 className="float-right">
                                                <img className="imgs" src="assets/flecha.png" />
                                            </h4>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                                    <div className="line"></div>
                    <div className="row">
                        <div className="col-12 pl-4 pr-4 pt-3 pb-3">
                            <h4 className="float-left">Twitter</h4>
                                                <h4 className="float-right">
                                                    <img className="imgs"  src="assets/flecha.png" />
                                                </h4>
                            
                        </div>
                    </div>
               
                </div>
                <div className="col-12 col-md-6 col-lg-6 p-0">
                    <div className="row p-0 m-0">
                        <div className="col-12 col-md-6 col-lg-6 p-0 m-0">
                                <img className="img-fluid" src="assets/black-bg.png" />
                                <img className= "over" src="assets/Ok-Lagom.svg" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 p-0 m-0">
                               <img className="img-fluid" src="assets/Lagggom.png" />
                        </div>    
                    </div>
                </div>
                
                
            </div>
        </div>    
        </>
    )
}
