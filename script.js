function addToList() {
    var div_code = document.getElementById('code');
    var div_name = document.getElementById('name');
    var div_desc = document.getElementById('desc');
    var div_cont = document.getElementById('cont');
    var div_price = document.getElementById('price');
    var div_date = new Date();
    var div_table = document.getElementById('row');

    var tr = div_table.insertRow(0);

    var td0 = tr.insertCell(0);
    var td1 = tr.insertCell(1);
    var td2 = tr.insertCell(2);
    var td3 = tr.insertCell(3);
    var td4 = tr.insertCell(4);
    var td5 = tr.insertCell(5);

    td0.innerHTML = document.getElementById('code').value ;
    td1.innerHTML = document.getElementById('name').value ;
    td2.innerHTML = document.getElementById('desc').value;
    td3.innerHTML = document.getElementById('cont').value;
    td4.innerHTML = document.getElementById('price').value;
    td5.innerHTML = div_date;

}
document.getElementById('add').addEventListener('click', addToList);
