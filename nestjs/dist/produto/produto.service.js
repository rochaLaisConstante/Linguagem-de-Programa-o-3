var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { Produto } from './entities/produto.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
let ProdutoService = class ProdutoService {
    produtoRepository;
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    create(createProdutoDto) {
        const novoProduto = new Produto();
        novoProduto.nome = createProdutoDto.nome;
        novoProduto.preco = createProdutoDto.preco;
        return this.produtoRepository.save(novoProduto);
    }
    findAll() {
        return this.produtoRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} produto`;
    }
    update(id, updateProdutoDto) {
        return `This action updates a #${id} produto`;
    }
    remove(id) {
        return `This action removes a #${id} produto`;
    }
};
ProdutoService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Produto)),
    __metadata("design:paramtypes", [MongoRepository])
], ProdutoService);
export { ProdutoService };
//# sourceMappingURL=produto.service.js.map