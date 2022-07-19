import * as React from 'react';
import { useContext, useState, useEffect  } from 'react';
import { auth } from '../firebase';


const AuthContext = React.createContext(null as any);

export function useAuth() {
        return useContext(AuthContext)
    }

export function AuthProvider ({children}) {
    const [user, setUser] = useState(null as any);
    const [loading, setLoading] = useState(true);


    
//Auth signupwithemailandpassword
    function Signup (email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }







    // function Signup(email, password) {
    //     return auth.signInWithEmailAndPassword(email, password)
    // }
    function Login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function Logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updatePassword(password) {
        return auth.currentUser.updatePassword(password)
    }

    function updateEmail(email) {
        return auth.currentUser.updateEmail(email)
    }


    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged(user => {
              setUser(user)
        setLoading(false)   
        
        
   })
    return unsubscribe()
}, [])

  
const value = {
    user,
    loading,
    Signup,
    Login,
    Logout,
    resetPassword,
    updatePassword,
    updateEmail
}



    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
