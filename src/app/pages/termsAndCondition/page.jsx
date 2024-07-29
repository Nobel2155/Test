"use client";
import React, { useState } from "react";
import ParagraphItem from "../../../components/termsAndCondition/Paragraph";
import Title from "../../../components/termsAndCondition/Title";

const TermsConditions = () => {
    const [activeSection, setActiveSection] = useState("SafeShopping");
    const [language, setLanguage] = useState("en");

    const sections = {
        en: [
            {
                id: "welcome",
                content: (
                    <>
                        Welcome to hamsfly.com .This Site is provided by us
                        solely to assist customers in gathering travel
                        information, determining the availability of
                        travel-related goods and services, making legitimate
                        reservations or otherwise transacting business with
                        travel suppliers, and for no other purposes. Use of the
                        Site is governed by the following Terms & Conditions. By
                        using the Site, whether to review information or to book
                        travel reservations (through this Site or telephone or
                        email with our call center), or for any other purpose,
                        you agree to these Terms & Conditions and agree they
                        control any travel reservations made with us. If you do
                        not agree with any part of these Terms & Conditions, you
                        must not use the Site or book travel reservations with
                        us. We reserve the right to amend these Terms &
                        Conditions at any time without prior notice. All amended
                        terms automatically take effect when these Terms &
                        Conditions are updated. Your continued use of the Site
                        following the posting of changes to the Terms &
                        Conditions will mean you accept those changes. Please
                        return to this page periodically to review any changes.
                        hamsfly.com operates with its own brand name
                        &apos;&apos;HAMS&apos;&apos; having its motto
                        &apos;&apos;all about your journey&apos;&apos;. <br />{" "}
                        <br />
                        Any and all statements made in these Terms & Conditions
                        related to HAMS are also made on behalf of our
                        affiliates, subsidiaries and parent companies, including
                        all disclaimers.
                    </>
                ),
            },
            {
                id: "SafeShopping",
                title: "SAFE SHOPPING GUARANTEE",
                content: (
                    <>
                        HAMS values your trust. We seek to use reasonable
                        organizational, technical, and administrative measures
                        to protect your personal information within our
                        organization. Unfortunately, no data transmission or
                        storage system can be guaranteed to be 100% secure. If
                        you have reason to believe that your interaction with us
                        is no longer secure (for example, if you feel that the
                        security of your account has been compromised), please
                        immediately notify customer service at{" "}
                        <span className='text-green-600'>
                            {" "}
                            +880 2-48957730{" "}
                        </span>{" "}
                        or{" "}
                        <span className='text-green-600'>
                            info@hamsfly.com
                        </span>{" "}
                        so that we have an opportunity to try to address your
                        concerns.
                    </>
                ),
            },
            {
                id: "importantNotice",
                title: "IMPORTANT NOTICE",
                content: (
                    <>
                        BY ACCEPTING THESE TERMS, YOU ARE AGREEING TO THE
                        MANDATORY ARBITRATION AND CLASS ACTION WAIVER CONTAINED
                        BELOW.
                    </>
                ),
            },
            {
                id: "GeneralDisclaimer",
                title: "General-Disclaimer",
                content: (
                    <>
                        HAMS does not act as principal but makes arrangements
                        with third-party vendors, such as, but not limited to
                        airlines, hotels, car rental agencies, tour operators
                        and consolidators, (each a &apos;&apos;Travel
                        Supplier&apos;&apos;) for travel-related services which
                        include, without limitation, air transportation,
                        lodging, and car rental (each a &apos;&apos;Service
                        Element&apos;&apos;). <br /> <br />
                        By using this Site, you acknowledge that the rates
                        offered by HAMS and affiliate companies are a result of
                        negotiation between HAMS and the Travel Suppliers and
                        include certain fees retained by them for their
                        services, taxes and other charges. When booking with any
                        Travel Supplier through this Site, you authorize HAMS
                        and affiliate companies to book reservations or enter a
                        contract on your behalf with Travel Suppliers for the
                        total price displayed, including such fees and any
                        applicable taxes or charges related to the Travel
                        Supplier&apos;s or HAMS&apos;s services. <br /> <br />
                        HAMS shall not be liable for errors or inaccuracies on
                        the Site, or the failure of Travel Suppliers from whom
                        you obtain services through this Site, including but not
                        limited to airlines, hotels, cruise lines, railroads,
                        car rental agencies, tour operators and consolidators,
                        vacation packages, activities suppliers, traveler assist
                        service providers and insurance providers. HAMS in
                        providing travel management services, does not endorse,
                        guarantee or insure the products or services, which are
                        provided by an external supplier, the financial position
                        of such suppliers or the reimbursement to you from any
                        loss as a result of the financial condition of such
                        supplier. In the event that a supplier defaults prior to
                        providing the service to you were a payment has been
                        made, your sole recourse for a refund shall be the
                        defaulting supplier, unless such loss was caused solely
                        by HAMS. In those situations, in which a supplier
                        defaults prior to providing services you may pursue any
                        recourse against the supplier for a refund, as permitted
                        by law or statute. <br /> <br />
                        Except as expressly stated herein, HAMS assumes no
                        responsibility for actions relating to travel services
                        beyond the control of HAMS or its employees. HAMS is not
                        responsible or liable for any act, error, omission,
                        injury, loss, accident, damage, delay, nonperformance,
                        irregularity, or any consequence thereof, which may be
                        occasioned through neglect, or default or any other act
                        or inaction of any Travel Supplier. HAMS shall not be
                        liable for any fluctuation in price or change in
                        schedule or equipment or accommodations for any travel
                        service, which occurs subsequent to booking and payment
                        for such service.HAMS shall not be liable for any
                        cancellation, overbooking, delay, re-routing, strike,
                        any weather occurrence or governmental occurrence as it
                        affects your travel reservation made with us. HAMS shall
                        not be liable for the depiction of travel products and
                        services made available by any supplier of travel
                        products and services, including but not limited to
                        photographs, listed amenities, ratings and discounts.{" "}
                        <br /> <br />
                        HAMS acts as a service that provides value added service
                        to retail travel agents and consumers. HAMS has no
                        control over and assumes no liability for the actions of
                        the suppliers from whom it obtains travel products or
                        services. <br /> <br />
                        HAMS. shall not be liable for final currency conversion
                        or rates when paid after a travel reservation is made
                        with us for international travel products and services.
                        You agree and acknowledge that currency rates vary and
                        any quoted price on the Site in local currency is a
                        guideline, and not binding on the side in local currency
                        is a guideline, and not binding on the travel supplier
                        or us. <br /> <br />
                        Once certain travel reservations are made and paid for
                        they may be completely non-refundable or there may be a
                        penalty involved in cancellation or seeking a refund
                        from the supplier of travel products and services. Once
                        tickets have been issued there may be a penalty involved
                        for cancellations and refunds. We do not have control
                        over printed prices on the tickets, although some
                        tickets may have BT (bulk fare) printed on them, some
                        may have a specific value on them, which may be
                        different (lower or higher) than the fare collected.{" "}
                        <br /> <br />
                        Discounts offered may vary depending on a number of
                        factors including airlines utilized, class of service,
                        destination, time of year (low, mid or high season),
                        advance notice provided, minimum stay requirements
                        fulfilled and flight load. <br /> <br />
                        HAMS does not guarantee, endorse, validate or promote
                        other advertiser&apos;s products and services that are
                        advertised on our Site. <br /> <br />
                        By booking with us a contract may be formed between you
                        and a Travel Supplier, and additional Terms & Conditions
                        may apply to your booking and purchase of travel-related
                        goods and services. You hereby agree to be bound by all
                        the Terms & Conditions of purchase imposed by any Travel
                        Supplier with whom you choose to contract, including,
                        but not limited to, payment of all amounts when due and
                        compliance with the Travel Supplier&apos;s rules and
                        restrictions regarding availability and use of fares,
                        products, or services. Some Travel Suppliers may require
                        you to present a credit card or cash deposit upon
                        check-in to cover additional expenses incurred during
                        your stay or during the use of the reserved products or
                        services. Such deposit is unrelated to any payment
                        received by HAMS for your hotel, car or airline ticket
                        booking. You understand that any violation of a Travel
                        Supplier&apos;s rules and restrictions may result in the
                        cancellation of your reservation(s), in denial of access
                        to the respective Service Element or services, in your
                        forfeiting any amount paid for such reservation(s),
                        and/or in our debiting your account for any costs we
                        incur as a result of such violation. <br /> <br />
                    </>
                ),
            },
            {
                id: "compassionExceptionPolicy",
                title: "COMPASSION EXCEPTION POLICY (CEP)",
                content: (
                    <>
                        Certain customers may be eligible to receive a discount
                        off cancellation, refund or ticket change service fees,
                        as described in our Compassion Exception Policy (CEP)
                        below: <br /> <br />
                        <table className='min-w-full text-base border'>
                            <thead>
                                <tr className='border-b'>
                                    <td className='bg-green-50 p-4'>
                                        Category
                                    </td>
                                    <td className='bg-green-50 p-4 border-x'>
                                        Eligibility requirements
                                    </td>
                                    <td className='bg-green-50 p-4'>
                                        Discount off service fees
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b'>
                                    <td className='p-2 '>
                                        Bangladesh Army/Navy/Air force
                                        (traveller and Immediate family*)
                                    </td>
                                    <td className='p-2 border-x'>
                                        Military ID must be provided
                                    </td>
                                    <td className='p-2 '>
                                        100% discount off hamsfly.com
                                        cancellation, refund or ticket change
                                        service fees
                                    </td>
                                </tr>

                                <tr className='border-b'>
                                    <td className='p-2 '>
                                        Customers directly affected by severe
                                        weather, natural disaster or other
                                        uncontrollable event
                                    </td>
                                    <td className='p-2 border-x'>
                                        If airline is waiving change/cancel
                                        fees, we will follow
                                    </td>
                                    <td className='p-2 '>
                                        100% discount off hamsfly.com
                                        cancellation, refund or ticket change
                                        service fees
                                    </td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='p-2 '>
                                        Bereavement (affecting traveller and
                                        Immediate family*)
                                    </td>
                                    <td className='p-2 border-x'>
                                        Letter from the funeral center is
                                        required
                                    </td>
                                    <td className='p-2 '>
                                        100% discount off hamsfly.com
                                        cancellation, refund or ticket change
                                        service fees
                                    </td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='p-2 '>
                                        Customers with visual impairments
                                    </td>
                                    <td className='p-2 border-x'>
                                        Customer must state that he or she has a
                                        visual impairment and is unable to use
                                        the web site
                                    </td>
                                    <td className='p-2 '>
                                        50% discount off hamsfly.com
                                        cancellation, refund or ticket change
                                        service fees.
                                    </td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='p-2 '>
                                        Senior citizens (65 years and over)
                                    </td>
                                    <td className='p-2 border-x'>
                                        Proof of DOB required
                                    </td>
                                    <td className='p-2 '>
                                        50% discount off hamsfly.com
                                        cancellation, refund or ticket change
                                        service fees.
                                    </td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='p-2 '>
                                        Youth (between 18 and 25)
                                    </td>
                                    <td className='p-2 border-x'>
                                        Proof of DOB required
                                    </td>
                                    <td className='p-2 '>
                                        50% discount off hamsfly.com
                                        cancellation, refund or ticket change
                                        service fees.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br /> <br />
                        *Immediate family is defined as: spouse, domestic
                        partner, children, parents, siblings, grandparents,
                        grandchildren, aunts, uncles, nieces, and nephews.
                        Eligibility applies whether the relationship is
                        biological.
                        <br /> <br />
                        Please note: The above CEP only applies to HAMS&apos;s
                        own cancellation, refund or ticket change service fees.
                        Customers may still be responsible for airline and/or
                        other supplier imposed penalties, as well as any fare
                        difference. HAMS does not control the policies of these
                        airlines and/or other suppliers.
                    </>
                ),
            },
            {
                id: "Waiver",
                title: "Waiver",
                content: (
                    <>
                        By using the Site, you agree to irrevocably waive any
                        claim against HAMS its subsidiaries or affiliates, and
                        any of such party&apos;s officers, directors, managers,
                        agents, contractors, or employees, and expressly agree
                        that neither HAMS nor any of its subsidiaries,
                        affiliates, officers, directors, managers, agents,
                        contractors or employees, shall be held liable for:{" "}
                        <br /> <br />
                        Any loss of or damage to property or injury to any
                        person caused by reason of any defect, negligence, or
                        other wrongful act of omission of, or any failure of
                        performance of any kind by any Travel Supplier; <br />
                        <br />
                        Any inconvenience, loss of enjoyment, mental distress or
                        other similar matter; <br />
                        <br />
                        Any delayed departure, missed connections, substitutions
                        of accommodations, terminations of service, or changes
                        in fares and rates; <br /> <br />
                        <br /> <br />
                        Any claim of any nature arising out of or in connection
                        with air or other transportation services, products or
                        other features performed (or not) or occurring (or not)
                        in connection with your itinerary. <br />
                        <br />
                        For avoidance of doubt (and without limiting the
                        foregoing), HAMS does not assume any liability
                        whatsoever for cancelled flights, flights that are
                        missed, or flights not connecting due to any scheduled
                        changes made by the relevant airline
                    </>
                ),
            },
            {
                id: "indemnification",
                title: "INDEMNIFICATION",
                content: (
                    <>
                        You agree to protect and indemnify HAMS its affiliates,
                        partners, joint ventures and/or their respective
                        suppliers and any of their respective officers,
                        directors, managers, employees and agents from and
                        against any claims, causes of action, demands,
                        recoveries, losses, damages, fines, penalties or other
                        costs or expenses of any kind or nature including but
                        not limited to reasonable legal and accounting fees,
                        brought by <br /> <br />
                        You or on your behalf in excess of the liability
                        described above provided that such limitation of
                        liability is permitted by the law of your state of
                        residence; <br /> <br />
                        By third parties as a result of your breach of these
                        Terms & Conditions, notices or documents referenced on
                        the Site; Your violation of any law or the rights of a
                        third party; or Your use of the Site.
                    </>
                ),
            },
            {
                id: "release",
                title: "RELEASE",
                content: (
                    <>
                        If you have a dispute with a travel product or service
                        supplier(s), including but not limited to airlines,
                        hotels, cruise lines, railroads, car rental agencies,
                        tour operators and consolidators, vacation packages and
                        activities suppliers, traveler assist service providers
                        and insurance providers, you release us, our affiliates,
                        partners, joint ventures and their respective officers,
                        directors, managers, agents and employees from claims,
                        demands and damages (direct, indirect, incidental, and
                        consequential) of every kind and nature, known and
                        unknown, arising out of or in any way connected with
                        such disputes.
                    </>
                ),
            },
            {
                id: "protectingYourSecurity",
                title: "Protecting Your Security",
                content: (
                    <>
                        To ensure that your credit, debit or charge card is not
                        being used without your consent, we may validate your
                        name, address and contact number supplied by you during
                        the booking process against appropriate third party
                        databases. By accepting these Terms & Conditions you
                        agree and authorize us to carry out such verification
                        checks as stated herein. In performing these checks, you
                        acknowledge and concur that such personal information
                        you provide to us may be disclosed to a registered
                        Credit Card Payment Gateway Agency which may keep a
                        record of such information in whole or in part. Rest
                        assured this verification process is performed for the
                        sole purpose to verify and confirm your identity.
                    </>
                ),
            },
            {
                id: "siteUsageAndTicketPurchase",
                title: "SITE USAGE AND TICKET PURCHASE",
                content: (
                    <>
                        You agree that you are at least 18 years of age and
                        possess the legal authority to enter into this agreement
                        and to use the Site in accordance with all Terms &
                        Conditions herein. If you are using this Site and/or
                        making travel reservations or bookings for another
                        person you agree to inform that person(s) about the
                        Terms & Conditions that apply to the travel reservations
                        and bookings you have made on their behalf, including
                        all rules and restrictions applicable thereto and these
                        Terms & Conditions . You agree to be financially
                        responsible for all of your use of the Site (as well as
                        for use of your account by others). You are responsible
                        for any bookings and travel reservations made by persons
                        under your direction or control. You also warrant that
                        all information supplied by you or on your behalf, or by
                        members of your household in using the Site is true,
                        current, complete and accurate. Furthermore, you also
                        confirm that the traveler is not an unaccompanied minor.
                        Without limitation, any exploratory, speculative, false,
                        or fraudulent reservation or any reservation in
                        anticipation of demand is prohibited. <br /> <br />
                        Whenever you make use of a Site feature that allows you
                        to upload material to the Site, or to make contact with
                        other users of the Site, you must comply with applicable
                        laws and the best standards of Internet courtesy and
                        behavior. You undertake that any such contribution does
                        comply as aforementioned, and you irrevocably undertake
                        to fully indemnify us at all times for any breach of
                        that warranty and undertaking. Any material you upload
                        to the Site will be considered non-confidential and
                        non-proprietary and we have the right to use, copy,
                        store, distribute and disclose to third parties any such
                        material for any purpose. We also have the right to
                        disclose your identity to any third party who is
                        claiming that any material posted or uploaded by you to
                        the Site constitutes a violation of their intellectual
                        property rights, or of their right to privacy. We will
                        not be responsible or liable to any third party for the
                        content or accuracy of any materials posted by you or
                        any other user of the Site. We have the right to remove
                        any material or posting you make on the Site if, in our
                        opinion, such material does not comply with these Terms
                        & Conditions .
                    </>
                ),
            },
            {
                id: "resolutionOfDisputes",
                title: "RESOLUTION OF DISPUTES",
                content: (
                    <>
                        <p className='font-bold'>
                            PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR
                            RIGHTS AND WILL HAVE A SUBSTANTIAL IMPACT ON HOW
                            CLAIMS YOU AND WE MAY HAVE AGAINST EACH OTHER ARE
                            RESOLVED.
                        </p>
                        Customer satisfaction is the foundation of our success.
                        That&apos;s why, if a dispute arises between us, our
                        goal is to resolve the dispute quickly in a fair and
                        cost-effective way. Accordingly, we strongly encourage
                        you, before taking any other action, to reach out to us
                        by contacting customer service at{" "}
                        <span className='text-green-600'>+880 2-48957730</span>{" "}
                        or{" "}
                        <span className='text-green-600'>info@hamsbd.com</span>{" "}
                        so that we have an opportunity to try to address your
                        concerns. <br /> <br /> Otherwise, you and we agree that
                        we will resolve any dispute, claim or controversy
                        arising out of or relating to your use of the Site,
                        these Terms & Conditions, or the breach, termination,
                        enforcement, interpretation or validity thereof, or our
                        relationship in connection with the Site or these or
                        previous versions of these Terms & Conditions(each, a
                        &apos;&apos;Claim&apos;&apos;), in accordance with one
                        of the subsections of this Resolution of Disputes
                        section below or as otherwise mutually agreed by the
                        parties in writing.
                    </>
                ),
            },
            {
                id: "governingLaw",
                title: "GOVERNING LAW; SUBMISSION TO JURISDICTION",
                content: (
                    <>
                        These Terms & Conditions and the rights of the parties
                        hereunder shall be governed by and construed in
                        accordance with the laws of People&apos;s Replublic of
                        Bangladesh, exclusive of conflict or choice of law
                        rules. You agree that unless otherwise mutually agreed
                        by the parties in writing or as otherwise described in
                        the Mandatory Arbitration provision below, any Claims
                        shall be brought in a court located in Dhaka City,
                        People&apos;s Republic of Bangladesh. Unless otherwise
                        prohibited by applicable law, any Claim must be brought
                        within one (1) year from the date on which such Claim
                        arose or accrued.
                    </>
                ),
            },
            {
                id: "improperlyFiledClaims",
                title: "IMPROPERLY FILED CLAIMS",
                content: (
                    <>
                        All claims you bring against us must be resolved in
                        accordance with this Resolution of Disputes section. All
                        claims filed or brought that are not in accordance with
                        to this section shall be considered improperly filed.
                        Should a claim be filed by either you or us in manner
                        that is not in accordance with this section, the other
                        party may seek to recover attorneys&apos; fees and costs
                        up to BDT 100,000, provided that the other party has
                        been notified in writing of the improperly filed claim,
                        received fourteen days to withdraw such claim, and fails
                        to do so.
                    </>
                ),
            },
            {
                id: "prohibitedActivities",
                title: "PROHIBITED ACTIVITIES",
                content: (
                    <>
                        You agree that the travel services reservations
                        facilities of the Site shall be used only to make
                        legitimate reservations or purchases for you or for
                        another person for whom you are legally authorized to
                        act. You understand that overuse or abuse of the travel
                        services reservation facilities of the Site may result
                        in you being denied access to such facilities. You may
                        not use this Site for any commercial purpose. You agree
                        you will not access, monitor or copy any content or
                        information of this Site using any robot, spider,
                        scraper or other automated means or any manual process
                        for any purpose without our written permission. You
                        agree that you will not violate the restrictions in any
                        robot exclusion headers on this Site, or bypass or
                        circumvent other measures employed to prevent or limit
                        access to this Site. You agree you will not modify,
                        copy, distribute, transmit, display, perform, reproduce,
                        publish, license, create derivative works from,
                        transfer, or sell or re-sell any information, content,
                        graphics, software, products, or services obtained from
                        or through this Site or call center. You agree you will
                        not use a frame or border environment around the Site,
                        or other framing technique to enclose any portion or
                        aspect of the Site, or mirror or replicate any portion
                        of the Site, and that you will not sell, offer for sale,
                        transfer, or license any portion of the Site in any form
                        to any third parties. <br /> <br />
                        You agree you will not use any device, software, or
                        routine that interferes, or attempts to interfere, with
                        the normal operation of our Site, or take any action
                        that impose an unreasonable load on our equipment. You
                        will not disguise the origin of the information you
                        transmit through the Site, whether to navigate the Site,
                        make a travel reservation or booking, or post any
                        content. You must not misuse the Site by knowingly
                        introducing viruses, Trojans, worms, logic bombs or
                        other material which is malicious, offensive, defamatory
                        or technologically harmful.
                        <br /> <br />
                        You must not attempt to gain unauthorized access to the
                        Site, the server on which the Site is stored or any
                        server, computer or database connected to the Site. You
                        must not attack the Site via a denial-of-service attack
                        or a distributed denial-of service attack. We will not
                        be liable for any loss or damage caused by a distributed
                        denial-of-service attack, viruses or other
                        technologically harmful material that may infect your
                        computer equipment, computer programs, data or other
                        proprietary material due to your use of the Site or to
                        your downloading of any material posted on it, or on any
                        website linked to it. <br />
                        <br />
                        We reserve the right to cancel your HAMS account and
                        terminate your use of the Site if you violate any of the
                        above prohibitions.
                    </>
                ),
            },
            {
                id: "bookingProcess",
                title: "BOOKING PROCESS",
                content: (
                    <>
                        For your convenience, our use of the following terms in
                        these Terms & Conditions shall have the meaning below:{" "}
                        <br />
                        <b>&apos;&apos;Service Element&apos;&apos;</b>
                        - - a singular product or service listed on the Site
                        that can be booked independently of any other service.
                        (e.g.: car, hotel, flight). <br />
                        <br />
                        <br />
                        <b>&apos;&apos;Travel Supplier&apos;&apos;</b>
                        - a vendor of one or more Service Elements. (e.g.:
                        hotels, car suppliers, airlines). HAMS does not act as
                        principal but makes arrangements with third-party vendor
                        Travel Suppliers for Service Elements, all as defined
                        above.
                        <br />
                        <br />
                        <br />
                        <b>&apos;&apos;Travel Supplier&apos;&apos;</b>
                        - a vendor of one or more Service Elements. (e.g.:
                        hotels, car suppliers, airlines). HAMS does not act as
                        principal but makes arrangements with third-party vendor
                        Travel Suppliers for Service Elements, all as defined
                        above. <br />
                        <br />
                        <br />
                        <b>&apos;&apos;Booking&apos;&apos;</b>- a negotiation
                        process with the Travel Supplier carried out by you
                        while using this Site for the purpose of obtaining one
                        or more Service Elements that may result in a contract
                        with the Travel Supplier at the time we receive full
                        payment and accept your offer. <br />
                        <br />
                        In order to complete a Booking the following steps are
                        taken to ensure its validity: <br />
                        <br />
                        When we place Service Elements on our Site, we are
                        inviting you to make an offer for their purchase. You do
                        not make this offer until you press
                        &apos;&apos;Book&apos;&apos; on the payment page
                        (entitled &apos;&apos;Review Trip Details and
                        Book&apos;&apos;) of the Site.
                        <br />
                        <br />
                        Once you have done so you have made HAMS an offer (which
                        cannot be withdrawn if you change your mind) to purchase
                        the relevant Service Element(s) from the relevant Travel
                        Supplier(s) (your &apos;&apos;Booking&apos;&apos;). We
                        are free to accept your offer on behalf of the relevant
                        Travel Supplier or to reject it, at our sole discretion.
                        <br />
                        <br />
                        The HAMS email confirmation is NOT the contractual
                        acceptance of the Booking, but merely an acknowledgement
                        that we have received your offer. We will need to check
                        the availability of the relevant Service Element(s).
                        <br />
                        <br />
                        If the relevant Service Element is available, your
                        Booking will be processed. The contract pertaining to
                        the relevant Booking is formed when payment in full has
                        been received.
                        <br />
                        <br />
                        The contract between you and the relevant Travel
                        Supplier will relate only to those Service Elements
                        confirmed by email with ticket numbers in case of air or
                        reservation numbers in case of hotels, cars or
                        activities.
                        <br />
                        <br />
                        The terms of your Booking (such as price, availability
                        and/or dates of travel) are not guaranteed until the
                        contract is formed between you and the Travel Supplier
                        and a ticket has been issued and/or a reservation has
                        been made and confirmed by the Travel Supplier.
                        <br />
                        <br />
                        Please note that once you have completed the Booking
                        stage you can only cancel or change the details (such as
                        names or destinations) of your Booking at our sole
                        discretion and in accordance with these Terms &
                        Conditions.
                        <br />
                        <br />
                        These Booking processes will apply to any of our
                        individual Service Element&apos;s Terms & Conditionsset
                        out below. The airline ticket Terms & Conditions, the
                        hotel Terms & Conditions, the car rental Terms &
                        Conditions, the attractions and services Terms &
                        Conditions supplement any area not covered by the
                        Booking process. We reserve the right to change the
                        Booking process at any time, with changes automatically
                        taking effect from the date such changes are posted on
                        the Site.
                        <br />
                        <br />
                        At all times throughout your trip a government-issued
                        photo ID is required for security checks at airports,
                        hotels and car rental locations and may be required for
                        attractions and other products as deemed necessary by
                        the relevant Travel Suppliers.
                        <br />
                        <br />
                        At all times throughout your trip a government-issued
                        photo ID is required for security checks at airports,
                        hotels and car rental locations and may be required for
                        attractions and other products as deemed necessary by
                        the relevant Travel Suppliers.
                        <br />
                        <br />
                        Neither HAMS nor its affiliates accept any
                        responsibility, and you will not be entitled to any
                        refunds whatsoever, if you are denied boarding, delayed
                        or deported due to non-fulfillment of the above.
                        <br />
                        <br />
                        Government entry/exit fees may apply, depending on your
                        destination.
                        <br />
                        <br />
                        These are your sole responsibility and will be
                        additional to your Booking charges.
                        <br />
                        <br />
                        All travelers on your Booking (if more than one
                        passenger) must travel on the same itinerary. Individual
                        passengers cannot be added to, and/or deleted from your
                        Booking.
                        <br />
                        <br />
                        HAMS reserves the right to correct errors in any
                        advertised price and, if applicable, give you an option
                        to either cancel the Booking or allow HAMS to collect an
                        amount equal to any increase in price from your provided
                        credit or debit card, prior to your departure.
                        <br />
                        <br />
                        Each Service Element listed in your Booking is provided
                        by the respective Travel Supplier.
                        <br />
                        <br />
                        Frequent traveler points and/or miles may or may not be
                        available for any portion of your Booking. You must
                        check this with the relevant Travel Supplier.
                        <br />
                        <br />
                        Once you have made your Booking, you cannot transfer or
                        change the name(s) or destination(s) listed in your
                        Booking.
                        <br />
                        <br />
                        Your Booking will be fulfilled on the delivery date set
                        out in your ticket information email or, if no delivery
                        date is specified, then on the date the ticket is
                        issued, unless there are exceptional circumstances.
                        <br />
                        <br />
                        The terms of this agreement incorporate by reference the
                        terms of each airline&apos;s contract of carriage.
                        Passengers may inspect the full text of the contract of
                        carriage at each airline&apos;s airport or city ticket
                        offices. Passengers have the right, upon request to the
                        airlines, to receive free of charge by mail or other
                        delivery service the full text of the contract of
                        carriage. The incorporated terms of the contract of
                        carriage may include: (1) Limits on the airline&apos;s
                        liability for personal injury or death of passengers,
                        and for loss, damage, or delay of goods and baggage,
                        including fragile or perishable goods; (2) Claim
                        restrictions, including time periods within which
                        passengers must file a claim or bring an action against
                        the airline for its acts or omissions or those of its
                        agents; (3) Rights of the airline to change terms of the
                        contract; (4) Rules about reconfirmation of
                        reservations, check-in times, and refusal to carry; (5)
                        Rights of the airline and limitations concerning delay
                        or failure to perform service, including schedule
                        changes, substitution of alternate airline or aircraft
                        and rerouting.
                    </>
                ),
            },
            {
                id: "pricingTaxesFeesAndPayment",
                title: "Pricing, Taxes/Fees, and Payment",
                content: (
                    <>
                        Our total prices include all taxes and fees applicable
                        to airfare, hotel accommodation, car rentals and
                        activities included in your Booking, unless stated
                        otherwise in your ticket information email or in these
                        Terms & Conditions. Additional fuel surcharges,
                        security, baggage, seat reservation, hotel incidentals,
                        and other applicable service charges may apply which
                        will be charged by the relevant Travel Supplier at time
                        of check-in. You are solely responsible for any such
                        additional charges due to the Travel Supplier. If you
                        have any questions about such charges, please contact
                        the relevant Travel Supplier directly. <br />
                        <br />
                        Prices quoted also do not include any additional flight
                        fuel surcharges or other surcharges, which may be
                        imposed from time to time by the relevant Travel
                        Supplier or authorities, all of which must be paid by
                        you.
                        <br />
                        <br />
                        Payment must be made in full with a valid credit or
                        debit card at the time of Booking. HAMS accepts all
                        major credit or debit cards with a verifiable billing
                        address.
                        <br />
                        <br />
                        You hereby authorize HAMS and its authorized third party
                        to process the charge to the credit or debit card you
                        provide to us for the total amount of your Booking.
                        <br />
                        <br />
                        You may be required by the relevant Travel Supplier(s)
                        to present a valid credit or debit card at the time of
                        check-in at the hotel and/or at the pick-up location of
                        the car rental company to provide confirmation of
                        authorized card usage and/or to secure any additional
                        charges. The cardholder must be a traveler listed on
                        your Booking.
                        <br />
                        <br />
                        All offers, prices, and conditions of sale may be
                        subject to:
                        <br />
                        <br />
                        Change without notice; <br />
                        Advance purchase, eligibility, seating, or other
                        limitations;
                        <br />
                        Travel days, dates, minimum or maximum stays, holidays,{" "}
                        <br />
                        seasons, blackout dates, stopovers, and/or wait listing
                        restrictions;
                        <br />
                        Reservation validation limitations of up to one year (if
                        any extension permitted, penalties/restrictions may
                        apply);
                        <br />
                        Other conditions/restrictions; and
                        <br />
                        Availability.
                        <br />
                        <br />A reservation is not complete until
                        confirmed/ticketed. To protect our customers, we verify
                        with the credit/debit card company that the billing
                        address and credit card verification number you provided
                        to us is accurate and that your debit/charge will be
                        accepted. Until such information is verified, the fare
                        is subject to change. We are not responsible for any
                        transaction that is declined based upon a credit/debit
                        card that is declined by the issuing company or a travel
                        provider or if, for any reason, the debit/credit card
                        billing address and/or credit card verification number
                        cannot be verified in a timely manner, nor are we
                        responsible for any changes in fare or any other charges
                        that may occur during our verification process. In the
                        event the fare selected is not available an approval
                        code may have been issued on your credit card. If the
                        transaction is not completed the approval code may
                        temporarily credit the amount from your bank account.
                    </>
                ),
            },
            {
                id: "ourFeesAndExceptions",
                title: "OUR FEES AND EXCEPTIONS",
                content: (
                    <>
                        In addition to each Travel Supplier&apos;s cost and fees
                        Bank/Payment Gateway Charges will be added as per the
                        payment method for cancellation. And HAMS may charge a
                        service fee as described below. All HAMS fees are
                        charged on a per-person or per-ticket basis and are
                        non-refundable. <br />
                        <br />
                        <div className='text-center font-bold text-gray-700'>
                            Cancellation & Refunds
                        </div>
                        <table className='min-w-full text-base'>
                            <thead>
                                <tr>
                                    <td
                                        colSpan={2}
                                        className='py-3 border bg-green-50 px-2'
                                    >
                                        {" "}
                                    </td>
                                    <td
                                        colSpan={2}
                                        className='py-3 border bg-green-50 px-2'
                                    >
                                        Air - Economy
                                    </td>
                                    <td
                                        colSpan={2}
                                        className='py-3 border bg-green-50 px-2'
                                    >
                                        Air - Business/First
                                    </td>
                                    <td
                                        colSpan={2}
                                        className='py-3 border bg-green-50 px-2'
                                    >
                                        Hotel & Others
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        colSpan={2}
                                        className='p-2 border  bg-green-50 '
                                    ></td>
                                    <td className='border p-2'>
                                        Bangladesh Domestic
                                    </td>
                                    <td className='border p-2'>
                                        International
                                    </td>
                                    <td className='border p-2'>
                                        Bangladesh Domestic
                                    </td>
                                    <td className='border p-2'>
                                        International
                                    </td>
                                    <td className='border p-2'>
                                        Bangladesh Domestic
                                    </td>
                                    <td className='border p-2'>
                                        International
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        colSpan={2}
                                        className='p-2 border  bg-green-50'
                                    >
                                        Agent Assisted Cancellation(2) with
                                        Refund
                                    </td>
                                    <td className='border p-2'>BDT 300</td>
                                    <td className='border p-2'>BDT 2000</td>
                                    <td className='border p-2'>BDT 300</td>
                                    <td className='border p-2'>BDT 3000</td>
                                    <td className='border p-2'>
                                        BDT 500 for Per Voucher
                                    </td>
                                    <td className='border p-2'>
                                        BDT 2000 for Per Voucher
                                    </td>
                                </tr>
                            </tbody>
                        </table>{" "}
                        <br />
                        <br />
                        <div className='text-center font-bold text-gray-700'>
                            Changes to Existing Tickets (exchange)
                        </div>
                        <table className='table min-w-full text-base '>
                            <thead>
                                <tr>
                                    <td
                                        colSpan={3}
                                        className='border bg-green-50 py-3 px-2'
                                    ></td>
                                    <td
                                        colSpan={2}
                                        className='border bg-green-50 py-3 px-2'
                                    >
                                        Air - Economy
                                    </td>
                                    <td
                                        colSpan={2}
                                        className='border bg-green-50 py-3 px-2'
                                    >
                                        Air - Business/First
                                    </td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td
                                        className='border p-2 bg-green-50 '
                                        colSpan={3}
                                    ></td>
                                    <td className='border p-2'>Domestic</td>
                                    <td className='border p-2'>
                                        International
                                    </td>
                                    <td className='border p-2'>Domestic</td>
                                    <td className='border p-2'>
                                        International
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className='border p-2 bg-green-50 '
                                        colSpan={3}
                                    >
                                        Re-issue
                                    </td>
                                    <td className='border p-2'>BDT 300</td>
                                    <td className='border p-2'>BDT 2000</td>
                                    <td className='border p-2'>BDT 300</td>
                                    <td className='border p-2'>BDT 3000</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <br />
                        <div className='text-center font-bold text-gray-700'>
                            Special Services
                        </div>
                        <table className='table min-w-full text-base'>
                            <thead>
                                <tr>
                                    <td className='border p-2 bg-green-50'></td>
                                    <td className='border p-2 bg-green-50'>
                                        Types
                                    </td>
                                    <td className='border p-2 bg-green-50'>
                                        Air - Business/First
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        rowSpan={3}
                                        className='p-2 border bg-green-50 text-center'
                                    >
                                        Agent Assisted Services
                                    </td>
                                    <td className='p-2 border'>
                                        Passenger Name Misspelling
                                    </td>
                                    <td className='p-2 border'>BDT 2000</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border'>
                                        Passenger Name Misspelling
                                    </td>
                                    <td className='p-2 border'>BDT 2000</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border'>
                                        Passenger Name Misspelling
                                    </td>
                                    <td className='p-2 border'>BDT 2000</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border bg-green-50 text-center'>
                                        Agent Assisted Services
                                    </td>
                                    <td
                                        colSpan={2}
                                        className='p-2 border w-2/3'
                                    >
                                        We offer Special Discounts under our
                                        Compassion Exception Policy (CEP). Our
                                        CEP Policy covers Military, Senior
                                        Citizens (over 65 years), Natural
                                        Disasters, Bereavement, Youth (between
                                        18 and 25 years), terminally ill, and
                                        people with Disabilities. <br />
                                        <br />
                                        All Airline Refunds/Future Credits are
                                        subject to each airline fare rules,
                                        policies and procedures
                                        <br />
                                        <br />
                                        Service fees will be converted in local
                                        currency on the payment page. Passenger
                                        types = Adult, child, senior, infant,
                                        student, military.
                                        <br />
                                        <br />
                                        ** All post-ticketing service fees are
                                        non-refundable and are subject to change
                                        without notice. HAMS fees, additional
                                        fares collected, and other charges are
                                        in addition to any airline, hotel, or
                                        car rental fees and charges. You will
                                        only be charged the final total amount.
                                        <br />
                                        <br />
                                        Government imposed taxes and fees are
                                        subject to change. You will only be
                                        charged the final total amount as shown.
                                        <br />
                                        <br />
                                        1. Most of our airline tickets are
                                        non-refundable. Only available if our
                                        Travel Suppliers&apos; fare rules allow
                                        cancellation and refunds, and we have
                                        accepted your request for a refund, you
                                        are not a &apos;&apos;no
                                        show&apos;&apos; (most &apos;&apos;no
                                        show&apos;&apos; bookings are
                                        in-eligible for any waiver from
                                        suppliers for refund processing), and if
                                        we are able to secure waivers from
                                        suppliers to process this requested
                                        cancellation and refund.
                                        <br />
                                        <br />
                                        2. Most of our airline tickets are
                                        non-refundable. Airline Refunds/Future
                                        credits are subject to airline fare
                                        rules, policies and procedures.
                                        <br />
                                        <br />
                                        3. Special Services - All Services noted
                                        are on a Request Basis ONLY and are
                                        subject to each Airline&apos;s review
                                        and approval process along with their
                                        fare rules, policies and procedures.
                                        <br />
                                        <br />
                                        Name Misspelling - Passengers name on
                                        their airline ticket does not match
                                        their passport or other universally
                                        accepted government ID.
                                        <br />
                                        <br />
                                        Baggage - please retain all receipts and
                                        baggage tags.
                                        <br />
                                        <br />
                                        No- Show - Documentation advising why
                                        you were unable to make your scheduled
                                        departure will be required.
                                        <br />
                                        <br />
                                        Denied Boarding - Documentation as why
                                        you were denied boarding of your
                                        scheduled departure will be required.
                                        <br />
                                        <br />
                                        Duplicate Tickets - Copies of all
                                        tickets, reflecting exact same
                                        itineraries booked with us will be
                                        required in order to process a refund
                                        request.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                ),
            },
            {
                id: "changesToFlightsAlreadyPurchased",
                title: "CHANGES TO FLIGHTS ALREADY PURCHASED",
                content: (
                    <>
                        Any and all changes made to the itinerary are restricted
                        and are subject to airline fare rules, whichever is more
                        restrictive; most of our tickets, hotels, cars, packages
                        and cruises do not allow any date or name changes after
                        the booking is completed. HAMS does not guarantee, and
                        shall not be responsible for, any bookings or
                        reservations made or confirmed to you in the event that
                        the original itinerary has been changed by the supplier
                        pursuant to customer&apos;s request or supplier&apos;s
                        schedule changes.
                    </>
                ),
            },
            {
                id: "cancelAndExchange",
                title: "CANCEL AND EXCHANGE",
                content: (
                    <>
                        Most of our airline tickets are 100% non-refundable. In
                        certain cases, where the airline may allow
                        cancellations, a credit may be valid towards a future
                        ticket purchase by the same traveler on the same
                        airline. Usually the credit issued by the airline
                        supplier has a specific expiration date, after which it
                        cannot be used. We encourage you to discuss additional
                        restrictions attached to your credit with a customer
                        service agent. All such bookings where the cancellation
                        may be permitted must be cancelled prior to the
                        scheduled departure time of the first flight segment by
                        calling our customer service center. We do not guarantee
                        any cancellation. When you are ready to make your new
                        booking and wish to use your airline credit, you will be
                        required to the pay fare difference (if any), applicable
                        airline penalties and any applicable HAMS post-ticketing
                        fees. All such changes are governed by each
                        airline&apos;s fare rules, policies and procedures,
                        which are not under our control. <br />
                        <br />
                        <br />
                        No additional representation is made for our exchange
                        fees except that an agent will assist you in locating
                        your desired new flights and attempt to re-book the new
                        flights based on availability and other factors.
                        <br />
                        <br />
                        <br />
                        As per our Compassion Exception Policy (CEP), we offer
                        Special Discounts for Military, Natural Disasters,
                        Bereavement, Customers with Visual Impairments, Senior
                        Citizens and Youth. Please review our Compassion
                        Exception Policy (CEP) in detail.
                    </>
                ),
            },
            {
                id: "multipleAirlineItineraries",
                title: "MULTIPLE AIRLINE ITINERARIES",
                content: (
                    <>
                        If your itinerary includes flights operated by more than
                        one airline, please read carefully each such
                        airline&apos;s terms and conditions, which can be found
                        on each such airline&apos;s website. Each such airline
                        will have its own restrictions, rules and fees. If one
                        of these flights is affected by an airline change (e.g.
                        cancellation or rescheduling) that causes a Customer to
                        make changes to the other flight, the Customer may be
                        responsible for any fees or ticket cost incurred for
                        making changes to the unaffected flight. Such airlines
                        may charge their own fees for changes, refunds, or if
                        exchanges are requested. You are responsible for
                        complying with each airline&apos;s terms and conditions,
                        which may differ (for example, check-in times and limits
                        on baggage size/weight). It is advisable you print your
                        outbound and return portions of your e-ticket
                        confirmation for all flights prior to travelling. You
                        may be asked for proof of your return ticket at
                        check-in.
                    </>
                ),
            },
            {
                id: "cancelAndRefund",
                title: "CANCEL AND REFUND",
                content: (
                    <>
                        Most of our airline tickets, hotels, pre-paid car
                        rentals, vacation packages and service fees are
                        non-refundable prior to midnight of booking. All
                        cancellations must be done over the email only. We can
                        accept refund requests only if the following conditions
                        have been met: <br />
                        <br />
                        You have applied for a cancellation and refund with us
                        and if the fare rules provide for cancellation and
                        refunds;
                        <br />
                        <br />
                        You are not a &apos;&apos;no show&apos;&apos; (most
                        &apos;&apos;no show&apos;&apos; bookings are in-eligible
                        for any waiver from suppliers for refund processing);
                        and
                        <br />
                        <br />
                        We are able to secure waivers from suppliers to process
                        this requested cancellation and refund. We are unable to
                        provide a specific time line for how long it may take
                        for this requested refund to be processed. All refund
                        requests are processed in a sequential format. Once you
                        have provided our customer service agent with your
                        cancellation request, we will then send you an email
                        notification that your request has been received. This
                        notification does not automatically qualify you for a
                        refund. This only provides you with an acknowledgement
                        of your request and provides you with a tracking number.
                        Upon receipt of your request we will work with the
                        suppliers such as airlines, hotels, car-rental companies
                        to generate a waiver based on airline and other supplier
                        rules and notify you of the supplier decision. Our
                        services fees associated with the original travel
                        reservation or booking are not refundable. Please note
                        that we are dependent on the suppliers for receiving the
                        requested refunds. Once the refund has been approved by
                        the supplier it may take additional time for this to
                        appear on your credit card statement. Generally, all
                        suppliers will charge a penalty for refund. This entire
                        process may take 60-90 working days from receipt of your
                        request to receiving credit on your statement. Apart
                        from the airlines and other suppliers refund penalties,
                        HAMS will charge a post-ticketing services fee, as
                        applicable. All refund fees are charged on per ticket
                        per person basis. These fees will only be assessed if a
                        refund has been authorized by the supplier or a waiver
                        has been received and when the airline/supplier rules
                        permit such refunds. If such refund is not processed by
                        the supplier, we will refund you our post-ticketing
                        service fees applicable to your agent assisted refund
                        request, but not our booking fees for the original
                        travel reservation or booking.
                        <br />
                        <br />
                        As per our Compassion Exception Policy (CEP), we offer
                        Special Discounts for Bangladesh Military, Natural
                        Disasters, Bereavement, Customers with Visual
                        Impairments, Senior Citizens and Youth. Please review
                        our Compassion Exception Policy (CEP) in detail.
                        <br />
                        <br />
                        Cancellation Password - For your security, bookings may
                        only be cancelled over the registered email, and not by
                        phone call or web chat. When requesting HAMS to cancel a
                        booking on your behalf, our agents will send you an
                        email on your registered email in which you booked the
                        ticket from us. If you cannot access your email, we may
                        not be able to process your request for cancellation.
                    </>
                ),
            },
            {
                id: "promoCodes",
                title: "PROMO CODES",
                content: (
                    <>
                        HAMS may issue certain promo codes which are generally
                        valid for online travel reservations and bookings,
                        though some specific HAMS promo codes may only be used
                        over the phone through our customer service center.{" "}
                        <br />
                        <br />
                        We invite you to sign up for our newsletter to receive
                        promo codes by email.
                        <br />
                        <br />
                        The maximum discount from all HAMS promo codes is the
                        value of our service fees and/or &apos;&apos;Traveler
                        Assist&apos;&apos; fees (up to 70%).
                        <br />
                        <br />
                        HAMS promo codes are non-transferable, cannot be sold or
                        bartered and hold no cash value.
                        <br />
                        <br />
                        e. To receive the value of the discount, a valid promo
                        code must be entered in the promo code link on payment
                        page. If the code is not entered the discount cannot be
                        redeemed and has no value. Due to technical problems, if
                        the code is not accepted or a coupon link is not
                        present, you have the right to not purchase the product
                        or service, but in no circumstances will the credit be
                        applied after purchase is made.
                        <br />
                        <br />
                        HAMS promo codes offers may be revised or withdrawn any
                        time without notice, even if other websites are
                        displaying the same offers.
                        <br />
                        <br />
                        For all technical errors there is no recourse except you
                        have the right to not make the purchase.
                        <br />
                        <br />
                        If the offer is withdrawn, the promo code becomes
                        invalid and the Site and system will not accept the
                        promo code when entered. This is final and you have the
                        right at that point to continue with original price or
                        not continue with your purchase.
                        <br />
                        <br />
                        The final price displayed (with or without promo code)
                        will be the amount billed/charged and there will be no
                        credits/discounts applied after purchase for absolutely
                        any reason.
                        <br />
                        <br />
                        HAMS promo codes may not be combined with another offer.
                        <br />
                        <br />
                        We reserve the right to decline any transaction that may
                        have had an error in promo code value even after the
                        booking is created and booking receipt is issued.
                    </>
                ),
            },
            {
                id: "promoCodeTerms",
                title: "Promo Code Terms",
                content: (
                    <>
                        The promo code offer is on our transaction service fees
                        only, Discount varies based on the transaction service
                        fees charged for that ticket or travel reservation, and
                        the value of discount will be up to the amount of the
                        service fees charged for that transaction or the promo
                        code&apos;s value per transaction whichever is less. You
                        must use the promo code at check-out to redeem this
                        offer. This offer may be revised or dis-continued
                        without notice.
                    </>
                ),
            },
            {
                id: "fareChangesAndPostPaymentPriceGuarantee",
                title: "FARE CHANGES AND POST PAYMENT PRICE GUARANTEE",
                content: (
                    <>
                        Prior to your form of payment being processed and
                        accepted successfully, if there is a change in the price
                        of air fare or any other change, you may be notified of
                        this change and only upon such notification you have the
                        right to either accept or decline this transaction. If
                        you elect to decline this transaction, you will not be
                        charged. <br />
                        <br />
                        Our Post Payment Price Guarantee: Upon successful
                        acceptance and processing of your payment (credit/debit
                        card), we guarantee that we will honor BDT 1000 on final
                        quoted price of the airline tickets regardless of any
                        changes or fluctuation in the price of air fare.
                    </>
                ),
            },
            {
                id: "paymentAcceptancePolicy",
                title: "PAYMENT ACCEPTANCE POLICY",
                content: (
                    <>
                        We accept credit cards and debit cards issued in
                        Bangladesh and several other countries as listed in the
                        billings section. <br />
                        <br />
                        We also accept Cash in Office, Bkash, Online Bank
                        Transfer, etc. methods as well. <br />
                        <br />
                        Please note: your credit/debit card may be billed in
                        multiple charges totaling the final total price. If your
                        credit/debit card or other form of payment is not
                        processed or accepted for any reason, we will notify you
                        within 24 hours (it may take longer than 24 hours for
                        noncredit/debit card payment methods). Prior to your
                        form of payment being processed and accepted
                        successfully, if there is a change in the price of air
                        fare or any other change, you may be notified of this
                        change and only upon such notification you have the
                        right to either accept or decline this transaction. If
                        you elect to decline this transaction, you will not be
                        charged.
                        <br />
                        <br />
                        Please note: all hotel, car rental and tour/activity
                        bookings are only confirmed upon delivery of complete
                        confirmation details to the email you provided with your
                        reservation. In some cases, pre-payment may be required
                        to receive confirmation.
                        <br />
                        <br />
                        In order to provide you with further protection, when
                        certain transactions are determined to be high-risk by
                        our systems, we will not process such transactions
                        unless our credit card verification gateway team has
                        determined that it&apos;s safe to process them. In order
                        to establish validity of such transactions, we may
                        contact you or your bank.
                    </>
                ),
            },
            {
                id: "ticketDelivery",
                title: "TICKET DELIVERY",
                content: (
                    <>
                        Most tickets are electronic (e-Tickets), however with
                        certain itineraries where an e-Ticket is not available a
                        paper ticket will be issued. If an e-Ticket could not be
                        issued for a particular reservation or if a delivery was
                        being made of another product or service, HAMS will send
                        the paper ticket, product or service through a secure
                        mode of delivery (a reputable carrier company). HAMS
                        does not assume any responsibility for the fault of the
                        delivery company. We will attempt to redeliver but do
                        not provide any guarantees for redelivery on time. If
                        you provide an incorrect address, then you may have to
                        pay excess fees to the delivery company for alteration
                        of the address. If an e-Ticket is generated the ticket
                        information will be available on the Site.
                    </>
                ),
            },
            {
                id: "creditDebitCardPayments",
                title: "CREDIT/DEBIT CARD PAYMENTS",
                content: (
                    <>
                        All credit cards must have a verifiable Bangladesh or
                        other country billing address. To see the list of
                        countries where credit cards are accepted, click the
                        drop menu down in the check-out page. <br />
                        <br />
                        All bookings and fares are not guaranteed until ticketed
                        by the supplier. For hotels, car rentals, and vacation
                        packages, bookings are not guaranteed unless you receive
                        a confirmation number by email.
                        <br />
                        <br />
                        When you submit your credit or debit card for a
                        purchase, we request an authorization for the amount of
                        your anticipated transaction (placing a temporary
                        &apos;&apos;hold&apos;&apos; on the funds). If for some
                        reason we are unable to confirm your booking, you will
                        not be charged and we will request that such hold be
                        released by your credit or debit card bank; until then,
                        funds subject to the hold will not be available to you
                        for other purposes.
                        <br />
                        <br />
                        If your credit card is declined for any reason, we will
                        notify you within 72 hours. Simply submitting the credit
                        card does not automatically guarantee ticketing.
                        <br />
                        <br />
                        HAMS bears no responsibility in the event your credit or
                        debit card is not approved or charged.
                        <br />
                        <br />
                        There can be many reasons why your credit or debit card
                        may not have been approved or charged. Examples of these
                        maybe: airline could not confirm the booking, fare
                        increased since payment information was submitted and
                        prior to ticketing; or sufficient funds not available on
                        the credit card. In such instances where the fare may
                        have increased, you will be provided with alternate
                        options and you have the right to cancel the booking at
                        no cost to you. When the booking is ticketed at the cost
                        originally quoted to you the ticket becomes
                        non-refundable and non-cancellable.
                        <br />
                        <br />
                        HAMS uses stringent safety measures for credit card
                        payment processing. Fraudulent transactions, if any, are
                        reported to airport security, airlines and other law
                        enforcement.
                        <br />
                        <br />
                        You agree to be liable for any and all credit card
                        payments and you agree not to dispute charges after the
                        purchase has been made and your tickets and/or other
                        products have been delivered by email confirmation or
                        have been shipped to you. You agree to reimburse HAMS in
                        cases of charge back or credit card disputes where you
                        have genuinely purchased a service on our website.
                        <br />
                        <br />
                        Most credit card transactions over the phone to our
                        Customer Service Department are recorded and are
                        available as evidence in case of any dispute.
                        <br />
                        <br />
                        Online credit card transactions are authorized at the
                        time a user or anyone acting on their behalf accepts
                        these Terms & Conditions and continues with the
                        purchase.
                        <br />
                        <br />
                        When certain transactions are determined to be high risk
                        by our systems, we will not process such transactions
                        unless our credit card verification team has determined
                        that it&apos;s safe to process them. In order to
                        establish validity of such transactions, we may contact
                        you or your bank.
                    </>
                ),
            },
            {
                id: "creditCardDeclines",
                title: "CREDIT CARD DECLINES",
                content: (
                    <>
                        If your credit card declines at the time of processing
                        your transaction, we will make all efforts to notify you
                        by email within 72 hours. The transaction will not be
                        processed if your credit card has been declined. The
                        fare and any other booking details are not guaranteed.
                        <b>
                            If your credit card declines at the time of
                            processing your transaction, we will make all
                            efforts to notify you by email within 72 hours. The
                            transaction will not be processed if your credit
                            card has been declined. The fare and any other
                            booking details are not guaranteed.
                        </b>
                    </>
                ),
            },
            {
                id: "seatsMealsFrequentFlyerAndOtherSpecialRequests",
                title: "SEATS, MEALS, FREQUENT FLYER AND OTHER SPECIAL REQUESTS",
                content: (
                    <>
                        Please note that your seats, meals, frequent flyer and
                        other special requests are requests only. The airline
                        reserves the right to apply any revisions to the
                        requested seat allocation without notification. All
                        requests should be verified with the airline. We do not
                        guarantee you will be assigned the seat you have
                        requested. We also do not guarantee that your meal,
                        frequent flyer and other special requests will be
                        confirmed by the airline. It is therefore recommended
                        you contact your airline directly to confirm these
                        requests.
                    </>
                ),
            },
            {
                id: "baggagePolicyAndFees",
                title: "BAGGAGE POLICY AND FEES",
                content: (
                    <>
                        If you have excess baggage, you will have to pay any
                        excess baggage fee assessed by each airline. We
                        recommend traveling light to reduce these costs. To find
                        the additional weight baggage fees for each airline,
                        please visit our Booked Airline page. These fees are to
                        be paid directly to airline upon using such service. We
                        make an effort to keep the baggage fees table updated
                        but we recommend you contact the airline directly for
                        the latest fees on check baggage and policy as it
                        relates to baggage.
                    </>
                ),
            },
            {
                id: "baggagePolicyOnConnectingFlights",
                title: "BAGGAGE POLICY ON CONNECTING FLIGHTS",
                content: (
                    <>
                        When there are two or more airlines involved for
                        connecting flights, you may have to reclaim your bags at
                        the connecting airport and check-in again to continue
                        your journey. In these cases, if you have excess
                        baggage, you will have to pay any excess baggage fee
                        assessed by each airline. We recommend traveling light
                        to reduce these costs.
                    </>
                ),
            },
            {
                id: "airlinesScheduleChangesFlightCancellations",
                title: "AIRLINES SCHEDULE CHANGES/FLIGHT CANCELLATIONS",
                content: (
                    <>
                        <b className='text-xl text-gray-800'>
                            Airline Policy on Schedule Changes:
                        </b>{" "}
                        <br />
                        <br />
                        All Airlines have differing rules and policies regarding
                        schedule changes, which are beyond our control. <br />
                        <br />
                        Due to the operational needs of each airline, changes
                        are often made to the flights that they are currently
                        operating. Often these changes are a prediction of
                        travel needs for a future dates but can also reflect
                        same day changes. Types of changes could be: flight
                        number changes, time changes, routing, date changes and
                        or cancellations. Cancellations include when an airline
                        has stopped or temporarily canceled service to certain
                        cities, or stopped service on certain days of the week.{" "}
                        <br />
                        <br />
                        <b className='text-xl text-gray-800'>Cancellations:</b>
                        <br />
                        <br />
                        <b className='text-gray-800'>
                            Reasons for cancellations or schedule changes may
                            include:
                        </b>{" "}
                        <br />
                        <br /> <br />
                        Peak or high travel seasons;
                        <br /> <br />
                        Low travel season;
                        <br /> <br />
                        Airport terminal or gate changes;
                        <br /> <br />
                        Fuel prices;
                        <br /> <br />
                        Civil unrest;
                        <br /> <br />
                        Natural disasters Bankruptcy.
                        <br /> <br />
                        <br />
                        HAMS does not assume any liability whatsoever for
                        cancelled flights, flights that are missed, or flights
                        not connecting due to any scheduled changes made by the
                        airlines.
                        <br />
                        <br />
                        <br />
                        <b className='text-gray-800'>
                            Our Policy on Schedule Changes:
                        </b>
                        <br />
                        <br />
                        <br />
                        We make every attempt to notify the customer of any
                        schedule changes. It is always best to contact the
                        airline to reconfirm you flights within 72 hours of
                        departure. <br />
                        <br />
                        <br />
                        <b className='text-gray-800'>
                            Customers Obligations:
                        </b>{" "}
                        <br />
                        <br />
                        It is always important for the customer to reconfirm
                        their flights with the airlines 24 to 72 hours prior to
                        departure, especially if they are already traveling. You
                        should periodically check emails for updates regarding
                        flight schedules and respond in a timely manner.
                    </>
                ),
            },
            {
                id: "unaccompaniedMinor",
                title: "UNACCOMPANIED MINOR",
                content: (
                    <>
                        Tickets will not be sold directly to unaccompanied
                        minors age 18 and under. Each airline sets its own
                        policies and regulations for children traveling without
                        adult supervision. Please check with the airline
                        directly for minor age requirements, as the following
                        items may change:
                        <br />
                        <br />
                        Some airlines may not allow unaccompanied minors to
                        travel without an adult.
                        <br />
                        <br />
                        Some airlines will only allow unaccompanied minors to
                        travel on non-stop flights.
                        <br />
                        <br />
                        Many airlines may require additional fees to be paid at
                        check-in.
                        <br />
                        <br />
                        You must call the airline to verify rules and
                        restrictions for unaccompanied minor(s) traveling alone.
                    </>
                ),
            },
            {
                id: "visaAndEntryRequirements",
                title: "VISA AND ENTRY REQUIREMENTS",
                content: (
                    <>
                        All customers are advised to verify travel documents
                        (transit visa/entry visa) for the country through which
                        they are transiting and/or entering. HAMS will not be
                        responsible if proper travel documents are not available
                        and you are denied entry or transit into a Country.
                        <br />
                        <br />
                        Your transaction with HAMS does not guarantee entrance
                        to the country of destination. Traveler understands that
                        HAMS accepts no responsibility for determining
                        passenger&apos;s eligibility to enter or transit through
                        any specific country. Information, if any, given by HAMS
                        &apos;s employees must be verified with government
                        authorities. Such information does not imply
                        responsibility on HAMS&apos;s behalf.
                    </>
                ),
            },
            {
                id: "ticketProcessingErrorsIssuesDisclaimer",
                title: "TICKET PROCESSING ERRORS/ISSUES DISCLAIMER",
                content: (
                    <>
                        HAMS is not responsible for any tickets that could not
                        be processed due to inaccurate and/or incomplete
                        verification of credit card information, and/or credit
                        card decline and/or due to technical glitches. In
                        extremely rare cases, airlines fares may change prior to
                        the completion of ticketing process, in which case,
                        HAMS. reserves the right to notify you of any fare
                        changes within three (3) business days. In the event
                        that your original flights cannot be honored, HAMS will
                        make every effort to provide alternative flight/fare
                        options. If we are unsuccessful in contacting you, we
                        reserve the right to cancel your booking. We will send
                        an e-mail advising you of the cancellation and this will
                        serve as final notification. HAMS will not be
                        responsible for any fare increase and you have the right
                        to cancel the booking at no cost to you in these cases.
                        All fares are not guaranteed until ticketed.
                    </>
                ),
            },
            {
                id: "humanError",
                title: "HUMAN ERROR",
                content: (
                    <>
                        If any of our agents, make a mistake in the booking
                        process we shall make reasonable attempts to rectify
                        these errors at the time of occurrence. HAMS stands
                        committed to providing compensation up to a maximum of
                        the entire service fees that HAMS has collected for that
                        booking in addition to a 2000 BDT coupon as redemption
                        towards purchases from HAMS within 12 months in the
                        future. You must notify us of errors within 24 hours of
                        receiving your itinerary. Beyond this 24-hour period,
                        HAMS will not be responsible for these errors.
                    </>
                ),
            },
            {
                id: "itineraryReConfirmation",
                title: "ITINERARY RE-CONFIRMATION",
                content: (
                    <>
                        It is the responsibility of the traveler who has booked
                        with us online or has made the booking directly with a
                        customer service agent to review and reconfirm names,
                        dates, flight numbers, airlines and routing including
                        all airport changes. If you discover any discrepancy in
                        your itinerary, you are requested to immediately contact
                        a HAMS customer service agent within 4 hours from the
                        time the booking was completed.
                        <br />
                        <br />
                        If you fail to contact us by phone within 4 hours of
                        completing the booking, we shall consider the booking
                        you have made to be acceptable to you and we do not
                        assume any liability thereafter for any discrepancy in
                        your booking.
                        <br />
                        <br />
                        You are requested to review and save the itinerary.
                    </>
                ),
            },
            {
                id: "hotelReservationsRulesAndRegulations",
                title: "HOTEL RESERVATIONS RULES AND REGULATIONS",
                content: (
                    <>
                        Photos of the hotel and information provided regarding
                        the service, amenities, products, etc. have been
                        provided to us by the supplier. HAMS accepts no
                        responsibility for any changes that the supplier has not
                        updated.
                        <br />
                        <br />
                        Specific features such as bedding type or non-smoking
                        rooms are simply a request and not guaranteed unless
                        otherwise specified by the hotel. While most hotels will
                        strive to honor your requests, neither HAMS nor the
                        hotel will guarantee that your request will be
                        honored.These rates will require you to present
                        identification at the time of check-in to prove that
                        you&apos;re eligible for those special rates. Hotel
                        properties are not obligated to honor these rates if you
                        do not qualify or if you don&apos;t have identification
                        confirming your eligibility.
                        <br />
                        <br />
                        No refunds will be issued for unused room nights due to
                        early departures.
                        <br />
                        <br />
                        Some hotels offer an Airport Shuttle as an extra
                        service. You should always contact the hotel prior to
                        check-in to find out availability and pricing.
                        <br />
                        <br />
                        Booking Bonus&apos; that are offered by the hotels, such
                        as free breakfast, tours, etc. are all subject to change
                        and availability and are controlled by the hotel
                        directly.
                    </>
                ),
            },
            {
                id: "prePaidReservations",
                title: "Pre-Paid Reservations:",
                content: (
                    <>
                        Prepaid Reservations are charged to your credit card at
                        the time of booking. This charge includes Full Base
                        Amount (room only) of the reservation. Resort fees,
                        energy surcharges and cleaning fees, may be charged on a
                        daily basis. They also will collect for incidentals such
                        as meals, movies, games, wet bar, parking, and phone
                        calls. Rates are only guaranteed at the time of booking.
                    </>
                ),
            },
            {
                id: "prePaidBookingVouchers",
                title: "Pre-Paid Booking Vouchers:",
                content: (
                    <>
                        Some hotels will require a voucher at check-in.HAMS will
                        send the voucher to the email address supplied to us
                        when your booking was made. It is always recommended you
                        have a copy of your email confirmation with you at
                        check-in.
                    </>
                ),
            },
            {
                id: "bookNowPayLaterBookings",
                title: "Book Now, Pay Later Bookings:",
                content: (
                    <>
                        Book Now, Pay Later Reservations use your credit card to
                        hold your reservation until you arrive for check-in.
                        HAMS strongly recommends that you confirm Book Now, Pay
                        Later reservations directly with the hotel, no sooner
                        than 24 hours prior to check-in. On some non-prepaid
                        hotels, hotel companies require a deposit up to the full
                        amount of the stay. These rates are usually
                        non-refundable, with no modifications allowed.
                    </>
                ),
            },
            {
                id: "mealPlans",
                title: "Meal Plans:",
                content: (
                    <>
                        Meal Plan are the sort of dining arrangements that you
                        have selected for your hotel stay. For example, you may
                        have selected a hotel which cooks all your meals for you
                        and which are included in the price. Or, you may have
                        selected an apartment with cooking facilities, which
                        means you arrange your own meals. Meal Plan meanings and
                        abbreviations are as follows:
                        <br />
                        <br />
                        Room Only (RO) means that no meals will be included in
                        the price you have paid for your accommodation/vacation
                        package. Self-Catering (SC) means that no meals are
                        included in the cost of your accommodation/vacation
                        package, but you will be provided with catering
                        facilities in your accommodation to cook light meals.
                        <br />
                        <br />
                        Bed and Breakfast (BB) means that breakfast is included
                        in the price you have paid for your
                        accommodation/vacation package.
                        <br />
                        <br />
                        Half Board (HB) means that your breakfast and evening
                        meal is included in the price you have paid for your
                        accommodation/vacation package. In some cases, you can
                        choose to receive lunch instead of breakfast - the hotel
                        will confirm this upon arrival.
                        <br />
                        <br />
                        Full Board (FB) means that breakfast, lunch and evening
                        meals are included in the price you have paid for your
                        accommodation/vacation package.
                        <br />
                        <br />
                        All-Inclusive (AI) means all meals and locally produced
                        drinks are included (until midnight, when a cash bar
                        system may operate. This may vary depending on the
                        accommodation). You may also be entitled to
                        entertainment and non-motorized water sports laid on by
                        your hotel.
                        <br />
                        <br />
                        Photos of the hotel and information provided regarding
                        the service, amenities, products, etc. have been
                        provided to us by the supplier. HAMS accepts NO
                        RESPONSIBILITY for any changes that the supplier has not
                        updated.
                        <br />
                        <br />
                        Specific features such as bedding type or non-smoking
                        rooms are simply a request and not guaranteed unless
                        otherwise specified by the hotel. While most hotels will
                        strive to honor your requests, neither HAMS nor the
                        hotel will guarantee that your request will be honored.
                        <br />
                        <br />
                        Booking Bonus&apos; that are offered by the hotels, such
                        as free breakfast, tours, etc. are all subject to change
                        and availability and are controlled by the hotel
                        directly.
                    </>
                ),
            },
            {
                id: "hotelChangesCancellationsAndRefunds",
                title: "Hotel Changes, Cancellations and Refunds:",
                content: (
                    <>
                        Any changes or cancellations should be requested by
                        calling customer service.
                    </>
                ),
            },
            {
                id: "noShowPolicy",
                title: "No-Show Policy:",
                content: (
                    <>
                        A No-Show is when you fail to show up to check-in for
                        your reservation without prior notification. If you are
                        not going to check in for your reservation you will need
                        to contact the hotel directly. Depending on the hotel
                        restrictions you may be charged penalties or lose the
                        entire pre-paid or deposit amount of you booking.
                    </>
                ),
            },
            {
                id: "hotelConfirmation",
                title: "Hotel Confirmation:",
                content: (
                    <>
                        Hotels may take up to 72 hours to return a confirmation
                        number. The process starts when you book the hotel on
                        our Site. We will send you an email stating that your
                        reservation is confirmed. This is to let you know that
                        we have received your request. If you do not receive any
                        email communication from HAMS , please email at
                        <span className='text-green-600'>
                            {" "}
                            info@hamsbd.com{" "}
                        </span>
                        and include the confirmation number and a contact phone
                        number. We suggest you to reconfirm your hotel
                        reservation 24 hours prior to check in.
                        <br />
                        <br />
                        In many cases, the hotel will not receive the actual
                        guest name until 72 hours prior to arrival. Your
                        reservation is secured and guaranteed once you have
                        received the final confirmation email and or voucher. We
                        recommend you contact the property within three (3) days
                        of your scheduled arrival to confirm your details.
                    </>
                ),
            },
            {
                id: "allAboutChangesCancellationsAndRefunds",
                title: "All About Changes, Cancellations and Refunds",
                content: (
                    <>
                        Any changes or cancellations should be requested by
                        calling customer service.
                        <br />
                        <br />
                        We understand that sometimes plans change. Listed below
                        are additional cancellation and change policies. Some
                        policies may vary by property: <br />
                        <br />
                        <ul className='list-decimal pl-8'>
                            <li>For high-demand special events</li>
                            <li>
                                Cancellations or modifications to the
                                reservation may be subject to HAMS cancellation
                                fees in addition to fees charged by the
                                property. Please check
                                <a href='#' className='text-green-600'>
                                    our fees and exceptions
                                </a>
                                for the charges of HAMS
                            </li>
                            <li>
                                Changes to dates, reduction in rooms or any
                                other amendments are subject to fees based on
                                the hotel&apos;s policy.
                            </li>
                            <li>
                                No credits can be issued for unused room nights
                                due to early departures.
                            </li>
                            <li>
                                Stay extensions require a new reservation.
                                Original room rate is not guaranteed.
                            </li>
                            <li>
                                Refunds for early departures, no-shows or
                                cancellations are at the sole discretion of HAMS
                                and HAMS &apos;s hotel suppliers.
                            </li>
                            <li>
                                We reserve the right to be indemnified by you in
                                full against all loss, costs, damages, charges
                                and expenses incurred by us as a result of any
                                cancellation for any reason.
                            </li>
                            <li>
                                You must call HAMS if you have any issues during
                                check-in or check-out. Many issues may be
                                resolved by a simple phone call.
                            </li>
                        </ul>
                    </>
                ),
            },
        ],
        bn: [
            {
                id: "welcome",
                content: (
                    <>
                        HAMS (&apos;&apos;HAMS&apos;&apos;, &apos;&apos; HAMS
                        FLY&apos;&apos;, &apos;&apos;আমরা&apos;&apos;,
                        &apos;&apos;আমাদের&apos;&apos;,
                        &apos;&apos;আমাদিগের&apos;&apos;) ওয়েবসাইটে
                        (সমষ্টিভুক্তভাবে, &apos;&apos;সাইট&apos;&apos;) আপনাকে
                        স্বাগতম। এই সাইটটি আমরা কেবলমাত্র যাত্রীদের সহায়তার
                        জন্য প্রদান করে থাকি; ভ্রমণ সম্পর্কিত তথ্য সরবরাহ,
                        যাত্রা-সংশ্লিষ্ট পণ্য ও পরিষেবার উপলব্ধতা নির্ধারণ, বৈধ
                        বুকিং তৈরি বা ভ্রমণ সাপ্লায়ার দের সাথে ব্যবসায়িক লেনদেন
                        করাই আমাদের একমাত্র উদ্দ্যেশ্য। সাইটের ব্যবহারকে
                        নিয়ন্ত্রণ করার জন্য নিম্নলিখিত শর্তাদি প্রয়োগ করা হয়।
                        এই সাইটটি ব্যবহার করে যাত্রা সংক্রান্ত তথ্য পর্যালোচনা
                        বা যাত্রা বুক করতে (এই সাইট বা আমাদের কল সেন্টারের
                        মাধ্যমে টেলিফোন বা ইমেলের মাধ্যমে), বা অন্য কোন
                        উদ্দ্যেশ্যে, HAMS Ltd. এর সাথে ভ্রমণ বুক করার যে কোন বৈধ
                        রিজার্ভেশনে আপনি এই শর্তাবলীর সাথে সম্মত হন এবং সম্মত হন
                        যে তারা আমাদের সাথে করা যেকোনো ভ্রমণ রিজার্ভেশন
                        নিয়ন্ত্রণ করে। যদি আপনি এই শর্তাদিগুলির কোনও অংশে সম্মত
                        না হন, তবে আপনাকে সাইটটি ব্যবহার ও আমাদের সঙ্গে ভ্রমণ
                        বুক করা থেকে বিরত থাকতে হবে। আমরা পূর্ব বিজ্ঞপ্তি ছাড়াই
                        যে কোন সময়ে এই শর্তাবলী সংশোধন করার অধিকার রিজার্ভেশন
                        করি। সমস্ত সংশোধিত শর্তাবলী স্বয়ংক্রিয়ভাবে কার্যকর হয়
                        যখন এই নিয়ম ও শর্তাবলী আপডেট করা হয়। নিয়ম ও শর্তাবলীতে
                        পরিবর্তন করে পোস্ট করার পরে আপনার সাইটটির ক্রমাগত
                        ব্যবহারের অর্থ হলো আপনি সেই পরিবর্তনগুলোকে স্বীকার
                        করছেন। যে কোন পরিবর্তন পর্যালোচনা করতে অনুগ্রহ করে
                        পর্যায়ক্রমে এই পৃষ্ঠায় ফিরে যেতে হবে। HAMS তাঁর নিজস্ব
                        ব্র্যান্ড নাম &apos;&apos;HAMS&apos;&apos; নিয়ে কাজ করে
                        যার মূলমন্ত্র &apos;&apos;All About Your
                        Jounrey&apos;&apos;। HAMS সম্পর্কিত এই নিয়ম ও শর্তাবলীতে
                        প্রণীত যে কোন এবং সমস্ত বিবৃতিগুলো সমস্ত দাবিত্যাগ সহ
                        আমাদের সহযোগী, সহায়ক সংস্থা এবং মুল সংস্থাগুলো পক্ষ থেকে
                        করা হয়।
                        <br /> <br />
                        HAMS সম্পর্কিত এই শর্তাবলী এবং শর্তাবলীতে যে কোনও এবং
                        সমস্ত বিবৃতি আমাদের অনুমোদিত, সহায়ক এবং প্যারেন্ট
                        কোম্পানিগুলির পক্ষেও করা হয়, সমস্ত ডিসক্লেমার সহ।
                    </>
                ),
            },
            {
                id: "SafeShopping",
                title: "নিরাপদ শপিং গ্যারান্টি",
                content: (
                    <>
                        HAMS আপনার বিশ্বাসকে মূল্য দেয়। আমরা আমাদের প্রতিষ্ঠানের
                        মধে আপনার ব্যক্তিগত তথ্য সুরক্ষিত করার জন্য যুক্তিসঙ্গত
                        সাংগঠনিক, প্রযুক্তিগত এবং প্রশাসনিক ব্যবস্থার ব্যবহার
                        করতে চাই। দুর্ভাগ্যবশত কোন তথ্য ট্রান্সমিশন বা স্টোরেজ
                        সিস্টেম ১০০% সুরক্ষিত হওয়ার নিশ্চয়তা দেয়া যায় না। আপনার
                        যদি বিশ্বাস করার কারণ থাকে যে, আমাদের শাথে আপনার সংযোগ
                        আর নিরাপদ নয় (উদাহরণস্বরুপ, আপনি যদি মনে করেন যে আপনার
                        অ্যাকাউন্টের নিরাপত্তায় ব্যঘাত ঘটেছে), অনুগ্রহ করে
                        অবিলম্বে{" "}
                        <span className='text-green-600'> +৮৮০ ২-৪৮৯৫৭৭৩ </span>{" "}
                        বা{" "}
                        <span className='text-green-600'>info@hamsbd.com</span>{" "}
                        এ গ্রাহক পরিষেবাকে অবহিত করুন যাতে আমরা সমস্যাটি সমাধান
                        করার চেষ্টা করার সুযোগ পাই।
                    </>
                ),
            },
            {
                id: "importantNotice",
                title: "গুরুত্বপূর্ণ বিজ্ঞপ্তি",
                content: (
                    <>
                        এই শর্তাদি স্বীকার করে যে, আপনি নীচের ম্যান্ডেটরি
                        আরবিট্রেশান অ্যান্ড ক্লাস অ্যাকশান ওয়েভার এর সাথে সম্মত
                        হচ্ছেন।
                    </>
                ),
            },
            {
                id: "GeneralDisclaimer",
                title: "জেনারেল ডিসক্লেইমার",
                content: (
                    <>
                        HAMS প্রধান হিসাবে কাজ করে না তবে তৃতীয় পক্ষের
                        বিক্রেতাদের সাথে ব্যবস্থা করে, এবং তা শুধু বিমান
                        সংস্থাতেই সীমাবদ্ধ নয়, হোটেল, গাড়ি ভাড়া এজেন্সি, ট্যুর
                        অপারেটর এবং কনসোলিডেটর, (প্রতিটি &apos;&apos;ভ্রমণ
                        সাপ্লায়ার&apos;&apos;) ভ্রমণ সম্পর্কিত পরিষেবাগুলির জন্য
                        যা অন্তর্ভুক্ত, সীমাহীন, বিমান পরিবহন, আবাসস্থল, এবং
                        গাড়ি ভাড়া (প্রতিটি একটি &apos;&apos;সার্ভিস
                        এলিমেন্ট&apos;&apos;)। <br /> <br />
                        এই সাইটটি ব্যবহার করে, আপনি স্বীকার করেন যে HAMS এবং
                        অ্যাফিলিয়েট কোম্পানি দ্বারা অফারকৃত রেটগুলি HAMS এবং
                        ট্রাভেল সাপ্লায়ার দের মধ্যে আলোচনার ফলস্বরূপ এবং তাদের
                        পরিষেবা, কর এবং অন্যান্য চার্জগুলির জন্য তাদের দ্বারা
                        সংরক্ষিত নির্দিষ্ট ফিগুলি অন্তর্ভুক্ত আছে। এই সাইটের
                        মাধ্যমে যেকোনো ভ্রমণ সাপ্লায়ার এর সাথে বুকিং করার সময়
                        আপনি HAMS এবং অ্যাফিলিয়েট সংস্থাগুলিকে রিজার্ভেশন বুক
                        করতে বা প্রদর্শিত মোট মূল্যের জন্য ট্রাভেল সাপ্লায়ারদের
                        সাথে আপনার পক্ষে একটি চুক্তিতে প্রবেশ করতে অনুমোদন করেন,
                        ট্রাভেল সাপ্লায়ার্স বা HAMS এর সেবা সংক্রান্ত ফিস এবং
                        প্রযোজ্য কর বা চার্জসহ।
                        <br /> <br />
                        HAMS সাইটে কোনরুপ ত্রুটি বা ভুলের জন্য দায়ী থাকবে না,
                        অথবা ট্রাভেল সাপ্লায়ারদের যাদের কাছ থেকে আপনি এই সাইটের
                        মাধ্যমে সেবা গ্রহণ করেন, যা শুধুমাত্র বিমান সংস্থার
                        মধ্যে সীমাবদ্ধ নয় এবং হোটেল, ক্রুজ লাইন, রেলপথ, গাড়ি
                        ভাড়া এজেন্সি, ট্যুর অপারেটর এবং কনসোলিডেটর, ছুটির
                        প্যাকেজ, কার্যক্রম সাপ্লায়ার, ভ্রমণকালীন সেবা প্রদানকারী
                        এবং বীমা প্রদানকারীকে ও রয়েছে—তাদের ব্যর্থতার দায় আমরা
                        নিবো না। এফইবিডি Ltd. ভ্রমণ ব্যবস্থাপনা পরিষেবা প্রদানের
                        ক্ষেত্রে, কোনও বহিরাগত সাপ্লায়ার দ্বারা সরবরাহ করা পণ্য
                        বা পরিষেবাগুলির অনুমোদন, গ্যারান্টি বা বীমা করে না, এই
                        জাতীয় সাপ্লায়ারদের আর্থিক অবস্থান বা আর্থিক ক্ষতির ফলে
                        যে কোনও ক্ষতি থেকে আপনাকে ক্ষতিপূরণ দেয়। যদি কোনও
                        সাপ্লায়ার আপনাকে পরিষেবা প্রদান করার আগে ডিফল্ট করে, তবে
                        ফেরতের জন্য আপনার একমাত্র অবলম্বন হবে ডিফল্টিং
                        সরবরাহকারী, যদি না এই ধরনের ক্ষতি শুধুমাত্র HAMS দ্বারা
                        সৃষ্ট হয়।
                        <br /> <br />
                        HAMS ভ্রমণ ব্যবস্থাপনা সেবা প্রদানের ক্ষেত্রে অনুমোদন
                        করে না (ক) পণ্য বা সেবা নিশ্চিতকরণ বা বীমাকরণ, যা বাইরের
                        সাপ্লায়ার দ্বারা সরবরাহ করা হয়, (খ) এইরূপ সাপ্লায়ার এর
                        আর্থিক অবস্থা বা এইরূপ সাপ্লায়ার এর আর্থিক অবস্থার ফলে
                        যে কোন লোকসান হতে আপনাকে পরিশোধ। যদি কোনও সাপ্লায়ার
                        আপনাকে পরিষেবা প্রদান করার আগে খেলাপি হয় তবে অর্থ পরিশোধ
                        করা হয়েছে, তবে ফেরতের জন্য আপনার একমাত্র সহায়তা খেলাপি
                        সাপ্লায়ার হবে, যদি না এই জাতীয় ক্ষতিটি কেবল HAMS এর
                        কারণে হয়। সেই পরিস্থিতিতে, যেখানে কোনও সাপ্লায়ার পরিষেবা
                        প্রদানের আগে ডিফল্ট হয়, আপনি আইন বা সংবিধি দ্বারা
                        অনুমোদিত রিফান্ডের জন্য সাপ্লায়ার র বিরুদ্ধে যে কোনও
                        আশ্রয় অনুসরণ করতে পারেন।
                        <br /> <br />
                        এখানে স্পষ্টভাবে বলা ছাড়া, HAMS বা তার কর্মীদের
                        নিয়ন্ত্রণের বাইরে ভ্রমণ পরিষেবা সম্পর্কিত পদক্ষেপগুলির
                        জন্য কোনও দায়িত্ব গ্রহণ করে না। HAMS কোনও কাজের জন্য
                        দায়ী বা দায়বদ্ধ নয়, ভ্রান্তি, অপচয়, আঘাত, ক্ষতি,
                        দুর্ঘটনা, ক্ষতি, বিলম্ব, অকার্যকারিতা, অনিয়ম, অথবা তার
                        কোন পরিণতি, যা অবহেলার কারণে ঘটতে পারে, অথবা কোন ট্রাভেল
                        সাপ্লায়ার র ডিফল্ট বা অন্য কোন কাজ বা নিষ্ক্রিয়তা। HAMS
                        কোনও ভ্রমণ পরিষেবার জন্য নির্ধারিত সময়সূচী বা সরঞ্জাম বা
                        আবাসনে মূল্যের পরিবর্তন বা পরিবর্তনের জন্য দায়বদ্ধ থাকবে
                        না, যা এই জাতীয় পরিষেবার জন্য বুকিং এবং অর্থ প্রদানের
                        পরে ঘটে। HAMSকোনও বাতিল, ওভারবুকিং, বিলম্ব, পুনরায়
                        রুটিং, ধর্মঘট, কোনও আবহাওয়ার ঘটনা বা সরকারী ঘটনাগুলির
                        জন্য দায়বদ্ধ থাকবে না কারণ এটি আমাদের সাথে করা আপনার
                        ভ্রমণ রিজার্ভেশন কে প্রভাবিত করে। HAMS ভ্রমণ পণ্য এবং
                        পরিষেবাগুলির সাপ্লায়ার দ্বারা উপলব্ধ ভ্রমণ পণ্য এবং
                        পরিষেবাগুলির চিত্রের জন্য দায়বদ্ধ হবে না, যার মধ্যে ছবি,
                        তালিকাভুক্ত সুযোগ-সুবিধা, রেটিং এবং ডিসকাউন্টের মধ্যে
                        সীমাবদ্ধ নয়।
                        <br /> <br />
                        HAMS একটি সেবা হিসাবে কাজ করে যা খুচরা ট্রাভেল এজেন্ট
                        এবং ভোক্তাদের মূল্য সংযোজন সেবা প্রদান করে। HAMS এর উপর
                        কোনও নিয়ন্ত্রণ নেই এবং সাপ্লায়ার দের ক্রিয়াকলাপের জন্য
                        কোনও দায়বদ্ধতা গ্রহণ করে না যার কাছ থেকে এটি ভ্রমণ পণ্য
                        বা পরিষেবাগুলি পায়।
                        <br /> <br />
                        HAMS চূড়ান্ত মুদ্রা রূপান্তর বা হার জন্য দায়বদ্ধ হবে না
                        যখন একটি ভ্রমণ রিজার্ভেশন আমাদের সঙ্গে আন্তর্জাতিক ভ্রমণ
                        পণ্য এবং পরিষেবার জন্য করা হয় পরে প্রদান করা হয়। আপনি
                        একমত এবং স্বীকার করেন যে মুদ্রার হার পরিবর্তিত হয় এবং
                        স্থানীয় মুদ্রায় সাইটে যে কোনও উদ্ধৃত মূল্য একটি
                        নির্দেশিকা, এবং স্থানীয় মুদ্রায় পাশে বাধ্যবাধকতা নয় একটি
                        নির্দেশিকা, এবং ভ্রমণ সাপ্লায়ার বা আমাদের জন্য
                        বাধ্যবাধকতা নয়।
                        <br /> <br />
                        একবার নির্দিষ্ট ভ্রমণ রিজার্ভেশন করা হলে এবং তার জন্য
                        অর্থ প্রদান করা হলে তা সম্পূর্ণ অ-ফেরতযোগ্য হতে পারে বা
                        ভ্রমণ পণ্য এবং পরিষেবা সাপ্লায়ার র কাছ থেকে বাতিল বা
                        ফেরত চাওয়ার ক্ষেত্রে একটি জরিমানা জড়িত থাকতে পারে। একবার
                        টিকিট ইস্যু করার পরে বাতিল এবং ফেরতের জন্য জরিমানা জড়িত
                        থাকতে পারে। টিকিটে মুদ্রিত মূল্যের ওপর আমাদের নিয়ন্ত্রণ
                        নেই, যদিও কিছু টিকিটে বিটি (বাল্ক ভাড়া) ছাপা থাকতে পারে,
                        কিছুতে নির্দিষ্ট মূল্য থাকতে পারে, যা সংগ্রহ করা ভাড়ার
                        চেয়ে ভিন্ন (নিম্ন বা উচ্চ) হতে পারে।
                        <br /> <br />
                        বিমানসংস্থাগুলির ব্যবহার, পরিষেবার শ্রেণি, গন্তব্য,
                        বছরের সময় (নিম্ন, মধ্য বা উচ্চ মরসুম), প্রদত্ত আগাম
                        বিজ্ঞপ্তি, ন্যূনতম থাকার প্রয়োজনীয়তা পূরণ এবং ফ্লাইট লোড
                        সহ বেশ কয়েকটি কারণের উপর নির্ভর করে ছাড় দেওয়া হয়।
                        <br /> <br />
                        আমাদের সাইটে প্রচারিত অন্যান্য বিজ্ঞাপনদাতার পণ্য এবং
                        পরিষেবাগুলির গ্যারান্টি, অনুমোদন, বৈধতা বা প্রচার করে
                        না। আমাদের সাথে বুকিংয়ের মাধ্যমে আপনার এবং একটি ভ্রমণ
                        সাপ্লায়ার র মধ্যে একটি চুক্তি গঠন করা যেতে পারে, এবং
                        অতিরিক্ত শর্তাদি এবং শর্তাবলী আপনার বুকিং এবং ভ্রমণ
                        সম্পর্কিত পণ্য এবং পরিষেবা ক্রয়ের ক্ষেত্রে প্রযোজ্য হতে
                        পারে। আপনি এতদ্বারা যে কোনও ভ্রমণ সাপ্লায়ার দ্বারা
                        আরোপিত ক্রয়ের সমস্ত শর্তাবলী এবং শর্তাবলী দ্বারা আবদ্ধ
                        হতে সম্মত হন যার সাথে আপনি চুক্তি করতে বেছে নেন,
                        অন্তর্ভুক্ত, তবে সীমিত নয়, ভ্রমণ সাপ্লায়ার র নিয়মাবলী
                        এবং ভাড়ার প্রাপ্যতা এবং ব্যবহার সম্পর্কিত বিধিনিষেধের
                        সাথে যথাযথ এবং মেনে চলার সময় সমস্ত পরিমাণ অর্থ প্রদান,
                        পণ্য, অথবা পরিষেবা। কিছু ট্রাভেল সাপ্লায়ার আপনাকে আপনার
                        থাকার সময় বা সংরক্ষিত পণ্য বা পরিষেবা ব্যবহার করার সময়
                        অতিরিক্ত ব্যয়ের জন্য চেক-ইনের উপর একটি ক্রেডিট কার্ড বা
                        নগদ জমা উপস্থাপন করতে বাধ্য করতে পারে। এই ধরনের ডিপোজিট
                        আপনার হোটেল, গাড়ি বা বিমান টিকিট বুকিংয়ের জন্য HAMS
                        কর্তৃক প্রাপ্ত কোনও পেমেন্টের সাথে সম্পর্কিত নয়। আপনি
                        বুঝতে পারছেন যে, ভ্রমণ সাপ্লায়ার এর নিয়ম এবং বিধিনিষেধ
                        লঙ্ঘনের ফলে আপনার রিজার্ভেশন বাতিল হতে পারে, (ক)
                        সংশ্লিষ্ট সার্ভিস এলিমেন্ট বা সার্ভিসে প্রবেশের অনুমতি
                        প্রদান না করা, এই জাতীয় রিজার্ভেশন (গুলি) এর জন্য
                        প্রদত্ত কোনও পরিমাণ বাজেয়াপ্ত করার ক্ষেত্রে, এবং/অথবা এই
                        ধরনের লঙ্ঘনের ফলে আমরা যে কোন খরচের জন্য আপনার
                        অ্যাকাউন্ট ডেবিট করতে পারি।
                    </>
                ),
            },
            {
                id: "compassionExceptionPolicy",
                title: "কম্পাশন এক্সেপশন পলিসি (সিইপি)",
                content: (
                    <>
                        নির্দিষ্ট কিছু গ্রাহক নীচের আমাদের কম্পাশন এক্সেপশন
                        পলিসি (সিইপি) এ বর্ণিত বাতিল, ফেরত বা টিকিট পরিবর্তন
                        পরিষেবা ফি থেকে ছাড় পাওয়ার যোগ্য হতে পারেন: <br />{" "}
                        <br />
                        <table className='min-w-full text-base border'>
                            <thead>
                                <tr className='border-b'>
                                    <td className='bg-green-50 p-4'>ধরণ</td>
                                    <td className='bg-green-50 p-4 border-x'>
                                        ধরণ নির্বাচিত হওয়ার যোগ্যতা কমিশন
                                    </td>
                                    <td className='bg-green-50 p-4'>কমিশন</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b'>
                                    <td className='p-2 '>
                                        বাংলাদেশ সেনাবাহিনী/নৌবাহিনী/বিমান
                                        বাহিনী (যাত্রী ও নিকটবর্তী পরিবার)
                                    </td>
                                    <td className='p-2 border-x'>
                                        মিলিটারি আইডি দিতে হবে
                                    </td>
                                    <td className='p-2 '>
                                        ফ্লাইট বা টিকেট পরিবর্তন পরিষেবাতে ১০০%
                                        ছাড়
                                    </td>
                                </tr>

                                <tr className='border-b'>
                                    <td className='p-2 '>
                                        গ্রাহকরা পরিষেবা আবহাওয়া, প্রাকৃতিক
                                        দুর্যোগ বা অন্যান্য অনিয়ন্ত্রিত ঘটনা
                                        দ্বারা সরাসরি প্রভাবিত হয়
                                    </td>
                                    <td className='p-2 border-x'>
                                        যদি এয়ারলাইন ফি পরিবর্তন/বাতিল করার
                                        অপেক্ষায় থাকে, আমরা অনুসরণ করবো
                                    </td>
                                    <td className='p-2 '>
                                        ফ্লাইট বা টিকেট পরিবর্তন পরিষেবাতে ১০০%
                                        ছাড়
                                    </td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='p-2 '>
                                        শোক (যাত্রী এবং নিকটবর্তী পরিবারকে
                                        প্রভাবিত করে)
                                    </td>
                                    <td className='p-2 border-x'>
                                        অন্ত্যোষ্টিক্রিয়া কেন্দ্র থেকে চিঠি
                                        প্রয়োজন
                                    </td>
                                    <td className='p-2 '>
                                        ফ্লাইট বা টিকেট পরিবর্তন পরিষেবাতে ১০০%
                                        ছাড়
                                    </td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='p-2 '>
                                        দৃষ্টি প্রতিবন্ধী গ্রাহক
                                    </td>
                                    <td className='p-2 border-x'>
                                        গ্রাহককে অবশ্যই জানাতে হবে যে তার দৃষ্টি
                                        প্রতিবন্ধকতা রয়েছে এবং তিনি ওয়েব সাইট
                                        ব্যবহার করতে অক্ষম
                                    </td>
                                    <td className='p-2 '>
                                        ফ্লাইট বা টিকেট পরিবর্তন পরিষেবাতে ৫০%
                                        ছাড়
                                    </td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='p-2 '>
                                        সিনয়র সিটিজেন (৬৫ বছর বা তার বেশি)
                                    </td>
                                    <td className='p-2 border-x'>
                                        জন্ম তারিখ এর প্রমাণ প্রয়োজন
                                    </td>
                                    <td className='p-2 '>
                                        ফ্লাইট বা টিকেট পরিবর্তন পরিষেবাতে ৫০%
                                        ছাড়
                                    </td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='p-2 '>
                                        বয়স (১৮ থেকে ২৭ এর মধ্যে)
                                    </td>
                                    <td className='p-2 border-x'>
                                        জন্ম তারিখের প্রমাণ প্রয়োজন
                                    </td>
                                    <td className='p-2 '>
                                        ফ্লাইট বা টিকেট পরিবর্তন পরিষেবাতে ৫০%
                                        ছাড়
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br /> <br />
                        তাৎক্ষণিক পরিবার হিসাবে সংজ্ঞায়িত করা হয়: জীবনসঙ্গী,
                        গার্হস্থ্য সঙ্গী, সন্তান-সন্ততি, বাবা-মা, ভাই-বোন,
                        দাদা-দাদি, নাতি-নাতনি, ফুফু, চাচা-চাচী, ভাগ্নে-ভাতিজা।
                        জৈবিক সম্পর্ক হতে হবে।
                        <br /> <br />
                        দয়া করে লক্ষ্য করুন: উপরোক্ত সিইপি শুধুমাত্র HAMS এর
                        নিজস্ব বাতিল, ফেরত বা টিকিট পরিবর্তন সেবা ফি এর ক্ষেত্রে
                        প্রযোজ্য। এয়ারলাইন এবং/অথবা অন্যান্য সাপ্লায়ার জরিমানা,
                        পাশাপাশি ভাড়ার পার্থক্যের জন্য গ্রাহকরা এখনও দায়ী হতে
                        পারে। HAMS এই এয়ারলাইন্স এবং/অথবা অন্যান্য সাপ্লায়ার দের
                        নীতি নিয়ন্ত্রণ করে না।
                    </>
                ),
            },
            {
                id: "Waiver",
                title: "মওকুফ",
                content: (
                    <>
                        সাইট ব্যবহার করে,আপনি HAMS এর বিরুদ্ধে যে কোনও দাবি
                        মওকুফ করতে রাজি। এর সহযোগী বা অধিভুক্ত প্রতিষ্ঠান, আর এই
                        ধরনের দলের যে কোনও অফিসার, পরিচালকদের, ব্যবস্থাপকদের,
                        এজেন্ট, ঠিকাদার, অথবা কর্মচারী, এবং স্পষ্টভাবে একমত যে
                        HAMS বা তার কোনও সহায়ক সংস্থা নয়, অধিভুক্ত, কর্মকর্তা,
                        পরিচালকদের, ব্যবস্থাপকদের, এজেন্ট, ঠিকাদার বা কর্মচারী,
                        এর জন্য দায়ী করা হবে:
                        <br /> <br />
                        কোন ত্রুটির কারণে কোন ব্যক্তির সম্পত্তির ক্ষতি বা ক্ষতি
                        বা ক্ষতি, অসাবধানতা, অন্য কোন অন্যায় কাজ থেকে বিরত থাকা,
                        বা কোন ট্রাভেল সাপ্লায়ার কর্তৃক কোন ধরনের কর্মক্ষমতার
                        ব্যর্থতা;
                        <br /> <br />
                        কোন অসুবিধা, ভোগের ক্ষতি, মানসিক অবসাদ বা অনুরূপ
                        অন্যান্য বিষয়;
                        <br /> <br />
                        কোন বিলম্বিত প্রস্থান, মিসড সংযোগ, আবাসনের বিকল্প
                        ব্যবস্থা, চাকরির অবসান, অথবা ভাড়া ও ভাড়ার পরিবর্তন;
                        <br /> <br />
                        HAMS এর যুক্তিসঙ্গত নিয়ন্ত্রণের বাইরে রিজার্ভেশন বা
                        টিকিট বাতিল বা ডাবল-বুকিং এবং
                        <br /> <br />
                        বিমান বা অন্যান্য পরিবহন সেবা, পণ্য বা অন্যান্য
                        বৈশিষ্ট্যের সাথে সম্পর্কিত বা আপনার ভ্রমণসূচীর সাথে
                        সম্পর্কিত (অথবা না) বা ঘটতে (অথবা না) উদ্ভূত প্রকৃতির
                        কোন দাবি।
                        <br /> <br />
                        সন্দেহ এড়ানোর জন্য (এবং পূর্বোল্লিখিত সীমাবদ্ধ না করে),
                        HAMS সংশ্লিষ্ট এয়ারলাইন্সের কোনও নির্ধারিত পরিবর্তনের
                        কারণে বাতিল ফ্লাইট, ফ্লাইটগুলি বাদ দেওয়া বা সংযোগ না
                        করার জন্য কোনও দায়বদ্ধতা গ্রহণ করে না
                    </>
                ),
            },
            {
                id: "indemnification",
                title: "ক্ষতিপূরণ",
                content: (
                    <>
                        আপনি HAMS কে রক্ষা এবং ক্ষতিপূরণ দিতে সম্মত হন। এর
                        সহযোগী সংগঠনগুলো, অংশীদার, যৌথ উদ্যোগ এবং/অথবা তাদের
                        সংশ্লিষ্ট সাপ্লায়ার এবং তাদের সংশ্লিষ্ট কর্মকর্তা,
                        পরিচালকদের, ব্যবস্থাপকদের, কোন দাবী হতে এবং তার বিরুদ্ধে
                        কর্মচারী ও এজেন্ট, কর্মের কারণ, দাবি, পুনরুদ্ধার,
                        লোকসান, ক্ষতি, জরিমানা, দন্ড বা অন্য কোন খরচ বা ব্যয়,
                        যার অন্তর্ভুক্ত কিন্তু যুক্তিসঙ্গত আইনগত ও হিসাব ফিতে
                        সীমাবদ্ধ নয়, দ্বারা আনা
                        <br />
                        <br />
                        আপনি বা আপনার পক্ষে উপরোক্ত বর্ণিত দায়বদ্ধতার অতিরিক্ত
                        শর্তে যে দায়বদ্ধতার এই জাতীয় সীমাবদ্ধতা আপনার বাসস্থানের
                        রাজ্যের আইন দ্বারা অনুমোদিত;
                        <br />
                        <br />
                        এই শর্তাবলী লঙ্ঘনের ফলে তৃতীয় পক্ষের দ্বারা সাইটে
                        উল্লেখকৃত নোটিশ বা দলিল; আপনার কোনও আইন বা তৃতীয় পক্ষের
                        অধিকার লঙ্ঘন; অথবা আপনার সাইটের ব্যবহার।
                    </>
                ),
            },
            {
                id: "release",
                title: "নিষ্কৃতি",
                content: (
                    <>
                        এয়ারলাইন, হোটেল, ক্রুজ লাইন, রেলপথ, গাড়ি ভাড়া
                        এজেন্সি, ট্যুর অপারেটর এবং একত্রীকরণকারী, অবকাশ প্যাকেজ
                        এবং কার্যকলাপ সরবরাহকারী, ভ্রমণকারী সহায়তা পরিষেবা
                        প্রদানকারী সহ কিন্তু সীমাবদ্ধ নয় এমন একটি ভ্রমণ পণ্য বা
                        পরিষেবা সরবরাহকারীর সাথে আপনার বিরোধ থাকলে বীমা
                        প্রদানকারীরা, আপনি আমাদের, আমাদের সাপ্লায়ার, অংশীদার,
                        যৌথ উদ্যোগ এবং তাদের নিজ নিজ কর্মকর্তা, পরিচালক,
                        ব্যবস্থাপক, এজেন্ট এবং কর্মচারীদের দাবি, দাবি এবং ক্ষতি
                        (প্রত্যক্ষ, পরোক্ষ, আনুষঙ্গিক, এবং ফলাফলগত) থেকে মুক্তি
                        দেন অজানা, উদ্ভূত বা এই ধরনের বিরোধের সাথে যুক্ত কোনো
                        উপায়ে।
                    </>
                ),
            },
            {
                id: "protectingYourSecurity",
                title: "আপনার নিরাপত্তাকে রক্ষা করা",
                content: (
                    <>
                        আপনার সম্মতি ছাড়া আপনার ক্রেডিট, ডেবিট বা চার্জ কার্ড
                        ব্যবহার করা হচ্ছে না তা নিশ্চিত করার জন্য আমরা উপযুক্ত
                        তৃতীয় পক্ষের ডাটাবেসগুলির বিরুদ্ধে বুকিং প্রক্রিয়ার সময়
                        আপনার দ্বারা সরবরাহ করা আপনার নাম, ঠিকানা এবং যোগাযোগ
                        নম্বর বৈধ করতে পারি। এই শর্তাবলী এবং শর্তাবলী গ্রহণ করে
                        আপনি একমত হন এবং আমাদের এখানে বর্ণিত এই জাতীয় যাচাই
                        পরীক্ষা করার জন্য অনুমোদন করেন। এই চেকগুলি সম্পাদন করার
                        সময়, আপনি স্বীকার করেন এবং একমত হন যে এই জাতীয় ব্যক্তিগত
                        তথ্য যা আপনি আমাদের প্রদান করেন তা একটি নিবন্ধিত ক্রেডিট
                        কার্ড পেমেন্ট গেটওয়ে এজেন্সির কাছে প্রকাশ করা যেতে পারে
                        যা সম্পূর্ণ বা আংশিকভাবে এই জাতীয় তথ্যের রেকর্ড রাখতে
                        পারে। আপনার পরিচয় যাচাই এবং নিশ্চিত করার একমাত্র
                        উদ্দেশ্যে এই যাচাইকরণ প্রক্রিয়া সম্পন্ন করা হয় বলে
                        নিশ্চিত থাকুন।
                    </>
                ),
            },
            {
                id: "siteUsageAndTicketPurchase",
                title: "সাইট ব্যবহার এবং টিকিট ক্রয়",
                content: (
                    <>
                        আপনি একমত যে আপনার বয়স কমপক্ষে ১৮ বছর এবং এই চুক্তিতে
                        প্রবেশ করার এবং এখানে সমস্ত শর্তাবলী অনুসারে সাইটটি
                        ব্যবহার করার আইনি কর্তৃত্ব রয়েছে। যদি আপনি এই সাইটটি
                        ব্যবহার করেন এবং/অথবা অন্য ব্যক্তির জন্য ভ্রমণ
                        রিজার্ভেশন বা বুকিং করেন তবে আপনি সেই ব্যক্তিকে শর্তাবলী
                        সম্পর্কে জানাতে সম্মত হন যা আপনি তাদের পক্ষে করা ভ্রমণ
                        রিজার্ভেশন এবং বুকিংয়ের ক্ষেত্রে প্রযোজ্য, এর সাথে
                        প্রযোজ্য সকল নিয়ম, বিধিনিষেধ এবং এই শর্তাবলী সহ। আপনি
                        সাইটের আপনার সমস্ত ব্যবহারের জন্য (সেইসাথে অন্যদের
                        দ্বারা আপনার অ্যাকাউন্ট ব্যবহারের ক্ষেত্রে) আর্থিকভাবে
                        দায়বদ্ধ হতে সম্মত হন। আপনার নির্দেশ বা নিয়ন্ত্রণাধীন
                        ব্যক্তিদের দ্বারা করা যে কোনও বুকিং এবং ভ্রমণ সংরক্ষণের
                        জন্য আপনি দায়ী। আপনি আপনার বা আপনার পক্ষে, বা আপনার
                        পরিবারের সদস্যদের দ্বারা সাইটটি ব্যবহার করার ক্ষেত্রে
                        সরবরাহ করা সমস্ত তথ্য সত্য, বর্তমান, সম্পূর্ণ এবং
                        নির্ভুল কিনা তাও নিশ্চিত করুন। এ ছাড়া, আপনি এটাও নিশ্চিত
                        করেন যে, সেই ভ্রমণকারী একজন অপ্রাপ্তবয়স্ক ব্যক্তি নন।
                        সীমা ছাড়া, দাবির প্রত্যাশায় কোনও অনুসন্ধানমূলক,
                        অনুমানমূলক, মিথ্যা, বা প্রতারণামূলক রিজার্ভেশন বা বুকিং
                        নিষিদ্ধ।
                        <br /> <br />
                        যখনই আপনি সাইট ফিচার ব্যবহার করেন যা আপনাকে সাইটে উপাদান
                        আপলোড করার অনুমতি দেয়, বা সাইটের অন্যান্য ব্যবহারকারীদের
                        সাথে যোগাযোগ করার অনুমতি দেয়, তখন আপনাকে অবশ্যই প্রযোজ্য
                        আইন এবং ইন্টারনেট সৌজন্য এবং আচরণের সর্বোত্তম মান মেনে
                        চলতে হবে। আপনি এই ধরনের যে কোনও অবদান পূর্বোক্ত হিসাবে
                        মেনে চলেন, এবং আপনি সেই ওয়ারেন্টি এবং উদ্যোগের কোনও
                        লঙ্ঘনের জন্য সব সময় আমাদের পুরোপুরি ক্ষতিপূরণ দেওয়ার
                        জন্য অটলভাবে দায়িত্ব গ্রহণ করেন। আপনি সাইটে আপলোড করা যে
                        কোনও উপাদান গোপনীয় এবং অ-মালিকানাধীন হিসাবে বিবেচিত হবে
                        এবং আমাদের যে কোনও উদ্দেশ্যে তৃতীয় পক্ষের কাছে এই জাতীয়
                        কোনও উপাদান ব্যবহার, অনুলিপি, রিজার্ভেশন বিতরণ এবং
                        প্রকাশ করার অধিকার রয়েছে। আমাদের আপনার পরিচয় তৃতীয়
                        পক্ষের কাছে প্রকাশ করার অধিকার রয়েছে যারা দাবি করছে যে
                        আপনার দ্বারা সাইটে পোস্ট বা আপলোড করা কোনও উপাদান তাদের
                        বৌদ্ধিক সম্পত্তির অধিকার, বা তাদের গোপনীয়তার অধিকারের
                        লঙ্ঘন করে। আমরা আপনার বা সাইটের অন্য কোন ব্যবহারকারীর
                        দ্বারা পোস্টকৃত কোন উপকরণের বিষয়বস্তু বা নির্ভুলতার জন্য
                        কোন তৃতীয় পক্ষের কাছে দায়বদ্ধ হব না। আমাদের সাইটে আপনার
                        যে কোন উপাদান বা পোস্টিং অপসারণ করার অধিকার আছে যদি,
                        আমাদের মতে, এই ধরনের উপাদান এই শর্তাবলী মেনে চলে না।
                    </>
                ),
            },
            {
                id: "resolutionOfDisputes",
                title: "বিতর্কের সমাধান",
                content: (
                    <>
                        <p className='font-bold'>
                            দয়া করে এই বিভাগটি মনোযোগ দিয়ে পড়ুন। এখানে আপনার
                            অধিকারের ওপর আলোকপাত করা হবে এবং আমাদের একে অপরের
                            বিরুদ্ধে কোন অভিযোগ থাকলে তা সমাধানে সাহায্য করবে।
                        </p>
                        গ্রাহক সন্তুষ্টিই আমাদের সাফল্যের ভিত্তি। এ কারণে আমাদের
                        মধ্যে কোনো বিরোধ দেখা দিলে তা সুষ্ঠু ও সাশ্রয়ী উপায়ে
                        দ্রুত নিষ্পত্তি করাই আমাদের লক্ষ্য। তদনুসারে, আমরা
                        দৃঢ়ভাবে আপনাকে উৎসাহিত করি, অন্য কোনও পদক্ষেপ নেওয়ার
                        আগে,{" "}
                        <span className='text-green-600'>+880 2-48957730</span>{" "}
                        or{" "}
                        <span className='text-green-600'>info@hamsbd.com</span>{" "}
                        এ গ্রাহক পরিষেবার সাথে যোগাযোগ করে আমাদের কাছে পৌঁছানোর
                        জন্য যাতে আমাদের আপনার উদ্বেগগুলি সমাধান করার চেষ্টা
                        করার সুযোগ থাকে। <br /> <br /> অন্যথায়, আপনি এবং আমরা
                        একমত যে, যেকোনো বিরোধ আমরা মিটিয়ে নেব, সাইটে আপনার
                        ব্যবহার থেকে উদ্ভূত বা সম্পর্কিত দাবি বা বিতর্ক, এই
                        শর্তাবলী, অথবা ভাঙন, সমাপ্তি, প্রয়োগ, এর ব্যাখ্যা বা
                        বৈধতা, অথবা সাইটের সাথে আমাদের সম্পর্ক বা এই শর্তাবলীর
                        পূর্ববর্তী সংস্করণ (প্রতিটি
                        &apos;&apos;ক্লেইম&apos;&apos;), বিরোধ নিষ্পত্তির এই
                        ধারার কোন উপ-ধারা অনুসারে বা অন্য কোনভাবে উভয় পক্ষ
                        কর্তৃক লিখিতভাবে সম্মত হলে।
                    </>
                ),
            },
            {
                id: "governingLaw",
                title: "সরকারি আইন; এখতিয়ারে জমা",
                content: (
                    <>
                        এই শর্তাবলী এবং এর অধীন পক্ষগণের অধিকার গণপ্রজাতন্ত্রী
                        বাংলাদেশ সরকারের আইন দ্বারা নিয়ন্ত্রিত হবে এবং তা
                        গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের আইন দ্বারা নিয়ন্ত্রিত
                        হবে, যা কোন বিরোধ বা আইন বিধির পছন্দ ব্যতীত হবে। আপনি
                        একমত যে পক্ষগুলি লিখিতভাবে বা নীচের বাধ্যতামূলক সালিস
                        বিধানে অন্যথায় পারস্পরিকভাবে সম্মত না হলে, যে কোনও দাবি
                        গণপ্রজাতন্ত্রী বাংলাদেশের ঢাকা শহরে অবস্থিত আদালতে আনা
                        হবে। প্রযোজ্য আইনে অন্যথায় নিষিদ্ধ না হলে, উক্তরূপ দাবি
                        উত্থাপিত বা অর্জিত হওয়ার তারিখ হতে এক (1) বছরের মধ্যে
                        কোন দাবি আনতে হবে।
                    </>
                ),
            },
            {
                id: "improperlyFiledClaims",
                title: "অনুপযুক্তভাবে দায়ের করা দাবি",
                content: (
                    <>
                        আপনি আমাদের বিরুদ্ধে যে সমস্ত দাবি নিয়ে আসছেন, তা অবশ্যই
                        বিরোধ নিষ্পত্তি বিভাগের এই সমাধান অনুসারে সমাধান করতে
                        হবে। এই ধারার সাথে সঙ্গতিপূর্ণ নয় এইরূপ দাখিলকৃত বা আনীত
                        সকল দাবী অন্যায়ভাবে দাখিলকৃত বলে গণ্য হবে। আপনার বা
                        আমাদের দ্বারা এমন কোন দাবী দাখিল করা উচিত যা এই ধারার
                        সাথে সঙ্গতিপূর্ণ নয়, অন্য পক্ষ অ্যাটর্নিদের ফি এবং
                        ১,০০,০০০ টাকা পর্যন্ত খরচ আদায়ের চেষ্টা করতে পারে, তবে
                        শর্ত থাকে যে, অপর পক্ষকে অনুচিতভাবে দায়েরকৃত দাবির বিষয়ে
                        লিখিতভাবে অবহিত করা হয়েছে, এই ধরনের দাবি প্রত্যাহার করার
                        জন্য চৌদ্দ দিন পেয়েছিলেন, এবং তা করতে ব্যর্থ হয়।
                    </>
                ),
            },
            {
                id: "prohibitedActivities",
                title: "নিষিদ্ধ কার্যকলাপ",
                content: (
                    <>
                        আপনি একমত যে সাইটের ভ্রমণ পরিষেবা রিজার্ভেশন সুবিধাগুলি
                        শুধুমাত্র আপনার জন্য বা অন্য কোনও ব্যক্তির জন্য বৈধ
                        রিজার্ভেশন বা ক্রয় করার জন্য ব্যবহার করা হবে যার জন্য
                        আপনি আইনতভাবে কাজ করার জন্য অনুমোদিত। আপনি বুঝতে পারছেন
                        যে সাইটের ভ্রমণ পরিষেবা রিজার্ভেশন সুবিধাগুলির অতিরিক্ত
                        ব্যবহার বা অপব্যবহারের ফলে আপনাকে এই জাতীয় সুবিধাগুলিতে
                        প্রবেশ করতে অস্বীকার করা হতে পারে। আপনি এই সাইটটি কোন
                        বাণিজ্যিক উদ্দেশ্যে ব্যবহার করতে পারবেন না। আপনি একমত যে
                        আপনি আমাদের লিখিত অনুমতি ছাড়া কোনও রোবট, মাকড়সা,
                        স্ক্র্যাপার বা অন্যান্য স্বয়ংক্রিয় উপায় বা কোনও
                        উদ্দেশ্যে কোনও ম্যানুয়াল প্রক্রিয়া ব্যবহার করে এই সাইটের
                        কোনও সামগ্রী বা তথ্য অ্যাক্সেস, মনিটর বা অনুলিপি করবেন
                        না। আপনি একমত যে আপনি এই সাইটের কোনও রোবট এক্সক্লুসিভ
                        হেডারগুলিতে বিধিনিষেধ লঙ্ঘন করবেন না, বা এই সাইটে
                        অ্যাক্সেস প্রতিরোধ বা সীমাবদ্ধ করার জন্য নিযুক্ত
                        অন্যান্য পদক্ষেপগুলি বাইপাস বা এড়িয়ে যাবেন না। আপনি একমত
                        যে আপনি পরিবর্তন করবেন না, নকল করা, বিতরণ করা, প্রেরণ
                        করা, প্রদর্শন করা, সম্পাদন করা, পুনরুত্পাদন করা, প্রকাশ
                        করা, অনুজ্ঞাপত্র, থেকে ডেরিভেটিভ কাজ তৈরি করুন,
                        স্থানান্তরিত করা, অথবা কোনো তথ্য বিক্রি বা পুনঃবিক্রয়
                        করতে পারবে, পরিতৃপ্ত, গ্রাফিক্স, সফ্টওয়্যার, পণ্য, অথবা
                        এই সাইট বা কল সেন্টার থেকে বা এর মাধ্যমে প্রাপ্ত সেবা।
                        আপনি একমত যে আপনি সাইটের চারপাশে ফ্রেম বা সীমানা পরিবেশ
                        ব্যবহার করবেন না, বা সাইটের কোনও অংশ বা দিককে আবদ্ধ করার
                        জন্য অন্য ফ্রেমিং কৌশল ব্যবহার করবেন না অথবা সাইটের যে
                        কোন অংশকে আয়না বা নকল করবেন না, এবং আপনি সাইটের যে কোন
                        অংশকে কোন তৃতীয় পক্ষের কাছে বিক্রি, অফার ফর সেল,
                        ট্রান্সফার, বা লাইসেন্স দেবেন না।
                        <br /> <br />
                        আপনি একমত যে আপনি এমন কোনও ডিভাইস, সফটওয়্যার, বা রুটিন
                        ব্যবহার করবেন না যা আমাদের সাইটের স্বাভাবিক অপারেশনে
                        হস্তক্ষেপ করে, বা হস্তক্ষেপ করার চেষ্টা করে, বা আমাদের
                        সরঞ্জামের উপর অযৌক্তিক লোড আরোপ করে এমন কোনও পদক্ষেপ
                        গ্রহণ করে। আপনি সাইটের মাধ্যমে প্রেরণ করা তথ্যের উত্সকে
                        ছদ্মবেশ করবেন না, সাইটটি নেভিগেট করা, ভ্রমণ রিজার্ভেশন
                        বা বুকিং করা, বা কোনও সামগ্রী পোস্ট করা। আপনি জেনেশুনে
                        ভাইরাস, ট্রোজান, কৃমি, যুক্তি বোমা বা অন্যান্য উপাদান যা
                        বিদ্বেষপূর্ণ, আক্রমণাত্মক, মানহানিকর বা প্রযুক্তিগতভাবে
                        ক্ষতিকারক তা উপস্থাপন করে সাইটটির অপব্যবহার করবেন না।
                        <br /> <br />
                        আপনি সাইটে অননুমোদিত অ্যাক্সেস লাভ করার চেষ্টা করবেন না,
                        যে সার্ভারে সাইটটি রিজার্ভেশন করা হয় বা সাইটের সাথে
                        সংযুক্ত কোনও সার্ভার, কম্পিউটার বা ডাটাবেস। আপনি অবশ্যই
                        একটি অস্বীকার-অব-সার্ভিস আক্রমণ বা একটি বিতরণ
                        অস্বীকার-অব-সার্ভিস আক্রমণের মাধ্যমে সাইটে আক্রমণ করবেন
                        না। ডিস্ট্রিবিউটেড ডিনাইল-অফ-সার্ভিস অ্যাটাকের ফলে যে
                        কোনও ধরনের ক্ষতি বা ক্ষতির জন্য আমরা দায়ী থাকব না,
                        ভাইরাস বা অন্যান্য প্রযুক্তিগতভাবে ক্ষতিকর উপাদান যা
                        আপনার কম্পিউটারের যন্ত্রপাতিকে আক্রান্ত করতে পারে,
                        কম্পিউটার প্রোগ্রাম, আপনার সাইট ব্যবহারের কারণে ডেটা বা
                        অন্যান্য মালিকানাধীন উপাদান বা এটিতে পোস্ট করা কোনও
                        উপাদান ডাউনলোড করার জন্য, অথবা এর সঙ্গে যুক্ত যে কোনও
                        ওয়েবসাইটে।
                        <br /> <br />
                        আপনি সাইটে অননুমোদিত অ্যাক্সেস লাভ করার চেষ্টা করবেন না,
                        যে সার্ভারে সাইটটি রিজার্ভেশন করা হয় বা সাইটের সাথে
                        সংযুক্ত কোনও সার্ভার, কম্পিউটার বা ডাটাবেস। আপনি অবশ্যই
                        একটি অস্বীকার-অব-সার্ভিস আক্রমণ বা একটি বিতরণ
                        অস্বীকার-অব-সার্ভিস আক্রমণের মাধ্যমে সাইটে আক্রমণ করবেন
                        না। ডিস্ট্রিবিউটেড ডিনাইল-অফ-সার্ভিস অ্যাটাকের ফলে যে
                        কোনও ধরনের ক্ষতি বা ক্ষতির জন্য আমরা দায়ী থাকব না,
                        ভাইরাস বা অন্যান্য প্রযুক্তিগতভাবে ক্ষতিকর উপাদান যা
                        আপনার কম্পিউটারের যন্ত্রপাতিকে আক্রান্ত করতে পারে,
                        কম্পিউটার প্রোগ্রাম, আপনার সাইট ব্যবহারের কারণে ডেটা বা
                        অন্যান্য মালিকানাধীন উপাদান বা এটিতে পোস্ট করা কোনও
                        উপাদান ডাউনলোড করার জন্য, অথবা এর সঙ্গে যুক্ত যে কোনও
                        ওয়েবসাইটে।
                    </>
                ),
            },
            {
                id: "bookingProcess",
                title: "বুকিং প্রক্রিয়া",
                content: (
                    <>
                        আপনার সুবিধার জন্য এই শর্তাবলীতে উল্লিখিত টার্মগুলো এবং
                        তাদের ব্যবহার নিম্নে দেয়া হলোঃ <br />
                        <b>&apos;&apos;সার্ভিস এলিমেন্ট&apos;&apos;</b>- সাইটে
                        তালিকাভুক্ত একটি একক পণ্য বা পরিষেবা যা অন্য কোনও
                        পরিষেবা থেকে স্বাধীনভাবে বুক করা যেতে পারে। (উদা: গাড়ি,
                        হোটেল, ফ্লাইট)। <br />
                        <br />
                        <br />
                        <b>&apos;&apos;ট্রাভেল সাপ্লায়ার&apos;&apos;</b>
                        - এক বা একাধিক সার্ভিস এলিমেন্টের বিক্রেতা। (উদা।:
                        হোটেল, গাড়ি সাপ্লায়ার, বিমান সংস্থা)। HAMS প্রধান হিসাবে
                        কাজ করে না কিন্তু পরিষেবা উপাদান জন্য তৃতীয় পক্ষের
                        বিক্রেতা ভ্রমণ সাপ্লায়ার সঙ্গে ব্যবস্থা করে, সব উপরে
                        সংজ্ঞায়িত হিসাবে।
                        <br />
                        <br />
                        <br />
                        <b>&apos;&apos;বুকিং&apos;&apos;</b>
                        - এই সাইটটি ব্যবহার করার সময় আপনার দ্বারা পরিচালিত
                        ট্রাভেল সাপ্লায়ার র সাথে একটি আলোচনা প্রক্রিয়া এক বা
                        একাধিক পরিষেবা উপাদানগুলি অর্জনের উদ্দেশ্যে যা আমরা
                        সম্পূর্ণ পেমেন্ট গ্রহণ করার সময় ট্রাভেল সাপ্লায়ার র সাথে
                        একটি চুক্তিতে পরিণত হতে পারে এবং আপনার প্রস্তাব গ্রহণ
                        করতে পারে। <br />
                        <br />
                        <br />
                        একটি বুকিং সম্পন্ন করার জন্য নিম্নলিখিত পদক্ষেপগুলি
                        নেওয়া হয় যাতে এর বৈধতা নিশ্চিত করা যায়: <br />
                        <br />
                        যখন আমরা আমাদের সাইটে সার্ভিস এলিমেন্টস স্থাপন করি, তখন
                        আমরা আপনাকে তাদের ক্রয়ের জন্য একটি অফার করার জন্য
                        আমন্ত্রণ জানাচ্ছি। আপনি এই অফারটি করেন না যতক্ষণ না আপনি
                        সাইটের পেমেন্ট পেজে &apos;&apos;বুক&apos;&apos; প্রেস
                        করেন (&apos;&apos;রিভিউ ট্রিপের বিবরণ এবং
                        বই&apos;&apos;)।
                        <br />
                        <br />
                        একবার আপনি করেছেন তাই আপনি HAMS কে একটি অফার করেছেন (যা
                        আপনি আপনার মন পরিবর্তন করলে প্রত্যাহার করা যাবে না)
                        প্রাসঙ্গিক ভ্রমণ সাপ্লায়ার (গুলি) (আপনার
                        &apos;&apos;বুকিং&apos;&apos;) থেকে প্রাসঙ্গিক পরিষেবা
                        উপাদান (গুলি) কিনতে। আমরা সংশ্লিষ্ট ভ্রমণ সাপ্লায়ার র
                        পক্ষ থেকে আপনার প্রস্তাব গ্রহণ করতে বা প্রত্যাখ্যান
                        করতে, আমাদের একক বিচক্ষণতায় স্বাধীন।
                        <br />
                        <br />
                        HAMS ইমেইল নিশ্চিতকরণ বুকিংয়ের চুক্তিভিত্তিক
                        গ্রহণযোগ্যতা নয়, তবে এটি কেবলমাত্র একটি স্বীকৃতি যে আমরা
                        আপনার প্রস্তাব পেয়েছি। আমাদের সংশ্লিষ্ট সার্ভিস
                        এলিমেন্ট(গুলি) এর প্রাপ্যতা পরীক্ষা করতে হবে।
                        <br />
                        <br />
                        যদি সংশ্লিষ্ট সার্ভিস এলিমেন্টটি পাওয়া যায়, তবে আপনার
                        বুকিং প্রক্রিয়া করা হবে। সংশ্লিষ্ট বুকিং সম্পর্কিত
                        চুক্তিটি তখনই গঠিত হয় যখন সম্পূর্ণ অর্থ প্রদান করা হয়।
                        <br />
                        <br />
                        আপনার এবং প্রাসঙ্গিক ট্রাভেল সাপ্লায়ার এর মধ্যে চুক্তি
                        কেবল সেই পরিষেবা উপাদানগুলির সাথে সম্পর্কিত হবে যা
                        হোটেল, গাড়ি বা ক্রিয়াকলাপের ক্ষেত্রে বিমান বা রিজার্ভেশন
                        নম্বরের ক্ষেত্রে টিকিট নম্বর সহ ইমেইল দ্বারা নিশ্চিত করা
                        হয়েছে।
                        <br />
                        <br />
                        আপনার বুকিংয়ের শর্তাবলী (যেমন মূল্য, আপনি এবং ট্রাভেল
                        সাপ্লায়ার র মধ্যে চুক্তি গঠিত না হওয়া পর্যন্ত এবং একটি
                        টিকিট জারি করা হয়েছে এবং / বা একটি রিজার্ভেশন করা হয়েছে
                        এবং ট্রাভেল সাপ্লায়ার দ্বারা নিশ্চিত না হওয়া পর্যন্ত
                        ভ্রমণের প্রাপ্যতা এবং / বা ভ্রমণের তারিখগুলি) গ্যারান্টি
                        দেওয়া হয় না।
                        <br />
                        <br />
                        দয়া করে নোট করুন যে একবার আপনি বুকিং পর্যায় শেষ আপনি
                        শুধুমাত্র বাতিল বা আপনার বুকিং বিস্তারিত (যেমন নাম বা
                        গন্তব্যস্থল) আমাদের একমাত্র বিবেচনা এবং এই শর্তাবলী
                        অনুযায়ী পরিবর্তন করতে পারেন।
                        <br />
                        <br />
                        এই বুকিং প্রক্রিয়াগুলি আমাদের যে কোনও ব্যক্তিগত সার্ভিস
                        এলিমেন্টের শর্তাবলীর জন্য প্রযোজ্য হবে যা নীচে সেট করা
                        হয়েছে। বিমান টিকিটের শর্তাবলী, হোটেলের শর্তাবলী, গাড়ি
                        ভাড়ার শর্তাবলী, আকর্ষণ এবং পরিষেবার শর্তাবলী বুকিং
                        প্রক্রিয়া দ্বারা অন্তর্ভুক্ত নয় এমন কোনও এলাকাকে পরিপূরক
                        করে। আমরা বুকিং প্রক্রিয়া যে কোনও সময় পরিবর্তন করার
                        অধিকার রিজার্ভেশন করি, যে তারিখে এই ধরনের পরিবর্তনগুলি
                        সাইটে পোস্ট করা হয় সেই তারিখ থেকে স্বয়ংক্রিয়ভাবে
                        পরিবর্তনগুলি কার্যকর হয়।
                        <br />
                        <br />
                        আপনার ভ্রমণের পুরো সময় বিমানবন্দর, হোটেল এবং গাড়ি ভাড়ার
                        স্থানগুলিতে নিরাপত্তা পরীক্ষার জন্য সরকার কর্তৃক
                        ইস্যুকৃত একটি ফটো আইডি প্রয়োজন এবং প্রাসঙ্গিক ভ্রমণ
                        সাপ্লায়ার দের দ্বারা প্রয়োজনীয় হিসাবে আকর্ষণ এবং
                        অন্যান্য পণ্যের জন্য প্রয়োজন হতে পারে।
                        <br />
                        <br />
                        আপনার ভ্রমণের পুরো সময় বিমানবন্দর, হোটেল এবং গাড়ি ভাড়ার
                        স্থানগুলিতে নিরাপত্তা পরীক্ষার জন্য সরকার কর্তৃক
                        ইস্যুকৃত একটি ফটো আইডি প্রয়োজন এবং প্রাসঙ্গিক ভ্রমণ
                        সাপ্লায়ার দের দ্বারা প্রয়োজনীয় হিসাবে আকর্ষণ এবং
                        অন্যান্য পণ্যের জন্য প্রয়োজন হতে পারে।
                        <br />
                        <br />
                        HAMSবা তার সহযোগী কোন প্রতিষ্ঠানই কোন দায়িত্ব গ্রহণ করে
                        না। উপরিউক্ত দায়িত্ব পালন না করার কারণে যদি আপনাকে
                        বোর্ডিং থেকে বঞ্চিত করা হয়, বিলম্বিত করা হয় বা নির্বাসিত
                        করা হয় তাহলে আপনি কোন প্রকার অর্থ ফেরতের অধিকারী হবেন
                        না।
                        <br />
                        <br />
                        গভর্নমেন্ট এন্ট্রি/এক্সিট ফি প্রযোজ্য হতে পারে, আপনার
                        গন্তব্যের উপর নির্ভর করে।
                        <br />
                        <br />
                        এগুলি আপনার একমাত্র দায়িত্ব এবং আপনার বুকিং চার্জের
                        অতিরিক্ত হবে।
                        <br />
                        <br />
                        আপনার বুকিং-এর সমস্ত যাত্রীকে (যদি একাধিক যাত্রী থাকে)
                        অবশ্যই একই ভ্রমণসূচিতে ভ্রমণ করতে হবে। আপনার বুকিং থেকে
                        পৃথক যাত্রী যোগ করা যাবে না, এবং/অথবা মুছে ফেলা যাবে না।
                        <br />
                        <br />
                        HAMS যে কোনও বিজ্ঞাপনী মূল্যে ত্রুটি সংশোধনের অধিকার
                        রিজার্ভেশন করে এবং, প্রযোজ্য হলে, আপনার প্রদত্ত ক্রেডিট
                        বা ডেবিট কার্ড থেকে মূল্য বৃদ্ধির সমান পরিমাণ অর্থ
                        সংগ্রহ করার জন্য বুকিং বাতিল বা HAMS কে অনুমতি দেওয়ার
                        একটি বিকল্প দিন, তোমার চলে যাওয়ার আগে।
                        <br />
                        <br />
                        আপনার বুকিং এ তালিকাভুক্ত প্রতিটি সার্ভিস এলিমেন্ট
                        সংশ্লিষ্ট ট্রাভেল সাপ্লায়ার দ্বারা প্রদান করা হয়।
                        <br />
                        <br />
                        ঘন ঘন ভ্রমণকারী পয়েন্ট এবং/অথবা মাইল আপনার বুকিং এর কোন
                        অংশের জন্য উপলব্ধ হতে পারে বা নাও হতে পারে। আপনাকে
                        অবশ্যই সংশ্লিষ্ট ভ্রমণ সাপ্লায়ার র সাথে এটি পরীক্ষা করতে
                        হবে।
                        <br />
                        <br />
                        একবার বুকিং করার পর, আপনি আপনার বুকিং-এ তালিকাভুক্ত নাম
                        (গুলি) বা গন্তব্য (গুলি) স্থানান্তর বা পরিবর্তন করতে
                        পারবেন না।
                        <br />
                        <br />
                        আপনার বুকিং আপনার টিকিটের তথ্য ইমেলে নির্ধারিত ডেলিভারি
                        তারিখে পূরণ করা হবে বা, যদি কোনও ডেলিভারি তারিখ উল্লেখ
                        না করা হয়, তবে টিকিটটি ইস্যু করার তারিখে, ব্যতিক্রমী
                        পরিস্থিতি না থাকলে।
                        <br />
                        <br />
                        এই চুক্তির শর্তাবলী প্রতিটি এয়ারলাইনের গাড়ির চুক্তির
                        শর্তাবলী উল্লেখ করে অন্তর্ভুক্ত করে। যাত্রীরা প্রতিটি
                        এয়ারলাইনের বিমানবন্দর বা শহরের টিকিট অফিসে ক্যারেজের
                        চুক্তির সম্পূর্ণ পাঠ্যটি পরিদর্শন করতে পারে। যাত্রীরা
                        বিমান সংস্থার কাছে অনুরোধ করলে, মেইল বা অন্যান্য
                        ডেলিভারি পরিষেবার মাধ্যমে বিনামূল্যে গ্রহণ করার অধিকার
                        রয়েছে - ক্যারেজের চুক্তির সম্পূর্ণ পাঠ্য। গাড়ির চুক্তির
                        অন্তর্ভুক্ত শর্তাবলী অন্তর্ভুক্ত হতে পারে: (1) যাত্রীর
                        ব্যক্তিগত আঘাত বা মৃত্যুর জন্য বিমান সংস্থার দায়বদ্ধতার
                        সীমা;, আর ক্ষতির জন্য, ক্ষতি, অথবা মাল ও লাগেজের বিলম্ব,
                        ভঙ্গুর বা পচনশীল পণ্যসহ; (2) দাবির সীমাবদ্ধতা, বিমান
                        কর্তৃপক্ষ বা তার এজেন্টদের বিরুদ্ধে বিমান কর্তৃপক্ষ
                        কর্তৃক দায়েরকৃত অভিযোগ বা ব্যবস্থা গ্রহণের সময়সীমাসহ;
                        (3) চুক্তির শর্তাবলী পরিবর্তনের জন্য বিমান সংস্থার
                        অধিকার; (4) সংরক্ষণের পুনঃনিশ্চিতকরণ সম্পর্কে বিধি,
                        চেক-ইন সময়, এবং বহন করতে অস্বীকৃতি; (5) বিমান সংস্থার
                        অধিকার এবং বিলম্ব বা সেবা সম্পাদনে ব্যর্থতা সম্পর্কিত
                        সীমাবদ্ধতা;, সময়সূচী পরিবর্তনসহ, বিকল্প বিমান বা বিমান
                        প্রতিস্থাপন এবং রুট পরিবর্তন।
                    </>
                ),
            },
            {
                id: "pricingTaxesFeesAndPayment",
                title: "মূল্যনির্ধারণ, কর/শুল্ক, এবং পরিশোধ",
                content: (
                    <>
                        আমাদের মোট মূল্যের মধ্যে বিমান ভাড়ার ক্ষেত্রে প্রযোজ্য
                        সকল কর ও ফি অন্তর্ভুক্ত, হোটেল বাসস্থান, গাড়ি ভাড়া এবং
                        আপনার বুকিং অন্তর্ভুক্ত কার্যক্রম, যদি না আপনার টিকেটের
                        তথ্য ইমেইল বা এই শর্তাবলীতে অন্য কিছু উল্লেখ করা হয়।
                        অতিরিক্ত জ্বালানী সারচার্জ, নিরাপত্তা, ব্যাগেজ, আসন
                        রিজার্ভেশন , হোটেল আনুষঙ্গিক, এবং অন্যান্য প্রযোজ্য
                        পরিষেবা চার্জ প্রযোজ্য হতে পারে যা চেক-ইনের সময়
                        প্রাসঙ্গিক ভ্রমণ সাপ্লায়ার দ্বারা চার্জ করা হবে। ট্রাভেল
                        সাপ্লায়ারের কারণে এই ধরনের অতিরিক্ত চার্জের জন্য আপনিই
                        একমাত্র দায়ী। এই ধরনের চার্জ সম্পর্কে আপনার কোনও প্রশ্ন
                        থাকলে, দয়া করে সংশ্লিষ্ট ভ্রমণ সাপ্লায়ার র সাথে সরাসরি
                        যোগাযোগ করুন।
                        <br />
                        <br />
                        উদ্ধৃত মূল্যেও কোনও অতিরিক্ত ফ্লাইট ফুয়েল সারচার্জ বা
                        অন্যান্য সারচার্জ অন্তর্ভুক্ত নয়, যা প্রাসঙ্গিক ভ্রমণ
                        সাপ্লায়ার বা কর্তৃপক্ষ দ্বারা সময়ে সময়ে আরোপ করা যেতে
                        পারে, যার সবগুলি আপনাকে অবশ্যই প্রদান করতে হবে।
                        <br />
                        <br />
                        বুকিংয়ের সময় ক্রেডিট বা ডেবিট কার্ডের মাধ্যমে পেমেন্ট
                        করতে হবে।FEBD Ltd. একটি যাচাইযোগ্য বিলিং ঠিকানা সঙ্গে সব
                        প্রধান ক্রেডিট বা ডেবিট কার্ড গ্রহণ করে।
                        <br />
                        <br />
                        আপনি এতদ্বারা HAMS এবং তার অনুমোদিত তৃতীয় পক্ষকে আপনার
                        বুকিংয়ের মোট পরিমাণের জন্য আপনি আমাদের যে ক্রেডিট বা
                        ডেবিট কার্ড প্রদান করেন তার চার্জ প্রক্রিয়া করতে অনুমোদন
                        করেন।
                        <br />
                        <br />
                        আপনাকে হোটেলে চেক-ইনের সময় এবং/অথবা গাড়ি ভাড়াকারী
                        কোম্পানির পিক-আপ লোকেশনে অনুমোদিত কার্ড ব্যবহারের
                        নিশ্চিতকরণ এবং/অথবা কোনও অতিরিক্ত চার্জ নিশ্চিত করার
                        জন্য বৈধ ক্রেডিট বা ডেবিট কার্ড উপস্থাপন করার জন্য
                        প্রাসঙ্গিক ট্রাভেল সাপ্লায়ার (গুলি) দ্বারা প্রয়োজন হতে
                        পারে। কার্ডধারীকে অবশ্যই আপনার বুকিং-এ তালিকাভুক্ত
                        ভ্রমণকারী হতে হবে।
                        <br />
                        <br />
                        সব অফার, মূল্য, এবং বিক্রয়ের শর্তাদি নিম্নরূপ হতে পারেঃ-
                        <br />
                        <br />
                        বিনা নোটিশে পরিবর্তন;
                        <br />
                        <br />
                        অগ্রিম ক্রয়, যোগ্যতা, বসার জায়গা, অথবা অন্যান্য
                        সীমাবদ্ধতা;
                        <br />
                        <br />
                        ভ্রমণ দিন, তারিখ, ন্যূনতম বা সর্বোচ্চ অবস্থান, ছুটি,
                        ঋতু, ব্ল্যাকআউট তারিখ, থামা, এবং/অথবা অপেক্ষমাণ তালিকার
                        সীমাবদ্ধতা;
                        <br />
                        <br />
                        রিজার্ভেশন এর বৈধতা এক বছর পর্যন্ত সীমাবদ্ধতা (যদি কোনও
                        সম্প্রসারণের অনুমতি দেওয়া হয়), জরিমানা/নিষেধ প্রযোজ্য
                        হতে পারে;
                        <br />
                        <br />
                        অন্যান্য শর্ত/প্রতিবন্ধিতা; এবং
                        <br />
                        <br />
                        প্রাপ্যতা।
                        <br />
                        <br />
                        কনফার্ম/টিকিট না হওয়া পর্যন্ত রিজার্ভেশন সম্পূর্ণ হয় না।
                        আমাদের গ্রাহকদের সুরক্ষার জন্য, আমরা ক্রেডিট / ডেবিট
                        কার্ড কোম্পানির সাথে যাচাই করি যে আপনি আমাদের সরবরাহ করা
                        বিলিং ঠিকানা এবং ক্রেডিট কার্ড যাচাই নম্বর সঠিক এবং
                        আপনার ডেবিট / চার্জ গ্রহণ করা হবে। এ ধরনের তথ্য যাচাই না
                        হওয়া পর্যন্ত ভাড়ার বিষয়টি পরিবর্তনযোগ্য। ক্রেডিট/ডেবিট
                        কার্ডের উপর ভিত্তি করে বাতিলকৃত কোন লেনদেনের জন্য আমরা
                        দায়ী নই যা ইস্যুকারী সংস্থা বা ভ্রমণ প্রদানকারী বা যদি
                        দ্বারা বাতিল করা হয়, যে কোনও কারণে, ডেবিট/ক্রেডিট কার্ড
                        বিলিং অ্যাড্রেস এবং/অথবা ক্রেডিট কার্ড ভেরিফিকেশন নম্বর
                        সময়মতো যাচাই করা যাবে না, অথবা আমাদের যাচাই-বাছাই
                        প্রক্রিয়ার সময় ভাড়ার কোনো পরিবর্তন বা অন্য কোনো চার্জের
                        জন্য আমরা দায়ী নই। যদি নির্বাচিত ভাড়া পাওয়া না যায় তাহলে
                        আপনার ক্রেডিট কার্ডে একটি অনুমোদন কোড জারি করা হতে পারে।
                        যদি লেনদেন সম্পন্ন না হয় তবে অনুমোদন কোড সাময়িকভাবে
                        আপনার ব্যাংক অ্যাকাউন্ট থেকে টাকা ক্রেডিট করতে পারে।
                    </>
                ),
            },
            {
                id: "ourFeesAndExceptions",
                title: "আমাদের খরচ ও ব্যতিক্রম",
                content: (
                    <>
                        প্রতিটি ভ্রমণ সাপ্লায়ার র খরচ এবং ফি ছাড়াও
                        ব্যাংক/পেমেন্ট গেটওয়ে চার্জ বাতিলের জন্য পেমেন্ট পদ্ধতি
                        অনুযায়ী যোগ করা হবে। এবং HAMS নিম্ন বর্ণিত হিসাবে একটি
                        পরিষেবা ফি চার্জ করতে পারে। সমস্ত HAMS ফি জনপ্রতি বা
                        টিকিটের ভিত্তিতে নেওয়া হয় এবং তা ফেরতযোগ্য নয়। <br />
                        <br />
                        <div className='text-center font-bold text-gray-700'>
                            বাতিল ও ফেরত
                        </div>
                        <table className='min-w-full text-base'>
                            <thead>
                                <tr>
                                    <td
                                        colSpan={2}
                                        className='py-3 border bg-green-50 px-2'
                                    >
                                        {" "}
                                    </td>
                                    <td
                                        colSpan={2}
                                        className='py-3 border bg-green-50 px-2'
                                    >
                                        এয়ার ইকোনমি
                                    </td>
                                    <td
                                        colSpan={2}
                                        className='py-3 border bg-green-50 px-2'
                                    >
                                        এয়ার- বিজনেস/ফার্স্ট
                                    </td>
                                    <td
                                        colSpan={2}
                                        className='py-3 border bg-green-50 px-2'
                                    >
                                        হোটেল ও অন্যান্য
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        colSpan={2}
                                        className='p-2 border  bg-green-50 '
                                    ></td>
                                    <td className='border p-2'>বাংলাদেশ</td>
                                    <td className='border p-2'>আন্তর্জাতিক</td>
                                    <td className='border p-2'>বাংলাদেশ</td>
                                    <td className='border p-2'>আন্তর্জাতিক</td>
                                    <td className='border p-2'>বাংলাদেশ</td>
                                    <td className='border p-2'>আন্তর্জাতিক</td>
                                </tr>
                                <tr>
                                    <td
                                        colSpan={2}
                                        className='p-2 border  bg-green-50'
                                    >
                                        এজেন্ট অ্যাসিস্টেড ক্যান্সলেশন(২) ফেরতসহ
                                    </td>
                                    <td className='border p-2'>৩০০ টাকা</td>
                                    <td className='border p-2'>২০০০ টাকা</td>
                                    <td className='border p-2'>৩০০ টাকা</td>
                                    <td className='border p-2'>৩০০০ টাকা</td>
                                    <td className='border p-2'>
                                        ভাউচার প্রতি ৫০০ টাকা
                                    </td>
                                    <td className='border p-2'>
                                        ভাউচার প্রতি ২০০০ টাকা
                                    </td>
                                </tr>
                            </tbody>
                        </table>{" "}
                        <br />
                        <br />
                        <div className='text-center font-bold text-gray-700'>
                            বর্তমান টিকিটে পরিবর্তন (বিনিময়)
                        </div>
                        <table className='table min-w-full text-base '>
                            <thead>
                                <tr>
                                    <td
                                        colSpan={3}
                                        className='border bg-green-50 py-3 px-2'
                                    ></td>
                                    <td
                                        colSpan={2}
                                        className='border bg-green-50 py-3 px-2'
                                    >
                                        এয়ার ইকোনমি
                                    </td>
                                    <td
                                        colSpan={2}
                                        className='border bg-green-50 py-3 px-2'
                                    >
                                        এয়া্র- বিজনেস/ফার্স্ট
                                    </td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td
                                        className='border p-2 bg-green-50 '
                                        colSpan={3}
                                    ></td>
                                    <td className='border p-2'>বাংলাদেশ</td>
                                    <td className='border p-2'>আন্তর্জাতিক</td>
                                    <td className='border p-2'>বাংলাদেশ</td>
                                    <td className='border p-2'>আন্তর্জাতিক</td>
                                </tr>
                                <tr>
                                    <td
                                        className='border p-2 bg-green-50 '
                                        colSpan={3}
                                    >
                                        পুনরায় ইস্যু
                                    </td>
                                    <td className='border p-2'>৩০০ টাকা</td>
                                    <td className='border p-2'>২০০০ টাকা</td>
                                    <td className='border p-2'>৩০০ টাকা</td>
                                    <td className='border p-2'>৩০০০ টাকা</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <br />
                        <div className='text-center font-bold text-gray-700'>
                            বিশেষ পরিষেবা
                        </div>
                        <table className='table min-w-full text-base'>
                            <thead>
                                <tr>
                                    <td className='border p-2 bg-green-50'></td>
                                    <td className='border p-2 bg-green-50'>
                                        প্রকারভেদ
                                    </td>
                                    <td className='border p-2 bg-green-50'>
                                        এয়ার-বিজনেস/ফার্স্ট
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        rowSpan={3}
                                        className='p-2 border bg-green-50 text-center'
                                    >
                                        এজেন্ট অ্যাসিস্টেড সার্ভিস
                                    </td>
                                    <td className='p-2 border'>
                                        নামের বানান ভুল
                                    </td>
                                    <td className='p-2 border'>২০০০ টাকা</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border'>
                                        ব্যাগেজ সম্পর্কিত
                                    </td>
                                    <td className='p-2 border'>১০০০ টাকা</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border'>
                                        নো-শো সার্ভিস
                                    </td>
                                    <td className='p-2 border'>১০০০ টাকা</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border bg-green-50 text-center'>
                                        এজেন্ট অ্যাসিস্টেড সার্ভিস
                                    </td>
                                    <td
                                        colSpan={2}
                                        className='p-2 border w-2/3'
                                    >
                                        আমরা আমাদের করুণা ব্যতিক্রম নীতি (সিইপি)
                                        এর অধীনে বিশেষ ছাড় প্রদান করি। আমাদের
                                        সিইপি নীতিমালায় সামরিক, প্রবীণ নাগরিক (
                                        65 বছরের বেশি), প্রাকৃতিক দুর্যোগ, শোক,
                                        তরুণ (18 থেকে 25 বছরের মধ্যে),
                                        মারাত্মকভাবে অসুস্থ এবং প্রতিবন্ধী
                                        ব্যক্তিদের অন্তর্ভুক্ত করা হয়েছে।
                                        <br />
                                        <br />
                                        সকল এয়ারলাইন রিফান্ড / ফিউচার ক্রেডিট
                                        প্রতিটি এয়ারলাইন তাড়ার নিয়ম, নীতি এবং
                                        পদ্ধতি সাপেক্ষে
                                        <br />
                                        <br />
                                        পেমেন্ট পেজে স্থানীয় মুদ্রায় সার্ভিস
                                        ফি রূপান্তর করা হবে। যাত্রীর ধরণ:
                                        প্রাপ্তবয়স্ক, শিশু, প্রবীণ, শিশু,
                                        ছাত্র, সামরিক।
                                        <br />
                                        <br />
                                        সমস্ত পোস্ট-টিকিটিং পরিষেবা ফিগুলি
                                        অ-ফেরতযোগ্য এবং কোনও নোটিশ ছাড়াই
                                        পরিবর্তনযোগ্য। এইবিডি লিমিটেড ফি,
                                        অতিরিক্ত ভাড়া আদায়, এবং অন্যান্য চার্জ
                                        যে কোনও বিমান, হোটেল, বা গাড়ি ভাড়ার ফি
                                        এবং চার্জের অতিরিক্ত। আপনি কেবল চূড়ান্ত
                                        মোট পরিমাণ চার্জ করা হবে
                                        <br />
                                        <br />
                                        সরকার আরোপিত কর ও ফি পরিবর্তনযোগ্য। আপনি
                                        কেবলমাত্র চূড়ান্ত মোট পরিমাণ হিসাবে
                                        দেখানো হিসাবে চার্জ করা হবে।
                                        <br />
                                        <br />
                                        1.আমাদের বিমানের বেশির ভাগ টিকিটই
                                        নন-রিফান্ডেবল। কেবলমাত্র যদি আমাদের
                                        ভ্রমণ সরবরাহকারীদের তাড়ার নিয়ম বাতিল
                                        এবং ফেরতের অনুমতি দেয় তবে উপলব্ধ, আর
                                        আমরা আপনার রিফান্ডের আবেদন গ্রহণ করেছি,
                                        আপনি একটি কোন শো না&apos;&apos; (
                                        বেশিরভাগ &apos;&apos; কোন শো
                                        না&apos;&apos; বুকিং রিফান্ড
                                        প্রক্রিয়াকরণের জন্য সরবরাহকারী থেকে কোন
                                        মওকুফ জন্য অযোগ্য ), এবং যদি আমরা এই
                                        অনুরোধকৃত বাতিল এবং ফেরত প্রক্রিয়া করার
                                        জন্য সরবরাহকারীদের কাছ থেকে মওকুফ
                                        সুরক্ষিত করতে সক্ষম হই।
                                        <br />
                                        <br />
                                        2. আমাদের বিমানের বেশির ভাগ টিকিটই
                                        নন-রিফান্ডেবল। এয়ারলাইন রিফান্ড /
                                        ফিউচার ক্রেডিটের ক্ষেত্রে এয়ারলাইনের
                                        তাড়ার নিয়ম, নীতিমালা ও পদ্ধতি অনুসরণ
                                        করতে হয়।
                                        <br />
                                        <br />
                                        3. বিশেষ পরিষেবা - উল্লেখ করা সমস্ত
                                        পরিষেবাগুলি কেবলমাত্র অনুরোধের ভিত্তিতে
                                        এবং প্রতিটি এয়ারলাইনের পর্যালোচনা এবং
                                        অনুমোদন প্রক্রিয়া এবং তাদের তাড়ার
                                        নিয়ম, নীতি এবং পদ্ধতিগুলি সাপেক্ষে।
                                        <br />
                                        <br />
                                        নামের ভুল বানান - বিমানের টিকিটে যাত্রীর
                                        নাম তাদের পাসপোর্ট বা অন্যান্য
                                        সর্বজনীনভাবে স্বীকৃত সরকারি আইডির সাথে
                                        মেলে না।
                                        <br />
                                        <br />
                                        ব্যাগেজ - দয়া করে সব রসিদ এবং ব্যাগেজ
                                        ট্যাগ ধরে রাখুন।
                                        <br />
                                        <br />
                                        নো-শো - আপনি কেন আপনার নির্ধারিত
                                        প্রস্থান করতে অক্ষম ছিলেন তা পরামর্শ
                                        দেওয়া ডকুমেন্টেশন প্রয়োজন হবে।
                                        <br />
                                        <br />
                                        বাতিল বোর্ডিং - আপনাকে কেন আপনার
                                        নির্ধারিত প্রস্থানের বোর্ডিং থেকে বঞ্চিত
                                        করা হয়েছিল তার ডকুমেন্টেশন প্রয়োজন হবে।
                                        <br />
                                        <br />
                                        ডুপ্লিকেট টিকিট - সমস্ত টিকিটের অনুলিপি,
                                        আমাদের সাথে বুক করা একই ভ্রমণের
                                        বিবরণগুলি রিফান্ডের অনুরোধ প্রক্রিয়া
                                        করার জন্য প্রয়োজন হবে।
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                ),
            },
            {
                id: "changesToFlightsAlreadyPurchased",
                title: "বিমানে ওঠার সময় পরিবর্তন করা হলে",
                content: (
                    <>
                        ভ্রমণসূচিতে যে কোনও এবং সমস্ত পরিবর্তন সীমাবদ্ধ এবং
                        বিমান ভাড়ার নিয়মাবলীর অধীন, যা বেশি কড়াকড়ি; আমাদের বেশির
                        ভাগ টিকিট, হোটেল, গাড়ি, প্যাকেজ এবং ক্রুজ বুকিং শেষ
                        হওয়ার পরে কোনও তারিখ বা নাম পরিবর্তনের অনুমতি দেয় না।
                        HAMS গ্রাহকের অনুরোধ বা সাপ্লায়ার র সময়সূচী পরিবর্তন
                        অনুযায়ী সাপ্লায়ার দ্বারা মূল ভ্রমণসূচি পরিবর্তন করা
                        হয়েছে এমন ক্ষেত্রে আপনার কাছে করা বা নিশ্চিত করা কোনও
                        বুকিং বা সংরক্ষণের জন্য গ্যারান্টি দেয় না, এবং এর জন্য
                        দায়ী থাকবে না।
                    </>
                ),
            },
            {
                id: "cancelAndExchange",
                title: "ক্যানসেল ও এক্সচেঞ্জ",
                content: (
                    <>
                        আমাদের এয়ারলাইন্সের বেশিরভাগ টিকিটই ১০০%
                        নন-রিফান্ডেবল।কিছু নির্দিষ্ট ক্ষেত্রে, যেখানে বিমান
                        সংস্থা বাতিলের অনুমতি দিতে পারে, একই বিমান সংস্থায় একই
                        ভ্রমণকারীর দ্বারা ভবিষ্যতের টিকিট কেনার ক্ষেত্রে ক্রেডিট
                        বৈধ হতে পারে। সাধারণত বিমান সাপ্লায়ার কর্তৃক ইস্যুকৃত
                        ক্রেডিটের একটি নির্দিষ্ট মেয়াদ উত্তীর্ণ হওয়ার তারিখ
                        থাকে, যার পরে এটি ব্যবহার করা যায় না। আমরা আপনাকে গ্রাহক
                        পরিষেবা এজেন্টের সাথে আপনার ক্রেডিটের সাথে সংযুক্ত
                        অতিরিক্ত বিধিনিষেধগুলি আলোচনা করতে উত্সাহিত করি। এই
                        ধরনের সমস্ত বুকিং যেখানে বাতিলের অনুমতি দেওয়া যেতে পারে,
                        আমাদের গ্রাহক পরিষেবা কেন্দ্রে ফোন করে প্রথম ফ্লাইট
                        সেগমেন্টের নির্ধারিত প্রস্থান সময়ের আগে বাতিল করতে হবে।
                        আমরা বাতিলের গ্যারান্টি দিচ্ছি না। যখন আপনি আপনার নতুন
                        বুকিং করতে প্রস্তুত এবং আপনার এয়ারলাইন ক্রেডিট ব্যবহার
                        করতে চান, তখন আপনাকে বেতন ভাড়া পার্থক্য (যদি থাকে),
                        প্রযোজ্য এয়ারলাইন জরিমানা এবং কোনও প্রযোজ্য HAMS
                        পোস্ট-টিকিট ফি দিতে হবে। এ ধরনের সব পরিবর্তন প্রতিটি
                        এয়ারলাইন্সের ভাড়ার নিয়ম, নীতিমালা ও পদ্ধতি দ্বারা
                        পরিচালিত হয়, যা আমাদের নিয়ন্ত্রণে নেই।
                        <br /> <br />
                        আমাদের বিনিময় ফিগুলির জন্য কোনও অতিরিক্ত উপস্থাপনা করা
                        হয় না, তবে একজন এজেন্ট আপনাকে আপনার কাঙ্ক্ষিত নতুন
                        ফ্লাইটগুলি খুঁজে পেতে সহায়তা করবে এবং প্রাপ্যতা এবং
                        অন্যান্য কারণগুলির উপর ভিত্তি করে নতুন ফ্লাইটগুলি পুনরায়
                        বুক করার চেষ্টা করবে।
                        <br /> <br />
                        আমাদের কম্পাশন এক্সেপশন পলিসি (সিইপি) অনুযায়ী, আমরা
                        সামরিক, প্রাকৃতিক দুর্যোগ, শোক, দৃষ্টি প্রতিবন্ধী
                        গ্রাহক, প্রবীণ নাগরিক এবং তরুণদের জন্য বিশেষ ছাড় প্রদান
                        করি। দয়া করে আমাদের কম্পাশন এক্সেপশন পলিসি (সিইপি)
                        বিস্তারিত পর্যালোচনা করুন।
                    </>
                ),
            },
            {
                id: "multipleAirlineItineraries",
                title: "একাধিক এয়ারলাইন ভ্রমণপথ",
                content: (
                    <>
                        যদি আপনার ভ্রমণসূচিতে একাধিক এয়ারলাইন্স দ্বারা পরিচালিত
                        ফ্লাইটগুলি অন্তর্ভুক্ত থাকে, তবে দয়া করে এই জাতীয়
                        প্রতিটি এয়ারলাইন্সের শর্তাবলী ভাল করে পড়ুন, যা এই জাতীয়
                        প্রতিটি এয়ারলাইন্সের ওয়েবসাইটে পাওয়া যেতে পারে। এ ধরনের
                        প্রতিটি এয়ারলাইনের নিজস্ব বিধিনিষেধ, নিয়ম ও ফি থাকবে।
                        যদি এই ফ্লাইটগুলির মধ্যে একটি এয়ারলাইন পরিবর্তন (যেমন
                        বাতিল বা পুনঃতফসিল) দ্বারা প্রভাবিত হয় যা একজন গ্রাহককে
                        অন্য ফ্লাইটে পরিবর্তন করতে বাধ্য করে, অপ্রভাভ়িত ফ্লাইটে
                        পরিবর্তন করার জন্য যে কোনও ফি বা টিকিট খরচের জন্য গ্রাহক
                        দায়ী থাকতে পারেন। এই ধরনের এয়ারলাইন্সগুলি পরিবর্তন,
                        ফেরতের জন্য বা এক্সচেঞ্জগুলি অনুরোধ করা হলে তাদের নিজস্ব
                        ফি নিতে পারে। আপনি প্রতিটি এয়ারলাইন্সের শর্তাবলী মেনে
                        চলার জন্য দায়ী, যা ভিন্ন হতে পারে (উদাহরণস্বরূপ,
                        চেক-ইনের সময় এবং ব্যাগেজের আকার / ওজনের সীমা)। ভ্রমণের
                        আগে সমস্ত উড়ানের জন্য আপনার আউটবাউন্ড এবং আপনার ই-টিকিট
                        নিশ্চিতকরণের অংশগুলি ফেরত দেওয়ার পরামর্শ দেওয়া হয়।
                        চেক-ইনের সময় আপনার রিটার্ন টিকিটের প্রমাণ চাওয়া হতে
                        পারে।
                    </>
                ),
            },
            {
                id: "cancelAndRefund",
                title: "ক্যানসেল ও রিফান্ড",
                content: (
                    <>
                        আমাদের অধিকাংশ এয়ারলাইন্সের টিকিট, হোটেল, প্রি-পেইড গাড়ি
                        ভাড়া, অবকাশ প্যাকেজ এবং সার্ভিস ফি বুকিং এর মধ্যরাতের
                        আগে নন-রিফান্ডেবল। সমস্ত বাতিলকরণ কেবলমাত্র ই-মেইলের
                        মাধ্যমেই করতে হবে। আমরা কেবল তখনই রিফান্ডের অনুরোধ গ্রহণ
                        করতে পারি যদি নিম্নলিখিত শর্তগুলি পূরণ করা হয়:
                        <br />
                        <br />
                        আপনি আমাদের কাছে বাতিল এবং ফেরতের জন্য আবেদন করেছেন এবং
                        যদি ভাড়ার নিয়মে বাতিল এবং ফেরতের ব্যবস্থা থাকে;
                        <br />
                        <br />
                        আপনি একটি &apos;&apos;নো-শো&apos;&apos; না (বেশিরভাগ
                        &apos;&apos;নো-শো&apos;&apos; বুকিং রিফান্ড
                        প্রক্রিয়াকরণের জন্য সাপ্লায়ার থেকে কোন প্রকার মওকুফ এর
                        জন্য অযোগ্য); এবং
                        <br />
                        <br />
                        আমরা এই অনুরোধ বাতিল এবং ফেরত প্রক্রিয়া করার জন্য
                        সাপ্লায়ার দের কাছ থেকে মওকুফ সুরক্ষিত করতে সক্ষম। এই
                        রিফান্ড প্রসেসিং করতে কত সময় লাগতে পারে তার নির্দিষ্ট
                        টাইম লাইন আমরা দিতে পারছি না। সব রিফান্ড রিকোয়েস্ট
                        ধারাবাহিকভাবে প্রক্রিয়াজাত করা হয়। একবার আপনি আপনার
                        বাতিল অনুরোধ সঙ্গে আমাদের কাস্টমার সার্ভিস এজেন্ট প্রদান
                        করেছেন, আমরা তারপর আপনার অনুরোধ প্রাপ্ত হয়েছে যে একটি
                        ইমেইল বিজ্ঞপ্তি পাঠাতে হবে। এই বিজ্ঞপ্তি স্বয়ংক্রিয়ভাবে
                        আপনাকে রিফান্ডের জন্য যোগ্য করে তোলে না। এটি শুধুমাত্র
                        আপনাকে আপনার অনুরোধের স্বীকৃতি প্রদান করে এবং আপনাকে
                        একটি ট্র্যাকিং নম্বর সরবরাহ করে। আপনার অনুরোধ প্রাপ্তির
                        পর আমরা সাপ্লায়ার যেমন এয়ারলাইন, হোটেল, গাড়ি-ভাড়া
                        কোম্পানিগুলির সাথে কাজ করব এয়ারলাইন এবং অন্যান্য
                        সাপ্লায়ার বিধিগুলির উপর ভিত্তি করে একটি মওকুফ তৈরি করতে
                        এবং সাপ্লায়ার সিদ্ধান্ত আপনাকে অবহিত করতে। মূল ভ্রমণ
                        রিজার্ভেশন বা বুকিংয়ের সাথে সম্পর্কিত আমাদের পরিষেবা ফি
                        ফেরতযোগ্য নয়। দয়া করে লক্ষ্য করুন যে আমরা অনুরোধকৃত ফেরত
                        পাওয়ার জন্য সাপ্লায়ার দের উপর নির্ভরশীল। একবার রিফান্ড
                        সাপ্লায়ার দ্বারা অনুমোদিত হয়ে গেলে এটি আপনার ক্রেডিট
                        কার্ড স্টেটমেন্টে উপস্থিত হওয়ার জন্য অতিরিক্ত সময় নিতে
                        পারে। সাধারণত, সমস্ত সাপ্লায়ার ফেরতের জন্য জরিমানা আদায়
                        করবে। এই পুরো প্রক্রিয়াটি আপনার অনুরোধ প্রাপ্তি থেকে
                        আপনার স্টেটমেন্টে ক্রেডিট প্রাপ্তি পর্যন্ত 60-90
                        কার্যদিবস লাগতে পারে। এয়ারলাইনস এবং অন্যান্য সাপ্লায়ার
                        ছাড়াও HAMS প্রযোজ্য হিসাবে একটি পোস্ট-টিকিটিং পরিষেবা ফি
                        নেবে। সমস্ত রিফান্ড ফি জনপ্রতি টিকিটের ভিত্তিতে নেওয়া
                        হয়। এই ফিগুলি কেবলমাত্র তখনই মূল্যায়ন করা হবে যদি
                        সাপ্লায়ার কর্তৃক ফেরত অনুমোদিত হয় বা মওকুফ পাওয়া যায় এবং
                        যখন বিমান / সাপ্লায়ার নিয়মগুলি এই জাতীয় ফেরতের অনুমতি
                        দেয়। যদি সাপ্লায়ার দ্বারা এই ধরনের রিফান্ড প্রক্রিয়া করা
                        না হয়, আমরা আপনাকে আপনার এজেন্ট অ্যাসিস্টেড রিফান্ড
                        অনুরোধের জন্য প্রযোজ্য আমাদের পোস্ট-টিকিটিং পরিষেবা ফি
                        ফেরত দেব, কিন্তু মূল ভ্রমণ রিজার্ভেশন বা বুকিং জন্য
                        আমাদের বুকিং ফি নয়।
                        <br />
                        <br />
                        আমাদের কম্পাশন এক্সেপশন পলিসি (সিইপি) অনুযায়ী, আমরা
                        বাংলাদেশ সামরিক, প্রাকৃতিক দুর্যোগ, শোক, দৃষ্টি
                        প্রতিবন্ধী গ্রাহক, প্রবীণ নাগরিক এবং যুবদের জন্য বিশেষ
                        ছাড় প্রদান করি। দয়া করে কম্পাশন এক্সেপশন পলিসি (সিইপি)
                        বিস্তারিত পর্যালোচনা করুন।
                        <br />
                        <br />
                        ক্যান্সেলেশন পাসওয়ার্ড - আপনার নিরাপত্তার জন্য, বুকিং
                        কেবল নিবন্ধিত ইমেইলের মাধ্যমে বাতিল করা যেতে পারে, এবং
                        ফোন কল বা ওয়েব চ্যাটের মাধ্যমে নয়। আপনার পক্ষ থেকে বুকিং
                        বাতিল করার জন্য HAMS কে অনুরোধ করার সময়, আমাদের এজেন্টরা
                        আপনাকে আপনার নিবন্ধিত ইমেইলে একটি ইমেইল পাঠাবে যাতে আপনি
                        আমাদের কাছ থেকে টিকিটটি বুক করেছিলেন। যদি আপনি আপনার
                        ইমেইল অ্যাক্সেস করতে না পারেন, তবে আমরা বাতিলের জন্য
                        আপনার অনুরোধ প্রক্রিয়া করতে সক্ষম হব না।
                    </>
                ),
            },
            {
                id: "promoCodes",
                title: "প্রোমো কোড",
                content: (
                    <>
                        HAMS কিছু নির্দিষ্ট প্রোমো কোড ইস্যু করতে পারে যা
                        সাধারণত অনলাইন ভ্রমণ রিজার্ভেশন এবং বুকিংয়ের জন্য বৈধ,
                        যদিও কিছু নির্দিষ্ট HAMS প্রোমো কোড শুধুমাত্র আমাদের
                        গ্রাহক সেবা কেন্দ্রের মাধ্যমে ফোনে ব্যবহার করা যেতে
                        পারে।
                        <br /> <br />
                        আমরা আপনাকে ইমেইল দ্বারা প্রোমো কোড গ্রহণ করার জন্য
                        আমাদের নিউজলেটারের জন্য সাইন আপ করার জন্য আমন্ত্রণ
                        জানাচ্ছি।
                        <br /> <br />
                        সকল প্রোমো কোড থেকে সর্বোচ্চ ডিসকাউন্ট আমাদের সার্ভিস ফি
                        এবং/অথবা &apos;&apos;ট্রাভেলার অ্যাসিস্ট&apos;&apos; ফি
                        এর মূল্য ৭০% পর্যন্ত।
                        <br /> <br />
                        HAMS promo codes are non-transferable, cannot be sold or
                        bartered and hold no cash value.
                        <br /> <br />
                        ডিসকাউন্টের মূল্য পেতে হলে পেমেন্ট পেজের প্রোমো কোড
                        লিংকে একটি বৈধ প্রোমো কোড দিতে হবে। যদি কোডটি প্রবেশ না
                        করা হয় তবে ছাড়টি পুনরুদ্ধার করা যাবে না এবং এর কোনও
                        মূল্য নেই। প্রযুক্তিগত সমস্যার কারণে, যদি কোড গ্রহণ না
                        করা হয় বা কুপন লিঙ্ক উপস্থিত না থাকে, তবে আপনার পণ্য বা
                        পরিষেবা ক্রয় না করার অধিকার রয়েছে, তবে কোনও পরিস্থিতিতে
                        ক্রয় করার পরে ক্রেডিট প্রয়োগ করা হবে না।
                        <br /> <br />
                        HAMS promo codes offers may be revised or withdrawn any
                        time without notice, even if other websites are
                        displaying the same offers.
                        <br /> <br />
                        প্রযুক্তিগত ত্রুটির ক্ষেত্রে আপনার ক্রয় করা থেকে বিরত
                        থাকার অধিকার আছে।
                        <br /> <br />
                        অফারটি প্রত্যাহার করা হলে প্রোমো কোডটি অবৈধ হয়ে যায় এবং
                        সাইট এবং সিস্টেমটি প্রবেশ করার সময় প্রোমো কোড গ্রহণ করবে
                        না। এটি চূড়ান্ত এবং আপনার সেই বিন্দুতে মূল মূল্যের সাথে
                        চালিয়ে যাওয়ার বা আপনার ক্রয়ের সাথে চালিয়ে না যাওয়ার
                        অধিকার রয়েছে।
                        <br /> <br />
                        (প্রোমো কোড সহ বা ছাড়া) প্রদর্শিত চূড়ান্ত মূল্য হবে
                        বিলকৃত/চার্জকৃত পরিমাণ এবং নিতান্তই কোন কারণে ক্রয়ের পর
                        কোন ক্রেডিট/ডিসকাউন্ট প্রযোজ্য হবে না।
                        <br /> <br />
                        HAMS প্রোমো কোড এর সাথে আরেকটি অফার যুক্ত না হতে পারে।
                        <br /> <br />
                        বুকিং তৈরি এবং বুকিং রসিদ জারি করার পরেও প্রোমো কোড
                        মূল্যে ত্রুটি থাকতে পারে এমন যে কোনও লেনদেন প্রত্যাখ্যান
                        করার অধিকার আমরা রিজার্ভেশন করি।
                    </>
                ),
            },
            {
                id: "promoCodeTerms",
                title: "প্রোমো কোডের শর্তাবলী",
                content: (
                    <>
                        প্রোমো কোড অফারটি শুধুমাত্র আমাদের ট্রানজেকশন সার্ভিস ফি
                        এর উপর, সেই টিকিট বা ভ্রমণ সংরক্ষণের জন্য নেওয়া লেনদেন
                        পরিষেবা ফিগুলির উপর ভিত্তি করে ছাড় পরিবর্তিত হয়, এবং
                        ডিসকাউন্টের মূল্য হবে সেই লেনদেনের জন্য আরোপিত সার্ভিস
                        ফি বা প্রতি লেনদেনে প্রোমো কোডের মূল্য যা কম হবে তার
                        পরিমাণ পর্যন্ত। এই অফারটি রিডিম করার জন্য আপনাকে অবশ্যই
                        চেক-আউটে প্রোমো কোডটি ব্যবহার করতে হবে। এই অফারটি বিনা
                        নোটিশে সংশোধন বা বাতিল করা যেতে পারে।
                    </>
                ),
            },
            {
                id: "fareChangesAndPostPaymentPriceGuarantee",
                title: "ভাড়ার পরিবর্তন এবং বেতনের মূল্যের নিশ্চয়তা",
                content: (
                    <>
                        আপনার পেমেন্টের ফর্মটি প্রক্রিয়াজাত করার আগে এবং সফলভাবে
                        গ্রহণ করার আগে, যদি বিমান ভাড়া বা অন্য কোনও পরিবর্তন হয়,
                        আপনাকে এই পরিবর্তন সম্পর্কে অবহিত করা যেতে পারে এবং
                        কেবলমাত্র এই জাতীয় বিজ্ঞপ্তিতে আপনার এই লেনদেনটি গ্রহণ
                        বা প্রত্যাখ্যান করার অধিকার রয়েছে। যদি আপনি এই লেনদেন
                        প্রত্যাখ্যান করতে নির্বাচন করেন, আপনি চার্জ করা হবে না।
                        <br />
                        <br />
                        আমাদের পোস্ট পেমেন্ট প্রাইস গ্যারান্টি: আপনার পেমেন্ট
                        (ক্রেডিট / ডেবিট কার্ড) সফলভাবে গ্রহণ এবং প্রক্রিয়াকরণের
                        পরে, আমরা গ্যারান্টি দিচ্ছি যে আমরা বিমান ভাড়ার মূল্যে
                        কোনও পরিবর্তন বা ওঠানামা নির্বিশেষে বিমান টিকিটের
                        চূড়ান্ত উদ্ধৃত মূল্যে ১০০০ টাকা সম্মান জানাব।
                    </>
                ),
            },
            {
                id: "paymentAcceptancePolicy",
                title: "পেমেন্ট গ্রহণ নীতি",
                content: (
                    <>
                        আমরা বাংলাদেশসহ বেশ কয়েকটি দেশে ইস্যুকৃত ক্রেডিট কার্ড ও
                        ডেবিট কার্ড বিলিং সেকশনে তালিকাভুক্ত হিসেবে গ্রহণ করি।
                        <br />
                        <br />
                        আমরা ক্যাশ ইন অফিস, বিকাশ, অনলাইন ব্যাংক ট্রান্সফার
                        ইত্যাদি পদ্ধতিও গ্রহণ করি।
                        <br />
                        <br />
                        দয়া করে লক্ষ্য করুন: আপনার ক্রেডিট/ডেবিট কার্ড একাধিক
                        চার্জে বিল করা হতে পারে যা মোট মূল্যের সমান। আপনার
                        ক্রেডিট/ডেবিট কার্ড বা অন্য কোন ধরনের পেমেন্ট যদি কোন
                        কারণে প্রসেস বা গ্রহণ করা না হয়, তাহলে আমরা ২৪ ঘন্টার
                        মধ্যে আপনাকে অবহিত করব (ননক্রেডিট/ডেবিট কার্ড পেমেন্ট
                        মেথডের জন্য ২৪ ঘন্টার বেশি সময় লাগতে পারে)। আপনার
                        পেমেন্টের ফর্মটি প্রক্রিয়াজাত করার আগে এবং সফলভাবে গ্রহণ
                        করার আগে, যদি বিমান ভাড়া বা অন্য কোনও পরিবর্তন হয়,
                        আপনাকে এই পরিবর্তন সম্পর্কে অবহিত করা যেতে পারে এবং
                        কেবলমাত্র এই জাতীয় বিজ্ঞপ্তিতে আপনার এই লেনদেনটি গ্রহণ
                        বা প্রত্যাখ্যান করার অধিকার রয়েছে। যদি আপনি এই লেনদেন
                        প্রত্যাখ্যান করতে নির্বাচন করেন, আপনি চার্জ করা হবে না।
                        <br />
                        <br />
                        দয়া করে লক্ষ্য করুন: সমস্ত হোটেল, গাড়ি ভাড়া এবং
                        ট্যুর/অ্যাকটিভিটি বুকিং শুধুমাত্র আপনার রিজার্ভেশনের
                        সাথে সরবরাহ করা ইমেলে সম্পূর্ণ নিশ্চিতকরণ বিবরণ সরবরাহ
                        করার পরে নিশ্চিত করা হয়। কিছু ক্ষেত্রে, কনফার্মেশন
                        পাওয়ার জন্য প্রি-পেমেন্টের প্রয়োজন হতে পারে।
                        <br />
                        <br />
                        আপনাকে আরও সুরক্ষা প্রদান করার জন্য, যখন নির্দিষ্ট
                        লেনদেনগুলি আমাদের সিস্টেম দ্বারা উচ্চ-ঝুঁকি হওয়ার জন্য
                        নির্ধারিত হয়, আমরা এই জাতীয় লেনদেনগুলি প্রক্রিয়া করব না
                        যদি না আমাদের ক্রেডিট কার্ড ভেরিফিকেশন গেটওয়ে টিম
                        নির্ধারণ করে যে সেগুলি প্রক্রিয়া করা নিরাপদ। এই ধরনের
                        লেনদেনের বৈধতা প্রতিষ্ঠার জন্য, আমরা আপনার বা আপনার
                        ব্যাংকের সাথে যোগাযোগ করতে পারি।
                    </>
                ),
            },
            {
                id: "ticketDelivery",
                title: "টিকিট ডেলিভারি",
                content: (
                    <>
                        বেশিরভাগ টিকিট ইলেকট্রনিক (ই-টিকিট) হয়, তবে কিছু
                        নির্দিষ্ট ভ্রমণের সাথে যেখানে একটি ই-টিকিট পাওয়া যায় না
                        সেখানে একটি কাগজের টিকিট দেওয়া হবে। যদি কোনও নির্দিষ্ট
                        সংরক্ষণের জন্য ই-টিকেট জারি করা যায় না বা যদি কোনও
                        ডেলিভারি অন্য কোনও পণ্য বা পরিষেবা তৈরি করা হচ্ছে,
                        তবেFEBD Ltd. কাগজের টিকিট, পণ্য বা পরিষেবাটি সরবরাহ করার
                        একটি সুরক্ষিত মোডের (একটি সম্মানিত ক্যারিয়ার সংস্থা)
                        মাধ্যমে প্রেরণ করবে।FEBD Ltd. ডেলিভারি কোম্পানির ভুলের
                        জন্য কোনো দায়ভার গ্রহণ করে না। আমরা রি-ডিলিভার করার
                        চেষ্টা করব, কিন্তু সময়মতো রি-ডিলিভারির গ্যারান্টি দেব
                        না। যদি আপনি একটি ভুল ঠিকানা প্রদান করেন, তাহলে ঠিকানা
                        পরিবর্তনের জন্য আপনাকে ডেলিভারি কোম্পানিকে অতিরিক্ত ফি
                        দিতে হতে পারে। ই-টিকিট তৈরি হলে টিকিটের তথ্য সাইটে পাওয়া
                        যাবে।
                    </>
                ),
            },
            {
                id: "creditDebitCardPayments",
                title: "Cক্রেডিট / ডেবিট কার্ড পেমেন্টস",
                content: (
                    <>
                        সব ক্রেডিট কার্ডেই থাকতে হবে ভেরিফাইড বাংলাদেশ বা অন্য
                        দেশের বিলিং অ্যাড্রেস। যেসব দেশে ক্রেডিট কার্ড গ্রহণ করা
                        হয় তার তালিকা দেখতে চেক-আউট পাতায় ড্রপ মেনু ডাউনে ক্লিক
                        করুন।
                        <br /> <br />
                        সাপ্লায়ার দ্বারা টিকিট না করা পর্যন্ত সমস্ত বুকিং এবং
                        ভাড়ার গ্যারান্টি দেওয়া হয় না। হোটেল, গাড়ি ভাড়া, এবং
                        ছুটির প্যাকেজের জন্য, বুকিং নিশ্চিত করা হয় না যদি না
                        আপনি ইমেইল দ্বারা একটি নিশ্চিতকরণ নম্বর পান।
                        <br /> <br />
                        যখন আপনি একটি ক্রয়ের জন্য আপনার ক্রেডিট বা ডেবিট কার্ড
                        জমা করেন, আমরা আপনার প্রত্যাশিত লেনদেনের পরিমাণের জন্য
                        একটি অনুমোদনের অনুরোধ করি ( তহবিলগুলিতে একটি অস্থায়ী
                        &apos;&apos;হোল্ড&apos;&apos; স্থাপন করে)। যদি কোনও
                        কারণে আমরা আপনার বুকিং নিশ্চিত করতে অক্ষম হই, তবে আপনাকে
                        চার্জ দেওয়া হবে না এবং আমরা অনুরোধ করব যে এই হোল্ডটি
                        আপনার ক্রেডিট বা ডেবিট কার্ড ব্যাংক দ্বারা মুক্তি দেওয়া
                        হোক; ততক্ষণ পর্যন্ত, হোল্ডের সাপেক্ষে তহবিলগুলি অন্যান্য
                        উদ্দেশ্যে আপনার কাছে পাওয়া যাবে না।
                        <br /> <br />
                        যদি কোনও কারণে আপনার ক্রেডিট কার্ডটি প্রত্যাখ্যান করা
                        হয়, তবে আমরা ৭২ ঘণ্টার মধ্যে আপনাকে অবহিত করব। শুধু
                        ক্রেডিট কার্ড জমা দিলেই স্বয়ংক্রিয়ভাবে টিকিটের
                        গ্যারান্টি মিলবে না।
                        <br /> <br />
                        HAMS আপনার ক্রেডিট বা ডেবিট কার্ড অনুমোদিত বা চার্জ করা
                        না হলে কোনও দায়িত্ব বহন করে না।
                        <br /> <br />
                        আপনার ক্রেডিট বা ডেবিট কার্ড অনুমোদন বা চার্জ না হওয়ার
                        অনেক কারণ থাকতে পারে। এর উদাহরণ হতে পারে: এয়ারলাইন বুকিং
                        নিশ্চিত করতে পারেনি, পেমেন্ট তথ্য জমা দেওয়ার পর থেকে
                        ভাড়া বৃদ্ধি পেয়েছে এবং টিকিটের আগে; বা ক্রেডিট কার্ডে
                        পর্যাপ্ত তহবিল পাওয়া যায় না। এই ধরনের ক্ষেত্রে যেখানে
                        ভাড়া বৃদ্ধি পেতে পারে, আপনাকে বিকল্প বিকল্পগুলি সরবরাহ
                        করা হবে এবং আপনার কোনও মূল্য ছাড়াই বুকিং বাতিল করার
                        অধিকার রয়েছে। যখন বুকিংটি মূলত আপনার কাছে উদ্ধৃত মূল্যে
                        টিকিট করা হয় তখন টিকিটটি অ-রিফান্ডেবল এবং অ-ক্যানসেলেবল
                        হয়ে যায়।
                        <br /> <br />
                        HAMS ক্রেডিট কার্ড পেমেন্ট প্রক্রিয়াকরণের জন্য কঠোর
                        নিরাপত্তা ব্যবস্থা ব্যবহার করে। প্রতারণামূলক লেনদেন, যদি
                        থাকে, তবে বিমানবন্দরের নিরাপত্তা, বিমান সংস্থা এবং
                        অন্যান্য আইন প্রয়োগকারী সংস্থাকে জানানো হয়।
                        <br /> <br />
                        আপনি যে কোনও এবং সমস্ত ক্রেডিট কার্ড পেমেন্টের জন্য
                        দায়বদ্ধ হতে সম্মত হন এবং আপনি ক্রয় করা হয়েছে এবং আপনার
                        টিকিট এবং / বা অন্যান্য পণ্য ইমেইল নিশ্চিতকরণ দ্বারা
                        সরবরাহ করা হয়েছে বা আপনার কাছে পাঠানো হয়েছে পরে চার্জ
                        বিতর্ক না করতে সম্মত।FEBD Ltd. চার্জ ব্যাক বা ক্রেডিট
                        কার্ড বিরোধের ক্ষেত্রে পুনরায় পরিশোধ করতে সম্মত হন
                        যেখানে আপনি আমাদের ওয়েবসাইটে সত্যই একটি পরিষেবা কিনেছেন।
                        <br /> <br />
                        আমাদের কাস্টমার সার্ভিস ডিপার্টমেন্টে ফোনে বেশিরভাগ
                        ক্রেডিট কার্ড লেনদেন রেকর্ড করা হয় এবং যে কোনও বিরোধের
                        ক্ষেত্রে প্রমাণ হিসাবে পাওয়া যায়।
                        <br /> <br />
                        অনলাইন ক্রেডিট কার্ড লেনদেনগুলি সেই সময়ে অনুমোদিত হয় যখন
                        কোনও ব্যবহারকারী বা তাদের পক্ষে কাজ করে এমন কেউ এই
                        শর্তাবলী এবং শর্তাবলী গ্রহণ করে এবং ক্রয় চালিয়ে যায়।
                        <br /> <br />
                        যখন কিছু লেনদেন আমাদের সিস্টেম দ্বারা উচ্চ ঝুঁকির জন্য
                        নির্ধারিত হয়, তখন আমরা এই ধরনের লেনদেন প্রক্রিয়াজাত করব
                        না যদি না আমাদের ক্রেডিট কার্ড ভেরিফিকেশন টিম নির্ধারণ
                        করে যে এটি প্রক্রিয়াজাত করা নিরাপদ। এই ধরনের লেনদেনের
                        বৈধতা প্রতিষ্ঠার জন্য, আমরা আপনার বা আপনার ব্যাংকের সাথে
                        যোগাযোগ করতে পারি।
                    </>
                ),
            },
            {
                id: "creditCardDeclines",
                title: "ক্রেডিট কার্ড বাতিল হলে",
                content: (
                    <>
                        যদি আপনার লেনদেন প্রক্রিয়া করার সময় আপনার ক্রেডিট কার্ড
                        হ্রাস পায়, তবে আমরা ৭২ ঘন্টার মধ্যে আপনাকে ইমেইল দ্বারা
                        অবহিত করার জন্য সমস্ত প্রচেষ্টা করব। যদি আপনার ক্রেডিট
                        কার্ডটি বাতিল হয়ে যায় তবে লেনদেনটি প্রক্রিয়া করা হবে না।
                        ভাড়া এবং বুকিং সংক্রান্ত অন্য কোনও তথ্যের গ্যারান্টি
                        নেই।
                        <b>
                            যদি আপনার লেনদেন প্রক্রিয়া করার সময় আপনার ক্রেডিট
                            কার্ড হ্রাস পায়, তবে আমরা ৭২ ঘন্টার মধ্যে আপনাকে
                            ইমেইল দ্বারা অবহিত করার জন্য সমস্ত প্রচেষ্টা করব।
                            যদি আপনার ক্রেডিট কার্ডটি বাতিল হয়ে যায় তবে লেনদেনটি
                            প্রক্রিয়া করা হবে না। ভাড়া এবং বুকিং সংক্রান্ত অন্য
                            কোনও তথ্যের গ্যারান্টি নেই।
                        </b>
                    </>
                ),
            },
            {
                id: "seatsMealsFrequentFlyerAndOtherSpecialRequests",
                title: "সীট, মিল, ফ্রিকোয়েন্ট ফ্লায়ার এবং অন্যান্য স্পেশাল রিকোয়েস্ট",
                content: (
                    <>
                        দয়া করে লক্ষ্য করুন যে আপনার আসন, খাবার, ঘন ঘন উড়ন্ত এবং
                        অন্যান্য বিশেষ অনুরোধ শুধুমাত্র অনুরোধ। বিজ্ঞপ্তি ছাড়াই
                        অনুরোধকৃত আসন বরাদ্দে যে কোনও সংশোধন প্রয়োগের অধিকার
                        বিমান সংস্থা রিজার্ভেশন করে। বিমান সংস্থার কাছে সব
                        অনুরোধ যাচাই করে নিতে হবে। আপনি যে আসনের জন্য অনুরোধ
                        করেছেন, তা আপনাকে দেওয়া হবে বলে আমরা নিশ্চয়তা দিচ্ছি না।
                        এছাড়াও আমরা আপনার খাবার, ঘন ঘন উড়োজাহাজ এবং অন্যান্য
                        বিশেষ অনুরোধ এয়ারলাইন দ্বারা নিশ্চিত করা হবে যে
                        গ্যারান্টি দেয় না। তাই এই অনুরোধগুলি নিশ্চিত করার জন্য
                        সরাসরি আপনার এয়ারলাইনের সাথে যোগাযোগ করার সুপারিশ করা
                        হয়।
                    </>
                ),
            },
            {
                id: "baggagePolicyAndFees",
                title: "ব্যাগেজ পলিসি ও ফি",
                content: (
                    <>
                        যদি আপনার অতিরিক্ত লাগেজ থাকে, তবে আপনাকে প্রতিটি
                        এয়ারলাইনের দ্বারা মূল্যায়ন করা যে কোনও অতিরিক্ত লাগেজ ফি
                        দিতে হবে। এই খরচ কমানোর জন্য আমরা আলো ভ্রমণের পরামর্শ
                        দিচ্ছি। প্রতিটি এয়ারলাইনের জন্য অতিরিক্ত ওজনের ব্যাগেজ
                        ফি খুঁজে পেতে, অনুগ্রহ করে আমাদের বুকড এয়ারলাইন পৃষ্ঠা
                        দেখুন। এই পরিষেবা ব্যবহার করার পরে এই ফিগুলি সরাসরি
                        বিমান সংস্থাকে প্রদান করা হয়। আমরা ব্যাগেজ ফি টেবিল
                        হালনাগাদ রাখার চেষ্টা করি কিন্তু আমরা আপনাকে চেক ব্যাগেজ
                        এবং পলিসির সর্বশেষ ফিগুলির জন্য সরাসরি বিমান সংস্থার
                        সাথে যোগাযোগ করার পরামর্শ দিই কারণ এটি ব্যাগেজের সাথে
                        সম্পর্কিত।
                    </>
                ),
            },
            {
                id: "baggagePolicyOnConnectingFlights",
                title: "বিমান সংযোগ স্থাপনে ব্যাগেজ নীতি",
                content: (
                    <>
                        যখন কানেক্টিং ফ্লাইটের জন্য দুই বা ততোধিক এয়ারলাইন্স
                        জড়িত থাকে, তখন আপনাকে কানেক্টিং এয়ারপোর্টে আপনার
                        ব্যাগগুলি পুনরায় দাবি করতে হতে পারে এবং আপনার যাত্রা
                        অব্যাহত রাখার জন্য আবার চেক-ইন করতে হতে পারে। এসব
                        ক্ষেত্রে অতিরিক্ত লাগেজ থাকলে প্রতিটি এয়ারলাইনের
                        মূল্যায়ন করা যেকোনো অতিরিক্ত লাগেজ ফি দিতে হবে। এই খরচ
                        কমানোর জন্য আমরা আলো ভ্রমণের পরামর্শ দিচ্ছি।
                    </>
                ),
            },
            {
                id: "airlinesScheduleChangesFlightCancellations",
                title: "এয়ারলাইনস শিডিউল পরিবর্তন/ফ্লাইট বাতিলকরণ",
                content: (
                    <>
                        <b className='text-xl text-gray-800'>
                            সময়সূচী পরিবর্তনের বিষয়ে এয়ারলাইন নীতি:
                        </b>{" "}
                        <br />
                        <br />
                        সব এয়ারলাইন্সের শিডিউল পরিবর্তনের বিষয়ে ভিন্ন ভিন্ন নিয়ম
                        ও নীতিমালা রয়েছে, যা আমাদের নিয়ন্ত্রণের বাইরে। <br />
                        <br />
                        প্রতিটি এয়ারলাইন্সের অপারেশনাল প্রয়োজনীয়তার কারণে, তারা
                        বর্তমানে যে ফ্লাইট পরিচালনা করছে তাতে প্রায়শই পরিবর্তন
                        করা হয়। প্রায়ই এই পরিবর্তনগুলি ভবিষ্যতের তারিখগুলির জন্য
                        ভ্রমণের প্রয়োজনীয়তার পূর্বাভাস হয় তবে একই দিনের
                        পরিবর্তনগুলিও প্রতিফলিত করতে পারে। পরিবর্তন হতে পারে:
                        ফ্লাইট নম্বর পরিবর্তন, সময় পরিবর্তন, রুটিং, তারিখ
                        পরিবর্তন এবং বা বাতিল। বাতিলের মধ্যে রয়েছে যখন কোনও
                        বিমান সংস্থা নির্দিষ্ট শহরে পরিষেবা বন্ধ করে দেয় বা
                        সাময়িকভাবে বাতিল করে দেয়, বা সপ্তাহের নির্দিষ্ট দিনে
                        পরিষেবা বন্ধ করে দেয়। <br />
                        <br />
                        <b className='text-xl text-gray-800'>বাতিল: </b>
                        <br />
                        <br />
                        <b className='text-gray-800'>
                            বাতিল বা সময়সূচী পরিবর্তনের কারণগুলির মধ্যে
                            অন্তর্ভুক্ত হতে পারে:
                        </b>{" "}
                        <br />
                        <br /> <br />
                        উচ্চ বা উচ্চ ভ্রমণ ঋতু
                        <br /> <br />
                        কম ভ্রমণ মৌসুম;
                        <br /> <br />
                        বিমানবন্দর টার্মিনাল বা গেট পরিবর্তন;
                        <br /> <br />
                        জ্বালানি তেলের দাম
                        <br /> <br />
                        নাগরিক অশান্তি;
                        <br /> <br />
                        প্রাকৃতিক দুর্যোগ দেউলিয়াত্ব।
                        <br /> <br />
                        <br />
                        HAMS বাতিল হওয়া ফ্লাইট, ফ্লাইটগুলি বাদ পড়া বা বিমান
                        সংস্থার কোনও নির্ধারিত পরিবর্তনের কারণে সংযুক্ত না হওয়া
                        ফ্লাইটগুলির জন্য কোনও দায়বদ্ধতা গ্রহণ করে না।
                        <br />
                        <br />
                        <br />
                        <b className='text-gray-800'>
                            সময়সূচীর পরিবর্তনের ক্ষেত্রে আমাদের নীতি:
                        </b>
                        <br />
                        <br />
                        <br />
                        আমরা যেকোনো সময়সূচী পরিবর্তনের বিষয়ে গ্রাহককে অবহিত করার
                        জন্য সর্বাত্মক চেষ্টা করি। প্রস্থানের ৭২ ঘন্টার মধ্যে
                        আপনাকে পুনরায় নিশ্চিত করার জন্য এয়ারলাইনের সাথে যোগাযোগ
                        করা সর্বদা ভাল। <br />
                        <br />
                        <br />
                        <b className='text-gray-800'>গ্রাহকের দায়িত্ব:</b>{" "}
                        <br />
                        <br />
                        প্রস্থানের ২৪ থেকে ৭২ ঘন্টা আগে, বিশেষ করে যদি তারা
                        ইতিমধ্যে ভ্রমণ করে থাকে, তবে গ্রাহকের জন্য সর্বদা
                        এয়ারলাইন্সের সাথে তাদের ফ্লাইটগুলি পুনরায় নিশ্চিত করা
                        গুরুত্বপূর্ণ। ফ্লাইট শিডিউল সংক্রান্ত আপডেটের জন্য আপনার
                        মাঝে মাঝে ইমেইল চেক করা উচিত এবং যথাসময়ে উত্তর দেওয়া
                        উচিত।
                    </>
                ),
            },
            {
                id: "unaccompaniedMinor",
                title: "তত্ত্বাবধান ছাড়া ভ্রমণরত অপ্রাপ্তবয়স্ক শিশু",
                content: (
                    <>
                        ১৮ বছর বা তার কম বয়সী অপ্রাপ্তবয়স্কদের সরাসরি টিকিট
                        বিক্রি করা যাবে না। প্রতিটি বিমান সংস্থা প্রাপ্তবয়স্কদের
                        তত্ত্বাবধান ছাড়া ভ্রমণরত শিশুদের জন্য নিজস্ব নীতি ও নিয়ম
                        নির্ধারণ করে। দয়া করে এয়ারলাইনের সাথে সরাসরি চেক করুন
                        ছোট বয়সের প্রয়োজনীয়তার জন্য, কারণ নিম্নলিখিত আইটেমগুলি
                        পরিবর্তিত হতে পারে:
                        <br />
                        <br />
                        কিছু বিমান সংস্থা হয়তো অপ্রাপ্তবয়স্কদের প্রাপ্তবয়স্ক
                        ছাড়া ভ্রমণের অনুমতি দেয় না।
                        <br />
                        <br />
                        কিছু বিমান সংস্থা শুধু নন-স্টপ ফ্লাইটে অপ্রাপ্তবয়স্কদের
                        ভ্রমণের অনুমতি দেবে।
                        <br />
                        <br />
                        অনেক এয়ারলাইন্সের চেক-ইনের সময় অতিরিক্ত ফি দিতে হতে
                        পারে।
                        <br />
                        <br />
                        আপনাকে বিমান সংস্থাকে কল করতে হবে একা একা ভ্রমণ করা
                        অপ্রাপ্তবয়স্কদের জন্য নিয়ম এবং সীমাবদ্ধতা যাচাই করার
                        জন্য।
                    </>
                ),
            },
            {
                id: "visaAndEntryRequirements",
                title: "ভিসা এবং প্রবেশের প্রয়োজনীয়তা",
                content: (
                    <>
                        সমস্ত গ্রাহকদের পরামর্শ দেওয়া হয় যে দেশের মাধ্যমে তারা
                        ট্রানজিট করছে এবং / বা প্রবেশ করছে তার জন্য ভ্রমণ নথি
                        (ট্রানজিট ভিসা / প্রবেশ ভিসা) যাচাই করতে।FEBD Ltd. দায়ী
                        থাকবে না যদি সঠিক ভ্রমণ নথি পাওয়া না যায় এবং আপনাকে একটি
                        দেশে প্রবেশ বা ট্রানজিট থেকে বঞ্চিত করা হয়।
                        <br /> <br />
                        HAMS এর সাথে আপনার লেনদেন গন্তব্যের দেশে প্রবেশের
                        গ্যারান্টি দেয় না। ট্রাভেলার বুঝতে পারে যে HAMS কোনও
                        নির্দিষ্ট দেশের মাধ্যমে প্রবেশ বা ট্রানজিট করার জন্য
                        যাত্রীর যোগ্যতা নির্ধারণের জন্য কোনও দায়িত্ব গ্রহণ করে
                        না। HAMS এর কর্মচারীদের দেওয়া তথ্য, যদি থাকে, তা অবশ্যই
                        সরকারি কর্তৃপক্ষের সাথে যাচাই করতে হবে। HAMS&apos;s এর
                        পক্ষে দায়বদ্ধতা বোঝায় না।
                    </>
                ),
            },
            {
                id: "ticketProcessingErrorsIssuesDisclaimer",
                title: "টিকটিং প্রক্রিয়ার ত্রুটি / সমস্যাজনিত ডিসক্লেমার",
                content: (
                    <>
                        HAMS ক্রেডিট কার্ডের তথ্যের ভুল এবং / বা অসম্পূর্ণ
                        যাচাই, এবং / বা ক্রেডিট কার্ড হ্রাস এবং / বা প্রযুক্তিগত
                        ত্রুটির কারণে প্রক্রিয়া করা যায়নি এমন কোনও টিকিটের জন্য
                        দায়ী নয়। অত্যন্ত বিরল ক্ষেত্রে, টিকেটিং প্রক্রিয়া শেষ
                        হওয়ার আগে এয়ারলাইন্সের ভাড়া পরিবর্তন হতে পারে, এই
                        ক্ষেত্রে,HAMS তিন (৩) ব্যবসায়িক দিনের মধ্যে কোনও ভাড়া
                        পরিবর্তন সম্পর্কে আপনাকে অবহিত করার অধিকার রিজার্ভেশন
                        করে। আপনার মূল ফ্লাইটগুলি সম্মানিত করা যাবে না এমন
                        ক্ষেত্রে,HAMS বিকল্প ফ্লাইট / ভাড়া বিকল্প সরবরাহ করার
                        জন্য সমস্ত প্রচেষ্টা করবে। যদি আমরা আপনার সাথে যোগাযোগ
                        করতে ব্যর্থ হই, তবে আমরা আপনার বুকিং বাতিল করার অধিকার
                        রিজার্ভেশন করি। আমরা আপনাকে একটি ই-মেইল পাঠিয়ে বাতিলের
                        পরামর্শ দেব এবং এটি চূড়ান্ত বিজ্ঞপ্তি হিসাবে কাজ করবে।
                        HAMS কোন ভাড়া বৃদ্ধির জন্য দায়ী থাকবে না এবং এই ক্ষেত্রে
                        আপনার কাছে কোন খরচ ছাড়াই বুকিং বাতিল করার অধিকার রয়েছে।
                        টিকিট না পাওয়া পর্যন্ত সব ভাড়ার গ্যারান্টি নেই।
                    </>
                ),
            },
            {
                id: "humanError",
                title: "মানব ত্রুটি",
                content: (
                    <>
                        যদি আমাদের কোনও এজেন্ট, বুকিং প্রক্রিয়ায় কোনও ভুল করে
                        তবে আমরা ঘটনার সময় এই ত্রুটিগুলি সংশোধন করার যুক্তিসঙ্গত
                        চেষ্টা করব। HAMS ভবিষ্যতে 12 মাসের মধ্যে HAMSথেকে ক্রয়র
                        জন্য মুক্তি হিসাবে ২০০০ বিডিটি কুপন ছাড়াও সেই বুকিংয়ের
                        জন্য HAMS has collected for that booking in addition to
                        a 2000 BDT coupon as redemption towards purchases from
                        HAMS যে সমস্ত পরিষেবা ফি সংগ্রহ করেছে তার সর্বোচ্চ
                        ক্ষতিপূরণ প্রদান করতে প্রতিশ্রুতিবদ্ধ। আপনার ভ্রমণসূচি
                        পাওয়ার ২৪ ঘন্টার মধ্যে আপনাকে অবশ্যই আমাদের ভুল সম্পর্কে
                        অবহিত করতে হবে। এই ২৪ ঘণ্টার সময়সীমার বাইরে এই ভুলের
                        জন্যFEBD Ltd. দায়ী থাকবে না।
                    </>
                ),
            },
            {
                id: "itineraryReConfirmation",
                title: "আইটিইনাররি রি-কনফিরামেশন",
                content: (
                    <>
                        যে ট্রাভেলার আমাদের সঙ্গে অনলাইনে বুকিং দিয়েছে বা সরাসরি
                        কাস্টমার সার্ভিস এজেন্টের কাছে বুকিং দিয়েছে, তাদের নাম
                        পর্যালোচনা করে পুনরায় নিশ্চিত করার দায়িত্ব তার, তারিখ,
                        ফ্লাইট সংখ্যা, বিমানবন্দরের সমস্ত পরিবর্তন সহ এয়ারলাইন্স
                        এবং রুটিং। যদি আপনি আপনার ভ্রমণসূচিতে কোন অসঙ্গতি খুঁজে
                        পান, তবে বুকিং শেষ হওয়ার ৪ ঘন্টার মধ্যে অবিলম্বে HAMS
                        কাস্টমার সার্ভিস এজেন্টের সাথে যোগাযোগ করার জন্য অনুরোধ
                        করা হচ্ছে।
                        <br /> <br />
                        যদি আপনি বুকিং সম্পন্ন করার ৪ ঘন্টার মধ্যে ফোনের মাধ্যমে
                        আমাদের সাথে যোগাযোগ করতে ব্যর্থ হন, তবে আমরা আপনার কাছে
                        গ্রহণযোগ্য হিসাবে আপনি যে বুকিং করেছেন তা বিবেচনা করব
                        এবং আপনার বুকিংয়ের কোনও অসঙ্গতির জন্য এরপরে আমরা কোনও
                        দায়বদ্ধতা ধরে নেই।
                        <br /> <br />
                        ভ্রমণসূচি পর্যালোচনা করে রিজার্ভেশন করার জন্য আপনাকে
                        অনুরোধ করা হচ্ছে।
                    </>
                ),
            },
            {
                id: "hotelReservationsRulesAndRegulations",
                title: "হোটেল বুকিং বিধি ও বিধান",
                content: (
                    <>
                        হোটেলের ছবি এবং সেবা, সুযোগ-সুবিধা, পণ্য ইত্যাদি
                        সম্পর্কিত তথ্য সাপ্লায়ার আমাদের সরবরাহ করেছে। HAMS
                        সাপ্লায়ার হালনাগাদ করা হয়নি এমন কোনও পরিবর্তনের জন্য
                        কোনও দায়িত্ব গ্রহণ করে না।
                        <br /> <br />
                        নির্দিষ্ট বৈশিষ্ট্যগুলি যেমন বিছানার ধরন বা অ-ধূমপান
                        কক্ষগুলি অনুরোধ এবং হোটেল দ্বারা নির্দিষ্ট না হলে
                        গ্যারান্টি দেওয়া হয় না। যদিও অধিকাংশ হোটেল আপনার
                        অনুরোধের প্রতি সম্মান প্রদর্শনের চেষ্টা করবে, HAMS বা
                        হোটেল আপনার অনুরোধের প্রতি সম্মান প্রদর্শনের নিশ্চয়তা
                        দেবে না।এই হারগুলি আপনাকে চেক-ইনের সময় পরিচয় উপস্থাপন
                        করতে হবে যাতে আপনি প্রমাণ করতে পারেন যে আপনি এই বিশেষ
                        হারগুলির জন্য যোগ্য। যদি আপনি যোগ্যতা অর্জন না করেন বা
                        আপনার যোগ্যতা নিশ্চিত করার জন্য পরিচয়পত্র না থাকে তাহলে
                        হোটেলের সম্পত্তি এই হারকে সম্মান করতে বাধ্য নয়।
                        <br /> <br />
                        তাড়াতাড়ি চলে যাওয়ার কারণে রাতে রুম অব্যবহৃত থাকলে সেজন্য
                        কোনও রিফান্ড দেওয়া হবে না।
                        <br /> <br />
                        কিছু হোটেল অতিরিক্ত পরিষেবা হিসাবে বিমানবন্দর শাটল
                        সরবরাহ করে। হোটেলের প্রাপ্যতা ও দাম জানার জন্য চেক-ইনের
                        আগে সব সময় হোটেলের সঙ্গে যোগাযোগ করা উচিত।
                        <br /> <br />
                        বুকিং বোনাস যা হোটেল দ্বারা অফার করা হয়, যেমন বিনামূল্যে
                        ব্রেকফাস্ট, ট্যুর, ইত্যাদি সবই পরিবর্তন এবং প্রাপ্যতা
                        সাপেক্ষে এবং সরাসরি হোটেল দ্বারা নিয়ন্ত্রিত হয়।
                    </>
                ),
            },
            {
                id: "prePaidReservations",
                title: "প্রাক-পেইড রিজার্ভেশন :",
                content: (
                    <>
                        বুকিংয়ের সময় প্রিপেইড রিজার্ভেশন আপনার ক্রেডিট কার্ডে
                        চার্জ করা হয়। এই চার্জে সংরক্ষণের সম্পূর্ণ ভিত্তি পরিমাণ
                        (শুধুমাত্র কক্ষ) অন্তর্ভুক্ত রয়েছে। রিসোর্ট ফি, এনার্জি
                        সারচার্জ এবং ক্লিনিং ফি, প্রতিদিনের ভিত্তিতে নেওয়া যেতে
                        পারে। এ ছাড়া, তারা খাবার, সিনেমা, গেমস, ওয়েট বার,
                        পার্কিং এবং ফোন কলের মতো আনুষঙ্গিক বিষয়গুলোও সংগ্রহ
                        করবে। বুকিং-এর সময় শুধুই রেটের গ্যারান্টি দেওয়া হয়।
                    </>
                ),
            },
            {
                id: "prePaidBookingVouchers",
                title: "প্রি-পেইড বুকিং ভাউচার:",
                content: (
                    <>
                        কিছু হোটেলে চেক-ইনের সময় ভাউচার লাগবে। HAMS আপনার বুকিং
                        করার সময় আমাদের সরবরাহকৃত ইমেইল ঠিকানায় ভাউচার প্রেরণ
                        করবে। এটি সর্বদা সুপারিশ করা হয় যে আপনি চেক-ইন এ আপনার
                        সাথে আপনার ইমেইল নিশ্চিতকরণের একটি অনুলিপি রাখুন।
                    </>
                ),
            },
            {
                id: "bookNowPayLaterBookings",
                title: "বুক নাও, পে লেটার বুকিং:",
                content: (
                    <>
                        বুক নাউ, পে লেটার রিজার্ভেশন আপনার ক্রেডিট কার্ড ব্যবহার
                        করে আপনার রিজার্ভেশন ধরে রাখুন যতক্ষণ না আপনি চেক-ইনের
                        জন্য আসেন। HAMS দৃঢ়ভাবে সুপারিশ করে যে আপনি বুক নাউ
                        নিশ্চিত করুন, হোটেলের সাথে সরাসরি পরে রিজার্ভেশন পরিশোধ
                        করুন, চেক-ইনের ২৪ ঘন্টার আগে নয়। কিছু প্রিপেইড নয় এমন
                        হোটেলে হোটেল কোম্পানিগুলোর থাকার পুরো টাকা পর্যন্ত
                        ডিপোজিটের প্রয়োজন হয়। এই হারগুলি সাধারণত অ-ফেরতযোগ্য,
                        কোনও পরিবর্তন অনুমোদিত নয়।
                    </>
                ),
            },
            {
                id: "mealPlans",
                title: "খাবারের পরিকল্পনা:",
                content: (
                    <>
                        খাবার পরিকল্পনা হল খাবার ব্যবস্থা যা আপনি আপনার হোটেলে
                        থাকার জন্য বেছে নিয়েছেন। উদাহরণস্বরূপ, আপনি হয়ত এমন একটি
                        হোটেল নির্বাচন করেছেন যা আপনার জন্য আপনার সমস্ত খাবার
                        রান্না করে এবং যা মূল্যের মধ্যে অন্তর্ভুক্ত করা হয়।
                        অথবা, আপনি হয়তো রান্না করার সুবিধাযুক্ত একটা
                        অ্যাপার্টমেন্ট বেছে নিয়েছেন, যার অর্থ আপনি নিজেই আপনার
                        খাবারের ব্যবস্থা করেন। খাদ্য পরিকল্পনার অর্থ এবং
                        সংক্ষিপ্ত রূপগুলি নিম্নরূপ:
                        <br /> <br />
                        রুম ওনলি (RO) মানে আপনি আপনার থাকার/ভ্যাকেশন প্যাকেজের
                        জন্য যে মূল্য পরিশোধ করেছেন তার মধ্যে কোন খাবার
                        অন্তর্ভুক্ত করা হবে না। সেলফ কেটারিং (SC) মানে আপনার
                        থাকা/খাওয়ার প্যাকেজের খরচের মধ্যে কোন খাবার অন্তর্ভুক্ত
                        করা হয় না। তবে হালকা খাবার রান্না করার জন্য আপনাকে আপনার
                        থাকার জায়গায় ক্যাটারিং সুবিধা প্রদান করা হবে।
                        <br /> <br />
                        বেড অ্যান্ড ব্রেকফাস্ট (BB) মানে আপনি আপনার
                        থাকার/ভ্যাকেশন প্যাকেজের জন্য যে মূল্য পরিশোধ করেছেন তার
                        মধ্যে সকালের নাস্তা অন্তর্ভুক্ত।
                        <br /> <br />
                        হাফ বোর্ড (HB) মানে হল আপনার ব্রেকফাস্ট এবং সান্ধ্যকালীন
                        খাবার আপনি আপনার থাকার/ভ্যাকেশন প্যাকেজের জন্য যে দাম
                        দিয়েছেন তার মধ্যে অন্তর্ভুক্ত। কিছু কিছু ক্ষেত্রে, আপনি
                        সকালের নাস্তার পরিবর্তে দুপুরের খাবার গ্রহণ করতে পারেন -
                        হোটেল পৌঁছানোর পর এটি নিশ্চিত করবে।
                        <br /> <br />
                        ফুল বোর্ড (FB) মানে হল আপনার থাকার/ভ্যাকেশন প্যাকেজের
                        জন্য আপনি যে দাম দিয়েছেন তার মধ্যে ব্রেকফাস্ট, লাঞ্চ এবং
                        সান্ধ্যকালীন খাবার অন্তর্ভুক্ত।
                        <br /> <br />
                        অল-ইনক্লুসিভ (AI) অর্থ সমস্ত খাবার এবং স্থানীয়ভাবে
                        উত্পাদিত পানীয়গুলি অন্তর্ভুক্ত করা হয় (মধ্যরাত পর্যন্ত,
                        যখন একটি নগদ বার সিস্টেম পরিচালিত হতে পারে)। এটি
                        বাসস্থানের উপর নির্ভর করে পরিবর্তিত হতে পারে। এছাড়াও
                        আপনি আপনার হোটেলের দ্বারা বিছিয়ে রাখা বিনোদন এবং অ-মোটর
                        চালিত জলক্রীড়ার অধিকারী হতে পারেন।
                        <br /> <br />
                        হোটেলের ছবি এবং সেবা, সুযোগ-সুবিধা, পণ্য ইত্যাদি
                        সম্পর্কিত তথ্য সাপ্লায়ার আমাদের সরবরাহ করেছে। HAMS
                        সাপ্লায়ার হালনাগাদ করা হয়নি যে কোনও পরিবর্তনের জন্য কোন
                        দায়বদ্ধতা গ্রহণ করে না।
                        <br /> <br />
                        নির্দিষ্ট বৈশিষ্ট্যগুলি যেমন বিছানার ধরন বা অ-ধূমপান
                        কক্ষগুলি কেবল একটি অনুরোধ এবং হোটেল দ্বারা অন্যথায়
                        নির্দিষ্ট না হলে গ্যারান্টি দেওয়া হয় না। যদিও অধিকাংশ
                        হোটেল আপনার অনুরোধের প্রতি সম্মান প্রদর্শনের চেষ্টা
                        করবে, HAMS বা হোটেল আপনার অনুরোধের প্রতি সম্মান
                        প্রদর্শনের নিশ্চয়তা দেবে না।
                        <br /> <br />
                        বুকিং বোনাস যা হোটেল দ্বারা অফার করা হয়, যেমন বিনামূল্যে
                        ব্রেকফাস্ট, ট্যুর, ইত্যাদি সবই পরিবর্তন এবং প্রাপ্যতা
                        সাপেক্ষে এবং সরাসরি হোটেল দ্বারা নিয়ন্ত্রিত হয়।
                    </>
                ),
            },
            {
                id: "hotelChangesCancellationsAndRefunds",
                title: "হোটেল পরিবর্তন, বাতিলকরণ এবং ফেরত:",
                content: (
                    <>
                        কাস্টমার সার্ভিসে ফোন করে যেকোনো পরিবর্তন বা বাতিলের
                        অনুরোধ করতে হবে।
                    </>
                ),
            },
            {
                id: "noShowPolicy",
                title: "নো-শো পলিসি:",
                content: (
                    <>
                        একটি নো-শো হল যখন আপনি পূর্ব বিজ্ঞপ্তি ছাড়াই আপনার
                        সংরক্ষণের জন্য চেক-ইন করতে ব্যর্থ হন। যদি আপনি আপনার
                        রিজার্ভেশনের জন্য চেক ইন করতে না যাচ্ছেন তবে আপনাকে
                        সরাসরি হোটেলের সাথে যোগাযোগ করতে হবে। হোটেলের
                        বিধিনিষেধের উপর নির্ভর করে আপনাকে জরিমানা করা হতে পারে
                        বা আপনার বুকিং এর পুরো প্রি-পেইড বা জমার পরিমাণ হারাতে
                        পারে।
                    </>
                ),
            },
            {
                id: "hotelConfirmation",
                title: "হোটেল কনফার্মেশন:",
                content: (
                    <>
                        হোটেলগুলি একটি কনফার্মেশন নম্বর ফেরত দিতে ৭২ ঘণ্টা
                        পর্যন্ত সময় নিতে পারে। যখন আপনি আমাদের সাইটে হোটেল বুক
                        করেন তখন এই প্রক্রিয়া শুরু হয়। আমরা আপনাকে একটি ইমেইল
                        পাঠাব যেখানে উল্লেখ থাকবে যে আপনার রিজার্ভেশন নিশ্চিত।
                        আপনাকে জানাতে চাই যে আমরা আপনার অনুরোধ পেয়েছি। HAMS ,
                        থেকে কোন ইমেইল যোগাযোগ না পেলে
                        <span className='text-green-600'>
                            {" "}
                            info@hamsfly.com{" "}
                        </span>
                        ইমেইল করুন এবং কনফার্মেশন নম্বর এবং একটি যোগাযোগ ফোন
                        নম্বর অন্তর্ভুক্ত করুন। আমরা আপনাকে আপনার হোটেল
                        রিজার্ভেশন ২৪ ঘন্টা আগে পুনরায় নিশ্চিত করার পরামর্শ
                        দিচ্ছি চেক ইন করার জন্য।
                        <br />
                        <br />
                        অনেক ক্ষেত্রে হোটেলে আসার ৭২ ঘণ্টা আগে পর্যন্ত আসল
                        অতিথির নাম পাওয়া যাবে না। চূড়ান্ত নিশ্চিতকরণ ইমেইল এবং
                        বা ভাউচার পাওয়ার পরে আপনার রিজার্ভেশন সুরক্ষিত এবং
                        গ্যারান্টিযুক্ত। আমরা আপনাকে আপনার বিবরণ নিশ্চিত করার
                        জন্য আপনার নির্ধারিত আগমনের তিন (৩) দিনের মধ্যে
                        সম্পত্তির সাথে যোগাযোগ করার সুপারিশ করছি।
                    </>
                ),
            },
            {
                id: "allAboutChangesCancellationsAndRefunds",
                title: "সমস্ত পরিবর্তন, বাতিলকরণ এবং অর্থ ফেরত সম্পর্কে",
                content: (
                    <>
                        কাস্টমার সার্ভিসে ফোন করে যেকোনো পরিবর্তন বা বাতিলের
                        অনুরোধ করতে হবে।
                        <br />
                        <br />
                        আমরা বুঝতে পারছি, অনেক সময় পরিকল্পনা বদলে যায়। নীচে
                        অতিরিক্ত বাতিল এবং পরিবর্তন নীতিগুলি তালিকাভুক্ত করা
                        হয়েছে। কিছু পলিসি সম্পত্তি দ্বারা পরিবর্তিত হতে পারে:
                        <br />
                        <br />
                        <ul className='list-decimal pl-8'>
                            <li>উচ্চ চাহিদার বিশেষ অনুষ্ঠানের জন্য</li>
                            <li>
                                সংরক্ষণের বাতিলকরণ বা পরিবর্তনগুলি সম্পত্তি
                                দ্বারা চার্জ করা ফি ছাড়াও HAMS বাতিলকরণ ফি
                                সাপেক্ষে হতে পারে।
                                <a href='#' className='text-green-600'>
                                    আমাদের খরচ ও ব্যতিক্রম
                                </a>
                                চেক করুন ।
                            </li>
                            <li>
                                তারিখ পরিবর্তন, রুম কমানো বা অন্য কোনো সংশোধনীর
                                ক্ষেত্রে হোটেলের নীতিমালার ওপর ভিত্তি করে ফি
                                দিতে হবে।
                            </li>
                            <li>
                                তাড়াতাড়ি প্রস্থানের কারণে অব্যবহৃত রুম নাইটের
                                জন্য কোনও ক্রেডিট ইস্যু করা যাবে না।
                            </li>
                            <li>
                                থাক এক্সটেনশনের জন্য নতুন রিজার্ভেশন প্রয়োজন।
                                মূল রুম রেটের নিশ্চয়তা নেই।
                            </li>
                            <li>
                                এফইবিডি লিমিটেড এবং এফইবিডি লিমিটেডের হোটেল
                                সরবরাহকারীদের নিজস্ব বিবেচনার ভিত্তিতে
                                তাড়াতাড়ি প্রস্থান, নো-শো বা বাতিলকরণের জন্য
                                অর্থ ফেরত দেওয়া হয়।
                            </li>
                            <li>
                                আমরা যে কোনও কারণে কোনও বাতিলের ফলে আমাদের সমস্ত
                                ক্ষতি, খরচ, ক্ষতি, চার্জ এবং ব্যয়ের বিরুদ্ধে
                                আপনার দ্বারা সম্পূর্ণ ক্ষতিপূরণের অধিকার
                                রিজার্ভেশন করি।
                            </li>
                            <li>
                                চেক-ইন বা চেক-আউটের সময় কোনো সমস্যা হলে অবশ্যই
                                HAMS লিমিটেডে ফোন করতে হবে। সাধারণ ফোন কলের
                                মাধ্যমে অনেক সমস্যার সমাধান হতে পারে।
                            </li>
                        </ul>
                    </>
                ),
            },
        ],
    };

    const sections2 = {
        en: [
            {
                id: "blueRibbonBags",
                content: (
                    <>
                        1. Receive real-time push notifications via SMS,
                        WhatsApp, or E-mail regarding the status of your
                        baggage. <br />
                        2. Collect 19,000 BDT (66,000 BDT for international) per
                        bag that is not returned before 96 hours.
                        <br />
                        3. No proof of contents or receipts is needed for the
                        payment.
                        <br />
                        The Service Agreement Fee by the Passenger shall
                        constitute full acceptance by the Passenger of the terms
                        of this Service Agreement
                    </>
                ),
            },
            {
                id: "serviceAgreement",
                title: "Service Agreement",
                content: (
                    <>
                        1. The baggage tracking service offered by Blue Ribbon
                        Bags (BRB) comprises retrieval service for checked
                        baggage that has been loaded onto a flight or multiple
                        flights, but not those flight/s which the Passenger has
                        taken, or has been misdirected to a destination
                        different from your flight&apos;s end point destination,
                        as reported by the airline flown (&apos;&apos;Mishandled
                        Baggage&apos;&apos;), with a service satisfaction
                        guarantee that includes remuneration for any Mishandled
                        Baggage that is not located within a fixed period of
                        time. This fixed period of time shall be 96 hours from
                        the time of the passenger&apos;s flight landing, in
                        which the baggage did not arrive with the passenger, as
                        scheduled, and as reported, by the airline flown
                    </>
                ),
            },
            {
                id: "baggageRetrieval",
                title: "Baggage Retrieval",
                content: (
                    <>
                        1. As part of the Baggage Retrieval service, BRB shall
                        actively engage with the Passenger, airline, and other
                        resources to locate and expedite the return of the
                        Passenger&apos;s Mishandled Baggage within 96 hours of
                        the airplane&apos;s actual arrival time at the
                        Passenger&apos;s final destination (hereinafter referred
                        to as the &apos;&apos;Service Period&apos;&apos;).
                        Passenger understands that Blue Ribbon Bags is an
                        internet-based service. All correspondence with any
                        Mishandled Baggage Reports, or anything regarding the
                        Blue Ribbon Bags Service is done with the Provider via
                        email only. Passengers and customers will still be
                        obligated to comply with the terms and conditions of
                        this Service Agreement, even without sufficient internet
                        or email access. Each service purchased will only apply
                        to flights listed within the airline confirmation number
                        that the service has been purchased for. If multiple
                        flights are booked separately and are listed under
                        separate confirmation numbers, separate Service
                        Agreements will need to be purchased for each Airline
                        Confirmation Number. Travel Agents may purchase the
                        service under a &apos;&apos;PNR&apos;&apos; number
                        dictated by their GDS. Online Travel Agencies may offer
                        the product for round-trip airline tickets purchased on
                        their site, even if the round-trip ticket encompasses
                        multiple airline confirmation numbers. Travel Insurance
                        Companies may add our product to their offerings and the
                        product will cover the passenger for the same date range
                        as the travel insurance policy purchased, regardless of
                        how many flights are taken within that date range.
                    </>
                ),
            },
            {
                id: "serviceSatisfactionGuaranteePayment",
                title: "Service Satisfaction Guarantee Payment",
                content: (
                    <>
                        If the Baggage Retrieval service is not successful and
                        the Passenger&apos;s Mishandled Baggage is not returned,
                        per these terms and conditions, within the Service
                        Period, BRB shall pay the Passenger in accordance with
                        the Service Satisfaction Guarantee Limit of Liability.{" "}
                        <br />
                        <table className='min-w-full table text-base'>
                            <thead>
                                <tr>
                                    <td className='p-2 border bg-green-50 text-black'>
                                        Service Agreement
                                    </td>
                                    <td className='p-2 border bg-green-50 text-black'>
                                        Fees
                                    </td>
                                    <td className='p-2 border bg-green-50 text-black'>
                                        Service Satisfaction Guarantee Limit of
                                        Liability
                                    </td>
                                </tr>
                            </thead>

                            <tbody></tbody>
                            <tr>
                                <td className='p-2 border '>
                                    Bronze (Only for Domestic Routes)
                                </td>
                                <td className='p-2 border '>BDT 95</td>
                                <td className='p-2 border '>BDT 19,000</td>
                            </tr>
                            <tr>
                                <td className='p-2 border '>
                                    Gold ( Only for International Routes)
                                </td>
                                <td className='p-2 border '>BDT 330</td>
                                <td className='p-2 border '>BDT 66,000</td>
                            </tr>
                        </table>{" "}
                        <br /> <br />
                        Remuneration of the Service Satisfaction Guarantee Limit
                        of Liability is limited to two (2) undelivered bags per
                        passenger. In order to be eligible for the Baggage
                        Retrieval services and Service Satisfaction Guarantee
                        payment provided for in this Service Agreement Passenger
                        accepts and must fully comply with the following:
                    </>
                ),
            },
            {
                id: "responsibilitiesAndUndertakingsOfPassenger",
                title: "RESPONSIBILITIES AND UNDERTAKINGS OF PASSENGER",
                content: (
                    <>
                        1. Payment of the Service Agreement Fee by the Passenger
                        shall constitute full acceptance by Passenger of the
                        terms of this Service Agreement <br />
                        <br />
                        2. All information provided to the Provider for the
                        purchase of the baggage tracking service product, or
                        when filing a mishandled baggage report
                        (&apos;&apos;MBR&apos;&apos;), must be accurate and
                        truthful. Inaccurate entries of information when
                        purchasing the product, including mistaken passenger
                        names, wrong airline choices, and wrong airline
                        confirmation numbers (E-ticket numbers or any ticket
                        number issued by a travel agency that sold the passenger
                        their airline ticket, will not qualify as airline
                        confirmation numbers. An airline confirmation number
                        must be issued by the airline itself, and only flights
                        listed under the airline confirmation number issued by
                        the airline that the ticket was purchased for, will
                        qualify for baggage retrieval services or the Blue
                        Ribbon Bags Satisfaction Guaranteed Payment in the event
                        of a lost bag.), will void the Service Agreement and
                        Passenger will be ineligible for any Baggage Retrieval
                        services and Service Satisfaction Guarantee payments
                        under this Service Agreement. All information provided
                        to providers when reporting mishandled baggage will be
                        used to process Mishandled Baggage Reports, including
                        airline arrival times. If a passenger enters the wrong
                        email address as part of their Mishandled Baggage
                        Report, the provider will not be liable for the
                        passenger&apos;s inability to answer or comply with the
                        terms and conditions of this Service Agreement.
                        <br />
                        <br />
                        3. If the provider informs the passenger, via email, of
                        wrong information provided within the passenger&apos;s
                        Mishandled Baggage Report, the passenger will have 12
                        hours to correct the information provided. Any
                        misinformation not corrected by the passenger, within 12
                        hours of being informed will void the service agreement
                        and mishandled baggage report, and Passenger will be
                        ineligible for baggage retrieval services or
                        satisfaction guaranteed payment.
                        <br />
                        <br />
                        4. Passengers must purchase the baggage tracking service
                        product prior to the initial departure time of the
                        airplane. Passengers must purchase the baggage tracking
                        service prior to all flights within their outbound or
                        inbound trip. Passengers may not purchase the service
                        while in between legs of a journey (i.e. while in
                        between connecting flights). All flights within a
                        passenger&apos;s itinerary, or that a passenger has
                        taken to arrive at their destination, and all flights
                        that a passenger&apos;s bag(s) are tagged for by any
                        airline&apos;s baggage tag system within their journey
                        to their final destination, must be covered with the
                        Blue Ribbon Bags service in order to qualify for baggage
                        retrieval services or the Blue Ribbon Bags satisfaction
                        guaranteed payment in the event of a mishandled bag. Any
                        portion of a passenger&apos;s trip to arrive at their
                        destination, or if the passengers&apos; bags are tagged
                        for flights under any airline&apos;s baggage tag system,
                        that is not covered by a Blue Ribbon Bags Service
                        Agreement, will disqualify the passenger from baggage
                        retrieval services or the satisfaction guaranteed
                        payment in the event of a mishandled bag, even in the
                        event that all other flights within that journey have
                        separate services purchased for them. Once a Mishandled
                        Baggage Report has been filed for a bag, passengers may
                        not purchase additional services for additional flights
                        having anything to do with the bag reported under the
                        active MBR. Any changes to the delivery address that
                        require an additional flight, which requires additional
                        service, may not be purchased after a Mishandled Baggage
                        Report has been filed. Changes to the delivery address
                        of the passenger for a Mishandled Bag that has already
                        been reported to the provider that does not already have
                        an additional service associated with the additional
                        flight, will disqualify the passenger from eligibility
                        for baggage retrieval services or the Blue Ribbon Bags
                        satisfaction guaranteed payment.
                        <br />
                        <br />
                        5. Passenger acknowledges that Provider has the right to
                        reject any effort to purchase the baggage tracking
                        service product and may cancel any Service Agreement
                        (including the return of the Service Agreement Fee to
                        the Passenger) at any time prior to the filing of a
                        Mishandled Baggage Report by the Passenger.
                        <br />
                        <br />
                        6. Passengers must promptly, within the Service Period,
                        report a claim to the airline (in the form required by
                        the rules of the airline) that Passenger baggage has
                        been mishandled or undelivered before reporting their
                        Mishandled Baggage to the provider.
                        <br />
                        <br />
                        7. Passengers must receive from the airline an
                        acknowledgment of the Mishandled Baggage Claim, which
                        must include a unique identifier for their airline lost
                        luggage claim (often called a file locator, reference,
                        or tracking number). Blue Ribbon Bags will not retrieve
                        unique identifier numbers (file reference, locator, or
                        tracking numbers) from the airline on the
                        customer&apos;s behalf. It is the passenger&apos;s
                        responsibility to collect this information from the
                        airline when filing their lost baggage claim with the
                        airline. Mishandled Baggage Reports not containing
                        unique identifying numbers will not be processed, and
                        passengers will be ineligible for any Baggage Retrieval
                        services and Service Satisfaction Guarantee payments
                        under this Service Agreement.
                        <br />
                        <br />
                        8. Passengers must then report the Mishandled Baggage
                        Claim to Provider, using the reporting methods as
                        explained in section 2(j) of this agreement, including
                        the airline-issued unique identifier for their lost
                        luggage claim (&apos;&apos;file reference
                        number&apos;&apos;) and for each bag
                        (&apos;&apos;baggage tag number&apos;&apos;), and all
                        required information, within 24 hours of the
                        airplane&apos;s actual arrival time for the Mishandled
                        Baggage Report to be processed. Any Mishandled Baggage
                        Reports reported to Blue Ribbon Bags at any point after
                        the expiration of the 24-hour deadline from the
                        airplane&apos;s actual arrival time will be denied,
                        regardless of the circumstances and reasons, and those
                        passengers will not qualify for baggage retrieval
                        services or for Service Satisfaction Guaranteed Payment.
                        <br />
                        <br />
                        9. In order to complete the Mishandled Baggage Report
                        filing process, all passengers are required to submit a
                        copy of the report, as provided to the passenger by the
                        airline when they filed their lost luggage claim, to
                        Blue Ribbon Bags within 24 hours of the passenger&apos;s
                        flight landing, in order for the passenger to qualify
                        for baggage retrieval services or the Blue Ribbon Bags
                        Satisfaction Guaranteed Payment. If this documentation,
                        as provided to the passenger by the airline, is not
                        submitted to Blue Ribbon Bags within 24 hours of the
                        passenger&apos;s flight landing, their Mishandled
                        Baggage Report with Blue Ribbon Bags will be denied
                        immediately upon expiration of the 24 hour deadline, and
                        the passenger will not qualify for baggage retrieval
                        services or the Blue Ribbon Bags Satisfaction Guaranteed
                        Payment. The report must be submitted by the passenger
                        by emailing the designated Blue Ribbon Bags email
                        address at mbr@blueribbonbags.com and the passenger must
                        put their Service Agreement number, provided to them by
                        Blue Ribbon Bags upon purchase, in the subject line of
                        the email. Supporting Airline documentation that is
                        submitted in any other manner than as instructed here
                        will not be considered a valid submission, and will not
                        be considered with regard to any Mishandled Baggage
                        Report with Blue Ribbon Bags. Any reports that do not
                        have accompanying documentation submitted in the manner
                        described in this section, will be denied upon
                        expiration of the 24- hour deadline from when the
                        passenger&apos;s flight landed and the passenger will
                        not qualify for baggage retrieval services or the Blue
                        Ribbon Bags Satisfaction Guaranteed Payment.
                        <br />
                        <br />
                        10. All bags will be considered returned to the
                        passenger, and this service agreement will be considered
                        fulfilled, per the terms and conditions of the Blue
                        Ribbon Bags Service Agreement, when as per the
                        airline&apos;s lost baggage system, the bag arrives at
                        the airport on record with the passenger&apos;s lost
                        baggage claim with the airline.
                        <br />
                        <br />
                        11. Passengers must report the Mishandled Baggage claim
                        to the Provider, by filing a Mishandled Baggage Report
                        with Provider, either
                        <br />
                        <br />
                        <ul>
                            <li>
                                online at
                                https://www.blueribbonbags.com/MishandledBaggageReports
                                or
                            </li>
                            <li>
                                by telephone at +1 888-BAGGAGE (+1 888-224-4243
                                - US) or +1 917-920-9699 , 24 hours a day, 7
                                days a week.
                            </li>
                            <li>
                                All Mishandled Baggage Reports must be submitted
                                to Blue Ribbon Bags within 24 hours of the
                                passenger&apos;s flight landing in order to
                                qualify for services
                            </li>
                        </ul>{" "}
                        <br />
                        12. Passenger hereby expressly authorizes Provider to
                        act on Passenger&apos;s behalf in the provision of the
                        Baggage Retrieval service, including all direct
                        communications with the airline and agrees to promptly
                        provide any required written or other confirmation of
                        this authority. The passenger gives full permission to
                        any airline to release any and all personal and
                        baggage/flight information to the Provider on the
                        passenger&apos;s behalf. When a passenger purchases the
                        BRB Service through an Online Travel Agency or any other
                        third-party seller of the Product, the passenger is
                        giving full authority to the Online Travel Agency or
                        Third Party Seller to release all personal and travel
                        itinerary information to the Provider at any time prior
                        to or after the passenger&apos;s trip
                        <br /> <br />
                        13. Unless otherwise agreed to in writing, all payments,
                        pursuant to the service Satisfaction Guarantee Payment,
                        made by check for a specific Mishandled Baggage Report,
                        must be cashed within 90 days of the check issuance
                        date. Any checks not cashed within the 90-day time
                        period from the date of issuance shall nullify the
                        satisfaction guaranteed payment, and Blue Ribbon Bags
                        will no longer be liable for any payments to that
                        passenger for the referenced Mishandled Baggage Report.
                        <br /> <br />
                        14. If a Mishandled Baggage Report has been closed or
                        denied for any and/or all reasons, and the passenger
                        finds the closure of the MBR to be an error, the
                        passenger has 12 hours from the receipt of the closure
                        or denial email to inform Blue Ribbon Bags of the error.
                        The passenger may only inform Blue Ribbon Bags of this
                        error by emailing the provider at mbr@blueribbonbags.com
                        and putting their MBR number in the subject line. Any
                        error emails received after this 12-hour period, or
                        reported in any other method, will not be accepted, the
                        MBR file will not be reopened, and the passenger will
                        not qualify for baggage retrieval services or our
                        satisfaction guaranteed payment, regardless of the
                        circumstances. If the provider accepts the error, and
                        the MBR file is reopened, the provider will have an
                        additional 72 hours from the termination of the original
                        96 hours from when the passenger&apos;s flight landed,
                        otherwise known as the service period, to locate the
                        passenger&apos;s luggage. Any baggage associated with a
                        Mishandled Baggage Report that has been reopened for any
                        reason will be considered
                        &apos;&apos;returned&apos;&apos; to the passenger, per
                        the terms and conditions of this Service Agreement once
                        the baggage is received at the airport on record with
                        the airline&apos;s lost luggage claim, and the passenger
                        will no longer qualify for baggage retrieval services or
                        the Blue Ribbon Bags Satisfaction Guaranteed Payment.Any
                        Mishandled Bags, reported by the passenger, that were
                        required by the airline, or airport, to be
                        &apos;&apos;rechecked&apos;&apos; by the passenger at an
                        airport, in the event the airline requires the bag to be
                        collected and rechecked by way of a connecting flight or
                        for any other reason, that the airline has no record of
                        the bag being rechecked when was required, will not be
                        considered &apos;&apos;mishandled&apos;&apos; as per the
                        terms and conditions of this Service Agreement, and will
                        not qualify for baggage retrieval services or the Blue
                        Ribbon Bags Satisfaction Guaranteed Payment
                    </>
                ),
            },
            {
                id: "additionalTerms",
                title: "ADDITIONAL TERMS",
                content: (
                    <>
                        1. This Service Agreement applies only to Mishandled
                        Baggage. All Mishandled Baggage must have been given a
                        &apos;&apos;tag number&apos;&apos; by the airline upon
                        baggage check at the airport. Any bags with no tag
                        numbers will not constitute Mishandled Bags per the
                        terms and conditions of this Service Agreement.
                        <br /> <br />
                        2. This Service Agreement does not cover passengers for
                        baggage that has been returned within the Service
                        Period, regardless of the condition of the baggage or
                        its contents
                        <br /> <br />
                        3. This Service Agreement does not cover any theft or
                        damage of baggage or its contents at any time, including
                        after the baggage has been returned to Passenger. Any
                        Airline lost luggage claims that include any other form
                        of travel other than air travel within the listed
                        segments on the passenger&apos;s journey will void the
                        service agreement, and the passenger will not qualify
                        for baggage retrieval services or the Blue Ribbon Bags
                        Satisfaction Guaranteed Payment.
                        <br /> <br />
                        4. The provider may cancel this Service Agreement, and
                        the Provider shall have no obligations to Passenger or
                        any third party whatsoever, upon a fraud report or
                        investigation by the airline or Provider related to any
                        lost baggage claim or Mishandled Baggage Report. And
                        Provider may tender such fraud claim to the appropriate
                        investigating authorities.
                        <br /> <br />
                        5. This Service Agreement incorporates by reference any
                        instructions having to do with mishandled baggage
                        reports or baggage service features posted on the
                        Provider website, including the regular updates.
                        <br /> <br />
                        6. Returned bags that are delivered within the Service
                        Period to the destination provided by Passenger to the
                        airline will be deemed returned to Passenger in
                        satisfaction of this Service Agreement.
                        <br /> <br />
                        7. Remuneration of the Service Satisfaction Guarantee
                        Limit of Liability for Mishandled Baggage is limited to
                        two (2) bags per person.
                        <br /> <br />
                        8. Passenger is ineligible for multiple remunerations
                        under the Service Satisfaction Guarantee Limit of
                        Liability for the same Mishandled Baggage, even if
                        multiple Service Agreements are purchased.
                        <br /> <br />
                        9. In the event, Passenger has failed to pay the Service
                        Agreement Fee, or the Provider has rejected or canceled
                        the Service Agreement, the Service Agreement shall be of
                        no force or effect and the Provider shall have no
                        obligations to Passenger or any third party whatsoever.
                        This provision applies in the event that the credit card
                        charge for a particular service agreement has been
                        disputed.
                        <br /> <br />
                        10. Property Irregularity Reports (PIR) issued by an
                        airport (i.e. airport lost and found or any other
                        airport office) or Baggage Irregularity Reports (BIR) or
                        Lost Baggage Claim Forms Issued by an airport: Passenger
                        is ineligible for any Service Satisfaction Guarantee
                        payments under this Service Agreement for airline claim
                        acknowledgments that issue as either a PIR by the
                        airport or BIR or Lost Baggage Claim Forms by the
                        airport unless the airline issues a separate payment
                        (compensation) for the Mishandled Baggage. Only in the
                        instance that the airline has provided separate
                        compensation for the passenger&apos;s lost baggage, the
                        Provider will pay the Service Satisfaction Guarantee
                        payment for Mishandled Baggage not returned within the
                        Service Period. If the airline does not issue a separate
                        compensation, the Provider will have no payment
                        obligation. Proof of payment by the airline for the
                        Mishandled Baggage will be required. This compensation
                        provided to the passenger by the airline must be
                        documented by the airline providing the compensation and
                        must be for a bag that remains lost, as documented by
                        the airline. Airline offering passengers
                        &apos;&apos;necessities fees&apos;&apos; or
                        reimbursement for expenses incurred while the bag was
                        missing will not qualify as compensation, and the
                        passenger will not be eligible for the BRB Satisfaction
                        Guaranteed Payment.
                        <br /> <br />
                        11. Provider shall not be liable for any delay due to
                        circumstances beyond its control. This is including, but
                        not limited to, any bag that is unable to be loaded onto
                        a flight due to security issues (including but not
                        limited to dangerous goods found within the bag, and/or
                        the bag being held up by customs for any reason).
                        Additionally, with regard to delivery failures by
                        third-party carriers attempting to deliver the retrieved
                        baggage to Passenger, or any failure by Passenger to use
                        reasonable efforts to receive the retrieved baggage
                        within the Service Period or assist the provider in any
                        way requested by the provider within the Service Period.
                        This includes requests by the Provider for the
                        description of baggage, lists of contents within the
                        passenger&apos;s baggage, or any identifying tags or
                        marks placed on baggage by the passenger. All requests
                        of this nature are required to be responded to by the
                        passenger within 12 hours of the request made by the
                        provider. Any requests not responded to within 12 hours
                        of the request being made by the Provider will void the
                        Mishandled Baggage Report and the passenger will no
                        longer be eligible for baggage retrieval services or any
                        satisfaction guaranteed payment under this service
                        agreement.
                        <br /> <br />
                        12. This Service Agreement is non-refundable and
                        non-transferable. If the passenger&apos;s flight is
                        canceled or changed and a new flight is booked in its
                        place which is not listed under the passenger&apos;s
                        airline confirmation number with which their service was
                        purchased, the passenger must purchase a new service for
                        their new flight. For purchases made through online
                        ticketing websites: each purchase is per the itinerary
                        booked through the online website, which will be listed
                        under the confirmation number provided by that website
                        at the time of purchase. Any changes, including flight
                        cancellations and re-bookings, to the itinerary
                        occurring outside of the web booking, will require a
                        separate service to be purchased for any new flights
                        booked. The passenger may inform the provider of the
                        change before any of the flights within the itinerary
                        have departed, by emailing us at info@blueribbonbags.com
                        and putting their Service Agreement Number in the
                        subject line showing the new flights within the
                        itinerary to avoid having to purchase an additional
                        service.
                        <br /> <br />
                        13. Governing Law; Jurisdiction: This Service Agreement
                        and all claims arising from the agreement of the Parties
                        contemplated herein, whether or not arising directly
                        under this Service Agreement, shall be governed by and
                        construed in accordance with the laws of the State of
                        New York without giving effect to conflict of laws
                        provisions. The Parties agree to the exclusive
                        jurisdiction of the state and federal courts sitting in
                        the State of New York, New York County for the
                        adjudication of all disputes arising under this
                        Agreement. All decisions regarding Mishandled Baggage
                        Reports are the sole responsibility of Blue Ribbon Bags.
                        All Third Party Sellers or distribution partners of the
                        product have no influence or barring on any decisions
                        made with regard to any existing Mishandled Baggage
                        Reports, including all Denials, Closures, or
                        Qualifications for the Blue Ribbon Bags Satisfaction
                        Guaranteed Payment. As well, all Third Party Sellers and
                        distribution partners of the product will be completely
                        indemnified from any and all legal action resulting from
                        any decisions made with regard to a Mishandled Baggage
                        Report. This includes all Denials, Closures, and
                        Qualifications for the Blue Ribbon Bags Satisfaction
                        Guaranteed Payment.
                        <br /> <br />
                        14. Passenger agrees that BRB may share Mishandled
                        Baggage Report information with the third party online
                        travel site or travel agency, from which the passenger
                        purchased the BRB service that is directly associated
                        with that Mishandled Baggage Report. For any sales made
                        directly with BRB, which come by way of a referral from
                        an online travel site, or travel agency, the passenger
                        agrees that BRB may share all sales data with the agency
                        that referred the passenger to the BRB site for
                        purchase.
                    </>
                ),
            },
            {
                id: "privacyStatement",
                title: "PRIVACY STATEMENT",
                content: (
                    <>
                        1. Provider is committed to protecting your privacy,
                        fully complying with applicable privacy regulations,
                        including the European Union&apos;s General Data
                        Protection Regulation (GDPR). By purchasing or using the
                        Baggage Retrieval service you consent to the data
                        collection and use practices described in this privacy
                        statement.
                        <br />
                        <br />
                        2. Data Collection Consent: To purchase and use the
                        baggage tracking and retrieval services, Passenger must
                        consent to provide certain personal data to allow the
                        Provider to provide the service or carry out a
                        transaction you request. For example, the Passenger
                        provides personal data at the purchase of a Service
                        Agreement and, if needed, to complete an MBR and other
                        baggage location services. This personal data may
                        include contact details, such as your name, title,
                        company/organization name, airline/flight/booking
                        information, payment information, email address,
                        telephone and fax numbers, and physical address.
                        <br />
                        <br />
                        3. Personal Data Use Consent: The provider will use
                        personal data only for the purposes set forth in this
                        Service Agreement, to deliver the services and
                        transactions that you request.
                        <br />
                        <br />
                        4. Personal Data Disclosure Consent: Personal Data that
                        you provide will not be disclosed outside of Provider
                        (including its subsidiaries, affiliates, and joint
                        ventures), with the following exceptions:
                        <br />
                        <br />
                        <ul>
                            <li>
                                Consent to Disclose to Airlines, Travel
                                Agencies, and Baggage Handling Services: To
                                allow Provider to provide the service or carry
                                out a transaction you request, Provider may
                                disclose personal data to airlines, travel
                                agencies, and baggage handling services, on your
                                behalf to assist in the provision of the baggage
                                tracking and retrieval services. The provider
                                will provide these companies with only those
                                elements of personal data they need to deliver
                                those services. These companies and their
                                employees are prohibited from using those
                                personal data for any other purposes.
                            </li>
                            <li>
                                Consent to Disclose for Other Reasons: Provider
                                may disclose personal data if required to do so
                                by law or in the good-faith belief that such
                                action is necessary to comply with legal
                                requirements or with legal process served on us,
                                to protect and defend our rights or property, or
                                in urgent circumstances to protect the personal
                                safety of any individual. 5. Data Controller and
                                Policy Changes: Provider, as the sponsor and
                                maintainer of the website, is also the
                                controller of collected data. The provider may
                                re-evaluate this policy on an ongoing basis and
                                reserves the right to change its privacy policy
                                to promote further compliance
                            </li>
                        </ul>
                        <br />
                        <br />
                        6. Data Retention Period and Deletion Protocols:
                        Collected data shall be retained for the period to allow
                        the Provider to provide the service or carry out a
                        transaction request by Passenger, and for up to six
                        months beyond the closing of any statutory or regulatory
                        rights periods, ensuring that timely Passenger claims
                        may be filed. Notwithstanding the foregoing, Passenger
                        may subsequently elect to request the deletion of any
                        personal data by sending a request to
                        info@blueribbonbags.com
                    </>
                ),
            },
        ],
        bn: [],
    };

    const handleScroll = (sectionId) => {
        document
            .getElementById(sectionId)
            .scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
    };

    return (
        <>
            <div className='flex justify-end'>
                <button
                    onClick={() => setLanguage(language === "en" ? "bn" : "en")}
                    className='bg-green-600 text-white px-4 py-2 mt-20 mr-10 rounded'
                >
                    {language === "en" ? "বাংলা" : "English"}
                </button>
            </div>

            <div className='flex h-screen'>
                <div className='w-0 lg:w-1/4 p-1 ml-16 overflow-auto sticky top-0 bottom-0 hidden lg:block border-r'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-xl font-bold text-green-600 mt-2'>
                            Categories
                        </h2>
                    </div>
                    <ul className='hidden lg:block'>
                        {sections[language].map((section) => (
                            <li
                                key={section.id}
                                className='mb-2 text-gray-600 font-normal text-[12px]'
                            >
                                <button
                                    className={`text-left w-full ${
                                        activeSection === section.id
                                            ? "font-bold text-green-800"
                                            : ""
                                    }`}
                                    onClick={() => handleScroll(section.id)}
                                >
                                    {section?.title}
                                </button>
                            </li>
                        ))}
                        <li className='text-green-500 font-bold text-2xl'>
                            {language === "en" ? "Blue Ribbon Bags" : ""}
                        </li>
                        {sections2[language].map((section) => (
                            <li
                                key={section.id}
                                className='mb-2 text-gray-600 font-normal text-[12px]'
                            >
                                <button
                                    className={`text-left w-full ${
                                        activeSection === section.id
                                            ? "font-bold text-green-800"
                                            : ""
                                    }`}
                                    onClick={() => handleScroll(section.id)}
                                >
                                    {section?.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    style={{
                        scrollbarWidth: "thin",
                        scrollbarColor: "transparent transparent", // Transparent color for thumb and track
                        overflowY: "scroll",
                        scrollbarTrackColor: "#f1f1f1", // Track color
                        scrollbarFaceColor: "#888", // Thumb color
                        scrollbarShadowColor: "#555", // Shadow color
                    }}
                    className='w-full lg:w-3/4 p-4 lg:pl-10 overflow-auto'
                >
                    <h1 className='text-green-600 font-bold text-3xl mb-4'>
                        {language === "en"
                            ? "Terms and Conditions"
                            : "শর্তাবলী"}
                    </h1>
                    {sections[language].map((section) => (
                        <div
                            key={section.id}
                            id={section.id}
                            className='mb-8 section mr-10'
                        >
                            <Title>{section?.title}</Title>
                            <ParagraphItem>{section?.content}</ParagraphItem>
                        </div>
                    ))}
                    <h1 className='text-green-600 font-bold text-3xl mb-4'>
                        Blue Ribbon Bags
                    </h1>
                    {sections2[language].map((section) => (
                        <div
                            key={section.id}
                            id={section.id}
                            className='mb-8 section'
                        >
                            <Title>{section?.title}</Title>
                            <ParagraphItem>{section?.content}</ParagraphItem>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TermsConditions;
