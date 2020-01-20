export default {
    CmbData: class {
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
    }
};