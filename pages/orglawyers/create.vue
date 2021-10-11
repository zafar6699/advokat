<template>
    <div>
        <div class="create-res">
            <div class="content-head">
                <h3>
                    Aдвокатлар реестри Яратиш
                </h3>
            </div>
            <div class="con">
                <div class="card-row">
                    <div class="card-4">
                        <div
                            class="
                form-group
            "
                            :class="{ 'form-error': $v.reestr.region.$error }"
                        >
                            <h4>Вилоят</h4>
                            <div class="input-div">
                                <select v-model.trim="$v.reestr.region.$model">
                                    <option
                                        style="display: none;"
                                        value=""
                                        disabled
                                        selected
                                        >Вилоятни танланг</option
                                    >
                                    <option value="1">All</option>
                                    <option value="2">Toshkent</option>
                                    <option value="3">Xorazm</option>
                                </select>
                            </div>
                            <h6
                                v-if="!$v.reestr.region.required"
                                class="error-text"
                            >
                                Tanlanishi shart
                            </h6>
                        </div>
                    </div>
                    <div class="card-4">
                        <div
                            class="
                form-group
            "
                            :class="{ 'form-error': $v.reestr.district.$error }"
                        >
                            <h4>Туман</h4>
                            <div class="input-div">
                                <select
                                    v-model.trim="$v.reestr.district.$model"
                                >
                                    <option
                                        style="display: none;"
                                        value=""
                                        disabled
                                        selected
                                        >Туманни танланг</option
                                    >
                                    <option value="1">All</option>
                                    <option value="2">Toshkent</option>
                                    <option value="3">Xorazm</option>
                                </select>
                            </div>
                            <h6
                                v-if="!$v.reestr.district.required"
                                class="error-text"
                            >
                                Tanlanishi shart
                            </h6>
                        </div>
                    </div>
                    <div class="card-2">
                        <div
                            class="
                form-group
            "
                            :class="{ 'form-error': $v.reestr.title.$error }"
                        >
                            <h4>Фирма адвокатлар идораси</h4>
                            <div class="input-div">
                                <input
                                    type="text"
                                    v-model="$v.reestr.title.$model"
                                />
                            </div>
                            <h6
                                v-if="!$v.reestr.title.required"
                                class="error-text"
                            >
                                To'ldirish shart
                            </h6>
                        </div>
                    </div>
                    <div class="card-4">
                        <div
                            class="
                form-group
            "
                            :class="{ 'form-error': $v.reestr.region.$error }"
                        >
                            <h4>Тузилма бўлими</h4>
                            <div class="input-div">
                                <select v-model.trim="$v.reestr.region.$model">
                                    <option
                                        style="display: none;"
                                        value=""
                                        disabled
                                        selected
                                        >Вилоятни танланг</option
                                    >
                                    <option value="1">All</option>
                                    <option value="2">Toshkent</option>
                                    <option value="3">Xorazm</option>
                                </select>
                            </div>
                            <h6
                                v-if="!$v.reestr.region.required"
                                class="error-text"
                            >
                                Tanlanishi shart
                            </h6>
                        </div>
                    </div>
                    <div class="card-4">
                        <div
                            class="
                form-group
            "
                            :class="{ 'form-error': $v.reestr.number.$error }"
                        >
                            <h4>Гувохнома рақами</h4>
                            <div class="input-div">
                                <input
                                    type="text"
                                    placeholder="728 654 321"
                                    v-mask="'### ### ###'"
                                    v-model="$v.reestr.number.$model"
                                />
                            </div>
                            <h6
                                v-if="!$v.reestr.number.required"
                                class="error-text"
                            >
                                To'ldirish shart
                            </h6>
                            <h6
                                v-if="!$v.reestr.number.minLength"
                                class="error-text"
                            >
                                To'liq to'ldiring
                            </h6>
                        </div>
                    </div>
                    <div class="card-4">
                        <div
                            class="
                form-group
            "
                            :class="{ 'form-error': $v.reestr.phone.$error }"
                        >
                            <h4>Телефон</h4>
                            <div class="input-div">
                                <input
                                    type="text"
                                    v-model.trim="$v.reestr.phone.$model"
                                    placeholder="+998 -- --- -- --"
                                    v-mask="'+998 ## ### ## ##'"
                                />
                            </div>
                            <h6
                                v-if="!$v.reestr.phone.required"
                                class="error-text"
                            >
                                To'ldirish shart
                            </h6>
                            <h6
                                v-if="!$v.reestr.phone.minLength"
                                class="error-text"
                            >
                                To'liq to'ldiring
                            </h6>
                        </div>
                    </div>
                    <div class="card-4">
                        <div
                            class="
                form-group
            "
                            :class="{ 'form-error': $v.reestr.location.$error }"
                        >
                            <h4>Геолакация</h4>
                            <div class="input-div">
                                <input
                                    type="text"
                                    v-model="$v.reestr.location.$model"
                                    placeholder="728 654 321 - 3727873"
                                    v-mask="'### ### ### - #######'"
                                />
                            </div>
                            <h6
                                v-if="!$v.reestr.location.required"
                                class="error-text"
                            >
                                To'ldirish shart
                            </h6>
                            <h6
                                v-if="!$v.reestr.location.minLength"
                                class="error-text"
                            >
                                To'liq to'ldiring
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="save">
                <div class="saves flex-end">
                    <button class="no">Бекор қилиш</button>
                    <button class="primary">Сақлаш</button>
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
            reestr: {
                region: "",
                district: "",
                title: "",
                number: "",
                phone: "",
                location: ""
            }
        };
    },
    validations: {
        reestr: {
            region: {
                required
            },
            district: {
                required
            },

            title: {
                required
            },
            number: {
                required,
                minLength: minLength(11)
            },
            phone: {
                required,
                minLength: minLength(17)
            },
            location: {
                required,
                minLength: minLength(21)
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.content-head {
    margin-bottom: 32px;
}
.con {
    margin-bottom: 40px;
}

.save {
    .saves {
        button {
            padding: 12px 48px;
            margin-left: 24px;
        }
    }
}
</style>
