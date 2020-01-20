export default {
    SongData: class {
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
    }
};