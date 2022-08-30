import * as React from "react";
import classNames from "classnames";

export interface BalloonProps {
  fromLeft?: boolean;
  fromRight?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Balloon: React.FunctionComponent<BalloonProps> = ({ fromLeft, fromRight, children, className, ...other }) => (
  <div
    className={classNames(className, "nes-balloon", {
      "from-left": fromLeft,
      "from-right": fromRight
    })}
    {...other}
  >
    {children}
  </div>
)

export default Balloon;
