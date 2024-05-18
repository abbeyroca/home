const abbeyRocaAddress = "https://maps.app.goo.gl/HheCenUsziWJ5nMw5";
const sheetId = '1jvMHBSXOZhzuDwNmXMuepNAhK95vi3f193c0Z_FWmls';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/?`;
const sheetName = 'Espaço Cultural Abbey Roça';
const query = encodeURIComponent("Select A, B, D, E")
const url = `${base}&sheet=${sheetName}&tq=${query}`

const data = []
document.addEventListener('DOMContentLoaded', init)
const output = document.querySelector('.output')
function init() {
  fetch(url)
  .then(res => res.text())
  .then(rep => {
            //Apaga textos adicionais e extrai so o JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            const colz = [];
            const tr = document.createElement('tr');
            //Extrai nome das colunas
            jsonData.table.cols.forEach((heading) => {
              let column = heading.label;
                colz.push(column);
                  const th = document.createElement('th');
                  tr.appendChild(th);

                })
            //Extrai dados das linhas
            jsonData.table.rows.forEach((rowData) => {
                const row = {};
                colz.forEach((ele, ind) => {
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
                  })
                data.push(row);
              })
              processRows(data);
            })
}

function processRows(json) {
  var total = 0.0
  json.forEach((row) => {
    const tr = document.createElement('tr');
        const keys = Object.keys(row);

        keys.forEach((key) => {
            console.log(key)
        })
      })
      
    }