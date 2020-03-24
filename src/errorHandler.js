const sessionExpired = (vm, status) => [401, 419].includes(status) && vm.$store.state.auth.isAuth;

const redirectToLogin = (vm) => {
    vm.$store.commit('setLastRoute', vm.$route);
    vm.$store.commit('appState', false);
    vm.$store.commit('auth/logout');
    vm.$router.push({ name: 'login' });
};

const shouldDisplayToastr = status => [403, 409, 429, 555].includes(status);

const pageNotFound = status => status === 404;

const maintenanceMode = status => status === 503;

export default {
    methods: {
        errorHandler(error) {
            if (!error.response) {
                throw error;
            }

            const { status, data } = error.response;

            if (sessionExpired(this, status)) {
                redirectToLogin(this);
                return;
            }

            if (shouldDisplayToastr(status)) {
                this.$toastr.error(data.message);
                return;
            }

            if (pageNotFound(status)) {
                this.$router.push({ name: 'notFound' });
                return;
            }

            if (maintenanceMode(status)) {
                window.location.reload();
            }

            this.$toastr.error(this.i18n('Something went wrong...'));

            throw error;
        },
    },
};
