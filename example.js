const puppeteer = require('puppeteer')

async function init(){
	const url = "https://freetuts.net/hoc-java/java-core" 
	const browser = await puppeteer.launch({headless: false, slowMo: 250, devtools: true})
	const page = await browser.newPage()
	await page.setViewport({
		width: 1500,
		height: 1800,
		deviceScaleFactor: 1,
	})
	await page.goto(url)
	const cf = { browser: browser, page: page}
	return cf
}

// screen shot
async function screenshot(){
	let instance = await init()
	await instance.page.screenshot({path: 'freetutsjava.png'})
	await instance.browser.close();
}

// pdf
async function pdf(){
	let instance = await init()
	await instance.page.pdf({path: 'freetutsjava.pdf', format: 'a4'})
	await instance.browser.close()
}

// evaluate
async function evaluate(){
	let instance = await init()
	const dimensions = await instance.page.evaluate(() => {
		debugger;
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight,
			deviceScaleFactor: window.devicePixelRatio
		}
	})
	console.log('Dimensions: ', dimensions)
	await instance.browser.close()
}
// call function
//screenshot()
//pdf()
evaluate()