<style>
    .table-white {
        background-color: #ffffff
    }
    .table-dark_grey {
        background-color: #999999
    }
    .table-light_grey {
        background-color: #b7b7b7
    }
    .table-lighter_grey {
        background-color: #d9d9d9
    }
    .table-pink {
        background-color: #ea9999
    }
    .table-peach {
        background-color: #f9b89c
    }
    .table-light_orange {
        background-color: #f9cb9c
    }
    .table-orange {
        background-color: #ffdd82
    }
    .table-yellow {
        background-color: #fffd82
    }
    .table-pale_yellow {
        background-color: #e1db78
    }
    .table-lime {
        background-color: #c5e178
    }
    .table-spring_green {
        background-color: #6bff85
    }
    .table-teal {
        background-color: #4fe1bf
    }
    .table-lavender {
        background-color: #adcaff
    }
    .table-purple {
        background-color: #c764fa
    }
    .table-light_purple {
        background-color: #d786e1
    }
    .table-blood_purple {
        background-color: #e11cbf
    }
</style>

<template>
<b-container fluid>
    <!-- User Interface controls -->
    <b-row>
        <b-col lg="6" class="my-1">
            <b-form-group
            label="Filter"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            label-for="filterInput"
            class="mb-0"
            >
            <b-input-group size="sm">
                <b-form-input
                v-model="filter"
                type="search"
                id="filterInput"
                placeholder="Type to Search"
                ></b-form-input>
                <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                </b-input-group-append>
            </b-input-group>
            </b-form-group>
        </b-col>

      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      show-empty
      small
      
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filterIncludedFields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
    >
      <template v-slot:cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
  </b-container></template>

<script>
    import csvData from './../store/csvdata';
    import scoreData from './../store/scoredata';

    export default {
        data() {
            return {
                state: scoreData.state,
                totalRows: 1,
                currentPage: 1,
                perPage: 50,
                pageOptions: [25, 35, 50],
                sortBy: '',
                sortDesc: false,
                sortDirection: 'asc',
                filter: null,
                filterOn: [],
                fields: [
                    { key: 'title', label: 'Title', sortable: true },
                    { key: 'level', label: 'Level', sortable: true },
                    { key: 'style', label: 'Style', sortable: true },
                    { key: 'clear', label: 'Clear', sortable: true },
                    { key: 'rank', label: 'Rank', sortable: true },
                    { key: 'ex', label: 'Ex Score', sortable: true },
                    { key: 'misses', label: 'Miss Count', sortable: true },
                    { key: 'notes', label: 'Notes', sortable: true },
                    { key: 'chart', label: 'Chart', sortable: true },
                    { key: 'percent', label: 'Percent', sortable: true },
                    { key: 'bpi', label: 'BPI', sortable: true },
                    
                ]
            };
        },

        computed: {
            items() {
                return scoreData.state.cmbList;
            }
        },

        watch: {

        },

        mounted() {

        },

        methods: {
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            },
            getBpiColors: function(bpi) {
                var colors = []; // fg = 0, bg = 1
                var fg = "black";
                var bg = "white";

                if (bpi == -99.99) { bg = "d9d9d9"; fg = "Black"}

                else if (bpi < -15.00) { bg = "#ffffff"; fg = "Black"; }
                else if (bpi >= -15.00 && bpi < -10.00) { bg = "#999999"; fg = "Black"; }
                else if (bpi >= -10.00 && bpi < -5.00) { bg = "#b7b7b7"; fg = "Black"; }
                else if (bpi >= -5.00 && bpi < 0.00) { bg = "#d9d9d9"; fg = "Black"; }

                else if (bpi >= 0.00 && bpi < 5.00) { bg = "#ea9999"; fg = "Black"; }
                else if (bpi >= 5.00 && bpi < 10.00) { bg = "#f9b89c"; fg = "Black"; }
                else if (bpi >= 10.00 && bpi < 15.00) { bg = "#f9cb9c"; fg = "Black"; }
                else if (bpi >= 15.00 && bpi < 20.00) { bg = "#ffdd82"; fg = "Black"; }
                else if (bpi >= 20.00 && bpi < 30.00) { bg = "#fffd82"; fg = "Black"; }
                else if (bpi >= 30.00 && bpi < 40.00) { bg = "#e1db78"; fg = "Black"; }
                else if (bpi >= 40.00 && bpi < 50.00) { bg = "#c5e178"; fg = "Black"; }
                else if (bpi >= 50.00 && bpi < 60.00) { bg = "#6bff85"; fg = "Black"; }
                else if (bpi >= 60.00 && bpi < 70.00) { bg = "#4fe1bf"; fg = "Black"; }
                else if (bpi >= 70.00 && bpi < 80.00) { bg = "#adcaff"; fg = "Black"; }
                else if (bpi >= 80.00 && bpi < 90.00) { bg = "#c764fa"; fg = "Black"; }
                else if (bpi >= 90.00 && bpi < 100.00) { bg = "#d786e1"; fg = "Black"; }
                else if (bpi >= 100.00) { bg = "#e11cbf"; fg = "Black"; }
                else { bg = "#666666"; fg = "Black"; }

                colors.push(fg);
                colors.push(bg);

                return colors;
            }         
        }
    }
</script>