import reducer from './emojiReducer';
import { drinkCoffee, eatSnack, takeNap } from '../actions/emojiActions';


describe('emoji reducer', () => {
  it('handles a bogus action gracefully', () => {
    const action = { type: 'BOGUS' };

    const newState = reducer([], action);

    expect(newState).toEqual([]);
  });

  it('handles the drink coffee action', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 2 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffees: 3 });
  });

  it('handles the eat snack action', () => {
    const action = eatSnack();
    const initialState = { snacks: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ snacks: 1 });
  });

  it('handles the take nap action', () => {
    const action = takeNap();
    const initialState = { naps: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ naps: 1 });
  });
});
