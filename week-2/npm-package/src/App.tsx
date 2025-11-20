import { FormInput } from "./components"
import { FormActionButton, FormCard, FormFooter, FormTitle } from "./components/form-with-validation/form-card"

function App() {

  return (
    <main className="flex flex-col items-center justify-center min-w-full min-h-screen">
      <FormCard>
        <FormTitle>Awesome Form</FormTitle>
        <FormInput type="email" inputLabel="Email Address:" placeholder="Enter your email" />
        <FormInput type="phone" inputLabel="Phone Number:" placeholder="Enter your phone number" />
        <FormActionButton title="Submit" />
        <FormFooter >By clicking submit you agree to terms & conditions</FormFooter>
      </FormCard>
    </main>
  )
}

export default App
