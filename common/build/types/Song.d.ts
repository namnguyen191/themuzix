export interface Song {
    id: string;
    title: string;
    description: string;
    genres: SongGenres;
}
export declare enum SongGenres {
    POP = "POP",
    ROCK = "ROCK",
    JAZZ = "JAZZ",
    UNKNOW = "UNKNOW"
}
export declare type CreateSongRequestBody = {
    title: string;
    description: string;
    genres: SongGenres;
};
export interface SongsFilter {
    title: string;
    genres: SongGenres;
}
