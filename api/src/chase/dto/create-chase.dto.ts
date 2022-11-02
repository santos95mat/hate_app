import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreateChaseDto {
  @IsUUID()
  @ApiProperty({
    description: "Id do usuário que esta seguindo",
    example: "f11b0958-efa2-4b4f-9b84-36633e5529b8",
  })
  chaserId: string;

  @IsUUID()
  @ApiProperty({
    description: "Id do usuário que está sendo seguido",
    example: "f11b0958-efa2-4b4f-9b84-36633e5529b8",
  })
  chasingId: string;
}
