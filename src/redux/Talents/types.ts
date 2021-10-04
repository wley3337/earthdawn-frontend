export const GET_ALL_TALENTS = 'GET_ALL_TALENTS';
export const SET_ALL_TALENTS = 'SET_ALL_TALENTS';

export interface Talent {
  id: number;
  name: string;
  attribute: string;
  base_modifier: number;
  action: boolean;
  skill_use: boolean;
  requires_karma: boolean;
  strain: number;
  description: string;
  discipline_talent: string[];
}

export interface SetTalentAction {
  type: typeof SET_ALL_TALENTS;
  payload: Talent[];
}

export type TalentActions = SetTalentAction;
