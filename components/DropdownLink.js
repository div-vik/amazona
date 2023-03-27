import Link from "next/link";
import React from "react";

const DropdownLink = (props) => {
  let { href, children, ...rest } = props;
  return (
    <Link {...rest} href={href}>
      {children}
    </Link>
  );
};

export default DropdownLink;
