import Button from '@material-ui/core/Button';
import React from 'react';
import '../styles.css';

const Tabels = (props) => {
  const { tableTitle } = props;
  return (
    <div className='table-container'>
      <div className="title-container">
        <h2>{tableTitle}</h2>

      </div>
      <table>

        <tr>
          <td><Button variant="contained" color="secondary">
                        toranto
          </Button></td>
          <td>8</td>

        </tr>
        <tr>
          <td><Button variant="contained" color="secondary">
                        toranto
          </Button></td>
          <td>15 </td>

        </tr>
        <tr>
          <td><Button variant="contained" color="secondary">
                        toranto
          </Button></td>
          <td>8</td>

        </tr>
        <tr>
          <td><Button variant="contained" color="secondary">
                        toranto
          </Button></td>
          <td>8</td>

        </tr>

      </table>
    </div>
  );
};

export default Tabels;
