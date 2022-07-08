import concomitant from '../img/concomitant.jpg';
import gogolMogol from '../img/gogol-mogol.jpg';
import mathnet from '../img/mathnet.jpg';
import medical from '../img/medical.jpg';
import site from '../img/site.jpg';
import slider from '../img/slider.jpg';
import sortableList from '../img/sortable-list.jpg';
import sortableTable from '../img/sortable-table.jpg';


const portfolio = [
    {
        img: concomitant,
        desc: 'Макет сверстан в рамках курса GeekBrains HTML5 и CSS3. Использован SCSS.',
        alt: 'Макет concomitant',
        link: 'https://valynka.github.io/concomitant/',
    },
    {
        img: medical,
        desc: 'Макет сверстан в рамках курса GeekBrains HTML5 и CSS3 с применением технологии Grid. Адаптивная вертска.',
        alt: 'Макет медицинского сайта',
        link: 'https://valynka.github.io/medical-site/',
    },
    {
        img: site,
        desc: 'Макет сверстан в рамках курса GeekBrains HTML5 и CSS3 с использованием Flexbox.',
        alt: 'Макет Flexbox',
        link: 'https://valynka.github.io/site-layout/',
    },
    {
        img: gogolMogol,
        desc: 'Готовила первоначальную верстку (изменилось не много) во время работы в "Читай-город".',
        alt: 'Гоголь-Моголь',
        link: 'https://www.gogol-mogol.ru/',
    },
    {
        img: sortableTable,
        desc: 'Таблица с возможностью сортировки по нажатию на заголовок. Компонент написан на чистом js в рамках курса "JavaScript/DOM/Интерфейсы" для программистов от JavaScript.ru.',
        alt: 'Таблица с возможностью сортировки',
        link: 'https://valynka.github.io/sortable-table/',
    },
    {
        img: slider,
        desc: 'Слайдер с возможностью выбора диапазона от и до. Написан на чистом js в рамках курса "JavaScript/DOM/Интерфейсы" для программистов от JavaScript.ru.',
        alt: 'Слайдер с возможностью выбора диапазона',
        link: 'https://valynka.github.io/double-slider/',
    },
    {
        img: sortableList,
        desc: 'Список с сортировкой drag-and-drop. Написан на чистом js в рамках курса "JavaScript/DOM/Интерфейсы" для программистов от JavaScript.ru.',
        alt: 'Список с сортировкой drag-and-drop',
        link: 'https://valynka.github.io/sortable-list/',
    },
   /* {
        img: mathnet,
        desc: 'Редизайн и верстка портала Math-Net. Адаптив. Использован LESS. В работу до сих пор не взяли.',
        alt: 'Math-Net',
        link: 'https://valynka.github.io/mathnet.local/',
    }*/,
];

export default portfolio;
