import { UserProvider } from './auth/auth.context'

type Props= {
    children: React.ReactNode | React.ReactNode[];
}
const AppProvider = ({ children }:Props) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}

export default AppProvider