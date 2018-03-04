mapboxgl.accessToken = 'pk.eyJ1IjoibWluY2h1a3Vsa2FybmkiLCJhIjoiY2pkeWlzYWVyMGNpbTJxcDk0ZHoydzdnbCJ9.pZpIc18UVrBgdC0Ry3-wmw';

var chapters = {
    'part-1': {
        center: [82.8, 23.88],
        zoom: 3.7,
        bearing: 0,
        pitch: 0
    },
    'part-2': {
        center: [77.697002, 10.590756],
        zoom: 7.00,
        bearing: 0,
        pitch: 60.00
    },
    'part-3': {
        center: [76.453140, 35.790593],
        zoom: 6.84,
        bearing: -178.00,
        pitch: 60.00
    },
    'part-4': {
        center: [89.573596, 26.974661],
        zoom: 7.20,
        bearing: -55.00,
        pitch: 60.00
    },
    'part-5': {
        center: [94.927723, 28.441080],
        zoom: 7.32,
        bearing: 0,
        pitch: 60.00
    },
    'part-6': {
        center: [80.015414, 30.341032],
        zoom: 8.58,
        bearing: -66.00,
        pitch: 60.00,
    }
};

var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/minchukulkarni/cjdzxhzlaa9po2st9i8s6cldn',
        center: [82.8, 23.88],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    });
};

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    console.log(chapterNames);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'part-1';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}