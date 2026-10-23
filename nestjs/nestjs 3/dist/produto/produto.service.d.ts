import { CreateProdutoDto } from './dto/create-produto.dto.js';
import { UpdateProdutoDto } from './dto/update-produto.dto.js';
import { MongoRepository } from 'typeorm';
import { Produto } from './entities/produto.entity.js';
export declare class ProdutoService {
    private readonly produtoRepository;
    constructor(produtoRepository: MongoRepository<Produto>);
    create(createProdutoDto: CreateProdutoDto): Promise<Produto>;
    findAll(): Promise<Produto[]>;
    findOne(id: number): string;
    update(id: number, updateProdutoDto: UpdateProdutoDto): string;
    remove(id: number): string;
}
