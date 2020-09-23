import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    ua: {
        translation: {
            'min': 'Значение должно быть больше чем {{min}}',
            'max': 'Значение должно быть меньше чем {{max}}',
            'numberMax': 'Значение превышает максимум',
            'numberMin': 'Значение меньше минимума',
            'required': 'Обязательное поле',
            'number': 'Должно быть число',
            'Contact information': 'Контактна інформація',
            'Search...': 'Поиск...',
            'Enter the name of the product to see the recommended category': 'Введите название товара чтобы увидеть рекомендуемую категорию',
            'No category found for this product name': 'Для данного название товара категория не найдена',
            'Choose a brand from the list': 'Выбрать бренд из списка',
            'Add new brand': 'Добавить новый бренд',
            'Describe product': 'Опишіть вашу річ',
            'Select a category': 'Оберіть категорію',
            'Select brand and condition': 'Оберіть бренд і стан',
            'Choose color': 'Виберіть колір',
            'Choose age': 'Оберіть вік',
            'Choose height': 'Оберіть зріст',
            'Choose size': 'Оберіть розмір',
            'Additional information': 'Додаткова інформація',
            'Price and terms of sale': 'Ціна та умови продажу',
            'Add product': 'Додати річ',
            'Save as draft': 'Зберегти як чернетку',
            'Replace': 'Заменить',
            'Delete': 'Удалить',
            'Rotation': 'Поворот',
            'Download': 'Загрузите',
            'Correct angle': 'Правильний ракурс',
            'Show the correct angle': 'Показать правильный ракурс',
            'Hide the correct angle': 'Скрыть правильный ракурс',
            'Take a photo of the product on a model or on a hanger, it will look much better than on the floor or bed. In the main photo, the item should be shown in full height.': 'Зробіть фото товару на моделі або на вішалці, так воно буде виглядати набагато краще, ніж на підлозі або ліжку. На головному фото річ повинна бути показана в повний зріст.',
        }
    },
    ru: {
        translation: {
            'min': 'Значение должно быть больше чем {{min}}',
            'max': 'Значение должно быть меньше чем {{max}}',
            'numberMax': 'Значение превышает максимум',
            'numberMin': 'Значение меньше минимума',
            'required': 'Обязательное поле',
            'number': 'Должно быть число',
            'Contact information': 'Контактная информация',
            'Search...': 'Поиск...',
            'Enter the name of the product to see the recommended category': 'Введите название товара чтобы увидеть рекомендуемую категорию',
            'No category found for this product name': 'Для данного название товара категория не найдена',
            'Choose a brand from the list': 'Выбрать бренд из списка',
            'Add new brand': 'Добавить новый бренд',
            'Describe product': 'Опишите вашу вещь',
            'Select a category': 'Выберите категорию',
            'Select brand and condition': 'Выберите бренд и состояние',
            'Choose color': 'Выберите цвет',
            'Choose age': 'Выберите возраст',
            'Choose height': 'Выберите рост',
            'Choose size': 'Выберите размер',
            'Add product': 'Добавить вещь',
            'Save as draft': 'Сохранить, как черновик',
            'Replace': 'Заменить',
            'Delete': 'Удалить',
            'Rotation': 'Поворот',
            'Download': 'Загрузите',
            'Correct angle': 'Правильный ракурс',
            'Show the correct angle': 'Показать правильный ракурс',
            'Hide the correct angle': 'Скрыть правильный ракурс',
            'Take a photo of the product on a model or on a hanger, it will look much better than on the floor or bed. In the main photo, the item should be shown in full height.': 'Сделайте фото товара на модели или на вешалке, так оно будет выглядеть намного лучше, чем на полу или кровати. На главном фото вещь должна быть показана в полный рост.',
        }
    }
};

export const getLang = () => {
    if (window.location.pathname.substr(0, 4) === '/ru/') {
        return 'ru';
    }
    return 'ua';
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: getLang(),
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
