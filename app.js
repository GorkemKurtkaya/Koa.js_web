const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

app.router = new Router();

app.use(app.router.routes());

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });

let hakkimdabody = `<h1>Hakkımda Sayfasına Hoşgeldiniz</h1>
<p>Benim adım Koa</p>
<p>Benim adım Koa</p>


<li><a href="/">Ana Sayfa</a></li>
<li><a href="/hakkimda">Hakkımda</a></li>
<li><a href="/iletisim">İletişim</a></li>
`  

let anasayfabody = `<h1>Anasayfaya Hoşgeldiniz</h1>
<li><a href="/hakkimda">Hakkımda</a></li>
<li><a href="/iletisim">İletişim</a></li>
`
let iletisimbody = `
<h1>İletişim Sayfasına Hoşgeldiniz</h1>
<li>Adım Koa</li>
<li>Telefon: 1234567890</li>

<li><a href="/">Ana Sayfa</a></li>
<li><a href="/hakkimda">Hakkımda</a></li>
<li><a href="/iletisim">İletişim</a></li>
`

app.router.get("/", async (ctx) => {
    ctx.body = anasayfabody;
    }); 

app.router.get('/hakkimda', async (ctx) => {
    ctx.body = hakkimdabody;
    });

app.router.get('/iletisim', async (ctx) => {
    ctx.body = iletisimbody;
    }); 

app.listen(3000);