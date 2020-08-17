import { ADD_CHARACTER, REMOVE_CHARACTER, CHANGE_NAME, CHANGE_RACE, CHANGE_CLASS } from '../actions/character'

const intialState = ({
    characters: [
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
            let savingThrows = []
            action.value.saving_throws.map((savingThrow) =>
                savingThrows.push(savingThrow.name),
            )
            return{
                ...character,
                class: action.value.name,
                hitDice: action.value.hit_die,
                savingThrows: savingThrows
            }
          } else if(type == 'race'){
            let abilityBonuses = []
            action.value.ability_bonuses.map((abilityBonus) =>
                abilityBonuses.push(abilityBonus.name + " " + abilityBonus.bonus),
            )

            return{
                ...character,
                race: action.value.name,
                bonuses: abilityBonuses
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