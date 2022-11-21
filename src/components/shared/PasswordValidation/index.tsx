import React from "react";

import { usePasswordValidation } from "./hooks/usePasswordValidation";
import { ItemValidator } from "../ItemValidator";
import { Text5 } from "../Texts";

export type Props = {
  passwordValue: string;
};
export function PasswordValidation({ passwordValue }: Props) {
  const validations = usePasswordValidation();
  return (
    <div
      data-testid={"passwordValidation"}
      className={
        "flex flex-row bg-gray-200 rounded-xl p-3 h-fit w-full gap-8"
      }
    >
      <div className={"flex flex-col justify-start gap-2 w-fit"}>
        <Text5 className={"font-normal"}>{"minimum criteria: "}</Text5>
        <ItemValidator
          idValidator={"moreThanEight"}
          label={"8 characters"}
          value={passwordValue}
          validateFunctions={[validations.moreThanEightFunctionValidation]}
        />
        <ItemValidator
          idValidator={"minimumOneSymbol"}
          label={"1 symbol"}
          value={passwordValue}
          validateFunctions={[validations.minimumOneSymbolFunctionValidation]}
        />
        <ItemValidator
          idValidator={"minimumOneNumber"}
          label={"1 number"}
          value={passwordValue}
          validateFunctions={[validations.minimumOneNumberFunctionValidation]}
        />
        <ItemValidator
          idValidator={"minimumOneLetterLowerCase"}
          label={"1 lower case letter"}
          value={passwordValue}
          validateFunctions={[
            validations.minimumOneLetterLowerCaseFunctionValidation,
          ]}
        />
      </div>
      <div className={"flex flex-col justify-start gap-2 w-fit"}>
        <Text5 className={"text-grayscale-400 font-normal"}>
          {"Pass example: JOnny&D33p"}
        </Text5>
        <ItemValidator
          idValidator={"minimumOneLetterUpperCase"}
          label={"1 upper case letter"}
          value={passwordValue}
          validateFunctions={[
            validations.minimumOneLetterUpperCaseFunctionValidation,
          ]}
        />
        <ItemValidator
          idValidator={"lessThanTreeSequentialDigits"}
          label={"max. 2 digits in sequence"}
          value={passwordValue}
          validateFunctions={[
            validations.lessThanTreeSequentialDigitsFunctionValidation,
          ]}
        />
        <ItemValidator
          idValidator={"lessThanTreeSequentialCharacter"}
          label={"max. 2 char. in sequence"}
          value={passwordValue}
          validateFunctions={[
            validations.lessThanTreeSequentialCharacterFunctionValidation,
          ]}
        />
      </div>
    </div>
  );
}
