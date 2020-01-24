<style>
    .scroll {
        max-height: 750px;
        overflow-y: auto;
    }

    /*
    ********************************************************************************
    *                               Global Changes                                 *
    ********************************************************************************
    */

    table {
        text-align: center;
        width: 100%;
    }


    tr {
        height: 25px;
    }


    td {
        border-bottom: 1px solid #ddd;
    }


    button:focus {
        border: none;
        outline: none;
    }


    .stockBtn {
        height: 30px;
        width: 125px;
        text-transform: uppercase;
        cursor: pointer;
        font-size: 12px;
        font-weight: Bold;
        border-radius: 3px;
        color: #444444;
        border-color: #dddddd;
        background: linear-gradient(#eeeeee, #dddddd);
        box-shadow: inset 0 1px #eeeeee, 0 1px 2px rgba(0,0,0,.2); 
    }

    /*
    ********************************************************************************
    *                           Filter Section CSS                                 *
    ********************************************************************************
    */


    .filter-heading-container{
        border-bottom: 1px solid #dddddd;
        text-align: center;
        font-weight: bold;
        height: 25px;
        width: 100%;
    }


    .filter-container {
        padding-left: 5px;
        overflow: auto;
        background: #fbfcfc;
    }


    /*
    ********************************************************************************
    *                                  Table CSS                                   *
    ********************************************************************************
    */

    .table-header-container{
        height: 100%;
        border-bottom: 1px solid #dddddd;
        padding-left: 5px;
        padding-right: 15px;
        display: grid;
        grid-template-columns: 15% 5% 35% 15% 5% 5% 5% 5% 5% 5%;
    }


    .table-container {
        font-size: 14px;
        display: grid;
        width: 100%;
    }


    .songTable-container {
        overflow: auto;
    }


    .headerBtn {
        cursor: pointer;
        font-weight: Bold;
        color: #444444;
        background: transparent;
        border-color: transparent;
        width: 100%;
    }


    /*
    ********************************************************************************
    *                           General Grid CSS                                   *
    ********************************************************************************
    */

    .grid-item {
        overflow: auto;
    }


    .v-center-grid-item {
        display: flex;
        align-items: center;
        overflow: auto;
    }


    .vh-center-grid-item {  
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: auto; 
    }


    /*
    ********************************************************************************
    *                                Footer CSS                                    *
    ********************************************************************************
    */

    footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 30px;
        border-top: 1px solid #cccccc;
        background-color: #eeeeee;
        padding-left: 40px;
    }

    .footer-grid-container {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: auto; 
        grid-template-columns: 100px auto;
    }

    /*
    ********************************************************************************
    *                           Page Section CSS                                   *
    ********************************************************************************
    */

    .pageBtn-container {
        padding-left: 40px;
    }


    .pageBtn {
        cursor: pointer;
        font-size: 12px;
        font-weight: Bold;
        border-radius: 3px;

        color: #666666;
        border-color: #eeeeee;
        background: linear-gradient(#ffffff, #eeeeee);
        box-shadow: inset 0 1px #eeeeee, 0 1px 2px rgba(0,0,0,.2); 
        height: 25px;
        width: 40px;
    }
</style>

<template>
    <b-card class="scroll">
        <!--- Filter Header --->
        <b-row>
            <b-col cols="2">
                <div class="filter-heading-container">Filter Options</div>
            </b-col>
            <b-col>
                <button class="headerBtn" @click="stySort">Style</button>
            </b-col>
            <b-col>
                <button class="headerBtn"  @click="lvlSort">Level</button>
            </b-col>
            <b-col>
                <button class="headerBtn" @click="titlSort">Song</button>
            </b-col>
            <b-col>
                <button class="headerBtn" @click="clrSort">Clear</button>
            </b-col>
            <b-col>
                <button class="headerBtn" @click="rnkSort">Rank</button>
            </b-col>
            <b-col>  
                <button class="headerBtn" @click="exSort">EX</button>
            </b-col>
            <b-col>                
                <button class="headerBtn" @click="prcntSort">%</button>
            </b-col>
            <b-col>                
                <button class="headerBtn" @click="missSort">Misses</button>
            </b-col>
            <b-col>                
                <button class="headerBtn" @click="plysSort">Plays</button>
            </b-col>
            <b-col>                
                <button class="headerBtn" @click="bpiSort">BPI</button>
            </b-col>
        </b-row>


        <!--- Second layer of main body (contains table and filters) --->
        <b-container>
            <table id="songTable">
                <!--- Row is needed for storing size --->
                <tr>
                    <th style="width:15%"></th>
                    <th style="width:5%"></th>
                    <th style="width:35%"></th>
                    <th style="width:15%"></th>
                    <th style="width:5%"></th>
                    <th style="width:5%"></th>
                    <th style="width:5%"></th>
                    <th style="width:5%"></th>
                    <th style="width:5%"></th>
                    <th style="width:5%"></th>
                </tr>
            </table>
        </b-container>

    </b-card>
</template>

<script>
    import csvData from './../store/csvdata';
    import scoreData from './../store/scoredata';

    export default {
        data() {
            return {
                state: scoreData.state,

                // Flags for sorting
                isStyAsc: false,
                isLvlAsc: false,
                isClrAsc: false,
                isRnkAsc: false,
                isTitlAsc: false,
                isPlysAsc: false,
                isMissAsc: false,
                isExAsc: false,
                isPrcntAsc: false,
                isBpiAsc: false
            };
        },

        computed: {
            cmbList() {
                return scoreData.state.cmbList;
            },
            currPg() {
                return scoreData.state.currpg;
            }
        },

        watch: {
            cmbList: function(val, oldVal) {
                this.resetTable();
            },
            currPg: function(val, oldVal) {
                this.resetTable();
            }
        },

        mounted() {

        },

        methods: {
            /*
            ********************************************************************************
            *                      Functions that manage the Table                         *
            ********************************************************************************
            */

            resetTable: function() {
                // Copy list
                scoreData.state.cmbListCpy = scoreData.state.cmbList;

                this.drawTable();
            },

            // *************** This is essentially the main function!!! ********************
            drawTable: function() {
                // Get the table ID
                var table = document.getElementById("songTable");
                var cmbListCpy = scoreData.state.cmbListCpy;

                // Need to clear table before filling it out again
                this.clearTable();

                // Row tracking
                var rowCount = 0;


                // Filtering
                /*rnkFilter();
                lvlFilter();
                clrFilter();
                styFilter();
                noBpiFilter();*/

                // Get results for footer
                scoreData.getResults();

                // Check if drawing a blank page
                if(scoreData.state.currpg + 1 > scoreData.state.pages) scoreData.state.currpg = scoreData.state.pages - 1;
                if(scoreData.state.currpg < 0) scoreData.state.currpg = 0;

                // Set page offset
                let offset = scoreData.state.currpg * scoreData.state.limit;


                // Loop through list of Songs
                for (let i = offset; i < cmbListCpy.length; i++) {
                    // Draw Limit
                    if(i >= offset + scoreData.state.limit) break;

                    // Extract data from classes
                    var styl = cmbListCpy[i].style;
                    var lvl = cmbListCpy[i].level;
                    var titl = cmbListCpy[i].title;
                    var clr = cmbListCpy[i].clear;
                    var rnk = cmbListCpy[i].rank;
                    var ex = cmbListCpy[i].ex;
                    var miss = cmbListCpy[i].misses;
                    var plyCnt = cmbListCpy[i].plays;
                    var notes = cmbListCpy[i].notes;
                    var chart = cmbListCpy[i].chart;
                    var prcnt = cmbListCpy[i].percent;
                    var bpi = cmbListCpy[i].bpi;

                    // Variables for CSS
                    var lvl_pic = "";
                    var clr_pic = "";
                    var rnk_pic = "";
                    var row_fg = "#444444";
                    var clr_fg;
                    var rnk_fg;
                    var sty_fg;
                    var chrt_fg;
                    var row_bg = "white";
                    var clr_bg;
                    var rnk_bg;
                    var sty_bg;
                    var chrt_bg;

                    // Create row and cols
                    var row = table.insertRow(rowCount);
                    var col1 = row.insertCell(0);
                    var col2 = row.insertCell(1);
                    var col3 = row.insertCell(2);
                    var col4 = row.insertCell(3);
                    var col5 = row.insertCell(4);
                    var col6 = row.insertCell(5);
                    var col7 = row.insertCell(6);
                    var col8 = row.insertCell(7);
                    var col9 = row.insertCell(8);
                    var col10 = row.insertCell(9);

                    // Row tracking
                    rowCount++;

                    // Find level colors
                    if(chart == "A") { 
                        chrt_bg = "#ffb3b3";
                        lvl_pic = "SPA " + lvl;
                    }
                    else if(chart == "L") { 
                        chrt_bg = "#f2ccff";
                        lvl_pic = "SPL " + lvl;
                    }
                    else {
                        chrt_bg = "#fff5cc";
                        lvl_pic = "SPH " + lvl;
                    }

                    // Find clear colors
                    switch (clr) {
                        case "FULLCOMBO CLEAR": clr_bg = "#f2e6ff"; break;
                        case "EX HARD CLEAR":   clr_bg = "#ffffcc"; break;
                        case "HARD CLEAR":      clr_bg = "#ffcccc"; break;
                        case "CLEAR":           clr_bg = "#e6ffff"; break;
                        case "EASY CLEAR":      clr_bg = "#ccffcc"; break;
                        case "ASSIST CLEAR":    clr_bg = "#ffe6ff"; break;
                        case "FAILED":          clr_bg = "#ffccb3"; break;
                        case "NO PLAY":         clr_bg = "#e6e6e6"; break;
                    }

                    //Find rank colors
                    switch (rnk) {
                        case "AAA": rnk_bg = "#ffeecc"; break;
                        case "AA":  rnk_bg = "#f2f2f2"; break;
                        case "A":   rnk_bg = "#e6ffe6"; break;
                        case "B":   rnk_bg = "#e6f2ff"; break;
                        case "C":   rnk_bg = "#e6f2ff"; break;
                        case "D":   rnk_bg = "#e6f2ff"; break;
                        case "E":   rnk_bg = "#e6f2ff"; break;
                        case "F":   Rnk_bg = "#e6f2ff"; break;
                    }

                    /*
                    // Get style colors for CSS
                    var sty_colors = [];
                    sty_colors = getStyleColors(styl);
                    col1.style.color = sty_colors[0];
                    col1.style.background = sty_colors[1];
                    */

                    // Get BPI colors for CSS
                    var bpi_colors = []; 
                    bpi_colors = this.getBpiColors(bpi);
                    col10.style.color = bpi_colors[0];
                    col10.style.background = bpi_colors[1];

                    // Apply any additional CSS
                    row.style.background = row_bg;
                    row.style.color = row_fg;
                    if (chart == "L") col3.style.color = "#ff0080";
                    col2.style.background = chrt_bg;
                    col4.style.background = clr_bg;
                    col5.style.background = rnk_bg;

                    // Set column data
                    col1.innerHTML = styl;
                    col2.innerHTML = lvl_pic;
                    col3.innerHTML = titl;
                    col4.innerHTML = clr;
                    col5.innerHTML = rnk;
                    col6.innerHTML = ex;
                    col7.innerHTML = prcnt+"%";
                    col8.innerHTML = miss;
                    col9.innerHTML = plyCnt;

                    // BPI column
                    if(bpi == -99.99) bpi = " ";
                    col10.innerHTML = bpi;
                }

                // Update footer
                scoreData.storeResults();

            },

            clearTable: function() { 
                // Get the table ID
                var table = document.getElementById("songTable");

                //Clear table
                var tableHeaderRowCount = 0;
                var rowCount = table.rows.length - 1;

                for (var i = tableHeaderRowCount; i < rowCount; i++) {
                    table.deleteRow(tableHeaderRowCount);
                }
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
            },            
        }
    }
</script>