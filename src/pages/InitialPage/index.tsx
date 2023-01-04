import { Button } from "../../Components/Button"
import { Input } from "../../Components/Forms/Input"
import { InputPassword } from "../../Components/Forms/InputPassword"

export const InitialPage = () => {
    return (
        <div>
            <h1>Initial Page</h1>
            <Input label='teste' id='teste' type='text' placeholder="testestesteste"  />
            <InputPassword label='teste' id='teste' type='password' placeholder="testestesteste"/>
            <Button size='sm'theme='primary' type='button'>Teste</Button>
        </div>
    )
}