const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const renderGoods = (goods) => {
        const goodsContainer = document.querySelector('.long-goods-list');

        goodsContainer.innerHTML = "";

        goods.forEach(good => {
            const goodBlock = document.createElement('div');

            goodBlock.classList.add('col-lg-3');
            goodBlock.classList.add('col-sm-6');

            goodBlock.innerHTML = `
            <div class="goods-card">
						<span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
						<!-- /.label --><img src="db/${good.img}" alt="image: Hoodie" class="goods-image">
						<h3 class="goods-title">${good.name}</h3>
						<!-- /.goods-title -->
						<p class="goods-description">${good.description}</p>
						<!-- /.goods-description -->
						<!-- /.goods-price -->
						<button class="button goods-card-btn add-to-cart" data-id="${good.id}">
							<span class="button-price">${name.price}$</span>
						</button>
					</div>
                    `;
            goodsContainer.append(goodBlock);
        });
    }; // ВИПРАВЛЕНО: Закрито функцію renderGoods

    // Funkcja pobierająca dane
    const getData = (value, category) => {
        fetch('https://test-10ea5-default-rtdb.europe-west1.firebasedatabase.app/db.json')
            .then((res) => res.json())
            .then((data) => {
                const array = category ? data.filter((item) => item[category] == value) : data; //мне тот фелтер отдает только те значения которыеп тру по булевосу значению и мы тут провиряем 
                  //рвняеться гендер вумен  а мэнсс это фолс 
                  //category ? console.log('gergffgd') : console.log('asd') // это какбы иф череез вопарос двоеточчье это алсе 
                  
                localStorage.setItem('goods', JSON.stringify(array)); // Tutaj otrzymujesz dane z bazy

                // ВИПРАВЛЕНО: Використовуємо .includes() або pathname замість повного href
                if (!window.location.pathname.includes('goods.html')) {
                    window.location.href = 'goods.html'; // Редирект на сторінку
                } else {
                    renderGoods(array); // Передаємо відфільтрований масив у рендер
                }
            });
    };

    // Przypisanie zdarzenia do linków
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Blokuje domyślне перевантаження сторінки

            const linkValue = link.textContent;
            const category = link.dataset.field;
            getData(linkValue, category); // Wywołanie pobierania danych po kliknięciu
        });
    });
    
    const goodsReadBetter = JSON.parse(localStorage.getItem('goods')); // dejaem masiw czitaemym 
    console.log(goodsReadBetter);

    // ВИПРАВЛЕНО: Перевірка для автоматичного рендеру при завантаженні goods.html
    if (localStorage.getItem('goods') && window.location.pathname.includes('goods.html')) {
        renderGoods(JSON.parse(localStorage.getItem('goods')));
    }
}; // ВИПРАВЛЕНО: Закрито функцію getGoods

getGoods();
