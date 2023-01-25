import concomitant from '../img/concomitant.jpg';
import gogolMogol from '../img/gogol-mogol.jpg';
// import mathnet from '../img/mathnet.jpg';
import medical from '../img/medical.jpg';
import site from '../img/site.jpg';
import slider from '../img/slider.jpg';
import sortableList from '../img/sortable-list.jpg';
import sortableTable from '../img/sortable-table.jpg';
import musicBox1 from '../img/music-box1.jpg';
import musicBox2 from '../img/music-box2.jpg';
import chat from '../img/chat.jpg';
import cognitiveDistortions from '../img/cognitive-distortions.jpg';


const portfolio = [
    {
        img: musicBox1,
        desc: 'Портал &quot;Music Box&quot;, главная страница. Проект на курсе по верстке на Хекслет. <i>OOCSS</i>, <i>Atomic CSS</i>. <i>Flexbox</i>. <i>Grid Layout</i>. <i>SCSS</i>. <b>Адаптив</b>',
        alt: 'Макет music box',
        link: 'https://music-box-valinka.surge.sh/',
    },
    {
        img: musicBox2,
        desc: 'Портал &quot;Music Box&quot;, страница артиста. Проект на курсе по верстке на Хекслет. <i>OOCSS</i>, <i>Atomic CSS</i>. <i>Flexbox</i>. <i>Grid Layout</i>. <i>SCSS</i>. <b>Адаптив</b>',
        alt: 'Макет music box',
        link: 'https://music-box-valinka.surge.sh/artist.html',
    },
    {
        img: chat,
        desc: 'Мессенджер &quot;Hexlet Chat&quot;. Проект на курсе по верстке на Хекслет. <i>Pug</i>. <i>SCSS</i>. <i>Bootstrap</i>. <i>Gulp</i>. <b>Адаптив</b>',
        alt: 'Макет Hexlet Chat',
        link: 'https://valynka.github.io/layout-designer-project-59/chat.html',
    },
    {
        img: cognitiveDistortions,
        desc: 'Макет &quot;Когнитивные искажения&quot;. Проект на курсе по верстке на Хекслет. <i>Flexbox</i>.',
        alt: 'Макет Когнитивные искажения',
        link: 'https://valinka-cognitive-distortions.surge.sh/',
    },
    {
        img: concomitant,
        desc: 'Макет Сoncomitant. Курс GeekBrains &quot;HTML5 и CSS3&quot;. <i>SCSS</i>.',
        alt: 'Макет concomitant ',
        link: 'https://valynka.github.io/concomitant/',
    },
    {
        img: medical,
        desc: 'Макет медицинского сайта. Курс GeekBrains &quot;HTML5 и CSS3&quot;. <i>Grid Layout</i>. <b>Адаптив</b>.',
        alt: 'Макет медицинского сайта',
        link: 'https://valynka.github.io/medical-site/',
    },
    {
        img: site,
        desc: 'Макет сверстан в рамках курса GeekBrains &quot;HTML5 и CSS3&quot; с использованием <i>Flexbox</i>.',
        alt: 'Макет Flexbox',
        link: 'https://valynka.github.io/site-layout/',
    },
    {
        img: gogolMogol,
        desc: 'Готовила первоначальную верстку (изменилось не много) во время работы в &quot;Читай-город&quot;.',
        alt: 'Гоголь-Моголь',
        link: 'https://www.gogol-mogol.ru/',
    },
    {
        img: sortableTable,
        desc: 'Таблица с возможностью сортировки по нажатию на заголовок. Чистый js. Курс &quot;JavaScript/DOM/Интерфейсы&quot; JavaScript.ru.',
        alt: 'Таблица с возможностью сортировки',
        link: 'https://valynka.github.io/sortable-table/',
    },
    {
        img: slider,
        desc: 'Слайдер с возможностью выбора диапазона от и до. Чистый js. Курс &quot;JavaScript/DOM/Интерфейсы&quot; JavaScript.ru.',
        alt: 'Слайдер с возможностью выбора диапазона',
        link: 'https://valynka.github.io/double-slider/',
    },
    {
        img: sortableList,
        desc: 'Список с сортировкой drag-and-drop. Чистый js. Курс &quot;JavaScript/DOM/Интерфейсы&quot; JavaScript.ru..',
        alt: 'Список с сортировкой drag-and-drop',
        link: 'https://valynka.github.io/sortable-list/',
    },
   /* {
        img: mathnet,
        desc: 'Редизайн и верстка портала Math-Net. Адаптив. Использован LESS. В работу до сих пор не взяли.',
        alt: 'Math-Net',
        link: 'https://valynka.github.io/mathnet.local/',
    },*/
];

export default portfolio;
