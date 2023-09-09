import React from 'react'
import { useGlobalStates } from '../Context/Context'


const Layout = ({ children }) => {
    const { theme } = useGlobalStates();
    return (
        <div style={{ background: theme.background, color: theme.font }}>
            {children}
        </div>
    )
}

export default Layout
