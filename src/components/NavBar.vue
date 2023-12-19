<template>
<nav class="navbar navbar-expand-lg fixed-top" id="navbar">
    <div class="container-fluid container-lg">

        <router-link class="navbar-brand" to="/"><span class="text-warning">Build</span>con</router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa-solid fa-bars"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto text-center">

                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#about">about</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#services">services</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#project">projects</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#review">review</a>
                </li>

                

                <li class="nav-item">
                    <router-link class="nav-link" to="/sidebar">side bar</router-link>
                </li>

            </ul>

            <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

        </div>
    </div>
</nav>

</template>

<script>
export default {

    name: 'NavBar',
    data() {
        return {

        };
    },
    components: {

    }
}
</script>

<style scoped>
#navbar{
    background: #f9f9f9;
}
.navbar-toggler span{
    color: orange;
}

.navbar .navbar-brand {
    color: black;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
}

.navbar .navbar-brand:hover,
.navbar .navbar-brand:focus {
    color: orchid;
}

.navbar-nav .nav-link {
    color: black;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.5s ease;
   
}
.navbar-nav .nav-link:hover{
    color: white;
    background: orange;
    border-radius: 1rem;
}

@media (max-width: 767px) {
    .navbar-nav .nav-link {
        text-align: center;
    }
}
</style>
