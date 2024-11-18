import Hint from "@/components/hint";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";

interface UserAvatarProps {
  src?: string;
  fallback?: string;
  name?: string;
  borderColor?: string;
}

const UserAvatar = ({ src, fallback, name, borderColor }: UserAvatarProps) => {
  return (
    <Hint label={name | "Teammate"} side="bottom" sideOffset={10}>
      <Avatar style={{ borderColor }} className="h-8 w-8 border-2">
        <AvatarImage src={src} />
        <AvatarFallback className="text-xs font-semibold">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
};

export default UserAvatar;
