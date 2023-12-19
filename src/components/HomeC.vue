<template>
<div class="body-home">
    <NavBar />

    <section class="section-padding" id="home">
        <div class="container">
            <div class="row px-4 px-sm-0">
                <div class="col-lg-4" id="homee">

                </div>

                <div class="col-lg-6 col-md-12 col-12">
                    <div class="text-center">
                        <h1>welcome to world</h1>
                        <h3>visit</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque laboriosam quae autem, perspiciatis eaque accusamus vero, assumenda perferendis nostrum nihil corrupti consequatur doloribus minima cumque?

                        </p>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <div id="about">
        <AboutC />
    </div>

    <div id="services">
        <ServicesC />
    </div>

    <div id="project">
        <CardP />
    </div>

    <div id="review">
        <ReviewC />
    </div>


    <!-- footer  -->
    <footer class="bg-dark p-2 text-center">
        <div class="container">
            <p class="text-white">
                all right reserved @website Lorem.
            </p>
        </div>
    </footer>
</div>
</template>

<script>
// Import your components here
import NavBar from './NavBar.vue';

import AboutC from './AboutC.vue';
import ServicesC from "./ServicesC.vue";
import CardP from './CardP.vue';
import ReviewC from '../components/ReviewC.vue';


export default {
    name: 'HomeC',
    components: {
        NavBar,
        AboutC,
        ServicesC,
        CardP,
        ReviewC,
        
    },
    data() {
        return {

        };
    },
};
</script>

<style scoped>
.section-padding {
    padding: 100px 0;
}

#homee {
    /* width: 100%;
    height: 100vh; */
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(../assets/nature.jpg);
    background-size: cover;

}
</style>
