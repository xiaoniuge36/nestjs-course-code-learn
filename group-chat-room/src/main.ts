/*
 * @Author:  fengyingxiang@hworld.com
 * @Date: 2024-08-16 15:36:48
 * @LastEditors:  fengyingxiang@hworld.com
 * @LastEditTime: 2024-08-16 15:41:44
 * @FilePath: \项目\nest\group-chat-room\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets('pages');
  await app.listen(3000);
}
bootstrap();
