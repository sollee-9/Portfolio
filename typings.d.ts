interface SanityBody {
   _createdat?: string;
   _id?: string;
   _rev?: string;
   _updatedAt?: string;
}

interface Image {
   src: string | undefined;
   _type: "image";
   asset: {
      _ref: string;
      _type: "reference";
   };
}

export interface PageInfo extends SanityBody {
   _type: "pageInfo";
   address: string;
   backgroundInformation: string;
   email: string;
   role: string;
   heroImage: Image;
   name: string;
   phoneNumber: string;
   profilePic: Image;
}

export interface Skill extends SanityBody {
   _type: "skill";
   image: Image;
   title: string;
}

export interface Experience extends SanityBody {
   _type: "experience";
   company: string;
   image: Image;
   dateStarted?: date;
   dataEnded?: date;
   jobTitle: string;
   points: string[];
   technologies?: Technology[];
}

export interface Project extends SanityBody {
   img: any;
   title: string;
   _type: "project";
   image: Image;
   skills: any[];
   url: string;
   summary: string;
   technologies: Technology[];
}

export interface Social extends SanityBody {
   _type: "social";
   title: string;
   url: string;
}
