import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: "tk7krn01",
  dataset: "production",
  apiVersion: "2022-10-10",
  token:
    "skwsrOxxqTe9sXHtweBDiV7360yBOzy0zDoVIQvPQ0SsVsZN8TaBghPRbJUKtjE7xuzu9GDnVwNL5ZB8VG28cSl1zNj0XVkccbvp4jmc3Fyzv33dRcKzE51X9yXJgoDfakjneKLAYCinKdYEJPA4U2dywnIaVxqYjjnUZi41QQk6NCdKJY3O",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source) => builder.image(source);
