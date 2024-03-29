import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
import { DebounceInput } from 'react-debounce-input';

export const Wrapper = styled.div`
  /* display: inline-flex; */
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled(DebounceInput)`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
  outline: none;
  /* border: 2px solid orange; */

  :focus {
    color: orange;
    box-shadow: 0px 5px 10px orange;
    /* outline: 1px solid orange; */
    border-color: orange;
  }
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;

  :hover {
    color: orange;
  }
`;
