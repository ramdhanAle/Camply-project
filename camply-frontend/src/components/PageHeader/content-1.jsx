import { useState } from "react";
import IconInput from "../ui/form/IconInput";
import Button from "../ui/button";
import StyledPageHeaderContent from "../ui/StyledPageHeader/content";
import HeaderTitle from "../ui/HeaderTitle";

function HeaderContentWithButton({ title, description, onSearch }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  };

  return (
    <StyledPageHeaderContent>
      <HeaderTitle className="font-sora">{title}</HeaderTitle>
      <div className="content">
        <p>{description}</p>
        <div className="right">
          <IconInput>
            <label htmlFor="search" className="logo">
              &copy;
            </label>
            <input
              id="search"
              placeholder="search"
              type="text"
              value={input}
              onChange={handleChange}
            />
          </IconInput>
          <Button $small onClick={() => onSearch(input)}>
            Search
          </Button>
        </div>
      </div>
    </StyledPageHeaderContent>
  );
}

export default HeaderContentWithButton;
