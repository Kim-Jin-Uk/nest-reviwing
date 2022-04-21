import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'gottkfthf@naver.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({ example: 'jindol', description: '닉네임', required: true })
  public nickname: string;

  @ApiProperty({
    example: 'jindol1227!',
    description: '패스워드',
    required: true,
  })
  public password: string;
}
