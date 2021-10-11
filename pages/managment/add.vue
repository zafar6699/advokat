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
                        Обязательное поле
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
                        Обязательное поле
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
                        Обязательное поле
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
                        Обязательное поле
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
                        Обязательное поле
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
                        Обязательное поле
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
                        Обязательное поле
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
                        Обязательное поле
                    </h6>
                    <h6
                        v-if="!$v.user.passport.seria.minLength"
                        class="error-text"
                    >
                        Залить правильно
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
                        Обязательное поле
                    </h6>
                    <h6
                        v-if="!$v.user.passport.number.minLength"
                        class="error-text"
                    >
                        Залить правильно
                    </h6>
                </div>
            </div>
            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.passport.iib.$error }"
                >
                    <h4>Ким томонидан берилган</h4>
                    <div class="input-div">
                        <input
                            type="text"
                            v-model="$v.user.passport.iib.$model"
                        />
                    </div>
                    <h6
                        v-if="!$v.user.passport.iib.required"
                        class="error-text"
                    >
                        Обязательное поле
                    </h6>
                </div>
            </div>
            <div
                class="card-4"
                :class="{ 'form-error': $v.user.passport.exp.$error }"
            >
                <div class="form-group">
                    <h4>Қачон берилган</h4>
                    <div class="input-div">
                        <input
                            type="date"
                            v-model="$v.user.passport.exp.$model"
                        />
                    </div>
                    <h6
                        v-if="!$v.user.passport.exp.required"
                        class="error-text"
                    >
                        Обязательное поле
                    </h6>
                </div>
            </div>

            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.passport.jshir.$error }"
                >
                    <h4>ЖШШИР (ПИНФЛ)</h4>
                    <div class="input-div">
                        <input
                            type="text"
                            v-model="$v.user.passport.jshir.$model"
                            v-mask="'##############'"
                        />
                    </div>
                    <h6
                        v-if="!$v.user.passport.jshir.required"
                        class="error-text"
                    >
                        Обязательное поле
                    </h6>
                    <h6
                        v-if="!$v.user.passport.jshir.minLength"
                        class="error-text"
                    >
                        Залить правильно
                    </h6>
                </div>
            </div>
            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.stir.$error }"
                >
                    <h4>СТИР</h4>
                    <div class="input-div">
                        <input
                            type="text"
                            v-model="$v.user.stir.$model"
                            v-mask="'#########'"
                        />
                    </div>
                    <h6 v-if="!$v.user.stir.required" class="error-text">
                        Обязательное поле
                    </h6>
                    <h6 v-if="!$v.user.stir.minLength" class="error-text">
                        Залить правильно
                    </h6>
                </div>
            </div>

            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.phone.$error }"
                >
                    <h4>Телефон рақам</h4>
                    <div class="input-div">
                        <input
                            type="text"
                            v-model.trim="$v.user.phone.$model"
                            placeholder="+998 -- --- -- --"
                            v-mask="'+998 ## ### ## ##'"
                        />
                    </div>
                    <h6 v-if="!$v.user.phone.required" class="error-text">
                        Обязательное поле
                    </h6>
                    <h6 v-if="!$v.user.phone.minLength" class="error-text">
                        Залить правильно
                    </h6>
                </div>
            </div>

            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.email.$error }"
                >
                    <h4>Эмаил</h4>
                    <div class="input-div">
                        <input type="text" v-model="$v.user.email.$model" />
                    </div>
                    <h6 v-if="!$v.user.email.required" class="error-text">
                        Обязательное поле
                    </h6>
                    <h6 v-if="!$v.user.email.email" class="error-text">
                        Залить правильно
                    </h6>
                </div>
            </div>

            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.region.$error }"
                >
                    <h4>Вилоят</h4>
                    <div class="input-div">
                        <select v-model="$v.user.region.$model">
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
                    <h6 v-if="!$v.user.region.required" class="error-text">
                        Обязательное поле
                    </h6>
                </div>
            </div>

            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.district.$error }"
                >
                    <h4>Туман</h4>
                    <div class="input-div">
                        <select v-model="$v.user.district.$model">
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
                    <h6 v-if="!$v.user.district.required" class="error-text">
                        Обязательное поле
                    </h6>
                </div>
            </div>

            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.address.$error }"
                >
                    <h4>Манзил</h4>
                    <div class="input-div">
                        <input
                            type="text"
                            v-model="$v.user.address.$model"
                            value=""
                        />
                    </div>

                    <h6 v-if="!$v.user.address.required" class="error-text">
                        Обязательное поле
                    </h6>
                </div>
            </div>

            <div class="card-4">
                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.address.$error }"
                >
                    <h4>Жинси</h4>
                    <div class=" radio-custom">
                        <label class="cont"
                            >Эркак
                            <input
                                type="radio"
                                checked="checked"
                                name="radio"
                            />
                            <span class="checkmark"></span>
                        </label>
                        <label class="cont"
                            >Аёл
                            <input type="radio" name="radio" />
                            <span class="checkmark"></span>
                        </label>
                    </div>

                    <h6 v-if="!$v.user.address.required" class="error-text">
                        Обязательное поле
                    </h6>
                </div>
            </div>
        </div>

        <h4 class="title-small ">
            Фаолияти
        </h4>

        <div
            class="activity"
            v-for="(item, index) in user.activity"
            :key="index"
        >
            <div class="card-row">
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.role.$error }"
                    >
                        <h4>Вилоят</h4>
                        <div class="input-div">
                            <select v-model="item.region">
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
                            Обязательное поле
                        </h6>
                    </div>
                </div>
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.role.$error }"
                    >
                        <h4>Туман</h4>
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
                            Обязательное поле
                        </h6>
                    </div>
                </div>
                <div class="card-2">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.role.$error }"
                    >
                        <h4>Идора номи</h4>
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
                            Обязательное поле
                        </h6>
                    </div>
                </div>
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.login.$error }"
                    >
                        <h4>Гувоҳнома рақами</h4>
                        <div class="input-div">
                            <input
                                type="text"
                                v-model="$v.user.login.$model"
                                value=""
                            />
                        </div>

                        <h6 v-if="!$v.user.login.required" class="error-text">
                            Обязательное поле
                        </h6>
                    </div>
                </div>
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.role.$error }"
                    >
                        <h4>Статус</h4>
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
                            Обязательное поле
                        </h6>
                    </div>
                </div>
                <div class="card-2">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.role.$error }"
                    >
                        <h4>Статус</h4>
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
                            Обязательное поле
                        </h6>
                    </div>
                </div>
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.birthday.$error }"
                    >
                        <h4>Бошлаш санаси</h4>
                        <div class="input-div">
                            <input
                                type="date"
                                v-model="$v.user.birthday.$model"
                            />
                        </div>
                        <h6
                            v-if="!$v.user.birthday.required"
                            class="error-text"
                        >
                            Обязательное поле
                        </h6>
                    </div>
                </div>
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.birthday.$error }"
                    >
                        <h4>Тугатиш санаси</h4>
                        <div class="input-div">
                            <input
                                type="date"
                                v-model="$v.user.birthday.$model"
                            />
                        </div>
                        <h6
                            v-if="!$v.user.birthday.required"
                            class="error-text"
                        >
                            Обязательное поле
                        </h6>
                    </div>
                </div>

                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.phone.$error }"
                    >
                        <h4>Телефон рақам</h4>
                        <div class="input-div">
                            <input
                                type="text"
                                v-model.trim="$v.user.phone.$model"
                                placeholder="+998 -- --- -- --"
                                v-mask="'+998 ## ### ## ##'"
                            />
                        </div>
                        <h6 v-if="!$v.user.phone.required" class="error-text">
                            Обязательное поле
                        </h6>
                        <h6 v-if="!$v.user.phone.minLength" class="error-text">
                            Залить правильно
                        </h6>
                    </div>
                </div>

                <div class="card-4 end-bottom">
                    <button class="btn-delete">
                        <i class="fa fa-times"></i> Учириш
                    </button>
                </div>
            </div>
        </div>

        <div class="save-actions">
            <nuxt-link
                class="btn-outline mr-24"
                :to="{ name: `managment___${$i18n.locale}` }"
            >
                Бекор қилиш
            </nuxt-link>
            <button class="btn-orange primary" @click="submitData">
                Сақлаш
            </button>
        </div>
    </div>
</template>

<script>
import { required, minLength, helpers } from "vuelidate/lib/validators";
const alpha = helpers.regex(
    "alpha",
    /^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))).{6,32}$/
);
const email = helpers.regex(
    "alpha",
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
                gender: "",

                activity: [
                    {
                        region: "",
                        district: "",
                        organization: "",
                        sertificate: "",
                        status: "",
                        position: "",
                        start: "",
                        end: "",
                        phone: ""
                    }
                ]
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
                    required,
                    minLength: minLength(2)
                },
                number: {
                    required,
                    minLength: minLength(7)
                },
                exp: {
                    required
                },
                iib: {
                    required
                },
                jshir: {
                    required,
                    minLength: minLength(14)
                }
            },
            stir: {
                required,
                minLength: minLength(9)
            },
            phone: {
                required,
                minLength: minLength(17)
            },
            email: {
                required,
                email
            },
            region: {
                required
            },
            district: {
                required
            },
            address: {
                required
            },
            activity: {
                required,
                $each: {
                    region: {
                        required
                    },
                    district: {
                        required
                    },
                    organization: {
                        required
                    },
                    sertificate: {
                        required
                    },
                    status: {
                        required
                    },
                    position: {
                        required
                    },
                    start: {
                        required
                    },
                    end: {
                        required
                    },
                    phone: {
                        required,
                        minLength: minLength(17)
                    }
                }
            }
        }
    },

    mounted() {
        this.$store.commit("CHANGE_ROUTE", this.route);
    },
    methods: {
        submitData() {
            this.$v.$touch();
        }
    }
};
</script>

<style></style>
