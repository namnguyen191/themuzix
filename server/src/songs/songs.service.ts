import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreateSongDto } from './dto/create-song.dto';
import { GetSongsFilteredDto } from './dto/get-songs-filtered.dto';
import { Song } from './song.entity';
import { SongsRepository } from './songs.repository';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(SongsRepository) private songsRepository: SongsRepository,
  ) {}
  // private songs: Song[] = [];
  getAllSongs(filter: GetSongsFilteredDto, user: User) {
    return this.songsRepository.getSongs(filter, user);
  }

  /**
   * Retrieve a song from the database by id
   * @param id The unique id of the song
   * @returns the song with all it fields or an error if there's no song with the matching id
   */
  async getSongById(id: string, user: User): Promise<Song> {
    // const foundSong = await this.songsRepository.findOne(id);
    const foundSong = await this.songsRepository.findOne({
      where: { id, user },
    });

    if (!foundSong) {
      throw new NotFoundException(`Song with id ${id} could not be found`);
    }

    return foundSong;
  }

  createSong(createSongDto: CreateSongDto, user: User): Promise<Song> {
    return this.songsRepository.createSong(createSongDto, user);
  }

  // /**
  //  *
  //  * @param id The id of the song that you want to delete
  //  */
  // deleteSongById(id: string): Song {
  //   const deletedSong = this.songs.find((sng) => sng.id === id);
  //   if (!deletedSong) {
  //     throw new Error('Could not find the song to delete with that id');
  //   }
  //   this.songs = this.songs.filter((sng) => sng.id !== id);
  //   return deletedSong;
  // }
}
