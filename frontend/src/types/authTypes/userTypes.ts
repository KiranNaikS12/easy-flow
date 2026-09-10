
// Sign up form data types
export enum Role {
    Client = 'client',
    Head = 'head',
    Admin = 'admin'
}

export type signupFormData =  {
    email: string,
    password: string,
    confirmPassword: string;
}

export type singInFormData = {
    email: string;
    password: string;
}

// user data 
export interface UserData {
    _id:string;
    email: string;
    roleId: Role,
    createdAt:Date | null;
    updatedAt: Date | null;
}


