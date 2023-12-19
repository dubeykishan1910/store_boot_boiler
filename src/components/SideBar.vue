<template>
<NavBar />
<section id="side" class="section-padding">
    <div class="container">
        <div class="row justify-content-evenly px-4 px-sm-0">

            <div class="left col-lg-3 col-md-12 col-12">
                <h2 class="title">all categories</h2>
                <div class="box">
                    <a to="#" class="able" @click="tab='AboutC'">
                        <p><span>
                                <i class="fas fa-user"></i></span>Profile</p>
                    </a>

                    <a to="#" class="able" @click="tab='ReviewC'">
                        <p><span>
                                <i class="fas fa-user"></i></span>Profile</p>
                    </a>
                    <a to="#" class="able" @click="tab='ServicesC'">
                        <p><span>
                                <i class="fas fa-map-marker"></i></span>manage address</p>
                    </a>

                </div>
            </div>

            <div class="right col-lg-7 col-md-12 col-12 ps-lg-5">
                <div class="contain">

                    <component :is="tab" />

                </div>
            </div>

        </div>
    </div>

</section>
</template>

<script>
import ServicesC from '../components/ServicesC.vue';
import ReviewC from '../components/ReviewC.vue';
import AboutC from './AboutC.vue';
import NavBar from './NavBar.vue';
export default {
    name: 'SideBar',
    components: {
        ServicesC,
        AboutC,
        ReviewC,
        NavBar
    },
    data() {
        return {
            tab: 'AboutC',
        };
    },
};
</script>

<style scoped>
.section-padding {
    padding-top: 100px;
}

.left {
    max-height: 500px;
    border: 2px solid #BF9742;
    background: white;
}
.left .box{
    padding: 0;
    background: white;
}
.left .box .able {
    padding: .5rem;
    font-size: 1.3rem;
    color: rgba(9, 0, 0, 0.526);
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,.1);

}

.left .box .able p {
    margin-left: .8rem;
}
.left .box .able span {
    margin-left: .1rem;

    border-radius: .5rem;
    padding: .5rem;
}
.left .box .able:hover {
    border-left: .3rem solid #BF9742;
    background: #eff7fa;
    border-right: .1rem solid #BF9742;
}
.right {
    background: rgba(98, 65, 4, 0.237);
    border: 2px solid #BF9742;
}
</style>
