import express from 'express';
import path from 'path';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import indexRoutes from './routes/index.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
const clientPath = join(__dirname, 'client/build'); // Ruta al directorio de construcción de la aplicación React

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(join(__dirname, 'public')));

app.use(indexRoutes);

// Ruta para servir la aplicación React
app.use(express.static(clientPath));

// Ruta para manejar todas las solicitudes en React (permite el enrutamiento del lado del cliente)
app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


