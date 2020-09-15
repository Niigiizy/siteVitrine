import React from 'react';
import {
  Spring, 
  animated
} from 'react-spring/renderprops'

export default class ComposantApercu extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        ouvert: false,
        animation : true,
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
        ouvert_1_1_1 : false,
        ouvert_1_1_2 : false,
        ouvert_1_2_1 : false,
        ouvert_2_1 : false,
        ouvert_2_2 : false,
      }
      this.reset = false
      this.premiereAnim = true
    }
  
    componentDidMount() {
      this.premiereAnim = true
    }
  
    render() {
      return (
        <div 
          className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "ContenaireApercu_mobile" : "ContenaireApercu"}
          style={{
            left: window.navigator.userAgent.indexOf('Mobi') !== -1 && window.innerWidth > 400 ? String((window.innerWidth-350)/2+"px") : "2.5vw"
          }}
        >
          <Spring
            native
            onRest={
              () => {
                if (
                  this.state.clique_1_1_1
                ) {
                  this.setState({ ouvert_1_1_1: true })
                } else if (
                  this.state.clique_1_1_2
                ) {
                  this.setState({ ouvert_1_1_2: true })
                } else if (
                  this.state.clique_1_2_1
                ) {
                  this.setState({ ouvert_1_2_1: true })
                } else if (
                  this.state.clique_2_1
                ) {
                  this.setState({ ouvert_2_1: true })
                } else if (
                  this.state.clique_2_2
                ) {
                  this.setState({ ouvert_2_2: true })
                } else {
                  this.setState({
                    ouvert_1_1_1: false,
                    ouvert_1_1_2 : false,
                    ouvert_1_2_1 : false,
                    ouvert_2_1 : false,
                    ouvert_2_2 : false
                  })
                }
                this.premiereAnim = false
              }
            }
            from={{
              y: 0, 
              x_1: 0,
              x_2: 0,
              x_3: 0,
              x_4: 0,
              x_5: 0 
            }}
            to={
              this.state.clique_1_1_1 || 
              this.state.clique_1_1_2 || 
              this.state.clique_1_2_1 || 
              this.state.clique_2_1 || 
              this.state.clique_2_2 ||
              this.premiereAnim
              ? 
              { y: 1, 
                x_1: 1,
                x_2: 1,
                x_3: 1,
                x_4: 1,
                x_5: 1 
              } 
              : 
              { y: 0, 
                x_1: 0,
                x_2: 0,
                x_3: 0,
                x_4: 0,
                x_5: 0  
              }
            }
            config={
              key => (
                key === "y" ? 
                {duration: 150} 
                : 
                key === "x_1" ?
                {duration: 250}
                : 
                key === "x_2" ?
                { duration: 250, delay: 125}
                :
                key === "x_3" ?
                { duration: 250, delay: 250}
                :
                key === "x_4" ?
                { duration: 250, delay: 375}
                :
                key === "x_5" ?
                { duration: 250, delay: 500}
                :
                null
                )
            }
          >
            {(props) => (
              <animated.div 
                className={window.navigator.userAgent.indexOf('Mobi') !== -1 ? "ContenairePrincipalApercu_mobile" : "ContenairePrincipalApercu"}
                style={window.navigator.userAgent.indexOf('Mobi') === -1 ? {
                  height: (window.innerHeight < 700 || window.innerWidth < 1100) 
                   ? "500px" : "703.5px",
                  width: (window.innerWidth < 1100 || window.innerHeight < 700) 
                  ? "500px" : "705px",
                  top: window.innerHeight < 700 || window.innerWidth < 1100 ? 
                  String((window.innerHeight - 500)/2)+"px" 
                  : 
                  String((window.innerHeight - 700)/2)+"px" ,
                  right: window.innerWidth < 1500 && window.innerWidth > 800 ? "14vw" : window.innerWidth < 800 ? "10vw" : "28vw",
                  left: window.innerWidth < 800 ? "20vh" : null
                } : null}
              >
                <animated.div
                  className="Apercu_1"
                  style={ ( () => {
                    if (
                      this.state.clique_1_1_1 || 
                      this.state.clique_1_1_2 || 
                      this.state.clique_1_2_1
                    ) {
                      return { 
                        width: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["70%", "90%", "100%", "150%", "100%"]
                        )
                      }
                    } else if (
                      !this.state.clique_1_1_1 && 
                      !this.state.clique_1_1_2 &&
                      !this.state.clique_1_2_1 && 
                      !this.state.clique_2_1 &&
                      !this.state.clique_2_2 &&
                      (this.state.ouvert_1_1_1 || this.state.ouvert_1_1_2 || this.state.ouvert_1_2_1)
                    ) {
                      return { 
                        width: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["70%", "90%", "100%", "150%", "100%"]
                        )
                      } 
                    } else if (
                      !this.state.clique_1_1_1 && 
                      !this.state.clique_1_1_2 &&
                      !this.state.clique_1_2_1 && 
                      !this.state.clique_2_1 &&
                      !this.state.clique_2_2 && 
                      (this.state.ouvert_2_1 || this.state.ouvert_2_2)
                    ) {
                      return { 
                        width: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["70%", "60%", "30%", "20%", "0%"]
                        )
                      } 
                    } else if (
                      this.state.clique_2_1 || 
                      this.state.clique_2_2
                    ) {
                      return {
                        width: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["70%", "30%", "20%", "10%", "0%"]
                        )
                      }
                    }
                  } )()
                  }
                >
                  <animated.div
                    className="Apercu_1_1"
                    style={ (() => {
                      if (
                        this.state.clique_1_1_1 ||
                        this.state.clique_1_1_2
                      ) {
                        return {
                          height: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["59%", "70%", "80%", "90%", "100%"]
                          )
                        }
                      } else if (
                        this.state.clique_1_2_1
                      ) {
                        return {
                          height: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["59%", "35%", "20%", "10%", "0%"]
                          )
                        }
                      } else if (
                        this.state.ouvert_1_1_1 ||
                        this.state.ouvert_1_1_2
                      ) {
                        return {
                          height: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["59%", "65%", "80%", "90%", "100%"]
                          )
                        }
                      } else if (
                        this.state.ouvert_1_2_1
                      ) {
                        return {
                          height: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["59%", "35%", "20%", "10%", "0%"]
                          )
                        }
                      }
                    })()
                    }
                  >
                    <animated.div
                      className="Apercu_1_1_1"
                      onClick={
                        () => {
                          this.setState({ clique_1_1_1: !this.state.clique_1_1_1 });
                        }
                      }
                      onMouseOver={
                        window.navigator.userAgent.indexOf('Mobi') !== -1 ? null : () => {
                          this.setState({ focus_1_1_1: !this.state.focus_1_1_1 })
                        }
                      }
                      onMouseOut={
                        window.navigator.userAgent.indexOf('Mobi') !== -1 ? null : () => {
                          this.setState({ focus_1_1_1: !this.state.focus_1_1_1})
                        }
                      }
                      style={ ( () => { 
                        if (
                          this.premiereAnim 
                        ) {
                          return {
                            transform: props.x_1.interpolate(
                              [0, 0.6, 0.7, 0.8, 0.9, 1],
                              ["scale(0)", "scale(1.1)", "scale(0.9)", "scale(1.05)", "scale(0.95)", "scale(1)"]
                            )
                          }
                        } else if (
                          this.state.clique_1_1_1
                        ) {
                          return {
                            width: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["48%", "70%", "80%", "90%", "100%"]
                            ),
                            opacity: 1
                          }
                        } else if (
                          this.state.clique_1_1_2
                        ) {
                          return {
                            width: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["48%", "30%", "20%", "10%", "0%"]
                            )
                          }
                        } else if (
                          this.state.ouvert_1_1_1
                        ) {
                          return {
                            width: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["48%", "70%", "80%", "90%", "100%"]
                            ),
                            opacity: 1
                          }
                        } else if (
                          this.state.ouvert_1_1_2
                        ) {
                          return {
                            width: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["48%", "30%", "20%", "10%", "0%"]
                            )
                          }
                        } else if (
                          this.state.focus_1_1_1 &&
                          !this.state.clique_1_1_1
                        ) {
                          return {
                            transform: "scale(1.05)",
                            opacity: 1
                          }
                        }
                      } )() }
                    >
                      <animated.div
                        className="Contenaire_gif_apercu_1_1_1"
                        id="gif_1_1_1"
                        style={ ( () => {
                          if (
                            this.state.clique_1_1_1
                          ) {
                            return {
                              width: props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["95%", "80%", "70%", "60%", "50.5%"]
                              ),
                              marginLeft : props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["5%", "3%", "2%", "2%", "2%"]
                              )
                            }
                          }
                        } )() }
                      >
  
                      </animated.div>
                      <animated.div
                        className="Contenaire_texte_apercu_1_1_1"
                        style={ ( () => {
                          if (
                            this.state.clique_1_1_1
                          ) {
                            return {
                              width: props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["0%", "20%", "30%", "40%", "43%"]
                              ),
                              opacity: props.y.interpolate(
                                [0, 0.5, 0.7, 0.9, 1],
                                ["0", "0", "0", "0.8", "1"]
                              ), 
                              marginLeft : props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["0%", "30%", "35%", "38%", "50%"]
                              ), 
                              marginTop : props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["0%", "0%", "0%", "2%", "2.5%"]
                              )
                            }
                          }
                        } )() }
                      >
                        <animated.div
                          className="Texte_apercu_context"
                        >
                          <p 
                            style={{ 
                              fontWeight: "bold", 
                              color: "#4169E1",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 3vw, 20px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "1em" : "1.3em",
                              textAlign: "center",
                              marginTop: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "15%" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "20%" : "30%"
                            }}
                          >
                            { 
                              this.state.clique_1_1_1 
                              ? 
                              "Context :" 
                              : 
                              null
                            }
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1em",
                              textAlign: "center", 
                              marginRight: "20%", 
                              marginLeft: "20%",
                              marginTop: "-5%"
                            }}
                          >
                            { 
                              this.state.clique_1_1_1 
                              ? 
                              "Projet personnel de création d'application cross-platform" 
                              : 
                              null
                            }
                          </p>
                        </animated.div>
                        <animated.div
                          className="Texte_apercu_techno"
                        >
                          <p 
                            style={{ 
                              color: "#4169E1",
                              fontWeight: "bold", 
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 3vw, 20px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "1em" : "1.3em",
                              textAlign: "center",
                              marginTop: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "-25%" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "-15%" : "-10%"
                            }}
                          >
                            { 
                              this.state.clique_1_1_1 
                              ? 
                              "Technologie utilisé :" 
                              : 
                              null}
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1em", 
                              textAlign: "center", 
                              marginRight: "20%", 
                              marginLeft: "20%",
                              marginTop: "-5%"
                            }}
                          >
                            { 
                              this.state.clique_1_1_1 
                              ? 
                              "React Native | Expo | Redux | React Navigation | Express JS | Node JS | AWS " 
                              : 
                              null}
                          </p>
                        </animated.div>
                        <animated.div
                          className="Texte_apercu_description"
                        >
                          <p 
                            style={{ 
                              color: "#4169E1",
                              fontWeight: "bold", 
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 3vw, 20px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "1em" : "1.3em",
                              textAlign: "center",
                              marginTop: "-35%"
                            }}
                          >
                            { this.state.clique_1_1_1 ? "Description :" : null}
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1em", 
                              textAlign: "center", 
                              marginRight: "20%", 
                              marginLeft: "20%",
                              marginTop: "-5%"
                            }}
                          >
                            { 
                              this.state.clique_1_1_1 
                              ? 
                              "Gestion du composant Flatlist pour afficher le résultat de recherche avec utilisation d'AWS en back-end" 
                              : 
                              null}
                          </p>
                        </animated.div>
                      </animated.div>
                      <animated.div
                        className="VoirPlus"
                        style={
                            !this.state.clique_1_1_1 &&
                            !this.state.clique_1_1_2 &&
                            !this.state.clique_1_2_1 &&
                            !this.state.clique_2_1 &&
                            !this.state.clique_2_2 
                            ? 
                            null
                            : 
                            {height: "0%"}
                        }
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "white",
                            fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "0.5em" : "1em"
                          }}
                        >
                          {
                            !this.state.clique_1_1_1 &&
                            !this.state.clique_1_1_2 &&
                            !this.state.clique_1_2_1 &&
                            !this.state.clique_2_1 &&
                            !this.state.clique_2_2 &&
                            this.state.focus_1_1_1
                            ? 
                            "Voir plus" 
                            : 
                            null
                          }
                        </p>
                      </animated.div>
                      <div
                        className="CliquezReduir"
                        style={{
                          opacity: this.state.clique_1_1_1 ? 1 : 0,
                          textAlign: "center",
                          fontSize:"0.8em",
                          color: "white",
                          fontWeight: "bold"
                        }}
                      >
                        <p>
                        {
                            this.state.clique_1_1_1
                            ? 
                            "Cliquez pour Réduir" 
                            : 
                            null
                          }
                        </p>
                      </div>
                    </animated.div>
                    <animated.div
                      className="Apercu_1_1_2"
                      onClick={
                        () => {
                          this.setState({ clique_1_1_2: !this.state.clique_1_1_2 });
                        }
                      }
                      onMouseOver={
                        window.navigator.userAgent.indexOf('Mobi') !== -1 ? null : () => {
                          this.setState({ focus_1_1_2: !this.state.focus_1_1_2 })
                        }
                      }
                      onMouseOut={
                        window.navigator.userAgent.indexOf('Mobi') !== -1 ? null : () => {
                          this.setState({ focus_1_1_2: !this.state.focus_1_1_2})
                        }
                      }
                      style={ ( () => {
                        if (
                          this.premiereAnim 
                        ) {
                          return {
                            transform: props.x_2.interpolate(
                              [0, 0.6, 0.7, 0.8, 0.9, 1],
                              ["scale(0)", "scale(1.1)", "scale(0.9)", "scale(1.05)", "scale(0.95)", "scale(1)"]
                            )
                          }
                        } else if (
                          this.state.clique_1_1_2
                        ) {
                          return {
                            width: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["48%", "70%", "80%", "90%", "100%"]
                            ),
                            marginLeft: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["4%", "0%", "0%", "0%", "0%"]
                            ),
                            opacity: 1
                          }
                        } else if (
                          this.state.clique_1_1_1
                        ) {
                          return {
                            width: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["48%", "30%", "20%", "10%", "0%"]
                            ),
                            marginLeft: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["4%", "0%", "0%", "0%", "0%"]
                            )
                          }
                        } else if (
                          this.state.ouvert_1_1_2
                        ) {
                          return {
                            width: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["48%", "70%", "80%", "90%", "100%"]
                            ),
                            marginLeft: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["4%", "0%", "0%", "0%", "0%"]
                            ),
                            opacity: 1
                          }
                        } else if (
                          this.state.ouvert_1_1_1
                        ) {
                          return {
                            width: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["48%", "30%", "20%", "10%", "0%"]
                            ),
                            marginLeft: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["4%", "0%", "0%", "0%", "0%"]
                            )
                          }
                        } else if (
                          this.state.focus_1_1_2 &&
                          !this.state.clique_1_1_2
                        ) {
                          return {
                            transform: "scale(1.05)",
                            opacity: 1
                          }
                        }
                      } )() }
                    >
                      <animated.div
                        className="Contenaire_gif_apercu_1_1_2"
                        id="gif_1_1_2"
                        style={ ( () => {
                          if (
                            this.state.clique_1_1_2
                          ) {
                            return {
                              width: props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["95%", "80%", "70%", "60%", "50.5%"]
                              ),
                              marginLeft : props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["5%", "3%", "2%", "2%", "2%"]
                              )
                            }
                          }
                        } )() }
                      >
  
                      </animated.div>
                      <animated.div
                        className="Contenaire_texte_apercu_1_1_1"
                        style={ ( () => {
                          if (
                            this.state.clique_1_1_2
                          ) {
                            return {
                              width: props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["0%", "20%", "30%", "40%", "43%"]
                              ),
                              opacity: props.y.interpolate(
                                [0, 0.5, 0.7, 0.9, 1],
                                ["0", "0", "0", "0.8", "1"]
                              ), 
                              marginLeft : props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["0%", "30%", "35%", "38%", "50%"]
                              ), 
                              marginTop : props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["0%", "0%", "0%", "2%", "2.5%"]
                              )
                            }
                          }
                        } )() }
                      >
                        <animated.div
                          className="Texte_apercu_context"
                        >
                          <p 
                            style={{ 
                              fontWeight: "bold", 
                              color: "#4169E1",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 3vw, 20px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "1em" : "1.3em",
                              textAlign: "center",
                              marginTop : window.navigator.userAgent.indexOf('Mobi') !== -1 ? "25%" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "25%" : "30%"
                            }}
                          >
                            { 
                              this.state.clique_1_1_2 
                              ? 
                              "Context :" 
                              : 
                              null
                            }
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1em",
                              textAlign: "center", 
                              marginRight: "20%", 
                              marginLeft: "20%",
                              marginTop: "-5%"
                            }}
                          >
                            { 
                              this.state.clique_1_1_2 
                              ? 
                              "Projet personnel de création d'application cross-platform" 
                              : 
                              null
                            }
                          </p>
                        </animated.div>
                        <animated.div
                          className="Texte_apercu_techno"
                        >
                          <p 
                            style={{ 
                              color: "#4169E1",
                              fontWeight: "bold", 
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 3vw, 20px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "1em" : "1.3em",
                              textAlign: "center",
                              marginTop: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "-5%" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "-10%" : "-5%"
                            }}
                          >
                            { 
                              this.state.clique_1_1_2 
                              ? 
                              "Technologie utilisé :" 
                              : 
                              null}
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1em", 
                              textAlign: "center", 
                              marginRight: "20%", 
                              marginLeft: "20%",
                              marginTop: "-5%"
                            }}
                          >
                            { 
                              this.state.clique_1_1_2 
                              ? 
                              "React Native | Expo | Redux | React Navigation | Express JS | Node JS | AWS " 
                              : 
                              null}
                          </p>
                        </animated.div>
                        <animated.div
                          className="Texte_apercu_description"
                        >
                          <p 
                            style={{ 
                              color: "#4169E1",
                              fontWeight: "bold", 
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 3vw, 20px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "1em" : "1.3em",
                              textAlign: "center",
                              marginTop: "-35%"
                            }}
                          >
                            { this.state.clique_1_1_2 ? "Description :" : null}
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1em", 
                              textAlign: "center", 
                              marginRight: "20%", 
                              marginLeft: "20%",
                              marginTop: "-5%"
                            }}
                          >
                            { 
                              this.state.clique_1_1_2 
                              ? 
                              "Animations légère pour intéractivité accru" 
                              : 
                              null}
                          </p>
                        </animated.div>
                      </animated.div>
                      <animated.div
                        className="VoirPlus"
                        style={
                            !this.state.clique_1_1_1 &&
                            !this.state.clique_1_1_2 &&
                            !this.state.clique_1_2_1 &&
                            !this.state.clique_2_1 &&
                            !this.state.clique_2_2 
                            ? 
                            null
                            : 
                            {height: "0%"}
                        }
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "white",
                            fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "0.5em" : "1em"
                          }}
                        >
                          {
                            !this.state.clique_1_1_1 &&
                            !this.state.clique_1_1_2 &&
                            !this.state.clique_1_2_1 &&
                            !this.state.clique_2_1 &&
                            !this.state.clique_2_2 &&
                            this.state.focus_1_1_2
                            ? 
                            "Voir plus" 
                            : 
                            null
                          }
                        </p>
                      </animated.div>
                      <div
                        className="CliquezReduir"
                        style={{
                          opacity: this.state.clique_1_1_2 ? 1 : 0,
                          textAlign: "center",
                          fontSize:"0.8em",
                          color: "white",
                          fontWeight: "bold"
                        }}
                      >
                        <p>
                        {
                            this.state.clique_1_1_2
                            ? 
                            "Cliquez pour Réduir" 
                            : 
                            null
                          }
                        </p>
                      </div>
                    </animated.div>
                  </animated.div>
                  <animated.div
                    className="Apercu_1_2"
                    style={ ( () => {
                      if (
                        this.premiereAnim 
                      ) {
                        return {
                          transform: props.x_5.interpolate(
                            [0, 0.6, 0.7, 0.8, 0.9, 1],
                            ["scale(0)", "scale(1.1)", "scale(0.9)", "scale(1.05)", "scale(0.95)", "scale(1)"]
                          )
                        }
                      } else if (
                        this.state.clique_1_1_1 ||
                        this.state.clique_1_1_2
                      ) {
                        return {
                          height: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["38.5%", "30%", "20%", "10%", "0%"]
                          ),
                          marginTop: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["3.8%", "0%", "0%", "0%", "0%"]
                          )
                        }
                      } else if (
                        this.state.clique_1_2_1
                      ) {
                        return {
                          height: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["38.5%", "65%", "80%", "90%", "100%"]
                          ),
                          marginTop: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["3.8%", "0%", "0%", "0%", "-1%"]
                          )
                        }
                      } else if (
                        this.state.ouvert_1_1_1 ||
                        this.state.ouvert_1_1_2
                      ) {
                        return {
                          height: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["38.5%", "35%", "20%", "10%", "0%"]
                          ),
                          marginTop: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["3.8%", "0%", "0%", "0%", "0%"]
                          )
                        }
                      } else if (
                        this.state.ouvert_1_2_1
                      ) {
                        return {
                          height: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["38.5%", "65%", "80%", "90%", "100%"]
                          ),
                          marginTop: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["3.8%", "0%", "0%", "0%", "0%"]
                          )
                        }
                      } else if (
                        this.state.focus_1_2_1 &&
                        !this.state.clique_1_2_1
                      ) {
                        return {
                          transform: "scale(1.05)",
                          opacity: 1
                        }
                      }
                    })()
  
                    }
                  >
                    <animated.div
                      className="Apercu_1_2_1"
                      onClick={
                        () => {
                          this.setState({ clique_1_2_1: !this.state.clique_1_2_1 });
                        }
                      }
                      onMouseOver={
                        window.navigator.userAgent.indexOf('Mobi') !== -1 ? null : () => {
                          this.setState({ focus_1_2_1: !this.state.focus_1_2_1 })
                        }
                      }
                      onMouseOut={
                        window.navigator.userAgent.indexOf('Mobi') !== -1 ? null : () => {
                          this.setState({ focus_1_2_1: !this.state.focus_1_2_1})
                        }
                      }
                    >
                      <animated.div
                        className="Contenaire_gif_apercu_1_2_1"
                        id="gif_1_2_1"
                        style={ ( () => {
                          if (
                            this.state.clique_1_2_1
                          ) {
                            return {
                              width: props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["95%", "94%", "93%", "92%", "90%"]
                              ),
                              height: props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["95%", "70%", "60%", "50%", "40%"]
                              ), 
                              marginLeft : props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["5%", "3%", "2%", "2%", "2%"]
                              )
                            }
                          }
                        } )() }
                      >
  
                      </animated.div>
                      <animated.div
                        className="Contenaire_texte_apercu_1_2_1"
                        style={ ( () => {
                          if (
                            this.state.clique_1_2_1
                          ) {
                            return {
                              width: props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["0%", "0%", "0%", "0%", "90%"]
                              ),
                              height: props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["0%", "0%", "0%", "0%", "53%"]
                              ),
                              opacity: props.y.interpolate(
                                [0, 0.5, 0.7, 0.9, 1],
                                ["0", "0", "0", "0.8", "1"]
                              ), 
                              marginLeft : props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["0%", "0%", "0%", "0%", "-0.5%"]
                              ), 
                              marginTop : props.y.interpolate(
                                [0, 0.5, 0.7, 0.8, 1],
                                ["0%", "0%", "0%", "2%", "39%"]
                              )
                            }
                          }
                        } )() }
                      >
                        <animated.div
                          className="Texte_apercu_parcekonlepeu"
                        >
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1.3em",
                              textAlign: "center",
                              color: "#4169E1",
                              marginRight: "2%",
                            }}
                          >
                            { 
                              this.state.clique_1_2_1 
                              ? 
                              "Le site ici présent est un aperçu de mon savoir faire en React JS, Javascript, CSS, HTML, AWS, Git et Github." 
                              : 
                              null
                            }
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1.3em",
                              textAlign: "center",
                              color: "#4169E1",
                              marginRight: "2%",
                            }}
                          >
                            { 
                              this.state.clique_1_2_1 
                              ? 
                              " J'ai essayé d'apporter de l'interactivité avec divers animations en utilisant React Spring, et ai utilisé React Routeur pour assurer la navigation sur cette application web monopage."
                              : 
                              null
                            }
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1.3em",
                              textAlign: "center",
                              color: "#4169E1",
                              marginRight: "2%",
                            }}
                          >
                            { 
                              this.state.clique_1_2_1 
                              ? 
                              " une gestion des divers devices sur lesquels ce site pourrait être visité a été effectuée en adaptant l'agencement des divers composants."
                              : 
                              null
                            }
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1.3em",
                              textAlign: "center",
                              color: "#4169E1",
                              marginRight: "2%",
                              marginLeft: "2%"
                            }}
                          >
                            { 
                              this.state.clique_1_2_1 
                              ? 
                              "Pour finir un travail de design a été effectué sur la mise en page même si cela n'égale pas le travail d'un professionnel."
                              : 
                              null
                            }
                          </p>
                        </animated.div>
                      </animated.div>
                      <animated.div
                        className="VoirPlus"
                        style={
                            !this.state.clique_1_1_1 &&
                            !this.state.clique_1_1_2 &&
                            !this.state.clique_1_2_1 &&
                            !this.state.clique_2_1 &&
                            !this.state.clique_2_2 
                            ? 
                            null
                            : 
                            {height: "0%"}
                        }
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "white",
                            fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "0.5em" : "1em"
                          }}
                        >
                          {
                            !this.state.clique_1_1_1 &&
                            !this.state.clique_1_1_2 &&
                            !this.state.clique_1_2_1 &&
                            !this.state.clique_2_1 &&
                            !this.state.clique_2_2 &&
                            this.state.focus_1_2_1
                            ? 
                            "Voir plus" 
                            : 
                            null
                          }
                        </p>
                      </animated.div>
                      <div
                        className="CliquezReduir"
                        style={{
                          opacity: this.state.clique_1_2_1 ? 1 : 0,
                          textAlign: "center",
                          fontSize:"0.8em",
                          color: "white",
                          fontWeight: "bold"
                        }}
                      >
                        <p>
                        {
                            this.state.clique_1_2_1
                            ? 
                            "Cliquez pour Réduir" 
                            : 
                            null
                          }
                        </p>
                      </div>
                    </animated.div>
                  </animated.div>
                </animated.div>
                <animated.div
                  className="Apercu_2"
                  style={( () => {
                    if (
                      this.state.clique_1_1_1 || 
                      this.state.clique_1_1_2 || 
                      this.state.clique_1_2_1
                    ) {
                      return { 
                        width: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["28%", "10%", "0%", "0%", "0%"]
                        ),
                        marginLeft: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["3%", "0%", "0%", "0%", "0%"]
                        )
                      }
                    } else if (
                      !this.state.clique_1_1_1 && 
                      !this.state.clique_1_1_2 && 
                      !this.state.clique_1_2_1 && 
                      !this.state.clique_2_1 && 
                      !this.state.clique_2_2 &&
                      (this.state.ouvert_1_1_1 || this.state.ouvert_1_1_2 || this.state.ouvert_1_2_1)
                    ) {
                      return { 
                        width: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["28%", "10%", "0%", "0%", "0%"]
                        ),
                        marginLeft: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["3%", "0%", "0%", "0%", "0%"]
                        )
                      }
                    } else if (
                      !this.state.clique_1_1_1 && 
                      !this.state.clique_1_1_2 && 
                      !this.state.clique_1_2_1 && 
                      !this.state.clique_2_1 && 
                      !this.state.clique_2_2 &&
                      (this.state.ouvert_2_1 || this.state.ouvert_2_2)
                    ) {
                      return { 
                        width: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["28%", "40%", "70%", "80%", "100%"]
                        ),
                        marginLeft: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["3%", "0%", "0%", "0%", "0%"]
                        )
                      }
                    } else if (
                      this.state.clique_2_1 || 
                      this.state.clique_2_2
                    ) {
                      return {
                        width: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["28%", "70%", "80%", "90%", "100%"]
                        ),
                        marginLeft: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["3%", "2%", "1%", "0%", "0%"]
                        )
                      }
                    }
                  } )()}
                >
                  <animated.div
                    className="Apercu_2_1"
                    onClick={
                      () => {
                        this.setState({ clique_2_1: !this.state.clique_2_1 });
                      }
                    }
                    onMouseOver={
                      window.navigator.userAgent.indexOf('Mobi') !== -1 ? null : () => {
                        this.setState({ focus_2_1: !this.state.focus_2_1 })
                      }
                    }
                    onMouseOut={
                      window.navigator.userAgent.indexOf('Mobi') !== -1 ? null : () => {
                        this.setState({ focus_2_1: !this.state.focus_2_1})
                      }
                    }
                    style={ ( () => {
                      if (
                        this.premiereAnim 
                      ) {
                        return {
                          transform: props.x_3.interpolate(
                            [0, 0.6, 0.7, 0.8, 0.9, 1],
                            ["scale(0)", "scale(1.1)", "scale(0.9)", "scale(1.05)", "scale(0.95)", "scale(1)"]
                          )
                        }
                      } else if (
                        this.state.clique_2_1
                      ) {
                        return {
                          height: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["48.5%", "70%", "80%", "90%", "100%"]
                          ),
                          opacity: 1
                        }
                      } else if (
                        this.state.clique_2_2
                      ) {
                        return {
                          height: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["48.5%", "30%", "20%", "10%", "-10%"]
                          )
                        }
                      } else if (
                        this.state.ouvert_2_1
                      ) {
                        return {
                          height: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["48.5%", "70%", "80%", "90%", "100%"]
                          ),
                          opacity: 1
                        }
                      } else if (
                        this.state.ouvert_2_2
                      ) {
                        return {
                          height: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["48.5%", "30%", "20%", "10%", "0%"]
                          )
                        }
                      } else if (
                        this.state.focus_2_1 &&
                        !this.state.clique_2_1
                      ) {
                        return {
                          transform: "scale(1.05)",
                          opacity: 1
                        }
                      }
                    } )() }
                  >
                    <animated.div
                      className="Contenaire_gif_apercu_2_1"
                      id="gif_2_1"
                      style={ ( () => {
                        if (
                          this.state.clique_2_1
                        ) {
                          return {
                            width: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["95%", "80%", "70%", "60%", "50.5%"]
                            ),
                            marginLeft : props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["5%", "3%", "2%", "2%", "2%"]
                            )
                          }
                        }
                      } )() }
                    >
  
                    </animated.div>
                    <animated.div
                      className="Contenaire_texte_apercu_1_1_1"
                      style={ ( () => {
                        if (
                          this.state.clique_2_1
                        ) {
                          return {
                            width: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["0%", "20%", "30%", "40%", "43%"]
                            ),
                            opacity: props.y.interpolate(
                              [0, 0.5, 0.7, 0.9, 1],
                              ["0", "0", "0", "0.8", "1"]
                            ), 
                            marginLeft : props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["0%", "30%", "35%", "38%", "50%"]
                            ), 
                            marginTop : props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["0%", "0%", "0%", "2%", "2.5%"]
                            )
                          }
                        }
                      } )() }
                    >
                      <animated.div
                          className="Texte_apercu_context"
                        >
                          <p 
                            style={{ 
                              fontWeight: "bold", 
                              color: "#4169E1",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 3vw, 20px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "1em" : "1.3em",
                              textAlign: "center",
                              marginTop: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "25%" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "25%" : "30%"
                            }}
                          >
                            { 
                              this.state.clique_2_1
                              ? 
                              "Context :" 
                              : 
                              null
                            }
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1em",
                              textAlign: "center", 
                              marginRight: "20%", 
                              marginLeft: "20%",
                              marginTop: "-5%"
                            }}
                          >
                            { 
                              this.state.clique_2_1 
                              ? 
                              "Projet personnel de création d'application cross-platform" 
                              : 
                              null
                            }
                          </p>
                        </animated.div>
                        <animated.div
                          className="Texte_apercu_techno"
                        >
                          <p 
                            style={{ 
                              color: "#4169E1",
                              fontWeight: "bold", 
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 3vw, 20px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "1em" : "1.3em",
                              textAlign: "center",
                              marginTop: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "-10%" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "-10%" : "-5%"
                            }}
                          >
                            { 
                              this.state.clique_2_1 
                              ? 
                              "Technologie utilisé :" 
                              : 
                              null}
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1em", 
                              textAlign: "center", 
                              marginRight: "20%", 
                              marginLeft: "20%",
                              marginTop: "-5%"
                            }}
                          >
                            { 
                              this.state.clique_2_1 
                              ? 
                              "React Native | Expo | Redux | React Navigation | Express JS | Node JS | AWS " 
                              : 
                              null}
                          </p>
                        </animated.div>
                        <animated.div
                          className="Texte_apercu_description"
                        >
                          <p 
                            style={{ 
                              color: "#4169E1",
                              fontWeight: "bold", 
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 3vw, 20px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "1em" : "1.3em",
                              textAlign: "center",
                              marginTop: "-35%"
                            }}
                          >
                            { this.state.clique_2_1 ? "Description :" : null}
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1em", 
                              textAlign: "center", 
                              marginRight: "20%", 
                              marginLeft: "20%",
                              marginTop: "-5%"
                            }}
                          >
                            { 
                              this.state.clique_2_1 
                              ? 
                              "Gestion de l'état global de l'application avec Redux" 
                              : 
                              null}
                          </p>
                        </animated.div>
                    </animated.div>
                    <animated.div
                        className="VoirPlus"
                        style={
                            !this.state.clique_1_1_1 &&
                            !this.state.clique_1_1_2 &&
                            !this.state.clique_1_2_1 &&
                            !this.state.clique_2_1 &&
                            !this.state.clique_2_2 
                            ? 
                            null
                            : 
                            {height: "0%"}
                        }
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "white",
                            fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "0.5em" : "1em"
                          }}
                        >
                          {
                            !this.state.clique_1_1_1 &&
                            !this.state.clique_1_1_2 &&
                            !this.state.clique_1_2_1 &&
                            !this.state.clique_2_1 &&
                            !this.state.clique_2_2 &&
                            this.state.focus_2_1
                            ? 
                            "Voir plus" 
                            : 
                            null
                          }
                        </p>
                      </animated.div>
                      <div
                        className="CliquezReduir"
                        style={{
                          opacity: this.state.clique_2_1 ? 1 : 0,
                          textAlign: "center",
                          fontSize:"0.8em",
                          color: "white",
                          fontWeight: "bold"
                        }}
                      >
                        <p>
                        {
                            this.state.clique_2_1
                            ? 
                            "Cliquez pour Réduir" 
                            : 
                            null
                          }
                        </p>
                      </div>
                  </animated.div>
                  <animated.div
                    className="Apercu_2_2"
                    onClick={
                      () => {
                        this.setState({ clique_2_2: !this.state.clique_2_2 });
                      }
                    }
                    onMouseOver={
                      window.navigator.userAgent.indexOf('Mobi') !== -1 ? null : () => {
                        this.setState({ focus_2_2: !this.state.focus_2_2 })
                      }
                    }
                    onMouseOut={
                      window.navigator.userAgent.indexOf('Mobi') !== -1 ? null : () => {
                        this.setState({ focus_2_2: !this.state.focus_2_2})
                      }
                    }
                    style={ ( () => {
                      if (
                        this.premiereAnim 
                      ) {
                        return {
                          transform: props.x_4.interpolate(
                            [0, 0.6, 0.7, 0.8, 0.9, 1],
                            ["scale(0)", "scale(1.1)", "scale(0.9)", "scale(1.05)", "scale(0.95)", "scale(1)"]
                          )
                        }
                      } else if (
                        this.state.clique_2_1
                      ) {
                        return {
                          height: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["48.5%", "30%", "20%", "10%", "0%"]
                          ),
                          marginTop: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["10%", "0%", "0%", "0%", "0%"]
                          )
                        }
                      } else if (
                        this.state.clique_2_2
                      ) {
                        return {
                          height: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["48.5%", "70%", "80%", "90%", "100%"]
                          ),
                          marginTop: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["10%", "0%", "0%", "0%", "0%"]
                          ),
                          opacity: 1
                        }
                      } else if (
                        this.state.ouvert_2_2
                      ) {
                        return {
                          height: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["48.5%", "70%", "80%", "90%", "100%"]
                          ),
                          marginTop: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["10%", "0%", "0%", "0%", "0%"]
                          ),
                          opacity: 1
                        }
                      } else if (
                        this.state.ouvert_2_1
                      ) {
                        return {
                          height: props.y.interpolate(
                          [0, 0.5, 0.7, 0.8, 1],
                          ["48.5%", "30%", "20%", "10%", "0%"]
                          ),
                          marginTop: props.y.interpolate(
                            [0, 0.5, 0.7, 0.8, 1],
                            ["10%", "0%", "0%", "0%", "0%"]
                          )
                        }
                      } else if (
                        this.state.focus_2_2 &&
                        !this.state.clique_2_2
                      ) {
                        return {
                          transform: "scale(1.05)",
                          opacity: 1
                        }
                      }
                    } )() }
                  >
                    <animated.div
                      className="Contenaire_gif_apercu_2_2"
                      id="gif_2_2"
                      style={ ( () => {
                        if (
                          this.state.clique_2_2
                        ) {
                          return {
                            width: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["95%", "80%", "70%", "60%", "50.5%"]
                            ),
                            marginLeft : props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["5%", "3%", "2%", "2%", "2%"]
                            )
                          }
                        }
                      } )() }
                    >
  
                    </animated.div>
                    <animated.div
                      className="Contenaire_texte_apercu_1_1_1"
                      style={ ( () => {
                        if (
                          this.state.clique_2_2
                        ) {
                          return {
                            width: props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["0%", "20%", "30%", "40%", "43%"]
                            ),
                            opacity: props.y.interpolate(
                              [0, 0.5, 0.7, 0.9, 1],
                              ["0", "0", "0", "0.8", "1"]
                            ), 
                            marginLeft : props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["0%", "30%", "35%", "38%", "50%"]
                            ), 
                            marginTop : props.y.interpolate(
                              [0, 0.5, 0.7, 0.8, 1],
                              ["0%", "0%", "0%", "2%", "2.5%"]
                            )
                          }
                        }
                      } )() }
                    >
                      <animated.div
                          className="Texte_apercu_context"
                        >
                          <p 
                            style={{ 
                              fontWeight: "bold", 
                              color: "#4169E1",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 3vw, 20px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "1em" : "1.3em",
                              textAlign: "center",
                              marginTop: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "15%" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "25%" : "30%"
                            }}
                          >
                            { 
                              this.state.clique_2_2 
                              ? 
                              "Context :" 
                              : 
                              null
                            }
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1em",
                              textAlign: "center", 
                              marginRight: "20%", 
                              marginLeft: "20%",
                              marginTop: "-5%"
                            }}
                          >
                            { 
                              this.state.clique_2_2 
                              ? 
                              "Projet personnel de création d'application cross-platform" 
                              : 
                              null
                            }
                          </p>
                        </animated.div>
                        <animated.div
                          className="Texte_apercu_techno"
                        >
                          <p 
                            style={{ 
                              color: "#4169E1",
                              fontWeight: "bold", 
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 3vw, 20px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "1em" : "1.3em",
                              textAlign: "center",
                              marginTop: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "-20%" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "-15%" : "-10%"
                            }}
                          >
                            { 
                              this.state.clique_2_2 
                              ? 
                              "Technologie utilisé :" 
                              : 
                              null}
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1em", 
                              textAlign: "center", 
                              marginRight: "20%", 
                              marginLeft: "20%",
                              marginTop: "-5%"
                            }}
                          >
                            { 
                              this.state.clique_2_2
                              ? 
                              "React Native | Expo | Redux | React Navigation | Express JS | Node JS | AWS " 
                              : 
                              null}
                          </p>
                        </animated.div>
                        <animated.div
                          className="Texte_apercu_description"
                        >
                          <p 
                            style={{ 
                              color: "#4169E1",
                              fontWeight: "bold", 
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 3vw, 20px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "1em" : "1.3em",
                              textAlign: "center",
                              marginTop: "-35%"
                            }}
                          >
                            { this.state.clique_2_2 ? "Description :" : null}
                          </p>
                          <p 
                            style={{ 
                              fontWeight: "bold",
                              fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "clamp(5px, 2.5vw, 12px)" : (window.innerHeight < 700 || window.innerWidth < 1100) 
                              ? "0.8em" : "1em", 
                              textAlign: "center", 
                              marginRight: "20%", 
                              marginLeft: "20%",
                              marginTop: "-5%"
                            }}
                          >
                            { 
                              this.state.clique_2_2 
                              ? 
                              "Gestion des dates et horaire pour système de reservation en fonction de la durée de la préstation" 
                              : 
                              null}
                          </p>
                        </animated.div>
                    </animated.div>
                    <animated.div
                        className="VoirPlus"
                        style={
                            !this.state.clique_1_1_1 &&
                            !this.state.clique_1_1_2 &&
                            !this.state.clique_1_2_1 &&
                            !this.state.clique_2_1 &&
                            !this.state.clique_2_2 
                            ? 
                            null
                            : 
                            {height: "0%"}
                        }
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "white",
                            fontSize: window.navigator.userAgent.indexOf('Mobi') !== -1 ? "0.5em" : "1em"
                          }}
                        >
                          {
                            !this.state.clique_1_1_1 &&
                            !this.state.clique_1_1_2 &&
                            !this.state.clique_1_2_1 &&
                            !this.state.clique_2_1 &&
                            !this.state.clique_2_2 &&
                            this.state.focus_2_2
                            ? 
                            "Voir plus" 
                            : 
                            null
                          }
                        </p>
                      </animated.div>
                      <div
                        className="CliquezReduir"
                        style={{
                          opacity: this.state.clique_2_2 ? 1 : 0,
                          textAlign: "center",
                          fontSize:"0.8em",
                          color: "white",
                          fontWeight: "bold"
                        }}
                      >
                        <p>
                        {
                            this.state.clique_2_2
                            ? 
                            "Cliquez pour Réduir" 
                            : 
                            null
                          }
                        </p>
                      </div>
                  </animated.div>
                </animated.div>
                  
              </animated.div>
            )}
          </Spring>
        </div>
      )
    }
  }