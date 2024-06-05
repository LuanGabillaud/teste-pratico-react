// import React from "react"
import { AuthLayoutProps } from "../types/AuthTypes";

const AuthLayout: React.FC<AuthLayoutProps> = ({ header, footer, children }) => {
    return (
        <div style={styles.card}>
            <div className="container">
            {header && <div style={styles.header}>{header}</div>}
            <div style={styles.content}>{children}</div>
            {footer && <div style={styles.footer}>{footer}</div>}
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    header: {
        borderBottom: '1px solid #ccc',
        paddingBottom: '8px',
        marginBottom: '16px',
    },
    content: {
        marginBottom: '16px',
    },
    footer: {
        borderTop: '1px solid #ccc',
        paddingTop: '8px',
        marginTop: '16px',
    },
};

export default AuthLayout