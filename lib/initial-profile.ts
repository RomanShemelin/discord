import { currentUser, redirectToSignIn } from '@clerk/nextjs';
import { db } from '@/lib/db';
import { v4 as uuidv4, v4 } from 'uuid';
export const initialProfile = async () => {
  const user = await currentUser();
  if (!user) {
    redirectToSignIn();
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user?.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user?.id as string,
      name:
        user?.firstName === null || user?.firstName === undefined
          ? user?.lastName === null || user?.lastName === undefined
            ? 'User'
            : user.lastName
          : user.firstName,
      imageUrl: user?.imageUrl as string,
      email: user?.emailAddresses[0].emailAddress as string,
    },
  });

  return newProfile;
};
