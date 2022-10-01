import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: "jwt" })],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
