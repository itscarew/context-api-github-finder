import React from "react";
import { css } from "@emotion/core";
import { BounceLoader } from "react-spinners";

const CustomBounceLoader = ({ loading, children, ...otherProps }) => {
  const override = css`
    display: block;
    margin: 8rem auto;
  `;
  return (
    <React.Fragment>
      {loading ? (
        <BounceLoader
          {...otherProps}
          css={override}
          size={60}
          color="#000500"
          loading={loading}
        />
      ) : (
        children
      )}
    </React.Fragment>
  );
};

export default CustomBounceLoader;
