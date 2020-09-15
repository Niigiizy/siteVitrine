import React from 'react';
import {
    Spring, 
    animated, 
  } from 'react-spring/renderprops'

export default class ComposantCompetence extends React.Component {

    constructor() {
      super()
    }
  
    render() {
      return (
        <div 
          className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "ContenaireCompetence_mobile" :"ContenaireCompetence"}
        >
          <div 
            className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "ContenairePrincipalCompetence_mobile" : "ContenairePrincipalCompetence"}
          >
            <Spring
                native
                from={{
                    transform:"rotateY(270deg) translateZ(-40vw) translateX(-10vw)", 
                    opacite:0, 
                    opaciteValider: 0
                }}
                to={{
                    transform:"rotateY(360deg) translateZ(0vw) translateX(0vw)", 
                    opacite:1, 
                    opaciteValider: 1
                }}
                config={ key => 
                    ( key === 'opacite' ? {duration : 200, delay : 300} : 
                    key === 'opaciteValider' ? {duration : 500, delay : 2800} :
                    {duration : 500 , delay : 150})
                }
            >
              {props => (
                <animated.div className="Competence1" style={{...props, opacity:props.opacite}}>
                  <div className="ContenaireCompetence1">
                    <p className="TexteCompetence1">
                      Javascript , Node JS , Express JS
                    </p>
                  </div>
                  <animated.div className="ContenaireImageValider" style={{ opacity: props.opaciteValider}}>
                    <img
                        className="Image-Valider-Competence"
                        alt="logo valider"
                        src={"/ValiderCompetence.png"}
                    />
                  </animated.div>
                </animated.div>
              )}
            </Spring>
            <Spring
                native
                from={{
                    transform:"rotateY(90deg) translateZ(-40vw) translateX(10vw)", 
                    opacite:0, 
                    opaciteValider: 0
                    }}
                to={{
                    transform:"rotateY(0deg) translateZ(0vw) translateX(0vw)", 
                    opacite:1, 
                    opaciteValider: 1
                }}
                config={ key => 
                    ( key === 'opacite' ? {duration : 200, delay : 450} : 
                    key === 'opaciteValider' ? {duration : 500, delay : 2600} :
                    {duration : 500 , delay : 300})
                }
            >
              {props => (
                <animated.div className="Competence2" style={{...props, opacity:props.opacite}}>
                  <div className="ContenaireCompetence1">
                    <p className="TexteCompetence1">
                      NoSQL , REST , MERN
                    </p>
                  </div>
                  <animated.div className="ContenaireImageValider" style={{ opacity: props.opaciteValider }}>
                    <img
                        className="Image-Valider-Competence"
                        alt="logo valider"
                        src={"/ValiderCompetence.png"}
                    />
                  </animated.div>
                </animated.div>
              )}
            </Spring>
            <Spring
                native
                from={{
                    transform:"rotateY(270deg) translateZ(-40vw) translateX(-10vw)", 
                    opacite:0, 
                    opaciteValider: 0
                    }}
                to={{
                    transform:"rotateY(360deg) translateZ(0vw) translateX(0vw)", 
                    opacite:1, 
                    opaciteValider: 1
                }}
                config={ key => 
                    ( key === 'opacite' ? {duration : 200, delay : 600} : 
                    key === 'opaciteValider' ? {duration : 500, delay : 2400} :
                    {duration : 500 , delay : 450})
                }
            >
              {props => (
                <animated.div className="Competence3" style={{...props, opacity:props.opacite}}>
                  <div className="ContenaireCompetence1">
                    <p className="TexteCompetence1">
                      React , React Spring , React Router
                    </p>
                  </div>
                  <animated.div className="ContenaireImageValider" style={{ opacity: props.opaciteValider}}>
                    <img
                        className="Image-Valider-Competence"
                        alt="logo valider"
                        src={"/ValiderCompetence.png"}
                    />
                  </animated.div>
                </animated.div>
              )}
            </Spring>
            <Spring
                native
                from={{
                    transform:"rotateY(90deg) translateZ(-40vw) translateX(10vw)", 
                    opacite:0, 
                    opaciteValider: 0
                    }}
                to={{
                    transform:"rotateY(0deg) translateZ(0vw) translateX(0vw)", 
                    opacite:1, 
                    opaciteValider: 1
                    }}
                config={ key => 
                    ( key === 'opacite' ? {duration : 200, delay : 750} : 
                    key === 'opaciteValider' ? {duration : 500, delay : 2200} :
                    {duration : 500 , delay : 600})
                    }
            >
              {props => (
                <animated.div className="Competence4" style={{...props, opacity:props.opacite}}>
                  <div className="ContenaireCompetence1">
                    <p className="TexteCompetence1">
                      HTML , CSS
                    </p>
                  </div>
                  <animated.div className="ContenaireImageValider" style={{ opacity : props.opaciteValider}}>
                    <img
                        className="Image-Valider-Competence"
                        alt="logo valider"
                        src={"/ValiderCompetence.png"}
                    />
                  </animated.div>
                </animated.div>
              )}
            </Spring>
            <Spring
                native
                from={{
                    transform:"rotateY(270deg) translateZ(-40vw) translateX(-10vw)", 
                    opacite:0, 
                    opaciteValider: 0
                    }}
                to={{
                    transform:"rotateY(360deg) translateZ(0vw) translateX(0vw)", 
                    opacite: 1, 
                    opaciteValider: 1
                }}
                config={ key => 
                    ( key === 'opacite' ? {duration : 200, delay : 900} : 
                    key === 'opaciteValider' ? {duration : 500, delay : 2000} :
                    {duration : 500 , delay : 750})
                }
            >
              {props => (
                <animated.div className="Competence5" style={{...props, opacity:props.opacite}}>
                  <div className="ContenaireCompetence1">
                    <p className="TexteCompetence1">
                      React Native , Redux , React Navigation
                    </p>
                  </div>
                  <animated.div className="ContenaireImageValider" style={{ opacity : props.opaciteValider}}>
                    <img
                        className="Image-Valider-Competence"
                        alt="logo valider"
                        src={"/ValiderCompetence.png"}
                    />
                  </animated.div>
                </animated.div>
              )}
            </Spring>
            <Spring
                native
                from={{
                    transform:"rotateY(90deg) translateZ(-40vw) translateX(10vw)", 
                    opacite:0, 
                    opaciteValider:0
                    }}
                to={{
                    transform:"rotateY(0deg) translateZ(0vw) translateX(0vw)", 
                    opacite:1, 
                    opaciteValider: 1
                }}
                config={ key => 
                    ( key === 'opacite' ? {duration : 200, delay : 1050} : 
                    key === 'opaciteValider' ? {duration : 500, delay : 1800} :
                    {duration : 500 , delay : 900})
                }
            >
              {props => (
                <animated.div className="Competence6" style={{...props, opacity:props.opacite}}>
                  <div className="ContenaireCompetence1">
                    <p className="TexteCompetence1">
                      Cloud AWS (lambda, S3...)
                    </p>
                  </div>
                  <animated.div className="ContenaireImageValider" style={{opacity : props.opaciteValider}}>
                    <img
                        className="Image-Valider-Competence"
                        alt="logo valider"
                        src={"/ValiderCompetence.png"}
                    />
                  </animated.div>
                </animated.div>
              )}
            </Spring>
            <Spring
                native
                from={{
                    transform:"rotateY(270deg) translateZ(-40vw) translateX(-10vw)", 
                    opacite: 0, 
                    opaciteValider: 0
                }}
                to={{
                    transform:"rotateY(360deg) translateZ(0vw) translateX(0vw)", 
                    opacite: 1, 
                    opaciteValider: 1
                }}
                config={ key => 
                    ( key === 'opacite' ? {duration : 200, delay : 1200} : 
                    key === 'opaciteValider' ? {duration : 500, delay : 1600} :
                    {duration : 500 , delay : 1050})
                }
            >
              {props => (
                <animated.div className="Competence7" style={{...props, opacity:props.opacite}}>
                  <div className="ContenaireCompetence1">
                    <p className="TexteCompetence1">
                      Python
                    </p>
                  </div>
                  <animated.div className="ContenaireImageValider" style={{opacity : props.opaciteValider}}>
                    <img
                        className="Image-Valider-Competence"
                        alt="logo valider"
                        src={"/ValiderCompetence.png"}
                    />
                  </animated.div>
                </animated.div>
              )}
            </Spring>
          </div>
        </div>
      )
    }
  }