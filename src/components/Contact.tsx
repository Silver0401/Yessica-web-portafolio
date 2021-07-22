import React, { useRef, useState } from "react";
import { Button } from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);
  const { t } = useTranslation();

  const NameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const PhoneRef = useRef<HTMLInputElement>(null);
  const MessageRef = useRef<HTMLTextAreaElement>(null);
  const FormRef = useRef<HTMLFormElement>(null);

  const SendData = () => {
    setButtonStatus(true);

    emailjs
      .send(
        "service_h86ldsp",
        "template_e3dgd7j",
        {
          subject: "Contácto desde Portafolio Web",
          name: NameRef.current?.value,
          message: MessageRef.current?.value,
          to_email: "ycontre@gmail.com",
          from_email: `Email: ${EmailRef.current?.value} Tel: ${PhoneRef.current?.value}`,
        },
        "user_TpS9YP6Fwr4okNaN6XOOH"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setButtonStatus(false);
          toast.success("Mensaje enviado!");
          FormRef.current?.reset();
        },
        (err) => {
          console.log("FAILED...", err);
          setButtonStatus(false);
          toast.error("Ocurrio un error al enviar el mensaje");
        }
      );
  };

  const CustomSpinner: React.FC = () => {
    return (
      <div className="CustomSpinner">
        <div className="ball b1"></div>
        <div className="ball b2"></div>
        <div className="ball b3"></div>
      </div>
    );
  };

  return (
    <section className="ContactInfo">
      <form
        ref={FormRef}
        onSubmit={(e) => {
          e.preventDefault();
          SendData();
        }}
      >
        <div>
          <input ref={NameRef} required type="text" className="name" />
          <label>{t("Contact.Name")}</label>
        </div>
        <div>
          <input ref={EmailRef} required type="email" className="email" />
          <label>{t("Contact.Email")}</label>
        </div>
        <div>
          <input ref={PhoneRef} required type="tel" className="phone" />
          <label>{t("Contact.Phone")}</label>
        </div>
        <div>
          <textarea ref={MessageRef} required className="message" />
          <label>{t("Contact.Message")}</label>
        </div>
        <div>
          <Button
            className="sendButton"
            spinner={<CustomSpinner />}
            isLoading={buttonStatus}
            type="submit"
          >
            <p>{t("Contact.Send")} 📬</p>
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
