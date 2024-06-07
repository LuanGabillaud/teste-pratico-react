// import React from "react"
import { AuthLayoutProps } from "../types/AuthTypes";
import learnToLearn from '../assets/learnToLearn-logo.svg';

const AuthLayout: React.FC<AuthLayoutProps> = ({ header, footer, children }) => {
    return (
        <div style={styles.card}>
            <div className="container-auth">
            {header && <div style={styles.header}><img src={learnToLearn} alt="logo" />{header}</div>}
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
        paddingBottom: '8px',
        marginBottom: '16px',
    },
    content: {
        marginBottom: '16px',
    },
    footer: {
        paddingTop: '8px',
        marginTop: '16px',        
        color: '#fff'
    },
};

export default AuthLayout