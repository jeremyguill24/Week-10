let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('first-Name').value;
    row.insertCell(1).innerHTML = document.getElementById('last-Name').value;
    row.insertCell(2).innerHTML = document.getElementById('employee-id').value;
    row.insertCell(3).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(4).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(5).innerHTML = document.getElementById('new-end-date').value;
    row.insertCell(6).innerHTML = document.getElementById('new-department').value;
    let actions = row.insertCell(7);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('first-Name').value = '';
})

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Delete row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}