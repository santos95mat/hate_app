import { Controller, Post, Body, Param, Delete } from "@nestjs/common";
import { ChaseService } from "./chase.service";
import { CreateChaseDto } from "./dto/create-chase.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("chase")
@Controller("chase")
export class ChaseController {
  constructor(private readonly chaseService: ChaseService) {}

  @Post()
  @ApiOperation({
    summary: "Segue uma pessoa",
  })
  create(@Body() createChaseDto: CreateChaseDto) {
    return this.chaseService.create(createChaseDto);
  }

  @Delete(":id")
  @ApiOperation({
    summary: "Deixa de seguir uma pessoa",
  })
  remove(@Param("id") id: string) {
    return this.chaseService.remove(id);
  }
}
