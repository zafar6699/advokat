<template>
    <div>
        <div class="control">
            <div class="content-title">
                <h3>Маълумотларни бошқариш</h3>
            </div>
            <div class="tab-content">
                <div class="tab-header">
                    <button
                        @click="clickTab(index)"
                        :class="step == index + 1 ? 'active' : ''"
                        v-for="(item, index) in tabMenu"
                        :key="index"
                    >
                        {{ item.name }}
                    </button>
                </div>
                <div v-if="step == 1" class="region">
                    <div class="mid-content-title flex">
                        <h3>Вилоятлар</h3>
                        <button class="add">Қўшиш</button>
                    </div>
                    <div class="table-content">
                        <div class="table-umd ">
                            <table>
                                <thead>
                                    <tr
                                        v-for="(item, index) in header"
                                        :key="index"
                                    >
                                        <th>
                                            {{ item.uz }}
                                        </th>
                                        <th>
                                            {{ item.cr }}
                                        </th>
                                        <th>
                                            {{ item.ru }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(item, index) in data"
                                        :key="index"
                                    >
                                        <td>{{ item.uz }}</td>
                                        <td>{{ item.cr }}</td>
                                        <td>{{ item.ru }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div v-if="step == 2" class="district">
                    <div class="mid-content-title flex">
                        <h3>Туманлар рўйхати</h3>
                    </div>
                    <div>
                        <div class="card-row-tuman flex">
                            <div class="card-3">
                                <span>Вилоят номи</span>
                                <div class="select">
                                    <div
                                        class="selectBtn"
                                        id="h1"
                                        data-type="firstOptioana"
                                    >
                                        Buxoro
                                    </div>
                                    <div class="selectDropdown scroll">
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
                            <button class="add">Қўшиш</button>
                        </div>
                    </div>
                    <div class="table-content">

                    <div class="table-umd">
                        <table>
                            <thead>
                                <tr v-for="(item, index) in tuman" :key="index">
                                    <th>
                                        {{ item.uz }}
                                    </th>
                                    <th>
                                        {{ item.cr }}
                                    </th>
                                    <th>
                                        {{ item.ru }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in data" :key="index">
                                    <td>{{ item.uz }}</td>
                                    <td>{{ item.cr }}</td>
                                    <td>{{ item.ru }}</td>
                                </tr>
                            </tbody>
                        </table>
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
            step: 2,
            header: [
                {
                    uz: "Viloyatlar ro‘yxati",
                    cr: "Вилоятлар рўйхати",
                    ru: "Список регионов"
                }
            ],
            tuman: [
                {
                    uz: "Tuman nomi",
                    cr: "Туман номи",
                    ru: "Название района"
                }
            ],
            data: [
                {
                    uz: "Buxoro",
                    cr: "Buxoro",
                    ru: "Buxoro"
                }
            ],
            data: [
                {
                    uz: "Buxoro",
                    cr: "Buxoro",
                    ru: "Buxoro"
                }
            ],
            tabMenu: [
                {
                    name: "Вилоятлар"
                },
                {
                    name: "Туманлар рўйхати"
                },

                {
                    name: "Иш тури"
                },
                {
                    name: "Жиноят кодексига жиноят турлар"
                },
                {
                    name: "Aдвокатлар ихтисослашуви"
                },
                {
                    name: "Ҳужжат турлари"
                }
            ]
        };
    },
    methods: {
        clickTab(index) {
            this.step = index + 1;
        }
    }
};
</script>

<style lang="scss" scoped>
        .table-content {
            padding: 16px 40px ;
            background: #f1f2f5;
            border-radius: 8px;
        }
.control {
    .add {
        cursor: pointer;
        padding: 8px 32px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        background: #201918;
        border: 0;
        border-radius: 8px;
    }
    .tab-content {
        .tab-header {
            background: #f1f2f5;
            border-radius: 8px;
            display: flex;
            flex-wrap: wrap;
            // justify-content: space-between;
            margin-bottom: 40px;
            button {
                cursor: pointer;
                padding: 12px 30px;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #000000;
                border: 0;
                background: transparent;
                border-radius: 8px;
                &.active {
                    color: #ffffff;
                    background: #201918;
                }
            }
        }
        .mid-content-title {
            margin-bottom: 16px;
            h3 {
                font-weight: 500;
                font-size: 24px;
                line-height: 32px;
                color: #000000;
            }
            .silver-table {
                padding: 16px 40px;
                background: #f1f2f5;
                border-radius: 8px;
            }
        }
    }
    .region {
        .table-content {
            padding: 16px 40px;
            background: #f1f2f5;
            border-radius: 8px;
        }
    }
    .district {
        .card-row-tuman {
            display: flex;
            justify-content: space-between;
            margin: 0px -12px;
            .card-3 {
                span {
                    font-size: 16px;
                    line-height: 16px;
                    color: #000000;
                }
                .select {
                    margin: 8px 0 38px 0;
                }
            }
        }
    }
}
</style>
