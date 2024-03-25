import useInputState from "../hooks/useInputState";

/**Making Custom Hook */
const HookForm = () => {
 
    //  const [name, handleNameChange]=useInputState('Soheb');

    const emailState = useInputState('soheb@gmail.com')

    
    const handleSubmit = e =>{
        console.log('Form Data Collected' , emailState.value);
        e.preventDefault();
    }
    // const handleSubmit = e =>{
    //     console.log('Form Data Collected' , name);
    //     e.preventDefault();
    // }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input
                value={name} onChange={handleNameChange}
                type="text" name="name" /> */}
                <br />
                <input
                {...emailState}
                type="email" name="email" /> 
                {/* here we will get value as well ase onChange function  */}
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;