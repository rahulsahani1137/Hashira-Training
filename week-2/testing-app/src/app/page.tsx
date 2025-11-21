"use client"

import { FormActionButton, FormCard, FormFooter, FormInput, FormTitle } from "@rahulsahani/form-with-validator";
import Image from "next/image";
//@ts-expect-error
import "@rahulsahani/form-with-validator/styles.css"


export default function Home() {
  return (
    <div className="w-fit">
      <FormCard>
        <FormTitle>Awesome Form</FormTitle>
        <FormInput type="email" inputLabel="Email Address:" placeholder="Enter your email" />
        <FormInput type="phone" inputLabel="Phone Number:" placeholder="Enter your phone number" />
        <FormActionButton title="Submit" />
        <FormFooter >By clicking submit you agree to terms & conditions</FormFooter>
      </FormCard>
    </div>
  );
}
