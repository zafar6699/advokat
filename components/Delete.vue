<template>
    <div>
        <div :class="isDelete ? 'fixvh block-fh' : 'fixvh'"></div>
        <div :class="isDelete ? 'my-modalDelete open-modal' : 'my-modal'">
            <div class="delete pa-5 pb-0">
                <p>
                    Ishonchingiz komilmi
                </p>
                <div>
                    <div class="">
                        <v-btn
                            color="silver"
                            class="otmena"
                            @click="$emit('closeDelete')"
                            >Bekor qilish</v-btn
                        >
                        <v-btn class="red" @click="$emit('deleteRequest')"
                            >O'chirish</v-btn
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isDelete: {
            type: Boolean
        }
    }
};
</script>

<style lang="scss"></style>
