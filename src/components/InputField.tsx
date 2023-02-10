import React from 'react'

interface Props  {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {
  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}> 
      <input type="input" 
      placeholder='Enter task title' 
      className='input_field'
      value={todo}
      onChange={ (e) => {
        setTodo(e.target.value)
      }}
      />
      <button 
        type="submit" 
        className='input_button'
        >Enter</button>
    </form>
  )
}

export default InputField

