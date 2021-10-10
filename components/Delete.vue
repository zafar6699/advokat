<template>
    <div>
        <div
            @click="$emit('closeDelete')"
            :class="isDelete ? 'fixvh block-fh' : 'fixvh'"
        ></div>
        <div
            :class="
                isDelete ? 'my-modalDelete delete-mod open-modal' : 'my-modal'
            "
        >
            <div class="del-mod">
                <div class="head">
                    <h3>Ўчириш</h3>
                </div>
                <p>
                    Ҳақиқатдан ҳам малумотни ўчирмоқчимисиз?
                </p>
                <div class="flex-center">
                    <div class="btns">
                        <button
                            class="primary yes"
                            @click="$emit('deleteRequest')"
                        >
                            Ҳа
                        </button>
                        <button class=" no" @click="$emit('closeDelete')">
                            Йўқ
                        </button>
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
