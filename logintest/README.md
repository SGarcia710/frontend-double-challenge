# Login Test

## Description
Create a login based on the mockup that you will find at: [Mockup](https://www.figma.com/proto/Tfc8bahSE26gzile0IVvyP/Untitled?node-id=1-111&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A111) or in the mockup folder. In the assets folder, you will find the logo that should be included in the top bar and the logout icon.

Within this repository, you will find fakebackend, where you must consume the endpoints to log in and generate the images of the animals.

## Requirements
- Do not use any components/css framework.
- Use vue-router.
- Backend errors (login fail, code is wrong, etc.) must be displayed in the Error message of the mockup for 3 seconds.
- The Code input should only be displayed when the backend returns 'otp required'.
- If anything is changed in username or password, the Code input will be hidden again.
- Once username, password, and code have been correctly entered, a JWT token will be received and must be used to consume the /randomAnimal endpoint.
- Save this token, so if we return to / it should not redirect us to the login page since we are already logged in.
- After logging in, we should automatically go to screen2.
- Initially, no animal will be displayed on screen2 until we press the button.
- If we press the button again, we should call the backend again and change the current animal to the newly generated one.
- When the logout icon is pressed, it should take us back to the login page.
- If we go directly to screen2 (Animals screen) and we are not logged in, it should take us to the login page.
- Screen2 (Animals Screen) will be the root of our project /, and the login page will be at /login.

## Backend
To run the backend, please read the README inside /fakebackend in the root of this project.

### Login Endpoint

```
POST http://localhost:3000/login
```

###### BODY
```
{
  "username": "admin",
  "password": "admin",
}
```

###### BODY WITH OTP
```
{
  "username": "admin",
  "password": "admin",
  "otp": "123456"
}
```

###### When the username and password are correct and the OTP has not been sent, the backend will return:
```
{
  "message": "otp required"
}
```

When the login has been performed with the correct OTP code, the backend will return:
```
{
    "message": "success",
    "token": "...."
}
```

### Random Animal Endpoint

```
GET http://localhost:3000/randomAnimal
```

###### It is necessary to send the JWT Token obtained in /login in the Authorization header as a Bearer token.
```
headers: {
  Authorization: 'Bearer eyJ...'
}
```

This endpoint will return:
```
{
  "animal": {
    "name": "rabbit",
    "img": "http://localhost:3000/assets/animals/rabbit.jpg"
  }
}
```
