import { History } from "history";

export const GET_ALL_TALENTS = "GET_ALL_TALENTS";
export const SET_ALL_TALENTS = "SET_ALL_TALENTS";

export interface GetAllTalentsAction {
  type: typeof GET_ALL_TALENTS;
  payload: { history: History };
}

export interface Talent {
  id: number;
  name: string;
  attribute: string;
  baseModifier: number;
  action: boolean;
  skillUse: boolean;
  requiresKarma: boolean;
  strain: number;
  description: string;
  disciplineTalent: string[];
}

export interface SetTalentAction {
  type: typeof SET_ALL_TALENTS;
  payload: Talent[];
}

export type TalentActions = SetTalentAction;
