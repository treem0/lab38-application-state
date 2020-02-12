import reducer from './emojiReducer';


describe('emoji reducer', () => {
  it('handles a bogus action gracefully', () => {
    const action = { type: 'BOGUS' };

    const newState = reducer([], action);

    expect(newState).toEqual([]);
  });
});
