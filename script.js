// Inicializa un nuevo swiper para el primer conjunto de diapositivas
var swiper = new Swiper(".mySwiper-1", {
    // Número de diapositivas visibles en la vista
    slidesPerView: 1,
    // Espacio entre las diapositivas en píxeles
    spaceBetween: 30,
    // Habilita el bucle infinito para las diapositivas
    loop: true,
    // Configuración de paginación
    pagination: {
        // Selector del elemento de paginación
        el: ".swiper-pagination",
        // Permite que la paginación sea clickeable
        clickable: true,
    },
    // Configuración de navegación
    navigation: {
        // Selector para el botón "siguiente"
        nextEl: ".swiper-button-next",
        // Selector para el botón "anterior"
        prevEl: ".swiper-button-prev",
    }
});

// Inicializa un nuevo swiper para el segundo conjunto de diapositivas
var swiper = new Swiper(".mySwiper-2", {
    // Número de diapositivas visibles en la vista
    slidesPerView: 3,
    // Espacio entre las diapositivas en píxeles
    spaceBetween: 20,
    // Habilita el bucle infinito para las diapositivas
    loop: true,
    // Permite que los grupos de diapositivas en blanco se llenen
    loopFillGroupWithBlank: true,
    // Configuración de navegación
    navigation: {
        // Selector para el botón "siguiente"
        nextEl: ".swiper-button-next",
        // Selector para el botón "anterior"
        prevEl: ".swiper-button-prev",
    },
    // Configuración de puntos de ruptura para la responsividad
    breakPoints: {
        // Para pantallas de 0 píxeles y más
        0: {
            slidesPerView: 1, // Muestra 1 diapositiva
        },
        // Para pantallas de 520 píxeles y más
        520: {
            slidesPerView: 2, // Muestra 2 diapositivas
        },
        // Para pantallas de 950 píxeles y más
        950: {
            slidesPerView: 3, // Muestra 3 diapositivas
        }
    }
});

// Selecciona todos los elementos de entrada con la clase "tabInput"
let tabInputs = document.querySelectorAll(".tabInput");

// Añade un evento de cambio a cada entrada de tabulador
tabInputs.forEach(function(input) {
    input.addEventListener("change", function() {
        // Obtiene el valor del input, que corresponde a un ID
        let id = input.value;
        // Selecciona el swiper correspondiente utilizando el ID
        let thisSwiper = document.getElementById("swiper" + id);
        // Actualiza el swiper seleccionado
        thisSwiper.swiper.update();
    });
});
