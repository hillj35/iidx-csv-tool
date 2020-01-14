/*
********************************************************************************
*                                  Global Data                                 *
********************************************************************************
*/

// Use as read-only
songList = [];
songDataList = [];
cmbList = [];

// Read-write copy
songListCpy = [];
songDataListCpy = [];
cmbListCpy = [];


// Tick boxes for ranks
var tick_aaa = true;
var tick_aa = true;
var tick_a = true;
var tick_b = true;
var tick_c = true;
var tick_d = true;
var tick_e = true;
var tick_f = true;

// Tick boxes for levels
var tick_1 = true;
var tick_2 = true;
var tick_3 = true;
var tick_4 = true;
var tick_5 = true;
var tick_6 = true;
var tick_7 = true;
var tick_8 = true;
var tick_9 = true;
var tick_10 = true;
var tick_11 = true;
var tick_12 = true;

// Tick boxes for clears
var tick_fc = true;
var tick_exhc = true;
var tick_hc = true;
var tick_nc = true;
var tick_ec = true;
var tick_ac = true;
var tick_fd = true;
var tick_np = true;

// Tick boxes for styles
var tick_1st = true;
var tick_2nd = true;
var tick_3rd = true;
var tick_4th = true;
var tick_5th = true;
var tick_6th = true;
var tick_7th = true;
var tick_8th = true;
var tick_9th = true;
var tick_10th = true;
var tick_11th = true;
var tick_12th = true;
var tick_13th = true;
var tick_14th = true;
var tick_15th = true;
var tick_16th = true;
var tick_17th = true;
var tick_18th = true;
var tick_19th = true;
var tick_20th = true;
var tick_21st = true;
var tick_22nd = true;
var tick_23rd = true;
var tick_24th = true;
var tick_25th = true;
var tick_26th = true;

// Ticks for BPI
var tick_noBpi = true;

// Flags for sorting
var isStyAsc = false;
var isLvlAsc = false;
var isClrAsc = false;
var isRnkAsc = false;
var isTitlAsc = false;
var isPlysAsc = false;
var isMissAsc = false;
var isExAsc = false;
var isPrcntAsc = false;
var isBpiAsc = false;

// Draw Limit
var limit = 50;

// Page Variables
var currPg = 0;
var pages = 0;

// Variables for tracking data
var ttlSongs;
var songsClr;
var songsFC;
var songsHC;
var songsEXHC;
var songsAAA;

// ID lists
rnkIDList = ["rank_aaa", "rank_aa", "rank_a", "rank_b",
             "rank_c", "rank_d", "rank_e", "rank_f"];

clrIDList = ["clear_fc", "clear_exhc", "clear_hc", "clear_nc", 
             "clear_ec", "clear_ac", "clear_fd", "clear_np"];

lvlIDList = ["level1", "level2", "level3", "level4", "level5", "level6", 
             "level7", "level8", "level9", "level10", "level11", "level12"];
             
styIDList = ["style1", "style2", "style3", "style4", "style5", "style6", 
             "style7", "style8", "style9", "style10", "style11", "style12",
             "style13", "style14", "style15", "style16", "style17", "style18",
             "style19", "style20", "style21", "style22", "style23", "style24",
             "style25", "style26"];



/*
********************************************************************************
*                                  Song Class                                  *
********************************************************************************
*/

let Song = class {
    constructor(style, title, genre, artist, plays, 
                diff_N, ex_N, pgreats_N, greats_N, misses_N, clear_N, rank_N, 
                diff_H, ex_H, pgreats_H, greats_H, misses_H, clear_H, rank_H, 
                diff_A, ex_A, pgreats_A, greats_A, misses_A, clear_A, rank_A, 
                last_play) {

        this.style = style;
        this.title = title;
        this.genre = genre;
        this.artist = artist;
        this.plays = plays;

        this.diff_N = diff_N;
        this.ex_N = ex_N;
        this.pgreats_N = pgreats_N;
        this.greats_N = greats_N;
        this.misses_N = misses_N;
        this.clear_N = clear_N;
        this.rank_N = rank_N;
        
        this.diff_H = diff_H;
        this.ex_H = ex_H;
        this.pgreats_H = pgreats_H;
        this.greats_H = greats_H;
        this.misses_H = misses_H;
        this.clear_H = clear_H;
        this.rank_H = rank_H;

        this.diff_A = diff_A;
        this.ex_A = ex_A;
        this.pgreats_A = pgreats_A;
        this.greats_A = greats_A;
        this.misses_A = misses_A;
        this.clear_A = clear_A;
        this.rank_A = rank_A;

        this.last_play = last_play;
    }
};



/*
********************************************************************************
*                              SongData Class                                  *
********************************************************************************
*/

let SongData = class {
    constructor(style, title, artist, genre,
                diff_N, notes_N, record_N, kavg_N,
                diff_H, notes_H, record_H, kavg_H,
                diff_A, notes_A, record_A, kavg_A) {
                
        this.style = style;
        this.title = title;
        this.artist = artist;
        this.genre = genre;

        this.diff_N = diff_N;
        this.notes_N = notes_N;
        this.record_N = record_N;
        this.kavg_N = kavg_N;
    
        this.diff_H = diff_H;
        this.notes_H = notes_H;
        this.record_H = record_H;
        this.kavg_H = kavg_H;
    
        this.diff_A = diff_A;
        this.notes_A = notes_A;
        this.record_A = record_A;
        this.kavg_A = kavg_A;

    }
};


/*
********************************************************************************
*                         Combined Data Class                                  *
********************************************************************************
*/

let CmbData = class {
    constructor(style, title, genre, artist, plays, chart, level, ex,
                percent, misses, clear, rank, notes, record, kavg, bpi) {

        this.style = style;
        this.title = title;
        this.genre = genre;
        this.artist = artist;
        this.plays = plays;

        this.chart = chart;
        this.level = level;
        this.ex = ex;
        this.percent = percent;
        this.misses = misses;
        this.clear = clear;
        this.rank = rank;

        this.notes = notes;
        this.record = record;
        this.kavg = kavg;
        this.bpi = bpi;

    }
};



/*
********************************************************************************
*                           Update Tick Vars Functions                         *
********************************************************************************
*/

function getFlags(){
    tick_aaa = document.getElementById("rank_aaa").checked;
    tick_aa = document.getElementById("rank_aa").checked;
    tick_a = document.getElementById("rank_a").checked;
    tick_b = document.getElementById("rank_b").checked;
    tick_c = document.getElementById("rank_c").checked;
    tick_d = document.getElementById("rank_d").checked;
    tick_e = document.getElementById("rank_e").checked;
    tick_f = document.getElementById("rank_f").checked;

    tick_fc = document.getElementById("clear_fc").checked;
    tick_exhc = document.getElementById("clear_exhc").checked;
    tick_hc = document.getElementById("clear_hc").checked;
    tick_nc = document.getElementById("clear_nc").checked;
    tick_ec = document.getElementById("clear_ec").checked;
    tick_ac = document.getElementById("clear_ac").checked;
    tick_fd = document.getElementById("clear_fd").checked;
    tick_np = document.getElementById("clear_np").checked;

    tick_1 = document.getElementById("level1").checked;
    tick_2 = document.getElementById("level2").checked;
    tick_3 = document.getElementById("level3").checked;
    tick_4 = document.getElementById("level4").checked;
    tick_5 = document.getElementById("level5").checked;
    tick_6 = document.getElementById("level6").checked;
    tick_7 = document.getElementById("level7").checked;
    tick_8 = document.getElementById("level8").checked;
    tick_9 = document.getElementById("level9").checked;
    tick_10 = document.getElementById("level10").checked;
    tick_11 = document.getElementById("level11").checked;
    tick_12 = document.getElementById("level12").checked;

    tick_1st = document.getElementById("style1").checked;
    tick_2nd = document.getElementById("style2").checked;
    tick_3rd = document.getElementById("style3").checked;
    tick_4th = document.getElementById("style4").checked;
    tick_5th = document.getElementById("style5").checked;
    tick_6th = document.getElementById("style6").checked;
    tick_7th = document.getElementById("style7").checked;
    tick_8th = document.getElementById("style8").checked;
    tick_9th = document.getElementById("style9").checked;
    tick_10th = document.getElementById("style10").checked;
    tick_11th = document.getElementById("style11").checked;
    tick_12th = document.getElementById("style12").checked;
    tick_13th = document.getElementById("style13").checked;
    tick_14th = document.getElementById("style14").checked;
    tick_15th = document.getElementById("style15").checked;
    tick_16th = document.getElementById("style16").checked;
    tick_17th = document.getElementById("style17").checked;
    tick_18th = document.getElementById("style18").checked;
    tick_19th = document.getElementById("style19").checked;
    tick_20th = document.getElementById("style20").checked;
    tick_21st = document.getElementById("style21").checked;
    tick_22nd = document.getElementById("style22").checked;
    tick_23rd = document.getElementById("style23").checked;
    tick_24th = document.getElementById("style24").checked;
    tick_25th = document.getElementById("style25").checked;
    tick_26th = document.getElementById("style26").checked;

    tick_noBpi = document.getElementById("noBpi").checked;
}

// ******************** Tick All Functions *************************************

function setRanks(){
    for(var i=0 ; i < rnkIDList.length ; i++)
        document.getElementById(rnkIDList[i]).checked = true;
    resetTable();
}

function setClears(){
    for(var i=0 ; i < clrIDList.length ; i++)
        document.getElementById(clrIDList[i]).checked = true;
    resetTable();
}

function setLevels(){
    for(var i=0 ; i < lvlIDList.length ; i++)
        document.getElementById(lvlIDList[i]).checked = true;
    resetTable();
}

function setStyles(){
    for(var i=0 ; i < styIDList.length ; i++)
        document.getElementById(styIDList[i]).checked = true;
    resetTable();
}


// ******************** Untick All Functions ***********************************

function resetRanks(){
    for(var i=0 ; i < rnkIDList.length ; i++)
        document.getElementById(rnkIDList[i]).checked = false;
    drawTable();
}

function resetClears(){
    for(var i=0 ; i < clrIDList.length ; i++)
        document.getElementById(clrIDList[i]).checked = false;
    drawTable();
}

function resetLevels(){
    for(var i=0 ; i < lvlIDList.length ; i++)
        document.getElementById(lvlIDList[i]).checked = false;
    drawTable();
}

function resetStyles(){
    for(var i=0 ; i < styIDList.length ; i++)
        document.getElementById(styIDList[i]).checked = false;
    drawTable();
}





/*
********************************************************************************
*                      Live update for tick boxes                              *
********************************************************************************
*/

function liveUpdate(state){
    if(state) resetTable();
    else drawTable();
}




/*
********************************************************************************
*                             Sorting Functions                                *
********************************************************************************
*/


// ******************** Main functions for sorts *******************************
function clrSort() {
    if(isClrAsc) { 
        clrSortDesc();
        isClrAsc = false;
    }
    else {
        clrSortAsc();
        isClrAsc = true;
    }
}

function stySort() {
    if(isStyAsc) { 
        stySortDesc();
        isStyAsc = false;
    }
    else {
        stySortAsc();
        isStyAsc = true;
    }
}

function rnkSort() {
    if(isRnkAsc) { 
        rnkSortDesc();
        isRnkAsc = false;
    }
    else {
        rnkSortAsc();
        isRnkAsc = true;
    }
}

function prcntSort() {
    if(isPrcntAsc) { 
        prcntSortDesc();
        isPrcntAsc = false;
    }
    else {
        prcntSortAsc();
        isPrcntAsc = true;
    }
}

function bpiSort() {
    if(isBpiAsc) { 
        bpiSortDesc();
        isBpiAsc = false;
    }
    else {
        bpiSortAsc();
        isBpiAsc = true;
    }
}

function lvlSort() {
    if(isLvlAsc) { 
        lvlSortDesc();
        isLvlAsc = false;
    }
    else {
        lvlSortAsc();
        isLvlAsc = true;
    }
}

function titlSort() {
    if(isTitlAsc) { 
        titlSortDesc();
        isTitlAsc = false;
    }
    else {
        titlSortAsc();
        isTitlAsc = true;
    }
}


function plysSort() {
    if(isPlysAsc) { 
        plysSortDesc();
        isPlysAsc = false;
    }
    else {
        plysSortAsc();
        isPlysAsc = true;
    }
}


function exSort() {
    if(isExAsc) { 
        exSortDesc();
        isExAsc = false;
    }
    else {
        exSortAsc();
        isExAsc = true;
    }
}

function missSort() {
    if(isMissAsc) { 
        missSortDesc();
        isMissAsc = false;
    }
    else {
        missSortAsc();
        isMissAsc = true;
    }
}


// ************** Acsending and Descending functions for sorts *****************

function missSortAsc() {
    cmbListCpy.sort(function(a, b) {
        var missA = a.misses * 1;
        var missB = b.misses * 1;

        return (missA < missB) ? -1 : (missA > missB) ? 1 : 0;
    });
    
    drawTable();
}

function missSortDesc() { 
    cmbListCpy.sort(function(a, b) {
        var missA = a.misses * 1;
        var missB = b.misses * 1;

        return (missA > missB) ? -1 : (missA < missB) ? 1 : 0;
    });

    drawTable();
}



function exSortAsc() {
    cmbListCpy.sort(function(a, b) {
        var exA = a.ex * 1;
        var exB = b.ex * 1;

        return (exA < exB) ? -1 : (exA > exB) ? 1 : 0;
    });

    drawTable();
}

function exSortDesc() { 
    cmbListCpy.sort(function(a, b) {
        var exA = a.ex * 1;
        var exB = b.ex * 1;

        return (exA > exB) ? -1 : (exA < exB) ? 1 : 0;
    });

    drawTable();
}



function plysSortAsc() {
    cmbListCpy.sort(function(a, b) {
        var plysA = a.plays * 1;
        var plysB = b.plays * 1;
        return (plysA < plysB) ? -1 : (plysA > plysB) ? 1 : 0;
    });

    drawTable();
}

function plysSortDesc() {
    cmbListCpy.sort(function(a, b) {
        var plysA = a.plays * 1;
        var plysB = b.plays * 1;
        return (plysA > plysB) ? -1 : (plysA < plysB) ? 1 : 0;
    });

    drawTable();
}




function prcntSortAsc() {
    cmbListCpy.sort(function(a, b) {
        var prcntA = a.percent * 1;
        var prcntB = b.percent * 1;

        return (prcntA < prcntB) ? -1 : (prcntA > prcntB) ? 1 : 0;
    });

    drawTable();
}

function prcntSortDesc() { 
    cmbListCpy.sort(function(a, b) {
        var prcntA = a.percent * 1;
        var prcntB = b.percent * 1;

        return (prcntA > prcntB) ? -1 : (prcntA < prcntB) ? 1 : 0;
    });
    
    drawTable();
}



function bpiSortAsc() {
    cmbListCpy.sort(function(a, b) {
        var bpiA = a.bpi * 1;
        var bpiB = b.bpi * 1;

        return (bpiA < bpiB) ? -1 : (bpiA > bpiB) ? 1 : 0;
    });
    
    drawTable();
}

function bpiSortDesc() { 
    cmbListCpy.sort(function(a, b) {
        var bpiA = a.bpi * 1;
        var bpiB = b.bpi * 1;

        return (bpiA > bpiB) ? -1 : (bpiA < bpiB) ? 1 : 0;
    });

    drawTable();
}



function rnkSortDesc() {
    tempList = [];

    // Descending
    for (let i = 1; i < 9 ; i++) {
        for (let j = 0; j < cmbListCpy.length; j++) {
            var rnk = cmbListCpy[j].rank;
            var lvl = cmbListCpy[j].level;

            switch (i) {
                case 1: if (rnk == "AAA") tempList.push(cmbListCpy[j]); break;
                case 2: if (rnk == "AA")  tempList.push(cmbListCpy[j]); break;
                case 3: if (rnk == "A")   tempList.push(cmbListCpy[j]); break;
                case 4: if (rnk == "B")   tempList.push(cmbListCpy[j]); break;
                case 5: if (rnk == "C")   tempList.push(cmbListCpy[j]); break;
                case 6: if (rnk == "D")   tempList.push(cmbListCpy[j]); break;
                case 7: if (rnk == "E")   tempList.push(cmbListCpy[j]); break;
                case 8: if (rnk == "F")   tempList.push(cmbListCpy[j]);
            }
        }
    }

    cmbListCpy = tempList;
    drawTable();
}

function rnkSortAsc() {
    tempList = [];

    // Ascending
    for (let i = 1; i < 9 ; i++) {
        for (let j = 0; j < cmbListCpy.length; j++) {
            var rnk = cmbListCpy[j].rank;
            var lvl = cmbListCpy[j].level;

            switch (i) {
                case 1: if (rnk == "F")   tempList.push(cmbListCpy[j]); break;
                case 2: if (rnk == "E")   tempList.push(cmbListCpy[j]); break;
                case 3: if (rnk == "D")   tempList.push(cmbListCpy[j]); break;
                case 4: if (rnk == "C")   tempList.push(cmbListCpy[j]); break;
                case 5: if (rnk == "B")   tempList.push(cmbListCpy[j]); break;
                case 6: if (rnk == "A")   tempList.push(cmbListCpy[j]); break;
                case 7: if (rnk == "AA")  tempList.push(cmbListCpy[j]); break;
                case 8: if (rnk == "AAA") tempList.push(cmbListCpy[j]);
            }
        }
    }

    cmbListCpy = tempList;
    drawTable();
}



function lvlSortAsc() {
    tempList = [];

    // Ascending
    for (let i = 1; i < 13 ; i++) {
        for (let j = 0; j < cmbListCpy.length; j++) {
            var lvl = cmbListCpy[j].level;

            switch (i) {
                case 1: if (lvl == "1")   tempList.push(cmbListCpy[j]); break;
                case 2: if (lvl == "2")   tempList.push(cmbListCpy[j]); break;
                case 3: if (lvl == "3")   tempList.push(cmbListCpy[j]); break;
                case 4: if (lvl == "4")   tempList.push(cmbListCpy[j]); break;
                case 5: if (lvl == "5")   tempList.push(cmbListCpy[j]); break;
                case 6: if (lvl == "6")   tempList.push(cmbListCpy[j]); break;
                case 7: if (lvl == "7")   tempList.push(cmbListCpy[j]); break;
                case 8: if (lvl == "8")   tempList.push(cmbListCpy[j]); break;
                case 9: if (lvl == "9")   tempList.push(cmbListCpy[j]); break;
                case 10: if (lvl == "10") tempList.push(cmbListCpy[j]); break;
                case 11: if (lvl == "11") tempList.push(cmbListCpy[j]); break;
                case 12: if (lvl == "12") tempList.push(cmbListCpy[j]);
            }
        }
    }

    cmbListCpy = tempList;
    drawTable();
}

function lvlSortDesc() {
    tempList = [];

    // Ascending
    for (let i = 1; i < 13 ; i++) {
        for (let j = 0; j < cmbListCpy.length; j++) {
            var lvl = cmbListCpy[j].level;

            switch (i) {
                case 1: if (lvl == "12") tempList.push(cmbListCpy[j]); break;
                case 2: if (lvl == "11") tempList.push(cmbListCpy[j]); break;
                case 3: if (lvl == "10") tempList.push(cmbListCpy[j]); break;
                case 4: if (lvl == "9")  tempList.push(cmbListCpy[j]); break;
                case 5: if (lvl == "8")  tempList.push(cmbListCpy[j]); break;
                case 6: if (lvl == "7")  tempList.push(cmbListCpy[j]); break;
                case 7: if (lvl == "6")  tempList.push(cmbListCpy[j]); break;
                case 8: if (lvl == "5")  tempList.push(cmbListCpy[j]); break;
                case 9: if (lvl == "4")  tempList.push(cmbListCpy[j]); break;
                case 10: if (lvl == "3") tempList.push(cmbListCpy[j]); break;
                case 11: if (lvl == "2") tempList.push(cmbListCpy[j]); break;
                case 12: if (lvl == "1") tempList.push(cmbListCpy[j]);
            }
        }
    }

    cmbListCpy = tempList;
    drawTable();
}



function clrSortAsc(){
    tempList = [];

    // Ascending
    for (let i = 1; i < 9 ; i++) {
        for (let j = 0; j < cmbListCpy.length; j++) {
            var lvl = cmbListCpy[j].level;
            var clr = cmbListCpy[j].clear;

            switch (i) {
                case 1: if (clr == "NO PLAY")         tempList.push(cmbListCpy[j]); break;
                case 2: if (clr == "FAILED")          tempList.push(cmbListCpy[j]); break;
                case 3: if (clr == "ASSIST CLEAR")    tempList.push(cmbListCpy[j]); break;
                case 4: if (clr == "EASY CLEAR")      tempList.push(cmbListCpy[j]); break;
                case 5: if (clr == "CLEAR")           tempList.push(cmbListCpy[j]); break;
                case 6: if (clr == "HARD CLEAR")      tempList.push(cmbListCpy[j]); break;
                case 7: if (clr == "EX HARD CLEAR")   tempList.push(cmbListCpy[j]); break;
                case 8: if (clr == "FULLCOMBO CLEAR") tempList.push(cmbListCpy[j]);
            }
        }
    }

    cmbListCpy = tempList;
    drawTable();

}

function clrSortDesc(){
    tempList = [];

    // Ascending
    for (let i = 1; i < 9 ; i++) {
        for (let j = 0; j < cmbListCpy.length; j++) {
            var lvl = cmbListCpy[j].level;
            var clr = cmbListCpy[j].clear;

            switch (i) {
                case 1: if (clr == "FULLCOMBO CLEAR") tempList.push(cmbListCpy[j]); break;
                case 2: if (clr == "EX HARD CLEAR")   tempList.push(cmbListCpy[j]); break;
                case 3: if (clr == "HARD CLEAR")      tempList.push(cmbListCpy[j]); break;
                case 4: if (clr == "CLEAR")           tempList.push(cmbListCpy[j]); break;
                case 5: if (clr == "EASY CLEAR")      tempList.push(cmbListCpy[j]); break;
                case 6: if (clr == "ASSIST CLEAR")    tempList.push(cmbListCpy[j]); break;
                case 7: if (clr == "FAILED")          tempList.push(cmbListCpy[j]); break;
                case 8: if (clr == "NO PLAY")         tempList.push(cmbListCpy[j]);
            }
        }
    }

    cmbListCpy = tempList;
    drawTable();
}



function stySortAsc(){
    tempList = [];

    // Ascending
    for (let i = 1; i < 27 ; i++) {
        for (let j = 0; j < cmbListCpy.length; j++) {
            var sty = cmbListCpy[j].style;

            switch (i) {
                case 1: if (sty == "1st&substream")   tempList.push(cmbListCpy[j]); break;
                case 2: if (sty == "2nd style")       tempList.push(cmbListCpy[j]); break;
                case 3: if (sty == "3rd style")       tempList.push(cmbListCpy[j]); break;
                case 4: if (sty == "4th style")       tempList.push(cmbListCpy[j]); break;
                case 5: if (sty == "5th style")       tempList.push(cmbListCpy[j]); break;
                case 6: if (sty == "6th style")       tempList.push(cmbListCpy[j]); break;
                case 7: if (sty == "7th style")       tempList.push(cmbListCpy[j]); break;
                case 8: if (sty == "8th style")       tempList.push(cmbListCpy[j]); break;
                case 9: if (sty == "9th style")       tempList.push(cmbListCpy[j]); break;
                case 10: if (sty == "10th style")     tempList.push(cmbListCpy[j]); break;
                case 11: if (sty == "IIDX RED")       tempList.push(cmbListCpy[j]); break;
                case 12: if (sty == "HAPPY SKY")      tempList.push(cmbListCpy[j]); break;
                case 13: if (sty == "DistorteD")      tempList.push(cmbListCpy[j]); break;
                case 14: if (sty == "GOLD")           tempList.push(cmbListCpy[j]); break;
                case 15: if (sty == "DJ TROOPERS")    tempList.push(cmbListCpy[j]); break;
                case 16: if (sty == "EMPRESS")        tempList.push(cmbListCpy[j]); break;
                case 17: if (sty == "SIRIUS")         tempList.push(cmbListCpy[j]); break;
                case 18: if (sty == "Resort Anthem")  tempList.push(cmbListCpy[j]); break;
                case 19: if (sty == "Lincle")         tempList.push(cmbListCpy[j]); break;
                case 20: if (sty == "tricoro")        tempList.push(cmbListCpy[j]); break;
                case 21: if (sty == "SPADA")          tempList.push(cmbListCpy[j]); break;
                case 22: if (sty == "PENDUAL")        tempList.push(cmbListCpy[j]); break;
                case 23: if (sty == "copula")         tempList.push(cmbListCpy[j]); break;
                case 24: if (sty == "SINOBUZ")        tempList.push(cmbListCpy[j]); break;
                case 25: if (sty == "CANNON BALLERS") tempList.push(cmbListCpy[j]); break;
                case 26: if (sty == "Rootage")        tempList.push(cmbListCpy[j]);
            }
        }
    }

    cmbListCpy = tempList;
    drawTable();
}

function stySortDesc(){
    tempList = [];

    // Descending
    for (let i = 26; i > 0 ; i--) {
        for (let j = 0; j < cmbListCpy.length; j++) {
            var sty = cmbListCpy[j].style;

            switch (i) {
                case 1: if (sty == "1st&substream")   tempList.push(cmbListCpy[j]); break;
                case 2: if (sty == "2nd style")       tempList.push(cmbListCpy[j]); break;
                case 3: if (sty == "3rd style")       tempList.push(cmbListCpy[j]); break;
                case 4: if (sty == "4th style")       tempList.push(cmbListCpy[j]); break;
                case 5: if (sty == "5th style")       tempList.push(cmbListCpy[j]); break;
                case 6: if (sty == "6th style")       tempList.push(cmbListCpy[j]); break;
                case 7: if (sty == "7th style")       tempList.push(cmbListCpy[j]); break;
                case 8: if (sty == "8th style")       tempList.push(cmbListCpy[j]); break;
                case 9: if (sty == "9th style")       tempList.push(cmbListCpy[j]); break;
                case 10: if (sty == "10th style")     tempList.push(cmbListCpy[j]); break;
                case 11: if (sty == "IIDX RED")       tempList.push(cmbListCpy[j]); break;
                case 12: if (sty == "HAPPY SKY")      tempList.push(cmbListCpy[j]); break;
                case 13: if (sty == "DistorteD")      tempList.push(cmbListCpy[j]); break;
                case 14: if (sty == "GOLD")           tempList.push(cmbListCpy[j]); break;
                case 15: if (sty == "DJ TROOPERS")    tempList.push(cmbListCpy[j]); break;
                case 16: if (sty == "EMPRESS")        tempList.push(cmbListCpy[j]); break;
                case 17: if (sty == "SIRIUS")         tempList.push(cmbListCpy[j]); break;
                case 18: if (sty == "Resort Anthem")  tempList.push(cmbListCpy[j]); break;
                case 19: if (sty == "Lincle")         tempList.push(cmbListCpy[j]); break;
                case 20: if (sty == "tricoro")        tempList.push(cmbListCpy[j]); break;
                case 21: if (sty == "SPADA")          tempList.push(cmbListCpy[j]); break;
                case 22: if (sty == "PENDUAL")        tempList.push(cmbListCpy[j]); break;
                case 23: if (sty == "copula")         tempList.push(cmbListCpy[j]); break;
                case 24: if (sty == "SINOBUZ")        tempList.push(cmbListCpy[j]); break;
                case 25: if (sty == "CANNON BALLERS") tempList.push(cmbListCpy[j]); break;
                case 26: if (sty == "Rootage")        tempList.push(cmbListCpy[j]);
            }
        }
    }

    cmbListCpy = tempList;
    drawTable();
}



function titlSortAsc(){
    cmbListCpy.sort(function(a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    drawTable();

}

function titlSortDesc(){
    cmbListCpy.sort(function(a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
    });

    drawTable();
}


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



function getBpiColors(bpi){
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







/*
********************************************************************************
*                  Functions used for Data                              *
********************************************************************************
*/

function getResults(){
    //Reset data
    songsAAA = 0;
    songsFC = 0;
    songsEXHC = 0;
    songsHC = 0;
    songsClr = 0;

    for (let i = 0; i < cmbListCpy.length; i++) {
        // Extract data from classes
        var clr = cmbListCpy[i].clear;
        var rnk = cmbListCpy[i].rank;

        // Find clear
        switch (clr) {
            case "FULLCOMBO CLEAR": songsFC++; songsEXHC++; songsHC++; songsClr++; break;
            case "EX HARD CLEAR":   songsEXHC++; songsHC++; songsClr++; break;
            case "HARD CLEAR":      songsHC++; songsClr++; break;
            case "CLEAR":           songsClr++; break;
            case "EASY CLEAR":      songsClr++; break;
            case "ASSIST CLEAR":    break;
            case "FAILED":          break;
            case "NO PLAY":         break;
        }

        //Find rank
        switch (rnk) {
            case "AAA": songsAAA++; break;
            case "AA":  break;
            case "A":   break;
            case "B":   break;
            case "C":   break;
            case "D":   break;
            case "E":   break;
            case "F":   break;
        }
    }
}


function storeResults() {
    ttlSongs = cmbListCpy.length;

    prcntAAA = (songsAAA/ttlSongs)*100.00;
    prcntAAA = prcntAAA.toFixed(1);

    prcntFC = (songsFC/ttlSongs)*100.00;
    prcntFC = prcntFC.toFixed(1);

    prcntEXHC = (songsEXHC/ttlSongs)*100.00;
    prcntEXHC = prcntEXHC.toFixed(1);

    prcntHC = (songsHC/ttlSongs)*100.00;
    prcntHC = prcntHC.toFixed(1);

    prcntClr = (songsClr/ttlSongs)*100.00;
    prcntClr = prcntClr.toFixed(1);

    document.getElementById("pageData").innerHTML = "Page: " + (currPg+1) + " / " + pages;
    document.getElementById("clrData").innerHTML = "Cleared: " + prcntClr + "%";
    document.getElementById("hcData").innerHTML = "HC'd: " + prcntHC + "%";
    document.getElementById("exhcData").innerHTML = "EXHC'd: " + prcntEXHC + "%";
    document.getElementById("fcData").innerHTML = "FC'd: " + prcntFC + "%";
    document.getElementById("aaaData").innerHTML = "AAA'd: " + prcntAAA + "%";
    document.getElementById("ttlData").innerHTML = "Total Results: " + ttlSongs;
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


/*
********************************************************************************
*                            All of the CSV stuff                              *
********************************************************************************
*/

function handleFiles(files) {
    if (window.FileReader) {
        getAsText(files[0]);
    }
}

function getAsText(fileToRead) {
    let reader = new FileReader();
    reader.readAsText(fileToRead);
    reader.onload = loadHandler;
}


function loadHandler(event) {
    let csv = event.target.result;
    processData(csv);
}


function processData(csv) {
    let rows = csv.split('\n');

    // Clear songList
    songList = [];

    for (let i = 0; i < rows.length; i++) {
        let cols = rows[i].split(',');
        songList.push(new Song(cols[0], cols[1], cols[2], cols[3], cols[4], cols[5], 
                               cols[6], cols[7], cols[8], cols[9], cols[10],cols[11],
                               cols[12],cols[13],cols[14],cols[15],cols[16],cols[17],
                               cols[18],cols[19],cols[20],cols[21],cols[22],cols[23],
                               cols[24],cols[25],cols[26]));
    }
}








function handleDataFiles(files) {
    if (window.FileReader) {
        getDataAsText(files[0]);
    }
}

function getDataAsText(fileToRead) {
    let reader = new FileReader();
    reader.readAsText(fileToRead);
    reader.onload = loadDataHandler;
}


function loadDataHandler(event) {
    let csv = event.target.result;

    let rows = csv.split('\n');

    // Clear songList
    songDataList = [];

    for (let i = 0; i < rows.length; i++) {
        let cols = rows[i].split(',');
        songDataList.push(new SongData(cols[0], cols[1], cols[2], cols[3],
                                       cols[4], cols[5], cols[6], cols[7], 
                                       cols[8], cols[9], cols[10],cols[11],
                                       cols[12],cols[13],cols[14],cols[15]));
    }
}



/*
********************************************************************************
*                           Creating the final array                           *
********************************************************************************
*/

function combineClasses(){
        // Reset combined class
        cmbList = [];

        // Get song data
        var isFound = false;
        var dataIndx = 0;
        for (let i = 1; i < songList.length; i++) {
            var styl = songList[i].style;
            var titl = songList[i].title;
            var genre = songList[i].genre;
            var artist = songList[i].artist;
            var chart = "A";
            var lvl = songList[i].diff_A;
            var leggChk = songList[i].diff_H;
            var clr = songList[i].clear_A;
            var rnk = songList[i].rank_A;
            var ex = songList[i].ex_A;
            var miss = songList[i].misses_A;
            var plyCnt = songList[i].plays;
            var notes = 0;
            var record = 0;
            var kavg = 0;
            var prcnt  = 0.0;
            var bpi = 0.00;

            // Check if hyper
            if(lvl == 0) { 
                chart = "H";
                lvl = songList[i].diff_H;
                clr = songList[i].clear_H;
                rnk = songList[i].rank_H;
                ex = songList[i].ex_H;
                miss = songList[i].misses_H;
            }

            // Check if Leggendaria
            if(leggChk == 0) chart = "L";

            for (let j = 1; j < songDataList.length; j++) {
                var titlDat = songDataList[j].title;
                var stylDat = songDataList[j].style;

                if((titl == titlDat) && (styl == stylDat)) {
                    isFound = true;

                    notes = songDataList[j].notes_A;
                    record = songDataList[j].record_A;
                    kavg = songDataList[j].kavg_A;

                    if(chart == "H") { 
                        notes = songDataList[j].notes_H;
                        record = songDataList[j].record_H;
                        kavg = songDataList[j].kavg_H;
                    }

                    break;
                }
            }

            if(!isFound){
                console.log(titl + " not found!");
            }

            // Find Percentage
            if(notes > 0) {
                prcnt = ex / (notes*2);
                prcnt = prcnt * 100.00;
            }
            prcnt = prcnt.toFixed(1);


            // Find BPI
            bpi = bpiCalc((notes*2), kavg, record, ex);
            bpi = bpi.toFixed(2);


            cmbList.push(new CmbData(styl, titl, genre, artist, plyCnt, chart, lvl, ex, prcnt, miss, clr, rnk, notes, record, kavg, bpi));

        }

}




/*
********************************************************************************
*                              BPI Function                                    *
********************************************************************************
*/
function bpiCalc(m, k, z, s){
    m = m * 1.00; // MAX EX 
    k = k * 1.00; // Kaiden Average
    z = z * 1.00; // Server Record
    s = s * 1.00; // Your Score

    // Check if data is present for BPI calculation
    if (k == 0) return -99.99;

    // Code I didn't write, study and comment
    var sr =  s / m;
    var kr = k / m;
    var mr = z / m;

    // Check if sever record is maxed
    if (mr == 1) mr -= 0.0001;

    // Check if your score is a new record
    if (s == m) sp = m;
    else sp = 1 / (1 -sr );

    var kp = 1 / (1 - kr);
    var mp = 1 / (1 - mr);

    if (sp >= kp) bpi = 100 * Math.pow(Math.log(sp/kp),1.5) / Math.pow(Math.log(mp/kp),1.5);
    else bpi = - 100 * Math.pow(-Math.log(sp/kp),1.5) / Math.pow(Math.log(mp/kp),1.5);

    // Return bpi value
    return bpi;
}

