import { IState } from '../../interfaces/state.interface';

export const initialState: IState = {
    ui: {
        isHomeLoading: false,
    },
    data: {
        eventCards: [],
    }
}