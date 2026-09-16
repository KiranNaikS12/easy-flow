import type { AccountSetupField } from "../types/componentTypes.ts/AccountSetupTypes";

export const ACCOUNT_SETUP_FIELDS: AccountSetupField[] = [
    {
      id: 1,
      label: "Enter Institution Name",
      value: "institutionName",
      type: "text",
      placeholder: "Institution Name",
    },
    {
      id: 2,
      label: "Enter Institution Type",
      value: "institutionType",
      type: "text",
      placeholder:
        "Eg: Tuition Center, Coaching Center, Dance Center etc.",
    },
    {
      id: 3,
      label: "Enter Phone No.",
      value: "phone",
      type: "tel",
      placeholder: "Eg: 9999999999",
    },
    {
      id: 4,
      label: "Enter Description",
      value: "description",
      type: "textarea",
      placeholder: "Write something about the institution",
    },
  ];
  
export const SERVICE_SUGGESTIONS = [
    "Primary",
    "Upper Primary",
    "Secondary (High School)",
    "Higher Secondary (class 11 & 12)",
    "Trading",
    "NEET",
    "JEE",
    "Banking",
    "Railway",
    "Music",
    "Dance",
    "CS"
  ];
  