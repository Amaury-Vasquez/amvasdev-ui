import { Eye, EyeOff } from "lucide-react";
import { forwardRef } from "react";
import { useToggle } from "../../hooks";
import Input, { InputProps } from ".";

interface PasswordInputProps extends Omit<InputProps, "type"> {}

interface PasswordIconProps {
  showPassword: boolean;
  toggleShowPassword: () => void;
}

const PasswordIcon = ({
  showPassword,
  toggleShowPassword,
}: PasswordIconProps) => (
  <button
    type="button"
    className="ui:bg-transparent"
    onClick={toggleShowPassword}
  >
    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
  </button>
);

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const [showPassword, toggleShowPassword] = useToggle(false);

    return (
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        ref={ref}
        rightIcon={
          <PasswordIcon
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
          />
        }
      />
    );
  }
);

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;
