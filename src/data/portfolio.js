import medical from "../img/medical.jpg";

import sortableTable from "../img/sortable-table.jpg";
import musicBox1 from "../img/music-box1.jpg";
import musicBox2 from "../img/music-box2.jpg";
import chat from "../img/chat.jpg";

import noiseCancellation from "../img/noise-cancellation.png";
import noiseCancellationContent from "./noiseCancellationContent";
import marketplace from "../img/marketplace.png";
import marketplaceContent from "./marketplaceContent";
import countrylife from "../img/countrylife.png";
import countryLifeContent from "./countryLifeContent";

import whale from "../img/whale.jpg";
import whaleContent from "./whaleContent";
import glass from "../img/glass.jpg";
import glassContent from "./glassContent";
import candles from "../img/candles.jpg";
import candlesContent from "./candlesContent";
import thermos from "../img/thermos.jpg";
import thermosContent from "./thermosContent";
import thermosCup from "../img/thermos-cup.jpg";
import thermosCupContent from "./thermosCupContent";
import candleSet from "../img/candle-set.jpg";
import candleSetContent from "./candleSetContent";
import toy from "../img/toy.jpg";
import toyContent from "./toyContent";
import brisket from "../img/brisket.jpg";
import brisketContent from "./brisketContent";

import shaping from "../img/shaping.jpg";
import shapingContent from "./shapingContent";

import ideal from "../img/ideal.jpg";
import idealContent from "./idealContent";

import procedure from "../img/procedure.jpg";
import procedureContent from "./procedureContent";


export const portfolioWeb = [
  {
    img: musicBox1,
    desc: "Портал &quot;Music Box&quot;, главная страница. Проект на курсе по верстке на Хекслет. <i>OOCSS</i>, <i>Atomic CSS</i>. <i>Flexbox</i>. <i>Grid Layout</i>. <i>SCSS</i>. <b>Адаптив</b>",
    alt: "Макет music box",
    link: "https://valynka.github.io/layout-designer-project-56/",
  },
  {
    img: musicBox2,
    desc: "Портал &quot;Music Box&quot;, страница артиста. Проект на курсе по верстке на Хекслет. <i>OOCSS</i>, <i>Atomic CSS</i>. <i>Flexbox</i>. <i>Grid Layout</i>. <i>SCSS</i>. <b>Адаптив</b>",
    alt: "Макет music box",
    link: "https://valynka.github.io/layout-designer-project-56/artist.html",
  },
  {
    img: chat,
    desc: "Мессенджер &quot;Hexlet Chat&quot;. Проект на курсе по верстке на Хекслет. <i>Pug</i>. <i>SCSS</i>. <i>Bootstrap</i>. <i>Gulp</i>. <b>Адаптив</b>",
    alt: "Макет Hexlet Chat",
    link: "https://valynka.github.io/layout-designer-project-59/chat.html",
  },

  {
    img: medical,
    desc: "Макет медицинского сайта. Курс GeekBrains &quot;HTML5 и CSS3&quot;. <i>Grid Layout</i>. <b>Адаптив</b>.",
    alt: "Макет медицинского сайта",
    link: "https://valynka.github.io/medical-site/",
  },

  {
    img: sortableTable,
    desc: "Таблица с возможностью сортировки по нажатию на заголовок. Чистый js. Курс &quot;JavaScript/DOM/Интерфейсы&quot; JavaScript.ru.",
    alt: "Таблица с возможностью сортировки",
    link: "https://valynka.github.io/sortable-table/",
  },
];

export const articles = [
  {
    img: countrylife,
    title:
      "<span class='text-custom'>Квартира или дом</span>: почему всё больше людей выбирают <span class='text-custom'>тишину</span>",
    alt: 'Статья "Квартира или дом: почему всё больше людей выбирают тишину"',
    popupContent: countryLifeContent,
    id: "countrylife",
  },
  {
    img: marketplace,
    title:
      "Как продавать на <span class='text-custom'>маркетплейсах</span> в 2026 году: <span class='text-custom'>четыре стратегии против низких цен</span>",
    alt: 'Статья "Как продавать на маркетплейсах в 2026 году: четыре стратегии против низких цен"',
    popupContent: marketplaceContent,
    id: "marketplace",
  },
  {
    img: noiseCancellation,
    title:
      "<span class='text-custom'>Шумоподавление</span> – зачем оно нужно, и что это за звери – <span class='text-custom'>ANC</span> и <span class='text-custom'>ENC?</span>",
    alt: 'Статья "Шумоподавление – зачем оно нужно, и что это за звери – ANC и ENC?"',
    popupContent: noiseCancellationContent,
    id: "noiseCancellation",
  },
];

export const products = [
  {
    img: whale,
    title: "Ночник",
    alt: "Ночник 'Whale'",
    popupContent: whaleContent,
    id: "whale",
  },
  {
    img: thermos,
    title: "Термос",
    alt: "Термос 'Звёздный салют'",
    popupContent: thermosContent,
    id: "thermos",
  },
  {
    img: candles,
    title: "Свечи",
    alt: "Набор свечей на подставке 'Aris'",
    popupContent: candlesContent,
    id: "candles",
  },
  {
    img: thermosCup,
    title: "Термостакан",
    alt: "Термостакан 'Twist'",
    popupContent: thermosCupContent,
    id: "thermosCup",
  },
  {
    img: candleSet,
    title: "Свечной набор",
    alt: "Набор для создания свечи 'Let it Candle'",
    popupContent: candleSetContent,
    id: "candleSet",
  },
  {
    img: glass,
    title: "Бокал",
    alt: "Бокал 'Onda Grad'",
    popupContent: glassContent,
    id: "glass",
  },
  {
    img: toy,
    title: "Плюшевая панда",
    alt: "Мягкая игрушка панда",
    popupContent: toyContent,
    id: "toy",
  },
  {
    img: brisket,
    title: "Доска для стейка",
    alt: "Доска для стейка",
    popupContent: brisketContent,
    id: "brisket",
  },
];

export const dogPosts = [
  {
    img: shaping,
    title: "Шейпинг",
    alt: "Шейпинг",
    popupContent: shapingContent,
    id: "shaping",
  },
  {
    img: ideal,
    title: "«Неидеальная» собака зоопсихолога",
    alt: "«Неидеальная» собака зоопсихолога",
    popupContent: idealContent,
    id: "ideal",
  },
  {
    img: procedure,
    title: "Ухаживаем и лечим",
    alt: "Ухаживаем и лечим",
    popupContent: procedureContent,
    id: "procedure",
  },
]
