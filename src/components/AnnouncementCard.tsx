import React from "react";

interface InstructorAnnouncementInfo {
  firstname: string;
  lastname: string;
  profilePic: string;
}

export type IAnnouncementType = {
  id: number;
  instructor: InstructorAnnouncementInfo;
  title: string;
  announcement: string;
  createdAt: string;
};

function AnnouncementCard({ item }: { item: IAnnouncementType }) {
  return (
    <div >
      <div style={{display: "flex", flexDirection: "column", width: "250px", borderWidth: '2px', borderColor: "blue", borderStyle: 'solid', paddingTop:"10px"}}>
        <div style={{display: 'flex'}}>
          <img
            style={{
              position: "relative",
              width: "220px",
              height: "240px",
              objectFit: "cover",
              right: "0",
              borderRadius: "9999px",
              paddingLeft: "20px", 
              paddingRight: "20px"
            }}
            src={item.instructor.profilePic}
            alt="img"
          />
        </div>
        <br />
        <div>
          <div >
            <h3 style={{fontSize: "17px"}}>
              {item.instructor.firstname.toUpperCase() +
                " " +
                item.instructor.lastname.charAt(0).toUpperCase() +
                item.instructor.lastname.slice(1)}
            </h3>
            <p style={{color: 'gray', fontSize: "10px", display: "flex", paddingLeft: "6px"}}>
              {item.createdAt}
            </p>
          </div>
          <p style={{fontSize: '12px', display: "flex", paddingLeft: "6px"}}>
            {item.title}
          </p>
          <p style={{fontSize: '12px', display: "flex", paddingLeft: "6px"}}>
            {item.announcement}
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default AnnouncementCard;
