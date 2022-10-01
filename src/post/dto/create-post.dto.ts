import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Post a ser publicado",
  })
  post: string;

  @IsUUID()
  @ApiProperty({
    description: "Id do usuário que está postando",
    example: "f11b0958-efa2-4b4f-9b84-36633e5529b8",
  })
  authorId: string;
}
