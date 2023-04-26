

function Bio ({pInfo}){

return (
    <div>
        <label>Applicant Name:<h1>{pInfo.firstName} {pInfo.surname}</h1></label>
        <label>Applicant Email:<h2>{pInfo.email}</h2></label>
        <label>Application ID:<p>{pInfo.appId}</p></label>
    </div>
)
}








export default Bio;