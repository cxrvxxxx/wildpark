import React, { useState } from "react";

import InvalidUsernameBanner from '../InvalidUserNameBanner';
import PasswordMismatchBanner from '../PasswordMismatchBanner';

import '../../../styles/SignupForm.css';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [selectBirthdateMonth, setSelectBirthDateMonth] = useState(0);
    const [selectBirthdateDay, setSelectBirthdateDay] = useState(0);
    const [selectBirthdateYear, setSelectBirthdateYear] = useState(0);
    const [selectGender, setSelectGender] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isMatchingPassword, setIsMatchingPassword] = useState(true);
    const [isValidUsername, setIsValidUsername] = useState(true);

    const handleFieldChange = (e) => {
        switch (e.target.id) {
            case 'username': {
                setUsername(e.target.value);

                break;
            }
            case 'firstname': {
                setFirstname(e.target.value);

                break;
            }
            case 'lastname': {
                setLastname(e.target.value);

                break;
            }
            case 'birthdateMonth': {
                setSelectBirthDateMonth(e.target.value);

                break;
            }
            case 'birthdateDay': {
                setSelectBirthdateDay(e.target.value);

                break;
            }
            case 'birthdateYear': {
                setSelectBirthdateYear(e.target.value);

                break;
            }
            case 'gender': {
                setSelectGender(e.target.value);

                break;
            }
            case 'password': {
                setPassword(e.target.value);

                break;
            }
            case 'confirmPassword': {
                setConfirmPassword(e.target.value);

                break;
            }
        }
    };

    const renderMonths = () => {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const options = [];

        for (let month = 0; month < months.length; month++) {
            options.push(
                <option key={month} value={month + 1}>
                    {months[month]}
                </option>
            );
        }

        return options;
    };

    const renderDaysOptions = () => {
        const options = [];

        if (selectBirthdateYear === 0 || selectBirthdateMonth === 0) return options;

        const daysInMonth = new Date(selectBirthdateYear, selectBirthdateMonth, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            options.push(
                <option key={day} value={day}>
                    {day}
                </option>
            );
        }

        return options;
    };

    const renderYearsOptions = () => {
        const options = [];
        const currentYear = new Date().getFullYear();

        for (let year = currentYear; year >= currentYear - 100 - (currentYear % 10); year--) {
            options.push(
                <option key={year} value={year}>
                    {year}
                </option>
            );
        }

        return options;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsValidUsername(username.length !== 0);

        if (password.length > 0 || confirmPassword.length > 0) {
            setIsMatchingPassword(password === confirmPassword);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container-fluid">
                <div className="row mt-3">
                    <h4 className="mb-3"><b>Create an account</b></h4>
                </div>
                {!isValidUsername && <InvalidUsernameBanner />}
                {!isMatchingPassword && <PasswordMismatchBanner />}
                <div className="row mt-3">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" name="username" value={username} onChange={handleFieldChange} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" className="form-control" id="firstname" name="firstname" value={firstname} onChange={handleFieldChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" className="form-control" id="lastname" name="lastname" value={lastname} onChange={handleFieldChange} />
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
                                    value={selectBirthdateMonth} onChange={handleFieldChange}>
                                    <option disabled value="0">Month</option>
                                    {renderMonths()}
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select type="number" name="day" className="form-select" id="birthdateDay"
                                    value={selectBirthdateDay} onChange={handleFieldChange}>
                                    <option disabled value="0">Day</option>
                                    {renderDaysOptions()}
                                </select>
                            </div>
                            <div className="col-md-5">
                                <select type="number" name="year" className="form-select" id="birthdateYear"
                                    value={selectBirthdateYear} onChange={handleFieldChange}>
                                    <option disabled value="0">Year</option>
                                    {renderYearsOptions()}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="gender">Gender</label>
                        <select type="text" name="gender" className="form-select" id="gender"
                            value={selectGender} onChange={handleFieldChange}>
                            <option disabled value="">Select gender...</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleFieldChange} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleFieldChange} />
                    </div>
                </div>
                <div className="row mt-5">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </div>
        </form >
    );
}

export default SignupForm;