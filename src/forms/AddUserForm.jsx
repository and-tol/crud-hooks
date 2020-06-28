import React, {useState} from 'react'

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', username: '' }
  // используем useState и передаем в качестве начального значения объект - initialFormState
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!user.name || !user.username) {
      return
    }

    // вызываем addUser из хука из App
    props.addUser(user)
    // обнуляем форму, с помощью setUser функции
    // которая у нас взята из хука в данном компоненте [1]
    setUser(initialFormState)
  }
  
  return (
    <form onSubmit={handleSubmit}>
    {/* указали функцию на submit */}
      <label>Name</label>
      {/* у инпутов указываем value и onChange */}
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text" 
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  )
}

export { AddUserForm }
