import React from 'react';
import axios from 'axios';
import {
  Spring, 
  animated
} from 'react-spring/renderprops'
import CircularProgress from '@material-ui/core/CircularProgress'
import { connect } from 'react-redux';

class ComposantContact extends React.Component {

    constructor() {
      super()
      this.state = {
        status_envoi : "rien"
      }
    }
  
    envoiDonnée = async (e) => {
      e.preventDefault();
      let nom = document.getElementById('nom')
      let sujet = document.getElementById('sujet')
      let email = document.getElementById('email')
      let message = document.getElementById('message')
      this.setState({ status_envoi : "en_cours" })
      axios.post("https://qci119s417.execute-api.us-east-1.amazonaws.com/latest/hello", {
        nom: nom.value,
        sujet: sujet.value,
        email: email.value,
        message: message.value
      }).then(
          () => this.setState({ status_envoi : "reussi"})
        ).catch(
          () => this.setState({ status_envoi : "erreur"})
        )
    }
  
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
  
    componentWillUnmount() {
        const action = {type: 'UNFOCUS_NOM'}
        this.props.dispatch(action)
        const action1 = {type: 'UNFOCUS_EMAIL'}
        this.props.dispatch(action1)
        const action2 = {type: 'UNFOCUS_SUJET'}
        this.props.dispatch(action2)
        const action3 = {type: 'UNFOCUS_MESSAGE'}
        this.props.dispatch(action3)
    }
  
    render() {
      if (
        this.state.status_envoi === "rien"
      ) {
        return (
          <div 
            className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "ContenaireContact_mobile" : "ContenaireContact"}
            style={{
              height : (this.props.focus_email || this.props.focus_nom || this.props.focus_sujet || this.props.focus_message) && !this.iOS() && window.navigator.userAgent.indexOf('Mobi') !== -1 ? "200vh" : "100vh",
            }}
          >
            <form id="contact" action="" onSubmit={this.envoiDonnée.bind(this)}>
              <div 
                className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "ContenairePrincipalContact_mobile" : "ContenairePrincipalContact"} 
                style={{ 
                  perspective : "600px"
                }}
              >
                <div 
                  className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "TitreContact_mobile" : "TitreContact"}
                >
                  <p className="TexteTitreContact">
                    Une réponse rapide assuré sur la boîte mail renseigné
                  </p>
                </div>
                <div 
                  className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "NomEmail_mobile" : "NomEmail"} 
                  style={{ perspective : "600px", zIndex:2}}
                >
                  <Spring
                    native
                    from={{ transform : "translateX(-100px) translateZ(20vw) rotateY(270deg)" }}
                    to={{ transform : "translateX(0px) translateZ(0vh) rotateY(360deg)" }}
                    config={{ duration : 750}}
                  >
                    { props => (
                      <animated.div className="Nom" style={{...props,minHeight:"30px", zIndex : 2}}>
                        <input 
                            required
                            className="InputNom" 
                            type="name" 
                            id="nom" 
                            placeholder="Nom"
                            onFocus={ () => {
                                const action = { 
                                type: 'FOCUS_NOM'}
                                this.props.dispatch(action)
                            }}
                            onBlur={() => {
                                const action2 = { 
                                type: 'UNFOCUS_NOM'}
                                this.props.dispatch(action2)
                            }}
                        />
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
                      <animated.div className="Email" style={{...props,minHeight:"30px"}}>
                        <input 
                            required
                            className="InputEmail" 
                            type="email" 
                            id="email" 
                            placeholder="E-mail" 
                            onFocus={() => {
                                const action = { 
                                type: 'FOCUS_EMAIL'}
                                this.props.dispatch(action)
                            }}
                            onBlur={() => {
                                const action2 = { 
                                type: 'UNFOCUS_EMAIL'}
                                this.props.dispatch(action2)
                            }}
                        />
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
                      <animated.div 
                        className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "Sujet_mobile" : "Sujet"} 
                        style={{...props,minHeight:"30px"}}
                      >
                        <input 
                            required
                            className="InputSujet" 
                            type="text" 
                            id="sujet" 
                            placeholder="Sujet" 
                            onFocus={() => {
                                const action = { 
                                type: 'FOCUS_SUJET'}
                                this.props.dispatch(action)
                            }}
                            onBlur={() => {
                                const action2 = { 
                                type: 'UNFOCUS_SUJET'}
                                this.props.dispatch(action2)
                            }}
                        />
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
                      <animated.div 
                        className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "Message_mobile" : "Message" }
                        style={{...props,minHeight:"120px"}}
                      >
                        <textarea 
                            required
                            className="InputMessage" 
                            id="message" 
                            form="contact" 
                            placeholder="Message" 
                            onFocus={() => {
                                const action = { 
                                type: 'FOCUS_MESSAGE'}
                                this.props.dispatch(action)
                            }}
                            onBlur={() => {
                                const action2 = { 
                                type: 'UNFOCUS_MESSAGE'}
                                this.props.dispatch(action2)
                            }}
                        />
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
                      <animated.div 
                        className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "Envoyer_mobile" : "Envoyer" }
                        style={{
                          transform: props.x.interpolate(
                            [0, 0.7, 0.8, 0.9, 1], 
                            ["translateX(-150vw)", "translateX(20vw)", "translateX(-10vw)", "translateX(10vw)", "translateX(0vw)"]
                          ),
                          opacity: props.x.interpolate(
                            [0, 0.5, 1],
                            [0, 0, 1]
                          )
                        }}
                      >
                        <div 
                          className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "ContenaireEnvoyer1_mobile" : "ContenaireEnvoyer1"}
                        >
  
                        </div>
                        <div 
                          className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "ContenaireEnvoyer2_mobile" : "ContenaireEnvoyer2"}
                        >
                          <input className="BoutonEnvoyer" form="contact" type="submit" value="Envoyer" />
                        </div>
                      </animated.div>
                    )}
                  </Spring>
              </div>
            </form>
          </div>
        )
      } else if (
        this.state.status_envoi === "en_cours"
      ){
        return (
          <div className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "ContenaireContact_mobile_reussi" : "ContenaireContact"}>
            <div className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "contenaire_envoyer_encours_mobile" : "contenaire_envoyer"}>
              <CircularProgress color="#00008B" />
            </div>
          </div>
        )
      } else if (
        this.state.status_envoi === "reussi"
      ) {
        return (
          <div className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "ContenaireContact_mobile_reussi" : "ContenaireContact"}>
            <div className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "contenaire_envoyer_mobile" : "contenaire_envoyer"}>
              <p style={{ color: "#065446", fontWeight: "bold", textAlign: "center" }}>
                Votre message a bien été réceptionné, merci et a très bientôt ! 
              </p>
            </div>
          </div>
        )
      } else {
        return (
          <div className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "ContenaireContact_mobile_erreur" : "ContenaireContact"}> 
            <div className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "contenaire_envoyer_erreur_mobile" : "contenaire_erreur_envoyer"} >
              <p style={{ color: "#cd0a0a", fontWeight: "bold", textAlign: "center" }}>
                Malheuresement une erreur est survenue lors de l'envoi de votre message. Réessayer ulterieurement
              </p>
            </div>
          </div>
        )
      }
    }
  }

  export default connect()(ComposantContact)