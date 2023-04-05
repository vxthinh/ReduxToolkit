import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Input, Button, Select, Tag } from 'antd';

import Todo from '../Todo';
// import { addTodo } from '../../redux/actions';
import { addNewTodo } from './todosSlice'
import { todoRemainingSelector } from '../../redux/selectors';

export default function TodoList() {
  //STATE
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  //Selector
  const todoList = useSelector(todoRemainingSelector)
  // DISPATCH ACTION
  const dispatch = useDispatch()

  const handleAddButtonClick = () => {
    // dispatch(todosSlice.actions.addTodo({
    //   id: uuidv4(),
    //   name: todoName,
    //   priority: priority,
    //   completed: false
    // }))
    dispatch(
      addNewTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false
      })
    )
    setTodoName('')
    setPriority('Medium')
  }

  const handleInputChange = (event) => {
    setTodoName(event.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList && todoList.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}