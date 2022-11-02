import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.set("trust proxy", 1);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle("Hate-U API")
    .setDescription("API para criação da rede social Hate U")
    .setVersion("1.0")
    .addServer("https://hateuapi-production.up.railway.app/")
    .addServer("http://localhost:3333")
    .addTag("status")
    .addTag("auth")
    .addTag("user")
    .addTag("chase")
    .addTag("post")
    .addTag("comment")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("docs", app, document);

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
