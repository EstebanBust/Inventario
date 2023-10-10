export function token(){
    const authToken = localStorage.getItem('authToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}
    