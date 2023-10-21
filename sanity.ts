import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
   dataset: "production",
   projectId: "96wxxq7q",
   apiVersion: "2023-10-16",
   useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
   createImageUrlBuilder(config).image(source);
