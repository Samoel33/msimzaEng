import { MetadataRoute, Metadata } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: `${process.env.baseURL}` },
        { url: `${process.env.baseURL}/Services` },
        { url: `${process.env.baseURL}/AboutUs` },
        { url: `${process.env.baseURL}/ContactUs` },
        { url: `${process.env.baseURL}/Projects` },
        { url: `${process.env.baseURL}/Gallery` },
    ]
}
