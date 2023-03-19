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
    console.log('0');
    // @ts-ignore
    switch (action.type) {
        case 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE':
            console.log(action);
            console.log('1');
            console.log(action);
            console.log(state);
            return {...state, amountOfBYN: action.payload.amountOfBYN, amountOfCurrency: action.payload.amountOfCurrency}
        case 'CurrencyExchange/CHANGE_CHANGE_ACTION':
            console.log('2');
            console.log(action);
            console.log(state);
            let rate = state.currencies.filter(c => c.currencyName === state.currentCurrency)
            return action.isBuying ? {...state, isBuying: action.isBuying, amountOfCurrency: (state.amountOfBYN / state.rate.buyRate)} : {...state, isBuying: action.isBuying, amountOfCurrency: '33'}
        case 'CurrencyExchange/CHANGE_CURRENT_CURRENCY':
            console.log('3');
            console.log(action);
            console.log(state);
            return {...state, currentCurrency: action.currentCurrency}
        default:
            return state;
    }
};