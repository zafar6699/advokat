<template>
    <div>
        <div class="admin-nav">
            <div class="nav-menu">
                <ul>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `managment___${$i18n.locale}` }"
                        >
                            Фойдаланувчиларни бошқариш
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `lawyers___${$i18n.locale}` }"
                        >
                            Aдвокатлар реестри
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `orglawyers___${$i18n.locale}` }"
                        >
                            Aдвокатлар реестри тузилмаси
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `modul___${$i18n.locale}` }"
                        >
                            Сўров юбориш
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `modul___${$i18n.locale}` }"
                        >
                            Ҳисоботлар модули
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `monitoring___${$i18n.locale}` }"
                        >
                            Мониторинг бўлими
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `datacontrol___${$i18n.locale}` }"
                        >
                            Маълумотларни бошқариш
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `history___${$i18n.locale}` }"
                        >
                            ТАРИХ
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="admin-header">
            <div class="header-inner">
                <div class="header-title">
                    <ul v-if="route.length > 0">
                        <li
                            v-for="(item, index) in route"
                            :key="index"
                            v-if="index < route.length - 1"
                        >
                            <nuxt-link
                                :to="{ name: item.url + `___` + $i18n.locale }"
                            >
                                {{ item.value[$i18n.locale] }}
                            </nuxt-link>
                            <span class="line"></span>
                        </li>

                        <li>
                            {{ route[route.length - 1].value[$i18n.locale] }}
                        </li>
                    </ul>
                </div>

                <div class="header-right">
                    <div>
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
                                <span v-if="$i18n.locale == 'kr'">Ўзбекча</span>
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
                    </div>
                    <div class="notification" v-click-other="closeNot">
                        <button @click="openNot = true">
                            <img src="@/static/img/bell.png" alt="" />
                        </button>

                        <div
                            :class="
                                openNot
                                    ? 'not-modal not-modal-open'
                                    : 'not-modal'
                            "
                        >
                            <div class="m-title">
                                <h5>Хабарномалар</h5>

                                <button class="not" @click="openNot = false">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z"
                                            fill="#2E3A59"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div class="note-select">
                                <button class="">Барчаси</button>
                                <button class="selected">
                                    Ўқилмаган
                                </button>
                            </div>

                            <div class="not-body scroll">
                                <h4 class="date-title">5 май, 2021</h4>

                                <div class="not-item">
                                    <div class="name-time">
                                        <h3>Муқимов Отабек</h3>
                                        <h6>16:00</h6>
                                    </div>
                                    <p>
                                        Муқимов Отабек сизга судялар томонидан
                                        жиноят иш берилди ишни
                                    </p>
                                </div>

                                <div class="not-item">
                                    <div class="name-time">
                                        <h3>
                                            <span class="circle">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="8"
                                                    height="8"
                                                    viewBox="0 0 8 8"
                                                    fill="none"
                                                >
                                                    <circle
                                                        cx="4"
                                                        cy="4"
                                                        r="4"
                                                        fill="#E84343"
                                                    /></svg
                                            ></span>
                                            Муқимов Отабек
                                        </h3>
                                        <h6>16:00</h6>
                                    </div>
                                    <p>
                                        Муқимов Отабек сизга судялар томонидан
                                        жиноят иш берилди ишни
                                    </p>

                                    <div class="item-advance">
                                        <div class="acc-body">
                                            <div class="acc-item">
                                                <h2>Манзил</h2>
                                                <h3>
                                                    Тошкент вилояти, Келес Йўли
                                                    кўчаси, 59-уй
                                                </h3>
                                            </div>
                                            <div class="acc-item">
                                                <h2>Йўналиши</h2>
                                                <h3>
                                                    Фуқаролик ва иқтисодий
                                                </h3>
                                            </div>
                                            <div class="acc-item">
                                                <h2>Жараён босқичи</h2>
                                                <h3>
                                                    1
                                                </h3>
                                            </div>

                                            <div class="acc-item">
                                                <h2>Иш жараёни тили:</h2>
                                                <h3>
                                                    Ўзбек тили
                                                </h3>
                                            </div>
                                            <div class="acc-item">
                                                <h2>Ижро этиш санаси:</h2>
                                                <h3>
                                                    22.07.2021 17:30
                                                </h3>
                                            </div>
                                        </div>

                                        <div class="item-actions">
                                            <button class="collapse">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="8"
                                                    viewBox="0 0 14 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M1 1L7 7L13 1"
                                                        stroke="black"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </button>

                                            <div class="right-actions">
                                                <button class="accept primary">
                                                    Қабул қилиш
                                                </button>
                                                <button class="cancel">
                                                    Бекор қилиш
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="not-item">
                                    <div class="name-time">
                                        <h3>
                                            <span class="circle">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="8"
                                                    height="8"
                                                    viewBox="0 0 8 8"
                                                    fill="none"
                                                >
                                                    <circle
                                                        cx="4"
                                                        cy="4"
                                                        r="4"
                                                        fill="#E84343"
                                                    /></svg
                                            ></span>
                                            Муқимов Отабек
                                        </h3>
                                        <h6>16:00</h6>
                                    </div>
                                    <p>
                                        Муқимов Отабек сизга судялар томонидан
                                        жиноят иш берилди ишни
                                    </p>

                                    <div class="item-advance">
                                        <div class="acc-body">
                                            <div class="acc-item">
                                                <h2>Манзил</h2>
                                                <h3>
                                                    Тошкент вилояти, Келес Йўли
                                                    кўчаси, 59-уй
                                                </h3>
                                            </div>
                                            <div class="acc-item">
                                                <h2>Йўналиши</h2>
                                                <h3>
                                                    Фуқаролик ва иқтисодий
                                                </h3>
                                            </div>
                                            <div class="acc-item">
                                                <h2>Жараён босқичи</h2>
                                                <h3>
                                                    1
                                                </h3>
                                            </div>

                                            <div class="acc-item">
                                                <h2>Иш жараёни тили:</h2>
                                                <h3>
                                                    Ўзбек тили
                                                </h3>
                                            </div>
                                            <div class="acc-item">
                                                <h2>Ижро этиш санаси:</h2>
                                                <h3>
                                                    22.07.2021 17:30
                                                </h3>
                                            </div>
                                        </div>

                                        <div class="item-actions">
                                            <button class="collapse">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="8"
                                                    viewBox="0 0 14 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M1 1L7 7L13 1"
                                                        stroke="black"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </button>

                                            <span class="status past">
                                                Ўтказиб юбордингиз
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="not-item">
                                    <div class="name-time">
                                        <h3>
                                            <span class="circle">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="8"
                                                    height="8"
                                                    viewBox="0 0 8 8"
                                                    fill="none"
                                                >
                                                    <circle
                                                        cx="4"
                                                        cy="4"
                                                        r="4"
                                                        fill="#E84343"
                                                    /></svg
                                            ></span>
                                            Муқимов Отабек
                                        </h3>
                                        <h6>16:00</h6>
                                    </div>
                                    <p>
                                        Муқимов Отабек сизга судялар томонидан
                                        жиноят иш берилди ишни
                                    </p>

                                    <div class="item-advance">
                                        <div class="acc-body">
                                            <div class="acc-item">
                                                <h2>Манзил</h2>
                                                <h3>
                                                    Тошкент вилояти, Келес Йўли
                                                    кўчаси, 59-уй
                                                </h3>
                                            </div>
                                            <div class="acc-item">
                                                <h2>Йўналиши</h2>
                                                <h3>
                                                    Фуқаролик ва иқтисодий
                                                </h3>
                                            </div>
                                            <div class="acc-item">
                                                <h2>Жараён босқичи</h2>
                                                <h3>
                                                    1
                                                </h3>
                                            </div>

                                            <div class="acc-item">
                                                <h2>Иш жараёни тили:</h2>
                                                <h3>
                                                    Ўзбек тили
                                                </h3>
                                            </div>
                                            <div class="acc-item">
                                                <h2>Ижро этиш санаси:</h2>
                                                <h3>
                                                    22.07.2021 17:30
                                                </h3>
                                            </div>
                                        </div>

                                        <div class="item-actions">
                                            <button class="collapse">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="8"
                                                    viewBox="0 0 14 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M1 1L7 7L13 1"
                                                        stroke="black"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </button>

                                            <span class="status cancel">
                                                Рад этилган
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openNot: false
        };
    },
    computed: {
        route() {
            return this.$store.state.route;
        }
    },
    methods: {
        closeNot() {
            this.openNot = false;
        },
        clickUz() {
            this.$i18n.setLocale("uz");
        },
        clickKiril() {
            this.$i18n.setLocale("kr");
        },
        clickRu() {
            this.$i18n.setLocale("ru");
        }
    }
};
</script>

<style lang="scss" scoped>
div.admin-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 310px;
    height: 100vh;
    z-index: 40;
    background-color: #3a3330;
    padding-top: 100px;
    div.nav-menu {
        ul {
            li {
                a {
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 16px;
                    display: block;
                    padding: 16px 31px;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    text-decoration: none;
                    color: #ffffff;
                    position: relative;
                }
                a::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 4px;
                    background-color: transparent;
                }
                a.nuxt-link-active {
                    background-color: #2e2826;

                    &::before {
                        background-color: $gc;
                    }
                }
            }
        }
    }
}

div.admin-header {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 72px;
    z-index: 12;
    div.header-title {
        ul {
            list-style-type: none;
            display: flex;
            align-items: center;
            span.line {
                height: 10px;
                width: 1px;
                background-color: #605856;
                margin: 0px 5px;
            }
        }
        li {
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: #000000;
            display: inline-flex;
            align-items: center;
            a {
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                text-decoration: none;
                display: flex;
                align-items: center;
                text-align: center;

                color: #9d9392;

                &:hover {
                    color: $gc;
                }
            }
        }
    }
    div.header-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 310px;
        height: 100%;
        padding: 10px 40px;
    }

    div.header-right {
        display: flex;
        align-items: center;

        div.notification {
            button.not {
                background: transparent;
                border: none;
                cursor: pointer;
            }
        }
    }
}

div.not-modal {
    padding: 32px 48px;
    width: 490px;
    position: fixed;
    top: 0;
    transform: translateX(102%);
    right: 0;
    transition: 0.3s;
    z-index: 50px;
    background-color: #fff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    height: 100vh;
    div.m-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        h5 {
            font-weight: bold;
            font-size: 24px;
            line-height: 32px;

            color: #11151e;
        }
        button {
            width: 32px;
            height: 32px;
            border-radius: 100%;
            background: #f1f2f5 !important;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
    }
    div.note-select {
        display: flex;
        background: #f3f2f2 !important;
        margin-bottom: 25px;
        border-radius: 4px;
        button {
            width: 50%;
            border-radius: 4px;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            background: #f3f2f2 !important;
            padding: 12px;

            &:hover {
                color: $gc;
            }
        }

        button.selected {
            background: #1c1b1b !important;
            color: #fff;
        }
    }
}

div.not-modal-open {
    transform: translateX(0) !important;
}

div.not-body {
    max-height: calc(100vh - 200px);
    overflow-y: scroll;
    padding-right: 10px;
    span.status {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
    }
    span.past {
        color: #f2c94c;
    }
    span.cancel {
        color: #eb5757;
    }
    div.acc-item {
        display: flex;
        justify-content: space-between;
        padding: 8px 0px;
        border-top: 1px solid #f3f2f2;
        h2 {
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: #9d9392;
            width: 50%;
        }
        h3 {
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            width: 50%;
            text-align: right;
            color: #000000;
            text-align: right;
        }
    }

    div.acc-body {
        margin-bottom: 16px;
    }

    div.item-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;

        div.right-actions {
            button {
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                padding: 8px 16px;
                border-radius: 4px;
            }

            button.cancel {
                border: 1px solid #000;
            }
        }
    }
    h4.date-title {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #9d9392;
        margin-bottom: 15px;
    }
    div.not-item {
        border-bottom: 1px solid #f3f2f2;
        margin-bottom: 15px;
    }
    p {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 15px;
        color: #201918;
    }

    div.name-time {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        span.circle {
            margin-right: 5px;
        }
        h3 {
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;

            display: flex;
            align-items: center;

            color: #201918;
        }
        h6 {
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;

            text-align: right;

            color: #9d9392;
        }
    }
}
</style>
