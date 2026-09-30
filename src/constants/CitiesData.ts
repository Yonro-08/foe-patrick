const ONE_PRODUCTION = 'Лавку специй';
const TWO_PRODUCTION = 'Лавку соков';
const THREE_PRODUCTION = 'Ферму';
const FOUR_PRODUCTION = 'Пекарню';
const FIVE_PRODUCTION = 'Лавку мясных деликатесов';
const ONE_MANAGER = 'распорядителя лавки специй';
const TWO_MANAGER = 'распорядителя лавки соков';
const THREE_MANAGER = 'распорядителя фермы';
const FOUR_MANAGER = 'распорядителя пекарни';
const FIVE_MANAGER = 'распорядителя лавки мясных деликатесов';

export const CITIESDATA = {
  1: [
    {
      title:
        'Нанимаем распорядителей лавки специй, Зала для пиршеств и Кареты — всех до 3-го уровня (340 камней).',
      tasks: [
        {
          title: 'Наймите распорядителя',
        },
        {
          title:
            'Наймите распорядителя для вашего Каретного двора или Зала для пиршеств',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${ONE_PRODUCTION} до 25 уровня.`,
      tasks: [
        {
          title: `Улучшите ${ONE_PRODUCTION} до 25 уровня`,
        },
        {
          title: 'Улучшите распорядителя Зала для пиршеств до уровня 3',
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 3 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Строим ${TWO_PRODUCTION} 1-го уровня. Нанимаем ${TWO_MANAGER} до 2-го уровня (60 камней).`,
      tasks: [
        {
          title: `Постройте ${TWO_PRODUCTION}`,
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 10 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${TWO_PRODUCTION} до 10 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 25 уровня.',
      tasks: [
        {
          title: 'Соберите 50К провизии для пира',
        },
        {
          title: 'Улучшите здание 50 раз',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${TWO_PRODUCTION} до 25 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Строим ${THREE_PRODUCTION} 1-го уровня. Нанимаем ${THREE_MANAGER} 1-го уровня (30 камней).`,
      tasks: [
        {
          title: 'Соберите 1М провизии для пира',
        },
        {
          title: `Постройте ${THREE_PRODUCTION}`,
        },
        {
          title: `Наймите ${THREE_MANAGER}`,
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 50 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 5 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${TWO_PRODUCTION} до 50 уровня.`,
      tasks: [
        {
          title: `Улучшите ${TWO_PRODUCTION} до уровня 50`,
        },
        {
          title: `Улучшите своего ${TWO_MANAGER} до уровня 2`,
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 75 уровня.',
      tasks: [
        {
          title: 'Улучшите здание 50 раз',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 10 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 100 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 25 уровня.`,
      tasks: [
        {
          title: 'Перевезите 250М провизии для пира в повозке',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${ONE_PRODUCTION} до 100 уровня.`,
      tasks: [
        {
          title: `Улучшите ${ONE_PRODUCTION} до уровня 100`,
        },
      ],
      completed: false,
    },
    {
      title: `Строим ${FOUR_PRODUCTION}. Нанимаем ${FOUR_MANAGER} до 2-го уровня (120 камней).`,
      tasks: [
        {
          title: 'Произведите 1В провизии для пира',
        },
        {
          title: `Постройте ${FOUR_PRODUCTION}`,
        },
        {
          title: `Наймите ${FOUR_MANAGER} 2-го уровня в пекарне`,
        },
        {
          title: `Улучшите ${ONE_MANAGER} до уровня 3`,
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 125 уровня.',
      tasks: [
        {
          title: 'Улучшите здание 50 раз',
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 150 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FOUR_PRODUCTION} до 5 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 50 уровня.`,
      tasks: [
        {
          title: `Улучшите ${THREE_PRODUCTION} до уровня 50`,
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${TWO_PRODUCTION} до 100 уровня.`,
      tasks: [
        {
          title: `Улучшите ${TWO_PRODUCTION} до уровня 100`,
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${FOUR_PRODUCTION} до 10 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Строим ${FIVE_PRODUCTION}. Нанимаем ${FIVE_MANAGER} до 2-го уровня (150 золота).`,
      tasks: [
        {
          title: 'Соберите 50В провизии для пира',
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 175 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 200 уровня.',
      tasks: [
        {
          title: 'Улучшите здание 100 раз',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 10 уровня.`,
      tasks: [
        {
          title: 'Перевезите 1Т провизии для пира в повозке',
        },
        {
          title: `Наймите ${FIVE_MANAGER} 2-го уровня`,
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${FOUR_PRODUCTION} до 25 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 225 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 15 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 250 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 25 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 100 уровня.`,
      tasks: [
        {
          title: 'Улучшите здания 150 раз',
        },
        {
          title: `Улучшите ${THREE_PRODUCTION} до уровня 100`,
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${FOUR_PRODUCTION} до 50 уровня.`,
      tasks: [
        {
          title: 'Произведите 4Т провизии для пира в производственных зданиях',
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств до 275 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 30 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Карету до 265 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: 'Ждём 2 часа, пока завершится задача на сбор 10В соков.',
      tasks: [
        {
          title: 'Соберите 10В соков',
        },
        {
          title: `Улучшите ${FOUR_PRODUCTION} до уровня 50`,
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${ONE_PRODUCTION} до 200 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${TWO_PRODUCTION} до 160 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 110 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FOUR_PRODUCTION} до 60 уровня.`,
      tasks: [
        {
          title: 'Улучшите здания 200 раз',
        },
        {
          title: `Улучшите ${ONE_PRODUCTION} до уровня 200`,
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств до 300 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Карету до 300 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 50 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Ждём 8.4 или 4.2В для следующего города.',
      tasks: [],
      completed: false,
    },
  ],
  2: [
    {
      title: `Берём распорядителей: Зал для пиршеств (3), Карету (3) и ${ONE_MANAGER} (1) — 290 камней.`,
      tasks: [
        {
          title: 'Наймите распорядителя для своего Каретного двора',
        },
        {
          title: 'Улучшите распорядителя Кареты до уровня 3',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${ONE_PRODUCTION} до 25 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 3 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Строим ${TWO_PRODUCTION} 1-го уровня. Нанимаем ${TWO_MANAGER} до 3-го уровня (120 камней).`,
      tasks: [
        {
          title: `Постройте ${TWO_PRODUCTION}`,
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 10 уровня.',
      tasks: [
        {
          title: 'Улучшите Зал для пиршеств до уровня 10',
        },
        {
          title: `Улучшите ${TWO_MANAGER} до уровня 2`,
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${TWO_PRODUCTION} до 10 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 25 уровня.',
      tasks: [
        {
          title: 'Улучшите здание 50 раз',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${TWO_PRODUCTION} до 25 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Строим ${THREE_PRODUCTION} 1-го уровня. Нанимаем ${THREE_MANAGER} 1-го уровня (30 камней).`,
      tasks: [
        {
          title: 'Произведите 60К специй в лавке специй',
        },
        {
          title: `Постройте ${THREE_PRODUCTION}`,
        },
        {
          title: 'Улучшите распорядителя Зала для пиршеств до уровня 3',
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 50 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 5 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 75 уровня.',
      tasks: [
        {
          title: 'Перевезите 15М провизии для пира в повозке',
        },
        {
          title: 'Улучшите здание 100 раз',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 10 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 100 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 25 уровня.`,
      tasks: [
        {
          title: `Улучшите ${THREE_PRODUCTION} до уровня 25`,
        },
      ],
      completed: false,
    },
    {
      title: `Строим ${FOUR_PRODUCTION}. Нанимаем ${FOUR_MANAGER} до 2-го уровня (120 камней).`,
      tasks: [
        {
          title: `Наймите ${FOUR_MANAGER} 2-го уровня в пекарне`,
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${ONE_PRODUCTION} до 100 уровня.`,
      tasks: [
        {
          title: `Улучшите ${ONE_PRODUCTION} до уровня 100`,
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 125 уровня.',
      tasks: [
        {
          title: 'Улучшите здание 100 раз',
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 150 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FOUR_PRODUCTION} до 4 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Ждём сбор 99В провизии для пира.',
      tasks: [
        {
          title: 'Соберите 99В провизии для пира',
        },
      ],
      completed: false,
    },
    {
      title: `Строим ${FIVE_PRODUCTION}. Нанимаем ${FIVE_MANAGER} до 1-го уровня (50 камней).`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 200 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FOUR_PRODUCTION} до 25 уровня.`,
      tasks: [
        {
          title: `Улучшите ${FOUR_PRODUCTION} до уровня 25`,
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${TWO_PRODUCTION} до 100 уровня.`,
      tasks: [
        {
          title: `Улучшите ${TWO_PRODUCTION} до уровня 100`,
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 15 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Карету до 235 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств до 250 уровня.',
      tasks: [
        {
          title: 'Соберите 16Т провизии для пира',
        },
        {
          title: `Постройте ${FIVE_PRODUCTION}`,
        },
        {
          title: `Улучшите ${TWO_MANAGER} до уровня 3`,
        },
        {
          title: 'Произведите 5Т в пекарне',
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Карету до 250 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 25 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 100 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${ONE_PRODUCTION} до 200 уровня.`,
      tasks: [
        {
          title: 'Улучшите здания 150 раз',
        },
        {
          title: `Улучшите ${ONE_PRODUCTION} до уровня 200`,
        },
        {
          title: 'Перевезите 32Т провизии для пира в повозке',
        },
        {
          title: `Улучшите ${THREE_PRODUCTION} до уровня 100`,
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 30 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств до 290 уровня.',
      tasks: [
        {
          title: 'Произведите 15Т продуктов на ферме',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 50 уровня.`,
      tasks: [
        {
          title: `Улучшите ${FIVE_PRODUCTION} до уровня 50`,
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств до 300 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Карету до 300 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${TWO_PRODUCTION} до 160 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 110 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FOUR_PRODUCTION} до 60 уровня.`,
      tasks: [
        {
          title: 'Улучшите здание 150 раз',
        },
      ],
      completed: false,
    },
    {
      title: 'Ждём 8.4 или 4.2В для следующего города.',
      tasks: [],
      completed: false,
    },
  ],
  3: [
    {
      title: `Нанимаем распорядителей: Зал для пиршеств (4), Карету (3) и ${ONE_MANAGER} (1) — 440 камней.`,
      tasks: [
        {
          title: `Наймите ${ONE_MANAGER}`,
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${ONE_PRODUCTION} до 25 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 3 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Строим ${TWO_PRODUCTION} 1-го уровня. Нанимаем ${TWO_MANAGER} до 2-го уровня (60 камней).`,
      tasks: [
        {
          title: `Наймите ${TWO_MANAGER}`,
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Карету и Зал для пиршеств до 10 уровня.',
      tasks: [
        {
          title: 'Улучшите Карету до уровня 10',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${TWO_PRODUCTION} до 10 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 25 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${TWO_PRODUCTION} до 25 уровня.`,
      tasks: [
        {
          title: 'Улучшите здания 50 раз',
        },
        {
          title: `Улучшите ${TWO_PRODUCTION} до уровня 25`,
        },
        {
          title: 'Улучшите распорядителя Зала для пиршеств до уровня 2',
        },
      ],
      completed: false,
    },
    {
      title: `Строим ${THREE_PRODUCTION}. Нанимаем ${THREE_MANAGER} 2-го уровня (90 камней).`,
      tasks: [
        {
          title: 'Произведите 50К специй',
        },
        {
          title: `Улучшите ${TWO_MANAGER} до уровня 2`,
        },
        {
          title: `Постройте ${THREE_PRODUCTION}`,
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 50 уровня.',
      tasks: [
        {
          title: 'Улучшите здания 50 раз',
        },
        {
          title: 'Улучшите распорядителя Кареты до уровня 3',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 5 уровня.`,
      tasks: [
        {
          title: 'Перевезите 3М провизии для пира в повозке',
        },
        {
          title: `Наймите ${THREE_MANAGER} 2-го уровня`,
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Карету и Зал для пиршеств до 100 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 25 уровня.`,
      tasks: [
        {
          title: `Улучшите ${THREE_PRODUCTION} до уровня 25`,
        },
      ],
      completed: false,
    },
    {
      title: `Строим ${FOUR_PRODUCTION}. Нанимаем ${FOUR_MANAGER} до 1-го уровня (40 камней).`,
      tasks: [
        {
          title: 'Соберите 1В провизии для пира',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${ONE_PRODUCTION} до 100 уровня.`,
      tasks: [
        {
          title: `Улучшите ${ONE_PRODUCTION} до уровня 100`,
        },
        {
          title: `Постройте ${FOUR_PRODUCTION}`,
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Карету до 125 уровня.',
      tasks: [
        {
          title: 'Улучшите здания 100 раз',
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 150 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FOUR_PRODUCTION} до 6 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 50 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Строим ${FIVE_PRODUCTION}. Нанимаем ${FIVE_MANAGER} до 1-го уровня (50 камней).`,
      tasks: [
        {
          title: 'Произведите 25В продуктов на ферме',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${TWO_PRODUCTION} до 100 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 200 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 6 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FOUR_PRODUCTION} до 25 уровня.`,
      tasks: [
        {
          title: `Улучшите ${FOUR_PRODUCTION} до уровня 25`,
        },
        {
          title: 'Улучшите распорядителя Зала для пиршеств до уровня 4',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 18 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств и Карету до 250 уровня.',
      tasks: [
        {
          title: 'Произведите 3В напитков',
        },
        {
          title: `Постройте ${FIVE_PRODUCTION}`,
        },
        {
          title: 'Улучшите здание 100 раз',
        },
        {
          title: 'Перевезите 30Т провизии для пира в повозке',
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 25 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FOUR_PRODUCTION} до 50 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${TWO_PRODUCTION} до 150 уровня.`,
      tasks: [
        {
          title: `Улучшите ${TWO_PRODUCTION} до уровня 150`,
        },
        {
          title: `Улучшите ${FOUR_PRODUCTION} до уровня 50`,
        },
      ],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 30 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${THREE_PRODUCTION} до 100 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${ONE_PRODUCTION} до 200 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: `Поднимаем ${FIVE_PRODUCTION} до 50 уровня.`,
      tasks: [],
      completed: false,
    },
    {
      title: 'Поднимаем Карету до 300 уровня.',
      tasks: [
        {
          title: 'Произведите 10Т в лавке мясных деликатесов',
        },
        {
          title: `Улучшите ${THREE_PRODUCTION} до уровня 100`,
        },
        {
          title: `Улучшите ${FIVE_PRODUCTION} до уровня 50`,
        },
        {
          title: `Улучшите ${ONE_PRODUCTION} до уровня 200`,
        },
      ],
      completed: false,
    },
    {
      title: 'Поднимаем Зал для пиршеств до 300 уровня.',
      tasks: [],
      completed: false,
    },
    {
      title: 'Ждём 8.4 или 4.2В для следующего города.',
      tasks: [],
      completed: false,
    },
  ],
};

export type CitiesDataType = typeof CITIESDATA;

export const TasksData = {
  1: [
    {
      title: '',
      complete: false,
    },
  ],
  2: [],
  3: [],
};
