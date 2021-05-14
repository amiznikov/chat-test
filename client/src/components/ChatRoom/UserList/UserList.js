// styles
import { Accordion, Card, Button, Badge } from 'react-bootstrap'
// icons
import { RiRadioButtonLine } from 'react-icons/ri'

import { useLocalStorage} from 'hooks'

export const UserList = ({ users }) => {
  const [username] = useLocalStorage('username')
  const usersArr = Object.entries(users)
  const activeUsers = Object.values(users)
    .filter((u) => u.online).length

  return (
    <Accordion className='mt-4'>
      <Card>
        <Card.Header bg='none'>
          <Accordion.Toggle
            as={Button}
            variant='info'
            eventKey='0'
            style={{ textDecoration: 'none' }}
          >
            Active users{' '}
            <Badge variant='light' className='ml-1'>
              {activeUsers}
            </Badge>
          </Accordion.Toggle>
        </Card.Header>
        {usersArr.map(([userId, obj]) => (
          <Accordion.Collapse eventKey='0' key={userId}>
            <Card.Body onClick={() => {
              let roomName = "chat";
              if(username < obj.username) {
                roomName = username + obj.username;
              } else {
                roomName = obj.username + username;
              }
              window.location.href = `${window.location.protocol}//${window.location.host}/${roomName}`
              // username
            }}>
              <RiRadioButtonLine
                className={`mb-1`}
                size='0.8em'
              />{' '}
              {obj.username}
            </Card.Body>
          </Accordion.Collapse>          
        ))}
          <Accordion.Collapse eventKey='0' key={"all"}>
            <Card.Body onClick={() => {
              let roomName = "chat";
              window.location.href = `${window.location.protocol}//${window.location.host}/${roomName}`
              // username
            }}>
              <RiRadioButtonLine
                className={`mb-1`}
                size='0.8em'
              />{' '}
              {'All'}
            </Card.Body>
          </Accordion.Collapse>        
      </Card>
    </Accordion>
  )
}
