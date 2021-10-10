<template>
    <div>
        <header>
            <div
                @click="isModalSign = false"
                :class="isModalSign ? 'fixvh block-fh' : 'fixvh'"
            ></div>
            <div
                :class="isModalSign ? 'my-modalDelete open-modal' : 'my-modal'"
            >
                <div class="modal">
                    <h3>{{ $t("sign") }}</h3>
                    <div class="form">
                        <div>
                            <span>{{ $t("login") }}</span>
                            <input type="text" />
                        </div>
                        <div>
                            <span>{{ $t("password") }}</span>
                            <input type="password" />
                        </div>
                        <button>{{ $t("sign") }}</button>
                    </div>
                </div>
            </div>
            <div class="umd-container">
                <div class="header flex">
                    <div class="left">
                        <div class="logo">
                            <nuxt-link
                                :to="{ name: `index___${$i18n.locale}` }"
                            >
                                logo
                            </nuxt-link>
                        </div>
                        <ul>
                            <li>
                                <a href="/#chart">
                                    {{ $t("statistic") }}
                                </a>
                            </li>
                            <li>
                                <a href="/#news">
                                    {{ $t("news") }}
                                </a>
                            </li>
                            <li>
                                <a href="/#havola">
                                    {{ $t("portals") }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="right">
                        <div class="til">
                            <button class=" flex">
                                <span class="globus flex"
                                    ><svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                            stroke="#1C1B1B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M2 12H22"
                                            stroke="#1C1B1B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z"
                                            stroke="#1C1B1B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span v-if="$i18n.locale == 'uz'"
                                    >O'zbekcha</span
                                >
                                <span v-if="$i18n.locale == 'cr'">Ўзбекча</span>
                                <span v-if="$i18n.locale == 'ru'">Русский</span>
                                <span class="til-icon flex">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 10L12 15L17 10"
                                            stroke="#11151E"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div class="til-menu">
                                <div>
                                    <ul>
                                        <li>
                                            <h6 @click.prevent="clickUz">
                                                O'zbekcha
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 @click.prevent="clickKiril">
                                                Ўзбекча
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 @click.prevent="clickRu">
                                                Русский
                                            </h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div :class="isProfil ? ' profil open' : 'profil'">
                            <button v-click-out="hide" @click="clickProfil">
                                <!-- <img src="@/static/img/avatar.gif" alt="" /> -->
                                {{ $t("kabinet") }}
                            </button>
                            <div v-if="isProfil" class="setting notauth">
                                <button class="log-btn" @click="openModalSign">
                                    <span class="flex"
                                        ><svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                                stroke="#1C1B1B"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z"
                                                stroke="#1C1B1B"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    {{ $t("sign") }}
                                </button>
                            </div>
                            <!-- <div v-if="isProfil" class="setting">
                                <nuxt-link to="/">
                                    <span
                                        ><svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                                stroke="#1C1B1B"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z"
                                                stroke="#1C1B1B"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    Созлаш
                                </nuxt-link>
                                <nuxt-link to="/"
                                    ><span
                                        ><svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16 17L21 12L16 7"
                                                stroke="#1C1B1B"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M21 12H9"
                                                stroke="#1C1B1B"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                                                stroke="#1C1B1B"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg> </span
                                    >Чиқиш</nuxt-link
                                >
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isProfil: false,
            isModalSign: false
        };
    },
    methods: {
        hide() {
            this.isProfil = false;
        },
        openModalSign() {
            this.isModalSign = true;
        },
        closeModalSign() {
            this.isModalSign = false;
        },

        clickProfil() {
            this.isProfil = !this.isProfil;
        },
        clickUz() {
            this.$i18n.setLocale("uz");
        },
        clickKiril() {
            this.$i18n.setLocale("cr");
        },
        clickRu() {
            this.$i18n.setLocale("ru");
        }
    }
};
</script>

<style lang="scss">
.modal {
    h3 {
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        color: #000000;
        margin-bottom: 24px;
    }
    .reg {
        margin-bottom: 0 !important;
    }
    .form {
        margin-bottom: 16px;
        div {
            display: flex;
            flex-direction: column;
            margin-bottom: 16px;
            span {
                font-size: 14px;
                line-height: 16px;
                color: #11151e;
                margin-bottom: 8px;
            }
            input {
                border: 0;
                height: 48px;
                background: #f1f2f5;
                border-radius: 4px;
                padding: 12px 16px;
                font-size: 16px;
                line-height: 24px;
                color: #201918;
                &:focus {
                    border: 0;
                    outline: 1px solid #e88243;
                }
            }
        }
        button {
            margin-top: 16px;
            width: 100%;
            border: 0;
            padding: 12px;
            background: #4f4f4f;
            border-radius: 4px;
            font-size: 16px;
            line-height: 24px;
            color: #f2f2f2;
            text-decoration: none;
            cursor: pointer;
        }
    }
}
.open {
    top: 0;
    // right: 10px;
    position: relative;
    background: #ffffff;
    border-radius: 4px;
    button {
        padding: 22px 0;
        border-bottom: 1px solid #f3f2f2 !important;
    }
    .setting {
        width: 160px;
        position: absolute;
        top: 72px;
        left: -10px;
        padding: 0px 10px;
        background: #fff;
        box-shadow: 0px 0px 8px rgba(0, 2, 0, 0.15);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        .log-btn {
            text-decoration: none;
            padding: 9px 3px;
            display: flex;
            align-items: center;
            font-size: 14px;
            line-height: 16px;
            color: #201918;
            span {
                margin-right: 17px;
            }
            &:hover {
                background: #f3f2f2;
            }
        }
    }
}

header {
    z-index: 12;
    width: 100%;
    background: #fff;
    top: 0;
    left: 0;
    position: fixed;
    border-bottom: 1px solid #f2f2f2;
}
.header {
    .left {
        display: flex;
        align-items: center;
        .logo {
            margin-right: 48px;
            a {
                color: #000000;
                text-decoration: none;
            }
        }
        ul {
            display: flex;
            align-items: center;
            list-style: none;
            li {
                margin-right: 24px;
                a {
                    display: block;
                    text-decoration: none;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 24px;
                    color: #000000;
                    padding: 24px 0;
                    &:hover {
                        color: #e88243;
                    }
                }
            }
        }
    }
    .right {
        display: flex;
        align-items: center;
        .til {
            padding: 24px 0;
            margin-right: 24px;
            position: relative;
            .globus {
                margin-right: 4px;
            }
            .til-icon {
                transition: 0.2s;
            }
            button {
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                display: flex;
                align-items: center;
                color: #4f4f4f;
                background: transparent;
                border: none;
            }
            .til-menu {
                position: absolute;
                display: none;
                left: 0;
                width: 120px;
                top: 72px;
                z-index: 23;
                div {
                    background: #ffffff;
                    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
                    border-radius: 4px;
                    display: flex;
                    flex-direction: column;
                    padding: 10px 15px;
                    padding-bottom: 0;
                    ul {
                        list-style: none;
                    }
                    h6 {
                        font-size: 14px;
                        line-height: 16px;
                        display: flex;
                        align-items: center;
                        color: #201918;
                        cursor: pointer;
                        margin-bottom: 16px;
                        padding: 0 10px;
                    }
                    h6:hover {
                        color: #e88243;
                    }
                }
            }
            &:hover {
                .til-icon {
                    transform: rotate(-180deg);
                }
                .til-menu {
                    display: block;
                }
            }
        }
        .profil {
            button {
                cursor: pointer;
                background: transparent;
                display: flex;
                border: 0;
                align-items: center;
                text-decoration: none;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                color: #000000;

                img {
                    margin-right: 8px;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
}
div.my-modalDelete {
    background-color: #fff;
    border-radius: 10px;
    padding: 0px 0px;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 32px;
    transform: translate(-50%, -50%) scale(0);
    z-index: 2515;
    transition: 0.3s;
    .error-text {
        color: red;
    }
    div.item {
        margin-bottom: 10px;
    }
    div.body-modal {
        overflow: hidden;
    }
    h6 {
        font-size: 14px;
        color: #333;
    }
}
</style>
