<template>
    <div>
        <Navbar />
        <div class="admin-content">
            <Nuxt />
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
    }
};
</script>

<style lang="scss" scoped>
div.admin-content {
    margin-left: 310px;
    margin-top: 72px;
    padding: 20px 40px;
}
</style>
