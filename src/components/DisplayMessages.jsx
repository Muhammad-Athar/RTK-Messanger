/* eslint-disable react/prop-types */

import moment from "moment/moment";

function DisplayMessages({ text, updatedAt }) {
    return (
      <div className="bg-slate-300 my-3 px-3 py-1 flex flex-col space-y-1 w-fit rounded-lg">
            <span>{text}</span>
            <span className="text-xs font-thin flex justify-end">{moment(updatedAt).format("h:mm")}</span>
        </div>
    );
}

export default DisplayMessages;
