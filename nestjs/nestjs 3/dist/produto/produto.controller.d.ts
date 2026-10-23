import { ProdutoService } from './produto.service.js';
import { CreateProdutoDto } from './dto/create-produto.dto.js';
import { UpdateProdutoDto } from './dto/update-produto.dto.js';
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    create(createProdutoDto: CreateProdutoDto): Promise<import("./entities/produto.entity.js").Produto>;
    findAll(): Promise<import("./entities/produto.entity.js").Produto[]>;
    findOne(id: string): string;
    update(id: string, updateProdutoDto: UpdateProdutoDto): string;
    remove(id: string): string;
}
