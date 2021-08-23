import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateSongDto } from './dto/create-song.dto';
import { GetSongsFilteredDto } from './dto/get-songs-filtered.dto';
import { Song } from './song.entity';

@EntityRepository(Song)
export class SongsRepository extends Repository<Song> {
  async getSongs(filter: GetSongsFilteredDto, user: User): Promise<Song[]> {
    const { genres, title } = filter;

    const query = this.createQueryBuilder('song');
    query.where({ user });

    if (title) {
      query.andWhere(
        '(LOWER(song.title) LIKE LOWER(:search) OR LOWER(song.description) LIKE LOWER(:search))',
        { search: `%${title}%` },
      );
    }

    if (genres) {
      query.andWhere('song.genres = :genres', { genres });
    }

    const songs = await query.getMany();

    return songs;
  }

  async createSong(createSongDto: CreateSongDto, user: User): Promise<Song> {
    const { title, description, genres } = createSongDto;

    const newSong = this.create({
      title,
      description,
      genres,
      user,
    });

    await this.save(newSong);

    return newSong;
  }
}
