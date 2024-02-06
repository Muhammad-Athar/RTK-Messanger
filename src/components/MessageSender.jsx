import { useState } from "react";
import { useSendMessageMutation } from "../services/messageService";

function MessageSender() {
    const [message, setMessage] = useState("");

    const [func] = useSendMessageMutation();

    function handelSendMessage() {
        console.log("message sent");
        const payload = {
            senderId: "658ee4bcae3b8e6e08e086f9",
            receiverId: "658ee4bcae3b8e6e08e086fa",
            message,
        };
        func(payload);
        setMessage("");
    }

    return (
        <div className="bg-slate-400 fixed bottom-[50px] rounded-full right-[50px] px-5 py-2">
            <input
                type="text"
                autoFocus
                className="outline-none rounded-full text-xs px-3 py-2 w-[300px]"
                name="message"
                id=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handelSendMessage()}
            />
        </div>
    );
}

export default MessageSender;
