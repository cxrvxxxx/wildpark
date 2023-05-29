import React, { useState } from 'react';

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
    const [selectBirthdateMonth, setSelectBirthDateMonth] = useState(0);
    const [selectBirthdateDay, setSelectBirthdateDay] = useState(0);
    const [selectBirthdateYear, setSelectBirthdateYear] = useState(0);
    const [selectGender, setSelectGender] = useState("");

    const handleBirthdateMonthChange = (e) => {
        setSelectBirthDateMonth(e.target.value);
    };

    const handleBirthdateDayChange = (e) => {
        setSelectBirthdateDay(e.target.value);
    };

    const handleBirthdateYearChange = (e) => {
        setSelectBirthdateYear(e.target.value);
    };

    const handleGenderChange = (e) => {
        setSelectGender(e.target.value);
    }

    const currentYear = new Date().getFullYear();

    const getDaysInMonth = (month, year) => {
        const date = new Date(year, month, 0);
        return date.getDate();
    };

    const renderDaysOptions = () => {
        const options = [];

        if (selectBirthdateYear === 0 || selectBirthdateMonth === 0) return options;

        const daysInMonth = getDaysInMonth(selectBirthdateMonth, selectBirthdateYear);

        for (let day = 1; day <= daysInMonth; day++) {
            options.push(
                <option key={day} value={day}>
                    {day}
                </option>
            );
        }

        return options;
    }

    const renderYearsOptions = () => {
        const options = [];

        for (let year = currentYear; year >= currentYear - 120; year--) {
            options.push(
                <option key={year} value={year}>
                    {year}
                </option>
            );
        }

        return options;
    }

    return (
        <div className="signup container w-50 justify-content-center">
            <form>
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" name="username" required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" className="form-control" id="firstname" name="firstname" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text" className="form-control" id="lastname" name="lastname" required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="form-group col-md-6 container">
                            <div className="row">
                                <label htmlFor="birthdate">Birthdate</label>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <select type="number" name="month" className="form-select" id="birthdateMonth"
                                        value={selectBirthdateMonth} onChange={handleBirthdateMonthChange} required>
                                        <option disabled value="0">Month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select type="number" name="day" className="form-select" id="birthdateDay"
                                        value={selectBirthdateDay} onChange={handleBirthdateDayChange} required>
                                        <option disabled value="0">Day</option>
                                        {renderDaysOptions()}
                                    </select>
                                </div>
                                <div className="col-md-5">
                                    <select type="number" name="year" className="form-select" id="birthdateYear"
                                        value={selectBirthdateYear} onChange={handleBirthdateYearChange} required>
                                        <option disabled value="0">Year</option>
                                        {renderYearsOptions()}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="gender">Gender</label>
                            <select type="text" name="gender" className="form-select" id="gender"
                                value={selectGender} onChange={handleGenderChange} required>
                                <option disabled value="">Select gender...</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </div>
            </form >
        </div >
    );
}

export default Signup;