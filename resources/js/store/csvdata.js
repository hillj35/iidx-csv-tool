import scoreData from './scoredata';
import Song from './../class/song';
import SongData from './../class/songdata';

export default {
    /*
    ********************************************************************************
    *                            All of the CSV stuff                              *
    ********************************************************************************
    */

    getAsText(fileToRead) {
        let reader = new FileReader();
        reader.readAsText(fileToRead);
        reader.onload = this.loadHandler;
    },


    loadHandler(event) {
        let csv = event.target.result;
        let rows = csv.split('\n');
    
        // Clear songList
        scoreData.state.songList = [];
    
        for (let i = 0; i < rows.length; i++) {
            let cols = rows[i].split(',');
            scoreData.state.songList.push(new Song.Song(cols[0], cols[1], cols[2], cols[3], cols[4], cols[5], 
                                   cols[6], cols[7], cols[8], cols[9], cols[10],cols[11],
                                   cols[12],cols[13],cols[14],cols[15],cols[16],cols[17],
                                   cols[18],cols[19],cols[20],cols[21],cols[22],cols[23],
                                   cols[24],cols[25],cols[26]));
        }
    },

    handleDataFiles(files) {
        if (window.FileReader) {
            this.getDataAsText(files[0]);
        }
    },

    getDataAsText(fileToRead) {
        let reader = new FileReader();
        reader.readAsText(fileToRead);
        reader.onload = this.loadDataHandler;
    },

    loadDataHandler(event) {
        let csv = event.target.result;
        let rows = csv.split('\n');

        // Clear songList
        scoreData.state.songDataList = [];
    
        for (let i = 0; i < rows.length; i++) {
            let cols = rows[i].split(',');
            scoreData.state.songDataList.push(new SongData.SongData(cols[0], cols[1], cols[2], cols[3],
                                           cols[4], cols[5], cols[6], cols[7], 
                                           cols[8], cols[9], cols[10],cols[11],
                                           cols[12],cols[13],cols[14],cols[15]));
        }
    }
}