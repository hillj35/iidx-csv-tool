import sorts from './../data/sorts';
import scoredata from './scoredata';

export default {
    /*
    ********************************************************************************
    *                            All of the CSV stuff                              *
    ********************************************************************************
    */

    readScoreCSV(fileToRead, sourceId, updateId) {
        var reader = new FileReader();
        reader.readAsText(fileToRead);
        var self = this;
        
        reader.onload = (function(event) {
            self.insertScores(event, sourceId, updateId);
        });
    },

    insertScores(event, sourceId, updateId) {
        var csv = event.target.result;
        var rows = csv.split('\n');

        var dataFunction = rows[0].split(',').length === 27 ? 
            this.createDataRootage : this.createDataHeroicVerse

        var songDataList = [];

        for (let i = 1; i < rows.length; i++) {
            var row = rows[i].replace(/,---,/g, ',,');
            let cols = row.split(',');

            //confirm there's data in the line
            if (cols[0] !== "") {
                songDataList = dataFunction(
                    cols, sourceId, updateId, songDataList);
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
    },

    createDataRootage(cols, sourceId, updateId, songDataList) {
        if (cols[6] !== '0' || cols[10] !== 'NO PLAY')
            songDataList.push({
                'source_id': sourceId,
                'name': cols[1],
                'play_count': cols[4],
                'ex_score': cols[6],
                'perfect': cols[7],
                'great': cols[8],
                'miss': cols[9],
                'clear': cols[10],
                'clear_rank': sorts["clear"][cols[10]],
                'dj_level': cols[11],
                'dj_level_rank': sorts["dj_level"][cols[11]],
                'chart_version': 'n',
                'update_id': updateId
            });

        if (cols[13] !== '0' || cols[17] !== 'NO PLAY')
            songDataList.push({
                'source_id': sourceId,
                'name': cols[1],
                'play_count': cols[4],
                'ex_score': cols[13],
                'perfect': cols[14],
                'great': cols[15],
                'miss': cols[16],
                'clear': cols[17],
                'clear_rank': sorts["clear"][cols[17]],
                'dj_level': cols[18],
                'dj_level_rank': sorts["dj_level"][cols[18]],
                'chart_version': 'h',
                'update_id': updateId
            });

        if (cols[20] !== '0' || cols[24] !== 'NO PLAY') {
            //leggendaria check - rootage and earlier
            var version = cols[5] === '0' ? 'l': 'a';
            
            songDataList.push({
                'source_id': sourceId,
                'name': cols[1],
                'play_count': cols[4],
                'ex_score': cols[20],
                'perfect': cols[21],
                'great': cols[22],
                'miss': cols[23],
                'clear': cols[24],
                'clear_rank': sorts["clear"][cols[24]],
                'dj_level': cols[25],
                'dj_level_rank': sorts["dj_level"][cols[25]],
                'chart_version': version,
                'update_id': updateId
            });
        }
        return songDataList;
    },

    createDataHeroicVerse(cols, sourceId, updateId, songDataList) {
        if (cols[13] !== '0' || cols[17] !== 'NO PLAY')
            songDataList.push({
                'source_id': sourceId,
                'name': cols[1],
                'play_count': cols[4],
                'ex_score': cols[13],
                'perfect': cols[14],
                'great': cols[15],
                'miss': cols[16],
                'clear': cols[17],
                'clear_rank': sorts["clear"][cols[17]],
                'dj_level': cols[18],
                'dj_level_rank': sorts["dj_level"][cols[18]],
                'chart_version': 'n',
                'update_id': updateId
            });

        if (cols[20] !== '0' || cols[24] !== 'NO PLAY')
            songDataList.push({
                'source_id': sourceId,
                'name': cols[1],
                'play_count': cols[4],
                'ex_score': cols[20],
                'perfect': cols[21],
                'great': cols[22],
                'miss': cols[23],
                'clear': cols[24],
                'clear_rank': sorts["clear"][cols[24]],
                'dj_level': cols[25],
                'dj_level_rank': sorts["dj_level"][cols[25]],
                'chart_version': 'h',
                'update_id': updateId
            });

        if (cols[27] !== '0' || cols[31] !== 'NO PLAY') {
            songDataList.push({
                'source_id': sourceId,
                'name': cols[1],
                'play_count': cols[4],
                'ex_score': cols[27],
                'perfect': cols[28],
                'great': cols[29],
                'miss': cols[30],
                'clear': cols[31],
                'clear_rank': sorts["clear"][cols[31]],
                'dj_level': cols[32],
                'dj_level_rank': sorts["dj_level"][cols[32]],
                'chart_version': 'a',
                'update_id': updateId
            });
        }

        if (cols[34] !== '0' || cols[38] !== 'NO PLAY') {
            songDataList.push({
                'source_id': sourceId,
                'name': cols[1],
                'play_count': cols[4],
                'ex_score': cols[34],
                'perfect': cols[35],
                'great': cols[36],
                'miss': cols[37],
                'clear': cols[38],
                'clear_rank': sorts["clear"][cols[38]],
                'dj_level': cols[39],
                'dj_level_rank': sorts["dj_level"][cols[39]],
                'chart_version': 'l',
                'update_id': updateId
            });
        }
        return songDataList;
    }
}