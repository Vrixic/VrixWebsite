import { createRequire } from "module";
const require = createRequire(import.meta.url);

const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create the server
const app = express();
// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Serve the static files from the dist folder after build
app.use(express.static(path.join(__dirname, 'dist')));

// Handle requests to the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

