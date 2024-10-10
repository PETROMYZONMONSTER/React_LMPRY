import './App.css'

function App() {

  return (
      <main>
          <div className="general">
              <header>
                  <h2>Monitoria React</h2>
              </header>
              <h1>Register</h1>
                <div className="container-division">
                  <div className="container">
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
                  </div>
                    <div className="vertical-row"></div>
                  <div className="container">
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
                  </div>
                </div>
              <button className="submit">Enter</button>
          </div>
      </main>
  )
}

export default App
