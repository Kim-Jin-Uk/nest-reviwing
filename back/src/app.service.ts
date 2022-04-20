import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

//요청과 응답에 대해서 모름 -> 재사용성, 독립적 - 테스트시 따로 모킹을 해줄 필요가없음
@Injectable()
export class AppService {
  //외부 configService 가져오기 - Nest가 관리하게끔
  constructor(private readonly configService: ConfigService) {}
  getHello(): string {
    return this.configService.get('COOKIE_SECRET');
  }
  postHello(): string {
    return 'Hello Post!';
  }
}
