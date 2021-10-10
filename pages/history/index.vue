<template>
    <div>
        <div class="history">
            <div class="content-title">
                <h3>
                    Тарих
                </h3>
            </div>
            <div class="formx">
                <div class="card-row">
                    <div class="card-4">
                        <div
                            class="
                form-group
            "
                            :class="{ 'form-error': $v.user.login.$error }"
                        >
                            <h4>Логин</h4>
                            <div class="input-div">
                                <select v-model.trim="$v.user.login.$model">
                                    <option
                                        style="display: none;"
                                        value=""
                                        disabled
                                        selected
                                        >Viloyatni tanlang</option
                                    >
                                    <option value="1">All</option>
                                    <option value="2">Toshkent</option>
                                    <option value="3">Xorazm</option>
                                </select>
                            </div>
                            <h6
                                v-if="!$v.user.login.required"
                                class="error-text"
                            >
                                Tanlanishi shart
                            </h6>
                        </div>
                    </div>
                    <div class="card-4 form-group">
                        <h4>Бошлаш санаси</h4>
                        <div class="input-div">
                            <input value="" type="date" />
                        </div>
                    </div>
                    <div class="card-4 form-group">
                        <h4>Тугаш санаси</h4>
                        <div class="input-div">
                            <input value="" type="date" />
                        </div>
                    </div>

                    <div class="card-4 form-froup">
                        <h4>sa</h4>
                        <div class="input-div flex search">
                            <button class="primary search-bt">
                                {{ $t("search") }}
                            </button>
                            <button class="clear-bt flex">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 6L6 18"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M6 6L18 18"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="table-umd">
                <table>
                    <thead>
                        <tr>
                            <th v-for="(item, index) in header" :key="index">
                                {{ item[$i18n.locale] }}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in data" :key="index">
                            <td>{{ item.fam }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.address }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.phone }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
    layout: "admin",
    data() {
        return {
            user: {
                login: ""
            },
            header: [
                {
                    uz: "Login ",
                    ru: "Логин",
                    cr: "Логин"
                },
                {
                    uz: "F.I.O ",
                    ru: "Ф.И.О ",
                    cr: "Ф.И.О "
                },
                {
                    uz: "Rol",
                    ru: "Рол",
                    cr: "Рол"
                },
                {
                    uz: "IP",
                    ru: "IP",
                    cr: "IP"
                },
                {
                    uz: "Action",
                    ru: "Action",
                    cr: "Action"
                },
                {
                    uz: "Sabab",
                    ru: "Причина",
                    cr: "Сабаб"
                },
                {
                    uz: "Vaqt",
                    ru: "Время",
                    cr: "Вақт"
                }
            ],
            data: [
                {
                    name: "00123 (Муҳаммадқодиров Муҳамммад  Муҳаммадалиевич)r",
                    fam: "15.09.2021:15:15:45",
                    address: "Kalelin",
                    address: "Паролни алмаштирди",
                    phone: "+009901166699"
                },
                {
                    name: "Zafar",
                    fam: "Qalandarov",
                    address: "Kalelin",
                    fam: "Qalandarov",
                    address: "Kalelin",
                    phone: "+009901166699"
                },
                {
                    name: "Zafar",
                    fam: "Qalandarov",
                    address: "Kalelin",
                    fam: "Qalandarov",
                    address: "Kalelin",
                    phone: "+009901166699"
                }
            ]
        };
    },
    validations: {
        user: {
            login: {
                required
            },
            phone: {
                required,
                minLength: minLength(17)
            },
            password: {
                required,
                minLength: minLength(6)
            },
            region: {
                required
            }
        }
    },
    mounted() {},
    methods: {}
};
</script>

<style lang="scss" scoped>
.history {
    .search {
        button {
            padding: 12px 0;
            border: 0;
            font-weight: 500;
            font-size: 15px;
            line-height: 24px;
        }
        button.clear-bt {
            padding: 12px;
        }
        button.search-bt {
            width: calc(100% - 60px);
        }
    }
}
</style>
