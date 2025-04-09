
export const ProfileFrame = (props) => {

    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-column">
                    <h5 className="card-title">Your Profile</h5>
                    <p className="card-text mb-0">Given Name: {props.profileData.givenName}</p>
                    <p className="card-text mb-0">Surname: {props.profileData.surname}</p>
                    <p className="card-text">eMail: {props.profileData.userPrincipalName}</p>
                    <p className="card-text opacity-25">User ID: {props.profileData.id}</p>
                </div>
            </div>
        </div>

    )

}