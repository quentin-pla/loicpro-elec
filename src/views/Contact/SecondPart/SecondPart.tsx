import "./SecondPart.scss";
import {ClockRegular} from "@fluentui/react-icons";
import React, {useCallback, useEffect, useState} from "react";
import {Button} from "../../../components/Button/Button";
import emailjs from "@emailjs/browser";

type FormData = {
    name: string,
    phone: string,
    email: string,
    notes: string,
}

export const SecondPart = () => {
    const [formData, setFormData] = useState<FormData>({name: "", email: "", notes: "", phone: ""});
    const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);

    useEffect(() => {
        emailjs.init({
            publicKey: "QyLRfE9bPyBiTjslu",
            limitRate: {
                throttle: 5000
            }
        });
    }, []);

    const handleUpdateFormField = useCallback((field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value || "";
        setFormData(prev => ({...prev, [field]: value}));
    }, []);

    const handleToggleCheckbox = useCallback(() => {
        setCheckboxChecked(prev => !prev);
    }, []);

    const handleSendForm = async () => {
        await emailjs.send("service_h1ov7fb", "request", {
            request_name: formData.name,
            request_phone: formData.phone,
            request_mail: formData.email,
            request_notes: formData.notes,
        }).then(
            (response) => {
                alert("Votre message a bien été envoyé !");
                setFormData({name: "", email: "", notes: "", phone: ""});
            },
            (error) => {
                alert("Votre message n'a pas pu être envoyé, veuillez réessayer plus tard.");
            },
        );
    }

    const isNameValid = formData.name.length > 3;
    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhoneNumber(formData.phone);
    const isNotesValid = formData.notes.length > 10;
    const isFormValid = checkboxChecked && isNameValid && isEmailValid && isPhoneValid && isNotesValid;

    const phoneNumber = ["06", "51", "54", "40", "71"].join(" ");

    return (
        <div className={"contact-view-second-part"}>
            <div className={"contact-view-second-part-content"}>
                <div className={"contact-view-second-part-left-content"}>
                    <p>
                        LOICPRO ELEC est à votre disposition pour vous conseiller et étudier vos projets.
                    </p>
                    <h4>{phoneNumber}</h4>
                    <div className={"flex-center"} style={{gap: "8px"}}>
                        <h5>Heures d'ouverture</h5>
                        <ClockRegular fontSize={30}/>
                    </div>
                    <h5 className={"primary-color"}>Du lundi au Dimanche De 8h à 20h</h5>
                </div>
                <div className={"contact-view-second-part-form-content"}>
                    <h2>Faisons connaissance</h2>
                    <input
                        className={(!formData.name.length || isNameValid) ? "" : "field-error"}
                        placeholder={"Nom et prénom"}
                        value={formData.name}
                        onChange={handleUpdateFormField("name")}
                    />
                    <input
                        className={(!formData.phone.length || isPhoneValid) ? "" : "field-error"}
                        placeholder={"Téléphone"}
                        inputMode={"tel"}
                        value={formData.phone}
                        onChange={handleUpdateFormField("phone")}
                    />
                    <input
                        className={(!formData.email.length || isEmailValid) ? "" : "field-error"}
                        placeholder={"Adresse mail"}
                        inputMode={"email"}
                        value={formData.email}
                        onChange={handleUpdateFormField("email")}
                    />
                    <textarea
                        className={(!formData.notes.length || isNotesValid) ? "" : "field-error"}
                        placeholder={"Notes"}
                        value={formData.notes}
                        onChange={handleUpdateFormField("notes")}
                    />
                    <div className={"contact-view-second-part-form-content-checkbox-container"}>
                        <input type="checkbox" title={"Test"} onClick={handleToggleCheckbox}/>
                        <p>
                            J'ai lu et j'accepte les mentions légales, notamment la mention relative à la protection des
                            données personnelles.
                        </p>
                    </div>
                    <div className={"contact-view-second-part-form-content-button-container"}>
                        <Button title={"Envoyer"} primary disabled={!isFormValid} onClick={handleSendForm}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

///////////////////////////////////////////////////// PURE METHODS /////////////////////////////////////////////////////

const validateEmail = (email: string): boolean => {
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex: RegExp = /^(?:(?:\+|00)33|0)[1-9](?:[ .-]?[0-9]{2}){4}$/;
    return phoneRegex.test(phoneNumber);
};