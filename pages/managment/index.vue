<template>
    <div class="managment">
        <div class="content-title">
            <h3>Фойдаланувчиларни бошқариш</h3>

            <nuxt-link to="/" class="primary btn-orange">Яратиш</nuxt-link>
        </div>

        <div class="card-row">
            <div class="card-3">
                <div class="form-group">
                    <h4>Роли</h4>
                    <div class="input-div">
                        <select>
                            <option value="1">Суппер админ</option>
                            <option value="2">Toshkent</option>
                            <option value="3">Xorazm</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="card-3">
                <div class="form-group">
                    <h4>Логин</h4>
                    <div class="input-div">
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div class="card-3">
                <div class="form-group">
                    <h4>Ф.И.Ш</h4>
                    <div class="input-div">
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div class="card-3">
                <div class="form-group">
                    <h4>Вилоят</h4>
                    <div class="input-div">
                        <select>
                            <option value="1">Самарқанд вилояти</option>
                            <option value="2">Toshkent</option>
                            <option value="3">Xorazm</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="card-3">
                <div class="form-group">
                    <h4>Туман</h4>
                    <div class="input-div">
                        <select>
                            <option value="1">Норин тумани</option>
                            <option value="2">Toshkent</option>
                            <option value="3">Xorazm</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="card-3">
                <div class="form-group">
                    <h4>Статус</h4>
                    <div class="input-div">
                        <select>
                            <option value="1">Тўхтатилган</option>
                            <option value="2">Toshkent</option>
                            <option value="3">Xorazm</option>
                        </select>
                    </div>
                </div>
            </div>
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
                    url: "",
                    value: {
                        uz: "Foydalanuvchilarni boshqarish",
                        kr: "Фойдаланувчиларни бошқариш",
                        ru: "Управление пользователями"
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
