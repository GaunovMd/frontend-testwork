import { IEventCard } from './event-card.interface';

export interface IStateUI {
    isHomeLoading: boolean;
}

export interface IStateData {
    eventCards: IEventCard[];
}

export interface IState {
    ui: IStateUI;
    data: IStateData;
}
