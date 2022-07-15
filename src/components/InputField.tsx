import React, { useRef } from "react";
import './styles.css';

interface Props {
    term: string;
    setTerm: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e:React.FormEvent) => void
}

const InputField = ({term, setTerm, handleSubmit} : Props) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return <form className="input" onSubmit={(e)=>{
        handleSubmit(e)
        inputRef.current?.blur();
        }}>
        <input ref={inputRef} type="input" placeholder="Enter a task" className="input__box" value={term} onChange={(e)=>setTerm(e.target.value)} />
        <button className="input_submit" type="submit">Go</button>
    </form>
}

export default InputField;