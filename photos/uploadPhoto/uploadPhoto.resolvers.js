import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        let hashtagsObj = null;
        if (caption) {
          const hashtags = caption.match(/#[\w]+/g);
          hashtagsObj = hashtags.map((hashtag) => ({
            where: { hashtag },
            create: { hashtag },
          }));
        }
        return client.photo.create({
          data: {
            file,
            caption,
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            ...(hashtagsObj.length > 0 && {
              hashtags: {
                connectOrCreate: hashtagsObj,
              },
            }),
          },
        });
      }
    ),
  },
};
