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
    <filter-col-component :options="rankOptions" placeholder="Rank Filter" filter="rank"></filter-col-component>
    <filter-col-component :options="clearOptions" placeholder="Clear Filter" filter="clear"></filter-col-component>
    <filter-col-component :options="levelOptions" placeholder="Level Filter" filter="level"></filter-col-component>
    <filter-col-component :options="styleOptions" placeholder="Style Filter" filter="style"></filter-col-component>

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
      :sort-compare="sort"
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
    import checkboxLists from './../data/checkboxlists';
    import sorts from './../data/sorts';

    export default {
        data() {
            return {
                rankOptions: checkboxLists.rnkIDChecks,
                clearOptions: checkboxLists.clrIDChecks,
                levelOptions: checkboxLists.lvlIDChecks,
                styleOptions: checkboxLists.styIDChecks,

                state: scoreData.state,
                totalRows: 1,
                currentPage: 1,
                perPage: 50,

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
                    { key: 'chart', label: 'Chart', sortable: false },
                    { key: 'percent', label: 'Percent', sortable: true },
                    { key: 'bpi', label: 'BPI', sortable: true },
                    
                ]
            };
        },

        computed: {
            items() {
                //set total rows
                this.totalRows = scoreData.state.cmbListCpy.length;
                return scoreData.state.cmbListCpy;
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
            sort(aRow, bRow, key) {
                if (!["clear", "style", "rank"].includes(key)) {
                    //returning null falls back to default sort
                    return null;
                }
                else {
                    const a = aRow[key];
                    const b = bRow[key];
                    
                    //returns -1 if a < b, 0 if equal, and 1 if a > b
                    return sorts[key][a] < sorts[key][b] ? -1 : sorts[key][a] > sorts[key][b] ? 1 : 0;
                }
            }
        }
    }
</script>