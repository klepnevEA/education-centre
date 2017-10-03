var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [51.535859, 46.035299], 
        zoom: 17,
        controls: []

    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(new ymaps.Placemark([51.535859, 46.035299], {
        balloonContent: 'Мы тут',
        iconCaption: 'Образовательный центр'
    }, {
         preset: 'islands#blueDotIconWithCaption'
    }));
    myMap.controls.add(
        new ymaps.control.ZoomControl()
    );
}