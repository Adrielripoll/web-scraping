import { Request, Response } from 'express'
import { INotebook } from '../interface/notebook.interface';
import { generateHtml } from '../services/generate-html';
import { getList } from '../services/get-list'

export class AppController {
  static async get(request: Request, response: Response): Promise<Response<INotebook[]>> {    
    const html: string = await generateHtml('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops')
    const notebookList: INotebook[] = getList(html)
    return response.status(200).send(notebookList)
  }
}
