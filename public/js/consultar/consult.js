// search-ticket
// ticket
// btn-search-ticket
// 12346915

document.getElementById('form-search-ticket').addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const searchParams = new URLSearchParams();
  for (const pair of formData) {
    searchParams.append(pair[0], pair[1]);
  }

  console.log(searchParams.toString())

  try {
    const response = await fetch('/tickets?' + searchParams.toString(), {
      method: 'GET'
    });
    console.log(response)

    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.statusText);
    }

    const data = await response.json();

    console.log(data);

    const havTickets = document.querySelector('.card-reserve-2');
    const noTickets = document.querySelector('#no-ticket');

    noTickets.style.display = 'flex';
    havTickets.innerHTML = '';

    if (data.length > 0) {
      data.forEach(voo => {
        const vooDiv = document.createElement('div');
        vooDiv.classList.add('card-reserve');

        vooDiv.innerHTML = `
        <div class="d-flex justify-content-between inital-title p-3">
        <h1 class="tradegothic-font">Sua companhia aérea é a ${voo.company}</h1>
        <h1 class="tradegothic-font">Total pago - <span class="tradegothic-font">R$ ${voo.value}</span></h1>
      </div>

      <div class="d-flex flex-row justify-content-between">
        <div style="background-color: var(--color-secun-a); border-radius: 0px 0px 0px 16px;" class="p-4">
          <div class="d-flex flex-column" style="width: fit-content;">
            <div class="voo-info" style="width: 100%;">
              <h1>${voo.from_hour}</h1>
              <p class="text-wrap">${voo.from}</p>
            </div>
            <div class="d-flex py-3">
              <div class="d-flex align-items-center flex-column row-gap-2">
                <div class="linha-vertical"></div>
                <img src="/img/consultar/aviao.svg" width="24px" alt="Icone de um aviao">
                <div class="linha-vertical"></div>
              </div>
            </div>
            <div class="voo-info">
              <h1>${voo.to_hour}</h1>
              <p class="text-wrap">${voo.to}</p>
            </div>
          </div>
        </div>

        <div class="d-flex flex-column w-100">
          <div class="d-flex justify-content-between align-items-center p-4 text-white"
            style="background-color: var(--color-prin);">
            <div class="d-flex flex-column">
              <h1 style="margin: 0; font-size: 24px;" class="tradegothic-font">${voo.first_name} ${voo.last_name}</h1>
              <div class="d-flex column-gap-1 py-1">
                <p style="margin: 0;" class="montserrat-14px">Bilhete número</p>
                <span id="id-bilhete" class="montserrat-14px">${voo.ticket}</span>
              </div>
            </div>
            <h1 style="margin: 0; font-size: 24px;" class="tradegothic-font">
            ${voo.class}
            </h1>
          </div>
          <div class="d-flex flex-row align-items-center justify-content-between py-1 px-5 h-100">

            <div class="d-flex flex-column row-gap-5">
              
              <div class="d-flex flex-row justify-content-between align-items-center column-gap-5">
                <div class="d-flex justify-content-center align-items-center column-gap-2">
                  <img src="/img/consultar/calendar-2.svg" width="44px" class="date-icon" alt="">
                  <div class="info-initial-voo d-flex flex-column row-gap-1">
                    <h1>Data da Ida<span style="color: #fff;">__</span></h1>
                    <p>${voo.from_date}</p>
                  </div>
                </div>

                <div class="d-flex justify-content-center align-items-center column-gap-2">
                  <img src="/img/consultar/clock-three.svg" width="44px" class="date-icon" alt="">
                  <div class="info-initial-voo d-flex flex-column row-gap-1">
                    <h1>Saída - Chegada</h1>
                    <div class="d-flex column-gap-1">
                      <p style="margin: 0;">${voo.from_hour}</p>
                      <p style="margin: 0;">-</p>
                      <p style="margin: 0;">${voo.to_hour}</p>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-center align-items-center column-gap-2">
                  <img src="/img/consultar/clock-three.svg" width="44px" class="date-icon" alt="">
                  <div class="info-initial-voo d-flex flex-column row-gap-1">
                    <h1>Duração</h1>
                    <p>${voo.duration}</p>
                  </div>
                </div>
              </div>

              <div class="d-flex flex-row justify-content-between align-items-center column-gap-2">
                <div class="d-flex justify-content-center align-items-center column-gap-2">
                  <img src="/img/consultar/calendar-2.svg" width="44px" class="date-icon" alt="">
                  <div class="info-initial-voo d-flex flex-column row-gap-1">
                    <h1>Data da Volta</h1>
                    <p>${voo.to_date}</p>
                  </div>
                </div>

                <div class="d-flex justify-content-center align-items-center column-gap-2">
                  <img src="/img/consultar/clock-three.svg" width="44px" class="date-icon" alt="">
                  <div class="info-initial-voo d-flex flex-column row-gap-1">
                    <h1>Saída - Chegada</h1>
                    <div class="d-flex column-gap-1">
                      <p style="margin: 0;">${voo.return_from_hour}</p>
                      <p style="margin: 0;">-</p>
                      <p style="margin: 0;">${voo.return_to_hour}</p>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-center align-items-center column-gap-2">
                  <img src="/img/consultar/clock-three.svg" width="44px" class="date-icon" alt="">
                  <div class="info-initial-voo d-flex flex-column row-gap-1">
                    <h1>Duração</h1>
                    <p>${voo.duration_return}</p>
                  </div>
                </div>
            </div>
            </div>
            <div class="linha-vertical-2"></div>
            <img src="/img/reservar/voos/${voo.company}.png" width="120px" alt="">
          </div>
        </div>
      </div>
        `;
        havTickets.appendChild(vooDiv);
        noTickets.style.display = 'none';
      })
    }
    } catch (err) {
      console.error('Erro: ', err)
    }

  })