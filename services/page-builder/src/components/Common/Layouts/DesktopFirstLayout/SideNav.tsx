import { Box, BoxProps } from "@design/react-components-layout";

type Props = BoxProps;

export const DesktopFirstSideNav = (props: Props) => {
  const { children, background = "gray", className, ...rest } = props;
  const currentClassName = ["w-[280px] z-10 fixed min-h-full", className].join(
    " ",
  );

  return (
    <Box {...rest} background={background} className={currentClassName}>
      {children}
    </Box>
  );
};
