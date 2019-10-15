<template>
    <div class="page-3-view">
        頁面 3
        <div>
            <b-button>Button</b-button>
            <b-button variant="danger">Button</b-button>
            <b-button variant="success">Button</b-button>
            <b-button variant="outline-primary">Button</b-button>
        </div>

        <div class="text-center">
            <b-spinner label="Spinning"></b-spinner>
            <b-spinner type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="primary" label="Spinning"></b-spinner>
            <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="success" label="Spinning"></b-spinner>
            <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page3View"
    }
</script>

<style scoped>

</style>