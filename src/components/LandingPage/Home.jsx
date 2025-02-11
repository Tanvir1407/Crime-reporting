import AskShare from "./HeroSection/AskShare";
import Posts from "./HeroSection/Posts";
import Navbar from "./Navbar";

export default function Home() {

  const postData = {
    authorAvatar: "https://via.placeholder.com/40",
    authorName: "Abdullah Al Mehmud",
    authorRole: "Software Engineer",
    title: "Suspicious Activities in the Marketplace",
    description:
      "There is a market where we buy fruits, but I have noticed some suspicious activities happening around. It seems like there is a group of people involved in illegal transactions. We need to be cautious and report any unusual behavior to the authorities.",
    division: "Dhaka",
    district: "Gulshan",
    media: {
      type: "image",
      url: "https://via.placeholder.com/600",
    },
    postTime: new Date().toISOString(),
    crimeTime: new Date("2024-02-10T15:30:00").toISOString(),
    upvotes: 247,
    comments: 23,
  };
  
  
  return (
    <>
      <Navbar />
      <AskShare />
      <Posts post={postData}/>
    </>
  );
}
