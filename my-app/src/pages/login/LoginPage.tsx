import { LoginForm } from "@/models/LoginFormModel"
import { useAuth } from '../../context/AuthContext';
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const LoginPage = () => {

    const { login } = useAuth()
    const { register, handleSubmit } = useForm()
    
    const onSubmit = async (data: unknown) => {
        console.log(data)
        const dataObj = data as LoginForm
        console.log(login)
        await login(dataObj.email, dataObj.password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label>Email</Label>
                <Input {...register('email', { required: true } )} />
                <Label>Password</Label>
                <Input {...register('password', { required: true } )} />
                <Input type="submit" />
            </form>
        </div>
    )
}

export default LoginPage