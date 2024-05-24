document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const dataParam = urlParams.get('data');
  if (dataParam) {
    const data = JSON.parse(decodeURIComponent(dataParam));
    const vooResultDiv = document.querySelector('.voo-result');
    const noFlightsDiv = document.querySelector('.no-flights');
    noFlightsDiv.style.display = 'none';
    if (data.length > 0) {
      data.forEach(voo => {

        const vooDiv = document.createElement('div');
        vooDiv.classList.add('voo');

        vooDiv.innerHTML = `
        <div>
          <img src="/img/reservar/voos/${voo.company}.png" width="100px" alt="Logo da empresa de linhas aéreas">
        </div>
        <div class="voo-info">
          <div class="voo-price">
            <h1>Voe com a ${voo.company}</h1>
            <div class="voo-price-info">
              <div class="voo-price-r">
                <span>R$</span>
                <h1>${voo.value}</h1>
              </div>
              <p>Todas as taxas incluídas</p>
            </div>
          </div>
          <div class="voo-details">
            <div class="voo-title">
              <h1>Ida</h1>
              <div class="voo-hour">
                <p>${voo.from_hour}</p>
                <div class="voo-dir">
                  <span>Direto</span>
                  <hr>
                </div>
                <p>${voo.to_hour}</p>
                <span class="voo-span-hour">${voo.duration}</span>
                <img src="/img/reservar/voos/bags.svg" width="30px" alt="Bagagens">
              </div>
            </div>
            <div class="voo-title">
              <h1>Volta</h1>
              <div class="voo-hour">
                <p>${voo.return_from_hour}</p>
                <div class="voo-dir">
                  <span>Direto</span>
                  <hr>
                </div>
                <p>${voo.return_to_hour}</p>
                <span class="voo-span-hour">${voo.duration_return}</span>
                <img src="/img/reservar/voos/bags.svg" width="30px" alt="Bagagens">
              </div>
            </div>
          </div>
          <div class="voo-buy">
            <button class="buy-button" data-voo='${JSON.stringify(voo)}'>
              Comprar
            </button>
          </div>
        </div>
      `;
        vooResultDiv.appendChild(vooDiv);
        noFlightsDiv.style.display = 'none';
      });

      document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', function () {
          const voo = JSON.parse(this.dataset.voo);
          const params = new URLSearchParams(voo).toString();
          window.location.href = `http://localhost:8080/checkout?${params}`;
        });
      });
    } else {
      noFlightsDiv.style.display = 'flex';
    }
  }
});


document.getElementById('flight-search-form').addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const searchParams = new URLSearchParams();

  let adults = '';
  let children = '';

  for (const pair of formData) {
    if (pair[0] === 'adults') {
      adults = pair[1];
    } else if (pair[0] === 'children') {
      children = pair[1];
    } else if (pair[0] !== 'options-base') {
      searchParams.append(pair[0], pair[1]);
    }
  }

  localStorage.setItem('adults', adults);
  localStorage.setItem('children', children);

  try {
    const response = await fetch('/voos?' + searchParams.toString(), {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.statusText);
    }

    const data = await response.json();
    console.log(data);

    const vooResultDiv = document.querySelector('.voo-result');
    const noFlightsDiv = document.querySelector('.no-flights');

    vooResultDiv.innerHTML = '';

    if (data.length > 0) {
      console.log('Data received:', data);
      data.forEach(voo => {
        const vooDiv = document.createElement('div');
        vooDiv.classList.add('voo');

        vooDiv.innerHTML = `
          <div>
            <img src="/img/reservar/voos/${voo.company}.png" width="100px" alt="Logo da empresa de linhas aéreas">
          </div>
          <div class="voo-info">
            <div class="voo-price">
              <h1>Voe com a ${voo.company}</h1>
              <div class="voo-price-info">
                <div class="voo-price-r">
                  <span>R$</span>
                  <h1>${voo.value}</h1>
                </div>
                <p>Todas as taxas incluídas</p>
              </div>
            </div>
            <div class="voo-details">
              <div class="voo-title">
                <h1>Ida</h1>
                <div class="voo-hour">
                  <p>${voo.from_hour}</p>
                  <div class="voo-dir">
                    <span>Direto</span>
                    <hr>
                  </div>
                  <p>${voo.to_hour}</p>
                  <span class="voo-span-hour">${voo.duration}</span>
                  <img src="/img/reservar/voos/bags.svg" width="30px" alt="Bagagens">
                </div>
              </div>
              <div class="voo-title">
                <h1>Volta</h1>
                <div class="voo-hour">
                  <p>${voo.return_from_hour}</p>
                  <div class="voo-dir">
                    <span>Direto</span>
                    <hr>
                  </div>
                  <p>${voo.return_to_hour}</p>
                  <span class="voo-span-hour">${voo.duration_return}</span>
                  <img src="/img/reservar/voos/bags.svg" width="30px" alt="Bagagens">
                </div>
              </div>
            </div>
            <div class="voo-buy">
              <button class="buy-button" data-voo='${JSON.stringify(voo)}'>
                Comprar
              </button>
            </div>
          </div>
        `;

        vooResultDiv.appendChild(vooDiv);
        noFlightsDiv.style.display = 'none';
      });

      document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', function () {
          const voo = JSON.parse(this.dataset.voo);
          console.log('Buying ticket:', voo);
          const params = new URLSearchParams(voo).toString();
          console.log('Redirecting to:', `http://localhost:8080/checkout?${params}`); // Log de debug
          window.location.href = `http://localhost:8080/checkout?${params}`;
        });
      });

    } else {
      noFlightsDiv.style.display = 'flex';
    }

  } catch (error) {
    console.error('Erro:', error);
  }
});

document.getElementById('option5').addEventListener('click', async function (event) {
  document.getElementById('volta').disabled = true;
  document.getElementById('volta').style.backgroundColor = 'rgba(229, 229, 229, 0.5)'
  document.getElementById('text-volta').style.color = 'rgba(0, 0, 0, 0.4)'
})

document.getElementById('option6').addEventListener('click', async function (event) {
  document.getElementById('volta').disabled = false;
  document.getElementById('volta').style.backgroundColor = '#fff'
  document.getElementById('text-volta').style.color = 'var(--color-secun)'
})
