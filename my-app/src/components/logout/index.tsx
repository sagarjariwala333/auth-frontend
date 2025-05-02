import { useAuth } from "@/context/AuthContext"
import { Button } from "../ui/button"

const Logout = () => {

    const { logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    return (
        <Button onClick={handleLogout}>
            Logout
        </Button>
    )
}

export default Logout