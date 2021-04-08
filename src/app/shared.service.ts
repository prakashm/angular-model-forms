import { Injectable } from "@angular/core";

@Injectable()
export class SharedService {
  usa_controls: any[] = [
    {
      type: "header",
      value: "USA Forms"
    },
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "email",
      label: "Email",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "address",
      label: "Address",
      value: "",
      required: true
    },
    {
      type: "dropdown",
      name: "country",
      label: "Country",
      value: "us",
      required: true,
      options: [
        { key: "in", label: "India" },
        { key: "us", label: "USA" },
        { key: "mx", label: "Mexico" },
        { key: "ts", label: "Tunisia" }
      ]
    },
    {
      type: "radio",
      name: "gender",
      label: "Gender",
      value: "m",
      required: true,
      options: [{ key: "m", label: "Male" }, { key: "f", label: "Female" }]
    },
    {
      type: "checkbox",
      name: "source",
      label: "Source",
      required: true,
      options: [{ key: "f", label: "Online" }, { key: "c", label: "Web" }]
    },
    {
      type: "checkbox",
      name: "product",
      label: "product",
      required: true,
      options: [{ key: "f", label: "cash" }, { key: "c", label: "ATM" }]
    }
  ];
  india_controls: any[] = [
    { type: "header", value: "India Forms" },
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "lastName",
      label: "Surname",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "email",
      label: "Email",
      value: "",
      required: true
    },
    {
      type: "dropdown",
      name: "country",
      label: "Country",
      value: "in",
      required: true,
      options: [
        { key: "in", label: "India" },
        { key: "us", label: "USA" },
        { key: "mx", label: "Mexico" },
        { key: "ts", label: "Tunisia" }
      ]
    },
    {
      type: "radio",
      name: "gender",
      label: "Gender",
      value: "in",
      required: true,
      options: [{ key: "m", label: "Male" }, { key: "f", label: "Female" }]
    },
    {
      type: "checkbox",
      name: "source",
      label: "Source",
      required: true,
      options: [{ key: "f", label: "Online" }, { key: "c", label: "Web" }]
    }
  ];

  mexico_controls: any[] = [
    { type: "header", value: "Mexico Forms" },
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "email",
      label: "Email",
      value: "",
      required: true
    },

    {
      type: "dropdown",
      name: "country",
      label: "Country",
      value: "mx",
      required: true,
      options: [
        { key: "in", label: "India" },
        { key: "us", label: "USA" },
        { key: "mx", label: "Mexico" },
        { key: "ts", label: "Tunisia" }
      ]
    },
    {
      type: "radio",
      name: "gender",
      label: "Gender",
      value: "in",
      required: true,
      options: [{ key: "m", label: "Male" }, { key: "f", label: "Female" }]
    },
    {
      type: "checkbox",
      name: "source",
      label: "source",
      required: true,
      options: [{ key: "f", label: "Online" }, { key: "c", label: "Web" }]
    }
  ];
  tunisia_controls: any[] = [
    { type: "header", value: "Tunisia Forms" },
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "email",
      label: "Email",
      value: "",
      required: true
    },

    {
      type: "dropdown",
      name: "country",
      label: "Country",
      value: "ts",
      required: true,
      options: [
        { key: "in", label: "India" },
        { key: "us", label: "USA" },
        { key: "mx", label: "Mexico" },
        { key: "ts", label: "Tunisia" }
      ]
    },
    {
      type: "radio",
      name: "gender",
      label: "Gender",
      value: "in",
      required: true,
      options: [{ key: "m", label: "Male" }, { key: "f", label: "Female" }]
    },
    {
      type: "checkbox",
      name: "source",
      label: "Source",
      required: true,
      options: [{ key: "f", label: "Online" }, { key: "c", label: "Web" }]
    }
  ];
  constructor() {}

  getControls(countryCode): any {
    console.log("Country code request : " + countryCode);
    switch (Number(countryCode)) {
      case 1: {
        return this.usa_controls;
        break;
      }
      case 2: {
        return this.india_controls;
        break;
      }
      case 3: {
        return this.mexico_controls;
        break;
      }
      case 4: {
        return this.tunisia_controls;
        break;
      }
    }
  }
}
