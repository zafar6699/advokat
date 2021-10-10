<template>
    <div class="managment">
        <div class="content-title">
            <h3>Фойдаланувчиларни бошқариш</h3>
        </div>
    </div>
</template>

<script>
export default {
    layout: "admin",
    data() {
        return {
            route: [
                {
                    url: "history",
                    value: {
                        uz: "Route_uz",
                        kr: "Route_kr",
                        ru: "Route_ru"
                    }
                },
                {
                    url: "",
                    value: {
                        uz: "Batafsil",
                        kr: "Batafsil",
                        ru: "Batafsil"
                    }
                }
            ]
        };
    },

    mounted() {
        this.$store.commit("CHANGE_ROUTE", this.route);
    }
};
</script>

<style></style>
