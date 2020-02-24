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
                },
                {
                    id: 3, 
                    title: "Haylee Learns how to Spell",
                    author: "Haylee Cmapbell",
                    isbn: "978-0321125217"
                },
                {
                    id: 4, 
                    title: "Amber Makes Scallops",
                    author: "Amber Rudy",
                    isbn: "978-0321125217"
                },
                {
                    id: 5, 
                    title: "David does Karate: a Failure",
                    author: "Dr. Do-Little",
                    isbn: "978-0321125217"
                },
                {
                    id: 6, 
                    title: "Someone wants an Apology",
                    author: "No Huay",
                    isbn: "978-0321125217"
                },
                {
                    id: 7, 
                    title: "The Life of Chad",
                    author: "Pi the Tiger",
                    isbn: "978-0321125217"
                },
                {
                    id: 8, 
                    title: "Marvel Returns pt.3000",
                    author: "Steve Rogers",
                    isbn: "978-0321125217"
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
