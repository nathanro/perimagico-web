import puppeteer from 'puppeteer';

(async () => {
    try {
        console.log("Starting puppeteer in no-sandbox mode...");
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        console.log("Browser opened.");
        const page = await browser.newPage();
        await page.setViewport({ width: 375, height: 667 });

        console.log("Navigating to localhost...");
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
        console.log("Navigation complete.");

        await page.screenshot({ path: 'hero_mobile.png' });
        console.log("Screenshot taken.");

        const contactoHref = await page.evaluate(() => {
            const btn = document.querySelector('a[href="#contacto"]');
            return btn ? btn.getAttribute('href') : null;
        });

        const preciosHref = await page.evaluate(() => {
            const btn = document.querySelector('a[href="#precios"]');
            return btn ? btn.getAttribute('href') : null;
        });

        console.log(`Href Cotiza: ${contactoHref}`);
        console.log(`Href Boletos: ${preciosHref}`);

        await browser.close();
        console.log("Browser closed successfully.");
    } catch (e) {
        console.error("Puppeteer encountered an error:", e);
    }
})();
