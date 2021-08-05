import styled from "@emotion/styled";
import { DocumentUser } from "grommet-icons";
import { PRIMARY_FONT_COLOR, SECONDARY_FONT_COLOR } from '../constants/colors';

const DocumentWrapper = styled(DocumentUser)`
  &:hover {
    fill: ${PRIMARY_FONT_COLOR};
    stroke: ${PRIMARY_FONT_COLOR};
  }
`;

export const ResumeIcon = () => {
    return (
        <DocumentWrapper a11yTitle="Resume" color={SECONDARY_FONT_COLOR}/>
    );
};