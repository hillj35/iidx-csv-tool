<style>
    ul {
        list-style: none;
        padding-left: 0;
    }
</style>

<template>
    <!--- Footer used for data storage --->
    <footer>
        <div class="footer-grid-container">
            <ul>
                <b-row>
                    <li v-for="i in totalPages" v-bind:key="i">
                        <b-button @click="state.currpg=i-1">{{ i }}</b-button>
                    </li>
                </b-row>
            </ul>
        </div>
    </footer>
</template>

<script>
    import scoreData from './../store/scoredata';
    export default {
        data() {
            return {
                state: scoreData.state
            }
        },

        computed: {
            totalPages() {
                return scoreData.state.pages;
            }
        },

        methods: {
                        /*
            ********************************************************************************
            *                            Page Functions                                    *
            ********************************************************************************
            */

            handlePage: function(page) {
                this.currpg = page - 1;
                this.drawTable();
            },

        }
    }
</script>