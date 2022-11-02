import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@UseGuards(AuthGuard())
@ApiTags("post")
@ApiBearerAuth()
@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiOperation({
    summary: "Criar um post",
  })
  create(@Body() dto: CreatePostDto) {
    return this.postService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: "Listar todos os post",
  })
  findAll() {
    return this.postService.findAll();
  }

  @Get(":id")
  @ApiOperation({
    summary: "Listar um post por ID",
  })
  findOne(@Param("id") id: string) {
    return this.postService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({
    summary: "Editar um post por ID",
  })
  update(@Param("id") id: string, @Body() dto: UpdatePostDto) {
    return this.postService.update(id, dto);
  }

  @Delete(":id")
  @ApiOperation({
    summary: "Deletar um post por ID",
  })
  remove(@Param("id") id: string) {
    return this.postService.remove(id);
  }
}
