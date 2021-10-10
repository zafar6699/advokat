<template>
    <div class="managment">
        <h4 class="title-small ">
            Яратиш
        </h4>

        <div class="card-row">
            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.role.$error }"
                >
                    <h4>Роли</h4>
                    <div class="input-div">
                        <select v-model="user.role">
                            <option
                                value=""
                                style="display: none;"
                                disabled
                                selected
                            >
                                Танланг
                            </option>
                            <option value="1">Суппер админ</option>
                            <option value="2">Toshkent</option>
                            <option value="3">Xorazm</option>
                        </select>
                    </div>
                    <h6 v-if="!$v.user.role.required" class="error-text">
                        To'ldirish shart
                    </h6>
                </div>
            </div>
            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.login.$error }"
                >
                    <h4>Логин</h4>
                    <div class="input-div">
                        <input
                            type="text"
                            v-model="$v.user.login.$model"
                            value=""
                        />
                    </div>

                    <h6 v-if="!$v.user.login.required" class="error-text">
                        To'ldirish shart
                    </h6>
                </div>
            </div>
            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.password.$error }"
                >
                    <h4>Парол</h4>
                    <div class="input-div">
                        <input type="text" v-model="$v.user.password.$model" />
                    </div>

                    <h6 v-if="!$v.user.password.required" class="error-text">
                        To'ldirish shart
                    </h6>
                    <h6 v-if="!$v.user.password.alpha" class="error-text">
                        Parolda katta va kichik harf, son, maxsus belgilar
                        bo'lishi kerak va kamida 6 ta belgi bo'lishi kerak
                    </h6>
                </div>
            </div>
            <div class="card-4"></div>
            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.name.$error }"
                >
                    <h4>Исм</h4>
                    <div class="input-div">
                        <input type="text" v-model="$v.user.name.$model" />
                    </div>
                    <h6 v-if="!$v.user.name.required" class="error-text">
                        To'ldirish shart
                    </h6>
                </div>
            </div>
            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.surname.$error }"
                >
                    <h4>Фамилия</h4>
                    <div class="input-div">
                        <input type="text" v-model="$v.user.surname.$model" />
                    </div>
                    <h6 v-if="!$v.user.surname.required" class="error-text">
                        To'ldirish shart
                    </h6>
                </div>
            </div>
            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.lastname.$error }"
                >
                    <h4>Отасининг исми</h4>
                    <div class="input-div">
                        <input type="text" v-model="$v.user.lastname.$model" />
                    </div>
                    <h6 v-if="!$v.user.lastname.required" class="error-text">
                        To'ldirish shart
                    </h6>
                </div>
            </div>

            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.birthday.$error }"
                >
                    <h4>Туғилган санаси</h4>
                    <div class="input-div">
                        <input type="date" v-model="$v.user.birthday.$model" />
                    </div>
                    <h6 v-if="!$v.user.birthday.required" class="error-text">
                        To'ldirish shart
                    </h6>
                </div>
            </div>

            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.passport.seria.$error }"
                >
                    <h4>Паспорт сериаси</h4>
                    <div class="input-div">
                        <input
                            type="text"
                            v-model="$v.user.passport.seria.$model"
                            placeholder="AA"
                            v-mask="'AA'"
                            @input="
                                user.passport.seria = $event.target.value.toUpperCase()
                            "
                        />
                    </div>
                    <h6
                        v-if="!$v.user.passport.seria.required"
                        class="error-text"
                    >
                        To'ldirish shart
                    </h6>
                </div>
            </div>
            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.passport.number.$error }"
                >
                    <h4>Паспорт рақами</h4>
                    <div class="input-div">
                        <input
                            type="text"
                            v-model="$v.user.passport.number.$model"
                            placeholder="1234567"
                            v-mask="'#######'"
                        />
                    </div>
                    <h6
                        v-if="!$v.user.passport.number.required"
                        class="error-text"
                    >
                        To'ldirish shart
                    </h6>
                </div>
            </div>
            <div class="card-4">
                <div class="form-group">
                    <h4>Ким томонидан берилган</h4>
                    <div class="input-div">
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div class="card-4">
                <div class="form-group">
                    <h4>Қачон берилган</h4>
                    <div class="input-div">
                        <input type="date" />
                    </div>
                </div>
            </div>
        </div>

        <div class="save-actions">
            <nuxt-link :to="{ name: `managment___${$i18n}` }"> </nuxt-link>
        </div>
    </div>
</template>

<script>
import { required, minLength, helpers } from "vuelidate/lib/validators";
const alpha = helpers.regex(
    "alpha",
    /^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))).{6,32}$/
);
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

            user: {
                role: "",
                login: "",
                password: "",
                name: "",
                surname: "",
                lastname: "",
                birthday: "",
                passport: {
                    seria: "",
                    number: "",
                    exp: "",
                    iib: "",
                    jshir: ""
                },
                stir: "",
                phone: "",
                email: "",
                region: "",
                district: "",
                address: "",
                gender: ""
            }
        };
    },

    validations: {
        user: {
            role: {
                required
            },
            login: {
                required
            },
            password: {
                required,
                alpha
            },
            name: {
                required
            },
            surname: {
                required
            },
            lastname: {
                required
            },
            birthday: {
                required
            },
            passport: {
                seria: {
                    required
                },
                number: {
                    required
                },
                exp: {
                    required
                },
                iib: {
                    required
                },
                jshir: {
                    required
                }
            },
            stir: {
                required
            },
            phone: {
                required,
                minLength: minLength(17)
            },
            email: {
                required
            },
            region: {
                required
            },
            district: {
                required
            },
            address: {
                required
            }
        }
    },

    mounted() {
        this.$store.commit("CHANGE_ROUTE", this.route);
    },
    methods: {}
};
</script>

<style></style>
