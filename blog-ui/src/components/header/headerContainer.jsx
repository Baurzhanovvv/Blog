import Header from "./header";
import {connect} from "react-redux";

const HeaderContainer = props => {
    return (
        <div>
            <Header authData={props.authData} userData={props.userData}  />
        </div>
    )
}

let mapStateToProps = state => ({
    authData: state.auth.data,
    userData: state.auth.userData,
})

export const HeaderConnected = connect(mapStateToProps, null)(HeaderContainer)
