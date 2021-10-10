<template>
    <div>
        <Navbar />
        <div class="admin-content">
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
    async mounted() {
        await this.$axios.setHeader(
            "token",
            "X-Token ea4df09cf4921dcdaa03584374f93ad0940038758dc3bb8352030ffe03f36a90"
        );
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
div.admin-content {
    margin-left: 310px;
    margin-top: 72px;
    padding: 20px 40px;
    min-height: calc(100vh - 72px);
}
</style>
