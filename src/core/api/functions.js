import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../../constants/API';
import STORAGE from '../../constants/STORAGE';

export async function CheckTokenIsExist() {
    let token = await AsyncStorage.getItem(STORAGE.ACCESS_TOKEN_STORAGE);
    if (token != null) {
        console.log("User logged in: ", token)
        return true
    } else {
        console.log("User do not login")
        return false
    }
}

export async function SignOut() {
    await AsyncStorage.removeItem(STORAGE.ACCESS_TOKEN_STORAGE)
}

export async function SignInWithUsernamePassword(User) {
    let data = new FormData();
    data.append('username', User.username);
    data.append('password', User.password);

    let url = API.BASE_URL + API.LOGIN;

    let option = {
        method: 'POST',
        body: data
    }
    return await fetch(url, option)
        .then(response => response.json())
        .then(result => {
            let token = result.access_token;
            AsyncStorage.setItem(STORAGE.ACCESS_TOKEN_STORAGE, token);
            GetUserData(User.username)
        })

        .catch(error => console.log("Error login: ", error))

}

export function GetUserData(username) {
    let url = API.BASE_URL + username;

    let option = {
        method: 'GET'
    }

    fetch(url, option)
        .then(response => response.json())
        .then(result => {
            let fullName = result.full_name;
            let email = result.email;
            let username = result.username;
            let gender = result.gender+"";
            let profile_image = result.profile_image;

            const items = [
                [STORAGE.USERNAME_STORAGE, username],
                [STORAGE.FULLNAME_STORAGE, fullName],
                [STORAGE.EMAIL_STORAGE, email],
                [STORAGE.GENDER_STORAGE, gender],
                [STORAGE.AVATAR_STORAGE, profile_image]
            ]

            AsyncStorage.multiSet(items, ()=>{
                console.log('Save info user success');
            })
        })
        .catch(error => console.log(error))
}