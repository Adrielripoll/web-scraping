import * as cheerio from 'cheerio'
import { INotebook } from '../interface/notebook.interface';
import { filterTitle } from '../helpers/filter-title'
import { filterDescription } from '../helpers/filter-description';

export function getList(html: string): INotebook[]{
    const brand = 'Lenovo'
    const notebookList: INotebook[] = []

    const $ = cheerio.load(html)
    const element = $('div.thumbnail')

    element.each(function() {
       
        const title = $(this).find('a.title').text().split(' ')
        const description = $(this).find('p.description').text().split(' ')

        if(filterTitle(title, brand) && filterDescription(description, brand)){         
            notebookList.push({
                price: $(this).find('h4.pull-right').text(),
                title: $(this).find('a.title').attr('title'),
                description: $(this).find('p.description').text(),
                reviews: $(this).find('p.pull-right').text(),
                stars: $(this).find('p > span.glyphicon').length
            })
        }
    })

    return notebookList
}