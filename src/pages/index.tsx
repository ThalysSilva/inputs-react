import React from "react";

import { InputNumberWithSpinner } from "../components/shared/CustomInputs/InputNumberWithSpinner";
import { InputAutocomplete } from "../components/shared/CustomInputs/InputAutocomplete";
import { SingleNumberInputGroup } from "../components/shared/SingleNumberInputGroup";
import { InputPassword } from "../components/shared/CustomInputs/InputPassword";
import { InputCheckbox } from "../components/shared/CustomInputs/InputCheckbox";
import { PasswordValidation } from "../components/shared/PasswordValidation";
import { InputNumber } from "../components/shared/CustomInputs/InputNumber";
import { InputEmail } from "../components/shared/CustomInputs/InputEmail";
import { InputRadio } from "../components/shared/CustomInputs/InputRadio";
import { InputFile } from "../components/shared/CustomInputs/InputFile";
import { Text4, Text5 } from "../components/shared/Texts";
import { Button } from "../components/shared/Button";
import { useHome } from "../hooks/pageHome/useHome";
import { Input } from "../components/shared/Input";
import LockIcon from "../assets/icon/Lock";
import Head from "next/head";

export default function Home() {
  const idNewPasswordField = "newPassword";
  const {
    confirmNewPasswordValidationFunction,
    setRadioOptionChecked,
    radioOptionChecked,
    passwordValue,
    handleChange,
    handleSubmit,
  } = useHome({ idNewPasswordField });
  return (
    <div className="flex w-full xl:w-[1200px] p-[60px]">
      <Head>
        <title>{"Inputs in React By Thalys Silva"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form
        onSubmit={handleSubmit}
        className=" flex flex-col xl:grid xl:grid-cols-3 gap-4 h-fit"
      >
        <Input required labelString={"Default Input"} />
        <InputNumber showValidationBar isRequired label={"Input number with validation bar"} />
        <InputEmail isRequired label={"E-mail"} />
        <InputPassword
          label={"Input Password With Icon"}
          onLeftIcon={<LockIcon />}
          onChange={handleChange}
          id={idNewPasswordField}
          value={passwordValue}
          isRequired
          showButton
        />
        <PasswordValidation passwordValue={passwordValue} />
        <InputPassword
          validateFunctions={[confirmNewPasswordValidationFunction]}
          placeholder={"Confirm password"}
          label={"Confirm password "}
          onLeftIcon={<LockIcon />}
          isRequired
          showButton
        />
        <InputAutocomplete
          placeholder={"type orange or lemon"}
          labelString={"Input Autocomplete"}
          list={[
            { label: "orange", value: "orange" },
            { label: "lemon", value: "lemon" },
          ]}
        />
        <SingleNumberInputGroup
          label={"group of input numbers"}
          numberOfInputs={5}
          isRequired
        />
        <InputNumberWithSpinner label={"Input number with arrows"} />
        <div className="flex flex-col">
          <Text5 className={"mb-2 font-semibold"}>{"Input radio"}</Text5>
          <div className={"flex flex-col w-fit gap-4"}>
            <InputRadio
              onClick={() => setRadioOptionChecked("1")}
              checked={radioOptionChecked == "1"}
              name={"radioExample"}
            >
              <Text4>Radio Option 1</Text4>
            </InputRadio>
            <InputRadio
              onClick={() => setRadioOptionChecked("2")}
              checked={radioOptionChecked == "2"}
              name={"radioExample"}
            >
              <Text4>Radio Option 2</Text4>
            </InputRadio>
          </div>
        </div>
        <div className="flex flex-col">
          <Text5 className={"mb-2 font-semibold"}>{"Input checkbox"}</Text5>
          <div className={"flex flex-col w-fit gap-4"}>
            <InputCheckbox colorScheme={"blue"}>
              <Text4>{"Checkbox blue theme"}</Text4>
            </InputCheckbox>
            <InputCheckbox colorScheme={"red"}>
              <Text4>{"Checkbox red theme"}</Text4>
            </InputCheckbox>
          </div>
        </div>
        <InputFile/>
        <div className={'flex col-span-3 justify-center mt-3'}>
          <Button className="flex w-full justify-center">
            <Text4 className="text-white-full">{"Submit"}</Text4>
          </Button>
        </div>
      </form>
    </div>
  );
}
