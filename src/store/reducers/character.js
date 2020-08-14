import { ADD_CHARACTER, REMOVE_CHARACTER, CHANGE_NAME, CHANGE_RACE, CHANGE_CLASS } from '../actions/character'

const intialState = ({
    characters: [
        {
            name: "Guy",
            class: "Fighter",
            race: "Human",
        },
    ],
})

function updateValue(array, action, type) {
    return array.map((character, index) => {
      if (index !== action.id) {
        return character
      }else {
          if(type == 'name'){
            return{
                ...character,
                name: action.value
            }
          } else if(type == 'class'){
            return{
                ...character,
                class: action.value
            }
          } else if(type == 'race'){
            return{
                ...character,
                race: action.value
            }
          }
      }
    })
}

let updateArray = []

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
            updateArray = updateValue(state.characters, action, 'name');
            state.characters = updateArray;
            return {
                ...state,
            }
        case CHANGE_CLASS:
            updateArray = updateValue(state.characters, action, 'class');
            state.characters = updateArray;
            return {
                ...state,
            }
        case CHANGE_RACE:
            updateArray = updateValue(state.characters, action, 'race');
            state.characters = updateArray;
            return {
                ...state,
            }
      default:
        return state
    }
  }
  
  export default characterReducer