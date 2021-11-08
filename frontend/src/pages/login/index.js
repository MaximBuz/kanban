import './styles.css';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { signInWithGoogle } from '../../redux/user/user.actions';
import image from "./Loginimg.jpeg";


const mapState = ({ user }) => ({
    signInSuccess: user.signInSuccess
});

const LoginPage = (props) => {

    const { signInSuccess } = useSelector(mapState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (signInSuccess) {
          props.history.push('/');
        }
      }, [signInSuccess]);

    const handleGoogleSignIn = () => {
        dispatch(signInWithGoogle());
    }
    


    return (
        <div className="login-page-wrapper">
            <div className="login-wrapper">
                <div className="login-left-img">
                    <img src={image} alt="login-image"/>
                </div>
                <div className="login-right-content">
                    <h1 className="login-title">We are KUVA</h1>
                    <p className="login-paragraph">Get rid of complicated and make room for easy. Log in to your account to view today’s tasks and goals</p>
                    <div className="login-google-btn" onClick={handleGoogleSignIn}>
                        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.64 9.20443C17.64 8.56625 17.5827 7.95262 17.4764 7.36353H9V10.8449H13.8436C13.635 11.9699 13.0009 12.9231 12.0477 13.5613V15.8194H14.9564C16.6582 14.2526 17.64 11.9453 17.64 9.20443Z" fill="#4285F4"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.96409 10.7101C3.78409 10.1701 3.68182 9.59325 3.68182 9.00007C3.68182 8.40689 3.78409 7.83007 3.96409 7.29007V4.95825H0.957273C0.347727 6.17325 0 7.5478 0 9.00007C0 10.4523 0.347727 11.8269 0.957273 13.0419L3.96409 10.7101Z" fill="#FBBC05"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
                        </svg>
                        <p>Sign in with Google</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default withRouter(LoginPage);
