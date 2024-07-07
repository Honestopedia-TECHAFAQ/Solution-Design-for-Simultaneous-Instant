const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const captureScreenshots = async (urls, outputDir) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        defaultViewport: null
    });

    try {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const captureScreenshot = async (url, index) => {
            const page = await browser.newPage();
            await page.goto(url, { waitUntil: 'networkidle2' });
            const fullPageHeight = await page.evaluate(() => document.body.scrollHeight);
            await page.setViewport({ width: 1920, height: fullPageHeight });
            const screenshotPath = path.join(outputDir, `screenshot_${index + 1}.png`);
            await page.screenshot({ path: screenshotPath, fullPage: true });
            await page.close();
        };

        await Promise.all(urls.map((url, index) => captureScreenshot(url, index)));
    } catch (error) {
        console.error('Error capturing screenshots:', error);
    } finally {
        await browser.close();
    }
};

const urls = process.argv.slice(2);
const outputDir = 'screenshots';

if (urls.length === 0) {
    console.error('Please provide at least one URL.');
    process.exit(1);
}

captureScreenshots(urls, outputDir);
