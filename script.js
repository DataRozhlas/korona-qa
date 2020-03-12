fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSe5xHUQ-Xk6QFPVWahyVWToiuce9vBIRbqUYmWzoMnEe_Ygk1B9J_PNh6efgq4KScJ6RpZlrdjrJzG/pub?gid=1580333332&single=true&output=csv')
      .then(response => response.text())
      .then(data => {
        const resps = d3.csvParse(data)
        console.log(resps)
      })