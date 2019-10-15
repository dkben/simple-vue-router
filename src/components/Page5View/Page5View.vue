<template>
    <div class="page-5-view">
        頁面 5
        <vue-list-picker
                :left-items="leftItems"
                :right-items="rightItems"
        />
    </div>
</template>

<script>
    import { VueListPicker } from 'vue-list-picker'

    export default {
        name: "Page5View",
        components: {
            VueListPicker
        },
        data() {
            const example1 = {
                key: 1,
                content: 'Item 1'
            }
            const example2 = {
                key: 2,
                content: 'Item 2'
            }
            const example3 = {
                key: 3,
                content: 'Item 3'
            }
            const example4 = {
                key: 4,
                content: 'Item 4'
            }

            const leftItems = [example1, example2]
            const rightItems = [example3, example4]

            return { leftItems, rightItems }
        }
    }
</script>

<style scoped>

</style>