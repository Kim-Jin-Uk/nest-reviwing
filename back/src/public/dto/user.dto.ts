import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from '../../users/dto/join.request.dto';

export class UserDto extends JoinRequestDto {
  @ApiProperty({
    example: '1',
    description: '유저 아이디',
    required: true,
  })
  id: number;
}
