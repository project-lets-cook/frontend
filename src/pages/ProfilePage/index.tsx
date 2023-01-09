import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"

export const ProfilePage = () => {

    const { user, loadingUser } = useContext(UserContext)

    if (loadingUser) {
        return null
    }
    
    return ( user ? 
        <div>
            <h1>Profile Page</h1>
        </div>
        : <Navigate to= "/"/>
    )
}