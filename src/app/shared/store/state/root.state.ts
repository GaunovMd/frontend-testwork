import { IRootState } from '../../interfaces/state.interface';

export const initialState: IRootState = {
  ui: {
    isHomeLoading: false,
  },
  data: {
    eventCards: [],
  }
}