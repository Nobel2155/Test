import React from "react"
function TableHead() {
  return (
    <div>
      <div className="max-w-[1000px] flex gap-x-7 py-2 text-base bg-[#00703E] text-white rounded-md">
        <div className="pl-3">Serial</div>
        <div className="">Source</div>
        <div className="">Payment type</div>
        <div className="">Ticket </div>
        <div className="">Reference ID</div>
        <div className="">PNR Code</div>
        <div className="">Debit</div>
        <div className="">Credit</div>
        <div className="">Status</div>
        <div className="">Created</div>
        <div className="">Details</div>
      </div>
    </div>
  );
}
export default TableHead;
