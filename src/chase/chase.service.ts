import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { handleErrorConstraintUnique } from "src/utils/handle-error-unique.util";
import { CreateChaseDto } from "./dto/create-chase.dto";
import { Chase } from "./entities/chase.entity";

@Injectable()
export class ChaseService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateChaseDto): Promise<Chase | void> {
    const data: CreateChaseDto = {
      chaserId: dto.chaserId,
      chasingId: dto.chasingId,
    };

    return await this.prisma.chase
      .create({ data })
      .catch(handleErrorConstraintUnique);
  }

  async verifyIdAndReturnChase(id: string): Promise<Chase> {
    const chase: Chase = await this.prisma.chase.findUnique({ where: { id } });

    if (!chase) {
      throw new NotFoundException(`Entrada de id '${id}' não encontrada`);
    }

    return chase;
  }

  async remove(id: string) {
    await this.verifyIdAndReturnChase(id);

    return this.prisma.chase.delete({ where: { id } });
  }
}
