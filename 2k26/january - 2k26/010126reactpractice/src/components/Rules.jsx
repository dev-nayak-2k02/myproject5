import React, { useState } from "react";
import styled from "styled-components";
const Rules = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <Button onClick={() => setShowRules(!showRules)}>
        {showRules ? "Hide Rules" : "Show Rules"}
      </Button>

      {showRules && (
        <RuleBox>
          <ul>
            <li>
              First <strong>select a number</strong> from the bar above
            </li>
            <li>
              Click <strong>dice</strong> to get your score
            </li>
            <li>
              Click <strong>reset</strong> to reset the score
            </li>
          </ul>
        </RuleBox>
      )}
    </>
  );
};

export default Rules;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
`;

const RuleBox = styled.div`
  margin-top: 20px;
  background-color: #fd9e9e;
  padding: 15px;
  border-radius: 6px;
  width: 40%;
`;
