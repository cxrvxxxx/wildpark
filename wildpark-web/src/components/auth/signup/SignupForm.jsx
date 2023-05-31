import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

import { showHomePage } from "../../../actions/currentPage/actions";

import InvalidInputMessage from '../InvalidInputMessage';

import '../../../styles/SignupForm.css';

const SignupForm = () => {
    const dispatch = useDispatch();

    /* Form data */
    const [firstname, setFirstname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [lastname, setLastname] = useState('');
    const [selectMonth, setSelectMonth] = useState(0);
    const [selectDay, setSelectDay] = useState(0);
    const [selectYear, setSelectYear] = useState(0);
    const [selectGender, setSelectGender] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    /* Input validation */
    const [isValidBirthdate, setIsValidBirthdate] = useState(true);
    const [isValidGender, setIsValidGender] = useState(true);
    const [isValidUsernameLength, setIsValidUsernameLength] = useState(true);
    const [isMatchingPassword, setIsMatchingPassword] = useState(true);
    const [isValidUsername, setIsValidUsername] = useState(true);

    /* Input control */
    const [selectMonthDisabled, setSelectMonthDisabled] = useState(true);
    const [selectDayDisabled, setSelectDayDisabled] = useState(true);

    useEffect(() => {
        setSelectMonthDisabled(selectYear === 0);
        setSelectDayDisabled(selectMonth === 0);
    }, [selectYear, selectMonth, selectDay]);

    const handleFieldChange = (e) => {
        const elementId = e.target.id;
        const value = e.target.value;

        switch (elementId) {
            case 'username': {
                setUsername(value);

                break;
            }
            case 'email': {
                setEmail(value);

                break;
            }
            case 'firstname': {
                setFirstname(value);

                break;
            }
            case 'middlename': {
                setMiddlename(value);

                break;
            }
            case 'lastname': {
                setLastname(value);

                break;
            }
            case 'month': {
                setSelectMonth(value);

                break;
            }
            case 'day': {
                setSelectDay(value);

                break;
            }
            case 'year': {
                setSelectYear(value);

                break;
            }
            case 'gender': {
                setSelectGender(value);

                break;
            }
            case 'password': {
                setPassword(value);

                break;
            }
            case 'confirmPassword': {
                setConfirmPassword(value);

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

        if (selectYear === 0 || selectMonth === 0) return options;

        const daysInMonth = new Date(selectYear, selectMonth, 0).getDate();

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

    const hasSpecialCharacters = (str) => {
        const regex = /[!@#$%^&*(),.?":{}|<> ]/;
        return regex.test(str);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsValidBirthdate(selectYear !== 0 && selectMonth !== 0 && selectDay !== 0);
        setIsValidGender(selectGender !== '');

        setIsValidUsername(!hasSpecialCharacters(username));
        setIsValidUsernameLength(username.length >= 5);

        if (password.length > 0 || confirmPassword.length > 0) {
            setIsMatchingPassword(password === confirmPassword);
        }
    };

    const handleBackBtnClick = (e) => {
        e.preventDefault();

        dispatch(showHomePage());
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="d-flex align-items-center">
                        <div className="flex-item">
                            <a href="" onClick={handleBackBtnClick}>
                                <ArrowLeftCircleIcon className="flex-item back-btn" height="24px" width="24px" />
                            </a>
                        </div>
                        <div className="flex-item">
                            <h4 className="px-2 mb-0"><b>Create an account</b></h4>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="form-group col-md-4">
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" className="form-control" id="firstname" name="firstname" value={firstname} onChange={handleFieldChange} required />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="middlename">Middlename</label>
                        <input type="text" className="form-control" id="middlename" name="middlename" value={middlename} onChange={handleFieldChange} required />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" className="form-control" id="lastname" name="lastname" value={lastname} onChange={handleFieldChange} required />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="form-group col-md-6 container">
                        <div className="row">
                            <label htmlFor="birthdate">Birthdate</label>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <select type="number" name="month" className="form-select" id="month"
                                    value={selectMonth} onChange={handleFieldChange} disabled={selectMonthDisabled}>
                                    <option disabled value="0">Month</option>
                                    {renderMonths()}
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select type="number" name="day" className="form-select" id="day"
                                    value={selectDay} onChange={handleFieldChange} disabled={selectDayDisabled}>
                                    <option disabled value="0">Day</option>
                                    {renderDaysOptions()}
                                </select>
                            </div>
                            <div className="col-md-5">
                                <select type="number" name="year" className="form-select" id="year"
                                    value={selectYear} onChange={handleFieldChange}>
                                    <option disabled value="0">Year</option>
                                    {renderYearsOptions()}
                                </select>
                            </div>
                        </div>
                        {!isValidBirthdate && <InvalidInputMessage msg={'This field is required.'} />}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="gender">Sex</label>
                        <select type="text" name="gender" className="form-select" id="gender"
                            value={selectGender} onChange={handleFieldChange}>
                            <option disabled value="">Select gender...</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                        {!isValidGender && <InvalidInputMessage msg={'This field is required.'} />}
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleFieldChange} required />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className={`form-control ${!isValidUsername ? 'border-danger' : ''}`} id="username" name="username" value={username} onChange={handleFieldChange} required />
                        {!isValidUsername && <InvalidInputMessage msg={'Usename must not contain special characters or spaces.'} />}
                        {!isValidUsernameLength && <InvalidInputMessage msg={'Usename must be at least 5 characters long.'} />}
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className={`form-control ${!isMatchingPassword ? 'border-danger' : ''}`} id="password" name="password" value={password} onChange={handleFieldChange} required />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className={`form-control ${!isMatchingPassword ? 'border-danger' : ''}`} id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleFieldChange} />
                        {!isMatchingPassword && <InvalidInputMessage msg={'Passwords do not match'} />}
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