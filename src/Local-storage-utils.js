export const USER = 'USER';

export function getUserFromLocalStorage(){
    const user = localStorage.getItem(USER);

    if (user) return JSON.parse(user);

    return {
        email: '',
        id: '',
        token: ''
    }
}

export function putUserIntoLocalStorage(user){
    localStorage.setItem(USER, JSON.stringify(user));
}
