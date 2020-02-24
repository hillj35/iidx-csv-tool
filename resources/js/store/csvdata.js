import sorts from './../data/sorts';

export default {
    /*
    ********************************************************************************
    *                            All of the CSV stuff                              *
    ********************************************************************************
    */

    readScoreCSV(fileToRead, sourceId, updateId) {
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
            
                        if (cols[6] !== '0' && cols[10] !== 'NO PLAY')
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
                                'chart_version': 'n',
                                'update_id': updateId
                            });
            
                        if (cols[13] !== '0' && cols[17] !== 'NO PLAY')
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
                                'chart_version': 'h',
                                'update_id': updateId
                            });
            
                        if (cols[20] !== '0' && cols[24] !== 'NO PLAY') {
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
                                'chart_version': version,
                                'update_id': updateId
                            });
                        }
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