<template>
    <div>
        <div class="control">
            <div
                @click="isRegion = false"
                :class="isRegion ? 'fixvh block-fh' : 'fixvh'"
            ></div>
            <div :class="isRegion ? 'my-modalDelete open-modal' : 'my-modal'">
                <div class="modal">
                    <h3>Viloyat qo'shish</h3>
                    <div class="formx">
                        <div
                            class="
                form-group
            "
                            :class="{ 'form-error': $v.name.uz.$error }"
                        >
                            <h4>O'zbekcha</h4>
                            <div class="input-div">
                                <input
                                    type="text"
                                    v-model.trim="$v.name.uz.$model"
                                />
                            </div>
                            <h6 v-if="!$v.name.uz.required" class="error-text">
                                To'ldirish shart
                            </h6>
                        </div>
                        <div
                            class="
                form-group
            "
                            :class="{ 'form-error': $v.name.kr.$error }"
                        >
                            <h4>Ўзбекча</h4>
                            <div class="input-div">
                                <input
                                    type="text"
                                    v-model.trim="$v.name.kr.$model"
                                />
                            </div>
                            <h6 v-if="!$v.name.kr.required" class="error-text">
                                To'ldirish shart
                            </h6>
                        </div>
                        <div
                            class="
                form-group
            "
                            :class="{ 'form-error': $v.name.ru.$error }"
                        >
                            <h4>Рус тилида</h4>
                            <div class="input-div">
                                <input
                                    type="text"
                                    v-model.trim="$v.name.ru.$model"
                                />
                            </div>
                            <h6 v-if="!$v.name.ru.required" class="error-text">
                                To'ldirish shart
                            </h6>
                        </div>

                        <button @click="addregion" class="primary">
                            Qo'shish
                        </button>
                    </div>
                </div>
            </div>
            <div class="content-title">
                <h3>Маълумотларни бошқариш</h3>
            </div>
            <div class="tab-content">
                <div class="tab-header">
                    <button
                        @click="clickTab(index)"
                        :class="step == index + 1 ? 'active' : ''"
                        v-for="(item, index) in tabMenu"
                        :key="index"
                    >
                        {{ item.name }}
                    </button>
                </div>
                <div v-if="step == 1" class="region">
                    <div class="mid-content-title flex">
                        <h3>Вилоятлар</h3>
                        <button @click="openModalRegion" class="add">
                            Қўшиш
                        </button>
                    </div>
                    <div class="table-content">
                        <div class="table-umd ">
                            <table>
                                <thead>
                                    <tr
                                        v-for="(item, index) in header"
                                        :key="index"
                                    >
                                        <th>
                                            {{ item.uz }}
                                        </th>
                                        <th>
                                            {{ item.cr }}
                                        </th>
                                        <th>
                                            {{ item.ru }}
                                        </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-if="region != null">
                                    <tr
                                        v-for="(item, index) in region"
                                        :key="index"
                                    >
                                        <td>{{ item.name.uz }}</td>
                                        <td>{{ item.name.kr }}</td>
                                        <td>{{ item.name.ru }}</td>
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
                                                <button class="delete">
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
                    </div>
                </div>
                <div v-if="step == 2" class="district">
                    <div class="mid-content-title flex">
                        <h3>Туманлар рўйхати</h3>
                    </div>
                    <div>
                        <div class="card-row-tuman flex">
                            <div class="select">
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </div>
                        </div>
                        <button class="add">Қўшиш</button>
                    </div>
                    <div class="table-content">
                        <div class="table-umd">
                            <table>
                                <thead>
                                    <tr
                                        v-for="(item, index) in tuman"
                                        :key="index"
                                    >
                                        <th>
                                            {{ item.uz }}
                                        </th>
                                        <th>
                                            {{ item.cr }}
                                        </th>
                                        <th>
                                            {{ item.ru }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(item, index) in data"
                                        :key="index"
                                    >
                                        <td>{{ item.uz }}</td>
                                        <td>{{ item.cr }}</td>
                                        <td>{{ item.ru }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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
            step: 1,
            isRegion: false,
            name: {
                uz: "",
                kr: "",
                ru: ""
            },
            region: [
                {
                    name: {
                        uz: "",
                        kr: "",
                        ru: ""
                    }
                }
            ],
            header: [
                {
                    uz: "Viloyatlar ro‘yxati",
                    cr: "Вилоятлар рўйхати",
                    ru: "Список регионов"
                }
            ],
            tuman: [
                {
                    uz: "Tuman nomi",
                    cr: "Туман номи",
                    ru: "Название района"
                }
            ],

            tabMenu: [
                {
                    name: "Вилоятлар"
                },
                {
                    name: "Туманлар рўйхати"
                },

                {
                    name: "Иш тури"
                },
                {
                    name: "Жиноят кодексига жиноят турлар"
                },
                {
                    name: "Aдвокатлар ихтисослашуви"
                },
                {
                    name: "Ҳужжат турлари"
                }
            ]
        };
    },
    validations: {
        name: {
            uz: {
                required
            },

            kr: {
                required
            },

            ru: {
                required
            }
        }
    },
    async mounted() {
        console.log("assa", this.region);
        let region = await this.$axios.$get("region/get");
        this.region = region.data;
        console.log("assa", this.region);
    },
    methods: {
        async addregion() {
            this.region.forEach(item => {
                item.name = this.name;
            });
            await this.$axios
                .$post("region/add", {
                    name: this.name
                })
                .then(res => {
                    console.log("success");
                });
        },
        openModalRegion() {
            this.isRegion = true;
        },
        closeModalRegion() {
            this.isRegion = false;
        },
        clickTab(index) {
            this.step = index + 1;
        }
    }
};
</script>

<style lang="scss" scoped>
.modal {
    h3 {
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        color: #201918;
    }
    .primary {
        padding: 12px;
        width: 100%;
        font-size: 16px;
        line-height: 24px;
    }
}
.control {
    .add {
        cursor: pointer;
        padding: 8px 32px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        background: #201918;
        border: 0;
        border-radius: 8px;
    }
    .tab-content {
        .tab-header {
            background: #f1f2f5;
            border-radius: 8px;
            display: flex;
            flex-wrap: wrap;
            // justify-content: space-between;
            margin-bottom: 40px;
            button {
                cursor: pointer;
                padding: 12px 30px;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #000000;
                border: 0;
                background: transparent;
                border-radius: 8px;
                &.active {
                    color: #ffffff;
                    background: #201918;
                }
            }
        }
        .mid-content-title {
            margin-bottom: 16px;
            h3 {
                font-weight: 500;
                font-size: 24px;
                line-height: 32px;
                color: #000000;
            }
            .silver-table {
                padding: 16px 40px;
                background: #f1f2f5;
                border-radius: 8px;
            }
        }
    }
    .region {
        // .table-content {
        //     padding: 16px 40px;
        //     background: #f1f2f5;
        //     border-radius: 8px;
        // }
    }
    .district {
        .card-row-tuman {
            display: flex;
            justify-content: space-between;
            margin: 0px -12px;
            .card-3 {
                span {
                    font-size: 16px;
                    line-height: 16px;
                    color: #000000;
                }
            }
        }
    }
}
</style>
