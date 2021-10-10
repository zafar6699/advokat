<template>
    <div>
        <Header />
        <div style="padding-top:72px">
            <Nuxt />
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
    data() {},
    async mounted() {
        await this.$axios.setHeader(
            "token",
            "X-Token ea4df09cf4921dcdaa03584374f93ad0940038758dc3bb8352030ffe03f36a90"
        );
    },
    methods: {}
};
</script>

<style></style>
