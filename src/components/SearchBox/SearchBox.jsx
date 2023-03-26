import PropTypes from 'prop-types';
import { Wrapper, Icon, Input } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        autoFocus
        type="text"
        value={value}
        debounceTimeout={1000}
        onChange={e => onChange(e.target.value)}
      />
    </Wrapper>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func,
};
