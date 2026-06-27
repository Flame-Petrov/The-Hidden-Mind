// Minimal static server for "The Hidden Mind" sales page.
// Render sets process.env.PORT automatically; we fall back to 3000 locally.
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in /public (index.html, the PDF, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Send index.html for the root and any unknown route (single-page site).
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`The Hidden Mind is live on port ${PORT}`);
});
