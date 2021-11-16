import { isNavigationFailure } from 'vue-router';

export default {
    methods: {
        routerErrorHandler(error) {
            if (!isNavigationFailure(error)) {
                throw error;
            }
        },
    },
};
