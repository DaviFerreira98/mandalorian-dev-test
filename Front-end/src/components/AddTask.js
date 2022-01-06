import { useForm } from 'react-hook-form';
import '../styles/AddTask.css'
export default function NewTaskForm({ newTaskHandler }) {
  const { register, handleSubmit, reset, formState, clearErrors } = useForm({
    shouldUnregister: true,
    defaultValues: { label: '' },
  });

  const onSubmit = (data) => {
    newTaskHandler(data.label);
    reset();
    clearErrors();
  };

  const errors = Object.values(formState.errors);

  return (
    <form className="add-task" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="task">Adicionar Task</label>
      <input
        id="task"
        {...register('label', {
          required: 'Task não pode estar em branco',
          validate: {
            menosdez: (v) =>
              v.length >= 10 || 'Não pode ter menos de 10 caracteres',  
          },
          pattern: {
            value: /[A-Za-z1-9]/,
            message: 'Não pode caracteres especiais',
          }
        })}
      />
      {errors.length > 0 && (
        <ul className="error-messages">
          {errors.map((error) => (
            <li>{error.message}</li>
          ))}
        </ul>
      )}
      <button type="submit" className='btn-grad'>Adicionar</button>
    </form>
  );
}
