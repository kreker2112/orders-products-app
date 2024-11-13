const orders = [
  {
    id: 1,
    title:
      "Полный комплект офисных аксессуаров для продуктивной работы с современным монитором и стильной клавиатурой",
    date: "2017-06-29 12:09:33",
    description: "desc",
    get products() {
      return products.filter((product) => product.order === this.id);
    },
  },
  {
    id: 2,
    title: "Мобильная рабочая станция",
    date: "2017-06-29 12:09:33",
    description: "desc",
    get products() {
      return products.filter((product) => product.order === this.id);
    },
  },
  {
    id: 3,
    title:
      "Комплект для высококачественного сканирования и удобного пользования планшетом для творческих задач",
    date: "2017-06-29 12:09:33",
    description: "desc",
    get products() {
      return products.filter((product) => product.order === this.id);
    },
  },
  {
    id: 4,
    title: "Техника для работы и общения",
    date: "2017-06-30 14:20:15",
    description: "desc 4",
    get products() {
      return products.filter((product) => product.order === this.id);
    },
  },
  {
    id: 5,
    title:
      "Гаджеты для полного погружения в мультимедиа и развлечения: наушники и камера высокого разрешения",
    date: "2017-07-01 10:45:22",
    description: "desc 5",
    get products() {
      return products.filter((product) => product.order === this.id);
    },
  },
  {
    id: 6,
    title: "Игровая приставка и аксессуары",
    date: "2017-07-02 09:15:44",
    description: "desc 6",
    get products() {
      return products.filter((product) => product.order === this.id);
    },
  },
  {
    id: 7,
    title:
      "Современное звуковое и визуальное оборудование для дома: мощные колонки и проектор для домашнего кинотеатра",
    date: "2017-07-03 16:32:10",
    description: "desc 7",
    get products() {
      return products.filter((product) => product.order === this.id);
    },
  },
];

const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: "product_1.png",
    title: "Samsung Монитор",
    type: "Monitors",
    specification: "Разрешение: 1920x1080, Размер экрана: 24, Тип матрицы: IPS",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 2,
    serialNumber: 5678,
    isNew: 1,
    photo: "product_2.png",
    title: "Logitech Клавиатура",
    type: "Keyboards",
    specification: "Тип: механическая, Подсветка: RGB, Интерфейс: USB",
    guarantee: {
      start: "2018-01-10 10:05:23",
      end: "2019-01-10 10:05:23",
    },
    price: [
      { value: 50, symbol: "USD", isDefault: 0 },
      { value: 1300, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2018-01-10 10:05:23",
  },
  {
    id: 3,
    serialNumber: 7890,
    isNew: 0,
    photo: "product_3.png",
    title: "Dell Ноутбук",
    type: "Laptops",
    specification:
      "Процессор: Intel i5, ОЗУ: 8 ГБ, Накопитель: 256 ГБ SSD, Экран: 15.6",
    guarantee: {
      start: "2019-03-12 08:15:45",
      end: "2021-03-12 08:15:45",
    },
    price: [
      { value: 500, symbol: "USD", isDefault: 0 },
      { value: 13000, symbol: "UAH", isDefault: 1 },
    ],
    order: 2,
    date: "2019-03-12 08:15:45",
  },
  {
    id: 4,
    serialNumber: 4321,
    isNew: 0,
    photo: "product_4.png",
    title: "Canon Принтер",
    type: "Printers",
    specification: "Тип: лазерный, Цветная печать: да, Скорость: 20 стр/мин",
    guarantee: {
      start: "2020-07-20 09:00:00",
      end: "2022-07-20 09:00:00",
    },
    price: [
      { value: 150, symbol: "USD", isDefault: 0 },
      { value: 3900, symbol: "UAH", isDefault: 1 },
    ],
    order: 2,
    date: "2020-07-20 09:00:00",
  },
  {
    id: 5,
    serialNumber: 3456,
    isNew: 1,
    photo: "product_5.png",
    title: "Epson Сканер",
    type: "Scanners",
    specification: "Разрешение: 1200x2400 dpi, Тип: планшетный, Формат: A4",
    guarantee: {
      start: "2021-04-14 12:30:00",
      end: "2023-04-14 12:30:00",
    },
    price: [
      { value: 120, symbol: "USD", isDefault: 0 },
      { value: 3100, symbol: "UAH", isDefault: 1 },
    ],
    order: 3,
    date: "2021-04-14 12:30:00",
  },
  {
    id: 6,
    serialNumber: 6789,
    isNew: 1,
    photo: "product_6.png",
    title: "Samsung Планшет",
    type: "Tablets",
    specification: "Экран: 10.1, RAM: 4 ГБ, Память: 64 ГБ, OS: Android",
    guarantee: {
      start: "2022-09-10 15:45:00",
      end: "2023-09-10 15:45:00",
    },
    price: [
      { value: 300, symbol: "USD", isDefault: 0 },
      { value: 7800, symbol: "UAH", isDefault: 1 },
    ],
    order: 3,
    date: "2022-09-10 15:45:00",
  },
  {
    id: 7,
    serialNumber: 9876,
    isNew: 0,
    photo: "product_7.png",
    title: "HP Десктоп",
    type: "Desktops",
    specification:
      "Процессор: Intel i7, RAM: 16 ГБ, Накопитель: 512 ГБ SSD, Видеокарта: GTX 1660",
    guarantee: {
      start: "2023-05-18 14:20:00",
      end: "2024-05-18 14:20:00",
    },
    price: [
      { value: 450, symbol: "USD", isDefault: 0 },
      { value: 11700, symbol: "UAH", isDefault: 1 },
    ],
    order: 4,
    date: "2023-05-18 14:20:00",
  },
  {
    id: 8,
    serialNumber: 1122,
    isNew: 0,
    photo: "product_8.png",
    title: "Xiaomi Смартфон",
    type: "Smartphones",
    specification: "Экран: 6.5, Память: 128 ГБ, Камера: 48 Мп, ОС: Android",
    guarantee: {
      start: "2018-04-25 10:45:00",
      end: "2020-04-25 10:45:00",
    },
    price: [
      { value: 200, symbol: "USD", isDefault: 0 },
      { value: 5200, symbol: "UAH", isDefault: 1 },
    ],
    order: 4,
    date: "2018-04-25 10:45:00",
  },
  {
    id: 9,
    serialNumber: 2233,
    isNew: 1,
    photo: "product_9.png",
    title: "Sony Наушники",
    type: "Headphones",
    specification: "Тип: накладные, Беспроводные: да, Время работы: 30 часов",
    guarantee: {
      start: "2019-09-12 09:30:00",
      end: "2021-09-12 09:30:00",
    },
    price: [
      { value: 80, symbol: "USD", isDefault: 0 },
      { value: 2100, symbol: "UAH", isDefault: 1 },
    ],
    order: 5,
    date: "2019-09-12 09:30:00",
  },
  {
    id: 10,
    serialNumber: 3344,
    isNew: 1,
    photo: "product_10.png",
    title: "Nikon Камера",
    type: "Cameras",
    specification: "Разрешение: 24 Мп, Зум: оптический 5x, Видео: 4K",
    guarantee: {
      start: "2021-06-05 12:15:00",
      end: "2023-06-05 12:15:00",
    },
    price: [
      { value: 600, symbol: "USD", isDefault: 0 },
      { value: 15600, symbol: "UAH", isDefault: 1 },
    ],
    order: 5,
    date: "2021-06-05 12:15:00",
  },
  {
    id: 11,
    serialNumber: 4455,
    isNew: 1,
    photo: "product_11.png",
    title: "Microsoft Консоль",
    type: "Consoles",
    specification: "Тип: игровая, Память: 1 ТБ, Поддержка 4K: да",
    guarantee: {
      start: "2022-11-20 10:00:00",
      end: "2024-11-20 10:00:00",
    },
    price: [
      { value: 350, symbol: "USD", isDefault: 0 },
      { value: 9100, symbol: "UAH", isDefault: 1 },
    ],
    order: 6,
    date: "2022-11-20 10:00:00",
  },
  {
    id: 12,
    serialNumber: 5566,
    isNew: 1,
    photo: "product_12.png",
    title: "Apple Смарт-часы",
    type: "Watches",
    specification:
      "Экран: AMOLED 1.5, Водонепроницаемость: до 50 м, Батарея: 7 дней",
    guarantee: {
      start: "2023-08-15 12:45:00",
      end: "2025-08-15 12:45:00",
    },
    price: [
      { value: 400, symbol: "USD", isDefault: 0 },
      { value: 10400, symbol: "UAH", isDefault: 1 },
    ],
    order: 6,
    date: "2023-08-15 12:45:00",
  },
  {
    id: 13,
    serialNumber: 6677,
    isNew: 0,
    photo: "product_13.png",
    title: "JBL Колонка",
    type: "Speakers",
    specification:
      "Мощность: 20 Вт, Подключение: Bluetooth, Диапазон частот: 60-20000 Гц",
    guarantee: {
      start: "2024-02-12 13:00:00",
      end: "2025-02-12 13:00:00",
    },
    price: [
      { value: 90, symbol: "USD", isDefault: 0 },
      { value: 2340, symbol: "UAH", isDefault: 1 },
    ],
    order: 7,
    date: "2024-02-12 13:00:00",
  },
  {
    id: 14,
    serialNumber: 7788,
    isNew: 0,
    photo: "product_14.png",
    title: "BenQ Проектор",
    type: "Projectors",
    specification:
      "Разрешение: Full HD, Яркость: 3000 люмен, Диагональ: до 120",
    guarantee: {
      start: "2022-07-18 11:30:00",
      end: "2024-07-18 11:30:00",
    },
    price: [
      { value: 250, symbol: "USD", isDefault: 0 },
      { value: 6500, symbol: "UAH", isDefault: 1 },
    ],
    order: 7,
    date: "2022-07-18 11:30:00",
  },
];

module.exports = { orders, products };
