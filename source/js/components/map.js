var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 9,
        controls: []

    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(new ymaps.Placemark([55.6873856, 37.3730927], {
        balloonContent: 'Мы тут',
        iconCaption: 'Сколково'
    }, {
         preset: 'islands#greenDotIconWithCaption'
    }));
    myMap.controls.add(
        new ymaps.control.ZoomControl()
    );
}