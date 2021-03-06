import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    country: "",
    gender: "",
    file: "",
    bio: "",
    // skills: ""
    skills: {
      html: false,
      css: false,
      javascript: false
    }
  };

  // Handel change is for changing the current state

  handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState({
        skills: { ...this.state.skills, [name]: checked }
      });
    } else {
      this.setState({ [name]: value });
    }
  };

  // handleChange = e => {
  //   const { name, value, type, checked } = e.target;
  //   if (type === "checkBox") {
  //     this.setState({ skills: { ...this.state.skills, [name]: value } });
  //   } else {
  //     this.setState({ [name]: value });
  //   }
  //   console.log(name, value);
  //   this.setState({ [name]: value });
  // };

  handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, country, gender } = this.state;

    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <h1>React Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name: </label>
            <input
              type="Text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              placeholder="First Name"
            />
          </div>
          <br />
          <div>
            <label>Last Name: </label>
            <input
              type="Text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
              placeholder="Last Name"
            />
          </div>
          <br />
          <div>
            <label>Country: </label>
            <select
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
            >
              <option>--Select Countries--</option>
              <option>Finland</option>
              <option>Sweden</option>
              <option>Norway</option>
            </select>
          </div>
          <br />
          <div>
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleChange}
              checked={this.state.gender === "Male"}
            />{" "}
            <br />
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleChange}
              checked={this.state.gender === "Female"}
            />{" "}
            <br />
            <label>Other</label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={this.handleChange}
              checked={this.state.gender === "Other"}
            />
          </div>
          <br />
          <div>
            <p>Select your skills</p>
            <input type="checkbox" name="html" onChange={this.handleChange} />
            <label>HTML</label> <br />
            <input type="checkbox" name="css" onChange={this.handleChange} />
            <label>CSS</label> <br />
            <input
              type="checkbox"
              name="javascript"
              onChange={this.handleChange}
            />
            <label>JavaScript</label> <br />
          </div>

          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
