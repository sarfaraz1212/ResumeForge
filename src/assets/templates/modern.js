import thumbnail from '../images/modern.png';
import Modern from '../../componenets/templates/modern/Modern';

const BLUEPRINT = {
    id: "MODERN",
    name: "modern",
    description: "A modern resume template.",
    component: Modern,
    thumbnail,
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
        education:{
            allowedFields:[
                {name:"degree", label:"Degree", type:"text"},
                {name:"school", label:"School", type:"text"},
                {name:"startedAt", label:"Started At", type:"text"},
                {name:"endedAt", label:"Ended At", type:"text"},
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
        },
        awards:{
            allowedFields:[
                {name:"title", label:"Title", type:"text"},
                {name:"awarder", label:"Awarder", type:"text"},
                {name:"date", label:"Date", type:"text"},
                {name:"summary", label:"Summary", type:"editor"},
            ]
        }
    }
}

export default BLUEPRINT;
