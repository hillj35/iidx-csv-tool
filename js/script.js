



/*
********************************************************************************
*                          Filtering Functions                                 *
********************************************************************************
*/

function rnkFilter(){
    tempList = [];

    for (let i = 0; i < cmbListCpy.length; i++) {
        var rnk = cmbListCpy[i].rank;
        var lvl = cmbListCpy[i].level;

        // Have a list of flags here, if set push them in
        if (tick_aaa) if(rnk == "AAA") tempList.push(cmbListCpy[i]);
        if (tick_aa)  if(rnk == "AA")  tempList.push(cmbListCpy[i]);
        if (tick_a)   if(rnk == "A")   tempList.push(cmbListCpy[i]);
        if (tick_b)   if(rnk == "B")   tempList.push(cmbListCpy[i]);
        if (tick_c)   if(rnk == "C")   tempList.push(cmbListCpy[i]);
        if (tick_d)   if(rnk == "D")   tempList.push(cmbListCpy[i]);
        if (tick_e)   if(rnk == "E")   tempList.push(cmbListCpy[i]);
        if (tick_f)   if(rnk == "F")   tempList.push(cmbListCpy[i]);
    }
    cmbListCpy = tempList;
}


function lvlFilter(){
    tempList = [];

    for (let i = 0; i < cmbListCpy.length; i++) {
        var lvl = cmbListCpy[i].level;

        // Have a list of flags here, if set push them in
        if (tick_12) if(lvl == "12") tempList.push(cmbListCpy[i]);
        if (tick_11) if(lvl == "11") tempList.push(cmbListCpy[i]);
        if (tick_10) if(lvl == "10") tempList.push(cmbListCpy[i]);
        if (tick_9) if(lvl == "9") tempList.push(cmbListCpy[i]);
        if (tick_8) if(lvl == "8") tempList.push(cmbListCpy[i]);
        if (tick_7) if(lvl == "7") tempList.push(cmbListCpy[i]);
        if (tick_6) if(lvl == "6") tempList.push(cmbListCpy[i]);
        if (tick_5) if(lvl == "5") tempList.push(cmbListCpy[i]);
        if (tick_4) if(lvl == "4") tempList.push(cmbListCpy[i]);
        if (tick_3) if(lvl == "3") tempList.push(cmbListCpy[i]);
        if (tick_2) if(lvl == "2") tempList.push(cmbListCpy[i]);
        if (tick_1) if(lvl == "1") tempList.push(cmbListCpy[i]);
    }
    cmbListCpy = tempList;
}


function clrFilter(){
    tempList = [];

    for (let i = 0; i < cmbListCpy.length; i++) {
        var chart = cmbListCpy[i].chart;
        var clr = cmbListCpy[i].clear;

        // Have a list of flags here, if set push them in
        if (tick_fc) if(clr == "FULLCOMBO CLEAR") tempList.push(cmbListCpy[i]);
        if (tick_exhc) if(clr == "EX HARD CLEAR") tempList.push(cmbListCpy[i]);
        if (tick_hc) if(clr == "HARD CLEAR")      tempList.push(cmbListCpy[i]);
        if (tick_nc) if(clr == "CLEAR")           tempList.push(cmbListCpy[i]);
        if (tick_ec) if(clr == "EASY CLEAR")      tempList.push(cmbListCpy[i]);
        if (tick_ac) if(clr == "ASSIST CLEAR")    tempList.push(cmbListCpy[i]);
        if (tick_fd) if(clr == "FAILED")          tempList.push(cmbListCpy[i]);
        if (tick_np) if(clr == "NO PLAY")         tempList.push(cmbListCpy[i]);
    }
    cmbListCpy = tempList;
}


function styFilter(){

    tempList = [];

    for (let i = 0; i < cmbListCpy.length; i++) {
        var sty = cmbListCpy[i].style;

        // Have a list of flags here, if set push them in
        if (tick_1st) if (sty == "1st&substream")   tempList.push(cmbListCpy[i]);
        if (tick_2nd) if (sty == "2nd style")       tempList.push(cmbListCpy[i]);
        if (tick_3rd) if (sty == "3rd style")       tempList.push(cmbListCpy[i]);
        if (tick_4th) if (sty == "4th style")       tempList.push(cmbListCpy[i]);
        if (tick_5th) if (sty == "5th style")       tempList.push(cmbListCpy[i]);
        if (tick_6th) if (sty == "6th style")       tempList.push(cmbListCpy[i]);
        if (tick_7th) if (sty == "7th style")       tempList.push(cmbListCpy[i]);
        if (tick_8th) if (sty == "8th style")       tempList.push(cmbListCpy[i]);
        if (tick_9th) if (sty == "9th style")       tempList.push(cmbListCpy[i]);
        if (tick_10th) if (sty == "10th style")     tempList.push(cmbListCpy[i]);
        if (tick_11th) if (sty == "IIDX RED")       tempList.push(cmbListCpy[i]);
        if (tick_12th) if (sty == "HAPPY SKY")      tempList.push(cmbListCpy[i]);
        if (tick_13th) if (sty == "DistorteD")      tempList.push(cmbListCpy[i]);
        if (tick_14th) if (sty == "GOLD")           tempList.push(cmbListCpy[i]);
        if (tick_15th) if (sty == "DJ TROOPERS")    tempList.push(cmbListCpy[i]);
        if (tick_16th) if (sty == "EMPRESS")        tempList.push(cmbListCpy[i]);
        if (tick_17th) if (sty == "SIRIUS")         tempList.push(cmbListCpy[i]);
        if (tick_18th) if (sty == "Resort Anthem")  tempList.push(cmbListCpy[i]);
        if (tick_19th) if (sty == "Lincle")         tempList.push(cmbListCpy[i]);
        if (tick_20th) if (sty == "tricoro")        tempList.push(cmbListCpy[i]);
        if (tick_21st) if (sty == "SPADA")          tempList.push(cmbListCpy[i]);
        if (tick_22nd) if (sty == "PENDUAL")        tempList.push(cmbListCpy[i]);
        if (tick_23rd) if (sty == "copula")         tempList.push(cmbListCpy[i]);
        if (tick_24th) if (sty == "SINOBUZ")        tempList.push(cmbListCpy[i]);
        if (tick_25th) if (sty == "CANNON BALLERS") tempList.push(cmbListCpy[i]);
        if (tick_26th) if (sty == "Rootage")        tempList.push(cmbListCpy[i]);
    }

    cmbListCpy = tempList;

}


function noBpiFilter(){
    tempList = [];

    for (let i = 0; i < cmbListCpy.length; i++) {
        var bpi = cmbListCpy[i].bpi;
        
        if(bpi > -99.99) tempList.push(cmbListCpy[i]);
        else if(tick_noBpi) tempList.push(cmbListCpy[i]);
    }
    cmbListCpy = tempList;
}



/*
********************************************************************************
*                      Functions that manage the Table                         *
********************************************************************************
*/

function uploadButton() {
    combineClasses();
    resetTable();
}

function resetTable() {
    // Copy list
    cmbListCpy = cmbList;

    drawTable();
}

// *************** This is essentially the main function!!! ********************
function drawTable() {
    // Get the table ID
    var table = document.getElementById("songTable");

    // Need to clear table before filling it out again
    clearTable();

    // Row tracking
    var rowCount = 0;

    // Flag checking
    getFlags();

    // Filtering
    rnkFilter();
    lvlFilter();
    clrFilter();
    styFilter();
    noBpiFilter();

    // Erase old buttons
    removePages();

    // Set up page buttons
    setPageBttns();


    // Get results for footer
    getResults();

    // Check if drawing a blank page
    if(currPg + 1 > pages) currPg = pages - 1;
    if(currPg < 0) currPg = 0;

    // Set page offset
    let offset = currPg * limit;


    // Loop through list of Songs
    for (let i = offset; i < cmbListCpy.length; i++) {
        // Draw Limit
        if(i >= offset + limit) break;

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
        bpi_colors = getBpiColors(bpi);
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
    storeResults();

}
// ************************* Main function end!!! ******************************


function clearTable() { 
    // Get the table ID
    var table = document.getElementById("songTable");

    //Clear table
    var tableHeaderRowCount = 0;
    var rowCount = table.rows.length - 1;

    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}



/*
********************************************************************************
*                  Functions used for Table CSS                                *
********************************************************************************
*/

function getStyleColors(sty){
    var colors = []; // fg = 0, bg = 1
    var fg = "black";
    var bg = "white";

    if (sty == "1st&substream") { fg = "Khaki"; bg = "Black"; }
    if (sty == "2nd style")     { fg = "Khaki"; bg = "MidnightBlue"; }
    if (sty == "3rd style")     { fg = "White"; bg = "PaleVioletRed"; }
    if (sty == "4th style")     { fg = "Red"; bg = "Silver"; }
    if (sty == "5th style")     { fg = "Blue"; bg = "Orange"; }
    if (sty == "6th style")     { fg = "Thistle"; bg = "White"; }
    if (sty == "7th style")     { fg = "Orange";bg = "Silver"; }
    if (sty == "8th style")     { fg = "Black"; bg = "Orange"; }
    if (sty == "9th style")     { fg = "RoyalBlue"; bg = "Black"; }
    if (sty == "10th style")    { fg = "Red"; bg = "Blue"; }
    if (sty == "IIDX RED")      { fg = "Red"; bg = "DarkRed"; }
    if (sty == "HAPPY SKY")     { fg = "White"; bg = "SkyBlue"; }
    if (sty == "DistorteD")     { fg = "LimeGreen"; bg = "Black"; }
    if (sty == "GOLD")          { fg = "Black"; bg = "Gold"; }
    if (sty == "DJ TROOPERS")   { fg = "Olive"; bg = "DarkGreen"; }
    if (sty == "EMPRESS")       { fg = "Pink"; bg = "MediumOrchid"; }
    if (sty == "SIRIUS")        { fg = "LightSteelBlue"; bg = "SteelBlue"; }
    if (sty == "Resort Anthem") { fg = "Orange"; bg = "Red"; }
    if (sty == "Lincle")        { fg = "Orange"; bg = "Cyan"; }
    if (sty == "tricoro")       { fg = "White"; bg = "LightGrey"; }
    if (sty == "SPADA")         { fg = "Red"; bg = "Black"; }
    if (sty == "PENDUAL")       { fg = "Silver"; bg = "Purple"; }
    if (sty == "copula")        { fg = "White"; bg = "Gold"; }
    if (sty == "SINOBUZ")       { fg = "Grey"; bg = "Black"; }
    if (sty == "CANNON BALLERS"){ fg = "Green"; bg = "Silver"; }
    if (sty == "Rootage")       { fg = "Orange"; bg = "Black"; }

    colors.push(fg);
    colors.push(bg);

    return colors;
}



/*
********************************************************************************
*                            Page Functions                                    *
********************************************************************************
*/

function setPageBttns(){
    // Get total pages
    var ttlpages = cmbListCpy.length / limit;
    var ttlpagesCpy = ttlpages;
    ttlpages = ttlpages.toFixed(0);

    // Get fractional pages
    var pgFraction = (ttlpagesCpy - ttlpages);
    if(pgFraction > 0 && pgFraction < 0.5) ttlpages++;

    for(let i = 0; i < ttlpages ; i++) addPage();
}


function addPage() {
    pages++;

    var parent = document.getElementById("pageButtons");
    var newElement = document.createElement("Button");
    newElement.setAttribute('id', "page#" + pages);
    newElement.setAttribute('onclick', "handlePage("+pages+")");
    newElement.setAttribute('class', "pageBtn");
    newElement.innerHTML = pages;
    parent.appendChild(newElement);
}

function removePages() {
    for(let i = 1; i <= pages ; i++) {    
        var pgBttn = document.getElementById("page#" + i);
        pgBttn.parentNode.removeChild(pgBttn);
    }
    pages = 0;
}

function handlePage(page) {
    currPg = page - 1;
    drawTable();
}