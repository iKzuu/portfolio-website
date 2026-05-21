"use client";

import { useState } from "react";

const useContactForm = () => {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [
    notification,
    setNotification,
  ] = useState({
    show: false,
    message: "",
    type: "",
  });

  const showNotification = (
    message,
    type,
  ) => {
    setNotification({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setNotification({
        show: false,
        message: "",
        type: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const validateForm = () => {
    const {
      name,
      email,
      message,
    } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      showNotification(
        "All fields are required!",
        "error",
      );

      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      showNotification(
        "Invalid email format!",
        "error",
      );

      return false;
    }

    return true;
  };

  const handleSubmit = async (
    e,
  ) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const response =
        await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            formData,
          ),
        });

      if (response.ok) {
        showNotification(
          "Email sent successfully!",
          "success",
        );
        resetForm();
      } else {
        showNotification(
          "Failed to send email!",
          "error",
        );
      }
    } catch (error) {
      console.log(error);
      showNotification(
        "Something went wrong!",
        "error",
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    notification,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
