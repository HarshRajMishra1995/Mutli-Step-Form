import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <p>Fill this form with your credit card details.</p>
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your CardNumber"
              label="CardNumber"
              onChange={handleChange('CardNumber')}
              defaultValue={values.CardNumber}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Card Expiry Date"
              label="Expire"
              onChange={handleChange('Expire')}
              defaultValue={values.Expire}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Card Holder Name"
              label="Name On Card"
              onChange={handleChange('Nameoncard')}
              defaultValue={values.Nameoncard}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Card Cvv Number"
              label="Cvv"
              onChange={handleChange('Code')}
              defaultValue={values.Code}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
