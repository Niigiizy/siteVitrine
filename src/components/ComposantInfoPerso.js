import React from 'react';
import {
    Spring, 
    animated
  } from 'react-spring/renderprops'

export default class ComposantInfoPerso extends React.Component {

    constructor() {
      super()
    }
  
    render() {
      return (
        <div 
          className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "ContenaireInfoPerso_mobile" : "ContenaireInfoPerso"}
        >
          <div 
            className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "ContenairePrincipalInfoPerso_mobile" : "ContenairePrincipalInfoPerso"}
          >
            <Spring
              native
              from={{transform:"rotateX(90deg) translateZ(-500px) translateY(-50vh)"}}
              to={{transform:"rotateX(0deg) translateZ(0px) translateY(0vh)"}}
            >
              { props => (
                <animated.div className="CarteVisite" style={props}>
                  <div className="CarteVisiteGauche">
                    <p className="TexteCarteVisiteGauche" >
                      <span style={{color: "#0abde3"}}>N</span>om : <br/>ANGEON<br/>   
                      <br/>                                                        
                      <span style={{color: "#0abde3"}}>P</span>renom : <br/>NICOLAS<br/>
                      <br/> 
                      <span style={{color: "#0abde3"}}>S</span>exe : <br/>Homme<br/> 
                      <br/> 
                      <span style={{color: "#0abde3"}}>A</span>ge : <br/> 30 ans
                    </p>
                  </div>
                  <div className="CarteVisiteDroite">
                    <p className="TexteCarteVisiteDroite">
                      <span style={{color: "#0abde3"}}>D</span>iplôme :<br/> 
                      Baccalauréat Scientifique<br/> 
                      licence mathématique appliqué<br/> <br/> 
                      <span style={{color: "#0abde3"}}>I</span>ntérêts :<br/> 
                      Science, Informatique, Sport
                    </p>
                  </div>
                </animated.div>
              )}
            </Spring>
          </div>
        </div>
      )
    }
  }