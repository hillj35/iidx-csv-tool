export default {
    Song: class {
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
    }
};