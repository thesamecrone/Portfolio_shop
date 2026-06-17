const API_URL = 'https://velorettibackend-production.up.railway.app';
const tableBody = document.querySelector('#userTableBody');
const selectAllCheckbox = document.getElementById('selectAll');

const btnBlock = document.getElementById('btnBlock');
const btnUnblock = document.getElementById('btnUnblock');
const btnDelete = document.getElementById('btnDelete');
const btnDeleteUnverified = document.getElementById('btnDeleteUnverified');

function showStatusMessage(text, isError = false) {
    let msgDiv = document.getElementById('status-msg');
    if (!msgDiv) {
        msgDiv = document.createElement('div');
        msgDiv.id = 'status-msg';
        msgDiv.style.fontWeight = '500';
        msgDiv.style.marginBottom = '15px';
        const toolbar = document.querySelector('.d-flex');
        if (toolbar) toolbar.parentNode.insertBefore(msgDiv, toolbar);
    }
    msgDiv.textContent = text;
    msgDiv.style.color = isError ? '#dc3545' : '#198754';
    
    setTimeout(() => { msgDiv.textContent = ''; }, 3000);
}

function updateToolbarState() {
    // important: toolbar shouldn't disappear, just disable or enable buttons
    const selectedCount = getSelectedUserIds().length;
    const hasSelection = selectedCount > 0;

    btnBlock.disabled = !hasSelection;
    btnUnblock.disabled = !hasSelection;
    btnDelete.disabled = !hasSelection;
    btnDeleteUnverified.disabled = !hasSelection;
}

async function loadUsers() {
    try {
        const response = await fetch(`${API_URL}/api/users`, { credentials: 'include' });
        if (!response.ok) throw new Error('Unauthorized');
        
        const users = await response.json();
        
        // note: sorting users by last login time
        users.sort((a, b) => new Date(b.lastLogin) - new Date(a.lastLogin));

        tableBody.innerHTML = users.map(user => `
            <tr>
                <td><input type="checkbox" class="user-checkbox" value="${user.id}"></td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'Never'}</td>
                <td>${user.status}</td>
            </tr>
        `).join('');

        selectAllCheckbox.checked = false;
        updateToolbarState();

        document.querySelectorAll('.user-checkbox').forEach(cb => {
            cb.addEventListener('change', updateToolbarState);
        });
    } catch (err) {
        console.error("Error loading users:", err);
        showStatusMessage("Failed to load users list.", true);
    }
}

function getSelectedUserIds() {
    const checkboxes = document.querySelectorAll('.user-checkbox:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

async function sendUserAction(actionEndpoint) {
    const selectedIds = getSelectedUserIds();
    if (selectedIds.length === 0) {
        showStatusMessage("Please select at least one user", true);
        return;
    }

    try {
        const response = await fetch(`${API_URL}/api/users/${actionEndpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ids: selectedIds }),
            credentials: 'include'
        });

       if (response.status === 401) {
            window.location.href = 'bike.html?openLogin=true&reason=blocked';
            return;
        }

        // nota bene: no browser alerts allowed, showing message in app instead
        if (response.ok) {
            showStatusMessage("Operation completed successfully!");
            loadUsers();
        } else {
            showStatusMessage("Action failed on server.", true);
        }
    } catch (err) {
        console.error("Error:", err);
        showStatusMessage("Something went wrong", true);
    }
}

selectAllCheckbox.addEventListener('change', () => {
    const checkboxes = document.querySelectorAll('.user-checkbox');
    checkboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
    updateToolbarState();
});

btnBlock.addEventListener('click', () => sendUserAction('block'));
btnUnblock.addEventListener('click', () => sendUserAction('unblock'));
btnDelete.addEventListener('click', () => sendUserAction('delete'));
btnDeleteUnverified.addEventListener('click', () => sendUserAction('delete-unverified'));

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));

loadUsers();

window.addEventListener('load', () => {
    setTimeout(() => {
        if (tableBody.innerHTML.trim() === "") {
            loadUsers();
        }
    }, 1000);
});