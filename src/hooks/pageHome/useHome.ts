import { ChangeEvent, FormEvent, useState } from "react";
import { useValidator } from "../../validators/hooks/useValidator";

type Props = {
  idNewPasswordField: string;
};

export function useHome({ idNewPasswordField }: Props) {
  const [passwordValue, setPasswordValue] = useState("");
  const [radioOptionChecked, setRadioOptionChecked] = useState("1");
  const { validateStringIsEqual } = useValidator();
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPasswordValue(e.target.value);
  }

  function confirmNewPasswordValidationFunction(
    confirmNewPasswordFieldValue: string
  ) {
    const newPasswordField = document.getElementById(
      idNewPasswordField
    ) as HTMLInputElement;
    return validateStringIsEqual(
      confirmNewPasswordFieldValue,
      newPasswordField.value
    );
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert("Form submitted!");
  }

  return {
    confirmNewPasswordValidationFunction,
    setRadioOptionChecked,
    radioOptionChecked,
    passwordValue,
    handleChange,
    handleSubmit,
  };
}
