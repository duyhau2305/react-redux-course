import { useSelector } from 'react-redux'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tag,
  TableContainer,
  Button
} from '@chakra-ui/react'

import { STATUS_COLOR } from '../../configs/statusColor';

function TodoList() {
  const todos = useSelector(state => state.todo.todos)
  return (
    <div>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th isNumeric>Status</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos.map(todo => {
              return  (
                <Tr key={todo.id}>
                  <Td>{todo.title}</Td>
                  <Td>{todo.description}</Td>
                  <Td isNumeric>
                    <Tag colorScheme={STATUS_COLOR[todo.status]}>{todo.status}</Tag>
                  </Td>
                  <Td isNumeric> 
                    <Button size="sm" colorScheme='red' type="button">Delete</Button>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
      
    </div>
  )
}

export default TodoList