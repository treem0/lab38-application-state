import { DRINK_COFFEE, drinkCoffee, EAT_SNACK, eatSnack, TAKE_NAP, takeNap, STUDY, study } from './emojiActions';

describe('emoji action creators', () => {
  it('creates a drink coffee action', () => {
    const action = drinkCoffee();

    expect(action).toEqual({ type: DRINK_COFFEE });
  });

  it('creates an eat snack action', () => {
    const action = eatSnack();

    expect(action).toEqual({ type: EAT_SNACK });
  });
});
