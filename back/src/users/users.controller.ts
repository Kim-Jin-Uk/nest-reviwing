import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../public/dto/user.dto';

@ApiTags('User')
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({ type: UserDto, description: '내정보 조회 성공' })
  @ApiOperation({ summary: '내 정보 조회' })
  @Get()
  getUserInfo(@Req() req) {
    return req.user;
  }

  @ApiOperation({ summary: '회원 가입' })
  @Post()
  signUpUser(@Body() data: JoinRequestDto) {
    this.usersService.postUsers(data);
  }

  @ApiOkResponse({ type: UserDto, description: '로그인 성공' })
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@Req() req) {
    return req.user;
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('logout success');
  }
}
