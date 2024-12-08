function addPair() {
    const input = document.getElementById('nameValueInput').value.trim();
    const regex = /^([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)$/; // Regex to validate input
    const match = input.match(regex);

    if (match) {
        const name = match[1];
        const value = match[2];
        const listItem = document.createElement('li');

        listItem.textContent = `${name} = ${value}`;
        listItem.onclick = function() {
            this.classList.toggle('selected');
            this.style.backgroundColor = this.classList.contains('selected') ? '#cce5ff' : '#fff';
        };

        document.getElementById('pairList').appendChild(listItem);
        document.getElementById('nameValueInput').value = ''; // Clear input
    } else {
        alert('Invalid input. Please use the format "<name> = <value>".');
    }
}

function sortByName() {
    sortList((a, b) => a.textContent.localeCompare(b.textContent));
}

function sortByValue() {
    sortList((a, b) => a.textContent.split('=').pop().trim().localeCompare(b.textContent.split('=').pop().trim()));
}

function sortList(compareFunction) {
    const list = document.getElementById('pairList');
    const items = Array.from(list.children);

    items.sort(compareFunction);

    // Clear the list and append sorted items
    list.innerHTML = '';
    items.forEach(item => list.appendChild(item));
}

function deleteSelected() {
    const listItems = document.querySelectorAll('#pairList li.selected');

    listItems.forEach(item => item.remove());}