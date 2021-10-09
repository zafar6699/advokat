<template>
    <div>
        <div class="umd-container">
            <div class="news">
                <ul class="road">
                    <nuxt-link :to="{ name: `index___${$i18n.locale}` }">{{$t('head')}}</nuxt-link>
                    <span class="line"></span>
                    <li :to="{ name: `news___${$i18n.locale}` }" class="active">{{$t('news')}}</li>
                </ul>
                <div class="content">
                    <div class="content-title">
                        <h3>{{$t('news')}}</h3>
                    </div>

                    <div class="card-row">
                        <div
                            class="card-3"
                            v-for="(item, index) in news"
                            :key="index"
                        >
                            <NewsCard :news="item" />
                        </div>
                    </div>
                </div>
                <div class="button more">
                    <button>{{$t('more')}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news: [
                {
                    imgSrc: "/static/img/banner.png",
                    title:
                        "Палата фаолиятининг долзарб масалалари asasas saasas saaaaa wwwwwwwwwww",
                    date: "2 ИЮНЬ 2021",
                    description:
                        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди aaas awsdqwdqw"
                },
                {
                    imgSrc: "/static/img/banner.png",
                    title: "Палата фаолиятининг долзарб масалалари",
                    date: "2 ИЮНЬ 2021",
                    description:
                        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди"
                },
                {
                    imgSrc: "/static/img/banner.png",
                    title: "Палата фаолиятининг долзарб масалалари",
                    date: "2 ИЮНЬ 2021",
                    description:
                        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди"
                },
                {
                    imgSrc: "/static/img/banner.png",
                    title:
                        "Палата фаолиятининг долзарб масалалари asasas saasas saaaaa wwwwwwwwwww",
                    date: "2 ИЮНЬ 2021",
                    description:
                        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди aaas awsdqwdqw"
                },
                {
                    imgSrc: "/static/img/banner.png",
                    title: "Палата фаолиятининг долзарб масалалари",
                    date: "2 ИЮНЬ 2021",
                    description:
                        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди"
                },
                {
                    imgSrc: "/static/img/banner.png",
                    title: "Палата фаолиятининг долзарб масалалари",
                    date: "2 ИЮНЬ 2021",
                    description:
                        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди"
                },
                {
                    imgSrc: "/static/img/banner.png",
                    title:
                        "Палата фаолиятининг долзарб масалалари asasas saasas saaaaa wwwwwwwwwww",
                    date: "2 ИЮНЬ 2021",
                    description:
                        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди aaas awsdqwdqw"
                },
                {
                    imgSrc: "/static/img/banner.png",
                    title: "Палата фаолиятининг долзарб масалалари",
                    date: "2 ИЮНЬ 2021",
                    description:
                        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди"
                },
                {
                    imgSrc: "/static/img/banner.png",
                    title: "Палата фаолиятининг долзарб масалалари",
                    date: "2 ИЮНЬ 2021",
                    description:
                        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди"
                },
                {
                    imgSrc: "/static/img/banner.png",
                    title:
                        "Палата фаолиятининг долзарб масалалари asasas saasas saaaaa wwwwwwwwwww",
                    date: "2 ИЮНЬ 2021",
                    description:
                        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди aaas awsdqwdqw"
                },
                {
                    imgSrc: "/static/img/banner.png",
                    title: "Палата фаолиятининг долзарб масалалари",
                    date: "2 ИЮНЬ 2021",
                    description:
                        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди"
                },
                {
                    imgSrc: "/static/img/banner.png",
                    title: "Палата фаолиятининг долзарб масалалари",
                    date: "2 ИЮНЬ 2021",
                    description:
                        "30 июнь куни Кострома вилояти Президенти маъмурияти кенгашининг йиғилиши бўлиб ўтди"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.news {
    margin-bottom: 96px;
    .road {
        margin: 32px 0;
        display: flex;
        align-items: center;
        list-style: none;
        .line {
            margin: 0 5px;
            width: 1px;
            height: 8px;
            background: #4f535e;
        }
        a {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: #878c99;
            text-decoration: none;
            &.active {
                border-left: 1px solid #000;
                color: #000000;
            }
        }
    }
    .content {
        margin-bottom: 48px;
        .card-3{
            margin-bottom: 24px;
        }
    }
    .button {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        button {
            cursor: pointer;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #4f4f4f;
            padding: 12px 24px;
            background: #e0e0e0;
            border-radius: 4px;
            border: 0;
        }
    }
}
</style>
