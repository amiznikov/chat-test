const users = {
}

module.exports = (io, socket) => {
  const getUsers = (exceptUserId) => {
    const sendUsers = {...users};
    if(sendUsers && exceptUserId) {
      delete sendUsers[exceptUserId]
    }
    io.in(socket.roomId).emit('users', users)
  }

  const addUser = ({ username, userId }) => {
    if (!users[userId]) {
      users[userId] = { username, online: true }
    } else {
      users[userId].online = true
    }
    getUsers()
  }

  const removeUser = (userId) => {
    users[userId] && delete users[userId]
    getUsers()
  }

  socket.on('disconnect', () => {
    removeUser(socket.userId);
  })
  socket.on('user:get', getUsers)
  socket.on('user:add', addUser)
  socket.on('user:leave', removeUser)
}
