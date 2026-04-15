import FriendComponent from "@/components/friends-details/FriendComponent";

export const metadata = {
  title: "Friend Details",
  description: "All information about friend",
};

const FriendsDetails = () => {
  return (
    <div className="container mx-auto py-20 ">
      <FriendComponent />
    </div>
  );
};

export default FriendsDetails;
