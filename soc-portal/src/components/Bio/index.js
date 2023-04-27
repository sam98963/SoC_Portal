

function Bio ({pInfo}){

return (
    <div id = 'pInfo'>
        <img src={pInfo.image} alt = 'Profile Image' id = 'profImage' />

        <div>
        <label id = 'name'><h3>{pInfo.firstName} {pInfo.surname}</h3></label>
        <label id = 'email'><h3>{pInfo.email}</h3></label>
        <label id = 'applicant'>Application ID:<h3>{pInfo.appId}</h3></label>
        </div>
       
        
    </div>
)
}








export default Bio;