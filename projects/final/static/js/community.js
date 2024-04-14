document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var itemNumber = document.getElementById('itemNumber').value;
    var itemName = document.getElementById('itemName').value;
    var itemDate = document.getElementById('itemDate').value;
    var itemEmail = document.getElementById('itemEmail').value;
    var itemPhone = document.getElementById('itemPhone').value;
    var itemDescription = document.getElementById('itemDescription').value;

    var data = {
        id: itemNumber,
        name: itemName,
        date: itemDate,
        email: itemEmail,
        phone: itemPhone,
        description: itemDescription
    };

    fetch('https://final-25lt.onrender.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            var message = document.getElementById('message');
            message.textContent = 'Item added successfully!';
            message.style.display = 'block';
            setTimeout(function() {
                message.style.display = 'none';
            }, 2000);

            // refresh table
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

// 从数据库获取数据
function populateTableFromUrl(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var itemTable = document.getElementById('itemTable').getElementsByTagName('tbody')[0];

            data.forEach(item => {
                var tr = document.createElement('tr');
                var tdNumber = document.createElement('td');
                var tdName = document.createElement('td');
                var tdDate = document.createElement('td');
                var tdEmail = document.createElement('td');
                var tdPhone = document.createElement('td');
                var tdDescription = document.createElement('td');
                var tdOptions = document.createElement('td'); // 新增的选项列

                tdNumber.textContent = item.id;
                tdName.textContent = item.name;
                tdDate.textContent = item.date;
                tdEmail.textContent = item.email;
                tdPhone.textContent = item.phone;
                tdDescription.textContent = item.description;

                var deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.className = 'deleteButton';
                deleteButton.addEventListener('click', function() {
                    var confirmDelete = window.confirm("Are you sure you want to delete this item?");
                    if (confirmDelete) {
                        fetch('https://final-25lt.onrender.com/users/' + item.id, {
                                method: 'DELETE',
                            })
                            .then(response => response.json())
                            .then(data => {
                                console.log('Success:', data);
                                window.location.reload();
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                    }
                });

                var modifyButton = document.createElement('button');
                modifyButton.textContent = 'Modify';
                modifyButton.className = 'modifyButton';
                modifyButton.addEventListener('click', function() {
                    modal.style.display = "block";

                    document.getElementById('itemNumber').value = item.id;
                    document.getElementById('itemName').value = item.name;
                    document.getElementById('itemDate').value = item.date;
                    document.getElementById('itemEmail').value = item.email;
                    document.getElementById('itemPhone').value = item.phone;
                    document.getElementById('itemDescription').value = item.description;

                    addItemForm.removeEventListener('submit', addItemForm.submitHandler);
                    addItemForm.submitHandler = function(event) {
                        event.preventDefault();

                        var itemNumber = document.getElementById('itemNumber').value;
                        var itemName = document.getElementById('itemName').value;
                        var itemDate = document.getElementById('itemDate').value;
                        var itemEmail = document.getElementById('itemEmail').value;
                        var itemPhone = document.getElementById('itemPhone').value;
                        var itemDescription = document.getElementById('itemDescription').value;

                        var data = {
                            id: itemNumber,
                            name: itemName,
                            date: itemDate,
                            email: itemEmail,
                            phone: itemPhone,
                            description: itemDescription
                        };

                        fetch('https://final-25lt.onrender.com/users/' + item.id, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(data),
                            })
                            .then(response => response.json())
                            .then(data => {
                                var message = document.getElementById('message');
                                message.textContent = 'Item modified successfully!';
                                message.style.display = 'block';
                                setTimeout(function() {
                                    message.style.display = 'none';
                                }, 2000);

                                window.location.reload();
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });

                        addItemForm.reset();

                        modal.style.display = "none";
                    };
                    addItemForm.addEventListener('submit', addItemForm.submitHandler);
                });

                tdOptions.appendChild(deleteButton);
                tdOptions.appendChild(modifyButton);

                tr.appendChild(tdNumber);
                tr.appendChild(tdName);
                tr.appendChild(tdDate);
                tr.appendChild(tdEmail);
                tr.appendChild(tdPhone);
                tr.appendChild(tdDescription);
                tr.appendChild(tdOptions);

                itemTable.appendChild(tr);
            });
        })
        .catch(error => console.error('Error:', error));
}

populateTableFromUrl('https://final-25lt.onrender.com/users');


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
    event.preventDefault();


    addItemForm.reset();

    modal.style.display = "none";
});