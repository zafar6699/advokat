<template>
    <div>
        <div class="control">
            <Delete
                @deleteRequest="deleteRequest"
                @closeDelete="closeDelete"
                :isDelete="isDelete"
            />
            <div
                @click="isRegion = false"
                :class="isRegion ? 'fixvh block-fh' : 'fixvh'"
            ></div>
            <div :class="isRegion ? 'my-modalDelete open-modal' : 'my-modal'">
                <div v-if="isAddRegion" class="modal">
                    <h3>Вилоят қўшиш</h3>
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
                            Қўшиш
                        </button>
                    </div>
                </div>
                <div v-if="isEditRegion" class="modal">
                    <h3>Вилоят ўзгартириш</h3>
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
                            Ўзгартириш
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
                                                <button
                                                    @click="openEditRegion"
                                                    class="edit"
                                                >
                                                    <img
                                                        src="@/static/img/icon/edit.png"
                                                        alt=""
                                                    />
                                                </button>
                                                <button
                                                    @click="
                                                        openDelete(item._id)
                                                    "
                                                    class="delete"
                                                >
                                                    <img
                                                        src="@/static/img/icon/delete.png"
                                                        alt=""
                                                    />
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
                    <div class="flex">
                        <div class="card-row-tuman ">
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
                                        <th></th>
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
                                        <td>
                                            <div class="action">
                                                <button
                                                    @click="openEditRegion"
                                                    class="edit"
                                                >
                                                    <img
                                                        src="@/static/img/icon/edit.png"
                                                        alt=""
                                                    />
                                                </button>
                                                <button
                                                    @click="
                                                        openDelete(item._id)
                                                    "
                                                    class="delete"
                                                >
                                                    <img
                                                        src="@/static/img/icon/delete.png"
                                                        alt=""
                                                    />
                                                </button>
                                            </div>
                                        </td>
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
            route: [
                {
                    url: "datacontrol",
                    value: {
                        uz: "Ma'lumotlarni boshqarish",
                        kr: "Маълумотларни бошқариш",
                        ru: "Route_ru"
                    }
                }
            ],
            step: 1,
            isRegion: false,
            isAddRegion: false,
            isEditRegion: false,
            isDelete: false,
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
            data: [
                {
                    uz: "Mirzo Ulug'bek",
                    cr: "Мирзо Улуғбек",
                    ru: "Мирзо Улуғбек"
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
            ],
            id: ""
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
        this.$store.commit("CHANGE_ROUTE", this.route);

        this.getAll();
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
        async getAll() {
            console.log("assa", this.region);
            let region = await this.$axios.$get("region/get");
            this.region = region.data;
            console.log("assa", this.region);
        },
        openDelete(id) {
            console.log(id);
            this.isDelete = true;
            this.id = id;
        },
        closeDelete() {
            this.isDelete = false;
        },
        async deleteRequest() {
            this.isDelete = false;
            this.$axios
                .$delete("region/" + this.id)
                .then(async res => {
                    this.getAll();
                })
                .catch(err => {
                    console.log(err);
                });
        },
        openModalRegion() {
            this.isRegion = true;
            this.isAddRegion = true;
            this.isEditRegion = false;
        },
        openEditRegion() {
            this.isRegion = true;
            this.isAddRegion = false;
            this.isEditRegion = true;
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
