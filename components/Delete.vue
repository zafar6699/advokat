<template>
    <div>
        <div :class="isDelete ? 'fixvh block-fh' : 'fixvh'"></div>
        <div
            :class="
                isDelete ? 'my-modalDelete delete-mod open-modal' : 'my-modal'
            "
        >
            <div class="del-mod">
                <p>
                    Ҳақиқатдан ҳам малумотни ўчирмоқчимисиз?
                </p>
                <div class="btns">
                    <button class="yes" @click="$emit('deleteRequest')">
                        Йўқ
                    </button>
                    <button
                        class="primary otmena"
                        @click="$emit('closeDelete')"
                    >
                        Ҳа
                    </button>
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
