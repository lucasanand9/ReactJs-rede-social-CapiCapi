export default function Logout(){
    localStorage.removeItem('userToken');
    window.location.href=("http://localhost:3000/login");
}
