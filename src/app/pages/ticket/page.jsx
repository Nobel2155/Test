"use client"
import React from 'react'
import { useSelector } from 'react-redux';

const ticket = () => {
    const passengerData = useSelector((state) => state.auth.passengerData);
  return (
    <div>
        <div className="w-[800px] mx-auto my-24">
            <div className="w-[750px] mx-auto mt-5">
                <div className="flex justify-between">
                    <div className="w-72">
                        {/* <!-- TICKET INFORMATION START --> */}
                        <h2 className="text-xl border-b border-slate-950 mb-2">E-TICKET INFORMATION</h2>
                        <div className="flex justify-between mt-2 mb-2">
                            <div className="text-xs text-neutral-500">
                                <p>PEFFERENCE</p>
                                <p>PNR</p>
                                <p>AIRLINE PNR</p>
                                <p>STATUS</p>
                                <p>ISSUE DATE</p>
                            </div>
                            <div className="text-xs text-neutral-500">
                                <p>: TP/278694</p>
                                <p className='font-bold'>: pnr</p>
                                <p>: 51KR6F</p>
                                <p>: TICKETED</p>
                                <p>: 10 june 2024</p>
                            </div>
                        </div>
                        {/* <!-- TICKET INFORMATION END -->

                        <!-- Ticket summary START --> */}
                        <h2 className="text-xl border-b border-slate-950 mb-2">TICKET SUMMARY</h2>
                        <div className="flex justify-between mb-2">
                            <div className="text-xs text-neutral-500">
                                <p>CABIN className</p>
                                <p>ORIGIN</p>
                                <p>DESTINATION</p>
                                <p>TRIP TYPE</p>
                                <p>ADULT</p>
                                <p>CHILD</p>
                                <p>INFANT</p>
                            </div>
                            <div className="text-xs text-neutral-500">
                                <p>: ECONOMY</p>
                                <p>: DAC</p>
                                <p>: DXB</p>
                                <p>: ONE WAY</p>
                                <p>: 2</p>
                                <p>: 0</p>
                                <p>: 0</p>
                            </div>
                        </div>
                        {/* <!-- Ticket summary end -->

                        <!-- HAMS Aviation start --> */}
                        <h2 className="text-xl border-b border-slate-950 mb-2">HAMS Fly Limited</h2>
                        <div className="text-sm text-neutral-600">
                            <p>Corporate Office: House # 12, Road # 12, Sector # 04, Uttara,
                            Dhaka 1230, Bangladesh.</p>
                        </div>
                        {/* <!-- HAMS Aviation end -->

                        <!-- Contact part start --> */}
                        <h2 className="text-xl border-b border-slate-950 my-2">CONTACT</h2>
                        <div className="text-sm text-neutral-600 ">
                            <p className="my-2">PHONE: 01407020590</p>
                            <p className="my-2">EMAIL: <a href="#">info@hamsflly.com</a></p>

                        </div>
                        {/* <!-- Contact part start --> */}
                    </div>


                    <div className="w-96">

                        {/* <!-- passenger information part start --> */}
                        <h2 className="text-xl border-b border-slate-950 text-center">PASSENGER INFORMATION</h2>
                        <div className="flex justify-between pt-2 gap-x-[1px]">
                            <div>
                                <div className="">
                                    <h3>NAME OF PASSENGER</h3>
                                </div>
                                <div className="text-sm text-neutral-500">
                                    <p>{passengerData.givenName} {passengerData.surName}</p>
                                    {/* <p>MRS SHAMIMA BEGUM</p>
                                    <p>MISS JUNAIRA DHONI</p> */}
                                </div>
                            </div>

                            <div>
                                <div className="">
                                    <h3>TICKET NUMBER</h3>
                                </div>
                                <div className="text-sm text-neutral-500">
                                    <p>{passengerData.ticketNumber}</p>
                                    {/* <p>2286801474635</p>
                                    <p>2286801474635</p> */}
                                </div>
                            </div>

                            <div>
                                <div className="">
                                    <h3>PAX TYPE</h3>
                                </div>
                                <div className="text-sm text-neutral-500">
                                    <p>ADULT</p>
                                    {/* <p>ADULT</p>
                                    <p>CHILD</p> */}
                                </div>
                            </div>
                        </div>

                        <h2 className="text-xl border-b border-slate-950 text-center pt-10">TICKET ITINERARY</h2>
                        <div>
                            <div className="flex justify-between pt-2">
                                <div>
                                    <img src="Images/logo.png" alt="" width="60px"/>
                                </div>
                                <div className="mt-2">
                                    <p>FLIGHT NO: UK612</p>
                                </div>
                            </div>

                            <div className="flex justify-between pt-2">
                                <div>
                                    <h2>SXR 15:20</h2>
                                    <div className="text-sm text-neutral-500">
                                        <p>Wed, 17 may 2024</p>
                                        <p>Srinagar Arpt</p>
                                        <p>Terminal:</p>
                                        <p className="ml-8">AIRCRAFT: 320</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img src="Images/line.jpeg" alt="" srcset="" width="70px"/>
                                </div>
                                <div className="text-right">
                                    <h2>17:00 DEL</h2>
                                    <div className="text-sm text-neutral-500">
                                        <p>Wed, 17 may 2024</p>
                                        <p>Delhi Indira Gandhi Intl</p>
                                        <p>Terminal: 3</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        

                        <div className="mt-5">
                            <p className="font-bold">INSTRUCTIONS:</p>
                            <p className="text-sm text-neutral-500">Carriage and other services provided by the carrier are subject to coditions of carriage which are hereby incorporated by reference.</p>

                        </div>
                    
                    </div>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default ticket