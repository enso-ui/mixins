export default {
    methods: {
        errorHandler(error) {
            if (Object.prototype.hasOwnProperty.call(this, 'loading')) {
                this.loading = false;
            }

            const { status, data } = error.response;

            if ([401, 419].includes(status) && this.$store.state.auth.isAuth) {
                this.$store.commit('setLastRoute', this.$route);
                this.$store.commit('appState', false);
                this.$store.commit('auth/logout');
                this.$router.push({ name: 'login' });
                return;
            }

            if ([403, 409, 429, 555].includes(status)) {
                this.$toastr.error(data.message);
                return;
            }

            if (status === 404) {
                this.$router.push({ name: 'notFound' });
                return;
            }

            if (status === 503) {
                window.location.reload();
            }

            const message = Object.keys(this.$options.methods).includes('i18n')
                ? this.i18n('Something went wrong...')
                : 'Something went wrong...';

            this.$toastr.error(message);

            throw error;
        },
    },
};
