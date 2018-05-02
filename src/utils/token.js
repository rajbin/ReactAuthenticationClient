function setToken(token) {
    sessionStorage.setItem('token', token);
}

function getToken() {
    return sessionStorage.getItem('token');
}

function removeToken() {
    sessionStorage.removeItem('token');
}

const Token = {
    setToken,
    getToken,
    removeToken
};

export default Token;
