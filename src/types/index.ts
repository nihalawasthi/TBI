export interface ProfileMember {
  id: string;
  name: string;
  position: string;
  description: string;
  imageSrc?: string;
  tags?: string[];
}

export interface BoardSection {
  id: string;
  title: string;
  members: ProfileMember[];
}
