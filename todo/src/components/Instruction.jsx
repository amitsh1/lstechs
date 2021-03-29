import React from 'react'
import { Message } from 'semantic-ui-react'

const list = [
  'Name the new Todo',
  'Add Tasks to this Todo',
  'Name the the empty Task to add another',
  'Update previously created Todos by checking the Tasks',
  'Delete Todos by clicking the X'
]

const MessageExampleListProp = () => (
  <Message header='How to use:' list={list} />
)

export default MessageExampleListProp

