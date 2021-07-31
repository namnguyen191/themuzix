import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsModule } from './songs/songs.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SongsModule,
    TypeOrmModule.forRoot({
      type: 'postgres' as any,
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'themuzix',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
