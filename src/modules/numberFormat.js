import { getActivePinia } from 'pinia';

export default (value, decimals = 3) => new Intl.NumberFormat(
    getActivePinia()?._s.get('preferences')?.global?.lang ?? 'en', {
        style: 'decimal',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    },
).format(value);
