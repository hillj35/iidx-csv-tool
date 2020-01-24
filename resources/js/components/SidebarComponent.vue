<style>
    .scroll {
        max-height: 750px;
        overflow-y: auto;
    }
    ul {
        list-style: none;
        padding-left: 0;
    }
</style>

<template>
    <b-card class="scroll">
        <b-form-checkbox id="noBpi" v-model="tick_noBpi" checked> No BPI Songs</b-form-checkbox><br>
        <br>

        <ul>
            <li v-for="item in rankCheckBoxes" v-bind:key="item.id">
                <b-form-checkbox type="checkbox" v-model="item.active">
                {{ item.label }}
                </b-form-checkbox>
            </li>
        </ul>
        <b-button @click="rankCheckBoxes.map(a=>a.active=true)">All Ranks</b-button><br><br>
        <b-button @click="rankCheckBoxes.map(a=>a.active=false)">Clear Ranks</b-button><br><br>
        <br>
        <ul>
            <li v-for="item in clearCheckBoxes" v-bind:key="item.id">
                <b-form-checkbox type="checkbox" v-model="item.active">
                {{ item.label }}
                </b-form-checkbox>
            </li>
        </ul>
        <b-button @click="clearCheckBoxes.map(a=>a.active=true)">All Clears</b-button><br><br>
        <b-button @click="clearCheckBoxes.map(a=>a.active=false)">Clear Clears</b-button><br><br>
        <br>
        <ul>                
        <li v-for="item in levelCheckBoxes" v-bind:key="item.id">
            <b-form-checkbox type="checkbox" v-model="item.active">
            {{ item.label }}
            </b-form-checkbox>
        </li>                
        </ul>
        <b-button @click="levelCheckBoxes.map(a=>a.active=true)">All Levels</b-button><br><br>
        <b-button @click="levelCheckBoxes.map(a=>a.active=false)">Clear Levels</b-button><br><br>
        <br>
        <ul>
            <li v-for="item in styleCheckBoxes" v-bind:key="item.id">
                <b-form-checkbox type="checkbox" v-model="item.active">
                {{ item.label }}
                </b-form-checkbox>
            </li>                
        </ul>
        <b-button @click="styleCheckBoxes.map(a=>a.active=true)">All Styles</b-button><br><br>
        <b-button @click="styleCheckBoxes.map(a=>a.active=false)">Clear Styles</b-button><br><br>
    </b-card>
</template>

<script>
    import cbLists from './../data/checkboxlists';

    export default {
        data() {
            return {
                rankCheckBoxes: cbLists.rnkIDChecks,
                clearCheckBoxes: cbLists.clrIDChecks,
                levelCheckBoxes: cbLists.lvlIDChecks,
                styleCheckBoxes: cbLists.styIDChecks,

                // Ticks for BPI
                tick_noBpi: true
            }
        },

        methods: {

        }

    }
</script>