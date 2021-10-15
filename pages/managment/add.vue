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
                            <option
                                v-for="(item, index) in roles"
                                :key="index"
                                :value="item.key"
                            >
                                {{ item.value[$i18n.locale] }}
                            </option>
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

        <div v-if="user.role == 'advokat'">
            <h4 class="title-small mt-10">
                Фаолияти
            </h4>

            <div class="activity">
                <div
                    class="card-row border-bottom-1"
                    v-for="(v, index) in $v.user.activity.$each.$iter"
                    :key="index"
                >
                    <div class="card-4">
                        <div
                            class="form-group"
                            :class="{
                                'form-error': v.region.$error
                            }"
                        >
                            <h4>Вилоят</h4>
                            <div class="input-div">
                                <select v-model="v.region.$model">
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
                            <h6 v-if="!v.region.required" class="error-text">
                                Обязательное поле
                            </h6>
                        </div>
                    </div>
                    <div class="card-4">
                        <div
                            class="form-group"
                            :class="{
                                'form-error': v.district.$error
                            }"
                        >
                            <h4>Туман</h4>
                            <div class="input-div">
                                <select v-model="v.district.$model">
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
                            <h6 v-if="!v.district.required" class="error-text">
                                Обязательное поле
                            </h6>
                        </div>
                    </div>
                    <div class="card-2">
                        <div
                            class="form-group"
                            :class="{
                                'form-error': v.organization.$error
                            }"
                        >
                            <h4>Идора номи</h4>
                            <div class="input-div">
                                <select v-model="v.organization.$model">
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
                            <h6
                                v-if="!v.organization.required"
                                class="error-text"
                            >
                                Обязательное поле
                            </h6>
                        </div>
                    </div>
                    <div class="card-4">
                        <div
                            class="form-group"
                            :class="{
                                'form-error': v.sertificate.$error
                            }"
                        >
                            <h4>Гувоҳнома рақами</h4>
                            <div class="input-div">
                                <input
                                    type="text"
                                    v-model="v.sertificate.$model"
                                    value=""
                                />
                            </div>

                            <h6
                                v-if="!v.sertificate.required"
                                class="error-text"
                            >
                                Обязательное поле
                            </h6>
                        </div>
                    </div>
                    <div class="card-4">
                        <div
                            class="form-group"
                            :class="{
                                'form-error': v.status.$error
                            }"
                        >
                            <h4>Статус</h4>
                            <div class="input-div">
                                <select v-model="v.status.$model">
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
                            <h6 v-if="!v.status.required" class="error-text">
                                Обязательное поле
                            </h6>
                        </div>
                    </div>
                    <div class="card-2">
                        <div
                            class="form-group"
                            :class="{
                                'form-error': v.position.$error
                            }"
                        >
                            <h4>Статус</h4>
                            <div class="input-div">
                                <select v-model="v.position.$model">
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
                            <h6 v-if="!v.position.required" class="error-text">
                                Обязательное поле
                            </h6>
                        </div>
                    </div>
                    <div class="card-4">
                        <div
                            class="form-group"
                            :class="{
                                'form-error': v.start.$error
                            }"
                        >
                            <h4>Бошлаш санаси</h4>
                            <div class="input-div">
                                <input type="date" v-model="v.start.$model" />
                            </div>
                            <h6 v-if="!v.start.required" class="error-text">
                                Обязательное поле
                            </h6>
                        </div>
                    </div>
                    <div class="card-4">
                        <div
                            class="form-group"
                            :class="{
                                'form-error': v.end.$error
                            }"
                        >
                            <h4>Тугатиш санаси</h4>
                            <div class="input-div">
                                <input type="date" v-model="v.end.$model" />
                            </div>
                            <h6 v-if="!v.end.required" class="error-text">
                                Обязательное поле
                            </h6>
                        </div>
                    </div>

                    <div class="card-4">
                        <div
                            class="form-group"
                            :class="{
                                'form-error': v.phone.$error
                            }"
                        >
                            <h4>Телефон рақам</h4>
                            <div class="input-div">
                                <input
                                    type="text"
                                    v-model="v.phone.$model"
                                    placeholder="+998 -- --- -- --"
                                    v-mask="'+998 ## ### ## ##'"
                                />
                            </div>
                            <h6 v-if="!v.phone.required" class="error-text">
                                Обязательное поле
                            </h6>
                            <h6 v-if="!v.phone.minLength" class="error-text">
                                Залить правильно
                            </h6>
                        </div>
                    </div>

                    <div class="card-4 end-bottom">
                        <button
                            class="btn-delete"
                            v-if="user.activity.length > 1"
                            @click="removeActivity(index)"
                        >
                            <i class="fa fa-trash"></i>Ўчириш
                        </button>
                    </div>
                </div>

                <div class="mt-8">
                    <button class="add-item" @click="addActivity">
                        <img src="@/static/img/addbtn.png" alt="" />
                        <b> Иш жойи қўшиш </b>
                    </button>
                </div>
            </div>

            <h4 class="title-small mt-10">
                Лицензия тўғрисида маълумот
            </h4>

            <div class="card-row">
                <div class="card-2">
                    <div
                        class="form-group"
                        :class="{
                            'form-error': $v.user.license.position.$error
                        }"
                    >
                        <h4>Мақоми</h4>
                        <div class="input-div">
                            <input
                                type="text"
                                v-model="$v.user.license.position.$model"
                            />
                        </div>
                        <h6
                            v-if="!$v.user.license.position.required"
                            class="error-text"
                        >
                            Обязательное поле
                        </h6>
                    </div>
                </div>
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.license.seria.$error }"
                    >
                        <h4>Серия ва рақами</h4>
                        <div class="input-div">
                            <input
                                type="text"
                                v-model="$v.user.license.seria.$model"
                            />
                        </div>
                        <h6
                            v-if="!$v.user.license.seria.required"
                            class="error-text"
                        >
                            Обязательное поле
                        </h6>
                    </div>
                </div>
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.license.given.$error }"
                    >
                        <h4>Ким томонидан берилган</h4>
                        <div class="input-div">
                            <select v-model="$v.user.license.given.$model">
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
                        <h6
                            v-if="!$v.user.license.given.required"
                            class="error-text"
                        >
                            Обязательное поле
                        </h6>
                    </div>
                </div>

                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.license.date.$error }"
                    >
                        <h4>Берилган санаси</h4>
                        <div class="input-div">
                            <input
                                type="date"
                                v-model="$v.user.license.date.$model"
                            />
                        </div>
                        <h6
                            v-if="!$v.user.license.date.required"
                            class="error-text"
                        >
                            Обязательное поле
                        </h6>
                    </div>
                </div>
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.license.period.$error }"
                    >
                        <h4>Амал қилиш муддати</h4>
                        <div class="input-div">
                            <input
                                type="date"
                                v-model="$v.user.license.period.$model"
                            />
                        </div>
                        <h6
                            v-if="!$v.user.license.period.required"
                            class="error-text"
                        >
                            Обязательное поле
                        </h6>
                    </div>
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

            roles: [
                {
                    key: "admin",
                    value: {
                        uz: "Admin",
                        ru: "Админ",
                        kr: "Админ"
                    }
                },
                {
                    key: "advokat",
                    value: {
                        uz: "Advokatlar palatasi",
                        ru: "Палата адвокатов",
                        kr: "Адвокатлар палатаси"
                    }
                },
                {
                    key: "adliya",
                    value: {
                        uz: "Adliya organi",
                        ru: "Адлия орган",
                        kr: "Адлия органи"
                    }
                },
                {
                    key: "prokror",
                    value: {
                        uz: "Prokror",
                        ru: "Прокрор",
                        kr: "Прокрор"
                    }
                },
                {
                    key: "sudya",
                    value: {
                        uz: "Sudya",
                        ru: "Судить",
                        kr: "Судя"
                    }
                },
                {
                    key: "tergovchi",
                    value: {
                        uz: "Tergovchi",
                        ru: "Следователь",
                        kr: "Админ"
                    }
                },
                {
                    key: "surishtiruvchi",
                    value: {
                        uz: "Surishtiruvchi",
                        ru: "Расследование",
                        kr: "Суриштирувчи"
                    }
                }
            ],
            permission: {
                admin: [
                    "user-see",
                    "user-edit",
                    "user-rm",
                    "user-create",
                    "advokat-see",
                    "advokat-search",
                    "advokat-create",
                    "advokat-edit",
                    "advokat-rm",
                    "advokat-report-see",
                    "advokat-lic-edit",
                    "restr-see",
                    "restr-create",
                    "restr-edit",
                    "restr-rm",
                    "restr-add",
                    "vote-see",
                    "vote-send",
                    "monit-see",
                    "monit-download",
                    "result-see",
                    "result-create",
                    "result-download",
                    "log-see",
                    "main-see",
                    "main-create",
                    "main-edit",
                    "main-rm"
                ],
                advokat: [
                    "user-see",
                    "advokat-see",
                    "advokat-search",
                    "advokat-report-see",
                    "restr-see",
                    "vote-see",
                    "vote-send",
                    "monit-see",
                    "monit-download",
                    "result-see",
                    "result-create",
                    "result-download"
                ],
                adliya: [
                    "user-see",
                    "advokat-see",
                    "advokat-search",
                    "advokat-report-see",
                    "restr-see",
                    "monit-see",
                    "monit-download",
                    "result-see",
                    "result-create",
                    "result-download"
                ],
                prokror: [
                    "advokat-see",
                    "advokat-search",
                    "restr-see",
                    "vote-see",
                    "vote-send"
                ],
                sudya: [
                    "advokat-see",
                    "advokat-search",
                    "restr-see",
                    "vote-see",
                    "vote-send"
                ],
                tergovchi: [
                    "advokat-see",
                    "advokat-search",
                    "restr-see",
                    "vote-see",
                    "vote-send"
                ],
                surishtiruvchi: [
                    "advokat-see",
                    "advokat-search",
                    "restr-see",
                    "vote-see",
                    "vote-send"
                ]
            },

            user: {
                permission: [],
                role: "admin",
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
                ],
                license: {
                    position: "",
                    seria: "",
                    given: "",
                    date: "",
                    period: ""
                }
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
            },
            license: {
                position: {
                    required
                },
                seria: {
                    required
                },
                given: {
                    required
                },
                date: {
                    required
                },
                period: {
                    required
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
            this.user.permission = this.permission[this.user.role];
            console.log("user", this.user);
        },
        addActivity() {
            this.user.activity.push({
                region: "",
                district: "",
                organization: "",
                sertificate: "",
                status: "",
                position: "",
                start: "",
                end: "",
                phone: ""
            });
        },
        removeActivity(index) {
            this.user.activity.splice(index, 1);
        }
    }
};
</script>

<style></style>
