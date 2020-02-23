<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>
<template>
    <b-container fluid>
        <b-row>
            <b-col lg="11">
                <multiselect v-model="selected" :options="options" :multiple="true" 
                :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                :placeholder="placeholder" label="label" track-by="id"/>
            </b-col>
            <b-col lg="1">
                <b-button @click="toggleSelections">{{ buttonText }}</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Multiselect from 'vue-multiselect';
    import checkboxLists from './../data/checkboxlists';
    import scoreData from './../store/scoredata';

    export default {
        components: {
            Multiselect
        },

        props: {
            options: {
                type: Array   
            },
            placeholder: '',
            filter: '',
        },

        data() {
            return {
                selected: []
            }
        },

        watch: {
            selected() {
                checkboxLists.filters[this.filter] = this.selected;
                scoreData.filterData();
            }
        },

        mounted() {
            this.selected = this.options;
        },

        computed: {
            anySelected() {
                if (this.selected.length > 0) 
                    return true;
                else
                    return false;
            },
            buttonText() {
                if (this.anySelected) 
                    return "Clear";
                else 
                    return "All";
            }
        },

        methods: {
            toggleSelections: function() {
                if (this.anySelected) 
                    this.selected = [];
                else
                    this.selected = this.options;
                
            }
        }
    }
</script>