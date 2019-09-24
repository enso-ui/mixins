import translator from '@enso-ui/ui/src/modules/plugins/i18n';

export default {
    methods: {
        i18n(key, params = null) {
            return translator(key, params);
        },
    },
};
