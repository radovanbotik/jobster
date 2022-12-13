import React from "react";
import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, pending } = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setValues(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      !values.email ||
      !values.password ||
      (!values.isMember && !values.name)
    ) {
      toast.warning("Please fill out all fields.");
      return;
    }
    if (values.isMember) {
      dispatch(loginUser({ email: values.email, password: values.password }));
      return;
    }
    dispatch(
      registerUser({
        email: values.email,
        password: values.password,
        name: values.name,
      })
    );
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }, [user]);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={pending}>
          {pending ? "making it happen..." : "submit"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
