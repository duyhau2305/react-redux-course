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
import { useState } from 'react';

// actions
import * as todoActions from '../../redux/todo.actions';
import * as appActions from '../../redux/app.actions'


function TodoForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.app.isLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const toast = useToast()
  const [submissionCount, setSubmissionCount] = useState(0)
  
  const onSubmit = (data) => {
    if (submissionCount >= 3) {
      
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
    const todoItem = {
      id: new Date().getTime().toString(),
      ...data,
    }
    dispatch(appActions.setLoading(true))

    setTimeout(() =>{  
      dispatch(appActions.setLoading(false));
      dispatch(todoActions.addTodo(todoItem))
      toast({
        title: 'Todo created.',
        description: "We've created todo for you.",
        status: 'success',
        duration: 1000,
        isClosable: true,
        position: 'top-right',
      });
      setSubmissionCount(submissionCount + 1); 
    }, 2000)
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
        <Button isLoading={isLoading}  size="sm" colorScheme='blue' type="submit">Submit</Button>
      </div>
      <br />
      
      <Divider />

    </form>
  )
}

export default TodoForm