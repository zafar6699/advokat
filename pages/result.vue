<template>
    <div>
        <div
            @click="isModal = false"
            :class="isModal ? 'fixvh block-fh' : 'fixvh'"
        ></div>
        <div :class="isModal ? 'my-modalDelete open-modal' : 'my-modal'">
            <div class="modal">
               
                <div>
                    <div class="person flex">
                        <div class="img">
                            <img src="@/static/img/avatar.gif" alt="" />
                        </div>
                        <div class="fullname">
                            <h3>Муҳаммаджонов Муҳаммаджон Муҳаммаджонивич</h3>
                            <div class="status">
                                Лицензияга эга шахс (адвокат мақомисиз)
                            </div>
                        </div>
                    </div>
                    <div class="body-modal">
                        <div class="card-row">
                            <div class="card-3">
                                <span>LITSENZIYA RAQAMI</span>
                                <p>SI 1244353</p>
                            </div>
                            <div class="card-3">
                                <span>LITSENZIYA BERILGAN SANA</span>
                                <p>SI 1244353</p>
                            </div>
                            <div class="card-3">
                                <span>KIM TOMONIDAN BERILGAN</span>
                                <p>SI 1244353</p>
                            </div>
                            <div class="card-3">
                                <span>GUVOHNOMA RAQAMI</span>
                                <p>SI 1244353</p>
                            </div>
                            <div class="card-3">
                                <span>MAQOMI</span>
                                <p>SI 1244353</p>
                            </div>
                            <div class="card-3">
                                <span>KIM TOMONIDAN BERILGAN</span>
                                <p>SI 1244353</p>
                            </div>
                            <div class="card-3">
                                <span>ADVOKATLIK TUZILMASI NOMI</span>
                                <p>“SIYAVUSH HIMOYASI” адвокатлик фирмаси </p>
                            </div>
                            <div class="card-3">
                                <span>YO‘NALISHI</span>
                                <p>Фуқаролик ва иқтисодий, маъмурий ва жиноий </p>
                            </div>
                        </div>
                        <div class="card-row">
                             <div class="card-3">
                                <span>MANZIL</span>
                                <p>SI 1244353</p>
                            </div>
                             <div class="card-3">
                                <span>TELEFON RAQAM</span>
                                <p>SI 1244353</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Banner />
        <div class="result">
            <div class="umd-container">
                <div class="content-title">
                    <h3>Қидирув натижалари</h3>
                </div>
                <div class="result-content ">
                    <div class="card-row">
                        <div
                            class=" card-4"
                            v-for="(result, index) in result"
                            :key="index"
                        >
                            <div class="result-card">
                                <div class="head-result flex">
                                    <div class="name">
                                        <p>{{ result.name }}</p>
                                    </div>
                                    <div class="img">
                                        <img
                                            :src="'_nuxt/' + result.img"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div class="body">
                                    <div class="address ">
                                        <p class="dot">
                                            {{ result.address }}
                                        </p>
                                        <p class="dot">
                                            {{ result.address }}
                                        </p>
                                    </div>
                                    <div class="number">
                                        <p>
                                            {{ result.number }}
                                        </p>
                                    </div>
                                    <div class="status">
                                        <p>{{ result.status }}</p>
                                    </div>
                                </div>
                                <button @click="openModal">
                                    Тўлиқ маълумот
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button more">
                    <button>Кўпроқ кўрсатиш</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: "default",

    data() {
        return {
            result: [
                {
                    name: "Муҳаммадқодиров Алишер Куралович",
                    img: "static/img/avatar.gif",
                    address: "Фарғона вилояти, Боёвут тумани ",
                    number: "№ СИ 000057",
                    status: "Лицензияга эга шахс (адвокат мақомисиз)"
                },
                {
                    name: "Муҳаммадқодиров Алишер Куралович",
                    img: "static/img/avatar.gif",
                    address:
                        "Фарғона вилояти, Боёвут тумани «АФИНА НУФУЗ» адвокатлик фирмасининг адвокати.",
                    number: "№ СИ 000057",
                    status: "Лицензияга эга шахс (адвокат мақомисиз)"
                },
                {
                    name: "Муҳаммадқодиров Алишер Куралович",
                    img: "static/img/avatar.gif",
                    address:
                        "Фарғона вилояти, Боёвут тумани «АФИНА НУФУЗ» адвокатлик фирмасининг адвокати.",
                    number: "№ СИ 000057",
                    status: "Лицензияга эга шахс (адвокат мақомисиз)"
                },
                {
                    name: "Муҳаммадқодиров Алишер Куралович",
                    img: "static/img/avatar.gif",
                    address:
                        "Фарғона вилояти, Боёвут тумани «АФИНА НУФУЗ» адвокатлик фирмасининг адвокати.",
                    number: "№ СИ 000057",
                    status: "Лицензияга эга шахс (адвокат мақомисиз)"
                },
                {
                    name: "Муҳаммадқодиров Алишер Куралович",
                    img: "static/img/avatar.gif",
                    address:
                        "Фарғона вилояти, Боёвут тумани «АФИНА НУФУЗ» адвокатлик фирмасининг адвокати.",
                    number: "№ СИ 000057",
                    status: "Лицензияга эга шахс (адвокат мақомисиз)"
                },
                {
                    name: "Муҳаммадқодиров Алишер Куралович",
                    img: "static/img/avatar.gif",
                    address:
                        "Фарғона вилояти, Боёвут тумани «АФИНА НУФУЗ» адвокатлик фирмасининг адвокати.",
                    number: "№ СИ 000057",
                    status: "Лицензияга эга шахс (адвокат мақомисиз)"
                },
                {
                    name: "Муҳаммадқодиров Алишер Куралович",
                    img: "static/img/avatar.gif",
                    address:
                        "Фарғона вилояти, Боёвут тумани «АФИНА НУФУЗ» адвокатлик фирмасининг адвокати.",
                    number: "№ СИ 000057",
                    status: "Лицензияга эга шахс (адвокат мақомисиз)"
                },
                {
                    name: "Муҳаммадқодиров Алишер Куралович",
                    img: "static/img/avatar.gif",
                    address:
                        "Фарғона вилояти, Боёвут тумани «АФИНА НУФУЗ» адвокатлик фирмасининг адвокати.",
                    number: "№ СИ 000057",
                    status: "Лицензияга эга шахс (адвокат мақомисиз)"
                },
                {
                    name: "Муҳаммадқодиров Алишер Куралович",
                    img: "static/img/avatar.gif",
                    address:
                        "Фарғона вилояти, Боёвут тумани «АФИНА НУФУЗ» адвокатлик фирмасининг адвокати.",
                    number: "№ СИ 000057",
                    status: "Лицензияга эга шахс (адвокат мақомисиз)"
                },
                {
                    name: "Муҳаммадқодиров Алишер Куралович",
                    img: "static/img/avatar.gif",
                    address:
                        "Фарғона вилояти, Боёвут тумани «АФИНА НУФУЗ» адвокатлик фирмасининг адвокати.",
                    number: "№ СИ 000057",
                    status: "Лицензияга эга шахс (адвокат мақомисиз)"
                }
            ],
            isModal: false
        };
    },
    methods: {
        async openModal() {
            this.isModal = true;
        },
        closeModal() {
            this.isModal = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.modal {
    padding: 34px;
    .person {
       margin-bottom: 24px;
        .img {
            margin-right: 24px;

            img {
                width: 120px;
                height: 120px;
                border-radius: 50%;
            }
        }
        .fullname {
            h3 {
                font-weight: bold;
                font-size: 24px;
                line-height: 32px;
                color: #11151e;
                margin-bottom: 8px;
            }
            .status {
                display: inline-block;
                padding: 0 8px;
                background: rgba(170, 4, 4, 0.1);
                border-radius: 4px;
                font-size: 16px;
                line-height: 24px;
                color: #a90000;
            }
        }
    }
    .body-modal {
        span {
            font-size: 12px;
            line-height: 16px;
            text-transform: uppercase;
            color: #878c99;
        }
        p {
            margin-top: 8px;
            font-size: 16px;
            line-height: 24px;
            text-transform: uppercase;
            color: #4f4f4f;
            margin-bottom: 24px;
        }
    }
}
.result {
    .result-content {
        margin-bottom: 60px;
        .result-card {
            border: 1px solid #e0e0e0;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 24px;
            .head-result {
                margin-bottom: 8px;
                .name {
                    p {
                        font-size: 16px;
                        line-height: 20px;
                        color: #4f4f4f;
                    }
                }
                img {
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }
            .body {
                .address {
                    margin-bottom: 8px;
                    p {
                        font-size: 16px;
                        line-height: 24px;
                        color: #828282;
                    }
                }
                .number {
                    margin-bottom: 8px;
                    p {
                        font-size: 16px;
                        line-height: 24px;
                        color: #4f4f4f;
                    }
                }
                .status {
                    background: rgba(170, 4, 4, 0.1);
                    border-radius: 4px;
                    padding: 4px 8px;
                    max-width: 180px;
                    margin-bottom: 24px;
                    p {
                        font-size: 16px;
                        line-height: 24px;
                        color: #a90000;
                    }
                }
            }
            button {
                cursor: pointer;
                padding: 8px;
                width: 100%;
                font-size: 14px;
                line-height: 24px;
                color: #828282;
                background: transparent;
                border: 1px solid #828282;
                border-radius: 4px;
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
    width: 745px;
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
div.fixvh {
    position: fixed;
    z-index: 2011;
    top: 0;
    width: 100%;
    height: 100vh;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    display: none;
}
div.my-modal {
    background-color: #fff;
    border-radius: 10px;
    padding: 0px 0px;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 600px;
    transform: translate(-50%, -50%) scale(0);
    z-index: 25;
    transition: 0.3s;
}

.block-fh {
    display: block !important;
}
.open-modal {
    transform: translate(-50%, -50%) scale(1) !important;
}
.error-link {
    max-width: 75px;
}
td.error-text {
    p {
        max-width: 150px;
        max-height: 60px;
        line-height: 23px;
    }
    max-height: 60px !important;
    line-height: 20px;
    overflow: hidden;
}
.user-modal-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(15, 11, 11, 0.589);
    z-index: -5;
    display: flex;
    justify-content: center;
    transition: 0.5s ease;
    align-items: center;
    opacity: 0;
}
.user-modal {
    opacity: 0;
    width: 200px;
    z-index: -5;
    margin-bottom: 8rem;
    border-radius: 8px;
    background: white;
    transition: transform 0.5s ease;
    padding: 3rem;
}

.black-opacity {
    z-index: 500;
    opacity: 1;
    position: fixed;
}
.showModal {
    transform: translateY(3rem);
    z-index: 1000;
    opacity: 1;
}
</style>
