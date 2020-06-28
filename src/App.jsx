import React, { useState } from 'react' // вытащили хук useState
import { UserTable } from './tables/UserTable'
import { AddUserForm } from './forms/AddUserForm'
import './App.css'

const App = () => {
  // добавили данные
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Max', username: 'maxfarseer' },
  ]

  // используем useState хук
  // в качестве начальных данных, передаем usersData
  // в users будем хранить пользователей, как будто это state.users
  // setUsers - это функция, как будто this.setState({ users: ... })
  const [users, setUsers] = useState(usersData)

  // функция добавления пользователя
  const addUser = (user) => {
    // создаем id значением на 1 больше (автоинкремент)
    user.id = users.id + 1
    // вызываем setUsers определенную выше в хуке useState
    // передаем туда все, что было в users + новый элемент user
    setUsers([...users, user])
  }

  // для примера работы функции setUsers
  // сохраним ее глобально
  // так делать не надо :)
  window.setUsers = setUsers

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          {/* добавили форму */}
          {/* передаем addUser */}
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          {/* передаем users, а не usersData */}
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export { App }
