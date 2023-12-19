<template>
<section class="contact section-padding">
    <div class="container">
        <div class="row px-4 px-sm-0">
            <div class="col-md-12">
                <div class="section-header text-center pb-5">
                    <h2>contact us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam molestias beatae voluptate reprehenderit repellat facere modi quo. Ullam, ex assumenda!</p>
                </div>
            </div>

        </div>

        <div class="row justify-content-evenly px-4 px-sm-0">
            <div class="col-md-12 pt-4 pb-4">
                <form action="#" class="bg-light p-4.m-auto">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <input type="text" class="form-control" required placeholder="your first name">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <input type="text" class="form-control" required placeholder="your last name">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="mb-3">
                            <input type="email" class="form-control" required placeholder="your email here">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="mb-3">
                            <textarea rows="3" required class="form-control" placeholder="your query"></textarea>
                        </div>
                    </div>

                    <button class="btn btn-warning btn-lg btn-block mt-3">send now</button>

                </div>
            </form>
            </div>
        </div>
    </div>
</section>
</template>

    
<script>
export default {

    name: 'App',
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
    </style>
