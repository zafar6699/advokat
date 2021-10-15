<template>
    <div class="managment">
        <div class="content-title">
            <h3>Фойдаланувчиларни бошқариш</h3>

            <nuxt-link
                :to="{ name: `managment-add___${$i18n.locale}` }"
                class="primary btn-orange"
                >Яратиш</nuxt-link
            >
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

        <h4 class="title-small mt-50">
            Фойдаланувчилар
        </h4>

        <div class="table-umd ">
            <table>
                <thead>
                    <tr>
                        <th v-for="(item, index) in header" :key="index">
                            {{ item[$i18n.locale] }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>123</td>
                        <td class="max-320">
                            <div class="table-person">
                                <div class="img">
                                    <img src="@/static/img/banner.png" alt="" />
                                </div>
                                <h5>
                                    Муҳаммадқодиров Муҳамммад Муҳаммадалиевич
                                </h5>
                            </div>
                        </td>
                        <td>Суппер админ</td>
                        <td>Самарқанд вилояти Яккасарой тумани</td>
                        <td><span class="status-cancel">Тўхтатилган</span></td>
                        <td>
                            <div class="action">
                                <button class="edit">
                                    <svg
                                        width="19"
                                        height="18"
                                        viewBox="0 0 19 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.991894 18C0.714753 17.9995 0.450557 17.8827 0.263764 17.6779C0.0735276 17.4749 -0.021002 17.2003 0.00392993 16.9231L0.245981 14.2615L11.4278 3.08372L14.9222 6.57716L3.74337 17.754L1.0818 17.996C1.05117 17.999 1.02054 18 0.991894 18ZM15.6197 5.87867L12.1262 2.38523L14.2217 0.289757C14.407 0.10424 14.6585 0 14.9207 0C15.1829 0 15.4344 0.10424 15.6197 0.289757L17.7152 2.38523C17.9007 2.57054 18.0049 2.822 18.0049 3.08421C18.0049 3.34643 17.9007 3.59789 17.7152 3.7832L15.6207 5.87768L15.6197 5.87867Z"
                                            fill="#2E3A59"
                                        />
                                    </svg>
                                </button>
                                <button
                                    @click="openDelete(item._id)"
                                    class="delete"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 6.5H5.77778H20"
                                            stroke="#EB5757"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M8.57143 6.6V4.8C8.57143 4.32261 8.75204 3.86477 9.07353 3.52721C9.39502 3.18964 9.83106 3 10.2857 3H13.7143C14.1689 3 14.605 3.18964 14.9265 3.52721C15.248 3.86477 15.4286 4.32261 15.4286 4.8V6.6M18 6.6V19.2C18 19.6774 17.8194 20.1352 17.4979 20.4728C17.1764 20.8104 16.7404 21 16.2857 21H7.71429C7.25963 21 6.82359 20.8104 6.5021 20.4728C6.18061 20.1352 6 19.6774 6 19.2V6.6H18Z"
                                            stroke="#EB5757"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M10 11V17"
                                            stroke="#EB5757"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M14 11V17"
                                            stroke="#EB5757"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="table-pagination">
            <pagination
                :total-items="length"
                :max-visible-pages="8"
                :items-per-page="limit"
                :page="page"
                @page-change="pageChange"
            >
            </pagination>
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
            ],

            header: [
                {
                    uz: "Login ",
                    ru: "Логин",
                    kr: "Логин"
                },
                {
                    uz: "F.I.O ",
                    ru: "Ф.И.О ",
                    kr: "Ф.И.О "
                },
                {
                    uz: "Rol",
                    ru: "Рол",
                    kr: "Рол"
                },
                {
                    uz: "Hudud",
                    ru: "Регион",
                    kr: "Ҳудуд"
                },

                {
                    uz: "Status",
                    ru: "Статус",
                    kr: "Статус"
                },
                {
                    uz: "",
                    ru: "",
                    kr: ""
                }
            ],
            page: 0,
            limit: 10,
            length: 123
        };
    },

    mounted() {
        this.$store.commit("CHANGE_ROUTE", this.route);
    },
    methods: {
        pageChange(page) {
            this.page = page;
        }
    }
};
</script>

<style></style>
