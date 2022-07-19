import React, { createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import English from "./en/en-Us.json";
import Arabic from "./ar/ar-AE.json"

export const Context = createContext();

export const Wrapper = (props) => {
    const [locale, setLocale] = useState("en");
    const [messages, setMessages] = useState(English);
    const changeLanguage = (e) => {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "en") {
            setMessages(English);
        } else {
            setMessages(Arabic);
        }
    };
    return (
        <Context.Provider value={{ locale, changeLanguage }}>
            <IntlProvider locale={locale} messages={messages}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
};

