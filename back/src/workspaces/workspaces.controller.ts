import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Workspace')
@Controller('api/workspaces')
export class WorkspacesController {
  @ApiOperation({ summary: '자신이 속한 모든 워크스페이스 가져오기' })
  @Get()
  getMyWorkspaces() {}

  @ApiOperation({ summary: '워크스페이스 생성하기' })
  @Post()
  createWorkspace() {}

  @ApiOperation({ summary: 'url과 동일한 워크스페이스의 모든 유저 가져오기 ' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: '워크스페이스의 주소',
    example: 'behint',
  })
  @Get(':url/members')
  getAllMembersFromWorkspace() {}

  @ApiOperation({ summary: 'url과 동일한 워크스페이스에 유저 초대하기 ' })
  @ApiQuery({
    name: 'url',
    required: true,
    description: '워크스페이스의 주소',
    example: 'behint',
  })
  @Post(':url/members')
  inviteMembersToWorkspace() {}

  @ApiOperation({
    summary: 'url과 동일한 워크스페이스에 id와 동일한 유저 추방하기',
  })
  @ApiQuery({
    name: 'url',
    required: true,
    description: '워크스페이스의 주소',
    example: 'behint',
  })
  @ApiQuery({
    name: 'id',
    required: true,
    description: '유저의 id',
    example: '1',
  })
  @Delete(':url/members/:id')
  kickMemberFromWorkspace() {}

  @ApiOperation({
    summary: 'url과 동일한 워크스페이스의 id와 동일한 유저의 정보 가져오기',
  })
  @ApiQuery({
    name: 'url',
    required: true,
    description: '워크스페이스의 주소',
    example: 'behint',
  })
  @ApiQuery({
    name: 'id',
    required: true,
    description: '유저의 id',
    example: '1',
  })
  @Get(':url/members/:id')
  getMemberInfoInWorkspace() {}
}
