<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Centrul Stomatologic Raional Cimișlia

## Разработка

1. Установите зависимости:
   ```bash
   npm install
   ```

2. Создайте файл `.env`:
   ```bash
   VITE_ADMIN_PASSWORD=your_password
   VITE_API_URL=http://localhost:3001/api
   ```

3. Запустите приложение:
   ```bash
   npm run dev
   ```

## Продакшен

### 1. Подготовка

1. Установите зависимости:
   ```bash
   npm install
   ```

2. Создайте файл `.env` с продакшен настройками:
   ```bash
   VITE_ADMIN_PASSWORD=your_secure_password
   # VITE_API_URL можно не указывать - будет использоваться относительный путь /api
   # Или укажите полный URL, если нужно:
   # VITE_API_URL=https://your-domain.com/api
   ```

3. Соберите проект:
   ```bash
   npm run build
   ```

### 2. Установка PM2

```bash
npm install -g pm2
```

### 3. Запуск API сервера через PM2

```bash
# Запустить API сервер
npm run pm2:start

# Или напрямую через PM2:
pm2 start ecosystem.config.js

# Сохранить конфигурацию PM2 для автозапуска после перезагрузки
pm2 save
pm2 startup
```

### 4. Управление через PM2

```bash
# Посмотреть статус
pm2 status

# Остановить
npm run pm2:stop
# или
pm2 stop stomatologia-api

# Перезапустить
npm run pm2:restart
# или
pm2 restart stomatologia-api

# Посмотреть логи
npm run pm2:logs
# или
pm2 logs stomatologia-api

# Удалить из PM2
npm run pm2:delete
# или
pm2 delete stomatologia-api
```

### 5. Настройка веб-сервера (Nginx)

Настройте Nginx для раздачи статики и проксирования API:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # Frontend (статические файлы из dist/)
    location / {
        root /path/to/Stomatologia-cimislia/dist;
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "public, max-age=3600";
    }

    # API проксирование
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 6. SSL сертификат (опционально)

Если используете HTTPS, добавьте сертификат через Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Структура файлов для продакшена

```
/var/www/stomatologia/
├── dist/              # Собранный фронтенд (npm run build)
├── public/
│   └── data/         # JSON файлы (services.json, team.json)
├── server.js          # API сервер
├── ecosystem.config.js # PM2 конфигурация
├── package.json
└── .env              # Переменные окружения
```

## Важные заметки

- API сервер будет доступен на `http://localhost:3001`
- Убедитесь, что файлы `public/data/*.json` доступны для записи (chmod 664)
- PM2 автоматически перезапустит сервер при падении
- Логи PM2 сохраняются в `./logs/` директории
