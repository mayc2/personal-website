import styled from "@emotion/styled";
import { MailOption } from "grommet-icons"
import { PRIMARY_FONT_COLOR, SECONDARY_FONT_COLOR } from "../constants/colors"

const MailIconWrapper = styled(MailOption)`
  &:hover {
    fill: ${PRIMARY_FONT_COLOR};
    stroke: ${PRIMARY_FONT_COLOR};
  }
`;

export const MailIcon = () => {
    return (
    <MailIconWrapper a11yTitle="Email" color={SECONDARY_FONT_COLOR}/>
    );
};
