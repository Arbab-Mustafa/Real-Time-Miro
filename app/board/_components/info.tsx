 

const BoardInfo = () => {
  return (
    <div className="absolute  top-2 left-2 bg-white  rounded-md px-1.5 h-12 shadow-sm flex items-center">
      BoardInfo
    </div>
  );
};

export default BoardInfo;

BoardInfo.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute  top-2 left-2 bg-white  rounded-md px-1.5 h-12 shadow-sm flex items-center w-[300px]" />
       
     
  );
};
