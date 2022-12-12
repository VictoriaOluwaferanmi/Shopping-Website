import sanityClient from '@sanity/client';
//import imageUrlBuilder from '@sanity/image-url';

export default sanityClient(
    {
    projectId: '1r8utyv6',
    dataset: 'production',
    apiVersion:'2022-09-12',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
    }
)



