import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import emojiReducer from '../reducers/emojiReducer';
import { isTired, isHyper, isEducated, isHungry, getFace } from '../selectors/emojiSelector';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/emojiActions';


const Moods = () => {

  const actions = [
    { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees', actionCreator: drinkCoffee },
    { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks', actionCreator: eatSnack },
    { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps', actionCreator: takeNap },
    { name: 'STUDY', text: 'Study', stateName: 'studies', actionCreator: study },
  ];

  const [state, dispatch] = useReducer(emojiReducer, { coffees: 0, snacks: 0, naps: 0, studies: 0 });

  const handleSelection = (actionCreator) => dispatch(actionCreator());
  const emojiFace = getFace(state);

 
  return (
    <>
      <Controls actions={actions} handleSelection={handleSelection}/>
      <Face emoji={emojiFace} />
    </>
  );
};

export default Moods;
