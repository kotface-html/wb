const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    // Funkcja pobierająca dane
    const getData = () => {
        fetch('https://test-10ea5-default-rtdb.europe-west1.firebasedatabase.app/db.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data); // Tutaj otrzymujesz dane z bazy
            })
            .catch((error) => console.error('Błąd pobierania:', error));
    };

    // Przypisanie zdarzenia do linków
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Blokuje domyślne przeładowanie strony
            getData(); // Wywołanie pobierania danych po kliknięciu
        });
    });

      localStorage.setItem('goods' , JSON.stringify([24,233,22,34,2])) // dobawlajem 
    
    const goodsReadBetter = JSON.parse(localStorage.getItem('goods'))// dejaem masiw czitaemym 
    console.log(goodsReadBetter)
};

getGoods();

// в локале гудс єто ключ и он пихаеться везде куда надо и не надо 