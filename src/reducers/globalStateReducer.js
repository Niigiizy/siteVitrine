const initialState = { 
    focus_nom : false,
    focus_email : false,
    focus_sujet : false,
    focus_message : false,
    page_actuel : "home"
}

export default function globalStateReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'FOCUS_NOM':
            nextState = { ...state, focus_nom : true }
            return nextState || state
        case 'FOCUS_EMAIL':
            nextState = { ...state, focus_email : true }
            return nextState || state
        case 'FOCUS_SUJET':
            nextState = { ...state, focus_sujet : true }
            return nextState || state
        case 'FOCUS_MESSAGE':
            nextState = { ...state, focus_message : true }
            return nextState || state
        case 'UNFOCUS_NOM':
            nextState = { ...state, focus_nom : false }
            return nextState || state
        case 'UNFOCUS_EMAIL':
            nextState = { ...state, focus_email : false }
            return nextState || state
        case 'UNFOCUS_SUJET':
            nextState = { ...state, focus_sujet : false }
            return nextState || state
        case 'UNFOCUS_MESSAGE':
            nextState = { ...state, focus_message : false }
            return nextState || state
        case 'PAGE_ACTUEL':
            nextState = { ...state, page_actuel : action.value }
            return nextState || state
        default:
            return state
    }
}
