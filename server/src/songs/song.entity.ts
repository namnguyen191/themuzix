import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SongGenres } from '../../../common/build';

@Entity()
export class Song {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  genres!: SongGenres;
}
