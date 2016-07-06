import React, {Component} from "react";
import ActionBar from "../subcomponents/ActionBar";

class Payment extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    const data = this.props.data;
    const title = data.title;
    const description = data.description;
    const text = data.text;
    const publicIds = window.publicIds;
    const today = new Date().toJSON().slice(0,10);
    let startAt = data.startAt;
    if (!startAt) {
      startAt = today;
    }

    // I'mport expects card number to 16 digits
    const cardNumber = data.cardNumber.slice(0,4) + "-" + data.cardNumber.slice(4,8) + "-" + data.cardNumber.slice(8,12) + "-" + data.cardNumber.slice(12);

    const expiry = data.expiry.slice(0,4) + "-" + data.expiry.slice(4);

    const payment = {
      cardNumber: cardNumber,
      expiry: expiry,
      birth: data.birth,
      pwd2digit: data.pwd2digit,
      amount: 7000,
      currency: "won"
    };
    let newProject = {
      title: title,
      description: description,
      startAt: startAt
    };

    /* Input Validation */
    let validationCallback = (item) => {
      if (item && item.length > 0) {
        return true;
      }
      return false;
    };

    let validator = () => {
      console.log("validator clicked");
      if (this.props.validateAll(validationCallback, data.cardNumber, data.expiry, data.birth, data.pwd2digit)) {
        console.log("Payment information complete");
        if (this.props.data.creatingProjectFirst) {
          console.log("First Case");
          this.props.saveNewProject(undefined, title, description, startAt, payment, window.publicIds.pop());
        } else if (this.props.data.creatingProjectLast) {
          console.log("Second Case");
          Object.assign(newProject, {image: window.publicIds.pop(), payment: payment});
          console.log(text, publicIds, newProject, payment);
          this.props.saveDayDetail(1, undefined, 1, text, publicIds, newProject, payment);
        } else if (this.props.data.existingProjectChosen) {
          if (this.props.data.selectedProject) {
            const selectedProject =this.props.data.selectedProject;
            var projectId = selectedProject.projectId;
          }
          console.log("Third case");
          this.props.saveExistingProject(projectId, startAt, payment)
        }
      } else {
        alert("Check Again: There is invalid inputs");
      }

    };

    /* Define action bar */
    let actionBar;

    if (this.props.data.creatingProjectFirst) {
      actionBar = (
        <div>
          <button onClick={() => this.props.goto("/create/date")}>Back</button>
          <button onClick={validator}>Save</button>
        </div>
      );
    } else if (this.props.data.creatingProjectLast) {
      actionBar = (
        <div>
          <button onClick={() => this.props.goto("/create")}>Back</button>
          <button onClick={validator}>
          Save</button>
        </div>
      );
    } else if (this.props.data.existingProjectChosen) {


      actionBar = (
        <div>
          <button onClick={() => this.props.goto("/create/date")}>Back</button>
          <button onClick={validator}>
          Save</button>
        </div>
      );
    }

    return (
      <div>
        <h1>Payment</h1>
        <label>Card Number </label>
        <input type="text" inputMode="numeric" size="35" maxLength="16" placeholder="Type your card number without dash" onChange={this.props.handleChange.bind(null, "cardNumber")}/> <br />
        <label>Expiration Date </label>
        <input type="text" inputMode="numeric" size="8" maxLength="6" placeholder="YYYYMM" onChange={this.props.handleChange.bind(null, "expiry")} /><br />
        <label>Birth Date </label>
        <input type="text" inputMode="numeric" size="6" maxLength="6" placeholder="921029" onChange={this.props.handleChange.bind(null, "birth")} /><br />
        <label>Password First Two Digit </label>
        <input type="text" inputMode="numeric" maxLength="2" size="2" placeholder="XX" onChange={this.props.handleChange.bind(null, "pwd2digit")}/>XX<br />
        {actionBar}
      </div>
    );
  }
}

export default Payment;