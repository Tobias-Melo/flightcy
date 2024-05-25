function copyTicket() {
  let text = document.querySelector("#input").value;
  navigator.clipboard.writeText(text);
  document.getElementById('copied').style.display = 'flex';
  document.getElementById('copied-img').style.display = 'flex';
  document.getElementById('ticket-copy').style.display = 'none';
}

function getURLParams() {
  const params = new URLSearchParams(window.location.search);
  const paramsObject = {};
  params.forEach((value, key) => {
    paramsObject[key] = value;
  });
  return paramsObject;
}

function showElements(count, prefix) {
  for (let i = 1; i <= count; i++) {
    const element = document.getElementById(`${prefix}-${i}`);
    if (element) {
      element.style.display = 'flex';
    }
  }
}

function renderVooDetails() {
  const vooInfosDiv = document.getElementById('voo-infos');
  const params = getURLParams();
  const adults = parseInt(localStorage.getItem('adults') || '0');
  const storedValueChildren = localStorage.getItem('children') || '0';

  if (!isNaN(storedValueChildren) && storedValueChildren.trim() !== "") {
    var children = parseInt(storedValueChildren);
  } else {
    var children = 0;
  }

  if (adults > 1) {
    showElements(adults, 'adulto');
    document.getElementById('hr-adulto').style.display = 'flex';
    document.getElementById('h1-adulto').style.display = 'flex';
  }

  if (children > 0) {
    showElements(children, 'crianca');
    document.getElementById('hr-crianca').style.display = 'flex';
    document.getElementById('h1-crianca').style.display = 'flex';
  }

  const vooDetailsHTML = `
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span style="color: var(--color-secun);">Detalhes da Passagem</span>
      </h4>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">Passagem</h6>
          </div>
          <span class="text-body-secondary">R$ ${params.value}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">Adultos</h6>
          </div>
          <span class="text-body-secondary">${adults}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">Crianças</h6>
          </div>
          <span class="text-body-secondary">${children}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">Todas as bagagens inclusas</h6>
          </div>
          <img src="/img/reservar/voos/bags.svg" width="30px" alt="Bagagens">
        </li>
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">Impostos e Taxas</h6>
          </div>
          <span class="text-body-secondary">R$ 0</span>
        </li>
        <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
          <div class="text-success">
            <h6 class="my-0">Aviso</h6>
            <small>Impostos e Taxas já incluídos no valor total</small>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span class="montserrat-semibold">Total a pagar</span>
          <strong>R$ ${params.value}</strong>
        </li>
      </ul>
    </div>
  `;

  vooInfosDiv.innerHTML = vooDetailsHTML;
}

document.addEventListener('DOMContentLoaded', renderVooDetails);


document.getElementById('payment-form').addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const params = new URLSearchParams(window.location.search);

  const paymentData = {};
  formData.forEach((value, key) => {
    paymentData[key] = value;
  });

  params.forEach((value, key) => {
    paymentData[key] = value;
  });

  try {
    const response = await fetch('/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.statusText);
    }

    const result = await response.json();
    console.log('Pagamento salvo com sucesso:', result);

    const modalDiv = document.getElementById('modal-div');
    const modalSucess = `
    <div class="modal fade" id="idReserva" tabindex="-1" aria-labelledby="id-Reserva" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="id-Reserva">✅ Pagamento efetuado com sucesso!</h1>
          </div>
          <div class="modal-body">
            <h6><strong>Aqui está seu número de bilhete</strong></h6>
            Esse número é muito importante, pois apenas com ele consegue consultar as 
            informações e detalhes da sua passagem.
            <br><br>
            <strong>Seu código:</strong>
            <br><br>
            <div class="alert alert-success d-flex justify-content-between align-items-center">
              <input id="input" type="text" value="${result.ticket}" disabled style="border: none; background-color: transparent;">
              <span id="copied">Código copiado!</span>
              <button id="clipboardCopy" onclick="copyTicket()" class="btn">
                <img id="ticket-copy" src="/img/checkout/copy.svg" width="24px" alt="Botão de copiar">
                <img id="copied-img" src="/img/checkout/check-circle-2.svg" width="24px" alt="Icone de sucesso">
              </button>
            </div>
          </div>
          <div class="modal-footer">
          <a href="http://localhost:8080/consultar">  
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" style="width: 100%">
            Finalizar!
            </button></a>
          </div>
        </div>
      </div>
    </div>
  `;

    modalDiv.innerHTML = modalSucess;

    var myModal = new bootstrap.Modal(document.getElementById('idReserva'));
    myModal.show();
  } catch (error) {
    console.error('Erro:', error);
  }
});
