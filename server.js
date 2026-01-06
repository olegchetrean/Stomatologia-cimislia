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

// POST /api/services - Сохранить услуги в JSON файл
app.post('/api/services', (req, res) => {
  const { services } = req.body;
  
  if (!Array.isArray(services)) {
    console.error('❌ Неверный формат данных: services не является массивом');
    return res.status(400).json({ error: 'Неверный формат данных' });
  }

  console.log(`💾 Получен запрос на сохранение ${services.length} услуг`);
  console.log(`📁 Путь к файлу: ${servicesPath}`);
  
  const success = writeJSON(servicesPath, { services });
  
  if (success) {
    console.log(`✅ Успешно сохранено ${services.length} услуг в ${servicesPath}`);
    res.json({ 
      message: 'Услуги успешно сохранены в JSON файл',
      count: services.length
    });
  } else {
    console.error(`❌ Ошибка при сохранении в ${servicesPath}`);
    res.status(500).json({ error: 'Ошибка при сохранении услуг' });
  }
});

// POST /api/team - Сохранить команду в JSON файл
app.post('/api/team', (req, res) => {
  const { team } = req.body;
  
  if (!Array.isArray(team)) {
    console.error('❌ Неверный формат данных: team не является массивом');
    return res.status(400).json({ error: 'Неверный формат данных' });
  }

  console.log(`💾 Получен запрос на сохранение ${team.length} членов команды`);
  console.log(`📁 Путь к файлу: ${teamPath}`);
  
  const success = writeJSON(teamPath, { team });
  
  if (success) {
    console.log(`✅ Успешно сохранено ${team.length} членов команды в ${teamPath}`);
    res.json({ 
      message: 'Команда успешно сохранена в JSON файл',
      count: team.length
    });
  } else {
    console.error(`❌ Ошибка при сохранении в ${teamPath}`);
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

const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`🚀 API сервер запущен на http://${HOST}:${PORT}`);
  console.log(`💾 POST /api/services  - Сохранить услуги в JSON`);
  console.log(`💾 POST /api/team      - Сохранить команду в JSON`);
  console.log(`❤️  GET  /api/health    - Проверка статуса`);
});
