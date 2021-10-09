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
                            :to="{ name: `monitoring___${$i18n.locale}` }"
                        >
                            Ҳисоботлар модули
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `datacontrol___${$i18n.locale}` }"
                        >
                            Мониторинг бўлими
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            nuxt-link-exact-link
                            :to="{ name: `request___${$i18n.locale}` }"
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
                    <h4>Фойдаланувчиларни бошқариш</h4>
                </div>

                <div class="header-right">
                    RIGHT
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
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
</style>
