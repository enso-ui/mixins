import Vue from 'vue';

Vue.filter('numberFormat', (value, decimals = 3) => new Intl.NumberFormat(
    this.$store.state.preferences.global.lang, {
        style: 'decimal',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    },
).format(value));
