import authBlogData from "./auth-blog.md?raw"
import codeTogetherData from "./codeTogetherBlog.md?raw"
import execuConnectData from "./execuConnect-blog.md?raw"
import typingManiaData from "./typing-mania-blog.md?raw"
import jwtBlogData from "./jwt-blog.md?raw"
import eCommerceStoreData from "./e-commerce-store.md?raw"

import ECommerceStore from "../Images/ECommerceStore.png"

import myImageSrc from "../Images/myImage.jpg"
import reactAuthThumbnail from "../Images/lock.jpg"
import jwtLogoThumbnail from "../Images/Jwt-logo.png"
import codeTogetherLogo from "../Images/CodeTogetherLogo.png"
import typingManiaThumbnail from "../Images/TypingManiaLogo.png"
import ExecuConnectLogoThumbnail from "../Images/ExecuConnectLogo.png"

const blogs = [
    {
        id: 1,
        headingOfBlog: "How to Set Up Authentication in React: A Step-by-Step Guide",
        author: "Manjinder Singh",
        dateWritten: "March 13, 2025",
        profilePicture: myImageSrc,
        fileName: authBlogData,
        job: "Full stack developer",
        location: "Toronto",
        thumbnail: reactAuthThumbnail
    },
    {
        id: 2,
        headingOfBlog: "Understanding JSON Web Tokens (JWT): From Basics to Intermediate",
        author: "Manjinder Singh",
        dateWritten: "March 16, 2025",
        profilePicture: myImageSrc,
        fileName: jwtBlogData,
        job: "Full stack developer",
        location: "Toronto",
        thumbnail:jwtLogoThumbnail
    },
    {
        id: 3,
        headingOfBlog: "CodeTogether - A Social Platform for Developers",
        author: "Manjinder Singh",
        dateWritten: "March 16, 2025",
        profilePicture: myImageSrc,
        fileName: codeTogetherData,
        job: "Full stack developer",
        location: "Toronto",
        thumbnail: codeTogetherLogo
    },
    {
        id: 4,
        headingOfBlog: "Typing Mania - A Fun Typing Speed Test Platform",
        author: "Manjinder Singh",
        dateWritten: "March 16, 2025",
        profilePicture: myImageSrc,
        fileName: typingManiaData,
        job: "Full stack developer",
        location: "Toronto",
        thumbnail: typingManiaThumbnail,
        
    },
    {
        id: 5,
        headingOfBlog: "Executive Networking Platform",
        author: "Manjinder Singh",
        dateWritten: "March 16, 2025",
        profilePicture: myImageSrc,
        fileName: execuConnectData,
        job: "Full stack developer",
        location: "Toronto",
        thumbnail: ExecuConnectLogoThumbnail,
    },
    {
        id: 6,
        headingOfBlog: "Full-Stack E-commerce Store with Admin Dashboard",
        author: "Manjinder Singh",
        dateWritten: "May 12, 2025",
        profilePicture: myImageSrc,
        fileName: eCommerceStoreData,
        job: "Full stack developer",
        location: "Toronto",
        thumbnail: ECommerceStore
    }


]


export {blogs}