import { useEffect, useRef, useState } from "react";
import { useGetMessagesQuery } from "../services/messageService";

import Loader from "../ui/Loader";
import DisplayMessages from "./DisplayMessages";
import MessageSender from "./MessageSender";

function Messages() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [messages, setMessages] = useState([]);

    const ref = useRef(null);

    const { data, isError, isLoading } = useGetMessagesQuery({
        page,
        pageSize,
    });

    const scrollToBottom = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(
        function () {
            if (data?.messages) setMessages([...data.messages].reverse());
        },
        [data?.messages]
    );

    useEffect(
        function () {
            scrollToBottom();
        },
        [messages]
    );

    return (
        <div className={`${isLoading && 'opacity-30 pointer-events-none'}`}>
            <div className="fixed right-[100px] top-[150px]">
                <div className="flex flex-col justify-center items-center space-y-3">
                    <span>Page: {page}</span>
                    <select
                        className="bg-slate-300 px-5 py-2 rounded-lg hover:bg-slate-400 duration-300"
                        name="setSize"
                        value={pageSize}
                        onChange={(e) => setPageSize(e.target.value)}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                    <button
                        className={`${
                            page === 1 && "bg-slate-100 pointer-events-none"
                        } bg-slate-300 px-5 py-2 rounded-lg hover:bg-slate-400 duration-300`}
                        onClick={() =>
                            page === 1
                                ? setPage(1)
                                : setPage((page) => page - 1)
                        }
                    >
                        Previous
                    </button>
                    <button
                        className={`${
                            data?.messages?.length === 0 &&
                            "pointer-events-none bg-slate-100"
                        } ${
                            isLoading && "pointer-events-none bg-slate-100"
                        } bg-slate-300 px-5 py-2 rounded-lg hover:bg-slate-400 duration-300`}
                        onClick={() =>
                            setPage((page) =>
                                data.messages.length === 0 ? page : page + 1
                            )
                        }
                    >
                        Next
                    </button>
                </div>
            </div>

            {isLoading ? (
                <Loader />
            ) : isError ? (
                <p>ERROR fetching data</p>
            ) : data.messages.length === 0 ? (
                <div className="flex space-x-4 items-center">
                    <span>No data found</span>
                    <button
                        onClick={() => {
                            setPage(1);
                        }}
                        className="bg-slate-300 px-4 py-2 rounded-full"
                    >
                        Go to 1st Page
                    </button>
                </div>
            ) : (
                messages.map((message) => (
                    <DisplayMessages
                        key={message._id}
                        text={message.text}
                        createdAt={message.createdAt}
                    />
                ))
            )}

            <MessageSender />
            <span ref={ref} />
        </div>
    );
}

export default Messages;
