export type EditProfileType = {
  nickname?: string;
  introduction?: string;
  userRole?: string;
};

export type PostReviewType = {
  roomId: string;
  content: string;
  grade: string;
};
