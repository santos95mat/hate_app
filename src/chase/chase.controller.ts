import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { ChaseService } from "./chase.service";
import { CreateChaseDto } from "./dto/create-chase.dto";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@UseGuards(AuthGuard())
@ApiTags("chase")
@ApiBearerAuth()
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
