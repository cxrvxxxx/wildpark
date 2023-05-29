import React from 'react';

import '../styles/Signup.css';

const InvalidUsernameBanner = () => {
    return (
        <div className="alert alert-danger" role="alert">
            Username already taken
        </div>
    );
};

const PasswordMismatchBanner = () => {
    return (
        <div classNameName="alert alert-danger" role="alert">
            Passwords do not match
        </div>
    );
};

const Signup = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card mt-3">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input type="text" className="form-control" id="username" name="username" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstname">Firstname:</label>
                                <input type="text" className="form-control" id="firstname" name="firstname" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Lastname:</label>
                                <input type="text" className="form-control" id="lastname" name="lastname" required />
                            </div>
                            <div className="form-group row d-flex justify-content-center">
                                <label htmlFor="birthdate">Birthdate:</label>
                                <select type="number" name="month" className="form-select col-md-3 mx-1" id="birthdateMonth"
                                    required>
                                    <option disabled selected value="">Month</option>
                                </select>
                                <select type="number" name="day" className="form-select col-md-3 mx-1" id="birthdateDay"
                                    required>
                                    <option disabled selected value="">Day</option>
                                </select>
                                <select type="number" name="year" className="form-select col-md-4 mx-1" id="birthdateYear"
                                    required>
                                    <option disabled selected value="">Year</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender:</label>
                                <input type="text" className="form-control" id="gender" name="gender" required />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="password">Password:</label>
                                <input type="password" className="form-control" id="password" name="password" required />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
                            </div>
                            <button type="submit" className="btn btn-success mt-3">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;