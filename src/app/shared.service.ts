import { Injectable } from "@angular/core";

@Injectable()
export class SharedService {
  usa_controls: any[] = [
    { type: "header", value: "USA Forms" },
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
      value: "in",
      required: true,
      options: [{ key: "in", label: "India" }, { key: "us", label: "USA" }]
    },
    {
      type: "radio",
      name: "country",
      label: "Country",
      value: "in",
      required: true,
      options: [{ key: "m", label: "Male" }, { key: "f", label: "Female" }]
    },
    {
      type: "checkbox",
      name: "hobby",
      label: "Hobby",
      required: true,
      options: [{ key: "f", label: "Fishing" }, { key: "c", label: "Cooking" }]
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
      value: "in",
      required: true,
      options: [{ key: "in", label: "India" }, { key: "us", label: "USA" }]
    },
    {
      type: "radio",
      name: "country",
      label: "Country",
      value: "in",
      required: true,
      options: [{ key: "m", label: "Male" }, { key: "f", label: "Female" }]
    },
    {
      type: "checkbox",
      name: "hobby",
      label: "Hobby",
      required: true,
      options: [{ key: "f", label: "Fishing" }, { key: "c", label: "Cooking" }]
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
      value: "in",
      required: true,
      options: [{ key: "in", label: "India" }, { key: "us", label: "USA" }]
    },
    {
      type: "radio",
      name: "country",
      label: "Country",
      value: "in",
      required: true,
      options: [{ key: "m", label: "Male" }, { key: "f", label: "Female" }]
    },
    {
      type: "checkbox",
      name: "hobby",
      label: "Hobby",
      required: true,
      options: [{ key: "f", label: "Fishing" }, { key: "c", label: "Cooking" }]
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
      value: "in",
      required: true,
      options: [{ key: "in", label: "India" }, { key: "us", label: "USA" }]
    },
    {
      type: "radio",
      name: "country",
      label: "Country",
      value: "in",
      required: true,
      options: [{ key: "m", label: "Male" }, { key: "f", label: "Female" }]
    },
    {
      type: "checkbox",
      name: "hobby",
      label: "Hobby",
      required: true,
      options: [{ key: "f", label: "Fishing" }, { key: "c", label: "Cooking" }]
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
