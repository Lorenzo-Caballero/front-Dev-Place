import "./rightbar.css";
import ProfileRightbarFollowing from '../profileRightbarFollowing/ProfileRightbarFollowing'
import Card from 'react-bootstrap/Card';

export default function Rightbar({ profile }) {

  const ProfileRightbar = () => {
    return (
      <>
      



    <Card style={{ width: '18rem' }}>
      <Card.Body>

        <Card.Title>User information</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">City:</Card.Subtitle>
        <span className="infoResponse">New York</span>

        <Card.Subtitle className="mb-2 text-muted">About me: </Card.Subtitle>
        <Card.Text>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
         <Card.Subtitle className="mb-2 text-muted">From: </Card.Subtitle>
         <span className="infoResponse">Argentina</span>

         <Card.Subtitle className="mb-2 text-muted">Relationship: </Card.Subtitle>
        <span className="infoResponse">Single</span>

      </Card.Body>
    </Card>

     
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
         <ProfileRightbarFollowing/>
          </div>
        </div>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
         <ProfileRightbarFollowing/>
          </div>
        </div> <div className="rightbarFollowings">
          <div className="rightbarFollowing">
         <ProfileRightbarFollowing/>
          </div>
        </div> <div className="rightbarFollowings">
          <div className="rightbarFollowing">
         <ProfileRightbarFollowing/>
          </div>
        </div> <div className="rightbarFollowings">
          <div className="rightbarFollowing">
         <ProfileRightbarFollowing/>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      <ProfileRightbar /> 
      </div>
    </div>
  );
}