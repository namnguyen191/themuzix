import { CreateSongRequestBody, SongGenres } from '@themuzix/common';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateSongDto implements CreateSongRequestBody {
  @IsNotEmpty()
  title!: string;

  @IsNotEmpty()
  description!: string;

  @IsNotEmpty()
  @IsEnum(SongGenres)
  genres!: SongGenres;
}
