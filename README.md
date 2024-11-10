# Визуализация данных

**Интерактивная диаграмма**, позволяющая отображать получаемые данные в визуально удобной форме.

## [Посмотреть проект](https://webborista.github.io/Data-visualization/)

## Стек
- **React**
- **JavaScript**
- **HTML**
- **CSS**

## Функциональность

- Реализована возможность получения данных отчетов о пройденных тестах.
- Пользователи могут переключаться между отчетами с помощью кнопки.
- Столбцы диаграммы плавно изменяют размер пропорционально суммарному количеству пройденных тестов для каждого из инстансов: **dev**, **test**, **prod**, а также для **норматива**.
- Стрелки, расположенные над столбцами, плавно меняют свою длину в зависимости от высоты столбцов. Их чипы отображают разницу между суммарными значениями соседних столбцов. 
- Цвет и иконка чипов зависят от знака численного значения (положительная или отрицательная разница).
- При выходе из нулевых значений и переходе в них реализована анимация плавного появления/исчезновения столбцов.
- Проект выполнен в соответствии с принципом **KISS**, с использованием технологий, достаточных для полной реализации функционала без лишних усложнений.

## Структура

Проект разделен на 8 компонентов:

- **Header** — шапка с заголовком страницы и SVG-изображением
- **Graph** — основное поле диаграммы с логикой для отображения внутренних элементов
- **Arrow** — анимированные SVG-стрелки
- **DifferenceChip** — чип с отображением значения разницы между соседними столбцами
- **Column** — компонент для отображения столбца диаграммы для инстансов (dev, test, prod)
- **NormColumn** — компонент для отображения столбца диаграммы для "норматива"
- **Explanation** — компонент с пояснением значений цветов на диаграмме 
- **Button** — кнопка для переключения между различными наборами данных

Все компоненты приложения организованы в рамках компонента App.


## Запуск проекта

1. Установите необходимые зависимости:
    ```bash
    npm i
    ```

2. Запустите проект:
    ```bash
    npm run start
    ```
