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
        console.log(response)

        if (!response.ok) {
          throw new Error('Erro na requisição: ' + response.statusText);
        }

        const data = await response.json();

        console.log(data);

        window.location.href = `http://localhost:8080/reservar?data=${encodeURIComponent(JSON.stringify(data))}`;

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


