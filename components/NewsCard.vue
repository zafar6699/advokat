<template>
    <div>
        <div class="news">
            <div class="img-news">
                <img :src="news.imgSrc" alt="" />
            </div>
            <div class="body-news">
                <div class="date">
                    {{ news.date }}
                </div>
                <p class="title">{{ news.title }}</p>
                <p class="description">{{ news.description }}</p>
            </div>
        </div>
        <div>{{ news.body }}</div>
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

<style lang="scss" scoped></style>
