export interface Song {
  id: string;
  title: string;
  description: string;
  genres: SongGenres;
}

export enum SongGenres {
  POP = 'POP',
  ROCK = 'ROCK',
  JAZZ = 'JAZZ',
  UNKNOW = 'UNKNOW',
}

export type CreateSongRequestBody = {
  title: string;
  description: string;
  genres: SongGenres;
};

export interface SongsFilter {
  title: string;
  genres: SongGenres;
}
