import React from "react";
import {render, screen, fireEvent} from "@testing-library/react"
import { AuthStatus } from "../AuthStatus";
import { AuthContext } from "../Context/AuthProvider";

describe ("AuthStatus components", () => {

 it("renders loggedout initially and toggles login status", () => {
     const mockLogin = jest.fn();
     const mockLogout = jest.fn();
     const contextValue = {isLoggedIn: false, login: mockLogin, logout:mockLogout};
     render(
        <AuthContext.Provider value ={contextValue}>
            <AuthStatus/>
        </AuthContext.Provider>
     );
     
     expect (screen.getByText(/Logged Out/i)).toBeInTheDocument();

     fireEvent.click (screen.getByText(/Login/i));
         expect(mockLogin).toHaveBeenCalledTimes(1);

    // Trigger logout
    fireEvent.click(screen.getByText(/Logout/i));
    expect(mockLogout).toHaveBeenCalledTimes(1);

 })

})  