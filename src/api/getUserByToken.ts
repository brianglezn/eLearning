export async function getUserByToken() {
    const token = localStorage.getItem('token');

    const response = await fetch(`https://elearning-back.onrender.com/user`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }

    return response.json();
}
