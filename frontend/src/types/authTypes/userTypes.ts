
// Sign up form data types
export enum Role {
    User = 'user',
    Head = 'head',
    Admin = 'admin'
}

export type signupFormData =  {
    email: string,
    roleId: Role,
    password: string,
    confirmPassword: string;
}

// user data 
export interface UserData {
    email: string;
    roleId: Role,
}


