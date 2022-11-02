import { Module } from "@nestjs/common";
import { ChaseService } from "./chase.service";
import { ChaseController } from "./chase.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: "jwt" })],
  controllers: [ChaseController],
  providers: [ChaseService],
})
export class ChaseModule {}
