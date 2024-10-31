const puppeteer = require("puppeteer");

async function salvaRelatorio() {
  const navegador = await puppeteer.launch();
  const pagina = await navegador.newPage();

  await pagina.goto("https://status.alura.com.br/");

  await pagina.waitForSelector(".lcc-button.js-lcc-accept");
  await pagina.click(".lcc-button.js-lcc-accept");

  await pagina.waitForSelector(".uk-text-primary", {
    visible: true,
  });

  await pagina.screenshot({ path: "captura.png" });

  await navegador.close();
}

salvaRelatorio();
