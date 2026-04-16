import { preferences } from '@enso-ui/ui/src/pinia/preferences';

export default (value, decimals = 3) => new Intl.NumberFormat(
    preferences().global.lang ?? 'en', {
        style: 'decimal',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    },
).format(value);
