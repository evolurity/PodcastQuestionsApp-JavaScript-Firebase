export function getAuthForm() {
    return `
        <form class="mui-form" id="auth-form">
            <div class="mui-textfield">
                <input id="email" required type="email">
                <label for="email">Email</label>
            </div>
            <div class="mui-textfield">
                <input id="password" required type="password">
                <label for="password">Password</label>
            </div>
            <button
                    class="mui-btn mui-btn--raised mui-btn--primary"
                    type="submit"
            >
                Log in
            </button>
        </form>
    `
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyBkTZhG9NuVDDadj4im9p3NDcS__LllF90'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => data.idToken)
}