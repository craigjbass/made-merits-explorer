import { combineReducers } from 'redux'

function merits (state = {}, action) {
    switch (action.type) {
        case 'MERITS':
            return { merits: action.merits }
        default:
            return state
    }
}

const rootReducer = combineReducers({ merits })

export default rootReducer
