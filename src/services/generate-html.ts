import puppeteer from 'puppeteer';

export async function generateHtml(url: string) {
    const browser = await puppeteer.launch()
    const newPage = await browser.newPage()
    await newPage.goto(url)
    return await newPage.content()
}