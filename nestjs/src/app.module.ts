import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProdutoModule } from './produto/produto.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProdutoModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://aderbal:senha@cluster0.ij1wjnd.mongodb.net/?appName=Cluster0',
      autoLoadEntities: true,
      synchronize: true, //somente em modo DEV
      logging: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
