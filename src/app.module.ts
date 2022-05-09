import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthModule } from './auth/auth.module';
// import { CoinbaseModule } from './coinbase/coinbase.module';
import { UsersModule } from './users/users.module';
//todo: Enable UsersModule
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
      UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
