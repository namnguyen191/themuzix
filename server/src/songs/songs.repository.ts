import { EntityRepository, Repository } from 'typeorm';
import { CreateSongDto } from './dto/create-song.dto';
import { Song } from './song.entity';

@EntityRepository(Song)
export class SongsRepository extends Repository<Song> {
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
