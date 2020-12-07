# User

## Info about the task4

```javascript
// Stwórz strukturę danych związaną z użytkownikami

// Obiekt charakteryzujący użytkownika:
// class User {
//     Ma mieć: Imię, Nazwisko, datę urodzenia, haslo, płeć, adres email, poziom dostepu = ""user""
//     Ma umożliwiać: zmianę email, zmianę hasła
// }

// Dodatkowo User ma mieć walidacje wykonaną za pomocą is.js oraz datę obsługiwaną przez bibliotekę moment.js
// - email ma być poprawnym emailem
// - password ma mieć min 8 znaków, co najmniej jedną wielką literę i co najmniej jedną cyfrę oraz co najmniej 1 znak specjalny
// - płeć musi być ze zbioru [male, female]
// - data (nieważne jaka wejdzie) do propa musi wejść w formacie MM/DD/YYYY
// - imię i nazwisko musi być niepuste
// jeśli któraś z walidacji się nie powiedzie obiekt ma nie być tworzony, tylko ma zwracać error z odpowiednimi komunikatami o niepowiedzionej walidacji


// Obiekt charakteryzujący administratora:
// class SuperUser {
// Obiekt ten ma dziedziczyć po użytkowniku informacje z dodatkowymi możliwościami
// Ma Miec: poziom dostepu dla siebie = "admin"
// Ma umożliwiać: zmieniać w obiekcie użytkownik poziom dostępu na "admin", oraz
// modyfikować jego hasło.
// }
```