function addObjectToTable(obj) {
    const tableBody = document.getElementById('specs');
  
    for (let propName in obj) {
      const propValue = obj[propName];
  
      const newRow = document.createElement('tr');
  
      const propNameCell = document.createElement('td');
      propNameCell.textContent = propName;
  
      const propValueCell = document.createElement('td');
      propValueCell.textContent = propValue;
  
      newRow.appendChild(propNameCell);
      newRow.appendChild(propValueCell);
  
      tableBody.appendChild(newRow);
    }
}

function clearTable() {
    var table = document.getElementById("specs");
    var rowCount = table.rows.length;
  
    // Delete rows starting from the end to avoid skipping rows
    for (var i = rowCount - 1; i >= 0; i--) {
      table.deleteRow(i);
    }
  }

function clearField() {
    document.getElementById("vinGet").value = "";
}

async function getVicSpecs() {

    const vin = document.getElementById("vinGet").value;

    if (!vin) {
        alert("Please enter a VIN.");
    } 

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/vinlookup?vin=' + vin,
        headers: { 'X-Api-Key': 'tP+lmuTgxx/i/tepAi3OvA==Xde3N2mITcKjhgec'},
        contentType: 'application/json',
        success: function(result) {
            clearTable();
            addObjectToTable(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });


}