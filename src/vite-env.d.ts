/// <reference types="vite/client" />


//types and interfaces for main data entries
/**
 * User interface
 */
interface IUser {
    /**
     * user username
     */
    username: string;
    /**
     * user first name
     */
    first_name?: string;
    /**
     * user lest name
     */
    last_name?: string;
    /**
     * user email
     */
    email: string;
    /**
     * password
     */
    password: string
}

type UserUpdatedData = {
    username?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string
}



/**Rhinestones Types: "Sew-on", "HotFix", "No-HotFix" */
enum RhinestonesType {
    sew_on = 'Sew on',
    hotfix = 'HotFix',
    no_hotfix = 'No HotFix'
}

/**Interface for rhinestone */
interface IRhinestone {
    _id: string;
    /**
     * foreign key to user
     */
    created_by: string;
    /**
         * Type of the rhinestone
         */
    type: RhinestonesType;
    /**
     * Information about rhinestones size
     */
    size: string;
    /**
     * Information about rhinestones color
     */
    color: string;
    /**
     * Additional links for resources
     */
    links: LinkObject[];
    /**
     * Links to images
     */
    imgs: LinkObject[];
}

/**
 * Interface for Fabric model
 */
interface IFabric{
    _id: string;
    /**
     * foreign key to user
     */
    created_by: string;
    /**
         * Type of the fabric
         */
    type: string;
    /**
     * Information about fabric color
     */
    color: string;
    /**
     * Additional links for resources
     */
    links: LinkObject[];
    /**
     * Links to images
     */
    imgs: LinkObject[];
}

/**
 * Interface for Project
 */
interface IProject {
    /**
     * key
     */
    _id: string;
    /**
         * foreign key to user
         */
    created_by: string;
    /**
     * Project title
     */
    title: string;
    /**
     * The list of rhinestones and its amount that is used in project
     */
    rhinestones?: ProjectRhinestone[];
    /**
     * The list of fabrics and its amount that is used in project
     */
    fabrics?: ProjectFabric[];
    /**
     * additional notes related to project
     */
    notes: Note[];
    /**
     * Links to images
     */
    imgs: LinkObject[];
}

/**
 * Type for rhinestones in project
 */
type ProjectRhinestone = {
    _id:string;
    /**
         * foreign key to Rhinestone
         */
    rhinestone_id: string;
    /**
     * amount of rhinestones
     */
    amount: number;
    /**
     * additional notes related to rhinestone
     */
    notes: Note[];
}

/**
 * Type for fabrics in project
 */
type ProjectFabric = {
    _id:string;
    /**
         * foreign key to Fabric
         */
    fabric_id: string;
    /**
     * fabric quantity 
     */
    quantity: number;
    /**
     * additional notes related to fabric
     */
    notes: Note[];
}
/**
 * type for notes
 */
type Note = {
    /**
     * note context
     */
    context: string;
    /**
     * date when created
     */
    created_date: Date;
}

type LinkObject = {
    _id: string;
    url: string;
}

//export
export { IUser, UserUpdatedData, IRhinestone, RhinestonesType, IFabric, IProject, LinkObject, ProjectFabric, ProjectRhinestone }

