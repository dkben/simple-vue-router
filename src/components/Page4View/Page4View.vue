<template>
    <div class="page-4-view">
        頁面 4
        <div class="card-data">
            <b-card v-for="(item, index) in items" :key="index"
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
            >
                <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page4View",
        data() {
            return {
                items: [1, 2, 3, 4]
            }
        }
    }
</script>

<style scoped>
    .card-data .card {
        float: left;
        margin-left: 20px;
    }
</style>