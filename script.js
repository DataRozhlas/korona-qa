fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSe5xHUQ-Xk6QFPVWahyVWToiuce9vBIRbqUYmWzoMnEe_Ygk1B9J_PNh6efgq4KScJ6RpZlrdjrJzG/pub?gid=1580333332&single=true&output=csv')
  .then(response => response.text())
  .then(data => {
    const resps = d3.csvParse(data).filter(resp => {
      if (resp.editor === 'ok') return true
    })
    resps.forEach(resp => {
      document.getElementById('corona_qa_resp').innerHTML += `<div class="corona_resp"><p>Ptá se Karel, 12:20 30. 4.<br>Je potřeba se mejt?</p><p><b>Odpověď: </b>Naopak, špína chrání před nákazou jako brnění.</p></div>`
      console.log(resp)
    })
  })
