<template>
    <div>
        <nuxt-link to="/" class="news">
            <div class="img-news">
                <img :src="'_nuxt/' + news.imgSrc" alt="" />
            </div>
            <div class="body-news">
                <div class="date">
                    {{ news.date }}
                </div>
                <p class="title">{{ news.title }}</p>
                <p class="description">{{ news.description }}</p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        news: {
            type: Object
        }
    }
};
</script>

<style lang="scss" scoped>
.news {
    margin-bottom: 64px;
    text-decoration: none;
    .img-news {
        width: 100%;
        margin-bottom: 16px;
        img {
            width: 100%;
            border-radius: 8px;
            height: 240px;
            object-fit: cover;
        }
    }
    .body-news {
        .date {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            color: #828282;
            margin-bottom: 8px;
        }
        .title, .description {
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 24px;
            color: #000000;
            margin-bottom: 8px;
            height: 48px;
            line-height: 24px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .description {
            font-size: 16px;
        }
    }
}
</style>
