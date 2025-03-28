import codeTogetherImageSrc from "../Images/CodeTogetherLogo.png"
import typingMania from "../Images/TypingManiaLogo.png"
import execuConnect from "../Images/ExecuConnectLogo.png"
import { 
    JSSvgSrc,
    JavaSvgSrc,
    DockerSvgSrc,
    ReduxSvgSrc,
    ReactSvgSrc,
    JWTSvgSrc,
    LinuxSvgSrc,
    MongoDbSvgSrc,
    NodeJsSvgSrc,
    ExpressJsSvgSrc,
    TailwindCssSvgSrc,
    HtmlSvgSrc,
    CssSvgSrc,
    FullCalenderSvgSrc,
    TipTapSvgSrc

 } from "../Icons/getIcon"

const projects = [
    {
        id: 1,
        title: "CodeTogether",
        body: "CodeTogether is a platform that connects tech enthusiasts, developers, and industry professionals. It fosters collaboration, networking, and knowledge sharing in the tech community.",
        imgSrc: codeTogetherImageSrc,
        tools: [
            JSSvgSrc,
            ReactSvgSrc,
            JWTSvgSrc,
            MongoDbSvgSrc,
            NodeJsSvgSrc,
            ExpressJsSvgSrc,
            TailwindCssSvgSrc,
            CssSvgSrc
        ],
        projectSrc: "/blogs/3",
        thumbnailImageSrc: ""
    },
    {
        id: 2,
        title: "TypingMania",
        body: "TypingMania is a fun and interactive game designed to improve typing speed and accuracy. It challenges users with engaging exercises to enhance their keyboard skills.",
        imgSrc: typingMania,
        tools:[
            ReactSvgSrc,
            ReduxSvgSrc,
            TailwindCssSvgSrc,
            CssSvgSrc 
        ],
        projectSrc: "/blogs/4",
        thumbnailImageSrc: ""
    },
    {
        id: 3,
        title: "ExecuConnect",
        tools:[
            ReactSvgSrc,
            ReduxSvgSrc,
            TailwindCssSvgSrc,
            CssSvgSrc,
            ExpressJsSvgSrc,
            NodeJsSvgSrc,
            JSSvgSrc,
            MongoDbSvgSrc,
            JWTSvgSrc,
            TipTapSvgSrc,
            FullCalenderSvgSrc

        ],
        body: "ExecuConnect is a networking platform for executives to connect, share insights, and collaborate. It enables professionals to build meaningful relationships and exchange industry knowledge.",
        imgSrc: execuConnect,
        projectSrc: "/blogs/5",
        thumbnailImageSrc: ""
    },
]

const skills = [
    DockerSvgSrc,
    JavaSvgSrc,
    ReactSvgSrc,
    ReduxSvgSrc,
    NodeJsSvgSrc,
    JSSvgSrc,
    JWTSvgSrc,
    LinuxSvgSrc,
    MongoDbSvgSrc,
    ExpressJsSvgSrc,
    HtmlSvgSrc,
    CssSvgSrc,
    TailwindCssSvgSrc,
    FullCalenderSvgSrc,
    TipTapSvgSrc
]

const experience = [
    {
        projectName: "TypingMania",
        startingTime: "May-10-2024",
        endingTime: "Sep-12-2024",
        picture: typingMania
    },
    {
        projectName: "CodeTogether",
        startingTime: "Sep-20-2024",
        endingTime: "January-01-2025",
        picture: codeTogetherImageSrc
    },
    {
        projectName: "ExecuConnect",
        startingTime: "January-05-2025",
        endingTime: "Persent",
        picture: execuConnect
    }
]

export {
    projects,
    skills,
    experience
}