import User from './User'
import App from './App'

function main() {
    const user1 = new User('Adam', 'Zawadzki', '22.12.2012', 'Kami2dd!!', 'female', 'abacki@gmail.com', 'USER')
    // const user2 = new User("Jan", "nowak", '20/10/2019', 'Jaaan123!', 'male', 'pawel@wp.pl')

    const superUser1 = new User("Ewa", "Farna", '20/10/2019', 'Ewa123123!', 'female', 'ewa@farna.com', 'ADMIN')
    const App1 = new App()
    App1.addUserToApp(user1)
    App1.addUserToApp(superUser1)

    App1.changeUserAccessLevel(superUser1, user1, 'admin')
    App1.changeUserPassword(superUser1, user1, '2115ToJestGang!')
    console.log(user1)

    // console.log(App1)
}

export default main