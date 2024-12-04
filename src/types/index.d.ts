export interface ITeamMember {
  name: string;
  position: string;
  image?: string;
  socials: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}
