import client from "../client";

export default {
  Photo: {
    user: ({ userId }) => client.user.findUnique({ where: { id: userId } }),
    hashtags: ({ id }) =>
      client.hashtag.findMany({ where: { photos: { some: { id } } } }),
  },
  Hashtag: {
    photos: ({id}, {page}) => {

    },
    totalPhotos: ({ id }) =>
      client.photo.count({ where: { hashtags: { some: { id } } } }),
  },
};
