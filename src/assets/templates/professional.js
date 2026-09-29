    import thumbnail from '../images/professional.png';
import Professional from '../../componenets/templates/professional/Professional';

const BLUEPRINT = {
    id: "PROFESSIONAL",
    name: "professional",
    description: "A clean single-column professional resume.",
    component: Professional,
    thumbnail,
    favourite: true,
    sections:{
        about:{
            allowedFields:[
                {name:"name", type:"text"},
                {name:"email", type:"email"},
                {name:"title", type:"text"},
                {name:"phone", type:"tel"},
                {name:"description", type:"textarea"}
            ]
        },
        skills:{
            allowedSkills:[
                {name:"languages", label:"Languages"},
                {name:"frameworks", label:"Frameworks"},
                {name:"libraries", label:"Libraries"},
                {name:"apis", label:"APIs"},
                {name:"databases", label:"Databases"},
                {name:"realtime", label:"Real-Time"},
                {name:"versionControl", label:"Version Control"},
                {name:"designPatterns", label:"Design Patterns"}
            ]
        },
        experience:{
            allowedFields:[
                {name:"company", label:"Company", type:"text"},
                {name:"title", label:"Title", type:"text"},
                {name:"description", label:"Description", type:"editor"},
                {name:"startedAt", label:"Started At", type:"text"},
                {name:"endedAt", label:"Ended At", type:"text"},
            ]
        },
        projects:{
            allowedFields:[
                {name:"title", label:"Title", type:"text"},
                {name:"link", label:"Link", type:"text"},
                {name:"startedAt", label:"Started At", type:"text"},
                {name:"endedAt", label:"Ended At", type:"text"},
                {name:"description", label:"Description", type:"editor"},
            ]
        },
        education:{
            allowedFields:[
                {name:"degree", label:"Degree", type:"text"},
                {name:"school", label:"School", type:"text"},
                {name:"startedAt", label:"Started At", type:"text"},
                {name:"endedAt", label:"Ended At", type:"text"},
                {name:"description", label:"Description", type:"text"},
            ]
        },
        certifications:{
            allowedFields:[
                {name:"title", label:"Title", type:"text"},
                {name:"awarder", label:"Awarder", type:"text"},
                {name:"date", label:"Date", type:"text"},
            ]
        },
        languages:{
            allowedFields:[
                {name:"name", label:"Name", type:"text"},
                {name:"level", label:"Level", type:"text"},
            ]
        },
        references:{
            allowedFields:[
                {name:"name", label:"Name", type:"text"},
                {name:"role", label:"Role", type:"text"},
                {name:"phone", label:"Phone", type:"tel"},
                {name:"email", label:"Email", type:"email"},
            ]
        },
        volunteer:{
            allowedFields:[
                {name:"organization", label:"Organization", type:"text"},
                {name:"role", label:"Role", type:"text"},
                {name:"startedAt", label:"Started At", type:"text"},
                {name:"endedAt", label:"Ended At", type:"text"},
                {name:"description", label:"Description", type:"editor"},
            ]
        }
    }
}

export default BLUEPRINT;
