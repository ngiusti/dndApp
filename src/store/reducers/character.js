import { ADD_CHARACTER, REMOVE_CHARACTER, CHANGE_NAME, CHANGE_RACE, CHANGE_CLASS } from '../actions/character'

const intialState = ({
    characters: [
        {
            name: "Guy",
            class: "Fighter",
            race: "Human",
        },
    ],
    name: "Guy",
    class: "Fighter",
    race: "Human",
})

const characterReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                    ...state,
                    characters: [...state.characters, action.item]
                }
        case REMOVE_CHARACTER:
            return {
                    ...state,
                    characters: [...state.characters, action.item]
                }
        case CHANGE_NAME:
            return {
                ...state,
                characters: {
                    ...state.characters,
                    [action.id]: {
                        ...state.characters[action.id],
                        name: action.value
                    }
                }
            }
        case CHANGE_CLASS:
            return {
                ...state,
                characters: {
                    ...state.characters,
                    [action.id]: {
                        ...state.characters[action.id],
                        class: action.value
                    }
                }
            }
        case CHANGE_RACE:
            return {
                ...state,
                characters: {
                    ...state.characters,
                    [action.id]: {
                        ...state.characters[action.id],
                        race: action.value
                    }
                }
            }
      default:
        return state
    }
  }
  
  export default characterReducer