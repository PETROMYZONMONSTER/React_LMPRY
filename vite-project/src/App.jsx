import './App.css'

function App() {

  return (
    <main>
        <div className="general">
            <header>
                <h2>Monitoria React</h2>
            </header>
            <div className="container">
                <h1>Login</h1>
                <label>
                    <h4>Username</h4>
                    <input type="text"
                           name="UserName"/>
                </label>
                <label>
                    <h4>Password</h4>
                    <input type="password"
                           name="PassWord"/>
                </label>
                <button className="submit">Enter</button>
            </div>
        </div>
    </main>
  )
}

export default App
