import Button from "../ui/button";
import GreenButton from "../ui/button/GreenButton";
import {
  StyledChecklistContainer,
  StyledChecklistContent,
  StyledChecklist,
  StyledChecklistHead,
  StyledChecklistHeadButton,
  StyledChecklistTable,
  StyledChecklistTableRow,
  StyledChecklistTableHead,
  StyledChecklistTableData,
  StyledChecklistPageMenu,
  StyledChecklistPagination,
  StyledChekclistPageItem,
  StyledChecklistTableContainer,
} from "../ui/StyledChecklist";

function Checklists() {
  return (
    <StyledChecklistContainer>
      <StyledChecklistContent>
        <StyledChecklist>
          <StyledChecklistHead>
            <div>
              <h4>Heading goes here</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum eius provident cum quidem?
              </p>
            </div>
            <StyledChecklistHeadButton>
              <Button $small>Button</Button>
              <GreenButton $small>Button</GreenButton>
              <span>***</span>
            </StyledChecklistHeadButton>
          </StyledChecklistHead>
          <StyledChecklistTableContainer>
            <StyledChecklistTable>
              <thead>
                <StyledChecklistTableRow>
                  <StyledChecklistTableHead>Name</StyledChecklistTableHead>
                  <StyledChecklistTableHead>Company</StyledChecklistTableHead>
                  <StyledChecklistTableHead>Products</StyledChecklistTableHead>
                  <StyledChecklistTableHead>Team</StyledChecklistTableHead>
                  <StyledChecklistTableHead>Date</StyledChecklistTableHead>
                  <StyledChecklistTableHead>Action</StyledChecklistTableHead>
                </StyledChecklistTableRow>
              </thead>
              <tbody>
                <StyledChecklistTableRow>
                  <StyledChecklistTableData>Jaka</StyledChecklistTableData>
                  <StyledChecklistTableData>
                    STT Terpadu Nurul Fikri
                  </StyledChecklistTableData>
                  <StyledChecklistTableData>Tenda</StyledChecklistTableData>
                  <StyledChecklistTableData>ACA</StyledChecklistTableData>
                  <StyledChecklistTableData>22/3/2004</StyledChecklistTableData>
                  <StyledChecklistTableData>View</StyledChecklistTableData>
                </StyledChecklistTableRow>
                <StyledChecklistTableRow>
                  <StyledChecklistTableData>Justice</StyledChecklistTableData>
                  <StyledChecklistTableData>
                    STT Terpadu Nurul Fikri
                  </StyledChecklistTableData>
                  <StyledChecklistTableData>Tenda</StyledChecklistTableData>
                  <StyledChecklistTableData>ACA</StyledChecklistTableData>
                  <StyledChecklistTableData>22/3/2004</StyledChecklistTableData>
                  <StyledChecklistTableData>View</StyledChecklistTableData>
                </StyledChecklistTableRow>
                <StyledChecklistTableRow>
                  <StyledChecklistTableData>Layla</StyledChecklistTableData>
                  <StyledChecklistTableData>
                    STT Terpadu Nurul Fikri
                  </StyledChecklistTableData>
                  <StyledChecklistTableData>Tenda</StyledChecklistTableData>
                  <StyledChecklistTableData>ACA</StyledChecklistTableData>
                  <StyledChecklistTableData>22/3/2004</StyledChecklistTableData>
                  <StyledChecklistTableData>View</StyledChecklistTableData>
                </StyledChecklistTableRow>
              </tbody>
            </StyledChecklistTable>
          </StyledChecklistTableContainer>
        </StyledChecklist>
        <StyledChecklistPageMenu>
          <Button className="navigator" $extraSmall>
            {"<"} Prev
          </Button>
          <StyledChecklistPagination>
            <StyledChekclistPageItem className="selected">
              1
            </StyledChekclistPageItem>
            <StyledChekclistPageItem>2</StyledChekclistPageItem>
            <StyledChekclistPageItem>3</StyledChekclistPageItem>
            <StyledChekclistPageItem>4</StyledChekclistPageItem>
          </StyledChecklistPagination>
          <Button className="navigator" $extraSmall>
            Next {">"}
          </Button>
        </StyledChecklistPageMenu>
      </StyledChecklistContent>
    </StyledChecklistContainer>
  );
}

export default Checklists;
