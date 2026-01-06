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
// В продакшене файлы должны быть в dist/public/data/, но если его нет - используем public/data/
const distPath = path.join(__dirname, 'dist/public/data/services.json');
const srcPath = path.join(__dirname, 'public/data/services.json');
const servicesPath = fs.existsSync(path.dirname(distPath)) ? distPath : srcPath;

const distTeamPath = path.join(__dirname, 'dist/public/data/team.json');
const srcTeamPath = path.join(__dirname, 'public/data/team.json');
const teamPath = fs.existsSync(path.dirname(distTeamPath)) ? distTeamPath : srcTeamPath;

console.log(`📁 Путь к services.json: ${servicesPath}`);
console.log(`📁 Путь к team.json: ${teamPath}`);

// Убеждаемся, что директория существует
const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Создана директория: ${dir}`);
  }
};

// Проверяем директории при запуске
ensureDirectoryExists(servicesPath);
ensureDirectoryExists(teamPath);

// Функция для безопасной записи JSON
const writeJSON = (filePath, data) => {
  try {
    // Убеждаемся, что директория существует
    ensureDirectoryExists(filePath);
    
    // Записываем файл
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonString, 'utf-8');
    
    // Проверяем, что файл действительно записан - читаем его обратно
    const writtenData = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(writtenData);
    const expectedCount = data.services ? data.services.length : (data.team ? data.team.length : 0);
    const actualCount = parsed.services ? parsed.services.length : (parsed.team ? parsed.team.length : 0);
    
    if (expectedCount === actualCount) {
      console.log(`✅ Файл успешно записан и проверен: ${filePath}`);
      console.log(`   Ожидалось элементов: ${expectedCount}, записано: ${actualCount}`);
      return true;
    } else {
      console.error(`❌ Несоответствие данных: ожидалось ${expectedCount}, записано ${actualCount}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Ошибка при записи ${filePath}:`, error.message);
    console.error(`   Полный путь: ${path.resolve(filePath)}`);
    console.error(`   Существует ли файл: ${fs.existsSync(filePath)}`);
    console.error(`   Существует ли директория: ${fs.existsSync(path.dirname(filePath))}`);
    console.error(`   Stack: ${error.stack}`);
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
  console.log(`📁 Абсолютный путь: ${path.resolve(servicesPath)}`);
  console.log(`📁 Директория существует: ${fs.existsSync(path.dirname(servicesPath))}`);
  console.log(`📁 Файл существует: ${fs.existsSync(servicesPath)}`);
  
  const success = writeJSON(servicesPath, { services });
  
  if (success) {
    // Проверяем, что файл действительно записан, читая его обратно
    try {
      const writtenFile = fs.readFileSync(servicesPath, 'utf-8');
      const writtenData = JSON.parse(writtenFile);
      const writtenCount = writtenData.services?.length || 0;
      
      console.log(`✅ Успешно сохранено ${services.length} услуг в ${servicesPath}`);
      console.log(`📖 Проверка: в файле сейчас ${writtenCount} услуг`);
      
      if (writtenCount !== services.length) {
        console.error(`⚠️ ВНИМАНИЕ: Количество не совпадает! Отправлено ${services.length}, в файле ${writtenCount}`);
      }
      
      res.json({ 
        message: 'Услуги успешно сохранены в JSON файл',
        count: services.length,
        fileCount: writtenCount,
        filePath: servicesPath
      });
    } catch (verifyError) {
      console.error(`❌ Ошибка при проверке записанного файла:`, verifyError);
      res.json({ 
        message: 'Услуги сохранены, но проверка не удалась',
        count: services.length,
        warning: verifyError.message
      });
    }
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
  console.log(`📁 Абсолютный путь: ${path.resolve(teamPath)}`);
  console.log(`📁 Директория существует: ${fs.existsSync(path.dirname(teamPath))}`);
  console.log(`📁 Файл существует: ${fs.existsSync(teamPath)}`);
  
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
    teamFile: fs.existsSync(teamPath),
    servicesPath: servicesPath,
    teamPath: teamPath
  });
});

// GET /api/services - Читать услуги из файла (для проверки)
app.get('/api/services', (req, res) => {
  try {
    if (!fs.existsSync(servicesPath)) {
      return res.status(404).json({ error: 'Файл services.json не найден' });
    }
    const fileContent = fs.readFileSync(servicesPath, 'utf-8');
    const data = JSON.parse(fileContent);
    console.log(`📖 Прочитано ${data.services?.length || 0} услуг из файла`);
    res.json(data);
  } catch (error) {
    console.error('❌ Ошибка при чтении services.json:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET /api/team - Читать команду из файла (для проверки)
app.get('/api/team', (req, res) => {
  try {
    if (!fs.existsSync(teamPath)) {
      return res.status(404).json({ error: 'Файл team.json не найден' });
    }
    const fileContent = fs.readFileSync(teamPath, 'utf-8');
    const data = JSON.parse(fileContent);
    console.log(`📖 Прочитано ${data.team?.length || 0} членов команды из файла`);
    res.json(data);
  } catch (error) {
    console.error('❌ Ошибка при чтении team.json:', error);
    res.status(500).json({ error: error.message });
  }
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
  console.log(`📖 GET  /api/services  - Читать услуги из JSON`);
  console.log(`💾 POST /api/team      - Сохранить команду в JSON`);
  console.log(`📖 GET  /api/team      - Читать команду из JSON`);
  console.log(`❤️  GET  /api/health    - Проверка статуса`);
  console.log(`📁 Services файл: ${servicesPath}`);
  console.log(`📁 Team файл: ${teamPath}`);
});
