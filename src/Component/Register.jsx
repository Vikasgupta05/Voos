import React from "react";
import { useState } from "react";

export const Register = () => {

    const [name , setname] = useState() 
    const [email , setEmail] = useState()
    const [CompneyName , setCompneyName] = useState() 
    const [Title , setTitle] = useState() 

    const handleSubmit = (e) => {
        e.preventDefault()


        var data = [{
            name : name,
            email : email,
            CompneyName : CompneyName,
            Title : Title
        }]
        localStorage.setItem("storeData", JSON.stringify(data));   
        setname("")
        setEmail("")
        setCompneyName("")
        setTitle("")
        alert("Register successfully !!")
    }

   
    

    return (
        <>
            <div className="Container">
                <div className="Auth-form-container">
                        <form className="Auth-form"  onSubmit={handleSubmit}>
                            <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Sign up</h3>
                                <div className="form-group mt-3">
                                    <label>Name*</label> <br />
                                    <input
                                        style={{width : "100%" , height : "30px"}}
                                        type="string"
                                        className="form-control mt-1"
                                        placeholder="Jane Doe"
                                        onChange={(e) => {
                                            setname(e.target.value)
                                        }}
                                        value={name}
                                        
                                        
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Email*</label> <br />

                                    <input
                                        style={{width : "100%" , height : "30px"}}
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder=" Doe"
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                        value={email}
                                    />                                   
                                </div>
                                <div className="form-group mt-3">
                                    <label>Companey Name* </label> <br />
                                    <input
                                        style={{width : "100%" , height : "30px"}}
                                        type="string"
                                        className="form-control mt-1"
                                        placeholder="Email Address"
                                        onChange={(e) => {
                                            setCompneyName(e.target.value)
                                        }}
                                        value={CompneyName}
                                    />               
                                </div>
                                <div className="form-group mt-3">
                                    <label>Title*</label> <br />
                                    <input
                                        style={{width : "100%" , height : "30px"}}
                                        type="string"
                                        className="form-control mt-1"
                                        placeholder="Password"
                                        onChange={(e) => {
                                        setTitle(e.target.value)
                                        }}
                                        value={Title}
                                    />                       
                                </div> 


                                <br />
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary" style={{ 
                                        textAlign : "center" ,
                                        width : "100%" ,
                                        height:"30px" ,
                                        backgroundColor : "#2d66f5" ,
                                        border : "none" , 
                                        color : "white",
                                        borderRadius:"10px"
                                    }}>
                                     Book Demo
                                    </button>
                                </div>
                            </div>
                        </form>
                </div>
            </div>
        </>
    )
}