import styled from "styled-components";

const StyledChecklistContainer = styled.section`
  padding: 112px 64px;
  @media (max-width: 768px) {
    padding: 64px 20px;
  }
`;

const StyledChecklistContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledChecklist = styled.div`
  border: 2px solid ${(props) => props.theme.colors["neutralDarkest"]};
  border-radius: 12px;
`;

const StyledChecklistHead = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  h4 {
    margin-bottom: 4px;
  }

  div {
    flex-basis: 50%;
  }
`;

const StyledChecklistHeadButton = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: end;
`;

const StyledChecklistTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const StyledChecklistTable = styled.table`
  border-top: 2px solid ${(props) => props.theme.colors["neutralDarkest"]};
  border-collapse: collapse;
  width: 100%;
  min-width: 600px;
`;

const StyledChecklistTableRow = styled.tr`
  border-top: 2px solid ${(props) => props.theme.colors["neutralDarkest"]};
  width: auto;
`;

const StyledChecklistTableHead = styled.th`
  text-align: start;
  padding: 24px 16px;
`;

const StyledChecklistTableData = styled.td`
  padding: 24px 16px;
`;

const StyledChecklistPageMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    margin: auto;
    button.navigator {
      display: none;
    }
  }
`;

const StyledChecklistPagination = styled.div`
  display: flex;
`;

const StyledChekclistPageItem = styled.button`
  border: none;
  border-radius: 0;
  width: 40px;
  height: 40px;
  background: transparent;
  font-size: 16px;
  cursor: pointer;

  &.selected {
    border: 1px solid ${(props) => props.theme.colors["neutralDarkest"]};
  }
`;

export {
  StyledChecklistContainer,
  StyledChecklistContent,
  StyledChecklist,
  StyledChecklistHead,
  StyledChecklistHeadButton,
  StyledChecklistTableContainer,
  StyledChecklistTable,
  StyledChecklistTableRow,
  StyledChecklistTableHead,
  StyledChecklistTableData,
  StyledChecklistPageMenu,
  StyledChecklistPagination,
  StyledChekclistPageItem,
};
