<style>

/*
********************************************************************************
*                               Global Changes                                 *
********************************************************************************
*/

body {
    font-size: 12px;
}


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
*                           Topbar Section CSS                                 *
********************************************************************************
*/

.heading-grid-container {
    border-bottom: 1px solid #dddddd;
    background-color: #f5f5f5;
    position: fixed;
    padding-top: 5px;
    width: 100%;
    height: 70px;
    display: grid;
    grid-template-columns: 300px 150px 400px 150px 200px auto; 
}


.fileBtn {
    padding: 2px 2px 2px 2px;
}


.uploadBtn {
    height: 40px;
    width: 75px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 14px;
    font-weight: Bold;
    border-radius: 3px;
    color: White;
    border-color: Orange;
    background: linear-gradient(#ffbf00, #ff8000);
    box-shadow: inset 0 1px Orange, 0 1px 2px rgba(0,0,0,.2); 
}


.colorBtn-grid-container {
    padding-top: 10px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 60px 60px; 
}


.data-grid-container {
    display: grid;
    grid-template-columns: 100px 100px;
}


/*
********************************************************************************
*                              Main Body CSS                                   *
********************************************************************************
*/

.main-grid-container1 {
    background-color: #fafafa;
    display: grid;
    grid-template-columns: 150px auto;
    position: fixed;
    width: 100%;
    top: 70px;
    padding-left: 5px;
    padding-right: 5px;
}

.main-grid-container2 {
    display: grid;
    grid-template-columns: 150px auto;
    position: fixed;
    width: 100%;
    top: 95px;
    bottom: 30px;
    padding-left: 5px;
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
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>IIDX CSV Viewer</title>
    </head>

    <body>
        <!--- Top Bar Header --->
        <div class="heading-grid-container">
            <div class="vh-center-grid-item">
                <h1> IIDX CSV / BPI</h1>
            </div>

            <!--- File Management --->
            <div class="vh-center-grid-item">
                <button class="uploadBtn" @click="uploadButton">upload</button>
            </div>

            <div class="vh-center-grid-item">
            <div class="fileBtn-container">
                    <span id="filename"></span>
                    <label>Select score data CSV: </label> 
                    <input type="file" class="fileBtn" id="csvFileInput" name="file" ref="file" @change="handleFiles()" accept=".csv"><br>
                    <label>Select song data CSV:  </label>
                    <input type="file" class="fileBtn" id="dataFileInput" name="fileData" ref="dataFile" @change="handleDataFiles()" accept=".csv">
                </div>
            </div>

            <div class="vh-center-grid-item">
                <div id="ttlData">Total Results: 0</div>
            </div>

            <div class="vh-center-grid-item">
                <div class="data-grid-container">
                    <div id="clrData">Cleared: 0.0%</div>
                    <div id="hcData">HC'd: 0.0%</div>
                    <div id="exhcData">EXHC'd: 0.0%</div>
                    <div id="fcData">FC'd: 0.0%</div>
                    <div id="aaaData">AAA'd: 0.0%</div> 
                </div>
            </div>


        </div>

        <!--- First layer of main body (contains headers and header buttons) --->
        <div class="main-grid-container1">

            <!--- Filter Header --->
            <div class="grid-item">
                <div class="filter-heading-container">Filter Options</div>
            </div>

            <!--- Table Header Buttons --->
            <div class="grid-item">
                <div class="table-header-container"> 
                    <div class="grid-item">
                        <button class="headerBtn" @click="stySort">Style</button>
                    </div>

                    <div class="grid-item">
                    <button class="headerBtn"  @click="lvlSort">Level</button>
                    </div>

                    <div class="grid-item">
                    <button class="headerBtn" @click="titlSort">Song</button>
                    </div>

                    <div class="grid-item">
                    <button class="headerBtn" @click="clrSort">Clear</button>
                    </div>

                    <div class="grid-item">
                    <button class="headerBtn" @click="rnkSort">Rank</button>
                    </div>

                    <div class="grid-item">
                    <button class="headerBtn" @click="exSort">EX</button>
                    </div>

                    <div class="grid-item">
                    <button class="headerBtn" @click="prcntSort">%</button>
                    </div>

                    <div class="grid-item">
                    <button class="headerBtn" @click="missSort">Misses</button>
                    </div>

                    <div class="grid-item">
                    <button class="headerBtn" @click="plysSort">Plays</button>
                    </div>

                    <div class="grid-item">
                    <button class="headerBtn" @click="bpiSort">BPI</button>
                    </div>
                </div>
            </div>

        </div>


        <!--- Second layer of main body (contains table and filters) --->
        <div class="main-grid-container2">

            <!--- Filter section --->
            <div class="grid-item">

                <div class="filter-container">
                    <div class="bpi-container">
                        <input type="checkbox" id="noBpi" v-model="tick_noBpi" checked> No BPI Songs<br>
                        <br>
                    </div>

                    <div class="rank-container">
                        <input type="checkbox" id="rank_aaa" v-model="tick_aaa" checked> AAA<br>
                        <input type="checkbox" id="rank_aa"  v-model="tick_aa" checked> AA<br>
                        <input type="checkbox" id="rank_a"   v-model="tick_a" checked> A<br>
                        <input type="checkbox" id="rank_b"   v-model="tick_b" checked> B<br>
                        <input type="checkbox" id="rank_c"   v-model="tick_c" checked> C<br>
                        <input type="checkbox" id="rank_d"   v-model="tick_d" checked> D<br>
                        <input type="checkbox" id="rank_e"   v-model="tick_e" checked> E<br>
                        <input type="checkbox" id="rank_f"   v-model="tick_f" checked> F<br><br>
                        <button class="stockBtn" @click="setRanks">All Ranks</button><br><br>
                        <button class="stockBtn" @click="resetRanks">Clear Ranks</button><br><br>
                        <br>
                    </div>

                    <div class="clear-container">
                        <input type="checkbox" id="clear_fc"   v-model="tick_fc" checked> FC<br>
                        <input type="checkbox" id="clear_exhc" v-model="tick_exhc" checked> EXHC<br>
                        <input type="checkbox" id="clear_hc"   v-model="tick_hc" checked> HC<br>

                        <input type="checkbox" id="clear_nc"  v-model="tick_nc" checked> NC<br>
                        <input type="checkbox" id="clear_ec"  v-model="tick_ec" checked> EC<br>
                        <input type="checkbox" id="clear_ac"  v-model="tick_ac" checked> AC<br>
                        <input type="checkbox" id="clear_fd"  v-model="tick_fd" checked> FD<br>
                        <input type="checkbox" id="clear_np"  v-model="tick_np" checked> NP<br><br>
                        <button class="stockBtn" @click="setClears">All Clears</button><br><br>
                        <button class="stockBtn" @click="resetClears">Clear Clears</button><br><br>
                        <br>
                    </div>

                    <div class="level-container">
                        <input type="checkbox" id="level1" v-model="tick_1" checked> 1<br>
                        <input type="checkbox" id="level2" v-model="tick_2" checked> 2<br>
                        <input type="checkbox" id="level3" v-model="tick_3" checked> 3<br>
                        <input type="checkbox" id="level4" v-model="tick_4" checked> 4<br>
                        <input type="checkbox" id="level5" v-model="tick_5" checked> 5<br>
                        <input type="checkbox" id="level6" v-model="tick_6" checked> 6<br>
                        <input type="checkbox" id="level7" v-model="tick_7" checked> 7<br>
                        <input type="checkbox" id="level8" v-model="tick_8" checked> 8<br>
                        <input type="checkbox" id="level9" v-model="tick_9" checked> 9<br>
                        <input type="checkbox" id="level10" v-model="tick_10" checked> 10<br>
                        <input type="checkbox" id="level11" v-model="tick_11" checked> 11<br>
                        <input type="checkbox" id="level12" v-model="tick_12" checked> 12<br><br>
                        <button class="stockBtn" @click="setLevels">All Levels</button><br><br>
                        <button class="stockBtn" @click="resetLevels">Clear Levels</button><br><br>
                        <br>
                    </div>

                    <div class="style-container">
                        <input type="checkbox" id="style1" v-model="tick_1st" checked> 1st&substream<br>
                        <input type="checkbox" id="style2" v-model="tick_2nd" checked> 2nd style<br>

                        <input type="checkbox" id="style3" v-model="tick_3rd" checked> 3rd style<br>
                        <input type="checkbox" id="style4" v-model="tick_4th" checked> 4th style<br>
                        <input type="checkbox" id="style5" v-model="tick_5th" checked> 5th style<br>

                        <input type="checkbox" id="style6" v-model="tick_6th" checked> 6th style<br>
                        <input type="checkbox" id="style7" v-model="tick_7th" checked> 7th style<br>
                        <input type="checkbox" id="style8" v-model="tick_8th" checked> 8th style<br>
                        <input type="checkbox" id="style9" v-model="tick_9th" checked> 9th style<br>
                        <input type="checkbox" id="style10" v-model="tick_10th" checked> 10th style<br>
                        <input type="checkbox" id="style11" v-model="tick_11th" checked> IIDX RED<br>
                        <input type="checkbox" id="style12" v-model="tick_12th" checked> HAPPY SKY<br>
                        <input type="checkbox" id="style13" v-model="tick_13th" checked> DistorteD<br>
                        <input type="checkbox" id="style14" v-model="tick_14th" checked> GOLD<br>
                        <input type="checkbox" id="style15" v-model="tick_15th" checked> DJ TROOPERS<br>

                        <input type="checkbox" id="style16" v-model="tick_16th" checked> EMPRESS<br>
                        <input type="checkbox" id="style17" v-model="tick_17th" checked> SIRIUS<br>
                        <input type="checkbox" id="style18" v-model="tick_18th" checked> Resort Anthem<br>
                        <input type="checkbox" id="style19" v-model="tick_19th" checked> Lincle<br>
                        <input type="checkbox" id="style20" v-model="tick_20th" checked> tricoro<br>
                        <input type="checkbox" id="style21" v-model="tick_21st" checked> SPADA<br>
                        <input type="checkbox" id="style22" v-model="tick_22nd" checked> PENDUAL<br>

                        <input type="checkbox" id="style23" v-model="tick_23rd" checked> copula<br>
                        <input type="checkbox" id="style24" v-model="tick_24th" checked> SINOBUZ<br>
                        <input type="checkbox" id="style25" v-model="tick_25th" checked> CANNON BALLERS<br>
                        <input type="checkbox" id="style26" v-model="tick_26th" checked> Rootage<br><br>
                        <button class="stockBtn" @click="setStyles">All Styles</button><br><br>
                        <button class="stockBtn" @click="resetStyles">Clear Styles</button><br><br>
                    </div>
                </div>
            </div>


            <!--- Table section --->
            <div class="grid-item"> 
                <div class="table-container"> 
                    <div class="songTable-container">
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
                    </div>
                </div>
            </div>

        </div>

    </body>

    <!--- Footer used for data storage --->
    <footer>
        <div class="footer-grid-container">

            <div id="pageData">Page: 0/0</div>
            <div class="pageBtn-container" id="pageButtons"> </div>

        </div>
    </footer>

    </html>
</template>

<script>
    import csvData from './../store/csvdata';
    import scoreData from './../store/scoredata';

    export default {
        data() {
            return {
                //files
                file: '',
                dataFile: '',

                // Tick boxes for ranks
                tick_aaa: true,
                tick_aa: true,
                tick_a: true,
                tick_b: true,
                tick_c: true,
                tick_d: true,
                tick_e: true,
                tick_f: true,

                // Tick boxes for levels
                tick_1: true,
                tick_2: true,
                tick_3: true,
                tick_4: true,
                tick_5: true,
                tick_6: true,
                tick_7: true,
                tick_8: true,
                tick_9: true,
                tick_10: true,
                tick_11: true,
                tick_12: true,

                // Tick boxes for clears
                tick_fc: true,
                tick_exhc: true,
                tick_hc: true,
                tick_nc: true,
                tick_ec: true,
                tick_ac: true,
                tick_fd: true,
                tick_np: true,

                // Tick boxes for styles
                tick_1st: true,
                tick_2nd: true,
                tick_3rd: true,
                tick_4th: true,
                tick_5th: true,
                tick_6th: true,
                tick_7th: true,
                tick_8th: true,
                tick_9th: true,
                tick_10th: true,
                tick_11th: true,
                tick_12th: true,
                tick_13th: true,
                tick_14th: true,
                tick_15th: true,
                tick_16th: true,
                tick_17th: true,
                tick_18th: true,
                tick_19th: true,
                tick_20th: true,
                tick_21st: true,
                tick_22nd: true,
                tick_23rd: true,
                tick_24th: true,
                tick_25th: true,
                tick_26th: true,

                // Ticks for BPI
                tick_noBpi: true,

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
                isBpiAsc: false,

                // Draw Limit
                limit: 50,

                // Page variables
                currpg: 0,
                pages: 0
            };
        },

        computed: {

        },

        mounted() {

        },

        methods: {
            handleFiles: function() {
                this.file = this.$refs.file.files[0];
                csvData.getAsText(this.file);
            },

            handleDataFiles: function() {
                this.dataFile = this.$refs.dataFile.files[0];
                csvData.getDataAsText(this.dataFile);
            },

            // ******************** Tick All Functions *************************************
            setRanks: function(){
                for(var i=0 ; i < this.rnkIDList.length ; i++)
                    document.getElementById(this.rnkIDList[i]).checked = true;
                this.resetTable();
            },

            setClears: function(){
                for(var i=0 ; i < this.clrIDList.length ; i++)
                    document.getElementById(this.clrIDList[i]).checked = true;
                this.resetTable();
            },

            setLevels: function(){
                for(var i=0 ; i < this.lvlIDList.length ; i++)
                    document.getElementById(this.lvlIDList[i]).checked = true;
                this.resetTable();
            },

            setStyles: function(){
                for(var i=0 ; i < this.styIDList.length ; i++)
                    document.getElementById(this.styIDList[i]).checked = true;
                this.resetTable();
            },


            // ******************** Untick All Functions ***********************************

            resetRanks: function(){
                for(var i=0 ; i < this.rnkIDList.length ; i++)
                    document.getElementById(this.rnkIDList[i]).checked = false;
                this.drawTable();
            },

            resetClears: function(){
                for(var i=0 ; i < this.clrIDList.length ; i++)
                    document.getElementById(this.clrIDList[i]).checked = false;
                this.drawTable();
            },

            resetLevels: function(){
                for(var i=0 ; i < this.lvlIDList.length ; i++)
                    document.getElementById(this.lvlIDList[i]).checked = false;
                this.drawTable();
            },

            resetStyles: function(){
                for(var i=0 ; i < this.styIDList.length ; i++)
                    document.getElementById(this.styIDList[i]).checked = false;
                this.drawTable();
            },
            /*
            ********************************************************************************
            *                      Functions that manage the Table                         *
            ********************************************************************************
            */

            uploadButton: function() {
                scoreData.combineClasses();
                this.resetTable();
            },

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

                // Erase old buttons
                this.removePages();

                // Set up page buttons
                this.setPageBttns();


                // Get results for footer
                scoreData.getResults();

                // Check if drawing a blank page
                if(this.currpg + 1 > this.pages) this.currpg = this.pages - 1;
                if(this.currpg < 0) this.currpg = 0;

                // Set page offset
                let offset = this.currpg * this.limit;


                // Loop through list of Songs
                for (let i = offset; i < cmbListCpy.length; i++) {
                    // Draw Limit
                    if(i >= offset + this.limit) break;

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
            // ************************* Main function end!!! ******************************


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

            /*
            ********************************************************************************
            *                            Page Functions                                    *
            ********************************************************************************
            */

            setPageBttns: function(){
                // Get total pages
                var ttlpages = scoreData.state.cmbListCpy.length / this.limit;
                var ttlpagesCpy = ttlpages;
                ttlpages = ttlpages.toFixed(0);

                // Get fractional pages
                var pgFraction = (ttlpagesCpy - ttlpages);
                if(pgFraction > 0 && pgFraction < 0.5) ttlpages++;

                for(let i = 0; i < ttlpages ; i++) this.addPage();
            },


            addPage: function() {
                this.pages++;

                var parent = document.getElementById("pageButtons");
                var newElement = document.createElement("Button");
                newElement.setAttribute('id', "page#" + this.pages);
                newElement.setAttribute('onclick', "handlePage("+this.pages+")");
                newElement.setAttribute('class', "pageBtn");
                newElement.innerHTML = this.pages;
                parent.appendChild(newElement);
            },

            removePages: function() {
                for(let i = 1; i <= this.pages ; i++) {    
                    var pgBttn = document.getElementById("page#" + i);
                    pgBttn.parentNode.removeChild(pgBttn);
                }
                this.pages = 0;
            },

            handlePage: function(page) {
                this.currpg = page - 1;
                this.drawTable();
            },
        }
    }
</script>