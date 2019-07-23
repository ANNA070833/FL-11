let rootNode = document.getElementById('root');
let addList = document.getElementById('icon_add');
let actionText = document.getElementById('add_action_text');
let actionList = document.getElementById('action_list');
let message = document.getElementById('message');
let maxLength = 10;

actionText.addEventListener('input', function () {
    if (actionText.value.trim !== '') {
        addList.classList.add('enabled'); 
    
    } else {
        addList.classList.remove('enabled');
    }
});
addList.addEventListener('click', function () {
    if (!actionText.value.trim()) {
        return;
    }
    if (actionList.children.length < maxLength) {
        addActionElement();
        actionText.value = '';
        addList.classList.remove('enabled');
    } else {
        actionText.disabled = true;
        message.style.display = 'block';
    }
});
let listDiv, text;

function addActionElement() {
    listDiv = document.createElement('div');
    listDiv.className = 'listDiv';
    listDiv.setAttribute('draggable', 'true');
    actionList.appendChild(listDiv);

    let iconCheck = document.createElement('i');
    iconCheck.className = 'material-icons';
    iconCheck.textContent = 'check_box_outline_blank';
    listDiv.appendChild(iconCheck);

    let text = document.createElement('p');
    listDiv.appendChild(text);
    text.innerHTML = actionText.value;

    let iconEdit = document.createElement('i');
    iconEdit.className = 'material-icons';
    iconEdit.innerHTML = 'edit_box';
    listDiv.appendChild(iconEdit);
    iconEdit.addEventListener('click', editAction);


    let iconDelete = document.createElement('i');
    iconDelete.className = 'material-icons checkbox_icon_delete';
    iconDelete.innerHTML = 'delete_box';
    listDiv.appendChild(iconDelete);
    iconDelete.addEventListener('click', del);
    return text, listDiv;
}
function editAction() {

    let edit = document.createElement('div');
    edit.className = 'edit';
    listDiv.style.display = 'none';
    actionList.insertBefore(edit, listDiv);

    let inputEdit = document.createElement('input');
    inputEdit.className = 'input_edit';
    edit.appendChild(inputEdit);

    let editIcon = document.createElement('i');
    editIcon.className = 'edit_icon material-icons';
    editIcon.innerHTML = 'save_box';
    editIcon.addEventListener('click', save);
    edit.appendChild(editIcon);

    function save(event) {
        event.target.parentElement.style.display = 'none';
        listDiv.style.display = 'flex';
        text.innerHTML = inputEdit.value;
    }
}

//delete list item
function del() {
    listDiv.remove();
}
actionList.addEventListener('click', (e) => {
    let target = e.target;
    if (target.textContent === 'check_box_outline_blank') {
        target.textContent = 'check_box';
        target.classList.add('checked');
    }
    if (target.textContent === 'delete') {
        target.parentElement.remove();
        if (actionList.children.length < maxLength) {
            message.style.display = 'none';
        }
        if (actionList.children.length === maxLength) {
            addList.classList.remove('disabled');
            actionText.disabled = false;
            message.hidden = true;
        }
    }
    if (target.tagName !== 'I') {
        return;
    }
}, false);


