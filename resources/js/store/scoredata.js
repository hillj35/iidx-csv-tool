import bpiVariants from './../data/bpivariants';
import checkboxLists from './../data/checkboxlists';

export default {
    state: {
        // Use as read-only
        songList: [],
        songDataList: [],
        cmbList: [],

        // Read-write copy
        songListCpy: [],
        songDataListCpy: [],
        cmbListCpy: [],

        // Array for drawing
        currPageList: [],

        // variables for tracking data
        ttlSongs: 0,
        songsClr: 0,
        songsFC: 0,
        songsHC: 0,
        songsEXHC: 0,
        songsAAA: 0,

        prcntAAA:"0",
        prcntClr:"0",
        prcntEXHC:"0",
        prcntFC:"0",
        prcntHC:"0",


        currpg: 0,
        pages: 0,
        limit: 50,
    },    
   
    /*
    ********************************************************************************
    *                  Functions used for Data                              *
    ********************************************************************************
    */

    getResults(){
        //Reset data
        var songsAAA = 0;
        var songsFC = 0;
        var songsEXHC = 0;
        var songsHC = 0;
        var songsClr = 0;
    
        for (let i = 0; i < this.state.cmbListCpy.length; i++) {
            // Extract data from classes
            var clr = this.state.cmbListCpy[i].clear;
            var rnk = this.state.cmbListCpy[i].rank;
    
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

            this.state.songsAAA = songsAAA;
            this.state.songsFC = songsFC;
            this.state.songsEXHC = songsEXHC;
            this.state.songsHC = songsHC;
            this.state.songsClr = songsClr;
        }
    },
    
    storeResults() {
        this.state.ttlSongs = this.state.cmbListCpy.length;
    
        this.state.prcntAAA = (this.state.songsAAA/this.state.ttlSongs)*100.00;
        this.state.prcntAAA = this.state.prcntAAA.toFixed(1);
    
        this.state.prcntFC = (this.state.songsFC/this.state.ttlSongs)*100.00;
        this.state.prcntFC = this.state.prcntFC.toFixed(1);
    
        this.state.prcntEXHC = (this.state.songsEXHC/this.state.ttlSongs)*100.00;
        this.state.prcntEXHC = this.state.prcntEXHC.toFixed(1);
    
        this.state.prcntHC = (this.state.songsHC/this.state.ttlSongs)*100.00;
        this.state.prcntHC = this.state.prcntHC.toFixed(1);
    
        this.state.prcntClr = (this.state.songsClr/this.state.ttlSongs)*100.00;
        this.state.prcntClr = this.state.prcntClr.toFixed(1);
    },

    /*
    ********************************************************************************
    *                           Creating the final array                           *
    ********************************************************************************
    */

    combineClasses(){
        // Reset combined class
        this.state.cmbList = [];
        var songList = this.state.songList;
        var songDataList = this.state.songDataList;

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
            bpi = this.bpiCalc((notes*2), kavg, record, ex);
            bpi = bpi.toFixed(2);


            this.state.cmbList.push({
                'title': titl,
                'level': lvl,
                'style': styl,
                'clear': clr,
                'rank': rnk,
                'ex': ex,
                'misses': miss,
                'notes': notes,
                'chart': chart,
                'percent': prcnt,
                'bpi': bpi,
                'genre': genre,
                'artist': artist,
                'playCount': plyCnt,
                'record': record,
                'kavg': kavg,
                '_rowVariant': bpiVariants.getVariant(bpi)
            });
        }

        this.state.pages = Math.ceil(this.state.cmbList.length / this.state.limit);
    },

    /*
    ********************************************************************************
    *                              BPI Function                                    *
    ********************************************************************************
    */
    bpiCalc(m, k, z, s){
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
        var sp = 0;
        var bpi = 0;

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
    },

    filterData() {
        var filters = checkboxLists.filters;
        var rankFilters = filters["rank"].map(x => x.label);
        var clearFilters = filters["clear"].map(x => x.label);
        var levelFilters = filters["level"].map(x => x.label);
        var styleFilters = filters["style"].map(x => x.label);

        this.state.cmbListCpy = this.state.cmbList.filter(function (e) {
            return rankFilters.includes(e.rank) && clearFilters.includes(e.clear) 
                && levelFilters.includes(e.level) && styleFilters.includes(e.style)
        })
    }
}