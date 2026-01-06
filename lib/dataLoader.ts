import { Service, TeamMember } from '../types';
import { SERVICES as FALLBACK_SERVICES, TEAM as FALLBACK_TEAM } from '../constants';

// Cache для данных
let servicesCache: Service[] | null = null;
let teamCache: TeamMember[] | null = null;

/**
 * Загружает данные из JSON файла с fallback на constants
 */
export const loadServices = async (): Promise<Service[]> => {
  // Загружаем из JSON файла (Vite автоматически обслуживает файлы из public/)
  try {
    // Добавляем timestamp для предотвращения кеширования
    const response = await fetch(`/data/services.json?t=${Date.now()}`, {
      cache: 'no-cache',
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.services && Array.isArray(data.services) && data.services.length > 0) {
      console.log(`✅ Загружено ${data.services.length} услуг из JSON файла`);
      servicesCache = data.services;
      return data.services;
    } else {
      throw new Error('JSON файл пустой или не содержит массив services');
    }
  } catch (error) {
    console.warn('⚠️ Не удалось загрузить services.json:', error);
    console.log(`📦 Используем fallback - ${FALLBACK_SERVICES.length} услуг из constants.ts`);
  }

  // Fallback на constants
  servicesCache = FALLBACK_SERVICES;
  return FALLBACK_SERVICES;
};

/**
 * Загружает данные команды из JSON файла с fallback на constants
 */
export const loadTeam = async (): Promise<TeamMember[]> => {
  // Загружаем из JSON файла (Vite автоматически обслуживает файлы из public/)
  try {
    // Добавляем timestamp для предотвращения кеширования
    const response = await fetch(`/data/team.json?t=${Date.now()}`, {
      cache: 'no-cache',
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.team && Array.isArray(data.team) && data.team.length > 0) {
      console.log(`✅ Загружено ${data.team.length} членов команды из JSON файла`);
      teamCache = data.team;
      return data.team;
    } else {
      throw new Error('JSON файл пустой или не содержит массив team');
    }
  } catch (error) {
    console.warn('⚠️ Не удалось загрузить team.json:', error);
    console.log(`📦 Используем fallback - ${FALLBACK_TEAM.length} членов команды из constants.ts`);
  }

  // Fallback на constants
  teamCache = FALLBACK_TEAM;
  return FALLBACK_TEAM;
};

/**
 * Сохраняет услуги в JSON файл через API
 */
export const saveServices = async (services: Service[]): Promise<void> => {
  try {
    console.log(`📤 Отправляем запрос на сохранение ${services.length} услуг...`);
    // Определяем API URL
    // В продакшене, если VITE_API_URL не установлен, используем относительный путь /api
    // В dev режиме используем localhost
    const isProduction = import.meta.env.PROD;
    let apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
      apiUrl = isProduction ? '/api' : 'http://localhost:3001/api';
    }
    console.log(`🌐 API URL: ${apiUrl}`);
    const response = await fetch(`${apiUrl}/services`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ services }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ Сервер вернул ошибку ${response.status}: ${errorText}`);
      throw new Error(`Ошибка при сохранении услуг: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log(`✅ Ответ сервера: ${result.message || 'Успешно сохранено'}`);
    servicesCache = services;
  } catch (error) {
    console.error('❌ Ошибка при сохранении услуг:', error);
    if (error instanceof TypeError && error.message.includes('fetch')) {
      const isProduction = import.meta.env.PROD;
      throw new Error(
        isProduction 
          ? 'Nu s-a putut conecta la server. Asigurați-vă că serverul API este pornit și accesibil.'
          : 'Nu s-a putut conecta la server. Verificați că serverul este pornit (npm run dev)'
      );
    }
    throw error;
  }
};

/**
 * Сохраняет команду в JSON файл через API
 */
export const saveTeam = async (team: TeamMember[]): Promise<void> => {
  try {
    console.log(`📤 Отправляем запрос на сохранение ${team.length} членов команды...`);
    // Определяем API URL
    // В продакшене, если VITE_API_URL не установлен, используем относительный путь /api
    // В dev режиме используем localhost
    const isProduction = import.meta.env.PROD;
    let apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
      apiUrl = isProduction ? '/api' : 'http://localhost:3001/api';
    }
    console.log(`🌐 API URL: ${apiUrl}`);
    const response = await fetch(`${apiUrl}/team`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ team }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ Сервер вернул ошибку ${response.status}: ${errorText}`);
      throw new Error(`Ошибка при сохранении команды: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log(`✅ Ответ сервера: ${result.message || 'Успешно сохранено'}`);
    teamCache = team;
  } catch (error) {
    console.error('❌ Ошибка при сохранении команды:', error);
    if (error instanceof TypeError && error.message.includes('fetch')) {
      const isProduction = import.meta.env.PROD;
      throw new Error(
        isProduction 
          ? 'Nu s-a putut conecta la server. Asigurați-vă că serverul API este pornit și accesibil.'
          : 'Nu s-a putut conecta la server. Verificați că serverul este pornit (npm run dev)'
      );
    }
    throw error;
  }
};


