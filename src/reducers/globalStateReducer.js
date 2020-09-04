const initialState = { 
    focus : false,
    page_actuel : "home"
}

export default function globalStateReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'FOCUS':
            nextState = { ...state, focus : true }
            return nextState || state
        case 'UNFOCUS':
            nextState = { ...state, focus : false }
            return nextState || state
        case 'PAGE_ACTUEL':
            nextState = { ...state, page_actuel : action.value }
            return nextState || state
        default:
            break;
    }
}
