function addguest() {
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var address = document.getElementById("address").value;
    var Number = document.getElementById("Number").value;
    
  
  
    if (name && date && address && Number) {
        var table = document.getElementById("guest-list");
        var row = table.insertRow();
  
        var nameCell = row.insertCell(0);
        var dateCell = row.insertCell(1);
        var AddressCell = row.insertCell(2);
        var NumberCell = row.insertCell(3);
  
  
        nameCell.innerHTML = name;
        dateCell.innerHTML = date;
        AddressCell.innerHTML = address;
        NumberCell.innerHTML = Number;
  
        document.getElementById("name").value = "";
        document.getElementById("date").value = "";
        document.getElementById("Address").value = "";
        document.getElementById("Number").value = "";
       
        
    }
  }