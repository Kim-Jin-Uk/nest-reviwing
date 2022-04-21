import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Channel')
@Controller('api/workspace/:url/channels')
export class ChannelsController {
  @ApiOperation({ summary: '모든 채널 정보 가져오기' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: '워크스페이스의 주소',
    example: 'behint',
  })
  @Get()
  getAllChannels() {}

  @ApiOperation({ summary: '채널 생성하기' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: '워크스페이스의 주소',
    example: 'behint',
  })
  @Post()
  createChannels() {}

  @ApiOperation({ summary: 'name과 동일한 채널 가져오기' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: '워크스페이스의 주소',
    example: 'behint',
  })
  @ApiQuery({
    name: 'name',
    required: true,
    description: '채널의 이름',
    example: 'behint-잡담방',
  })
  @Get(':name')
  getSpecificChannel() {}

  @ApiOperation({ summary: 'name과 동일한 채널의 모든 채팅 가져오기' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: '워크스페이스의 주소',
    example: 'behint',
  })
  @ApiQuery({
    name: 'name',
    required: true,
    description: '채널의 이름',
    example: 'behint-잡담방',
  })
  @ApiParam({
    name: 'perPage',
    required: true,
    description: '한번에 가져올 채팅의 개수',
    example: '10',
  })
  @ApiParam({
    name: 'page',
    required: true,
    description: '채팅을 가져온 횟수 - 게시판에서 page 처럼',
    example: '3',
  })
  @Get(':name/chats')
  getAllChatsFromWorkspace(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
  }

  @ApiOperation({ summary: 'name과 동일한 채널에 채팅 생성하기' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: '워크스페이스의 주소',
    example: 'behint',
  })
  @ApiQuery({
    name: 'name',
    required: true,
    description: '채널의 이름',
    example: 'behint-잡담방',
  })
  @Post(':name/chats')
  createChatToWorkspace() {}

  @ApiOperation({ summary: 'name과 동일한 채널의 모든 멤버 가져오기' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: '워크스페이스의 주소',
    example: 'behint',
  })
  @ApiQuery({
    name: 'name',
    required: true,
    description: '채널의 이름',
    example: 'behint-잡담방',
  })
  @Get(':name/members')
  getAllMembersFromChannel() {}

  @ApiOperation({ summary: 'name과 동일한 채널에 멤버 초대하기' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: '워크스페이스의 주소',
    example: 'behint',
  })
  @ApiQuery({
    name: 'name',
    required: true,
    description: '채널의 이름',
    example: 'behint-잡담방',
  })
  @Get(':name/members')
  inviteMemberToChannel() {}
}
