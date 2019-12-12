import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

const StyledSubmitButton = styled.button`
    padding: 10px;
    border-radius: 10px;
    background-color: grey;
    color: white;
    font-size: 2rem;
    width: 100%;
    border: none;
    outline: 0;
`;

const SubmitButton = (props) => <StyledSubmitButton {...props}>Submit</StyledSubmitButton>

const StyledTitle = styled.p`
    font-size: 3.6rem;
`;

const FormTitle = (props) => <StyledTitle>{props.title}</StyledTitle>

const StyledInput = styled.input`
    font-size: 2.2rem;
    padding: 5px;
    outline: 0;
    border: 1px solid black;
    border-radius: 5px;
`;

const Input = (props) => <StyledInput {...props} />

const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = (props) => <StyledForm {...props} />

const LoginForm = () => {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            history.push('/board');
        }
    });

    return (
        <Fragment>
            <StyledFormContainer>
                <FormTitle title="Please sign in" />
                <Form onSubmit={formik.handleSubmit}>
                    <Input
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <SubmitButton type="submit">Submit</SubmitButton>
                </Form>
            </StyledFormContainer>
        </Fragment>
    )
}

export default LoginForm;