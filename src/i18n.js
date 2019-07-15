import translator from '@core-modules/plugins/i18n';

export default {
    methods: {
        i18n(key, params = null) {
            return translator(key, params);
        },
    },
};
