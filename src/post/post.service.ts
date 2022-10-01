import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { handleErrorConstraintUnique } from "src/utils/handle-error-unique.util";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post } from "./entities/post.entity";

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePostDto): Promise<Post | void> {
    const data: CreatePostDto = {
      post: dto.post,
      authorId: dto.authorId,
    };

    return await this.prisma.post
      .create({ data })
      .catch(handleErrorConstraintUnique);
  }

  async findAll(): Promise<Post[]> {
    return await this.prisma.post.findMany();
  }

  async verifyIdAndReturnPost(id: string): Promise<Post> {
    const post: Post = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      throw new NotFoundException(`Entrada de id '${id}' não encontrada`);
    }

    return post;
  }

  async findOne(id: string): Promise<Post> {
    return await this.verifyIdAndReturnPost(id);
  }

  async update(id: string, dto: UpdatePostDto): Promise<Post | void> {
    await this.verifyIdAndReturnPost(id);

    return await this.prisma.post
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnPost(id);

    return await this.prisma.post.delete({ where: { id } });
  }
}
