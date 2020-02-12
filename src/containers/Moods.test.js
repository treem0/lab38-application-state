import React from 'react';
import { shallow } from 'enzyme';
import Moods, { isTired, isHyper, isEducated, isHungry, getFace } from './Moods';

describe('Moods', () => {
  describe('container', () => {
    it('matches a snapshot', () => {
      const wrapper = shallow(<Moods />);
      expect(wrapper).toMatchSnapshot();
    });

    it('updates state on DRINK_COFFEE selection', () => {
      const wrapper = shallow(<Moods />);
      wrapper.instance().handleSelection('DRINK_COFFEE');

      expect(wrapper.state('coffees')).toEqual(1);
    });

    it('updates state on TAKE_NAP selection', () => {
      const wrapper = shallow(<Moods />);
      wrapper.instance().handleSelection('TAKE_NAP');

      expect(wrapper.state('naps')).toEqual(1);
    });

    it('updates state on EAT_SNACK selection', () => {
      const wrapper = shallow(<Moods />);
      wrapper.instance().handleSelection('EAT_SNACK');

      expect(wrapper.state('snacks')).toEqual(1);
    });

    it('updates state on STUDY selection', () => {
      const wrapper = shallow(<Moods />);
      wrapper.instance().handleSelection('STUDY');

      expect(wrapper.state('studies')).toEqual(1);
    });
  });
});
