import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";
import { AuthGuard } from "@nestjs/passport";

@ApiTags("user")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({
    summary: "Cria um novo usuário",
  })
  create(@Body() dto: CreateUserDto): Promise<User | void> {
    return this.userService.create(dto);
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: "Lista todos os usuários",
  })
  @ApiBearerAuth()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(":id")
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: "Lista usuário por id",
  })
  @ApiBearerAuth()
  findOne(@Param("id") id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: "Atualizar um usuário",
  })
  @ApiBearerAuth()
  update(
    @Param("id") id: string,
    @Body() dto: UpdateUserDto
  ): Promise<User | void> {
    return this.userService.update(id, dto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: "Deletar um usuário",
  })
  @ApiBearerAuth()
  remove(@Param("id") id: string) {
    return this.userService.remove(id);
  }
}
