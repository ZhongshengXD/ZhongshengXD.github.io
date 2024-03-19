document.getElementById('addItemForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var itemNumber = document.getElementById('itemNumber').value;
    var itemName = document.getElementById('itemName').value;
    var itemDate = document.getElementById('itemDate').value;
    var itemEmail = document.getElementById('itemEmail').value;
    var itemPhone = document.getElementById('itemPhone').value;
    var itemDescription = document.getElementById('itemDescription').value;

    var li = document.createElement('li');
    var divNumber = document.createElement('div');
    var divName = document.createElement('div');
    var divDate = document.createElement('div');
    var divEmail = document.createElement('div');
    var divPhone = document.createElement('div');
    var divDescription = document.createElement('div');

    divNumber.textContent = itemNumber;
    divName.textContent = itemName;
    divDate.textContent = itemDate;
    divEmail.textContent = itemEmail;
    divPhone.textContent = itemPhone;
    divDescription.textContent = itemDescription;

    divNumber.className = 'itemNumber';
    divName.className = 'itemName';
    divDate.className = 'itemDate';
    divEmail.className = 'itemEmail';
    divPhone.className = 'itemPhone';
    divDescription.className = 'itemDescription';

    li.appendChild(divNumber);
    li.appendChild(divName);
    li.appendChild(divDate);
    li.appendChild(divEmail);
    li.appendChild(divPhone);
    li.appendChild(divDescription);

    document.getElementById('itemList').appendChild(li);

    var message = document.getElementById('message');
    message.textContent = 'Item added successfully!';
    message.style.display = 'block';

    setTimeout(function () {
        message.style.display = 'none';
    }, 2000);
});

var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var addItemForm = document.getElementById("addItemForm");
addItemForm.addEventListener("submit", function(event) {
    event.preventDefault(); // 防止表单提交刷新页面


    addItemForm.reset();

    modal.style.display = "none";
});
