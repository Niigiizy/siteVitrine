import React from 'react';
import {
  Spring, 
  animated, 
  Keyframes
} from 'react-spring/renderprops'
import ComposantHome from "./components/ComposantHome"
import './components/ComposantHome.css'
import ComposantInfoPerso from "./components/ComposantInfoPerso"
import './components/ComposantInfoPerso.css'
import ComposantCompetence from "./components/ComposantCompetence"
import './components/ComposantCompetence.css'
import ComposantApercu from "./components/ComposantApercu"
import './components/ComposantApercu.css'
import ComposantContact from "./components/ComposantContact"
import './components/ComposantContact.css'
import './App.css';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      clavier_ouvert : false,
      resiz: false,
      offset : 0,
      boutonClique : 'home',
      rotat : false,
      rotat2 : false,
      rotat3 : false, 
      rotat4 : false,
      rotat5 : false,
      etapeRotat : 0,
      remiseEtapeAZero : false,
      anim_de_fond: false,
    }
    this.tableauImageCouleur = [ 
      [ "./infoperso-portefolio.png", "#0abde3", "infoPerso", "20%", "14%", "60%", "60%", "/infoPerso", "info perso", "#d9f9ff"],
      [ "./apercu-portfolio-bleu.png", "#4169E1", "apercu", "20%", "25%", "60%", "50%", "/apercu", "aperçu", "#dbe2f6" ],
      [ "./home-portefolio-blanc.png", "#5f27cd", "home", "20%", "24%", "60%", "50%", "/home", "home", "#efe7ff" ],
      [ "./contact-portfolio-bleu.png", "#00008B", "contact", "20%", "24%", "60%", "50%", "/contact", "contact", "#d1d1ec" ],
      [ "./competence-portefolio.png", "#222f3e", "competence", "20%", "15%", "60%", "70%", "/competence", "savoir faire", "#e0e0e0" ],
    ]
    this.choixImageCouleur = () => {
      switch (this.props.location.pathname) {
        case '/':
          return [ 
            [ "./infoperso-portefolio.png", "#0abde3", "infoPerso", "20%", "14%", "60%", "60%", "/infoPerso", "info perso", "#d9f9ff" ],
            [ "./apercu-portfolio-bleu.png", "#4169E1", "apercu", "20%", "25%", "60%", "50%", "/apercu", "aperçu", "#dbe2f6" ],
            [ "./home-portefolio-blanc.png", "#5f27cd", "home", "20%", "24%", "60%", "50%", "/home", "home", "#efe7ff" ],
            [ "./contact-portfolio-bleu.png", "#00008B", "contact", "20%", "24%", "60%", "50%", "/contact", "contact", "#d1d1ec" ],
            [ "./competence-portefolio.png", "#222f3e", "competence", "20%", "15%", "60%", "70%", "/competence", "savoir faire", "#e0e0e0" ],
          ]
        case '/home':
          return [ 
            [ "./infoperso-portefolio.png", "#0abde3", "infoPerso", "20%", "14%", "60%", "60%", "/infoPerso", "info perso", "#d9f9ff" ],
            [ "./apercu-portfolio-bleu.png", "#4169E1", "apercu", "20%", "25%", "60%", "50%", "/apercu", "aperçu", "#dbe2f6" ],
            [ "./home-portefolio-blanc.png", "#5f27cd", "home", "20%", "24%", "60%", "50%", "/home", "home", "#efe7ff" ],
            [ "./contact-portfolio-bleu.png", "#00008B", "contact", "20%", "24%", "60%", "50%", "/contact", "contact", "#d1d1ec" ],
            [ "./competence-portefolio.png", "#222f3e", "competence", "20%", "15%", "60%", "70%", "/competence", "savoir faire", "#e0e0e0" ],
          ]
        case '/contact':
          return [ 
            [ "./infoperso-portefolio.png", "#0abde3", "infoPerso", "20%", "14%", "60%", "60%", "/infoPerso", "info perso", "#d9f9ff" ],
            [ "./apercu-portfolio-bleu.png", "#4169E1", "apercu", "20%", "25%", "60%", "50%", "/apercu", "aperçu", "#dbe2f6" ],
            [ "./contact-portfolio-bleu-blanc.png", "#00008B", "contact", "20%", "24%", "60%", "50%", "/contact", "contact", "#d1d1ec" ],
            [ "./competence-portefolio.png", "#222f3e", "competence", "20%", "15%", "60%", "70%", "/competence", "savoir faire", "#e0e0e0" ],
            [ "./home-portefolio.png", "#5f27cd", "home", "20%", "24%", "60%", "50%", "/home", "home", "#efe7ff" ],
          ]
        case '/competence':
          return [ 
            [ "./infoperso-portefolio.png", "#0abde3", "infoPerso", "20%", "14%", "60%", "60%", "/infoPerso", "info perso", "#d9f9ff" ],
            [ "./apercu-portfolio-bleu.png", "#4169E1", "apercu", "20%", "25%", "60%", "50%", "/apercu", "aperçu", "#dbe2f6" ],
            [ "./competence-portefolio-blanc.png", "#222f3e", "competence", "20%", "15%", "60%", "70%", "/competence", "compétence", "#e0e0e0" ],
            [ "./contact-portfolio-bleu.png", "#00008B", "contact", "20%", "24%", "60%", "50%", "/contact", "contact", "#d1d1ec" ],
            [ "./home-portefolio.png", "#5f27cd", "home", "20%", "24%", "60%", "50%", "/home", "home", "#efe7ff" ],
          ]
        case '/apercu':
          return [ 
            [ "./infoperso-portefolio.png", "#0abde3", "infoPerso", "20%", "14%", "60%", "60%", "/infoPerso", "info perso", "#d9f9ff" ],
            [ "./competence-portefolio.png", "#222f3e", "competence", "20%", "15%", "60%", "70%", "/competence", "savoir faire", "#e0e0e0" ],
            [ "./apercu-portfolio-bleu-blanc.png", "#4169E1", "apercu", "20%", "25%", "60%", "50%", "/apercu", "aperçu", "#dbe2f6" ],
            [ "./contact-portfolio-bleu.png", "#00008B", "contact", "20%", "24%", "60%", "50%", "/contact", "contact", "#d1d1ec" ],
            [ "./home-portefolio.png", "#5f27cd", "home", "20%", "24%", "60%", "50%", "/home", "home", "#efe7ff" ],
          ]
        case '/infoPerso':
          return [ 
            [ "./competence-portefolio.png", "#222f3e", "competence", "20%", "15%", "60%", "70%", "/competence", "savoir faire", "#e0e0e0" ],
            [ "./apercu-portfolio-bleu.png", "#4169E1", "apercu", "20%", "25%", "60%", "50%", "/apercu", "aperçu", "#dbe2f6" ],
            [ "./infoperso-portefolio-blanc.png", "#0abde3", "infoPerso", "20%", "14%", "60%", "60%", "/infoPerso", "info perso", "#d9f9ff" ],
            [ "./contact-portfolio-bleu.png", "#00008B", "contact", "20%", "24%", "60%", "50%", "/contact", "contact", "#d1d1ec" ],
            [ "./home-portefolio.png", "#5f27cd", "home", "20%", "24%", "60%", "50%", "/home", "home", "#efe7ff" ],
          ]
        default:
          break;
      }
    }
    this.rotationBoutonDerriere = (rotat) => {
      console.log("fonction appeler")
      if (rotat && this.state.etapeRotat === 0) {
        return {transform : `perspective(600px) rotateY(0deg)`}
      } else if (!rotat && this.state.etapeRotat === 0){
        return {transform : `perspective(600px) rotateY(180deg)`}
      } else if (this.state.etapeRotat === 1) {
        return {transform : `perspective(600px) rotateY(450deg)`}
      } else if (this.state.etapeRotat === 2) {
        return {transform: `perspective(600px) rotateY(1080deg)`}
      }
    }
    this.rotationBoutonDevant = (rotat) => {
      if (rotat && this.state.etapeRotat === 0) {
        return {transform : `perspective(600px) rotateY(180deg)`}
      } else if (!rotat && this.state.etapeRotat === 0){
        return {transform : `perspective(600px) rotateY(0deg)`}
      } else if (this.state.etapeRotat === 1) {
        return {transform : `perspective(600px) rotateY(450deg)`}
      } else if (this.state.etapeRotat === 2) {
        return {transform: `perspective(600px) rotateY(1080deg)`}
      }
    }
    this.randL = Math.random()
    this.randT = Math.random()
    this.aller = true
    this.hauteurInitial = window.innerHeight 
  }

  path = React.createRef()

  componentDidMount() {
    this.hauteurInitial = window.innerHeight 
    window.onresize = () => {
        this.setState({resiz : !this.state.resiz})
    }
  }

  componentDidUpdate() {
    if (this.state.etapeRotat === 1) {
      this.setState({ etapeRotat : 2 })
    } else if ( this.state.etapeRotat === 2 && !this.state.remiseEtapeAZero) {
      this.setState({ remiseEtapeAZero : true})
    } else if (this.state.etapeRotat === 2 && this.state.remiseEtapeAZero) {
      setTimeout(() => {
        this.setState({ remiseEtapeAZero : false, etapeRotat : 0});
      }, 400)
    }
  }

  AnimInfini = Keyframes.Spring(
    async next => {
      while (true) {
        await next({ 
          from: {x: 0 },
          to : { x: 1 } , 
          onRest: (
            this.randL_1 = Math.random(),
            this.randT_1 = Math.random(), 
            this.randL_2 = Math.random(),
            this.randT_2 = Math.random(), 
            this.randL_3 = Math.random(),
            this.randT_3 = Math.random(), 
            this.randL_4 = Math.random(),
            this.randT_4 = Math.random(), 
            this.randL_5 = Math.random(),
            this.randT_5 = Math.random(), 
            this.randL_6 = Math.random(),
            this.randT_6 = Math.random(), 
            this.randL_7 = Math.random(),
            this.randT_7 = Math.random(), 
            this.randL_8 = Math.random(),
            this.randT_8 = Math.random(), 
            this.randL_9 = Math.random(),
            this.randT_9 = Math.random(), 
            this.randL_10 = Math.random(),
            this.randT_10 = Math.random(), 
            this.randL_11 = Math.random(),
            this.randT_11 = Math.random(), 
            this.randL_12 = Math.random(),
            this.randT_12 = Math.random(), 
            this.randL_13 = Math.random(),
            this.randT_13 = Math.random(), 
            this.randL_14 = Math.random(),
            this.randT_14 = Math.random(), 
            this.randL_15 = Math.random(),
            this.randT_15 = Math.random(), 
            this.randL_16 = Math.random(),
            this.randT_16 = Math.random(), 
            this.randL_17 = Math.random(),
            this.randT_17 = Math.random(), 
            this.randL_18 = Math.random(),
            this.randT_18 = Math.random(), 
            this.randL_19 = Math.random(),
            this.randT_19 = Math.random(), 
            this.randL_20 = Math.random(),
            this.randT_20 = Math.random(),
            this.randL_21 = Math.random(), 
            this.randT_21 = Math.random(), 
            this.randL_22 = Math.random(), 
            this.randT_22 = Math.random(), 
            this.randL_23 = Math.random(), 
            this.randT_23 = Math.random(), 
            this.randL_24 = Math.random(), 
            this.randT_24 = Math.random(), 
            this.randL_25 = Math.random(), 
            this.randT_25 = Math.random(), 
            this.randL_26 = Math.random(), 
            this.randT_26 = Math.random(), 
            this.randL_27 = Math.random(), 
            this.randT_27 = Math.random(),
            this.randL_28 = Math.random(), 
            this.randT_28 = Math.random(), 
            this.randL_29 = Math.random(), 
            this.randT_29 = Math.random(), 
            this.randL_30 = Math.random(), 
            this.randT_30 = Math.random(), 
            this.randL_31 = Math.random(), 
            this.randT_31 = Math.random(), 
            this.randL_32 = Math.random(), 
            this.randT_32 = Math.random(), 
            this.randL_33 = Math.random(), 
            this.randT_33 = Math.random(), 
            this.randL_34 = Math.random(), 
            this.randT_34 = Math.random(), 
            this.randL_35 = Math.random(), 
            this.randT_35 = Math.random(), 
            this.randL_36 = Math.random(), 
            this.randT_36 = Math.random(), 
            this.randL_37 = Math.random(), 
            this.randT_37 = Math.random(), 
            this.randL_38 = Math.random(), 
            this.randT_38 = Math.random(), 
            this.randL_39 = Math.random(), 
            this.randT_39 = Math.random(), 
            this.randL_40 = Math.random(),
            this.randT_40 = Math.random(), 
            this.aller = !this.aller)
        })
        await next({
          to: { x: 0 },
          onRest:
            (this.aller=!this.aller)
        })
      }
    }
  )

  iOS = () => {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

  render() {
    this.tableauImageCouleur = this.choixImageCouleur()
    if (
      window.navigator.userAgent.indexOf('Mobi') !== -1 
    ) {
      return (
        <div style={{backgroundColor:"red"}}>
          <div className="App-web_mobile">
            <div style={{ minHeight: "700px"}}>
            <Spring
                native
                to={{ 
                  couleurBordure : this.tableauImageCouleur[2][9]
                }}
              >
                {props => (
                <animated.div 
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: (this.props.focus_email || this.props.focus_nom || this.props.focus_sujet || this.props.focus_message) && !this.iOS() ? "200vh" : "100%",
                    top: "0%",
                    left: "0%",
                    backgroundColor: props.couleurBordure,
                  }}
                >
                </animated.div>
                )
                }
              </Spring>
              <div
                className="Contenaire_anim_de_fond_mobile" 
              >
                <this.AnimInfini
                  native
                  config={ {duration: 1000} }
                >
                {({x}) => (
                  <div>
                    <animated.div
                      style={{
                        left: String(this.randL_1*25+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${x*10}vw,${this.randL_1*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${20-x*10}vw,${this.randL_1*20-this.randL_1*x*10}vh)`
                        )
                        ,
                        bottom: String(this.randT_1*20+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                    style={{
                      left: String(this.randL_2*25+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${x*10}vw,${this.randL_2*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${20-x*10}vw,${this.randL_2*20-this.randL_2*x*10}vh)`
                        )
                        ,
                      bottom: String(this.randT_2*20+"vh"),
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_3*25+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${x*10}vw,${this.randL_3*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${20-x*10}vw,${this.randL_3*20-this.randL_3*x*10}vh)`
                        )
                        ,
                        bottom: String(this.randT_3*20+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_4*25+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${x*10}vw,${this.randL_4*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${20-x*10}vw,${this.randL_4*20-this.randL_4*x*10}vh)`
                        )
                        ,
                        bottom: String(this.randT_4*20+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_5*25+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${x*10}vw,${this.randL_5*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${20-x*10}vw,${this.randL_5*20-this.randL_5*x*10}vh)`
                        )
                        ,
                        bottom: String(this.randT_5*20+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        right: String(this.randL_6*25+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${-x*10}vw,${this.randL_6*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${-(20-x*10)}vw,${this.randL_6*20-this.randL_6*x*10}vh)`
                        )
                        ,
                        bottom: String(this.randT_6*20+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        right: String(this.randL_7*25+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${-x*10}vw,${this.randL_7*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${-(20-x*10)}vw,${this.randL_7*20-this.randL_7*x*10}vh)`
                        )
                        ,
                        bottom: String(this.randT_7*20+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        right: String(this.randL_8*25+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${-x*10}vw,${this.randL_8*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${-(20-x*10)}vw,${this.randL_8*20-this.randL_8*x*10}vh)`
                        )
                        ,
                        bottom: String(this.randT_8*20+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        right: String(this.randL_9*25+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${-x*10}vw,${this.randL_9*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${-(20-x*10)}vw,${this.randL_9*20-this.randL_9*x*10}vh)`
                        )
                        ,
                        bottom: String(this.randT_9*20+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        right: String(this.randL_10*75+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${-x*10}vw,${this.randL_10*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${-(20-x*10)}vw,${this.randL_10*20-this.randL_10*x*10}vh)`
                        )
                        ,
                        bottom: String(this.randT_10*20+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_11*75+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${this.randL_11*x*10}vw,${-x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${this.randL_11*20-this.randL_11*x*10}vw,${-(20-x*10)}vh)`
                        )
                        ,
                        bottom: String(-this.randT_11*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_12*75+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${this.randL_12*x*10}vw,${-x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${this.randL_12*20-this.randL_12*x*10}vw,${-(20-x*10)}vh)`
                        )
                        ,
                        bottom: String(-this.randT_12*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_13*75+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${this.randL_13*x*10}vw,${-x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${this.randL_13*20-this.randL_13*x*10}vw,${-(20-x*10)}vh)`
                        )
                        ,
                        bottom: String(-this.randT_13*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_14*75+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${this.randL_14*x*10}vw,${-x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${this.randL_14*20-this.randL_14*x*10}vw,${-(20-x*10)}vh)`
                        )
                        ,
                        bottom: String(-this.randT_14*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_15*75+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${this.randL_15*x*10}vw,${-x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${this.randL_15*20-this.randL_15*x*10}vw,${-(20-x*10)}vh)`
                        )
                        ,
                        bottom: String(-this.randT_15*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_16*75+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${this.randL_16*x*10}vw,${x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${this.randL_16*20-this.randL_16*x*10}vw,${20-x*10}vh)`
                        )
                        ,
                        top: String(this.randT_16*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_17*75+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${this.randL_17*x*10}vw,${x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${this.randL_17*20-this.randL_17*x*10}vw,${20-x*10}vh)`
                        )
                        ,
                        top: String(this.randT_17*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_18*75+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${this.randL_18*x*10}vw,${x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${this.randL_18*20-this.randL_18*x*10}vw,${20-x*10}vh)`
                        )
                        ,
                        top: String(this.randT_18*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_19*75+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${this.randL_19*x*10}vw,${x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${this.randL_19*20-this.randL_19*x*10}vw,${20-x*10}vh)`
                        )
                        ,
                        top: String(this.randT_19*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_20*75+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${this.randL_20*x*10}vw,${x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${this.randL_20*20-this.randL_20*x*10}vw,${20-x*10}vh)`
                        )
                        ,
                        top: String(this.randT_20*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(20+this.randL_21*80+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${-this.randL_21*x*10}vw,${-x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${-(this.randL_21*20-this.randL_20*x*10)}vw,${-(20-x*10)}vh)`
                        )
                        ,
                        top: String(20+this.randT_21*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(20+this.randL_22*80+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${-this.randL_22*x*10}vw,${-x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${-(this.randL_22*20-this.randL_22*x*10)}vw,${-(20-x*10)}vh)`
                        )
                        ,
                        top: String(20+this.randT_22*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(20+this.randL_23*80+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${-this.randL_23*x*10}vw,${-x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${-(this.randL_23*20-this.randL_23*x*10)}vw,${-(20-x*10)}vh)`
                        )
                        ,
                        top: String(20+this.randT_23*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(20+this.randL_24*80+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${-this.randL_24*x*10}vw,${-x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${-(this.randL_24*20-this.randL_24*x*10)}vw,${-(20-x*10)}vh)`
                        )
                        ,
                        top: String(20+this.randT_24*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(20+this.randL_25*80+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${-this.randL_25*x*10}vw,${-x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${-(this.randL_25*20-this.randL_25*x*10)}vw,${-(20-x*10)}vh)`
                        )
                        ,
                        top: String(20+this.randT_25*5+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_26*5+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${x*10}vw,${this.randL_26*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${20-x*10}vw,${this.randL_26*20-this.randL_26*x*10}vh)`
                        )
                        ,
                        top: String(this.randT_26*30+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_27*5+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${x*10}vw,${this.randL_27*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${20-x*10}vw,${this.randL_27*20-this.randL_27*x*10}vh)`
                        )
                        ,
                        top: String(this.randT_27*30+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        left: String(this.randL_28*5+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${x*10}vw,${this.randL_28*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${20-x*10}vw,${this.randL_28*20-this.randL_28*x*10}vh)`
                        )
                        ,
                        top: String(this.randT_28*30+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        right: String(this.randL_29*5+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${-x*10}vw,${this.randL_29*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${-(20-x*10)}vw,${this.randL_29*20-this.randL_29*x*10}vh)`
                        )
                        ,
                        top: String(this.randT_29*20+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                    <animated.div
                      style={{
                        right: String(this.randL_30*5+"vw"),
                        // transform: String("translate("+props.x*10+"vw)"),
                        transform: !this.aller ? 
                        x.interpolate(
                          x => 
                          `translate(${-x*10}vw,${this.randL_30*x*10}vh)`
                        )
                        :
                        x.interpolate(
                          x => 
                          `translate(${-(20-x*10)}vw,${this.randL_30*20-this.randL_30*x*10}vh)`
                        )
                        ,
                        top: String(this.randT_30*20+"vh"),
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        position: "absolute",
                        backgroundColor: this.tableauImageCouleur[2][1],
                        opacity:  !this.aller ? 
                        x.interpolate(
                          [0,1],
                          [0, 1]
                        )
                        :
                        x.interpolate(
                          [0, 1],
                          [0, 1]
                        )
                        ,
                      }}
                    >
                    </animated.div>
                  </div>
                )}
              </this.AnimInfini>
              </div>
              <Switch>
                <Route path="/home" component={ComposantHome} />
                <Route path="/infoPerso" component={ComposantInfoPerso} />
                <Route path="/apercu" component={ComposantApercu} />
                <Route path="/contact" component={ComposantContactWithStore} />
                <Route path="/competence" component={ComposantCompetence} />
                <Route path="/" component={ComposantHome} />
              </Switch>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "10%",
                  bottom: (this.props.focus_email || this.props.focus_nom || this.props.focus_sujet || this.props.focus_message) && !this.iOS() ? "-90vh" : "10vh",
                  left: "0%",
                  zIndex: 1
                }}
              >
                {/*  Animation Bouton 1 */}
              <Spring
                native
                to={() => this.rotationBoutonDerriere(this.state.rotat)
                }
              >
                { props => (
                  
                  <animated.div 
                    className="Bouton-1-derriere_mobile"
                    style={{
                        backgroundColor: this.tableauImageCouleur[0][1],
                        ...props
                    }}
                  
                  >
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
                    className="Bouton-1-devant_mobile"
                    style={{
                      borderColor: this.tableauImageCouleur[0][1],
                      ...props
                    }}
                  >
                    <img
                      className="Image-Bouton-1"
                      alt="Bouton 1 mobile"
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
                  className="Gestion-rotat-1_mobile"
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
                    className="Bouton-2-devant_mobile"
                    style={{
                      borderColor: this.tableauImageCouleur[1][1],
                      ...props
                    }}
                  >
                      <img
                        className="Image-2"
                        alt="Bouton 2 mobile"
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
                    className="Bouton-2-derriere_mobile"
                    style={{
                      backgroundColor : this.tableauImageCouleur[1][1],
                      borderColor: this.tableauImageCouleur[1][1],
                      ...props
                    }}
                  >
                  </animated.div>
                )}
              </Spring>
              <Link to={this.tableauImageCouleur[1][7]}>
                <div
                  className="Gestion-rotat-2_mobile"
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
                    className="Bouton-3-devant_mobile"
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
                      alt="Bouton 3 mobile"
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
                    className="Bouton-4-devant_mobile"
                    style={{
                      borderColor: this.tableauImageCouleur[3][1],
                      ...props
                    }}
                  >
                    <img
                      className="Image-4"
                      alt="Bouton 4 mobile"
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
                    className="Bouton-4-derriere_mobile"
                    style={{
                      backgroundColor: this.tableauImageCouleur[3][1],
                      ...props
                    }}
                  >
                  </animated.div>
                )}
              </Spring>
              <Link to={this.tableauImageCouleur[3][7]}>
                <div
                  className="Gestion-rotat-4_mobile"
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
                    className="Bouton-5-devant_mobile"
                    style={{
                      borderColor: this.tableauImageCouleur[4][1],
                      ...props
                    }}
                  >
                    <img
                      className="Image-5"
                      alt="Bouton 5 mobile"
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
                  className="Bouton-5-derriere_mobile"
                  style={{
                    backgroundColor: this.tableauImageCouleur[4][1],
                    ...props
                  }}
                
                >
                </animated.div >
              )}
            </Spring>
              <Link to={this.tableauImageCouleur[4][7]}>
                <div
                  className="Gestion-rotat-5_mobile"
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
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "10%",
                    bottom: (this.props.focus_email || this.props.focus_nom || this.props.focus_sujet || this.props.focus_message) && !this.iOS() ? "-100vh" : "0vh",
                    left: "0%",
                    backgroundColor: props.couleurBordure,
                    borderTopLeftRadius: "50%",
                    borderTopRightRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1
                  }}
                >
                  <animated.div className="Titre_page_actuel_mobile" style={{ backgroundColor: props.couleurBordure}}>
                    <p
                      style={{
                        color: "white",
                        fontSize: "1.5em",
                        fontWeight: "bold",
                        fontFamily: "cursive"
                      }}
                    >
                      {this.tableauImageCouleur[2][8]}
                    </p>
                  </animated.div>
                </animated.div>
                )
                }
              </Spring>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          
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
                to={this.rotationBoutonDerriere(this.state.rotat)
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
                      <p className="Texte_bouton" >
                        {this.tableauImageCouleur[0][8]}
                      </p>
                  </animated.div >
                )}
              </Spring>
              <Spring
                native
                to={this.rotationBoutonDevant(this.state.rotat)
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
                      alt="Bouton 1"
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
                to={this.rotationBoutonDevant(this.state.rotat2)
                }
              >
                { props => (
                  <animated.div 
                    className="Bouton-2-devant"
                    style={{
                      borderColor: this.tableauImageCouleur[1][1],
                      ...props
                    }}
                  >
                      <img
                        className="Image-2"
                        alt="Bouton 2"
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
                to={this.rotationBoutonDerriere(this.state.rotat2)
                }
              >
                { props => (
                  <animated.div 
                    className="Bouton-2-derriere"
                    style={{
                      backgroundColor : this.tableauImageCouleur[1][1],
                      borderColor: this.tableauImageCouleur[1][1],
                      ...props
                    }}
                  >
                      <p className="Texte_bouton" >
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
                to={this.rotationBoutonDevant(this.state.rotat3)
                }
              >
                { props => (
                  <animated.div 
                    className="Bouton-3-devant"
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
                      alt="Bouton 3"
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
                to={this.rotationBoutonDevant(this.state.rotat4)
                }
              >
                { props => (
                  <animated.div 
                    className="Bouton-4-devant"
                    style={{
                      borderColor: this.tableauImageCouleur[3][1],
                      ...props
                    }}
                  >
                    <img
                      className="Image-4"
                      alt="Bouton 4"
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
                to={this.rotationBoutonDerriere(this.state.rotat4)
                }
              >
                { props => (
                  <animated.div 
                    className="Bouton-4-derriere"
                    style={{
                      backgroundColor: this.tableauImageCouleur[3][1],
                      ...props
                    }}
                  >
                      <p className="Texte_bouton" >
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
                to={this.rotationBoutonDevant(this.state.rotat5)
                }
              >
                { props => (
                  <animated.div 
                    className="Bouton-5-devant"
                    style={{
                      borderColor: this.tableauImageCouleur[4][1],
                      ...props
                    }}
                  >
                    <img
                      className="Image-5"
                      alt="Bouton 5"
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
              to={this.rotationBoutonDerriere(this.state.rotat5)
              }
            >
              { props => (
                <animated.div 
                  className="Bouton-5-derriere"
                  style={{
                    backgroundColor: this.tableauImageCouleur[4][1],
                    ...props
                  }}
                >
                    <p className="Texte_bouton" >
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
              { props => (
                <animated.div 
                  className="BordureArrondiGauche" 
                  style={{ 
                    backgroundColor : props.couleurBordure,
                    minHeight  : this.state.boutonClique === "apercu" ? "730px" : "400px"
                  }}
                >
                  <animated.div className="Titre_page_actuel_mobile" style={{ backgroundColor: props.couleurBordure}}>
                    <p className="Texte_titre_page_actuel_mobile">
                      {this.tableauImageCouleur[2][8]}
                    </p>
                  </animated.div>
                </animated.div>
              ) }
            </Spring>
            <Switch>
              <Route path="/home" component={ComposantHome} />
              <Route path="/infoPerso" component={ComposantInfoPerso} />
              <Route path="/apercu" component={ComposantApercu} />
              <Route path="/contact" component={ComposantContactWithStore} />
              <Route path="/competence" component={ComposantCompetence} />
              <Route path="/" component={ComposantHome} />
            </Switch>
          </div>
          <div
            className="Contenaire_anim_de_fond"
          >
            <this.AnimInfini
              native
              config={ {duration: 1500} }
            >
              {({x}) => (
                <div>
                  <animated.div
                    style={{
                      right: String(20+this.randL_1*20+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${this.randL_1*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${this.randL_1*20-this.randL_1*x*10}vh)`
                      )
                      ,
                      top: String(this.randT_1*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                  style={{
                    right: String(20+this.randL_2*20+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${this.randL_2*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${this.randL_2*20-this.randL_2*x*10}vh)`
                      )
                      ,
                    top: String(this.randT_2*25+"vh"),
                    width: "7.5px",
                    height: "7.5px",
                    borderRadius: "50%",
                    position: "absolute",
                    backgroundColor: this.tableauImageCouleur[2][1],
                    opacity:  !this.aller ? 
                    x.interpolate(
                      [0,1],
                      [0, 1]
                    )
                    :
                    x.interpolate(
                      [0, 1],
                      [0, 1]
                    )
                    ,
                  }}
                >
                </animated.div>
                  <animated.div
                    style={{
                      right: String(20+this.randL_3*20+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${this.randL_3*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${this.randL_3*20-this.randL_3*x*10}vh)`
                      )
                      ,
                      top: String(this.randT_3*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      right: String(20+this.randL_4*20+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${this.randL_4*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${this.randL_4*20-this.randL_4*x*10}vh)`
                      )
                      ,
                      top: String(this.randT_4*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      right: String(20+this.randL_5*20+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${this.randL_5*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${this.randL_5*20-this.randL_5*x*10}vh)`
                      )
                      ,
                      top: String(this.randT_5*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_6*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${this.randL_6*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${this.randL_6*20-this.randL_6*x*10}vh)`
                      )
                      ,
                      top: String(this.randT_6*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_7*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${this.randL_7*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${this.randL_7*20-this.randL_7*x*10}vh)`
                      )
                      ,
                      top: String(this.randT_7*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_8*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${this.randL_8*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${this.randL_8*20-this.randL_8*x*10}vh)`
                      )
                      ,
                      top: String(this.randT_8*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_9*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${this.randL_9*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${this.randL_9*20-this.randL_9*x*10}vh)`
                      )
                      ,
                      top: String(this.randT_9*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_10*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${this.randL_10*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${this.randL_10*20-this.randL_10*x*10}vh)`
                      )
                      ,
                      top: String(this.randT_10*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_11*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${-this.randL_11*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${-(this.randL_11*20-this.randL_11*x*10)}vh)`
                      )
                      ,
                      bottom: String(this.randT_11*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_12*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${-this.randL_12*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${-(this.randL_12*20-this.randL_12*x*10)}vh)`
                      )
                      ,
                      bottom: String(this.randT_12*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_13*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${-this.randL_13*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${-(this.randL_13*20-this.randL_13*x*10)}vh)`
                      )
                      ,
                      bottom: String(this.randT_13*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_14*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${-this.randL_14*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${-(this.randL_14*20-this.randL_14*x*10)}vh)`
                      )
                      ,
                      bottom: String(this.randT_14*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_15*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${-this.randL_15*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${-(this.randL_15*20-this.randL_15*x*10)}vh)`
                      )
                      ,
                      bottom: String(this.randT_15*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_16*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${-this.randL_16*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${-(this.randL_16*20-this.randL_16*x*10)}vh)`
                      )
                      ,
                      bottom: String(this.randT_16*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_17*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${-this.randL_17*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${-(this.randL_17*20-this.randL_17*x*10)}vh)`
                      )
                      ,
                      bottom: String(this.randT_17*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_18*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${-this.randL_18*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${-(this.randL_18*20-this.randL_18*x*10)}vh)`
                      )
                      ,
                      bottom: String(this.randT_18*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_19*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${-this.randL_19*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${-(this.randL_19*20-this.randL_19*x*10)}vh)`
                      )
                      ,
                      bottom: String(this.randT_19*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_20*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${-this.randL_20*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${-(this.randL_20*20-this.randL_20*x*10)}vh)`
                      )
                      ,
                      bottom: String(this.randT_20*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_20*50+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${-this.randL_20*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${-(this.randL_20*20-this.randL_20*x*10)}vh)`
                      )
                      ,
                      bottom: String(this.randT_20*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      right: String(this.randL_21*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${-this.randL_21*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${-(this.randL_21*20-this.randL_21*x*10)}vh)`
                      )
                      ,
                      bottom: String(15+this.randT_21*80+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      right: String(this.randL_22*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${-this.randL_22*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${-(this.randL_22*20-this.randL_22*x*10)}vh)`
                      )
                      ,
                      bottom: String(15+this.randT_22*80+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      right: String(this.randL_23*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${-this.randL_23*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${-(this.randL_23*20-this.randL_23*x*10)}vh)`
                      )
                      ,
                      bottom: String(15+this.randT_23*80+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      right: String(this.randL_24*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${-this.randL_24*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${-(this.randL_24*20-this.randL_24*x*10)}vh)`
                      )
                      ,
                      bottom: String(15+this.randT_24*80+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      right: String(this.randL_25*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${-this.randL_25*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${-(this.randL_25*20-this.randL_25*x*10)}vh)`
                      )
                      ,
                      bottom: String(15+this.randT_25*80+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      right: String(this.randL_26*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${this.randL_26*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${this.randL_26*20-this.randL_26*x*10}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_26*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      right: String(this.randL_27*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${this.randL_27*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${this.randL_27*20-this.randL_27*x*10}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_27*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      right: String(this.randL_28*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${this.randL_28*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${this.randL_28*20-this.randL_28*x*10}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_28*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      right: String(this.randL_29*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${this.randL_29*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${this.randL_29*20-this.randL_29*x*10}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_29*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      right: String(this.randL_30*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${this.randL_30*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${this.randL_30*20-this.randL_30*x*10}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_30*25+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(-this.randL_31*10+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${this.randL_31*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${this.randL_31*20-this.randL_31*x*10}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_31*45+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(-this.randL_32*10+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${this.randL_32*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${this.randL_32*20-this.randL_32*x*10}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_32*45+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_33*10+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${this.randL_33*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${this.randL_33*20-this.randL_33*x*10}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_33*45+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(-this.randL_34*10+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${-this.randL_34*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*1}vw,${-(this.randL_34*20-this.randL_34*x*10)}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_34*45+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(-this.randL_35*10+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${x*10}vw,${-this.randL_35*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${20-x*10}vw,${-(this.randL_35*20-this.randL_35*x*10)}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_35*45+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_36*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${this.randL_36*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${this.randL_36*20-this.randL_36*x*10}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_36*45+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_37*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${this.randL_37*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${this.randL_37*20-this.randL_37*x*10}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_37*45+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_38*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${this.randL_38*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${this.randL_38*20-this.randL_38*x*10}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_38*45+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_39*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${-this.randL_39*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${-(this.randL_39*20-this.randL_39*x*10)}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_39*45+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                  <animated.div
                    style={{
                      left: String(this.randL_40*5+"vw"),
                      // transform: String("translate("+props.x*10+"vw)"),
                      transform: !this.aller ? 
                      x.interpolate(
                        x => 
                        `translate(${-x*10}vw,${-this.randL_40*x*10}vh)`
                      )
                      :
                      x.interpolate(
                        x => 
                        `translate(${-(20-x*10)}vw,${-(this.randL_40*20-this.randL_40*x*10)}vh)`
                      )
                      ,
                      bottom: String(20+this.randT_40*45+"vh"),
                      width: "7.5px",
                      height: "7.5px",
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: this.tableauImageCouleur[2][1],
                      opacity:  !this.aller ? 
                      x.interpolate(
                        [0,1],
                        [0, 1]
                      )
                      :
                      x.interpolate(
                        [0, 1],
                        [0, 1]
                      )
                      ,
                    }}
                  >
                  </animated.div>
                </div>
              )}
            </this.AnimInfini>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focus_nom : state.focus_nom,
    focus_email : state.focus_email,
    focus_sujet : state.focus_sujet,
    focus_message : state.focus_message,
  }
}
const ComposantContactWithStore = connect(mapStateToProps)(ComposantContact)
const AppWithRouter = withRouter(App)
export default connect(mapStateToProps)(AppWithRouter)


