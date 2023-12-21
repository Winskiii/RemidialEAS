import { CollectionConfig } from "payload/types";

const Chats: CollectionConfig = {
    slug: "chats",
    fields: [
    
        {
            name: "from",
            type: "relationship",
            relationTo: "users",
            required: true,
        },
        {
            name: "to",
            type: "relationship",
            relationTo: "users",
            required: true,
        },
        {
            name: "message",
            label: "Message",
            type: "text",
            required: true,
        },
        {
            name: "channel",
            label: "Channel",
            type: "relationship",
            relationTo: "channels",
        },
    ],
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: ()=> true,
    }
}

export default Chats