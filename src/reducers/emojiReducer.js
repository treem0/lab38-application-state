import {
  DRINK_COFFEE,
  EAT_SNACK,
  TAKE_NAP,
  STUDY
} from '../actions/emojiActions';

export default function reducer(state, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case EAT_SNACK:
      return { ...state, coffees: state.coffees + 1 };
    case TAKE_NAP:
      return { ...state, coffees: state.coffees + 1 };
    case STUDY:
      return { ...state, coffees: state.coffees + 1 };
    default:
      return state;
  }
}
