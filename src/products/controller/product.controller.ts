import { Request, Response } from "express";


export class ProductController {
    async getProducts(req: Request, res: Response) {
        res.send('Hello Product!')
    }

    async getProductById(req: Request, res: Response) {
        res.send('product id')
    }

    async createProduct(req: Request, res: Response) {
        res.send('products created')
    }

    async updateProduct(req: Request, res: Response) {
        res.send('products updated')
    }

    async deleteProduct(req: Request, res: Response) {
        res.send('products deleted')
    }
}