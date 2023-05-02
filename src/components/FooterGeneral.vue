<template>
    <footer class="py-5 bg-dark footer">
        <div class="col-12 footer-card d-flex d-none d-md-block">
            <div class="card card-footer border-light col-4" >
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card card-footer border-light col-4" >
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card card-footer border-light col-4">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="px-4 px-lg-5">
            <p class="m-0 text-center text-white">
                Copyright &copy; Your Website 2021
            </p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterGeneral'
    }
</script>

<style scoped>
    .footer {
        position: static;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        margin-top: 10%;
    }

    .card-footer {
        margin: auto;
        max-width: 30em;
    }

    .card-footer:last-child {
        border-radius: var(--bs-card-border-radius);
    }
</style>