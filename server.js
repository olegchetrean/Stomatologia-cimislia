import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Пути к JSON файлам
const servicesPath = path.join(__dirname, 'public/data/services.json');
const teamPath = path.join(__dirname, 'public/data/team.json');

// Функция для безопасного чтения JSON
const readJSON = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Ошибка при чтении ${filePath}:`, error);
    return null;
  }
};

// Функция для безопасной записи JSON
const writeJSON = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error(`Ошибка при записи ${filePath}:`, error);
    return false;
  }
};

// ============ API ENDPOINTS ============

// GET /api/services - Получить все услуги
app.get('/api/services', (req, res) => {
  const data = readJSON(servicesPath);
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Ошибка при загрузке услуг' });
  }
});

// POST /api/services - Сохранить услуги
app.post('/api/services', (req, res) => {
  const { services } = req.body;
  
  if (!Array.isArray(services)) {
    return res.status(400).json({ error: 'Неверный формат данных' });
  }

  const success = writeJSON(servicesPath, { services });
  
  if (success) {
    res.json({ 
      message: 'Услуги успешно сохранены',
      count: services.length
    });
  } else {
    res.status(500).json({ error: 'Ошибка при сохранении услуг' });
  }
});

// GET /api/team - Получить всю команду
app.get('/api/team', (req, res) => {
  const data = readJSON(teamPath);
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Ошибка при загрузке команды' });
  }
});

// POST /api/team - Сохранить команду
app.post('/api/team', (req, res) => {
  const { team } = req.body;
  
  if (!Array.isArray(team)) {
    return res.status(400).json({ error: 'Неверный формат данных' });
  }

  const success = writeJSON(teamPath, { team });
  
  if (success) {
    res.json({ 
      message: 'Команда успешно сохранена',
      count: team.length
    });
  } else {
    res.status(500).json({ error: 'Ошибка при сохранении команды' });
  }
});

// GET /api/health - Проверка здоровья сервера
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString(),
    servicesFile: fs.existsSync(servicesPath),
    teamFile: fs.existsSync(teamPath)
  });
});

// ============ ERROR HANDLING ============

app.use((err, req, res, next) => {
  console.error('Ошибка:', err);
  res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Эндпоинт не найден' });
});

// ============ START SERVER ============

app.listen(PORT, () => {
  console.log(`🚀 API сервер запущен на http://localhost:${PORT}`);
  console.log(`📊 GET  /api/services  - Получить услуги`);
  console.log(`💾 POST /api/services  - Сохранить услуги`);
  console.log(`👥 GET  /api/team      - Получить команду`);
  console.log(`💾 POST /api/team      - Сохранить команду`);
  console.log(`❤️  GET  /api/health    - Проверка статуса`);
});
