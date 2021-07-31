import { EntityRepository, Repository } from 'typeorm';
import { CreateSongDto } from './dto/create-song.dto';
import { GetSongsFilteredDto } from './dto/get-songs-filtered.dto';
import { Song } from './song.entity';

@EntityRepository(Song)
export class SongsRepository extends Repository<Song> {
  async getSongs(filter: GetSongsFilteredDto): Promise<Song[]> {
    const { genres, title } = filter;

    const query = this.createQueryBuilder('song');

    if (title) {
      query.andWhere(
        'LOWER(song.title) LIKE LOWER(:search) OR LOWER(song.description) LIKE LOWER(:search)',
        { search: `%${title}%` },
      );
    }

    if (genres) {
      query.andWhere('song.genres = :genres', { genres });
    }

    const songs = await query.getMany();

    return songs;
  }

  async createSong(createSongDto: CreateSongDto): Promise<Song> {
    const { title, description, genres } = createSongDto;

    const newSong = this.create({
      title,
      description,
      genres,
    });

    await this.save(newSong);

    return newSong;
  }
}
