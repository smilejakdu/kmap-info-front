import styled from "styled-components";
import palette from "../../util/styles/palette";

const CircleBorder = styled.div`
  border-right: 1px solid ${palette.blue[7]};
  display: flex;
  float: left;
  margin-left: 20px;
`;

const SvgBorder = styled.div`
  display: flex;
  border-bottom: 1px solid ${palette.blue[2]};
`;

const ColumnBorder = styled.div`
  display: flex;
  float: left;
`;

export { CircleBorder, ColumnBorder, SvgBorder };
