<template>

<section>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../assets/church.jpg" class="d-block w-100 img-fluid" alt="...">
            <div class="carousel-caption">
                <h5>Welcome to world</h5>
                <p>Some representative placeholder content for the first slide.</p>
                <p><a href="#" class="btn btn-warning mt-3">learn more</a></p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="../assets/christmas.jpg" class="d-block w-100 img-fluid" alt="...">
            <div class="carousel-caption">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
                <p><a href="#" class="btn btn-warning mt-3">learn more</a></p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="../assets/nature.jpg" class="d-block w-100 img-fluid" alt="...">
            <div class="carousel-caption">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
                <p><a href="#" class="btn btn-warning mt-3">learn more</a></p>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

</section>
</template>

<script>
export default {
    name: 'SliderC',
    components: {

    },
    data() {
        return {

        };
    },
};
</script>

<style scoped>
/* img{
    height: 700px;
} */
.carousel-item{
    height: 100vh;
    min-height: 300px;
}
.carousel-caption {
    bottom: 220px;
    z-index: 2;
}

.carousel-caption h5 {
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 2em;
    color: white;
}

.carousel-caption p {
    width: 60%;
    margin: auto;
    font-size: 1rem;
    line-height: 1.9;
    color: white;
}
.carousel-inner::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    background: rgba(0,0,0,0.7);
    z-index: 1;
}
.w-100{
    height: 100vh;
}



@media only screen and (max-width: 767px){
    .carousel-caption{
        bottom: 125px;
    }
    .carousel-caption h5{
        font-size: 1.5rem;
    }
    .carousel-caption a{
        padding: 10px 15px;
    }
    .carousel-caption p{
        width: 100%;
    }
}
</style>
