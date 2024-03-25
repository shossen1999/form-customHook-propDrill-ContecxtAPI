
import './App.css'
import Grandpa from './components/Grandpa/Grandpa';
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFullForm from './components/StateFullForm/StateFullForm'

function App() {

  //  const handleSignUpSubmit =(data) =>{
  //       // e.preventDefault();
  //       console.log('Sign Up data',data)

  //   }

  //   const handleUpdateProfile = data=>{
  //     // e.preventDefault();
  //     console.log('Profile Updated',data);
  //   }


  return (
    <>

      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm>
       */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm>
        */}
      {/* <HookForm></HookForm>       */}
      {/* <ReusableForm 
      FormTitle={'Sign UP'}
       handleSubmit={handleSignUpSubmit}>

       </ReusableForm>

      <ReusableForm 
      FormTitle={'Profile Update'} 
      handleSubmit={handleUpdateProfile}
      submitBtnText='Update'>

      </ReusableForm> */}
    </>
  )
}

export default App
