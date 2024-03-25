import { useState } from "react";


const StateFullForm = () => {
    const [name, setName] = useState('soheb hossen');
    const [email, setEmail] = useState(null);

    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("password must be greater than 6");
        }
        else {
            setError('')
        }
        //  console.log(e);
    }
    const handleNameChange = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleNameChange} value={name} type="text" name="name" />
                <br />
                <input
                value={email}
                    onChange={handleEmailChange}
                    type="email" name="email" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;