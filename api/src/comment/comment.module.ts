import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: "jwt" })],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
