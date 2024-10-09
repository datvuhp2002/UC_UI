import React from "react";
import classNames from "classnames/bind";
import Styles from "./Select.module.scss";

interface SelectProps {
  text?: boolean;
  w50?: boolean;
  w70?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  register?: any;
  name: string;
  validation?: any;
  children: React.ReactNode;
  errors?: any;
}

const cx = classNames.bind(Styles);

const Select: React.FC<SelectProps> = ({
  text = false,
  w50,
  w70,
  className,
  leftIcon,
  rightIcon,
  onChange,
  register,
  name,
  validation,
  children,
  errors,
  ...passProps
}) => {
  let _props: { [key: string]: any } = { onChange, ...passProps };
  const registerProps = register ? register(name, validation) : {};
  const hasError = errors && errors[name];
  const classes = cx("wrapper", {
    w50,
    w70,
    error: hasError,
    [className!]: className, // Use className with non-null assertion
  });
  return (
    <div className={classes}>
      {leftIcon && <span className={cx("Icon")}>{leftIcon}</span>}
      <select {...registerProps} {..._props}>
        {children}
      </select>
      {rightIcon && <span className={cx("Icon")}>{rightIcon}</span>}
    </div>
  );
};

export default Select;
