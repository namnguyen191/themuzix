import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsController } from './songs.controller';
import { SongsRepository } from './songs.repository';
import { SongsService } from './songs.service';

@Module({
  imports: [TypeOrmModule.forFeature([SongsRepository])],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
