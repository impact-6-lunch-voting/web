import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { type User } from "~/lib/types/User";

interface GroupUserInfoProps {
  user: User;
}

export function GroupUserInfo({ user }: GroupUserInfoProps) {
  const { profileName, avatarUrl } = user;
  return (
    <div className="flex flex-row items-center gap-4 pl-2">
      <p>{profileName}</p>
      <Avatar>
        <AvatarImage src={avatarUrl}></AvatarImage>
        <AvatarFallback>{profileName.slice(0, 2)}</AvatarFallback>
      </Avatar>
    </div>
  );
}
