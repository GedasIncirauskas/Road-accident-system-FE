import React from 'react';
import * as S from './Selector.styles';

const Selector = ({ selector, date, setSelector }) => {
  const clearFilter = () => {
    setSelector(false);
  };

  return (
    <S.FilterContainer>
      <label htmlFor="date">Filter by date:</label>
      <select name="date" onChange={(e) => setSelector(e.target.value)}>
        {date.map((item) => (
          <option key={item} value={item || 'Choose'}>
            {item}
          </option>
        ))}
      </select>
      {selector ? (
        <div>
          <S.ClearFilterBtn onClick={() => clearFilter()}>Clear filter</S.ClearFilterBtn>
        </div>
      ) : (
        ''
      )}
    </S.FilterContainer>
  );
};

export default Selector;
