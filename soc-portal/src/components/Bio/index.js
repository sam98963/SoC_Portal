

function Bio ({pInfo}){

return (
<div className="bio-column">
    <div id = 'pInfo'>
        <img src={pInfo.image} alt = 'Profile Image' id = 'profImage' />

        <div id = 'cardDetail'>
        <label id = 'name'><h3>{pInfo.firstName} {pInfo.surname}</h3></label>
        <label id = 'email'><h3>{pInfo.email}</h3></label>
        <label id = 'applicant'>Application ID:</label>
        <label id = 'applicantId'><h3>{pInfo.appId}</h3></label>
        </div>
    </div>
    <div className = 'topClip'>
        <div className = 'hole'></div>
    </div>
    <div class="clipboard">
      <div class="clip"></div>
      <div class="paper">
        <h2>Info and Resources</h2>
        <h3>Welcome Pack</h3>
        <p>this contains text from the welcome pack!</p>
      </div>
    </div>
</div>
)
}








export default Bio;