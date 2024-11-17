import React from "react";

const withAuth = (WrappedComponent)=> {
    return (props) => {
        const isAuthenticated = props.isAuthenticated;
        if(!isAuthenticated)
        {
            return <p>Please login to access this page</p>
        }
        return <WrappedComponent {...props}/>
    }
}

export default withAuth;