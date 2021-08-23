import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateSongDto } from './dto/create-song.dto';
import { GetSongsFilteredDto } from './dto/get-songs-filtered.dto';
import { Song } from './song.entity';
import { SongsService } from './songs.service';

@Controller('api/songs')
@UseGuards(AuthGuard())
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  getAllSongs(
    @Query() query: GetSongsFilteredDto,
    @GetUser() user: User,
  ): Promise<Song[]> {
    const songs = this.songsService.getAllSongs(query, user);

    return songs;
  }

  @Get('/:id')
  getSongById(
    @Param() params: { id: string },
    @GetUser() user: User,
  ): Promise<Song> {
    return this.songsService.getSongById(params.id, user);
  }

  // @Delete('/:id')
  // deleteSongById(@Param() params: { id: string }): Song {
  //   return this.songsService.deleteSongById(params.id);
  // }

  @Post()
  createSong(
    @Body() reqBody: CreateSongDto,
    @GetUser() user: User,
  ): Promise<Song> | null {
    return this.songsService.createSong(reqBody, user);
  }
}
