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
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../services/axiosInstance';

// actions
import * as todoActions from '../../redux/todo.actions';

function TodoForm() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const toast = useToast()
  
  const onSubmit = async (data) => {
    // dispatch(todoActions.asyncAddTodo(data))
    if(todos.length >= 10) {
      toast({
        title: 'Submission Limit',
        description: 'You cannot add more todos at the moment.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      return;
    }

    const bodyData = {
      data: {
        id: new Date().getTime().toString(),
        severity: 'low',
        author: "tony",
        status: 'new',
        ...data,
      }
    }
    await request('/api/todo', {
      method: 'POST',
      showSpinner: true,
      data: bodyData
    });

    setTimeout(() =>{  
      dispatch(todoActions.addTodo(bodyData.data))
      toast({
        title: 'Todo created.',
        description: "We've created todo for you.",
        status: 'success',
        duration: 1000,
        isClosable: true,
        position: 'top-right',
      });
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
        <Button  size="sm" colorScheme='blue' type="submit">Submit</Button>
      </div>
      <br />
      
      <Divider />

    </form>
  )
}

export default TodoForm