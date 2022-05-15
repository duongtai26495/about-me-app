import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
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
    await RemoveAllItems();
}

export async function RemoveAllItems() {
    let items = [
        STORAGE.ACCESS_TOKEN_STORAGE,
        STORAGE.USERNAME_STORAGE,
        STORAGE.FULLNAME_STORAGE,
        STORAGE.EMAIL_STORAGE,
        STORAGE.GENDER_STORAGE,
        STORAGE.AVATAR_STORAGE,
        STORAGE.DESC_STORAGE,
        STORAGE.PHONE_STORAGE,
    ]

    await AsyncStorage.multiRemove(
        items,
        () => {
            console.log("Remove items success")
        }
    )
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
    

    await RemoveAllItems()
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
            let gender = result.gender + "";
            let profile_image = result.profile_image;
            let description = result.user_description + "";
            let phone = result.phone + "";
            let socials = JSON.stringify(result.socials);
            const items = [
                [STORAGE.SOCIALS_STORAGE,socials],
                [STORAGE.USERNAME_STORAGE, username],
                [STORAGE.FULLNAME_STORAGE, fullName],
                [STORAGE.EMAIL_STORAGE, email],
                [STORAGE.GENDER_STORAGE, gender],
                [STORAGE.AVATAR_STORAGE, profile_image],
                [STORAGE.DESC_STORAGE, description],
                [STORAGE.PHONE_STORAGE, phone]
            ]
            AsyncStorage.multiSet(items, () => {
                console.log('Save info user success');
            })
                .catch((error) => {
                    console.log('Save info user failure: ', error);
                })
        })
        .catch(error => console.log(error))
}

export async function RegisterNewUser(User) {
    let url = API.BASE_URL + API.REGISTER
    let RegisterUser = JSON.stringify({
        'full_name': User.fullname,
        'email': User.email,
        'phone': User.phone,
        'username': User.username,
        'password': User.password
    })

    let option = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: RegisterUser
    }
    return await axios(option)
        .then(response => {
            let result = response.data.msg
            console.log(result)
            if (response.data.data != null) {
                return true;
            } else {
                return false;
            }
        })
        .catch(error => console.log("Error login: ", error))

}

