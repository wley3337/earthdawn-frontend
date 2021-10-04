import { SET_ALL_TALENTS, Talent, TalentActions } from './types';

export const talents = (state = [] as Talent[], action: TalentActions): Talent[] => {
  switch (action.type) {
    case SET_ALL_TALENTS:
      return action.payload;
    default:
      return state;
  }
};
