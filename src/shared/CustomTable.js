import React from 'react';

const CustomTable = props => (
  <table
    className="table table-striped table-hover"
    name={props.name}
  >
    <thead>
      <tr>
        {props.cols.map(col => (
          <th key={col.id}> {col.text} </th>
          ))}
      </tr>
    </thead>
    <tbody>
      {props.rows.map(row => (
        <tr key={row.id}>
          <td> {row.food} </td>
          <td> {row.price} </td>
          <td> {row.user} </td>
        </tr>
        ))}
    </tbody>
  </table>
);

CustomTable.propTypes = {
  name: React.PropTypes.string.isRequired,
  cols: React.PropTypes.arrayOf(React.PropTypes.object),
  rows: React.PropTypes.arrayOf(React.PropTypes.object),
};

CustomTable.defaultProps = {
  name: '',
  cols: [],
  rows: [],
};

export default CustomTable;
