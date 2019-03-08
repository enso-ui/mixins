export default route => {
    return this.$store.getters.routes.includes(route);
};
