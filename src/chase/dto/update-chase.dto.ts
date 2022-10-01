import { PartialType } from '@nestjs/swagger';
import { CreateChaseDto } from './create-chase.dto';

export class UpdateChaseDto extends PartialType(CreateChaseDto) {}
