import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';

@Module({
  //forRoot는 설정을 넣는 부분
  //configModule - .env와 같은 역할
  //morganModule - 로거 모듈
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MorganModule,
    UsersModule,
    WorkspacesModule,
    ChannelsModule,
    DmsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule {}
