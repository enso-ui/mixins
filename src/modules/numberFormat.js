import store from '@enso-ui/ui/src/core/services/store';

export default (value, decimals = 3) => new Intl.NumberFormat(
    store.state.preferences.global.lang, {
        style: 'decimal',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    },
).format(value);
