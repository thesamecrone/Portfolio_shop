const API_URL = 'https://velorettibackend-production.up.railway.app';
const tableBody = document.querySelector('#userTableBody');
const selectAllCheckbox = document.getElementById('selectAll');

async function loadUsers() {
    try {
        const response = await fetch(`${API_URL}/api/users`, { credentials: 'include' });
        if (!response.ok) throw new Error('Unauthorized');
        
        const users = await response.json();
        
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
    } catch (err) {
        console.error("Error loading users:", err);
        window.location.href = '/login.html';
    }
}

function getSelectedUserIds() {
    const checkboxes = document.querySelectorAll('.user-checkbox:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

async function sendUserAction(actionEndpoint) {
    const selectedIds = getSelectedUserIds();
    if (selectedIds.length === 0) {
        alert("Please select at least one user");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/api/users/${actionEndpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ids: selectedIds }),
            credentials: 'include'
        });

        if (response.ok) {
            loadUsers();
        } else {
            alert("Action failed");
        }
    } catch (err) {
        console.error("Error:", err);
        alert("Something went wrong");
    }
}

selectAllCheckbox.addEventListener('change', () => {
    const checkboxes = document.querySelectorAll('.user-checkbox');
    checkboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
});

document.getElementById('btnBlock').addEventListener('click', () => sendUserAction('block'));
document.getElementById('btnUnblock').addEventListener('click', () => sendUserAction('unblock'));
document.getElementById('btnDelete').addEventListener('click', () => sendUserAction('delete'));
document.getElementById('btnDeleteUnverified').addEventListener('click', () => sendUserAction('delete-unverified'));

loadUsers();