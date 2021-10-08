<template>
    <div>
        <div class="umd-container">
            <div class="header flex">
                <div class="left">
                    <div class="logo">
                        logo
                    </div>
                    <ul>
                        <li>
                            <nuxt-link to="/">
                                Статистика
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">
                                Янгиликлар
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">
                                Ҳаволалар
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <div class="til">
                        <button class="flex">
                            Ўзбекча
                            <span class="flex">
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
                                    <li><h6>O'zbekcha</h6></li>
                                    <li><h6>Ўзбекча</h6></li>
                                    <li><h6>Русский</h6></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="profil">
                        <nuxt-link to="/">
                            <img src="@/static/img/avatar.gif" alt="" />
                            Шахсий кабинет
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header {
    .left {
        display: flex;
        align-items: center;
        .logo {
            margin-right: 48px;
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
                }
            }
        }
    }
    .right {
        display: flex;
        align-items: center;
        .til {
            margin-right: 24px;
            position: relative;
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
                z-index: 23;
                div {
                    display: flex;
                    flex-direction: column;
                    background: #fff;
                    border-radius: 10px;
                    padding: 10px 15px;
                    ul{
                        list-style: none;
                    }
                    h6 {
                        text-decoration: none;
                        color: #777;
                        font-size: 14px;
                        cursor: pointer;
                        margin-bottom: 8px;
                    }
                    h6:hover {
                        color: #000;
                    }
                }
            }
            &:hover{
                .til-menu{
                    display: block;
                }
            }
        }
        .profil {
            a {
                display: flex;
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
</style>
