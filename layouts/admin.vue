<template>
    <div>
        <Navbar />
        <div class="admin-content" @click="removeClass($event)">
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
        const con = document.querySelector(".content-title");
        let index = 1;

        select.forEach(a => {
            a.addEventListener("click", b => {
                const next = b.target.nextElementSibling;
                next.classList.toggle("toggle");

                next.style.zIndex = index++;

                b.preventDefault();
            });
        });

        // document.addEventListener("click", e => {
        //     alert('as')
        //     if (e.target.id !== "h1")
        //         for (let i = 0; i < cont.length; i++) {
        //             cont[i].classList.remove('toggle');
        //         }
        //     // else {
        //     //     for (let i = 0; i < h1.length; i++) {
        //     //         cont[i].addEventListener("click", () => {
        //     //             h1[i].className = "blue";
        //     //         });
        //     //     }
        //     // }
        // });
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
            const cont = document.querySelectorAll(".selectDropdown");

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

<style lang="scss" scoped>
div.admin-content {
    margin-left: 310px;
    margin-top: 72px;
    padding: 20px 40px;
}
</style>
