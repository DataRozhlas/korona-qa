function fillName(val) {
  if (val === '') return '<i>Anonym</i>'
  return val
}

function fillAnswr(val) {
  if (val === '') return '<i>Otázka ještě není zodpovězená.</i>'
  return val
}

function niceTime(val) {
  const day = val.split(' ')[0].split('/')
  const time = val.split(' ')[1].split(':')
  return `${day[0]}. ${day[1]}. ${time[0]}:${time[1]}`
}

fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSe5xHUQ-Xk6QFPVWahyVWToiuce9vBIRbqUYmWzoMnEe_Ygk1B9J_PNh6efgq4KScJ6RpZlrdjrJzG/pub?gid=1580333332&single=true&output=csv')
  .then(response => response.text())
  .then(data => {
    const resps = d3.csvParse(data).filter(resp => {
      if (resp.editor === 'ok') return true
    })
    resps.forEach(resp => {
      document.getElementById('corona_qa_resp').innerHTML += `<div class="corona_resp"><p><b>Ptá se ${fillName(resp['Jméno'])}, ${niceTime(resp.Timestamp)}:</b> ${resp['Otázka']}</p><p><b>Odpověď: </b>${fillAnswr(resp.odpoved)}</p></div>`
      console.log(resp)
    })
  })
