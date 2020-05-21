import { IRootState } from "../../interfaces/state.interface";

export const initialState: IRootState = {
  ui: {
    homePageUI: {
      isLoading: false,

    },
    eventPageUI: {
      isLoading: false,
    },
  },
  data: {
    eventCards: [],
  },
};
