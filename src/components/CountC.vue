<template>
    <div class="container">

        <p class="">total is : {{ store.count }}</p>
        <button @click="increment" class="btn btn-primary mx-5">Increment</button>
        <button @click="decrement" class="btn btn-success">decrement</button>
        <br>
        counter moved to {{ store.countDigitLength }} length.
    </div>
    
    </template>
    
    <script setup>
    import { useCounterStore } from "@/stores/counter";
    // import { computed } from "@vue/runtime-core";
    const store = useCounterStore();
    
    function increment(){
        store.count++;
    }
    function decrement(){
        store.count--;
    }


    // const digitlen = computed(()=> store.count.toString().length)

    // const digitlen = store.count.toString().length;
    



    // export default {
    //     name: 'CountC',
    //     data() {
    //         return {
    
    //         };
    //     },
    </script>