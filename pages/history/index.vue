<template>
    <div>
        <div class="history" @click="removeClass($event)">
            <div class="content-title">
                <h3>
                    Тарих
                </h3>
            </div>
            <div class="form">
                <div class="card-row">
                    <div class="card-4">
                        <span>Логин</span>
                        <div class="select">
                            <div
                                class="selectBtn"
                                id="h1"
                                data-type="firstOptioana"
                            >
                                {{ $t("tuzilma") }}
                            </div>
                            <div class="selectDropdown scroll">
                                <div class="option" data-type="firstOption">
                                    First option
                                </div>
                                <div class="option" data-type="secondOption">
                                    Second option
                                </div>
                                <div class="option" data-type="thirdOption">
                                    Third option
                                </div>
                                <div class="option" data-type="forthOption">
                                    Forth option
                                </div>
                                <div class="option" data-type="fifthOption">
                                    Fifth option
                                </div>
                                <div class="option" data-type="sixthOptionzzz">
                                    12
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-4">
                        <span>Логин</span>
                        <input value="" type="date" />
                    </div>
                    <div class="card-4">
                        <span>Логин</span>
                        <input value="" type="date" />
                    </div>

                    <div class="card-4">
                        <div class="search">
                            <button class="search-bt">
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
export default {
    layout: "admin",
    data() {
        return {
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
    mounted() {},
    methods: {
        removeClass(e) {
            const cont = document.querySelector(".selectDropdown");

            document.addEventListener("click", e => {
                if (e.target.id !== "h1") {
                    if (cont.classList.contains("toggle")) {
                        cont.classList.remove("toggle");
                    }
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.history {
    .form {
        margin-bottom: 44px;
        .card-row {
            .card-4 {
                display: flex;
                flex-direction: column;
                justify-content: end;
                .select {
                    .selectBtn {
                        padding: 16px;
                        height: 50px !important;
                    }
                }
                span {
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    color: #bbbbbb;
                    margin-bottom: 8px;
                }
                input {
                    padding: 12px 16px;
                    background: #f5f4f4;
                    font-size: 16px;
                    line-height: 24px;
                    color: #201918;
                    border: 0;
                    border-radius: 4px;
                    &:focus {
                        outline: 1px solid #e88243;
                    }
                }
                .search {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    button {
                        height: 50px;
                        // padding: 12px 0;
                        cursor: pointer;
                        border: 0;
                        border-radius: 4px;
                        font-weight: 500;
                        font-size: 15px;
                        line-height: 16px;
                    }
                    button.clear-bt {
                        padding: 12px;
                        margin-bottom: 0;
                        cursor: pointer;
                        background: transparent;
                    }
                    button.search-bt {
                        width: calc(100% - 60px);
                        background: #e88243;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
