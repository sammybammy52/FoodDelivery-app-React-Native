import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import 'react-native-url-polyfill/auto';

const client = SanityClient({
    projectId: "ev2mx67u",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
    token: "skeaVTXCS3ZsnM0yRdqM3g5bTlEqtTlf7hXcSl1YJbYP545KUXJj3j568O5ywHb6LTjARABPm0Lc2LEbKWywLtlUnAIQ1a8wRoctqjB3zAzguzGgbuHo77GKb6gLO4usOA1Ko2ydl2TOLZEmpGisbJse9jlviPca4m44MtxtSRT8PAuzlEtf"

});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;