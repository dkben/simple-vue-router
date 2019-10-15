<template>
    <div class="page-1-view">
        頁面 1
        <b-table striped hover :items="items"></b-table>
    </div>
</template>

<script>
    export default {
        name: "Page1View",
        data() {
            return {
                items: [
                    { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                    { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                    { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                    { age: 38, first_name: 'Jami', last_name: 'Carney' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>