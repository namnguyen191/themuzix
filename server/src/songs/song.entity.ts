import { Exclude } from 'class-transformer';
import { User } from 'src/auth/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @ManyToOne(() => User, (user) => user.songs, { eager: false })
  @Exclude({ toPlainOnly: true })
  user!: User;
}
