<template>
    <div>
        <div
            class="
                form-group
            "
            :class="{ 'form-error': $v.user.login.$error }"
        >
            <h4>Login</h4>
            <div class="input-div">
                <input type="text" v-model="$v.user.login.$model" />
            </div>
            <h6 v-if="!$v.user.login.required" class="error-text">
                To'ldirish shart
            </h6>
        </div>

        <div
            class="
                form-group
            "
            :class="{ 'form-error': $v.user.region.$error }"
        >
            <h4>Viloyat</h4>
            <div class="input-div">
                <select v-model.trim="$v.user.region.$model">
                    <option style="display: none;" value="" disabled selected
                        >Viloyatni tanlang</option
                    >
                    <option value="1">All</option>
                    <option value="2">Toshkent</option>
                    <option value="3">Xorazm</option>
                </select>
            </div>
            <h6 v-if="!$v.user.region.required" class="error-text">
                Tanlanishi shart
            </h6>
        </div>

        <div
            class="
                form-group
            "
            :class="{ 'form-error': $v.user.phone.$error }"
        >
            <h4>Phone</h4>
            <div class="input-div">
                <input
                    type="text"
                    v-model.trim="$v.user.phone.$model"
                    placeholder="+998 -- --- -- --"
                    v-mask="'+998 ## ### ## ##'"
                />
            </div>
            <h6 v-if="!$v.user.phone.required" class="error-text">
                To'ldirish shart
            </h6>
            <h6 v-if="!$v.user.phone.minLength" class="error-text">
                To'liq to'ldiring
            </h6>
        </div>

        <div
            class="
                form-group
            "
            :class="{ 'form-error': $v.user.password.$error }"
        >
            <h4>Parol</h4>
            <div class="input-div">
                <input type="password" v-model.trim="$v.user.password.$model" />
            </div>
            <h6 v-if="!$v.user.password.required" class="error-text">
                To'ldirish shart
            </h6>
            <h6 v-if="!$v.user.password.minLength" class="error-text">
                Kamida {{ $v.user.password.$params.minLength.min }} ta belgi
            </h6>
        </div>

        <button @click="submit">Submit</button>
    </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
    layout: "admin",
    data() {
        return {
            user: {
                login: "",
                phone: "",
                address: "",
                password: "",
                region: ""
            },
            regions: ["Toshkent", "Xorazm", "Samarqand"]
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
    methods: {
        submit() {
            this.$v.$touch();

            if (!this.$v.user.$invalid) {
                this.user.phone = this.user.phone.replace(/[^0-9]/g, "");

                console.log("user", this.user);
            }
        }
    }
};
</script>

<style></style>
