# The Hidden Mind — sales site

A single-page website that sells one ebook: *The Hidden Mind — A Field Guide to the Mind*.
Dark, premium, psychological. Self-contained — all the design lives in one HTML file.

## What's in here

```
site/
├── public/
│   ├── index.html              ← the entire website (HTML + CSS + JS in one file)
│   └── Psychology_Summary.pdf  ← the ebook you're selling
├── server.js                   ← tiny server that serves the page
├── package.json                ← tells Render how to run it
├── render.yaml                 ← optional one-click Render config
└── .gitignore
```

## Run it locally

```bash
cd site
npm install
npm start
```

Then open http://localhost:3000

## Deploy to Render (free)

1. Put this `site` folder in a GitHub repository.
2. On Render, click **New → Web Service** and connect that repo.
3. Render auto-detects Node. If it asks, use these settings:
   - **Build command:** `npm install`
   - **Start command:** `npm start`
4. Click **Create Web Service**. In about a minute you'll get a public URL.

(If you keep `render.yaml`, Render fills those settings in for you automatically.)

### Even simpler: no-server option
This is a static site, so you can also deploy it as a **Static Site** on Render
(or Netlify / Cloudflare Pages / GitHub Pages):
- **Publish directory:** `public`
- No build command needed.

You only need `server.js` + `package.json` if you deploy as a **Web Service**.

## Connect the "Buy" button (important)

Right now the buy buttons show a reminder popup. To actually take payment and
deliver the PDF, point them at a checkout link:

1. Create a product on **Gumroad**, **Lemon Squeezy**, or a **Stripe Payment Link**,
   and upload `Psychology_Summary.pdf` as the delivered file.
2. In `public/index.html`, find this near the bottom:

   ```js
   document.getElementById('buyBtn').addEventListener('click', function (e) {
     e.preventDefault();
     alert('Connect this button to your checkout link ...');
   });
   ```

3. Replace it with your link, e.g.:

   ```js
   document.getElementById('buyBtn').onclick = function () {
     window.location.href = 'https://yourname.gumroad.com/l/hiddenmind';
   };
   ```

   You can also update the top-bar "Get the guide" link and the hero "Read the mind"
   button (both currently jump to the `#offer` section).

> Tip: let the checkout provider host and deliver the PDF. That way the file isn't
> publicly downloadable from your own site. If you'd rather not expose it, delete
> `public/Psychology_Summary.pdf` before deploying.

## Editing the page

Everything is in `public/index.html`:
- **Colors** — the `:root` block at the top of the `<style>` (ink, gold, bone).
- **Price** — search for `$19` and `$39`.
- **Copy** — all text is plain HTML in the `<body>`, clearly sectioned with comments.
