<template>
    <div>
        <div class="banner">
            <div class="img">
                <img src="@/static/img/banner.png" alt="" />
            </div>
            <div class="umd-container">
                <div class="content-banner">
                    <h1>Ўзбекистон адвокатларининг ягона реестри</h1>
                    <div class="form">
                        <div class="top">
                            <div class="fio">
                                <input
                                    type="text"
                                    placeholder="Фамиля, исм, шариф"
                                />
                            </div>
                            <div class="card">
                                <select name="" id="">
                                    <option value="1">vv</option>
                                    <option value="2">v3</option>
                                    <option value="3">v21</option>
                                </select>
                            </div>
                            <div class="card">
                                <select name="" id="">
                                    <option value="1">vv</option>
                                    <option value="2">v3</option>
                                    <option value="3">v21</option>
                                </select>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="card">
                                <div class="select">
                                    <div
                                        class="selectBtn"
                                        data-type="firstOptioana"
                                    >
                                        First optiona
                                    </div>
                                    <div class="selectDropdown">
                                        <div
                                            class="option"
                                            data-type="firstOption"
                                        >
                                            First option
                                        </div>
                                        <div
                                            class="option"
                                            data-type="secondOption"
                                        >
                                            Second option
                                        </div>
                                        <div
                                            class="option"
                                            data-type="thirdOption"
                                        >
                                            Third option
                                        </div>
                                        <div
                                            class="option"
                                            data-type="forthOption"
                                        >
                                            Forth option
                                        </div>
                                        <div
                                            class="option"
                                            data-type="fifthOption"
                                        >
                                            Fifth option
                                        </div>
                                        <div
                                            class="option"
                                            data-type="sixthOptionzzz"
                                        >
                                            12
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <input
                                    type="text"
                                    placeholder="Сертификат рақами"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="btns">
                        <nuxt-link class="btn search" to="/">Излаш</nuxt-link>
                        <a class="btn clear">Тозалаш</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const select = document.querySelectorAll(".selectBtn");
        const option = document.querySelectorAll(".option");
        let index = 1;

        select.forEach(a => {
            a.addEventListener("click", b => {
                const next = b.target.nextElementSibling;
                next.classList.toggle("toggle");
                next.style.zIndex = index++;
            });
        });
        option.forEach(a => {
            a.addEventListener("click", b => {
                b.target.parentElement.classList.remove("toggle");

                const parent = b.target.closest(".select").children[0];
                parent.setAttribute(
                    "data-type",
                    b.target.getAttribute("data-type")
                );
                parent.innerText = b.target.innerText;
            });
        });
    }
};
</script>

<style lang="scss" scoped>
.bottom {
    .card {
     
        .option, .selectBtn {
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            color: #898e9a;
        }
        .select {
            position: relative;
            margin-bottom: 15px;
            width: 310px;
        }
        .select .selectBtn {
            background: var(--bg1);
            box-sizing: border-box;
            border-radius: 3px;
            width: 100%;
            height: 48px;
            padding: 12px;
            cursor: pointer;
            position: relative;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background: #f2f2f2;
        }
        .select .selectBtn:after {
            content: "";
            position: absolute;
            top: 45%;
            right: 15px;
            width: 6px;
            height: 6px;
            -webkit-transform: translateY(-50%) rotate(45deg);
            transform: translateY(-50%) rotate(45deg);
            border-right: 2px solid #666;
            border-bottom: 2px solid #666;
            transition: 0.2s ease;
        }
        .select .selectBtn.toggle {
            border-radius: 3px 3px 0 0;
        }
        .select .selectBtn.toggle:after {
            -webkit-transform: translateY(-50%) rotate(-135deg);
            transform: translateY(-50%) rotate(-135deg);
        }
        .select .selectDropdown {
            position: absolute;
            top: 100%;
            width: 100%;
            border-radius: 0 0 3px 3px;
            overflow: hidden;
            background: var(--bg1);
            border-top: 1px solid #eee;
            z-index: 1;
            background: #fff;
            -webkit-transform: scale(1, 0);
            transform: scale(1, 0);
            -webkit-transform-origin: top center;
            transform-origin: top center;
            visibility: hidden;
            transition: 0.2s ease;
        }
        .select .selectDropdown .option {
            padding: 10px;
            box-sizing: border-box;
            cursor: pointer;
        }
        .select .selectDropdown .option:hover {
            background: #f8f8f8;
            color:  #E88243;
        }
        .select .selectDropdown.toggle {
            visibility: visible;
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
        }
    }
}
.banner {
    width: 100%;
    margin-bottom: 64px;
    position: relative;
    .img {
        img {
            left: 0;
            top: 0;
            width: 100%;
        }
    }
    .content-banner {
        width: 1224px;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        h1 {
            max-width: 740px;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 56px;
            color: #ffffff;
            margin-bottom: 32px;
        }
        .form {
            padding: 24px;
            width: 100%;
            background: #ffffff;
            border-radius: 4px;
            margin-bottom: 16px;

            .top {
                display: flex;
                justify-content: space-between;
                margin-bottom: 24px;
            }
            .bottom {
                display: flex;
                // justify-content: space-between;
                input {
                    margin-left: 24px;
                }
            }

            .card {
                width: 310px;
            }
            .fio {
                width: 510px;
            }
            select,
            input {
                height: 48px;
                padding: 12px;
                width: 100%;
                background: #f2f2f2;
                border-radius: 4px;
                border: 0;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                display: flex;
                align-items: center;
                color: #898e9a;
                &:focus {
                    outline: none;
                }
            }
        }
    }
}
</style>
