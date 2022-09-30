import {IAnnouncementType} from "../components/AnnouncementCard"

const announcementCards: IAnnouncementType[] = [
    {
        id: 22,
        instructor: {
            firstname: 'michael',
            lastname: 'mchale',
            profilePic: "https://www.sportscasting.com/wp-content/uploads/2022/07/Kevin-McHale.jpg?w=2048&h=1573"
        },
        title: "Image of Kevin McHale",
        announcement: "Nice to see Mr. McHale",
        createdAt: (new Date()).toUTCString()
    },
    {
        id: 22,
        instructor: {
            firstname: 'david',
            lastname: 'thompson',
            profilePic: "https://media.bleacherreport.com/w_800,h_533,c_fill/br-img-images/002/619/776/hi-res-89746937-david-thompson-of-the-denver-nuggets-looks-on-against_crop_north.jpg"
        },
        title: "Image of David Thompson",
        announcement: "There he goes",
        createdAt: (new Date()).toUTCString()
    },
    {
        id: 22,
        instructor: {
            firstname: 'chiney',
            lastname: 'ogwumike',
            profilePic: "https://imageio.forbes.com/specials-images/imageserve/62757b940f9f0c88cd66609e/IMG-7214/960x0.jpg?format=jpg&width=960"
        },
        title: "Image of Chiney Ogwumike",
        announcement: "Must be nice on and off the court",
        createdAt: (new Date()).toUTCString()
    },
    {
        id: 22,
        instructor: {
            firstname: 'Rafer',
            lastname: 'Alston',
            profilePic: "https://upload.wikimedia.org/wikipedia/commons/8/84/Rafer_Alston.jpg"
        },
        title: "Image of Skip to my Lou",
        announcement: "The one and only \"Skip to my Lou\"",
        createdAt: (new Date()).toUTCString()
    },
]

export default announcementCards