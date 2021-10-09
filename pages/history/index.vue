<template>
    <div>
        <div class="history">
            <div class="umd-container">
                <div class="content-title">
                    <h3>
                        Тарих
                    </h3>
                </div>
                <div class="form">
                    <div class="card-row">
                        <div class="card-4">
                            <span>Логин</span>
                            <div class="select">
                                <div
                                    class="selectBtn"
                                    data-type="firstOptioana"
                                >
                                    {{ $t("tuzilma") }}
                                </div>
                                <div class="selectDropdown scroll">
                                    <div class="option" data-type="firstOption">
                                        First option
                                    </div>
                                    <div
                                        class="option"
                                        data-type="secondOption"
                                    >
                                        Second option
                                    </div>
                                    <div class="option" data-type="thirdOption">
                                        Third option
                                    </div>
                                    <div class="option" data-type="forthOption">
                                        Forth option
                                    </div>
                                    <div class="option" data-type="fifthOption">
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
                        <div class="card-4">
                            <span>Логин</span>
                            <input value="" type="date" />
                        </div>
                        <div class="card-4">
                            <span>Логин</span>
                            <input value="" type="date" />
                        </div>

                        <div class="card-4">
                            <div class="search">
                                <button class="search-bt">
                                    {{ $t("search") }}
                                </button>
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
    mounted() {
        const select = document.querySelectorAll(".selectBtn");
        const option = document.querySelectorAll(".option");
        const cont = document.querySelectorAll(".selectDropdown");
        let index = 1;

        select.forEach(a => {
            a.addEventListener("click", b => {
                const next = b.target.nextElementSibling;
                next.classList.toggle("toggle");

                next.style.zIndex = index++;

                b.preventDefault();
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

                b.preventDefault();
            });
        });

        //         window.addEventListener("click", e => {
        //             cont.forEach(item => {
        //  item.classList.remove("toggle");
        //             });

        //         });
    }
};
</script>

<style lang="scss" scoped>
.history {
    .form {
        margin-bottom: 44px;
        .card-row {
            .card-4 {
                display: flex;
                flex-direction: column;
                justify-content: end;
                .select {
                    .selectBtn {
                        padding: 16px;
                        height: 50px !important;
                    }
                }
                span {
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    color: #bbbbbb;
                    margin-bottom: 8px;
                }
                input {
                    padding: 12px 16px;
                    background: #f5f4f4;
                    font-size: 16px;
                    line-height: 24px;
                    color: #201918;
                    border: 0;
                    border-radius: 4px;
                    &:focus {
                        outline: 1px solid #e88243;
                    }
                }
                .search {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    button {
                        height: 50px;
                        // padding: 12px 0;
                        cursor: pointer;
                        border: 0;
                        border-radius: 4px;
                        font-weight: 500;
                        font-size: 15px;
                        line-height: 16px;
                    }
                    button.clear-bt {
                        padding: 12px;
                        margin-bottom: 0;
                        cursor: pointer;
                        background: transparent;
                    }
                    button.search-bt {
                        width: calc(100% - 60px);
                        background: #e88243;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
