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

    readScoreCSV(fileToRead, sourceId) {
        var reader = new FileReader();
        reader.readAsText(fileToRead);
        reader.onload = (function(sourceId) {
            var sourceId = sourceId;
            return function(event) {
                let csv = event.target.result;
                let rows = csv.split('\n');
        
                // Clear songList
                var songDataList = [];
            
                //skip header
                for (let i = 1; i < rows.length; i++) {
                    var row = rows[i].replace(/,---,/g, ',,');
                    let cols = row.split(',');
                    if (cols[0] !== "") {
                        songDataList.push({
                            'source_id': sourceId,
                            'name': cols[1],
                            'play_count': cols[4],
                            'ex_score': cols[6],
                            'perfect': cols[7],
                            'great': cols[8],
                            'miss': cols[9],
                            'clear': cols[10],
                            'dj_level': cols[11],
                            'chart_type': 'n',
                            'last_played': cols[26]
                        });
                        songDataList.push({
                            'source_id': sourceId,
                            'name': cols[1],
                            'play_count': cols[4],
                            'ex_score': cols[13],
                            'perfect': cols[14],
                            'great': cols[15],
                            'miss': cols[16],
                            'clear': cols[17],
                            'dj_level': cols[18],
                            'chart_type': 'h',
                            'last_played': cols[26]
                        });
                        songDataList.push({
                            'source_id': sourceId,
                            'name': cols[1],
                            'play_count': cols[4],
                            'ex_score': cols[20],
                            'perfect': cols[21],
                            'great': cols[22],
                            'miss': cols[23],
                            'clear': cols[24],
                            'dj_level': cols[25],
                            'chart_type': 'a',
                            'last_played': cols[26]
                        });
                    }
                }

                //hit score.store api
                axios.post('/api/scores', { data: songDataList})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (response) {
                    console.log(response);
                })
            } 
        })(sourceId);
    }
}