import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiOperation({ summary: 'id와 동일한 dm채팅방의 모든 채팅 가져오기 ' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: '워크스페이스의 주소',
    example: 'behint',
  })
  @ApiQuery({
    name: 'id',
    required: true,
    description: 'dm 채팅방의 id',
    example: '1',
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
  @Get(':id/chats')
  getAllChatsFromDM(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
  }

  @ApiOperation({ summary: 'id와 동일한 dm채팅방에 채팅 생성하기 ' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: '워크스페이스의 주소',
    example: 'behint',
  })
  @ApiQuery({
    name: 'id',
    required: true,
    description: 'dm 채팅방의 id',
    example: '1',
  })
  @Post(':id/chats')
  createChatsToDM() {}
}
