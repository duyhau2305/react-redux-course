import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  RadioGroup,
  Stack,
  Radio,
  Button,
  Divider,
  useToast
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

// actions
import * as todoActions from '../../redux/todo.actions';

function TodoForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const toast = useToast()
  
  
  const onSubmit = (data) => {
    
    
    const todoItem = {
      id: new Date().getTime().toString(),
      ...data,
    }
    dispatch(todoActions.addTodo(todoItem))
    dispatch(todoActions.showLoading())
    setTimeout(() =>{  
      dispatch(todoActions.hideLoading());
    }, 1000)
  }

  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.title}>
        <FormLabel>Title</FormLabel>
        <Input type='text' {...register("title", { required: true })} />
        {errors.title && <FormErrorMessage>Title is required.</FormErrorMessage>}
      </FormControl>

      <FormControl isInvalid={errors.description}>
        <FormLabel>Description</FormLabel>
        <Textarea {...register("description", { required: true })} />
        {errors.description && <FormErrorMessage>Description is required.</FormErrorMessage>}
      </FormControl>

      <FormControl>
        <FormLabel>Status</FormLabel>
        <RadioGroup defaultValue='new' >
          <Stack direction='row'>
            <Radio value='new'  {...register("status")}>New</Radio>
            <Radio value='inprocess'  {...register("status")}>Inprocess</Radio>
            <Radio value='done'  {...register("status")}>Done</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      <br />
      <div style={{ textAlign: 'right' }}>
        <Button  isloading={todoActions.isloading} size="sm" colorScheme='blue' type="submit">Submit</Button>
      </div>
      <br />
      
      <Divider />

    </form>
  )
}

export default TodoForm