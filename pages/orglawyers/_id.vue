<template>
    <div>
        <div class="lawyers">
            <div class="reestr-head">
                <div class="head-head">
                    <h3>Aдвокатлар реестри тузилмаси</h3>
                    <div class="action">
                        <button @click="openEditRegion" class="edit">
                            <img src="@/static/img/icon/edit.png" alt="" />
                        </button>
                        <button @click="openDelete(item._id)" class="delete">
                            <img src="@/static/img/icon/delete.png" alt="" />
                        </button>
                    </div>
                </div>
                <div class="head-body card-row">
                    <div class=" left card-2">
                        <img src="@/static/img/banner.png" alt="" />
                    </div>
                    <div class="right card-2">
                        <div class="card-row">
                            <div class="card-3">
                                <span>Телефон</span>
                                <p>+998 90 627 48 59</p>
                            </div>
                            <div class="card-3">
                                <span>Гувохнома рақами</span>
                                <p>728 654 321</p>
                            </div>
                        </div>
                        <div class="card-row">
                            <div class="card-3">
                                <span>Ҳудуд номи</span>
                                <p>Фарғона вилояти Риштон тумани</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="reestr-content">
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
                    <div class="card-4">
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
                <div class="advokat-reestr">
                    <div class="card-row">
                        <div class="card-6">
                            <div class="card-img">
                                <img src="@/static/img/avatar.gif" alt="" />
                            </div>
                            <div class="name">
                                <p>
                                    Усмонжонов Темурбек Aбдулбосид ўғли
                                </p>
                            </div>
                            <div class="status flex-center">
                                <span>Тўхтатилган</span>
                            </div>
                            <div class="action flex-center">
                                <div class="flex">
                                    <button
                                        @click="openEditRegion"
                                        class="edit"
                                    >
                                        <img
                                            src="@/static/img/icon/edit.png"
                                            alt=""
                                        />
                                    </button>
                                    <button
                                        @click="openDelete(item._id)"
                                        class="delete"
                                    >
                                        <img
                                            src="@/static/img/icon/delete.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-6">
                            <div class="card-img">
                                <img src="@/static/img/avatar.gif" alt="" />
                            </div>
                            <div class="name">
                                <p>
                                    Усмонжонов Темурбек Aбдулбосид ўғли
                                </p>
                            </div>
                            <div class="status flex-center">
                                <span>Тўхтатилган</span>
                            </div>
                            <div class="action flex-center">
                                <div class="flex">
                                    <button
                                        @click="openEditRegion"
                                        class="edit"
                                    >
                                        <img
                                            src="@/static/img/icon/edit.png"
                                            alt=""
                                        />
                                    </button>
                                    <button
                                        @click="openDelete(item._id)"
                                        class="delete"
                                    >
                                        <img
                                            src="@/static/img/icon/delete.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-6">
                            <div class="card-img">
                                <img src="@/static/img/avatar.gif" alt="" />
                            </div>
                            <div class="name">
                                <p>
                                    Усмонжонов Темурбек Aбдулбосид ўғли
                                </p>
                            </div>
                            <div class="status flex-center">
                                <span>Тўхтатилган</span>
                            </div>
                            <div class="action flex-center">
                                <div class="flex">
                                    <button
                                        @click="openEditRegion"
                                        class="edit"
                                    >
                                        <img
                                            src="@/static/img/icon/edit.png"
                                            alt=""
                                        />
                                    </button>
                                    <button
                                        @click="openDelete(item._id)"
                                        class="delete"
                                    >
                                        <img
                                            src="@/static/img/icon/delete.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-6">
                            <div class="card-img">
                                <img src="@/static/img/avatar.gif" alt="" />
                            </div>
                            <div class="name">
                                <p>
                                    Усмонжонов Темурбек Aбдулбосид ўғли
                                </p>
                            </div>
                            <div class="status flex-center">
                                <span>Тўхтатилган</span>
                            </div>
                            <div class="action flex-center">
                                <div class="flex">
                                    <button
                                        @click="openEditRegion"
                                        class="edit"
                                    >
                                        <img
                                            src="@/static/img/icon/edit.png"
                                            alt=""
                                        />
                                    </button>
                                    <button
                                        @click="openDelete(item._id)"
                                        class="delete"
                                    >
                                        <img
                                            src="@/static/img/icon/delete.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-6">
                            <div class="card-img">
                                <img src="@/static/img/avatar.gif" alt="" />
                            </div>
                            <div class="name">
                                <p>
                                    Усмонжонов Темурбек Aбдулбосид ўғли
                                </p>
                            </div>
                            <div class="status flex-center">
                                <span>Тўхтатилган</span>
                            </div>
                            <div class="action flex-center">
                                <div class="flex">
                                    <button
                                        @click="openEditRegion"
                                        class="edit"
                                    >
                                        <img
                                            src="@/static/img/icon/edit.png"
                                            alt=""
                                        />
                                    </button>
                                    <button
                                        @click="openDelete(item._id)"
                                        class="delete"
                                    >
                                        <img
                                            src="@/static/img/icon/delete.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-6">
                            <div class="card-img">
                                <img src="@/static/img/avatar.gif" alt="" />
                            </div>
                            <div class="name">
                                <p>
                                    Усмонжонов Темурбек Aбдулбосид ўғли
                                </p>
                            </div>
                            <div class="status flex-center">
                                <span>Тўхтатилган</span>
                            </div>
                            <div class="action flex-center">
                                <div class="flex">
                                    <button
                                        @click="openEditRegion"
                                        class="edit"
                                    >
                                        <img
                                            src="@/static/img/icon/edit.png"
                                            alt=""
                                        />
                                    </button>
                                    <button
                                        @click="openDelete(item._id)"
                                        class="delete"
                                    >
                                        <img
                                            src="@/static/img/icon/delete.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-6">
                            <div class="card-img">
                                <img src="@/static/img/avatar.gif" alt="" />
                            </div>
                            <div class="name">
                                <p>
                                    Усмонжонов Темурбек Aбдулбосид ўғли
                                </p>
                            </div>
                            <div class="status flex-center">
                                <span>Тўхтатилган</span>
                            </div>
                            <div class="action flex-center">
                                <div class="flex">
                                    <button
                                        @click="openEditRegion"
                                        class="edit"
                                    >
                                        <img
                                            src="@/static/img/icon/edit.png"
                                            alt=""
                                        />
                                    </button>
                                    <button
                                        @click="openDelete(item._id)"
                                        class="delete"
                                    >
                                        <img
                                            src="@/static/img/icon/delete.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-6">
                            <div class="card-img">
                                <img src="@/static/img/avatar.gif" alt="" />
                            </div>
                            <div class="name">
                                <p>
                                    Усмонжонов Темурбек Aбдулбосид ўғли
                                </p>
                            </div>
                            <div class="status flex-center">
                                <span>Тўхтатилган</span>
                            </div>
                            <div class="action flex-center">
                                <div class="flex">
                                    <button
                                        @click="openEditRegion"
                                        class="edit"
                                    >
                                        <img
                                            src="@/static/img/icon/edit.png"
                                            alt=""
                                        />
                                    </button>
                                    <button
                                        @click="openDelete(item._id)"
                                        class="delete"
                                    >
                                        <img
                                            src="@/static/img/icon/delete.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-6">
                            <div class="card-img">
                                <img src="@/static/img/avatar.gif" alt="" />
                            </div>
                            <div class="name">
                                <p>
                                    Усмонжонов Темурбек Aбдулбосид ўғли
                                </p>
                            </div>
                            <div class="status flex-center">
                                <span>Тўхтатилган</span>
                            </div>
                            <div class="action flex-center">
                                <div class="flex">
                                    <button
                                        @click="openEditRegion"
                                        class="edit"
                                    >
                                        <img
                                            src="@/static/img/icon/edit.png"
                                            alt=""
                                        />
                                    </button>
                                    <button
                                        @click="openDelete(item._id)"
                                        class="delete"
                                    >
                                        <img
                                            src="@/static/img/icon/delete.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-6">
                            <div class="card-img">
                                <img src="@/static/img/avatar.gif" alt="" />
                            </div>
                            <div class="name">
                                <p>
                                    Усмонжонов Темурбек Aбдулбосид ўғли
                                </p>
                            </div>
                            <div class="status flex-center">
                                <span>Тўхтатилган</span>
                            </div>
                            <div class="action flex-center">
                                <div class="flex">
                                    <button
                                        @click="openEditRegion"
                                        class="edit"
                                    >
                                        <img
                                            src="@/static/img/icon/edit.png"
                                            alt=""
                                        />
                                    </button>
                                    <button
                                        @click="openDelete(item._id)"
                                        class="delete"
                                    >
                                        <img
                                            src="@/static/img/icon/delete.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-6">
                            <div class="card-img">
                                <img src="@/static/img/avatar.gif" alt="" />
                            </div>
                            <div class="name">
                                <p>
                                    Усмонжонов Темурбек Aбдулбосид ўғли
                                </p>
                            </div>
                            <div class="status flex-center">
                                <span>Тўхтатилган</span>
                            </div>
                            <div class="action flex-center">
                                <div class="flex">
                                    <button
                                        @click="openEditRegion"
                                        class="edit"
                                    >
                                        <img
                                            src="@/static/img/icon/edit.png"
                                            alt=""
                                        />
                                    </button>
                                    <button
                                        @click="openDelete(item._id)"
                                        class="delete"
                                    >
                                        <img
                                            src="@/static/img/icon/delete.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-6">
                            <div class="card-img">
                                <img src="@/static/img/avatar.gif" alt="" />
                            </div>
                            <div class="name">
                                <p>
                                    Усмонжонов Темурбек Aбдулбосид ўғли
                                </p>
                            </div>
                            <div class="status flex-center">
                                <span>Тўхтатилган</span>
                            </div>
                            <div class="action flex-center">
                                <div class="flex">
                                    <button
                                        @click="openEditRegion"
                                        class="edit"
                                    >
                                        <img
                                            src="@/static/img/icon/edit.png"
                                            alt=""
                                        />
                                    </button>
                                    <button
                                        @click="openDelete(item._id)"
                                        class="delete"
                                    >
                                        <img
                                            src="@/static/img/icon/delete.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-6">
                            <div class="card-img">
                                <img src="@/static/img/avatar.gif" alt="" />
                            </div>
                            <div class="name">
                                <p>
                                    Усмонжонов Темурбек Aбдулбосид ўғли
                                </p>
                            </div>
                            <div class="status flex-center">
                                <span>Тўхтатилган</span>
                            </div>
                            <div class="action flex-center">
                                <div class="flex">
                                    <button
                                        @click="openEditRegion"
                                        class="edit"
                                    >
                                        <img
                                            src="@/static/img/icon/edit.png"
                                            alt=""
                                        />
                                    </button>
                                    <button
                                        @click="openDelete(item._id)"
                                        class="delete"
                                    >
                                        <img
                                            src="@/static/img/icon/delete.png"
                                            alt=""
                                        />
                                    </button>
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
    layout: "admin",
    data() {
        return {
            route: [
                {
                    url: "lawyers",
                    value: {
                        uz: "Адвокатлар рестори",
                        kr: "Адвокатлар рестори",
                        ru: "Управление данными"
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
.lawyers {
    .reestr-head {
        margin-bottom: 64px;
        .head-head {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            h3 {
                font-weight: bold;
                font-size: 40px;
                line-height: 48px;
                display: flex;
                align-items: center;
                color: #000000;
            }
            .action {
                margin-left: 24px;
                display: flex;
                align-items: center;
                button {
                    margin-right: 24px;
                }
            }
        }
        .head-body {
            img {
                width: 100%;
                height: 240px;
                object-fit: cover;
                border-radius: 8px;
            }
            .right {
                .card-row {
                    margin-bottom: 24px;
                    span {
                        font-size: 14px;
                        line-height: 16px;
                        color: #a29e9e;
                        margin-bottom: 8px;
                    }
                    p {
                        font-size: 16px;
                        line-height: 24px;
                        color: #4f535e;
                        margin-top: 8px;
                    }
                }
            }
        }
    }
    .reestr-content {
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
    }
    .advokat-reestr {
        .card-row {
            .card-6 {
                padding: 16px 16px;
                border: 1px solid transparent;
                border-radius: 8px;
                .card-img {
                    margin-bottom: 8px;
                    img {
                        border-radius: 50%;
                        width: 100%;
                    }
                }
                .name {
                    text-align: center;
                    font-size: 14px;
                    line-height: 16px;
                    color: #605856;
                    margin-bottom: 8px;
                }
                .status {
                    margin-bottom: 8px;
                    span {
                        padding: 0 8px;
                        font-size: 16px;
                        line-height: 24px;
                        color: #eb5757;
                    }
                    background: rgba(235, 87, 87, 0.1);
                    border-radius: 4px;
                }
                .action {
                    opacity: 0;
                    div {
                        button:first-child {
                            margin-right: 24px;
                        }
                    }
                }
                &:hover {
                    cursor: pointer;
                    border: 1px solid #faf0ee;
                    .action {
                        opacity: 1;
                    }
                }
            }
        }
    }
}
</style>
