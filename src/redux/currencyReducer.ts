import { CurrencyReducersTypes } from './actions';

export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 2.62,
            sellRate: 2.58,
        },
        {
            currencyName: 'EUR',
            buyRate: 3.1,
            sellRate: 3.06,
        },
        {
            currencyName: 'RUR',
            buyRate: 0.0345,
            sellRate: 0.0341,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    switch (action.type) {
        case 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE':
            return {...state, amountOfBYN: action.payload.amountOfBYN, amountOfCurrency: action.payload.amountOfCurrency}
        case 'CurrencyExchange/CHANGE_CHANGE_ACTION':
            console.log(state);
            let rateAction = state.currencies.filter(c => c.currencyName === state.currentCurrency)[0];
            return action.isBuying ? {...state, isBuying: action.isBuying, amountOfCurrency: ((+Number({...state}.amountOfBYN).toFixed(2) / rateAction.buyRate).toFixed(2))} : {...state, isBuying: action.isBuying, amountOfCurrency: ((+Number({...state}.amountOfBYN).toFixed(2) * rateAction.sellRate).toFixed(2))}
        case 'CurrencyExchange/CHANGE_CURRENT_CURRENCY':
            let rateCurrency = state.currencies.filter(c => c.currencyName === action.currentCurrency)[0];
        return state.isBuying ? {...state, currentCurrency: action.currentCurrency, amountOfCurrency: ((+Number({...state}.amountOfBYN).toFixed(2) / rateCurrency.buyRate).toFixed(2))} : {...state, currentCurrency: action.currentCurrency, amountOfCurrency: ((+Number({...state}.amountOfBYN).toFixed(2) * rateCurrency.sellRate).toFixed(2))}
        default:
            return state;
    }
};