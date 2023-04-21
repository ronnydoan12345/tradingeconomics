fetch("https://api.tradingeconomics.com/news?c=guest:guest&f=json")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    let tableData = "";
    objectData.map((values) => {
      tableData += `<tr>
      <td>${values.title}</td>
      <td>${values.description}</td>
      <td>${values.country}</td>
      <td>${values.category}</td>
    </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((err) => {
    console.log(err);
  });
