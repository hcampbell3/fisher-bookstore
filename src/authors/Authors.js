import React, { Component } from "react";
import "./Authors.css";
import { AuthorDisplay } from "./AuthorDisplay";


export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1, 
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id:2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                }
            ]
        };
    }
    
    render() {
        return (
            <div className="Authors">
                <div className="lander">
                    <AuthorDisplay authors={this.state.authors} />
                </div>
            </div>
        );
    }    
    }
/* export default function Authors() {
    return (
        <div className="Authors">
            <div className="lander">
                <h1>Authors</h1>
                <p>Welcome to Fisher Bookstore.</p>
            </div>
        </div>
    );
} */
