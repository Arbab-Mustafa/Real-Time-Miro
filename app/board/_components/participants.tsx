 

const Participants = () => {
  return (
    <div className="absolute  top-2 right-2 bg-white  rounded-md p-3 h-12 shadow-sm flex items-center">
      Contact Information
    </div>
  );
};

export default Participants;

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute  top-2 right-2 bg-white  rounded-md p-3 h-12 shadow-sm flex items-center w-[100px] " />
       
  );
};
