package com.example.RegisterLogin.Dto;

public class LoginDTO {

    private String email;
    private String password;


    public LoginDTO(String email, String password) {
        this.email = email;
        this.password = password;
    } //create getters and setters

    public LoginDTO() {
    }

    public String getEmail() {
    return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }
}


