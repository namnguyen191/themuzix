import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { Song } from './song.entity';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  // @Get()
  // getAllSongs(@Query() query: GetSongsFilteredDto): Song[] {
  //   const songs = this.songsService.getAllSongs(query);

  //   return songs;
  // }

  @Get('/:id')
  getSongById(@Param() params: { id: string }): Promise<Song> {
    return this.songsService.getSongById(params.id);
  }

  // @Delete('/:id')
  // deleteSongById(@Param() params: { id: string }): Song {
  //   return this.songsService.deleteSongById(params.id);
  // }

  @Post()
  createSong(@Body() reqBody: CreateSongDto): Promise<Song> | null {
    return this.songsService.createSong(reqBody);
  }
}
