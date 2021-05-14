// hooks
import { useLocalStorage, useChat } from 'hooks'
// components
import { MessageForm } from './MessageForm'
import { MessageList } from './MessageList'
import { UserList } from './UserList'
// styles
import { Container } from 'react-bootstrap'

export function ChatRoom() {
  const roomId = 'chat'
  const [username] = useLocalStorage('username')
  const { users, messages, sendMessage, removeMessage } = useChat(roomId)

  return (
    <Container>
      <h2 className='text-center'>Room: {roomId}</h2>
      <UserList users={users} />
      <MessageList messages={messages} removeMessage={removeMessage} />
      <MessageForm username={username} sendMessage={sendMessage} />
    </Container>
  )
}
