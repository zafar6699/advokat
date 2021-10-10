<template>
    <div>
        <div class="org-laywers">
            <div class="content-title">
                <h3>Aдвокатлар реестри тузилмаси</h3>
            </div>
            <div class="org-filter">
                <div class="content-org">
                    <div class="card-row">
                        <div class="card-4">
                            <div
                                class="
                form-group
            "
                            >
                                <h4>Вилоят</h4>
                                <div class="input-div">
                                    <select>
                                        <option
                                            style="display: none;"
                                            value=""
                                            disabled
                                            selected
                                            >Viloyatni tanlang</option
                                        >
                                        <option value="1">All</option>
                                        <option value="2">Toshkent</option>
                                        <option value="3">Xorazm</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="card-4 form-group">
                            <h4>Туман</h4>
                            <div class="input-div">
                                <select>
                                    <option
                                        style="display: none;"
                                        value=""
                                        disabled
                                        selected
                                        >Viloyatni tanlang</option
                                    >
                                    <option value="1">All</option>
                                    <option value="2">Toshkent</option>
                                    <option value="3">Xorazm</option>
                                </select>
                            </div>
                        </div>
                        <div class="card-4 form-group">
                            <h4>Тузилма бўлими</h4>
                            <div class="input-div">
                                <select>
                                    <option
                                        style="display: none;"
                                        value=""
                                        disabled
                                        selected
                                        >Viloyatni tanlang</option
                                    >
                                    <option value="1">All</option>
                                    <option value="2">Toshkent</option>
                                    <option value="3">Xorazm</option>
                                </select>
                            </div>
                        </div>

                        <div class="card-4 flex-end form-froup">
                            <div class="input-div flex search">
                                <div class=" form-group">
                                    <h4>Гувохнома рақами:</h4>
                                    <div class="input-div">
                                        <input
                                            type="text"
                                            v-model="number"
                                            placeholder="000 000 000"
                                            v-mask="'### ### ###'"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-head flex">
                <div class="izlash">
                    <span
                        ><svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z"
                                stroke="black"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M20 20L16 16"
                                stroke="black"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                    <input type="text" :placeholder="$t('search')" />
                </div>
                <div class="card-4 s">
                    <div class="input-div flex search">
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
                        <button class="primary search-bt">
                            {{ $t("search") }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="cards">
                <div class="card-row-2 ">
                    <nuxt-link
                        :to="{ name: 'orglawyers-id___' + $i18n.locale }"
                        class="card-2 flex cardbox"
                    >
                        <div class="left">
                            <div class="title">
                                <h3>“Norton legal” адвокатская фирма</h3>
                            </div>
                            <div class="address">
                                Фарғона вилояти, Риштон тумани
                            </div>
                            <div class="tel flex">
                                <p>+998 90 627 48 59</p>
                                <span class="line"></span>
                                <p>№ 627485945</p>
                            </div>
                        </div>
                        <div class="right">
                            <img src="@/static/img/banner.png" alt="" />
                        </div>
                    </nuxt-link>
                    <nuxt-link
                        :to="{ name: 'orglawyers-id___' + $i18n.locale }"
                        class="card-2 flex cardbox"
                    >
                        <div class="left">
                            <div class="title">
                                <h3>“Norton legal” адвокатская фирма</h3>
                            </div>
                            <div class="address">
                                Фарғона вилояти, Риштон тумани
                            </div>
                            <div class="tel flex">
                                <p>+998 90 627 48 59</p>
                                <span class="line"></span>
                                <p>№ 627485945</p>
                            </div>
                        </div>
                        <div class="right">
                            <img src="@/static/img/banner.png" alt="" />
                        </div>
                    </nuxt-link>
                    <nuxt-link
                        :to="{ name: 'orglawyers-id___' + $i18n.locale }"
                        class="card-2 flex cardbox"
                    >
                        <div class="left">
                            <div class="title">
                                <h3>“Norton legal” адвокатская фирма</h3>
                            </div>
                            <div class="address">
                                Фарғона вилояти, Риштон тумани
                            </div>
                            <div class="tel flex">
                                <p>+998 90 627 48 59</p>
                                <span class="line"></span>
                                <p>№ 627485945</p>
                            </div>
                        </div>
                        <div class="right">
                            <img src="@/static/img/banner.png" alt="" />
                        </div>
                    </nuxt-link>
                    <nuxt-link
                        :to="{ name: 'orglawyers-id___' + $i18n.locale }"
                        class="card-2 flex cardbox"
                    >
                        <div class="left">
                            <div class="title">
                                <h3>“Norton legal” адвокатская фирма</h3>
                            </div>
                            <div class="address">
                                Фарғона вилояти, Риштон тумани
                            </div>
                            <div class="tel flex">
                                <p>+998 90 627 48 59</p>
                                <span class="line"></span>
                                <p>№ 627485945</p>
                            </div>
                        </div>
                        <div class="right">
                            <img src="@/static/img/banner.png" alt="" />
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: "admin",
    data() {
        return {
            number: "",
            route: [
                {
                    url: "lawyers",
                    value: {
                        uz: "Advokatlar reestri tuzilmasi",
                        kr: "Адвокатлар реестри тузилмаси",
                        ru: "Структура реестра адвокатов"
                    }
                }
            ]
        };
    },
    mounted() {
        this.$store.commit("CHANGE_ROUTE", this.route);
    }
};
</script>

<style lang="scss" scoped>
.org-laywers {
    .content-head {
        margin-bottom: 32px;
        div.izlash {
            position: relative;
            span {
                position: absolute;
                top: 50%;
                transform: translateY(-40%);
                left: 10px;
                svg {
                    path {
                        stroke: #1c1b1b;
                    }
                }
            }
            input {
                width: 420px;
                height: 48px;
                padding: 12px 38px;
                border: 1px solid #a29e9e;
                border-radius: 4px;
                font-size: 16px;
                line-height: 24px;
                color: #605856;
                &:focus {
                    border: 1px solid transparent;
                    outline: 1px solid #e88243;
                }
            }
        }
    }
    .search {
        button {
            padding: 12px 0;
            border: 0;
            font-weight: 500;
            font-size: 15px;
            line-height: 24px;
        }
        button.clear-bt {
            padding: 12px;
        }
        button.search-bt {
            width: calc(100% - 60px);
        }
    }
    .org-filter {
        margin-bottom: 64px;
    }
    .cards {
        .card-row-2 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
        .cardbox {
            text-decoration: none;
            margin-bottom: 24px;
            width: calc((100% - 24px) / 2);
            padding: 32px;
            background: #f3f2f2;
            border-radius: 8px;
            .left {
                width: calc(100% - 144px);
                .title {
                    margin-bottom: 16px;
                    h3 {
                        font-size: 24px;
                        line-height: 32px;
                        color: #201918;
                    }
                }
                .address {
                    font-size: 16px;
                    line-height: 24px;
                    color: #201918;
                    margin-bottom: 8px;
                }
                .tel {
                    p {
                        font-size: 16px;
                        line-height: 24px;
                        color: #201918;
                    }
                    span.line {
                        margin: 0 8px;
                        border: 1px solid #201918;
                        height: 16px;
                        background: #201918;
                    }
                }
            }
            .right {
                display: inline-block;
                img {
                    border-radius: 50%;
                    width: 120px;
                    height: 120px;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>
