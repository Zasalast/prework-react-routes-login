import React, { useEffect, useState } from "react";
import LoginService from "../../service/LoginService";  

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null)

  const handleLogin= async (event)=>{
      event.preventDefault();
      console.log(event.target.value,'hola')
    try {
        const user = await  LoginService.login({
            username,
            password
        })
 console.log(user)
      /*   window.localStorage.setItem(
            'loggedNoteAppUser', JSON.stringify(user)
          ) */
         /*  noteService.setToken(user.token) */
        setUser(user)
        setUsername('')
        setPassword('')
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    /*   noteService.setToken(user.token) */
    }
  }, [])

  const handleLogout = () => {
    setUser(null)
    /* noteService.setToken(null) */
    window.localStorage.removeItem('loggedNoteAppUser')
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="Username"
          value={username}
          placeholder="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          name="Password"
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />

    <button  >login</button>
      </form>
    </div>
  );
}

export default Home;
