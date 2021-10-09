<template>
    <div>
        <Header />
        <div style="padding-top:72px">
            <Nuxt />
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
    data() {},
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
    },
    methods: {
         removeClass(e) {
            const cont = document.querySelector(".selectDropdown");

            document.addEventListener("click", e => {
                if (e.target.id !== "h1") {
                    if (cont.classList.contains("toggle")) {
                        cont.classList.remove("toggle");
                    }
                }
            });
        }
    }
};
</script>

<style></style>
