import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ChaseService } from "./chase.service";
import { CreateChaseDto } from "./dto/create-chase.dto";
import { UpdateChaseDto } from "./dto/update-chase.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("chase")
@Controller("chase")
export class ChaseController {
  constructor(private readonly chaseService: ChaseService) {}

  @Post()
  create(@Body() createChaseDto: CreateChaseDto) {
    return this.chaseService.create(createChaseDto);
  }

  @Get()
  findAll() {
    return this.chaseService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.chaseService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateChaseDto: UpdateChaseDto) {
    return this.chaseService.update(+id, updateChaseDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.chaseService.remove(+id);
  }
}
