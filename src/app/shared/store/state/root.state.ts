import { IRootState } from "../../interfaces/state.interface";

export const initialState: IRootState = {
  data: {
    eventCards: [],
  },
  ui: {
    eventPageUI: {
      isLoading: false,
    },
    homePageUI: {
      isLoading: false,

    },
  },
};
