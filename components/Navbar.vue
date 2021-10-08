<template>
    <div>
        <div class="admin-nav">
            <div class="nav-menu">
                <ul>
                    <li>
                        <nuxt-link
                            :to="{ name: `managment___${$i18n.locale}` }"
                        >
                            Фойдаланувчиларни бошқариш
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :to="{ name: `lawyers___${$i18n.locale}` }">
                            Aдвокатлар реестри
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            :to="{ name: `orglawyers___${$i18n.locale}` }"
                        >
                            Aдвокатлар реестри тузилмаси
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :to="{ name: `module___${$i18n.locale}` }">
                            Сўров юбориш
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            :to="{ name: `monitoring___${$i18n.locale}` }"
                        >
                            Ҳисоботлар модули
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            :to="{ name: `datacontrol___${$i18n.locale}` }"
                        >
                            Мониторинг бўлими
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :to="{ name: `request___${$i18n.locale}` }">
                            Маълумотларни бошқариш
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :to="{ name: `history___${$i18n.locale}` }">
                            ТАРИХ
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="admin-header"></div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
