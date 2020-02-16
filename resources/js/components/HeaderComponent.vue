<style>
</style>

<template>
    <!--- Top Bar Header --->
        <b-card>
            <b-row>
                <b-col cols="4">
                    <h1> IIDX CSV / BPI</h1>
                </b-col>
                <b-col cols="2">
                    <b-button variant="success" @click="uploadButton">upload</b-button>
                    <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Add Source</b-button>
                    <new-source-modal-component
                        :create="false">
                    </new-source-modal-component>
                </b-col>
                <b-col>
                    <b-form-file v-model="file" :state="Boolean(file)" placeholder="Score Data File" id="csvFileInput" ref="file" accept=".csv"/><br>
                    <b-form-file v-model="dataFile" :state="Boolean(dataFile)" placeholder="Song Data File" id="dataFileInput" ref="dataFile" accept=".csv"/><br>
                </b-col>
                <b-col>
                    <b-row>
                        <b-col>
                            <div id="ttlData">Total Results: {{ state.ttlSongs }}</div>
                            <div id="clrData">Cleared: {{ state.prcntClr }}%</div>
                            <div id="hcData">HC'd: {{ state.prcntHC }}%</div>
                        </b-col>
                        <b-col>
                            <div id="exhcData">EXHC'd: {{ state.prcntEXHC }}%</div>
                            <div id="fcData">FC'd: {{ state.prcntFC }}%</div>
                            <div id="aaaData">AAA'd: {{ state.prcntAAA }}%</div> 
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-card>
</template>

<script>
    import csvData from './../store/csvdata';
    import scoreData from './../store/scoredata';
    export default {
        data() {
            return {
                file: '',
                dataFile: '',
                state: scoreData.state
            }
        },

        computed: {
            state() {
                return scoreData.state;
            }
        },

        watch: {
            file(val) {
                csvData.getAsText(this.file);
            },
            dataFile(val) {
                csvData.getDataAsText(this.dataFile);
            }
        },

        methods: {
            uploadButton: function() {
                scoreData.combineClasses();
                scoreData.filterData();
            }
        }
    }
</script>