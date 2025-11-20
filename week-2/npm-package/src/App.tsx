import { FormInput } from "./components"
import { FormActionButton, FormCard, FormFooter, FormTitle } from "./components/form-with-validation/form-card"

function App() {

  return (
    <main className="flex flex-col items-center justify-center min-w-full min-h-screen">
      <FormCard>
        <FormTitle>Random Data</FormTitle>
        <FormInput type="email" placeholder="Enter your username" />
        <FormActionButton title="Submit" />
        <FormFooter >By clicking submit you agree to terms & conditions</FormFooter>
      </FormCard>
    </main>
  )
}

export default App
