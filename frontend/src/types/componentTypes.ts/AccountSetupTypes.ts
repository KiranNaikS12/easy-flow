export type AccountSetupValues = {
    institutionName: string;
    institutionType: string;
    phone: string;
    description: string;
    services: string[];
  };
  
export type AccountSetupField = {
    id: number;
    label: string;
    value: keyof Omit<AccountSetupValues, "services">;
    type: "text" | "tel" | "textarea";
    placeholder: string;
  };