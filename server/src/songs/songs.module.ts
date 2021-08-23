import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { SongsController } from './songs.controller';
import { SongsRepository } from './songs.repository';
import { SongsService } from './songs.service';

@Module({
  imports: [TypeOrmModule.forFeature([SongsRepository]), AuthModule],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
