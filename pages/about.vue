<template>
<div>
    <h2>About</h2>

    <p>This is an empty about page.</p>

    <p class="example">
        This is styled via inline SASS in about.vue</p>
</div>
</template>

<script>
export default {
    mounted() {
        console.info("about mounted");
    },
    head: {
        title: "About"
    }
}
</script>

<style lang="sass">
    p.example
        color: #1a881a;
        background: #dcffdc;
        padding: 10px;
        border: 1px dashed #111;

</style>

