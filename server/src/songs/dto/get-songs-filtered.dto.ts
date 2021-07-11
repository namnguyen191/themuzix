import { SongGenres, SongsFilter } from '@themuzix/common';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class GetSongsFilteredDto implements SongsFilter {
  @IsOptional()
  @IsString()
  title!: string;

  @IsOptional()
  @IsEnum(SongGenres)
  genres!: SongGenres;
}
