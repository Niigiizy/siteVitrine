import React from 'react';
import logo from './logo.svg'
import {Spring, animated} from 'react-spring/renderprops'
import './App.css';
import {
  HashRouter ,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      offset : 0,
      boutonClique : 'home',
      rotat : false,
      rotat2 : false,
      rotat3 : false, 
      rotat4 : false,
      rotat5 : false,
      etapeRotat : 0,
      remiseEtapeAZero : false,
      
    }
    this.tableauImageCouleur = [ 
      [ "./infoPerso-portefolio.png", "#0abde3", "infoPerso", "20%", "14%", "60%", "60%", "/infoPerso", "info perso" ],
      [ "./apercu-portfolio-bleu.png", "#4169E1", "apercu", "20%", "25%", "60%", "50%", "/apercu", "aperçu" ],
      [ "./home-portefolio-blanc.png", "#5f27cd", "home", "20%", "24%", "60%", "50%", "/home" ],
      [ "./contact-portfolio-bleu.png", "#00008B", "contact", "20%", "24%", "60%", "50%", "/contact", "contact" ],
      [ "./competence-portefolio.png", "#222f3e", "competence", "20%", "15%", "60%", "70%", "/competence", "savoir faire" ],
    ]
    this.choixImageCouleur = () => {
      switch (this.state.boutonClique) {
        case 'home':
          return [ 
            [ "./infoPerso-portefolio.png", "#0abde3", "infoPerso", "20%", "14%", "60%", "60%", "/infoPerso", "info perso" ],
            [ "./apercu-portfolio-bleu.png", "#4169E1", "apercu", "20%", "25%", "60%", "50%", "/apercu", "aperçu" ],
            [ "./home-portefolio-blanc.png", "#5f27cd", "home", "20%", "24%", "60%", "50%", "/home" ],
            [ "./contact-portfolio-bleu.png", "#00008B", "contact", "20%", "24%", "60%", "50%", "/contact", "contact" ],
            [ "./competence-portefolio.png", "#222f3e", "competence", "20%", "15%", "60%", "70%", "/competence", "savoir faire" ],
          ]
          break;
        case 'contact':
          return [ 
            [ "./infoPerso-portefolio.png", "#0abde3", "infoPerso", "20%", "14%", "60%", "60%", "/infoPerso", "info perso" ],
            [ "./apercu-portfolio-bleu.png", "#4169E1", "apercu", "20%", "25%", "60%", "50%", "/apercu", "aperçu" ],
            [ "./contact-portfolio-bleu-blanc.png", "#00008B", "contact", "20%", "24%", "60%", "50%", "/contact" ],
            [ "./competence-portefolio.png", "#222f3e", "competence", "20%", "15%", "60%", "70%", "/competence", "savoir faire" ],
            [ "./home-portefolio.png", "#5f27cd", "home", "20%", "24%", "60%", "50%", "/home", "home" ],
          ]
          break;
        case 'competence':
          return [ 
            [ "./infoPerso-portefolio.png", "#0abde3", "infoPerso", "20%", "14%", "60%", "60%", "/infoPerso", "info perso" ],
            [ "./apercu-portfolio-bleu.png", "#4169E1", "apercu", "20%", "25%", "60%", "50%", "/apercu", "aperçu" ],
            [ "./competence-portefolio-blanc.png", "#222f3e", "competence", "20%", "15%", "60%", "70%", "/competence" ],
            [ "./contact-portfolio-bleu.png", "#00008B", "contact", "20%", "24%", "60%", "50%", "/contact", "contact" ],
            [ "./home-portefolio.png", "#5f27cd", "home", "20%", "24%", "60%", "50%", "/home", "home" ],
          ]
          break;
        case 'apercu':
          return [ 
            [ "./infoPerso-portefolio.png", "#0abde3", "infoPerso", "20%", "14%", "60%", "60%", "/infoPerso", "info perso" ],
            [ "./competence-portefolio.png", "#222f3e", "competence", "20%", "15%", "60%", "70%", "/competence", "savoir faire" ],
            [ "./apercu-portfolio-bleu-blanc.png", "#4169E1", "apercu", "20%", "25%", "60%", "50%", "/apercu" ],
            [ "./contact-portfolio-bleu.png", "#00008B", "contact", "20%", "24%", "60%", "50%", "/contact", "contact" ],
            [ "./home-portefolio.png", "#5f27cd", "home", "20%", "24%", "60%", "50%", "/home", "home" ],
          ]
          break;
        case 'infoPerso':
          return [ 
            [ "./competence-portefolio.png", "#222f3e", "competence", "20%", "15%", "60%", "70%", "/competence", "savoir faire" ],
            [ "./apercu-portfolio-bleu.png", "#4169E1", "apercu", "20%", "25%", "60%", "50%", "/apercu", "aperçu" ],
            [ "./infoPerso-portefolio-blanc.png", "#0abde3", "infoPerso", "20%", "14%", "60%", "60%", "/infoPerso" ],
            [ "./contact-portfolio-bleu.png", "#00008B", "contact", "20%", "24%", "60%", "50%", "/contact", "contact" ],
            [ "./home-portefolio.png", "#5f27cd", "home", "20%", "24%", "60%", "50%", "/home", "home" ],
          ]
          break;
        default:
          break;
      }
    }
  }

  path = React.createRef()
  
  

  componentDidMount() {
  }

  componentDidUpdate() {
    if (this.state.etapeRotat === 1) {
      this.setState({ etapeRotat : 2 })
      
    } else if ( this.state.etapeRotat === 2 && !this.state.remiseEtapeAZero) {
      
      this.setState({ remiseEtapeAZero : true})
    } else if (this.state.etapeRotat === 2 && this.state.remiseEtapeAZero) {
      this.tableauImageCouleur = this.choixImageCouleur()
      setTimeout(() => {
        this.setState({ remiseEtapeAZero : false, etapeRotat : 0});
      }, 400)
    }
    
  }

  render() {
    // console.log(window.innerHeight)
    // console.log(window.innerWidth)
    // console.log(window.navigator.userAgent)
    // console.log(window.navigator.userAgent.indexOf('Mobi') !== -1)
    // console.log(this.state)
    // const offset = this.state.offset
    if (window.navigator.userAgent.indexOf('Mobi') !== -1) {
      return (
      <div>
        <p>
          site mobile
        </p>
      </div>   
      )
    }
    else {
      return (
        <HashRouter>
          <div className="App-web" >
            <div 
              className="ContenaireBoutonNavigation"
              style={{
                minHeight  : this.state.boutonClique === "apercu" ? "700px" : "400px"
              }}
            >
              {/*  Animation Bouton 1 */}
              <Spring
                native
                to={(() => {
                  if (this.state.rotat && this.state.etapeRotat === 0) {
                    return {transform : `perspective(600px) rotateY(0deg)`}
                  } else if (!this.state.rotat && this.state.etapeRotat === 0){
                    return {transform : `perspective(600px) rotateY(180deg)`}
                  } else if (this.state.etapeRotat === 1) {
                    return {transform : `perspective(600px) rotateY(450deg)`}
                  } else if (this.state.etapeRotat === 2) {
                    return {transform: `perspective(600px) rotateY(1080deg)`}
                  }
                }
                  )()
                }
              >
                { props => (
                  
                  <animated.div 
                    className="Bouton-1-derriere"
                    style={{
                        backgroundColor: this.tableauImageCouleur[0][1],
                        ...props
                    }}
                  
                  >
                      <p
                        style={{
                          color : 'white',
                          fontSize : '2.5vh',
                          fontFamily : 'cursive',
                          textAlign : 'center'
                      }}
                      >
                        {this.tableauImageCouleur[0][8]}
                      </p>
                  </animated.div >
                )}
              </Spring>
              <Spring
                native
                to={(() => {
                  if (this.state.rotat && this.state.etapeRotat === 0) {
                    return {transform : `perspective(600px) rotateY(180deg)`}
                  } else if (!this.state.rotat && this.state.etapeRotat === 0){
                    return {transform : `perspective(600px) rotateY(0deg)`}
                  } else if (this.state.etapeRotat === 1) {
                    return {transform : `perspective(600px) rotateY(450deg)`}
                  } else if (this.state.etapeRotat === 2) {
                    return {transform: `perspective(600px) rotateY(1080deg)`}
                  }
                }
                  )()
                }
              >
                { props => (
                  <animated.div 
                    className="Bouton-1-devant"
                    style={{
                      borderColor: this.tableauImageCouleur[0][1],
                      ...props
                    }}
                  >
                    <img
                      className="Image-Bouton-1"
                      src={this.tableauImageCouleur[0][0]}
                      style={{
                        marginLeft : this.tableauImageCouleur[0][3],
                        marginTop : this.tableauImageCouleur[0][4],
                        width: this.tableauImageCouleur[0][5],
                        height : this.tableauImageCouleur[0][6],
                        backfaceVisibility: "hidden",
                        ...props
                      }}
                    >
                    </img>
                  </animated.div >
                )}
              </Spring>
              <Link to={this.tableauImageCouleur[0][7]}>
                <div
                  className="Gestion-rotat-1"
                  onPointerEnter={() => this.setState( { rotat : true } )} 
                  onMouseOut={() => this.setState( { rotat : false } ) }
                  onClick={() => 
                    this.setState( {etapeRotat : 1, boutonClique : this.tableauImageCouleur[0][2]} )
                  }
                >
                
                </div>
              </Link>
              
              {/* Animation Bouton 2 */}
              <Spring
                native
                to={(() => {
                  if (this.state.rotat2 && this.state.etapeRotat === 0) {
                    return {transform : `perspective(600px) rotateY(180deg)`}
                  } else if (!this.state.rotat2 && this.state.etapeRotat === 0){
                    return {transform : `perspective(600px) rotateY(0deg)`}
                  } else if (this.state.etapeRotat === 1) {
                    return {transform : `perspective(600px) rotateY(450deg)`}
                  } else if (this.state.etapeRotat === 2) {
                    return {transform: `perspective(600px) rotateY(1080deg)`}
                  }
                }
                  )()
                }
              >
                { props => (
                  <animated.div 
                    className="Bouton-2-devant"
                    onClick={ () => console.log("clik") }
                    style={{
                      borderColor: this.tableauImageCouleur[1][1],
                      ...props
                    }}
                  >
                      <img
                        className="Image-2"
                        src={this.tableauImageCouleur[1][0]}
                        style={{
                          marginLeft : this.tableauImageCouleur[1][3],
                          marginTop : this.tableauImageCouleur[1][4],
                          width: this.tableauImageCouleur[1][5],
                          height : this.tableauImageCouleur[1][6],
                          backfaceVisibility: "hidden",
                          ...props
                        }}
                      >
                      </img>
                  </animated.div >
                )}
              </Spring>
              <Spring
                native
                to={(() => {
                  if (this.state.rotat2 && this.state.etapeRotat === 0) {
                    return {transform : `perspective(600px) rotateY(0deg)`}
                  } else if (!this.state.rotat2 && this.state.etapeRotat === 0){
                    return {transform : `perspective(600px) rotateY(180deg)`}
                  } else if (this.state.etapeRotat === 1) {
                    return {transform : `perspective(600px) rotateY(450deg)`}
                  } else if (this.state.etapeRotat === 2) {
                    return {transform: `perspective(600px) rotateY(1080deg)`}
                  }
                }
                  )()
                }
              >
                { props => (
                  <animated.div 
                    className="Bouton-2-derriere"
                    onClick={ () => console.log("clik") }
                    style={{
                      backgroundColor : this.tableauImageCouleur[1][1],
                      borderColor: this.tableauImageCouleur[1][1],
                      ...props
                    }}
                  >
                      <p
                        style={{
                          color : 'white',
                          fontSize : '2.5vh',
                          fontFamily : 'cursive',
                          textAlign : 'center'
                      }}
                      >
                        {this.tableauImageCouleur[1][8]}
                      </p>
                  </animated.div>
                )}
              </Spring>
              <Link to={this.tableauImageCouleur[1][7]}>
                <div
                  className="Gestion-rotat-2"
                  onMouseEnter={() => this.setState( { rotat2 : true } )} 
                  onMouseOut={() => this.setState( { rotat2 : false } ) }
                  onClick={() => 
                    this.setState( {etapeRotat : 1, boutonClique : this.tableauImageCouleur[1][2]} )
                  }
                >

                </div>
              </Link>
              {/* Animation Bouton 3 */}
              <Spring
                native
                to={(() => {
                  if (this.state.rotat3 && this.state.etapeRotat === 0) {
                    return {transform : `perspective(600px) rotateY(180deg)`}
                  } else if (!this.state.rotat3 && this.state.etapeRotat === 0){
                    return {transform : `perspective(600px) rotateY(0deg)`}
                  } else if (this.state.etapeRotat === 1) {
                    return {transform : `perspective(600px) rotateY(450deg)`}
                  } else if (this.state.etapeRotat === 2) {
                    return {transform: `perspective(600px) rotateY(1080deg)`}
                  }
                }
                  )()
                }
              >
                { props => (
                  <animated.div 
                    className="Bouton-3-devant"
                    onClick={ () => console.log("clik") }
                    style={{
                      backgroundColor: this.tableauImageCouleur[2][1],
                      borderColor: this.tableauImageCouleur[2][1],
                      left: this.tableauImageCouleur[2][1],
                      bottom: this.tableauImageCouleur[2][2],
                      ...props 
                    }}
                  >
                    <img
                      className="Image-3"
                      src={this.tableauImageCouleur[2][0]}
                      style={{
                        marginLeft : this.tableauImageCouleur[2][3],
                        marginTop : this.tableauImageCouleur[2][4],
                        width: this.tableauImageCouleur[2][5],
                        height : this.tableauImageCouleur[2][6],
                        backfaceVisibility: "hidden",
                        ...props
                      }}
                    >
                    </img>
                  </animated.div >
                )}
              </Spring>
              {/* Animation Bouton 4 */}
              <Spring
                native
                to={(() => {
                  if (this.state.rotat4 && this.state.etapeRotat === 0) {
                    return {transform : `perspective(600px) rotateY(180deg)`}
                  } else if (!this.state.rotat4 && this.state.etapeRotat === 0){
                    return {transform : `perspective(600px) rotateY(0deg)`}
                  } else if (this.state.etapeRotat === 1) {
                    return {transform : `perspective(600px) rotateY(450deg)`}
                  } else if (this.state.etapeRotat === 2) {
                    return {transform: `perspective(600px) rotateY(1080deg)`}
                  }
                }
                  )()
                }
              >
                { props => (
                  <animated.div 
                    className="Bouton-4-devant"
                    onClick={ () => console.log("clik") }
                    style={{
                      borderColor: this.tableauImageCouleur[3][1],
                      ...props
                    }}
                  >
                    <img
                      className="Image-4"
                      src={this.tableauImageCouleur[3][0]}
                      style={{
                        marginLeft : this.tableauImageCouleur[3][3],
                        marginTop : this.tableauImageCouleur[3][4],
                        width: this.tableauImageCouleur[3][5],
                        height : this.tableauImageCouleur[3][6],
                        backfaceVisibility: "hidden",
                        ...props
                      }}
                    >
                    </img>
                  </animated.div >
                )}
              </Spring>
              <Spring
                native
                to={(() => {
                  if (this.state.rotat4 && this.state.etapeRotat === 0) {
                    return {transform : `perspective(600px) rotateY(0deg)`}
                  } else if (!this.state.rotat4 && this.state.etapeRotat === 0){
                    return {transform : `perspective(600px) rotateY(180deg)`}
                  } else if (this.state.etapeRotat === 1) {
                    return {transform : `perspective(600px) rotateY(450deg)`}
                  } else if (this.state.etapeRotat === 2) {
                    return {transform: `perspective(600px) rotateY(1080deg)`}
                  }
                }
                  )()
                }
              >
                { props => (
                  <animated.div 
                    className="Bouton-4-derriere"
                    onClick={ () => console.log("clik") }
                    style={{
                      backgroundColor: this.tableauImageCouleur[3][1],
                      ...props
                    }}
                  >
                      <p
                        style={{
                          color : 'white',
                          fontSize : '2.5vh',
                          fontFamily : 'cursive',
                          textAlign : 'center'
                      }}
                      >
                        {this.tableauImageCouleur[3][8]}
                      </p>
                  </animated.div>
                )}
              </Spring>
              
              <Link to={this.tableauImageCouleur[3][7]}>
                <div
                  className="Gestion-rotat-4"
                  onMouseEnter={() => this.setState( { rotat4 : true } )} 
                  onMouseOut={() => this.setState( { rotat4 : false } ) }
                  onClick={() => 
                    this.setState( {etapeRotat : 1, boutonClique : this.tableauImageCouleur[3][2] } )
                  }
                >
                </div>
              </Link>
            
              {/* Animation Bouton 5 */}
              <Spring
                native
                to={(() => {
                  if (this.state.rotat5 && this.state.etapeRotat === 0) {
                    return {transform : `perspective(600px) rotateY(180deg)`}
                  } else if (!this.state.rotat5 && this.state.etapeRotat === 0){
                    return {transform : `perspective(600px) rotateY(0deg)`}
                  } else if (this.state.etapeRotat === 1) {
                    return {transform : `perspective(600px) rotateY(450deg)`}
                  } else if (this.state.etapeRotat === 2) {
                    return {transform: `perspective(600px) rotateY(1080deg)`}
                  }
                }
                  )()
                }
              >
                { props => (
                  <animated.div 
                    className="Bouton-5-devant"
                    onClick={ () => console.log("clik") }
                    style={{
                      borderColor: this.tableauImageCouleur[4][1],
                      ...props
                    }}
                  >
                    <img
                      className="Image-5"
                      src={this.tableauImageCouleur[4][0]}
                      style={{
                        marginLeft : this.tableauImageCouleur[4][3],
                        marginTop : this.tableauImageCouleur[4][4],
                        width: this.tableauImageCouleur[4][5],
                        height : this.tableauImageCouleur[4][6],
                        backfaceVisibility: "hidden",
                        ...props
                      }}
                    >
                    </img>
                  </animated.div >
                )}
              </Spring>
              <Spring
              native
              to={(() => {
                if (this.state.rotat5 && this.state.etapeRotat === 0) {
                  return {transform : `perspective(600px) rotateY(0deg)`}
                } else if (!this.state.rotat5 && this.state.etapeRotat === 0){
                  return {transform : `perspective(600px) rotateY(180deg)`}
                } else if (this.state.etapeRotat === 1) {
                  return {transform : `perspective(600px) rotateY(450deg)`}
                } else if (this.state.etapeRotat === 2) {
                  return {transform: `perspective(600px) rotateY(1080deg)`}
                }
              }
                )()
              }
            >
              { props => (
                <animated.div 
                  className="Bouton-5-derriere"
                  onClick={ () => console.log("clik") }
                  style={{
                    backgroundColor: this.tableauImageCouleur[4][1],
                    ...props
                  }}
                
                >
                    <p
                      style={{
                        color : 'white',
                        fontSize : '2.5vh',
                        fontFamily : 'cursive',
                        textAlign : 'center'
                    }}
                    >
                      {this.tableauImageCouleur[4][8]}
                    </p>
                </animated.div >
              )}
            </Spring>
              
              <Link to={this.tableauImageCouleur[4][7]}>
                <div
                  className="Gestion-rotat-5"
                  onMouseEnter={() => this.setState( { rotat5 : true } )} 
                  onMouseOut={() => this.setState( { rotat5 : false } ) }
                  onClick={() => 
                    this.setState( {etapeRotat : 1, boutonClique : this.tableauImageCouleur[4][2]} )
                  }
                >

                </div>
              </Link>
            </div>
            <Spring
              native
              to={{ 
                couleurBordure : this.tableauImageCouleur[2][1]
              }}
            >
              {props => (
              <animated.div 
                className="BordureArrondiGauche" 
                style={{ 
                  backgroundColor : props.couleurBordure,
                  minHeight  : this.state.boutonClique === "apercu" ? "730px" : "400px"
                }}
              >

              </animated.div>
              )
              }
            </Spring>
            <Switch>
              <Route path="/home" children={<ComposantHome/>} />
              <Route path="/infoPerso" children={<ComposantInfoPerso/>} />
              <Route path="/apercu" children={<ComposantApercu/>} />
              <Route path="/contact" children={<ComposantContact/>} />
              <Route path="/competence" children={<ComposantCompetence/>} />
            </Switch>
          </div>
        </HashRouter>
      )
    }
  }
}

class ComposantHome extends React.Component {

  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="ContenaireHome" >
            <div className="Contenaire-Description-global">
              <p
                className="DescriptionGlobal1"
              >
                <span style={{color: "#5f27cd"}}>D</span>éveloppeur web et mobile <span style={{color: "#5f27cd"}}>Fullstack</span>, <span style={{color: "#5f27cd"}}>Autodidact</span> 
              </p>
              <p
                className="DescriptionGlobal2"
              >
                en <span style={{color: "#5f27cd"}}>apprentissage perpétuel</span>
              </p>
            </div>
            <div className="Contenaire-phrase-daccroche">
              
            </div>
            <div className="Contenaire-anime">
              <div 
                className="Anime"
                onMouseEnter={() => console.log('souris entre')} 
                onMouseOut={() => console.log('souris sort') }
              >
                <svg 
                  version="1.0" 
                  xmlns="http://www.w3.org/2000/svg"  
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(7,5)"
                    stroke="#5f27cd"
                  >
                    <Spring
                      native
                      from={{ x: 47024.03125, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={ 
                        key => (key === 'x' ? {duration : 300} : {duration : 300 , delay : 300})
                      }
                    >
                      {props => (
                        // lettre P Parsekolepeu
                          <animated.path
                            fill={props.remplissage}
                            strokeWidth="200px"
                            transform="translate(10,10) scale(0.0010000,-0.0010000)"
                            strokeDashoffset={props.x}
                            strokeDasharray={47024.03125}
                            d="M0 0 c-982 -54 -1904 -296 -2760 -724 -742 -371 -1164 -759
                            -1296 -1190 -25 -81 -28 -105 -28 -240 0 -143 2 -156 37 -275 49 -170 80 -245
                            100 -244 11 1 23 -18 38 -62 13 -35 28 -64 35 -64 7 0 50 48 95 108 321 416
                            648 746 1014 1022 674 507 1423 794 2310 886 213 22 740 26 885 6 495 -67 866
                            -238 1133 -522 90 -96 139 -178 183 -310 54 -159 67 -270 61 -514 -9 -363 -70
                            -625 -217 -933 -117 -244 -263 -448 -464 -648 -443 -440 -1037 -745 -1722
                            -883 -255 -52 -603 -92 -802 -92 -91 0 -92 0 -87 23 3 12 64 321 135 687 72
                            366 173 879 225 1140 124 625 135 688 135 791 0 97 -23 186 -61 240 -13 18
                            -35 58 -50 89 -31 66 -79 115 -139 144 -40 18 -62 21 -185 20 -130 -1 -152 -4
                            -301 -43 -201 -51 -654 -203 -654 -218 0 -3 16 -31 37 -61 20 -30 47 -87 61
                            -126 23 -66 24 -80 19 -211 -3 -89 -17 -207 -37 -323 -23 -139 -379 -1930
                            -405 -2039 l-5 -21 -113 33 c-453 135 -844 328 -1162 574 -43 33 -85 61 -91
                            61 -7 0 -19 -30 -28 -67 -55 -244 -44 -372 44 -513 22 -36 55 -90 72 -120 140
                            -239 516 -448 1061 -590 76 -20 87 -26 87 -45 0 -12 -124 -638 -275 -1391
                            -273 -1366 -326 -1640 -344 -1808 -13 -113 -1 -175 44 -225 18 -20 40 -54 49
                            -76 25 -59 73 -103 130 -120 117 -35 386 -11 619 55 190 53 487 178 487 205 0
                            8 -11 54 -25 102 -47 160 -43 262 21 613 25 134 501 2490 510 2521 4 14 44 17
                            347 22 423 7 657 30 997 97 811 161 1566 529 2195 1073 142 122 388 375 490
                            502 236 295 419 639 513 965 77 266 106 499 99 795 -9 376 -65 595 -232 905
                            -183 338 -382 539 -706 710 -474 249 -1202 357 -2079 309z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 48580.640625, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 300} : {duration : 300 , delay : 600})
                      }
                    >
                      {props => (
                        // lettre a pArsekonlepeu
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(15,13) scale(0.0010000,-0.0010000)"
                            strokeWidth="200px"
                            strokeDasharray={48580.640625}
                            d="M0 0 c-856 -50 -1600 -493 -2240 -1334 -521 -684 -814 -1426
                            -912 -2304 -25 -227 -25 -777 0 -955 56 -392 160 -671 371 -988 219 -331 473
                            -498 811 -532 502 -51 1093 256 1788 930 565 547 1061 1211 1479 1976 l104
                            192 0 -522 c-1 -577 6 -690 65 -981 57 -285 148 -509 303 -743 154 -233 313
                            -357 551 -428 76 -22 115 -27 250 -31 188 -6 286 5 470 52 590 152 1304 644
                            2075 1431 479 489 894 1004 1309 1624 237 353 571 904 571 941 0 9 -21 30 -46
                            48 -38 26 -45 36 -39 54 3 12 7 28 8 36 2 13 -388 291 -409 291 -6 0 -68 -84
                            -136 -187 -582 -872 -1134 -1553 -1749 -2158 -577 -567 -1034 -886 -1407 -981
                            -128 -33 -263 -35 -342 -5 -120 45 -181 113 -224 251 -68 213 -91 485 -82 940
                            9 471 32 780 86 1160 32 225 173 938 221 1120 93 352 212 658 341 869 21 35
                            37 70 34 77 -3 8 -29 14 -71 16 l-65 3 36 58 c26 41 33 62 26 69 -16 16 -482
                            3 -612 -17 -355 -55 -580 -179 -677 -373 -21 -42 -38 -78 -39 -80 -1 -1 -78
                            35 -172 81 -589 290 -1176 430 -1677 400z m55 -803 c314 -28 656 -137 1050
                            -335 152 -76 355 -188 473 -262 l48 -29 -72 -99 c-40 -55 -176 -257 -302 -450
                            -1223 -1868 -2092 -2868 -2582 -2970 -74 -15 -195 -8 -280 16 -134 38 -274
                            156 -315 266 -57 153 -80 298 -87 558 -21 752 135 1494 441 2105 369 733 836
                            1143 1367 1199 119 12 131 12 259 1z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 48580.640625, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 900} : {duration : 300 , delay : 1200})
                      }
                    >
                      {props => (
                        // lettre a fAire
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(19,1) scale(0.0010000,-0.0010000)"
                            strokeWidth="200px"
                            strokeDasharray={48580.640625}
                            d="M0 0 c-856 -50 -1600 -493 -2240 -1334 -521 -684 -814 -1426
                            -912 -2304 -25 -227 -25 -777 0 -955 56 -392 160 -671 371 -988 219 -331 473
                            -498 811 -532 502 -51 1093 256 1788 930 565 547 1061 1211 1479 1976 l104
                            192 0 -522 c-1 -577 6 -690 65 -981 57 -285 148 -509 303 -743 154 -233 313
                            -357 551 -428 76 -22 115 -27 250 -31 188 -6 286 5 470 52 590 152 1304 644
                            2075 1431 479 489 894 1004 1309 1624 237 353 571 904 571 941 0 9 -21 30 -46
                            48 -38 26 -45 36 -39 54 3 12 7 28 8 36 2 13 -388 291 -409 291 -6 0 -68 -84
                            -136 -187 -582 -872 -1134 -1553 -1749 -2158 -577 -567 -1034 -886 -1407 -981
                            -128 -33 -263 -35 -342 -5 -120 45 -181 113 -224 251 -68 213 -91 485 -82 940
                            9 471 32 780 86 1160 32 225 173 938 221 1120 93 352 212 658 341 869 21 35
                            37 70 34 77 -3 8 -29 14 -71 16 l-65 3 36 58 c26 41 33 62 26 69 -16 16 -482
                            3 -612 -17 -355 -55 -580 -179 -677 -373 -21 -42 -38 -78 -39 -80 -1 -1 -78
                            35 -172 81 -589 290 -1176 430 -1677 400z m55 -803 c314 -28 656 -137 1050
                            -335 152 -76 355 -188 473 -262 l48 -29 -72 -99 c-40 -55 -176 -257 -302 -450
                            -1223 -1868 -2092 -2868 -2582 -2970 -74 -15 -195 -8 -280 16 -134 38 -274
                            156 -315 266 -57 153 -80 298 -87 558 -21 752 135 1494 441 2105 369 733 836
                            1143 1367 1199 119 12 131 12 259 1z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 48580.640625, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 900} : {duration : 300 , delay : 1200})
                      }
                    >
                      {props => (
                        // lettre r paRsekonlepeu
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(25.8,13) scale(0.0010000,-0.0010000)"
                            strokeWidth="200px"
                            strokeDasharray={48580.640625}
                            d="M0 0 c-16 -3 -74 -14 -128 -25 -944 -196 -2115 -1440 -3222
                            -3426 -65 -117 -120 -211 -122 -210 -4 4 175 915 250 1277 205 980 239 1328
                            148 1508 -54 107 -115 210 -139 235 -15 15 -56 42 -92 60 -64 32 -66 32 -205
                            31 -154 -1 -302 -23 -502 -74 -159 -41 -373 -109 -373 -118 0 -5 14 -27 31
                            -50 41 -56 94 -167 114 -239 37 -134 30 -436 -21 -833 -41 -325 -96 -629 -309
                            -1695 -289 -1444 -329 -1678 -330 -1925 0 -175 13 -228 79 -320 19 -26 44 -67
                            56 -90 88 -172 351 -257 629 -205 93 18 252 71 357 120 l71 32 6 114 c15 293
                            146 663 453 1279 309 619 661 1203 1068 1770 762 1064 1382 1569 1844 1500
                            148 -22 298 -115 374 -231 18 -28 49 -76 69 -107 19 -31 40 -57 46 -59 15 -5
                            235 172 354 284 372 351 494 577 434 808 -19 72 -122 264 -177 331 -86 104
                            -226 193 -370 235 -56 16 -106 22 -218 24 -80 2 -158 1 -175 -1z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 48580.640625, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 1500} : {duration : 300 , delay : 1800})
                      }
                    >
                      {props => (
                        // lettre r faiRe
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(34.6,1) scale(0.0010000,-0.0010000)"
                            strokeWidth="200px"
                            strokeDasharray={48580.640625}
                            d="M0 0 c-16 -3 -74 -14 -128 -25 -944 -196 -2115 -1440 -3222
                            -3426 -65 -117 -120 -211 -122 -210 -4 4 175 915 250 1277 205 980 239 1328
                            148 1508 -54 107 -115 210 -139 235 -15 15 -56 42 -92 60 -64 32 -66 32 -205
                            31 -154 -1 -302 -23 -502 -74 -159 -41 -373 -109 -373 -118 0 -5 14 -27 31
                            -50 41 -56 94 -167 114 -239 37 -134 30 -436 -21 -833 -41 -325 -96 -629 -309
                            -1695 -289 -1444 -329 -1678 -330 -1925 0 -175 13 -228 79 -320 19 -26 44 -67
                            56 -90 88 -172 351 -257 629 -205 93 18 252 71 357 120 l71 32 6 114 c15 293
                            146 663 453 1279 309 619 661 1203 1068 1770 762 1064 1382 1569 1844 1500
                            148 -22 298 -115 374 -231 18 -28 49 -76 69 -107 19 -31 40 -57 46 -59 15 -5
                            235 172 354 284 372 351 494 577 434 808 -19 72 -122 264 -177 331 -86 104
                            -226 193 -370 235 -56 16 -106 22 -218 24 -80 2 -158 1 -175 -1z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 35513.9765625, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 1200} : {duration : 300 , delay : 1500})
                      }
                    >
                      {props => (
                        // lettre s
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(29.1,13) scale(0.0009000,-0.0007200)"
                            strokeWidth="250px"
                            strokeDasharray={35513.9765625}
                            d="M0 0 c-500 -15 -948 -118 -1340 -307 -179 -87 -300 -160 -455
                            -277 -420 -317 -691 -711 -815 -1186 -45 -173 -60 -301 -59 -528 0 -178 3
                            -225 22 -310 61 -283 180 -538 410 -882 246 -367 406 -541 1067 -1158 565
                            -528 778 -745 1001 -1025 170 -214 282 -413 340 -605 24 -79 28 -107 28 -235
                            1 -154 -10 -234 -51 -360 -148 -459 -645 -884 -1205 -1030 -386 -101 -855 -89
                            -1219 30 -356 117 -684 385 -834 680 -97 192 -175 555 -175 817 0 81 -14 100
                            -49 69 -17 -16 -19 -16 -25 -1 -3 9 -6 50 -6 91 0 53 -4 74 -12 74 -23 0 -240
                            -182 -353 -295 -252 -251 -365 -467 -365 -694 0 -262 74 -476 264 -764 295
                            -449 814 -734 1501 -823 159 -21 618 -24 800 -6 627 64 1116 229 1565 527 625
                            414 1005 970 1114 1625 84 507 18 874 -245 1363 -166 309 -320 532 -564 815
                            -170 198 -368 395 -770 765 -730 674 -1019 958 -1105 1082 -60 87 -96 309 -86
                            535 14 348 130 615 375 861 249 250 545 394 905 439 126 16 461 8 581 -14 210
                            -38 437 -126 586 -227 159 -106 318 -263 399 -393 22 -33 47 -72 58 -86 11
                            -14 34 -51 52 -82 17 -32 36 -58 41 -58 16 0 108 150 170 275 75 154 109 271
                            116 400 4 78 2 114 -12 160 -26 91 -132 278 -198 351 -157 171 -470 304 -850
                            359 -90 13 -491 39 -507 33 -3 -1 -45 -3 -95 -5z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 41202.5625, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 1500} : {duration : 300 , delay : 1800})
                      }
                    >
                      {props => (
                        // lettre e parsEkonlepeu
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(33.51,13) scale(0.0010000,-0.001000)"
                            strokeWidth="200px"
                            strokeDasharray={41202.5625}
                            d="M0 0 c-872 -42 -1645 -426 -2264 -1124 -539 -608 -844 -1288
                            -936 -2090 -22 -195 -30 -577 -16 -750 33 -397 112 -699 257 -986 69 -136 184
                            -319 275 -439 299 -394 717 -629 1254 -706 147 -21 512 -24 690 -5 519 54
                            1011 204 1560 476 475 235 912 519 1394 905 904 726 1646 1583 2263 2615 131
                            219 238 414 238 434 0 9 -22 28 -50 44 l-50 27 15 30 c8 16 15 33 15 39 0 7
                            -297 177 -437 250 -20 10 -28 0 -133 -163 -728 -1140 -1587 -2094 -2510 -2788
                            -312 -234 -583 -405 -895 -563 -483 -246 -909 -366 -1350 -382 -458 -16 -777
                            92 -1015 344 -123 129 -192 289 -239 553 -22 121 -44 364 -39 430 l3 45 135 7
                            c485 25 768 64 1133 154 500 125 960 329 1397 620 683 454 1036 966 1066 1551
                            13 246 -27 440 -135 658 -98 196 -159 284 -275 401 -313 313 -737 443 -1351
                            413z m350 -699 c124 -38 211 -101 240 -173 64 -158 61 -486 -7 -712 -53 -181
                            -163 -375 -312 -552 -286 -341 -804 -667 -1321 -833 -220 -70 -550 -136 -777
                            -156 -68 -6 -78 -5 -78 9 0 38 64 321 105 463 164 572 463 1093 845 1475 350
                            348 721 517 1110 504 90 -3 144 -10 195 -25z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 41202.5625, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 3000} : {duration : 300 , delay : 3300})
                      }
                    >
                      {props => (
                        // lettre e parsekonlEpeu
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(67.5,13) scale(0.0010000,-0.001000)"
                            strokeWidth="200px"
                            strokeDasharray={41202.5625}
                            d="M0 0 c-872 -42 -1645 -426 -2264 -1124 -539 -608 -844 -1288
                            -936 -2090 -22 -195 -30 -577 -16 -750 33 -397 112 -699 257 -986 69 -136 184
                            -319 275 -439 299 -394 717 -629 1254 -706 147 -21 512 -24 690 -5 519 54
                            1011 204 1560 476 475 235 912 519 1394 905 904 726 1646 1583 2263 2615 131
                            219 238 414 238 434 0 9 -22 28 -50 44 l-50 27 15 30 c8 16 15 33 15 39 0 7
                            -297 177 -437 250 -20 10 -28 0 -133 -163 -728 -1140 -1587 -2094 -2510 -2788
                            -312 -234 -583 -405 -895 -563 -483 -246 -909 -366 -1350 -382 -458 -16 -777
                            92 -1015 344 -123 129 -192 289 -239 553 -22 121 -44 364 -39 430 l3 45 135 7
                            c485 25 768 64 1133 154 500 125 960 329 1397 620 683 454 1036 966 1066 1551
                            13 246 -27 440 -135 658 -98 196 -159 284 -275 401 -313 313 -737 443 -1351
                            413z m350 -699 c124 -38 211 -101 240 -173 64 -158 61 -486 -7 -712 -53 -181
                            -163 -375 -312 -552 -286 -341 -804 -667 -1321 -833 -220 -70 -550 -136 -777
                            -156 -68 -6 -78 -5 -78 9 0 38 64 321 105 463 164 572 463 1093 845 1475 350
                            348 721 517 1110 504 90 -3 144 -10 195 -25z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 41202.5625, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 3600} : {duration : 300 , delay : 3900})
                      }
                    >
                      {props => (
                        // lettre e parsekonlepEu
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(80,13) scale(0.0010000,-0.001000)"
                            strokeWidth="200px"
                            strokeDasharray={41202.5625}
                            d="M0 0 c-872 -42 -1645 -426 -2264 -1124 -539 -608 -844 -1288
                            -936 -2090 -22 -195 -30 -577 -16 -750 33 -397 112 -699 257 -986 69 -136 184
                            -319 275 -439 299 -394 717 -629 1254 -706 147 -21 512 -24 690 -5 519 54
                            1011 204 1560 476 475 235 912 519 1394 905 904 726 1646 1583 2263 2615 131
                            219 238 414 238 434 0 9 -22 28 -50 44 l-50 27 15 30 c8 16 15 33 15 39 0 7
                            -297 177 -437 250 -20 10 -28 0 -133 -163 -728 -1140 -1587 -2094 -2510 -2788
                            -312 -234 -583 -405 -895 -563 -483 -246 -909 -366 -1350 -382 -458 -16 -777
                            92 -1015 344 -123 129 -192 289 -239 553 -22 121 -44 364 -39 430 l3 45 135 7
                            c485 25 768 64 1133 154 500 125 960 329 1397 620 683 454 1036 966 1066 1551
                            13 246 -27 440 -135 658 -98 196 -159 284 -275 401 -313 313 -737 443 -1351
                            413z m350 -699 c124 -38 211 -101 240 -173 64 -158 61 -486 -7 -712 -53 -181
                            -163 -375 -312 -552 -286 -341 -804 -667 -1321 -833 -220 -70 -550 -136 -777
                            -156 -68 -6 -78 -5 -78 9 0 38 64 321 105 463 164 572 463 1093 845 1475 350
                            348 721 517 1110 504 90 -3 144 -10 195 -25z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 41202.5625, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 300} : {duration : 300 , delay : 600})
                      }
                    >
                      {props => (
                        // lettre e lE
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(1.5,1) scale(0.0010000,-0.001000)"
                            strokeWidth="200px"
                            strokeDasharray={41202.5625}
                            d="M0 0 c-872 -42 -1645 -426 -2264 -1124 -539 -608 -844 -1288
                            -936 -2090 -22 -195 -30 -577 -16 -750 33 -397 112 -699 257 -986 69 -136 184
                            -319 275 -439 299 -394 717 -629 1254 -706 147 -21 512 -24 690 -5 519 54
                            1011 204 1560 476 475 235 912 519 1394 905 904 726 1646 1583 2263 2615 131
                            219 238 414 238 434 0 9 -22 28 -50 44 l-50 27 15 30 c8 16 15 33 15 39 0 7
                            -297 177 -437 250 -20 10 -28 0 -133 -163 -728 -1140 -1587 -2094 -2510 -2788
                            -312 -234 -583 -405 -895 -563 -483 -246 -909 -366 -1350 -382 -458 -16 -777
                            92 -1015 344 -123 129 -192 289 -239 553 -22 121 -44 364 -39 430 l3 45 135 7
                            c485 25 768 64 1133 154 500 125 960 329 1397 620 683 454 1036 966 1066 1551
                            13 246 -27 440 -135 658 -98 196 -159 284 -275 401 -313 313 -737 443 -1351
                            413z m350 -699 c124 -38 211 -101 240 -173 64 -158 61 -486 -7 -712 -53 -181
                            -163 -375 -312 -552 -286 -341 -804 -667 -1321 -833 -220 -70 -550 -136 -777
                            -156 -68 -6 -78 -5 -78 9 0 38 64 321 105 463 164 572 463 1093 845 1475 350
                            348 721 517 1110 504 90 -3 144 -10 195 -25z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 41202.5625, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 1800} : {duration : 300 , delay : 2100})
                      }
                    >
                      {props => (
                        // lettre e fairE
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(37.8,1) scale(0.0010000,-0.001000)"
                            strokeWidth="200px"
                            strokeDasharray={41202.5625}
                            d="M0 0 c-872 -42 -1645 -426 -2264 -1124 -539 -608 -844 -1288
                            -936 -2090 -22 -195 -30 -577 -16 -750 33 -397 112 -699 257 -986 69 -136 184
                            -319 275 -439 299 -394 717 -629 1254 -706 147 -21 512 -24 690 -5 519 54
                            1011 204 1560 476 475 235 912 519 1394 905 904 726 1646 1583 2263 2615 131
                            219 238 414 238 434 0 9 -22 28 -50 44 l-50 27 15 30 c8 16 15 33 15 39 0 7
                            -297 177 -437 250 -20 10 -28 0 -133 -163 -728 -1140 -1587 -2094 -2510 -2788
                            -312 -234 -583 -405 -895 -563 -483 -246 -909 -366 -1350 -382 -458 -16 -777
                            92 -1015 344 -123 129 -192 289 -239 553 -22 121 -44 364 -39 430 l3 45 135 7
                            c485 25 768 64 1133 154 500 125 960 329 1397 620 683 454 1036 966 1066 1551
                            13 246 -27 440 -135 658 -98 196 -159 284 -275 401 -313 313 -737 443 -1351
                            413z m350 -699 c124 -38 211 -101 240 -173 64 -158 61 -486 -7 -712 -53 -181
                            -163 -375 -312 -552 -286 -341 -804 -667 -1321 -833 -220 -70 -550 -136 -777
                            -156 -68 -6 -78 -5 -78 9 0 38 64 321 105 463 164 572 463 1093 845 1475 350
                            348 721 517 1110 504 90 -3 144 -10 195 -25z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 50178.82421875, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 1800} : {duration : 300 , delay : 2100})
                      }
                    >
                      {props => (
                        // lettre k parseKonlepeu
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(39.5,10) scale(0.0010000,-0.001000)"
                            strokeWidth="200px"
                            strokeDasharray={50178.82421875}
                            d="M0 0 c-353 -170 -775 -307 -1130 -368 -108 -18 -168 -22 -360
                            -22 -209 -1 -239 2 -325 23 -220 55 -412 157 -563 300 -35 33 -61 51 -67 45
                            -5 -5 -25 -85 -44 -179 -93 -455 -87 -659 27 -827 23 -35 49 -76 57 -92 8 -17
                            39 -56 69 -88 177 -192 571 -217 1076 -68 54 16 101 28 102 26 2 -1 -15 -94
                            -38 -207 -70 -356 -672 -3391 -979 -4934 -297 -1492 -313 -1578 -354 -1870
                            -38 -270 -49 -420 -44 -573 6 -158 26 -232 88 -322 20 -31 45 -71 55 -90 31
                            -60 102 -126 168 -156 53 -24 78 -28 175 -32 63 -3 155 1 205 8 182 25 622
                            146 633 174 3 8 -6 36 -19 62 -37 73 -76 207 -93 314 -31 209 -6 598 66 1040
                            30 178 288 1471 296 1479 8 8 29 -21 89 -124 146 -245 405 -613 590 -835 496
                            -597 1157 -1156 1673 -1414 126 -63 261 -114 392 -149 108 -29 126 -31 300
                            -31 169 -1 194 1 292 26 355 90 705 291 1128 647 148 124 602 575 751 746 564
                            644 1086 1396 1576 2270 50 88 100 179 112 202 l21 43 -47 30 c-27 16 -52 31
                            -56 33 -5 1 -1 19 9 40 10 20 16 38 13 40 -4 3 -425 245 -441 254 -3 2 -30
                            -36 -59 -84 -538 -896 -1602 -2214 -2162 -2678 -329 -273 -628 -404 -961 -422
                            -250 -13 -509 72 -782 256 -171 115 -268 195 -453 376 -310 303 -612 681 -937
                            1169 l-99 148 88 84 c430 410 1123 881 1780 1210 350 175 632 282 862 327 95
                            18 115 25 115 39 0 24 -154 331 -231 460 -112 190 -207 300 -300 350 -105 55
                            -299 15 -559 -117 -364 -186 -872 -561 -1436 -1062 -238 -211 -748 -720 -968
                            -965 -93 -104 -170 -188 -172 -188 -2 0 -1 6 1 13 3 6 70 345 149 752 80 407
                            323 1648 541 2759 217 1110 395 2029 395 2043 0 16 -4 23 -12 20 -7 -3 -30
                            -12 -50 -21 -44 -19 -44 -20 -23 74 19 84 18 90 -2 89 -10 0 -67 -24 -128 -53z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 37922.4609375, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 2100} : {duration : 300 , delay : 2400})
                      }
                    >
                      {props => (
                        // lettre o parsekOnlepeu
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(47,13) scale(0.0010000,-0.001000)"
                            strokeWidth="200px"
                            strokeDasharray={37922.4609375}
                            d="M0 0 c-42 -56 -104 -188 -124 -261 -8 -33 -18 -101 -22 -150
                            -7 -111 17 -218 77 -342 21 -46 37 -83 35 -83 -3 0 -47 8 -97 17 -124 23 -443
                            23 -618 -1 -488 -65 -959 -268 -1350 -582 -112 -91 -363 -336 -458 -449 -454
                            -540 -688 -1128 -721 -1812 -31 -648 102 -1164 427 -1658 211 -321 401 -517
                            683 -704 490 -325 1139 -448 1834 -345 745 110 1424 501 1995 1151 541 615
                            856 1304 954 2083 23 178 37 476 29 607 -5 102 -4 113 11 113 9 0 69 -16 134
                            -35 274 -81 557 -140 817 -170 152 -18 488 -20 625 -5 327 36 669 139 980 295
                            186 94 450 258 450 281 0 21 -92 190 -218 399 -62 105 -115 191 -117 193 -2 2
                            -58 -26 -125 -63 -234 -128 -487 -229 -709 -284 -239 -60 -419 -76 -669 -61
                            -549 33 -1046 202 -1563 532 -65 41 -89 65 -157 156 -170 228 -399 469 -593
                            626 -282 227 -633 410 -966 502 -124 34 -354 77 -461 87 -52 4 -53 4 -83 -37z
                            m485 -1505 c66 -12 132 -29 147 -39 15 -9 82 -55 150 -100 133 -90 365 -210
                            494 -256 44 -16 86 -34 94 -41 16 -15 43 -124 74 -295 19 -112 22 -158 22
                            -450 0 -363 -11 -477 -70 -775 -133 -669 -444 -1261 -886 -1690 -278 -270
                            -550 -418 -893 -487 -147 -30 -442 -32 -581 -5 -284 56 -519 180 -716 376
                            -216 217 -321 436 -386 806 -25 140 -25 581 -1 742 93 618 363 1148 818 1604
                            373 375 762 575 1230 633 91 11 389 -2 504 -23z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 44484.265625, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 2400} : {duration : 300 , delay : 2700})
                      }
                    >
                      {props => (
                        // lettre n parsekoNlepeu
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(56,13.5) scale(0.0010000,-0.001000)"
                            strokeWidth="200px"
                            strokeDasharray={44484.265625}
                            d="M0 0 c-884 -147 -1838 -1252 -2901 -3358 -77 -154 -142 -277
                            -143 -275 -3 3 33 391 114 1228 84 873 101 1161 81 1340 -14 114 -49 238 -81
                            285 -12 17 -36 59 -55 95 -48 93 -96 144 -170 181 -114 56 -291 50 -521 -17
                            -88 -25 -470 -155 -532 -180 l-33 -13 39 -58 c103 -155 166 -328 197 -543 19
                            -137 19 -462 0 -740 -16 -232 -24 -308 -115 -1205 -186 -1826 -209 -2094 -191
                            -2237 16 -126 44 -205 104 -297 28 -44 65 -102 81 -127 40 -63 132 -129 220
                            -157 61 -19 92 -22 221 -21 130 0 163 4 248 27 113 31 257 85 257 96 0 4 -12
                            36 -27 72 -24 57 -27 77 -27 174 0 130 20 215 96 408 87 221 210 451 906 1682
                            546 966 1027 1683 1414 2105 337 369 623 518 828 434 111 -46 150 -108 193
                            -304 57 -254 74 -516 82 -1205 11 -1019 28 -1372 86 -1795 72 -516 168 -805
                            373 -1113 131 -197 271 -319 446 -387 124 -47 194 -61 345 -67 226 -9 385 28
                            620 142 678 329 1449 1224 2358 2737 240 398 522 898 736 1300 l62 116 -25 19
                            c-13 10 -38 26 -55 35 l-31 17 17 35 c9 20 15 38 12 40 -2 2 -104 63 -227 134
                            -220 129 -223 130 -236 109 -8 -12 -119 -195 -247 -407 -741 -1225 -1280
                            -2047 -1636 -2494 -123 -154 -371 -402 -488 -489 -184 -137 -385 -214 -534
                            -205 -93 6 -158 35 -221 98 -38 38 -50 59 -73 135 -91 300 -120 701 -132 1835
                            -8 785 -24 1054 -80 1386 -52 306 -112 500 -225 730 -128 260 -236 411 -368
                            516 -91 72 -226 140 -337 169 -105 27 -308 34 -425 14z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 35504.6953125, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 2700} : {duration : 300 , delay : 3000})
                      }
                    >
                      {props => (
                        // lettre l parsekonLepeu
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(62.5,10) scale(0.0010000,-0.001000)"
                            strokeWidth="200px"
                            strokeDasharray={35504.6953125}
                            d="M0 0 c-257 -159 -565 -268 -901 -320 -190 -30 -603 -32 -802
                            -6 -342 46 -657 142 -926 282 -57 30 -108 52 -113 49 -12 -7 -3 -228 13 -344
                            13 -91 51 -215 90 -292 52 -103 177 -286 235 -343 158 -156 389 -250 702 -285
                            58 -7 187 -11 297 -9 190 4 194 4 190 -16 -3 -11 -11 -54 -19 -95 -21 -108
                            -395 -1987 -790 -3975 -251 -1259 -273 -1376 -311 -1650 -92 -656 -42 -1153
                            155 -1546 59 -116 176 -306 245 -395 202 -262 454 -418 771 -480 132 -26 367
                            -24 504 5 353 74 709 266 1122 606 166 136 612 580 785 781 635 737 1249 1657
                            1853 2778 l124 228 -35 29 c-19 16 -42 31 -51 34 -22 8 -22 18 -4 53 l14 28
                            -215 148 c-177 121 -218 145 -228 134 -7 -7 -104 -156 -215 -332 -988 -1561
                            -1646 -2481 -2051 -2871 -367 -353 -720 -526 -1079 -528 -203 -1 -318 40 -431
                            152 -55 55 -69 76 -84 126 -94 324 -79 646 66 1435 17 91 304 1586 640 3323
                            335 1737 609 3167 609 3178 0 25 -8 24 -53 -7 -21 -14 -41 -23 -44 -20 -6 5 8
                            101 24 164 8 32 -11 28 -87 -19z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 46626.53515625, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 3300} : {duration : 300 , delay : 3600})
                      }
                    >
                      {props => (
                        // lettre p parsekonlePeu
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(73,12.5) scale(0.0010000,-0.001000)"
                            strokeWidth="200px"
                            strokeDasharray={46626.53515625}
                            d="M0 0 c-77 -35 -389 -137 -530 -173 -391 -102 -741 -151 -1160
                            -162 -551 -15 -979 64 -1247 230 -23 15 -44 22 -47 18 -8 -13 29 -160 80 -320
                            79 -247 239 -529 366 -648 153 -143 356 -204 678 -204 177 0 267 8 483 41 76
                            12 139 20 141 18 2 -2 -58 -317 -134 -699 -77 -382 -290 -1455 -475 -2385
                            -185 -929 -417 -2095 -515 -2590 -98 -495 -231 -1161 -294 -1480 -135 -675
                            -175 -897 -210 -1165 -63 -471 -51 -698 46 -831 17 -24 46 -68 64 -100 43 -73
                            111 -132 183 -160 86 -34 250 -37 416 -9 220 37 585 139 585 163 0 6 -16 48
                            -35 93 -81 189 -104 363 -86 669 13 225 38 451 76 675 40 237 424 2173 433
                            2182 4 4 73 -25 152 -65 330 -165 642 -231 1105 -231 263 -1 361 7 585 44 759
                            128 1446 537 2011 1195 447 521 731 1131 829 1784 84 561 51 1068 -97 1484
                            -45 124 -185 405 -273 545 -309 493 -746 805 -1267 904 -102 20 -150 23 -358
                            23 -209 -1 -256 -4 -365 -24 -430 -81 -821 -271 -1228 -598 -57 -46 -104 -83
                            -106 -83 -2 0 73 379 165 842 93 464 169 853 169 865 0 27 -14 29 -64 8 -20
                            -8 -36 -13 -36 -11 0 2 7 39 15 81 14 73 13 96 -3 94 -4 0 -27 -9 -52 -20z
                            m1363 -2154 c373 -56 697 -301 857 -650 88 -190 148 -422 176 -686 19 -185 14
                            -568 -11 -749 -87 -630 -331 -1153 -738 -1577 -354 -368 -722 -564 -1184 -629
                            -163 -22 -465 -15 -608 16 -282 60 -519 179 -744 373 -50 43 -97 88 -105 100
                            -13 20 14 166 280 1492 161 809 298 1480 303 1491 12 27 216 210 358 321 375
                            292 737 461 1088 506 74 10 238 6 328 -8z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 44467.47265625, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 3900} : {duration : 300 , delay : 4200})
                      }
                    >
                      {props => (
                        // lettre u parsekonlepeU
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(88.5,13.5) scale(0.0010000,-0.001000)"
                            strokeWidth="200px"
                            strokeDasharray={44467.47265625}
                            d="M0 0 c-123 -13 -256 -37 -418 -77 -125 -29 -148 -38 -143 -52
                            3 -9 17 -47 30 -86 28 -77 31 -129 16 -255 -66 -530 -447 -1350 -1143 -2455
                            -290 -460 -573 -858 -833 -1170 -134 -161 -407 -440 -534 -547 -397 -333 -771
                            -449 -1037 -322 -120 57 -155 109 -195 289 -21 94 -18 525 5 695 67 496 214
                            1151 422 1885 105 367 207 762 251 970 21 99 28 158 28 250 1 116 0 122 -30
                            180 -18 33 -46 88 -64 123 -39 76 -84 123 -150 157 -111 56 -128 58 -595 56
                            -236 -1 -432 -4 -436 -7 -4 -2 8 -39 27 -81 49 -113 68 -209 61 -305 -9 -115
                            -64 -371 -172 -807 -231 -929 -393 -1696 -469 -2221 -110 -761 -81 -1153 113
                            -1525 247 -475 543 -717 965 -790 114 -19 328 -19 442 0 284 50 636 235 969
                            510 248 206 614 588 873 914 330 415 691 978 975 1519 41 79 77 140 79 135 3
                            -4 1 -100 -4 -213 -12 -262 -3 -710 17 -910 54 -532 156 -847 385 -1193 185
                            -280 390 -421 690 -473 127 -22 372 -14 515 16 501 107 982 410 1515 956 539
                            553 1076 1304 1657 2319 207 362 453 819 453 843 0 7 -22 26 -50 43 l-50 31
                            16 29 c8 17 14 34 12 39 -3 10 -436 270 -449 270 -4 0 -47 -71 -95 -157 -145
                            -262 -239 -424 -415 -718 -954 -1591 -1786 -2461 -2462 -2576 -37 -6 -114 -9
                            -170 -7 -119 4 -187 30 -259 97 -59 54 -92 117 -122 233 -58 222 -78 500 -65
                            906 16 483 76 956 195 1522 45 212 260 1081 331 1335 45 160 49 256 15 322
                            -12 23 -27 45 -32 48 -6 4 -22 32 -36 63 -42 96 -106 144 -231 177 -70 19
                            -288 27 -398 15z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 27605.783203125, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 0} : {duration : 300 , delay : 300})
                      }
                    >
                      {props => (
                        // lettre L Le
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(-5,-1.9) scale(0.0010000,-0.001000)"
                            strokeWidth="200px"
                            strokeDasharray={27605.783203125}
                            d="M0 0 c-228 -48 -764 -221 -764 -247 0 -5 13 -27 29 -49 47
                            -65 82 -166 88 -252 12 -160 -12 -305 -217 -1333 -156 -783 -642 -3231 -830
                            -4180 -195 -984 -240 -1271 -240 -1535 0 -262 48 -426 189 -653 96 -153 166
                            -235 269 -312 212 -159 480 -252 873 -302 164 -21 779 -23 1099 -4 978 57
                            1929 233 2350 434 249 119 408 327 576 754 45 113 52 143 34 143 -5 0 -33 -9
                            -61 -20 -28 -12 -53 -19 -55 -17 -2 2 10 41 26 87 17 45 28 85 25 88 -3 3 -27
                            -2 -53 -11 -26 -8 -153 -52 -282 -97 -479 -166 -951 -282 -1415 -349 -741
                            -107 -1530 -84 -1920 56 -151 55 -302 149 -343 215 -81 130 -30 585 188 1683
                            249 1253 898 4523 959 4825 95 475 104 538 99 641 -6 92 -9 100 -103 279 -43
                            82 -107 141 -175 163 -74 24 -209 21 -346 -7z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 31764.96875, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 1200} : {duration : 300 , delay : 1500})
                      }
                    >
                      {props => (
                        // lettre i faIre
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(26,1.2) scale(0.0010000,-0.001100)"
                            strokeWidth="200px"
                            strokeDasharray={31764.96875}
                            d="M2195 2930 c-236 -207 -564 -420 -965 -625 -440 -225 -738 -330
                            -990 -348 l-90 -6 -32 -95 c-54 -161 -73 -277 -80 -471 -6 -196 4 -254 53
                            -300 15 -13 36 -47 49 -74 35 -80 104 -125 191 -125 99 0 283 76 477 197 262
                            165 687 495 891 693 271 262 474 566 609 910 73 187 72 192 -22 112 -99 -84
                            -95 -84 -66 -6 62 162 74 204 58 204 -5 0 -42 -30 -83 -66z
                            M0 0 c-277 -43 -745 -143 -752 -160 -2 -6 12 -33 32 -60 51
                            -69 103 -190 120 -279 50 -258 -21 -789 -275 -2070 -183 -925 -206 -1088 -181
                            -1339 30 -305 101 -498 286 -780 246 -374 582 -563 1040 -583 495 -22 1057
                            199 1645 648 903 688 1829 1809 2731 3304 187 310 279 469 279 483 0 6 -22 23
                            -50 39 -27 15 -50 32 -50 36 0 4 7 22 16 40 9 17 13 32 8 34 -5 2 -107 61
                            -227 132 l-218 130 -23 -37 c-12 -20 -72 -116 -131 -212 -520 -840 -1106
                            -1626 -1680 -2255 -173 -190 -559 -572 -716 -708 -425 -369 -772 -582 -1086
                            -669 -64 -18 -106 -22 -233 -22 -143 0 -160 2 -222 26 -76 29 -145 77 -178
                            125 -35 51 -51 129 -57 280 -9 228 5 315 232 1453 228 1142 266 1390 267 1730
                            1 246 -10 291 -126 500 -87 157 -169 211 -331 216 -49 1 -103 0 -120 -2z"
                          />
                        
                      )}
                    </Spring>
                    <Spring
                      native
                      from={{ x: 40963.86328125, remplissage: "#E8DDFD"}}
                      to={{ x: 0, remplissage: "#5f27cd" }}
                      config={
                        key => (key === 'x' ? {duration : 300, delay : 600} : {duration : 300 , delay : 900})
                      }
                    >
                      {props => (
                        // lettre f Faire
                          <animated.path
                            fill={props.remplissage}
                            strokeDashoffset={props.x}
                            transform="translate(18,-2.8) scale(0.0010000,-0.001000)"
                            strokeWidth="200px"
                            strokeDasharray={40963.86328125}
                            d="M0 0 c-421 -106 -924 -178 -1585 -225 -85 -6 -764 -14 -1565
                            -19 -1652 -10 -1977 -21 -2439 -81 -286 -37 -424 -77 -553 -161 -268 -175
                            -475 -488 -601 -908 -60 -200 -60 -199 35 -120 33 28 62 49 63 48 2 -2 -11
                            -51 -28 -110 -17 -59 -28 -110 -24 -114 3 -4 48 27 99 68 342 275 723 435
                            1213 508 131 20 505 40 505 27 0 -6 -587 -2931 -595 -2964 -5 -22 -9 -23 -133
                            -23 -397 0 -609 -86 -781 -318 -100 -136 -318 -538 -307 -567 4 -10 22 -7 78
                            15 40 16 74 27 76 25 2 -2 -13 -38 -32 -80 -20 -43 -36 -82 -36 -86 0 -15 17
                            -11 145 36 168 61 313 101 475 131 163 30 350 43 350 25 0 -7 -90 -466 -200
                            -1019 -624 -3132 -602 -3022 -636 -3226 -41 -258 -33 -349 40 -415 14 -14 26
                            -32 26 -41 0 -34 57 -96 108 -118 181 -78 643 6 1021 184 129 61 122 44 80
                            184 -36 119 -32 263 15 530 20 118 205 1050 409 2070 l372 1855 755 6 c849 7
                            1041 17 1337 69 126 23 254 60 328 97 134 67 266 193 375 355 71 107 217 394
                            206 405 -4 4 -36 -3 -72 -16 -36 -13 -67 -21 -69 -19 -2 2 14 42 35 88 21 47
                            35 88 32 92 -4 4 -52 -9 -107 -28 -214 -75 -504 -143 -765 -179 -308 -42 -430
                            -47 -1158 -52 -392 -3 -718 -3 -725 0 -11 4 52 337 282 1494 l297 1488 1219 6
                            c671 4 1234 9 1250 12 17 4 68 11 115 17 556 71 841 260 1174 784 42 65 76
                            125 76 132 0 18 -18 18 -92 -2 -33 -8 -62 -14 -64 -12 -1 2 17 37 42 78 42 70
                            53 101 37 99 -5 -1 -51 -12 -103 -25z"
                          />
                        
                      )}
                    </Spring>
                  </g>
                </svg>
              </div>
            </div>
          </div>
    )
  }
}

class ComposantInfoPerso extends React.Component {

  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="ContenaireInfoPerso">
        <div className="ContenairePrincipalInfoPerso">
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

class ComposantApercu extends React.Component {

  constructor() {
    super()
    this.state = {
      focus_1_1_1 : false,
      focus_1_1_2 : false,
      focus_1_2_1 : false,
      focus_2_1 : false,
      focus_2_2 : false,
      clique_1_1_1 : false,
      clique_1_1_2 : false,
      clique_1_2_1 : false,
      clique_2_1 : false,
      clique_2_2 : false,
    }
  }

  render() {
    return (
      <div className="ContenaireApercu">
        <div className="ContenairePrincipalApercu">
              <Spring
                native
                from={{ 
                  y : 0, 
                  opacite : 0.85, 
                  opaciteVoirPlus : 0, 
                  opaciteReduir: 0,
                 
                }}
                to={(() => {
                  if (
                    !this.state.focus_1_1_1 && 
                    !this.state.clique_1_1_1 &&
                    !this.state.clique_1_1_2 &&
                    !this.state.clique_1_2_1 &&
                    !this.state.clique_2_1 &&
                    !this.state.clique_2_2 
                  ) {
                    return {
                      y : 1, 
                      transform: "scale(1)", 
                      opaciteVoirPlus : 0,
                      opacite: 0.85,
                      opaciteExtensible : 0.85,
                      opaciteTexteAgrandi: 0,
                      topTexteAgrandi: "0px",
                      rightTexteAgrandi: "0px",
                      widthTexteAgrandi: "230px",
                      heighttexteAgrandi: "410px",
                      widthImageAgrandi: "90%",
                      heightImageAgrandi: "90%",
                      topImageAgrandi: "2.5%",
                      leftImageAgrandi: "5%",
                      largeur: "90%", 
                      hauteur: "90%",
                      margTop : "5%",
                      margLeft: "5%",
                      margRight: "0%"
                    }
                  } else if (
                    this.state.clique_1_1_2 || 
                    this.state.clique_1_2_1 || 
                    this.state.clique_2_1 || 
                    this.state.clique_2_2 
                  ) {
                    return {
                      opacite : 0,
                    }
                  } else if (
                    this.state.clique_1_1_1
                  ) {
                    return {
                      largeur: "310px", 
                      hauteur: "173px", 
                      transform: "scale(1)",
                      opacite : 0,
                      opaciteExtensible : 1,
                      margTop : "-2px",
                      margLeft: "-2px",
                      opaciteTexteAgrandi: 1,
                      topTexteAgrandi: "40%",
                      rightTexteAgrandi: "-460px",
                      widthTexteAgrandi: "320px",
                      heightTexteAgrandi: "615px",
                      widthImageAgrandi: "180%",
                      heightImageAgrandi: "150%",
                      topImageAgrandi: "10%",
                      leftImageAgrandi: "5%",
                      opaciteVoirPlus : 0
                    }
                  } else if ( 
                    this.state.focus_1_1_1 &&
                    !this.state.clique_1_1_1
                  ) {
                    return {
                      transform2 : "scale(1.05)", 
                      opaciteVoirPlus : 1,
                      opacite : 1,
                      opaciteExtensible : 1,
                      opaciteTexteAgrandi: 0,
                      topTexteAgrandi: "0px",
                      rightTexteAgrandi: "0px",
                      widthTexteAgrandi: "230px",
                      heighttexteAgrandi: "410px",
                      widthImageAgrandi: "90%",
                      heightImageAgrandi: "90%",
                      topImageAgrandi: "2.5%",
                      leftImageAgrandi: "5%",
                      largeur: "90%", 
                      hauteur: "90%",
                      margTop : "5%",
                      margLeft: "5%",
                    }
                  } 
                })()}
                config={
                  key => (key === "largeur" || "hauteur" ? {duration: 5} : {duration: 500})
                }
              >
                { props => (
                  <animated.div 
                    className="Apercu_1_1_1"
                    onMouseOver= { () => this.setState( { focus_1_1_1 : true } )} 
                    onMouseOut= { () => this.setState( { focus_1_1_1 : false } ) }
                    onClick= { () => this.setState( { clique_1_1_1 : !this.state.clique_1_1_1 } ) }
                    style={(() => {
                      if (
                        !this.state.focus_1_1_1 && 
                        !this.state.clique_1_1_1 
                      ) {
                        return {
                          transform: props.y.interpolate(
                            [0, 0.6, 0.7, 0.8, 0.9, 1],
                            [ "translateY(300px)", "translateY(-30px)", "translateY(25px)", "translateY(-20px)", "translateY(10px)", "translateY(0px)"]
                          ),
                          opacity : props.opacite
                         }
                      } else if (
                        this.state.clique_1_1_2 || 
                        this.state.clique_1_2_1 || 
                        this.state.clique_2_1 || 
                        this.state.clique_2_2 
                      ) {
                        return {
                          opacity : props.opacite,
                        }
                      } else if ( 
                        this.state.clique_1_1_1 
                      ) {
                        return {
                          transform : props.transform,
                        }
                      } else if ( 
                        this.state.focus_1_1_1 &&
                        !this.state.clique_1_1_1 
                      ){
                        return {
                          transform: props.transform2
                        }
                      }
                    })()
                  }
                  >
                    <animated.div
                      className="Apercu_extensible_1_1_1"
                      style={{
                        width: props.largeur, 
                        height: props.hauteur,
                        opacity: props.opaciteExtensible,
                        marginTop: props.margTop,
                        marginLeft: props.margLeft,
                        boxShadow : props.elevation,
                        backgroundColor: "red"
                      }}
                    >
                      <animated.div
                        className="Image_extensible_1_1_1"
                        id="gif_1_1_1"
                        style={{
                          position: "absolute",
                          top: props.topImageAgrandi,
                          left: props.leftImageAgrandi,
                          width: props.widthImageAgrandi, 
                          height: props.heightImageAgrandi,
                        }}
                      >

                      </animated.div>
                      <animated.div
                        className="Texte_extensible_1_1_1"
                        style={{
                          width: props.widthTexteAgrandi, 
                          height: props.heightTexteAgrandi,
                          backgroundColor: "white",
                          position: "absolute",
                          top: props.topTexteAgrandi,
                          right: props.rightTexteAgrandi,
                          opacity: props.opaciteTexteAgrandi
                        }}
                      >

                      </animated.div>
                    </animated.div>
                    <animated.div 
                      className="VoirPlus"
                      style={{opacity: props.opaciteVoirPlus}}
                    >
                      <p style={{textAlign : "center", color: "white", fontWeight: "bold"}}>Voir plus...</p>
                    </animated.div>
                
                  </animated.div>
                )}
              </Spring>
              <Spring
                native
                from={{ 
                  y : 0, 
                  opacite : 0.85, 
                  opaciteVoirPlus : 0, 
                  opaciteReduir: 0,
                  opaciteTexteAgrandi: 0,
                  topTexteAgrandi: "0px",
                  rightTexteAgrandi: "0px",
                  widthTexteAgrandi: "230px",
                  heighttexteAgrandi: "410px",
                  widthImageAgrandi: "90%",
                  heightImageAgrandi: "90%",
                  topImageAgrandi: "2.5%",
                  leftImageAgrandi: "5%"
                }}
                to={(() => {
                  if (
                    !this.state.focus_1_1_2 && 
                    !this.state.clique_1_1_2 &&
                    !this.state.clique_1_1_1 &&
                    !this.state.clique_1_2_1 &&
                    !this.state.clique_2_1 &&
                    !this.state.clique_2_2 
                  ) {
                    return {
                      y : 1, 
                      transform: "scale(1)", 
                      opaciteVoirPlus : 0,
                      opacite: 0.85,
                      opaciteExtensible : 0.85,
                      opaciteTexteAgrandi: 0,
                      topTexteAgrandi: "0px",
                      rightTexteAgrandi: "0px",
                      widthTexteAgrandi: "230px",
                      heighttexteAgrandi: "410px",
                      widthImageAgrandi: "90%",
                      heightImageAgrandi: "90%",
                      topImageAgrandi: "2.5%",
                      leftImageAgrandi: "5%",
                      largeur: "90%", 
                      hauteur: "90%",
                      margTop : "5%",
                      margLeft: "5%"
                    }
                  } else if (
                    this.state.clique_1_1_1 || 
                    this.state.clique_1_2_1 || 
                    this.state.clique_2_1 || 
                    this.state.clique_2_2 
                  ) {
                    return {
                      opacite : 0,
                      transform: "scale(0)"
                    }
                  } else if (
                    this.state.clique_1_1_2
                  ) {
                    return {
                      largeur: "310%", 
                      hauteur: "173%", 
                      transform: "scale(1)",
                      opacite : 0,
                      opaciteExtensible : 1,
                      margTop : "-2%",
                      margLeft: "-113%",
                      opaciteTexteAgrandi: 1,
                      topTexteAgrandi: "40%",
                      rightTexteAgrandi: "-205%",
                      widthTexteAgrandi: "320px",
                      heightTexteAgrandi: "615px",
                      widthImageAgrandi: "180%",
                      heightImageAgrandi: "150%",
                      topImageAgrandi: "10%",
                      leftImageAgrandi: "-105%",
                      opaciteVoirPlus : 0
                    }
                  }  else if ( 
                    this.state.focus_1_1_2 && 
                    !this.state.clique_1_1_2
                  ) {
                    return {
                      transform2 : "scale(1.05)", 
                      opaciteVoirPlus : 1,
                      opacite : 1,
                      opaciteExtensible : 1,
                      opaciteTexteAgrandi: 0,
                      topTexteAgrandi: "0px",
                      rightTexteAgrandi: "0px",
                      widthTexteAgrandi: "230px",
                      heighttexteAgrandi: "410px",
                      widthImageAgrandi: "90%",
                      heightImageAgrandi: "90%",
                      topImageAgrandi: "2.5%",
                      leftImageAgrandi: "5%",
                      largeur: "90%", 
                      hauteur: "90%",
                      margTop : "5%",
                      margLeft: "5%"
                    }
                  } 
                })()}
                config={
                  key => (key === "largeur" || "hauteur" ? {duration: 5} : {duration: 500})}
              >
                { props => (
                  <animated.div 
                    className="Apercu_1_1_2" 
                    onMouseOver={
                      () => this.setState( { focus_1_1_2 : true } )
                    } 
                    onMouseOut={
                      () => this.setState( { focus_1_1_2 : false } ) 
                    }
                    onClick= { 
                      () => this.setState( { clique_1_1_2 : !this.state.clique_1_1_2 } ) 
                    }
                    style={(() => {
                      if (
                        !this.state.focus_1_1_2 && 
                        !this.state.clique_1_1_2
                      ) {
                        return {
                          transform: props.y.interpolate(
                            [0, 0.6, 0.7, 0.8, 0.9, 1],
                            [ "translateY(-300px)", "translateY(30px)", "translateY(-25px)", "translateY(20px)", "translateY(-10px)", "translateY(0px)"]
                          ),
                          opacity: props.opacite
                         }
                      } else if (
                        this.state.clique_1_1_1 || 
                        this.state.clique_1_2_1 || 
                        this.state.clique_2_1 || 
                        this.state.clique_2_2 
                      ) {
                        return {
                          opacity: props.opacite,
                        }
                      } else if ( 
                        this.state.clique_1_1_2 
                      ) {
                        return {
                          transform : props.transform,
                          // marginTop: props.margTop,
                          // margLeft: props.margLeft
                        }
                      } else if ( 
                        this.state.focus_1_1_2
                      ){
                        return {
                          transform : "scale(1.05)"
                        }
                      }
                    })()}
                  >
                    <animated.div
                      className="Apercu_extensible_1_1_2"
                      style={{
                        width: props.largeur, 
                        height: props.hauteur,
                        opacity: props.opaciteExtensible,
                        marginTop: props.margTop,
                        marginLeft: props.margLeft,
                        boxShadow : props.elevation,
                        backgroundColor: "#4169E1"
                      }}
                    >
                      <animated.div
                        className="Image_extensible_1_1_1"
                        id="gif_1_1_2"
                        style={{
                          position: "absolute",
                          top: props.topImageAgrandi,
                          left: props.leftImageAgrandi,
                          width: props.widthImageAgrandi, 
                          height: props.heightImageAgrandi,
                        }}
                      >

                      </animated.div>
                      <animated.div
                        className="Texte_extensible_1_1_1"
                        style={{
                          width: props.widthTexteAgrandi, 
                          height: props.heightTexteAgrandi,
                          backgroundColor: "white",
                          position: "absolute",
                          top: props.topTexteAgrandi,
                          right: props.rightTexteAgrandi,
                          opacity: props.opaciteTexteAgrandi
                        }}
                      >

                      </animated.div>
                    </animated.div>
                    <animated.div 
                      className="VoirPlus"
                      style={{
                        opacity: props.opaciteVoirPlus
                      }}
                    >
                      <p style={{
                        textAlign : "center", 
                        color: "white", 
                        fontWeight: "bold"
                      }}>Voir plus...</p>
                    </animated.div>
                  </animated.div>
                )}
              </Spring>
              <Spring
                native
                from={{ 
                  y : 0, 
                  opacite : 0.85, 
                  opaciteVoirPlus : 0, 
                  opaciteReduir: 0,
                  opaciteExtensible : 0.85,
                  transform: "scale(1)", 
                  transformAgrandi: "scale(1)",
                  largeur: "95%", 
                  hauteur: "90%",
                  margBot : "2.5%",
                  margLeft: "2.5%"
                }}
                to={(() => {
                  if (
                    !this.state.focus_1_2_1 && 
                    !this.state.clique_1_2_1 &&
                    !this.state.clique_1_1_1 &&
                    !this.state.clique_1_1_2 &&
                    !this.state.clique_2_1 &&
                    !this.state.clique_2_2 
                  ) {
                    return {
                      y : 1, 
                      transform: "scale(1)", 
                      opaciteVoirPlus : 0,
                      opacite: 0.85,
                      opaciteExtensible : 0.85,
                      transformAgrandi: "scale(1)",
                      largeur: "95%", 
                      hauteur: "90%",
                      margBot : "2.5%",
                      margLeft: "2.5%"
                    }
                  } else if (
                    this.state.clique_1_1_1 || 
                    this.state.clique_1_1_2 || 
                    this.state.clique_2_1 || 
                    this.state.clique_2_2 
                  ) {
                    return {
                      opacite : 0,
                    }
                  } else if (
                    this.state.clique_1_2_1
                  ) {
                    return {
                      largeur: "150%", 
                      hauteur: "150%", 
                      opacite : 0,
                      opaciteExtensible : 1,
                      transform: "scale(1)", 
                      transformAgrandi: "scale(1)",
                      margBot : "20%",
                      margLeft: "-2%",
                      opaciteVoirPlus : 0
                    }
                  } else if ( 
                    this.state.focus_1_2_1 && 
                    !this.state.clique_1_2_1
                  ){
                    return {
                      transform2 : "scale(1.02)", 
                      opaciteVoirPlus : 1,
                      opacite : 1,
                      opaciteExtensible : 1,
                      transform: "scale(1)", 
                      transformAgrandi: "scale(1)",
                      largeur: "95%", 
                      hauteur: "90%",
                      margBot : "2.5%",
                      margLeft: "2.5%"
                    }
                  }
                })()}
                config={
                  key => (key === "largeur" || "hauteur" ? {duration: 100} : {duration: 500})
                }
              >
                { props => (
                  <animated.div 
                    className="Apercu_1_2_1"
                    onMouseOver={() => this.setState( { focus_1_2_1 : true } )} 
                    onMouseOut={() => this.setState( { focus_1_2_1 : false } ) }
                    onClick= { () => this.setState( { clique_1_2_1 : !this.state.clique_1_2_1 } ) }
                    style={(() => {
                      if (
                        !this.state.focus_1_2_1 
                      ) {
                        return {
                          transform: props.y.interpolate(
                            [0, 0.6, 0.7, 0.8, 0.9, 1],
                            [ "translateY(-300px)", "translateY(30px)", "translateY(-25px)", "translateY(20px)", "translateY(-10px)", "translateY(0px)"]
                          ),
                          opacity : props.opacite
                         }
                      } else if (
                        this.state.clique_1_1_1 || 
                        this.state.clique_1_1_2 || 
                        this.state.clique_2_1 || 
                        this.state.clique_2_2 
                      ) {
                        return {
                          opacity : props.opacite,
                        }
                      } else if ( 
                        this.state.clique_1_2_1 
                      ) {
                        return {
                          transform : props.transformAgrandi,
                          marginBottom: props.margBot,
                          marginLeft: props.margLeft
                        }
                      } else if ( 
                        this.state.focus_1_2_1 
                      ) {
                        return {
                          transform: props.transform2, 
                          opacity : props.opacite
                        }
                      }
                    })()}
                  >
                    <animated.div
                      className="Apercu_extensible_1_2_1"
                      style={{
                        width: props.largeur, 
                        height: props.hauteur,
                        opacity: props.opaciteExtensible,
                        marginBottom: props.margBot,
                        marginLeft: props.margLeft,
                        transform : props.transformAgrandi,
                      }}
                    >

                    </animated.div>
                    <animated.div 
                      className="VoirPlus"
                      style={{
                        opacity: props.opaciteVoirPlus
                      }}
                    >
                      <p 
                        style={{
                          textAlign : "center", 
                          color: "white", 
                          fontWeight: "bold"
                        }}
                      >
                        Voir plus...
                      </p>
                    </animated.div>
                  </animated.div>
                )}
              </Spring>
              <Spring
                native
                from={{ 
                  y : 0, 
                  opacite : 0.85, 
                  opaciteVoirPlus : 0, 
                  opaciteReduir: 0,
                  opaciteExtensible : 0.85,
                  transform: "scale(1)", 
                  largeur: "90%", 
                  hauteur: "90%",
                  margBot : "5%",
                  margLeft: "2.5%"
                }}
                to={(() => {
                  if (
                    !this.state.focus_2_1 && 
                    !this.state.clique_2_1 &&
                    !this.state.clique_1_1_1 &&
                    !this.state.clique_1_1_2 &&
                    !this.state.clique_2_1 &&
                    !this.state.clique_2_2 
                  ) {
                    return {
                      y : 1, 
                      transform: "scale(1)", 
                      opaciteVoirPlus : 0,
                      opacite: 0.85,
                      opaciteExtensible : 0.85,
                      largeur: "90%", 
                      hauteur: "90%",
                      margBot : "-2%",
                      margLeft: "0%"
                    }
                  } else if (
                    this.state.clique_1_1_1 || 
                    this.state.clique_1_1_2 || 
                    this.state.clique_1_2_1 || 
                    this.state.clique_2_2 
                  ) {
                    return {
                      opacite : 0,
                    }
                  } else if (
                    this.state.clique_2_1
                  ) {
                    return {
                      largeur: "400%", 
                      hauteur: "213%", 
                      opaciteExtensible : 1,
                      transform: "scale(1)", 
                      margBot : "-195%",
                      margLeft: "-270%",
                      margRight: "-2%",
                      opaciteVoirPlus : 0
                    }
                  } else if ( 
                    this.state.focus_2_1 && 
                    !this.state.clique_2_1
                  ) {
                    return {
                      transform2 : "scale(1.02)", 
                      opaciteVoirPlus : 1,
                      opacite : 1,
                      opaciteExtensible : 1,
                      transform: "scale(1)", 
                      largeur: "90%", 
                      hauteur: "90%",
                      margBot : "-5%",
                      margLeft: "0%"
                    }
                  }
                })()}
                config={
                  key => (key === "largeur" || "hauteur" ? {duration: 100} : {duration: 500})
                }
              >
                { props => (
                  <animated.div 
                    className="Apercu_2_1"
                    onMouseOver={() => this.setState( { focus_2_1 : true } )} 
                    onMouseOut={() => this.setState( { focus_2_1 : false } ) }
                    onClick= { () => this.setState( { clique_2_1 : !this.state.clique_2_1 } ) }
                    style={(() => {
                      if (
                        !this.state.focus_2_1 && 
                        !this.state.clique_1_1_2 &&
                        !this.state.clique_1_1_1 &&
                        !this.state.clique_1_2_1 &&
                        !this.state.clique_2_2 && 
                        !this.state.clique_2_1
                      ) {
                        return {
                          transform: props.y.interpolate(
                            [0, 0.6, 0.7, 0.8, 0.9, 1],
                            [ "translateY(-300px)", "translateY(30px)", "translateY(-25px)", "translateY(20px)", "translateY(-10px)", "translateY(0px)"]
                          ),
                          opacity : props.opacite
                         }
                      } else if (
                        this.state.clique_1_1_1 || 
                        this.state.clique_1_2_1 || 
                        this.state.clique_1_1_2 || 
                        this.state.clique_2_2 
                      ) {
                        return {
                          opacity: props.opacite,
                        }
                      } else if ( 
                        this.state.clique_2_1 
                      ) {
                        return {
                          // width: props.largeur, 
                          // height: props.hauteur,
                        }
                      } else if ( 
                        this.state.focus_2_1 && 
                        !this.state.clique_2_1 
                      ) {
                        return {
                          transform: "scale(1.05)"
                        }
                      }
                    })()}
                  >
                    <animated.div
                      className="Apercu_extensible_2_1"
                      id="gif_2_1"
                      style={{
                        width: props.largeur, 
                        height: props.hauteur,
                        opacity: props.opaciteExtensible,
                        marginBottom: props.margBot,
                        marginLeft: props.margLeft,
                        marginRight: props.margRight
                        // boxShadow : props.elevation
                      }}
                    >
                    </animated.div>
                    <animated.div 
                      className="VoirPlus"
                      style={{
                        opacity: props.opaciteVoirPlus,
                        bottom: "0px",
                        height: "20px"
                      }}
                    >
                      <p 
                        style={{
                          textAlign : "center", 
                          color: "white", 
                          fontWeight: "bold"
                          }}
                      >
                        Voir plus...
                      </p>
                    </animated.div>
                  </animated.div>
                )}
              </Spring>
              <Spring
                native
                from={{ 
                  y : 0, 
                  opacite : 0.85, 
                  opaciteVoirPlus : 0, 
                  opaciteReduir: 0,
                  opaciteExtensible : 0.85,
                  transform: "scale(1)", 
                  transformAgrandi: "scale(1)",
                  largeur: "90%", 
                  hauteur: "90%",
                  margTop : "5%",
                  margLeft: "2.5%"
                }}
                to={(() => {
                  if (
                    !this.state.focus_2_2 && 
                    !this.state.clique_2_2 &&
                    !this.state.clique_1_1_1 &&
                    !this.state.clique_1_1_2 &&
                    !this.state.clique_2_1 
                  ) {
                    return {
                      y : 1, 
                      transform: "scale(1)", 
                      opaciteVoirPlus : 0,
                      opacite: 0.85,
                      opaciteExtensible : 0.85,
                      transformAgrandi: "scale(1)",
                      largeur: "90%", 
                      hauteur: "90%",
                      margTop : "7.5%",
                      margLeft: "5%"
                    }
                  } else if (
                    this.state.clique_1_1_1 || 
                    this.state.clique_1_1_2 || 
                    this.state.clique_1_2_1 || 
                    this.state.clique_2_1
                  ) {
                    return {
                      opacite : 0,
                    }
                  } else if (
                    this.state.clique_2_2
                  ) {
                    return {
                      largeur: "150%", 
                      hauteur: "150%", 
                      opacite : 0,
                      opaciteExtensible : 1,
                      transform: "scale(1)", 
                      transformAgrandi: "scale(1)",
                      margTop : "20%",
                      margLeft: "-2%",
                      opaciteVoirPlus : 0
                    }
                  } else if ( 
                    this.state.focus_2_2 && 
                    !this.state.clique_2_2
                  ) {
                    return {
                      transform2 : "scale(1.02)", 
                      opaciteVoirPlus : 1,
                      opacite : 1,
                      opaciteExtensible : 1,
                      transform: "scale(1.05)", 
                      transformAgrandi: "scale(1)",
                      largeur: "90%", 
                      hauteur: "90%",
                      margTop : "5%",
                      margLeft: "5%"
                    }
                  }
                })()}
                config={
                  key => (key === "largeur" || "hauteur" ? {duration: 100} : {duration: 500})
                }
              >
                { props => (
                  <animated.div 
                    className="Apercu_2_2"
                    onMouseOver={() => this.setState( { focus_2_2 : true } )} 
                    onMouseOut={() => this.setState( { focus_2_2 : false } ) }
                    onClick= { () => this.setState( { clique_2_2 : !this.state.clique_2_2 } ) }
                    style={(() => {
                      if (
                        !this.state.focus_2_2 && 
                        !this.state.clique_1_1_2 &&
                        !this.state.clique_1_1_1 &&
                        !this.state.clique_1_2_1 &&
                        !this.state.clique_2_2 &&
                        !this.state.clique_2_1
                      ) {
                        return {
                          transform: props.y.interpolate(
                            [0, 0.6, 0.7, 0.8, 0.9, 1],
                            [ "translateY(300px)", "translateY(-30px)", "translateY(25px)", "translateY(-20px)", "translateY(10px)", "translateY(0px)"]
                          ),
                          opacity : props.opacite
                        }
                      } else if (
                        this.state.clique_1_1_1 || 
                        this.state.clique_1_2_1 || 
                        this.state.clique_1_1_2 || 
                        this.state.clique_2_1
                      ) {
                        return {
                          opacity: props.opacite,
                        }
                      } else if ( 
                        this.state.clique_2_2 
                      ) {
                        return {
                          transform : props.transform,
                          marginTop: props.margTop,
                          margLeft: props.margLeft
                        }
                      } else if ( 
                        this.state.focus_2_2 &&
                        !this.state.clique_2_2
                      ) {
                        return {
                          transform: props.transform
                        }
                      }
                    })()}
                  >
                    <animated.div
                      className="Apercu_extensible_2_2"
                      id="gif_2_2"
                      style={{
                        width: props.largeur, 
                        height: props.hauteur,
                        opacity: props.opaciteExtensible,
                        marginTop: props.margTop,
                        marginLeft: props.margLeft
                      }}
                    >

                    </animated.div>
                    <animated.div 
                      className="VoirPlus"
                      style={{
                        opacity: props.opaciteVoirPlus,
                        bottom: "0px",
                        height: "20px"
                      }}
                    >
                      <p 
                        style={{
                          textAlign : "center", 
                          color: "white", 
                          fontWeight: "bold"
                        }}
                      >
                        Voir plus...
                      </p>
                    </animated.div>
                  </animated.div>
                )}
              </Spring>
              <animated.div
                className="BoutonReduir"
              >

              </animated.div>
        </div>
      </div>
    )
  }
}

class ComposantContact extends React.Component {

  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="ContenaireContact">
        <form id="contact">
          <div className="ContenairePrincipalContact" style={{ perspective : "600px"}}>
            <div className="TitreContact">
              <p className="TexteTitreContact">
                Une réponse rapide assuré sur la boîte mail renseigné
              </p>
            </div>
            
              <div className="NomEmail" style={{ perspective : "600px"}}>
                <Spring
                  native
                  from={{ transform : "translateX(-100px) translateZ(20vw) rotateY(270deg)" }}
                  to={{ transform : "translateX(0px) translateZ(0vh) rotateY(360deg)" }}
                  config={{ duration : 750}}
                >
                  { props => (
                    <animated.div className="Nom" style={props}>
                      <input className="InputNom" type="name" placeholder="Nom"/>
                    </animated.div>
                  )}
                </Spring>
                <Spring
                  native
                  from={{ transform : "translateX(100px) translateZ(20vw) rotateY(90deg)" }}
                  to={{ transform : "translateX(0px) translateZ(0vw) rotateY(0deg)" }}
                  config={{ duration : 750}}
                >
                  { props => (
                    <animated.div className="Email" style={props}>
                      <input className="InputEmail" type="email" placeholder="E-mail" />
                    </animated.div>
                  )}
                </Spring>
              </div>
              <Spring
                native
                from={{ transform : "perspective(600px) translateY(-2vh) translateZ(6vh) rotateX(90deg)" }}
                to={{ transform : "perspective(600px) translateY(0vh) translateZ(0vh) rotateX(0deg)" }}
                config={{ duration : 750, delay : 750}}
              >
                { props => (
                  <animated.div className="Sujet" style={props}>
                    <input className="InputSujet" type="text" placeholder="Sujet" />
                  </animated.div>
                )}
              </Spring>
              <Spring
                native
                from={{ transform : "perspective(600px) translateY(19vh) translateZ(6vh) rotateX(270deg)" }}
                to={{ transform : "perspective(600px) translateY(0vh) translateZ(0vh) rotateX(360deg)" }}
                config={{ duration : 750, delay : 750}}
              >
                { props => (
                  <animated.div className="Message" style={props}>
                    <textarea className="InputMessage" form="contact" placeholder="Message" />
                  </animated.div>
                )}
              </Spring>
              <Spring
                native
                from={{ x : 0 }}
                to={{ x : 1 }}
                config={{ duration : 1000, delay : 1500}}
              >
                { props => (
                  <animated.div className="Envoyer" style={{
                    transform: props.x.interpolate(
                      [0, 0.7, 0.8, 0.9, 1], 
                      ["translateX(-150vw)", "translateX(20vw)", "translateX(-10vw)", "translateX(10vw)", "translateX(0vw)"]
                    ),
                    opacity: props.x.interpolate(
                      [0, 0.5, 1],
                      [0, 0, 1]
                    )
                  }}>
                    <div className="ContenaireEnvoyer1">

                    </div>
                    <div className="ContenaireEnvoyer2">
                      <input className="BoutonEnvoyer" type="submit" placeholder="Envoyer" />  
                    </div>
                  </animated.div>
                )}
              </Spring>
          </div>
        </form>
      </div>
    )
  }
}

class ComposantCompetence extends React.Component {

  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="ContenaireCompetence">
        <div className="ContenairePrincipalCompetence">
          <Spring
            native
            from={{transform:"rotateY(270deg) translateZ(-40vw) translateX(-10vw)", opacite:0, opaciteValider: 0}}
            to={{transform:"rotateY(360deg) translateZ(0vw) translateX(0vw)", opacite:1, opaciteValider: 1}}
            config={ key => 
              ( key === 'opacite' ? {duration : 200, delay : 300} : 
                key === 'opaciteValider' ? {duration : 500, delay : 2800} :
                {duration : 500 , delay : 150})}
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
                      src={"/ValiderCompetence.png"}
                      style={{
                        marginRight : "15px",
                        marginTop : "12px",
                        marginBottom : "10px",
                        width: "auto",
                        height : "30px"
                      }}
                  >
                  </img>
                </animated.div>
              </animated.div>
            )}
          </Spring>
          <Spring
            native
            from={{transform:"rotateY(90deg) translateZ(-40vw) translateX(10vw)", opacite:0, opaciteValider: 0}}
            to={{transform:"rotateY(0deg) translateZ(0vw) translateX(0vw)", opacite:1, opaciteValider: 1}}
            config={ key => 
              ( key === 'opacite' ? {duration : 200, delay : 450} : 
                key === 'opaciteValider' ? {duration : 500, delay : 2600} :
                {duration : 500 , delay : 300})}
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
                      src={"/ValiderCompetence.png"}
                      style={{
                        marginRight : "15px",
                        marginTop : "12px",
                        marginBottom : "10px",
                        width: "auto",
                        height : "30px"
                      }}
                  >
                  </img>
                </animated.div>
              </animated.div>
            )}
          </Spring>
          <Spring
            native
            from={{transform:"rotateY(270deg) translateZ(-40vw) translateX(-10vw)", opacite:0, opaciteValider: 0}}
            to={{transform:"rotateY(360deg) translateZ(0vw) translateX(0vw)", opacite:1, opaciteValider: 1}}
            config={ key => 
              ( key === 'opacite' ? {duration : 200, delay : 600} : 
                key === 'opaciteValider' ? {duration : 500, delay : 2400} :
                {duration : 500 , delay : 450})}
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
                      src={"/ValiderCompetence.png"}
                      style={{
                        marginRight : "15px",
                        marginTop : "12px",
                        marginBottom : "10px",
                        width: "auto",
                        height : "30px"
                      }}
                  >
                  </img>
                </animated.div>
              </animated.div>
            )}
          </Spring>
          <Spring
            native
            from={{transform:"rotateY(90deg) translateZ(-40vw) translateX(10vw)", opacite:0, opaciteValider: 0}}
            to={{transform:"rotateY(0deg) translateZ(0vw) translateX(0vw)", opacite:1, opaciteValider: 1}}
            config={ key => 
              ( key === 'opacite' ? {duration : 200, delay : 750} : 
                key === 'opaciteValider' ? {duration : 500, delay : 2200} :
                {duration : 500 , delay : 600})}
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
                      src={"/ValiderCompetence.png"}
                      style={{
                        marginRight : "15px",
                        marginTop : "12px",
                        marginBottom : "10px",
                        width: "auto",
                        height : "30px"
                      }}
                  >
                  </img>
                </animated.div>
              </animated.div>
            )}
          </Spring>
          <Spring
            native
            from={{transform:"rotateY(270deg) translateZ(-40vw) translateX(-10vw)", opacite:0, opaciteValider: 0}}
            to={{transform:"rotateY(360deg) translateZ(0vw) translateX(0vw)", opacite:1, opaciteValider: 1}}
            config={ key => 
              ( key === 'opacite' ? {duration : 200, delay : 900} : 
                key === 'opaciteValider' ? {duration : 500, delay : 2000} :
                {duration : 500 , delay : 750})}
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
                      src={"/ValiderCompetence.png"}
                      style={{
                        marginRight : "15px",
                        marginTop : "12px",
                        marginBottom : "10px",
                        width: "auto",
                        height : "30px"
                      }}
                  >
                  </img>
                </animated.div>
              </animated.div>
            )}
          </Spring>
          <Spring
            native
            from={{transform:"rotateY(90deg) translateZ(-40vw) translateX(10vw)", opacite:0, opaciteValider:0}}
            to={{transform:"rotateY(0deg) translateZ(0vw) translateX(0vw)", opacite:1, opaciteValider: 1}}
            config={ key => 
              ( key === 'opacite' ? {duration : 200, delay : 1050} : 
                key === 'opaciteValider' ? {duration : 500, delay : 1800} :
                {duration : 500 , delay : 900})}
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
                      src={"/ValiderCompetence.png"}
                      style={{
                        marginRight : "15px",
                        marginTop : "12px",
                        marginBottom : "10px",
                        width: "auto",
                        height : "30px"
                      }}
                  >
                  </img>
                </animated.div>
              </animated.div>
            )}
          </Spring>
          <Spring
            native
            from={{transform:"rotateY(270deg) translateZ(-40vw) translateX(-10vw)", opacite: 0, opaciteValider: 0}}
            to={{transform:"rotateY(360deg) translateZ(0vw) translateX(0vw)", opacite: 1, opaciteValider: 1}}
            config={ key => 
              ( key === 'opacite' ? {duration : 200, delay : 1200} : 
                key === 'opaciteValider' ? {duration : 500, delay : 1600} :
                {duration : 500 , delay : 1050})}
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
                      src={"/ValiderCompetence.png"}
                      style={{
                        marginRight : "15px",
                        marginTop : "12px",
                        marginBottom : "10px",
                        width: "auto",
                        height : "30px",
                        
                      }}
                  >
                  </img>
                </animated.div>
              </animated.div>
            )}
          </Spring>
        </div>
      </div>
    )
  }
}

export default App
