<template>
<section class="review section-padding">
    <div class="container" id="review">
        <div class="row px-4 px-sm-0">
            <div class="col-md-12">
                <div class="section-header text-center pb-5">
                    <h1>reviews</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, repellendus.</p>
                </div>

            </div>

        </div>

        <div class="row px-4 px-sm-0">

            <div class="col-12 col-md-6 col-lg-3 mt-2">
                <div class="card text-center">
                    <div class="card-body">
                        <img src="../assets/christmas.jpg" alt="img" class="img-fluid rounded-circle">
                        <h3 class="card-title py-2">kishan dubey</h3>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at culpa iste esse blanditiis rerum sequi delectus voluptas unde deserunt?</p>

                        <p class="socials">
                            <i class="bi bi-twitter text-dark mx-1"></i>
                            <i class="bi bi-twitter text-dark mx-1"></i>
                            <i class="bi bi-twitter text-dark mx-1"></i>
                            <i class="bi bi-twitter text-dark mx-1"></i>
                        </p>
                    </div>
                </div>
            </div>


            <div class="col-12 col-md-6 col-lg-3 mt-2">
                <div class="card text-center">
                    <div class="card-body">
                        <img src="../assets/christmas.jpg" alt="img" class="img-fluid rounded-circle">
                        <h3 class="card-title py-2">kishan dubey</h3>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at culpa iste esse blanditiis rerum sequi delectus voluptas unde deserunt?</p>

                        <p class="socials">
                            <i class="bi bi-twitter text-dark mx-1"></i>
                            <i class="bi bi-twitter text-dark mx-1"></i>
                            <i class="bi bi-twitter text-dark mx-1"></i>
                            <i class="bi bi-twitter text-dark mx-1"></i>
                        </p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</section>
</template>

<script>
export default {

    name: 'ReviewC',
    data() {
        return {

        };
    },
    components: {

    }
}
</script>

<style scoped>
.section-padding{
    padding-bottom: 100px;
}
.card-body img {
    width: 100px;
}

.review .card {
    box-shadow: 15px 15px 40px rgba(0, 0, 0, 0.15);
}
</style>
