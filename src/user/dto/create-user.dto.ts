import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "Matheus Rodrigues",
    description: "Nome do usuário a ser cadastrado",
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: "matheus@email.com",
    description: "Email do usuário a ser cadastrado",
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "(31) 99636-1530",
    description: "Telefone de contato do usuário a ser cadastrado",
  })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "User@123",
    description: "Senha do usuário a ser cadastrado",
  })
  password: string;
}
