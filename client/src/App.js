import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// styles
import { Container } from 'react-bootstrap'
// components
import { Home, ChatRoom } from 'components'

// const username = 

export const App = () => (
  <Router>
    <Container style={{ maxWidth: '512px' }}>
      <Switch>
        <Route
            exact
            path="/"
            component={() => window.localStorage.getItem('username') ? <Redirect to="/:roomId" /> : <Home/> }
          />        
        <Route
            exact
            path="/:roomId"
            component={() => !window.localStorage.getItem('username') ? <Redirect to="/" /> : <ChatRoom/> }
          />        
      </Switch>
    </Container>
  </Router>
)
