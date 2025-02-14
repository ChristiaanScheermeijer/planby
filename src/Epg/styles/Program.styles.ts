import styled from "@emotion/styled/macro";
import { Theme } from "../helpers";

export const ProgramBox = styled.div<{ width: number }>`
  position: absolute;
  padding: ${({ width }) => (width === 0 ? 0 : 4)}px;
  overflow: hidden;
`;

export const ProgramContent = styled.div<{
  isLive: boolean;
  width: number;
  theme?: Theme;
}>`
  position: relative;
  display: flex;
  font-size: 11px;
  height: 100%;
  border-radius: 8px;
  padding: 10px ${({ width }) => (width < 30 ? 4 : 20)}px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  z-index: 1;
  background: ${({ theme: { primary } }) =>
    `linear-gradient(to right, ${primary[600]}, ${primary[600]})`};
  &:hover {
    background: ${({ theme: { gradient } }) =>
      `linear-gradient(to right, ${gradient.blue[900]}, ${gradient.blue[600]})`};
  }

  ${({ isLive, theme: { gradient } }) =>
    isLive &&
    `background: linear-gradient(to right, ${gradient.blue[900]}, ${gradient.blue[600]},${gradient.blue[300]})`}
`;

export const ProgramFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Elipsis = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProgramTitle = styled.p<{ theme?: Theme }>`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: 500;
  color: ${({ theme }) => theme.grey[300]};
  ${Elipsis}
`;

export const ProgramText = styled.span<{ theme?: Theme }>`
  display: block;
  font-size: 12.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.text.grey[500]};
  text-align: left;
  ${Elipsis}
`;

export const ProgramImage = styled.img`
  margin-right: 15px;
  border-radius: 6px;
  width: 100px;
`;

export const ProgramStack = styled.div`
  overflow: hidden;
`;
