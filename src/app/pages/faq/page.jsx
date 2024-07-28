"use client"
import React, { useState } from "react";
import Title from "../../../components/termsAndCondition/Title";
import ParagraphItem from "../../../components/termsAndCondition/Paragraph";
import Question from "../../../components/faq/Question";
import Answer from "../../../components/faq/Answer";
import QuestionB from "../../../components/faq/QuestionB";
import AnswerB from "../../../components/faq/AnswerB";

function Faq() {
  const [activeSection, setActiveSection] = useState("SafeShopping");
  const [language] = useState("en");

  const sections  = {
    en: [
      {
        id: "welcome",
        content: (
          <p className="pb-6">
            We have put together some of the most common questions that we get
            asked a lot. Please check through the categories to get your answer
            without any delay.
          </p>
        ),
      },
      {
        id: "flight",
        title: "Flight",
        content: (
          <>
            <Question>
              I have a debit card. May I use my debit card to book a flight from
              HAMS?
            </Question>
            <Answer>
              Yes, you can easily book a flight with any local or international
              card, debit or even your credit card.
            </Answer>
            <br />
            <QuestionB>
            আমার ডেবিট কার্ড আছে। আমি কি ডেবিট কার্ড ব্যবহার করে হামস
            থেকে ফ্লাইট বুক করতে পারবো?
            </QuestionB>
            <AnswerB>
            হ্যাঁ, আপনি আপনার লোকাল কিংবা ইন্টার্ন্যাশনাল কার্ড, ডেবিট অথবা ক্রেডিট কার্ডও ব্যবহার করে হামস
            থেকে খুব সহজেই ফ্লাইট বুক করতে পারবেন
            </AnswerB>
            <br />
            <Question>Can you book a domestic flight on HAMS?</Question>
            <Answer>
              Yes, we provide both domestic and international flight services.
              Please let us know your travel plan to assist you in finding the
              preferred flight.
            </Answer>{" "}
            <br />
            <QuestionB>আমি কি হামস
            থেকে ডোমেস্টিক ফ্লাইট বুক করতে পারবো?</QuestionB>
            <AnswerB>
            হ্যাঁ, পারবেন। আমরা ডোমেস্টিক এবং ইন্টারন্যাশনাল, উভয় ধরণের ফ্লাইট সার্ভিস দিয়ে থাকি। আমরা আপনাকে আপনার ভ্রমণ পরিকল্পনা অনুযায়ী পছন্দের ফ্লাইট বেছে নিতে সাহায্য করতে পারি।
            </AnswerB>{" "}
            <br />
            <Question>
              Can I make the payment later for an online booking on HAMS?
            </Question>
            <Answer>
              Unfortunately, you cannot hold the booking unless you pay. You
              instantly need to pay the amount to confirm your purchase made
              online.
            </Answer>{" "}
            <br />
            <QuestionB>
            অনলাইন বুকিং-এর ক্ষেত্রে আমি কি পেমেন্ট পরে করতে পারি?
            </QuestionB>
            <AnswerB>
            আপনি অনলাইনে ফ্লাইট অনুসন্ধান ও তুলনা করতে পারবেন কিন্তু পেমেন্ট না করা অব্দি আপনার বুকিং নিশ্চিত হবে না। অনলাইন বুকিং নিশ্চিত করতে তাৎক্ষণিক পেমেন্ট অপরিহার্য।
            </AnswerB>{" "}
            <br />
            <Question>May I have a hard-copy receipt sent by post?</Question>
            <Answer>
              We don&apos;t send hard copy receipts by post. We will email your
              booking details and confirmation to you. Alternatively, you can
              come to our office for a hard copy of your purchase, and we will
              provide the hard copy to you.
            </Answer>{" "}
            <br />
            <QuestionB>আমি কি ডাকযোগে রিসিপ্টের হার্ড কপি সংগ্রহ করতে পারি? / আমাকে কি ডাকযোগে রিসিপ্টের হার্ড কপি pathano হবে?</QuestionB>
            <AnswerB>
            দুঃখিত, ডাকযোগে রিসিপ্টের হার্ড কপি পাঠানো হয় না। আমরা ই-মেইলের মাধ্যমে বুকিং নিশ্চিত সংক্রান্ত বিস্তারিত পাঠিয়ে থাকি। তবে, আপনি সরাসরি আমাদের অফিস থেকে রিসিপ্টের হার্ড কপি সংগ্রহ করতে পারেন।
            </AnswerB>{" "}
            <br />
            <Question>
              Will it cost any extra charge if I purchase through a card from
              hamsfly?
            </Question>
            <Answer>
              During an online or an offline transaction there is a convenience
              fee that customers have to pay. However, there is no extra charge
              on anything you purchase from hamsfly be it online or offline.
            </Answer>
            <br />
            <QuestionB>
            হামস
এ কার্ডের মাধ্যমে বুকিং দিলে কি বাড়তি চার্জ পরিশোধ করতে হবে?
            </QuestionB>
            <AnswerB>
            অনলাইন বা অফলাইন বুকিংয়ের সময় একটি কনভিনিয়েন্স ফি আছে যা গ্রাহকদের দিতে হবে। তবে, হামস
            এ থেকে, অনলাইন বা অফলাইন বুকিংয়ে, কিছু কিনলে কোন অতিরিক্ত চার্জ নেই।
            </AnswerB>
            <br />
            <Question>What is HAMS Convenience Fee?</Question>
            <Answer>
              HAMS Convenience fee is the charge that the customer needs to pay
              for the support, convenience and service that he/she is availing
              from the online platforms.
            </Answer>
            <br />
            <QuestionB>হামস
            কনভিনিয়েন্স ফি কী?</QuestionB>
            <AnswerB>
            কাস্টমাররা হামস
            থেকে অনলাইনে যেসকল সহযোগিতা, কনভিনিয়েন্স ও সেবা উপভোগ করেন, তার জন্য প্রদেয় চার্জকে হামস
 কনভিনিয়েন্স ফি বলা হয়। 
            </AnswerB>
            <br />
            <Question>Is the HAMS Convenience Fee refundable?</Question>
            <Answer>HAMS Convenience Fee is non-refundable.</Answer>
            <br />
            <QuestionB>হামস
            কনভিনিয়েন্স ফি কী ফেরতযোগ্য? </QuestionB>
            <AnswerB>দুঃখিত, হামস
 কনভিনিয়েন্স ফি ফেরতযোগ্য নয়।</AnswerB>
            <br />
            <Question>
              What is the process of cancelling a purchased ticket on hamsfly?
            </Question>
            <Answer>
              Cancellation, refund, or date change for your flight can be
              conveniently done directly on the website or app. From your app or
              web Simply navigate to{" "}
              <b className="text-gray-800">
                My Booking {">"} Show More {">"} Refund/Void/Date Change
              </b>{" "}
              to complete the process effortlessly. <br />
              If you face any issues while doing the automatic process, kindly
              email us at info@hamsfly.com for a refund and cancellation of
              the flight tickets. Cancellation and refund policies differ from
              airline to airline. For cancellation, HAMS will charge you
              based on the airline&apos;s policy. In addition, BDT 1500 per person is
              HAMS&apos;s refund service fee, and BDT 500 is the service fee for
              International Air Tickets. For domestic, HAMS&apos;s refund
              service fee is BDT 300 per person, and the date change service fee
              is BDT 200 per person. We entirely follow the airline&apos;s refund
              policy. The airline has the absolute right to the airline&apos;s refund
              policy and can change it anytime; hamsfly has no control over
              the airline&apos;s policy.
            </Answer>
            <br />
            <QuestionB>
            হামস
এ ক্রয়কৃত টিকিট বাতিল করার প্রকিয়া কী?
            </QuestionB>
            <AnswerB>
            আপনার ফ্লাইটের জন্য বাতিলকরণ, ফেরত বা তারিখ পরিবর্তন সহজে ওয়েবসাইট বা অ্যাপে সরাসরি করা যেতে পারে। আপনার অ্যাপ বা ওয়েব থেকে সহজভাবে নেভিগেট করুন{" "}
              <b className="text-gray-800">
                My Booking {">"} Show More {">"} Refund/Void/Date Change
              </b>{" "}
              এবং প্রক্রিয়া সম্পূর্ণ করুন।  <br />
              স্বয়ংক্রিয় প্রক্রিয়াটি করার সময় আপনি যদি কোনও সমস্যার সম্মুখীন হন, তাহলে ফ্লাইট টিকিট রিফান্ড কিংবা বাতিলের জন্য অনুগ্রহপূর্বক info@hamsfly.com ঠিকানায় মেইল করুন। বিভিন্ন এয়ারলাইনসের ক্ষেত্রে বাতিল ও রিফান্ড পলিসি ভিন্ন ভিন্ন হয়। বাতিলের ক্ষেত্রে, নির্দিষ্ট এয়ারলাইনের পলিসি অনুযায়ী আপনাকে চার্জ পরিশোধ করতে হবে। উপরন্তু, হামস
              এর রিফান্ড সার্ভিস ফি জন প্রতি ৳ ১,৫০০। ইন্টারন্যাশনাল এয়ার টিকিটের ক্ষেত্রে সার্ভিস ফি জন প্রতি ৳ ৫০০। ডোমেস্টিক এয়ার টিকিটের ক্ষেত্রে, রিফান্ড সার্ভিস ফি জন প্রতি ৳ ৩০০ ও তারিক পরিবর্তনের সার্ভিস ফি জন প্রতি ৳ ২০০। আমরা পুরোপুরিভাবে এয়ারলাইনের রিফান্ড পলিসি অনুসরণ করি। এয়ারলাইনস তাদের রিফান্ড পলিসির সত্ত্বাধিকারী এবং যেকোনো সময় তা পরিবর্তনের ক্ষমতা রাখে; এয়ারলাইনের পলিসির ওপর  হামস
              কোনো প্রকারের নিয়ন্ত্রণ নেই
            </AnswerB>
            <br />
            <Question>
              What is the process of changing the date of any flights on
              hamsfly?
            </Question>
            <Answer>
              Kindly email us at info@hamsfly.com for changing the date of
              the flight tickets. As per the individual airline&apos;s policy, the
              process of changing the date differs. Suppose the airline allows
              changing the flight date. In that case, we charge an airline&apos;s
              date change fee plus the fare difference of your revised flight
              date from the previously purchased flight&apos;s fare and a service fee
              of BDT 500 per person for any international air ticket and BDT 200
              per person for domestic air ticket within Bangladesh. The airline
              has the absolute right to the airline&apos;s refund policy and can
              change it anytime; hamsfly has no control over the airline&apos;s
              policy.
            </Answer>
            <br />
            <QuestionB>
            হামস
-এ ফ্লাইটের তারিখ পরিবর্তনের প্রসেস কী?
            </QuestionB>
            <AnswerB>
            ফ্লাইট টিকিটের তারিখ পরিবর্তন করতে হামস
 অ্যাপ বা ওয়েবসাইটে আপনার প্রোফাইলে গিয়ে &apos;&apos;আমার বুকিং&apos;&apos; ট্যাপ করুন। তারপর তারিখ পরিবর্তন/বাতিল/রিফান্ড অপশন সিলেক্ট করার মাধ্যমে তারিখ পরিবর্তন, রিফান্ড কিংবা বাতিল করতে পারবেন।বিস্তারিত জানতে বা সহযোগিতার জন্য info@hamsfly.com ঠিকানায় মেইল করুন। এয়ারলাইনসের পলিসির উপর নির্ভর করে তারিখ পরিবর্তনের প্রসেস ভিন্ন ভিন্ন হয়ে থাকে। মনে করুন, কোনো এয়ারলাইন তারিখ পরিবর্তনের সুবিধা দিয়ে থাকে। এক্ষেত্রে, ফ্লাইটের তারিখ পরিবর্তনের জন্য আপনাকে নির্ধারিত ফি, পূর্ববর্তী ফ্লাইটের চেয়ে পরিবর্তিত ফ্লাইটের ফেয়ারের পার্থক্য (যদি থেকে থাকে) এবং জন প্রতি ৳ ৫০০ সার্ভিস ফি (ইন্টারন্যাশনাল এয়ার টিকিটের ক্ষেত্রে) পরিশোধ করতে হবে। ডোমেস্টিক এয়ার টিকিটের ক্ষেত্রে, বাংলাদেশের ভেতরে সার্ভিস ফি জন প্রতি ৳ ২০০। এয়ারলাইনস তাদের রিফান্ড পলিসির সত্ত্বাধিকারী এবং যেকোনো সময় তা পরিবর্তনের ক্ষমতা রাখে; এয়ারলাইনের পলিসির ওপর  শেয়ারট্রিপের কোনো প্রকারের নিয়ন্ত্রণ নেই।
            </AnswerB>
            <br />
            <Question>
              When and how can I receive my refund from hamsfly?
            </Question>
            <Answer>
              We immediately submit any refund to our bank. Our partner banks
              may take up to 15 working days to complete the procedure from the
              submission date of a refund request. In addition, some banks may
              take up to 10-12 banking weeks or even the next billing cycle. For
              a dual currency refund, your will get converted currency by your
              credit card company.
            </Answer>
            <br />
            <QuestionB>
            আমি কবে এবং কিভাবে হামস
-এ রিফান্ড পেতে পারি?
            </QuestionB>
            <AnswerB>
            আমরা যেকোনো রিফান্ড তাৎক্ষণিক ব্যাংকে জমা দিয়ে দিই। আমাদের পার্টনার ব্যাংকের রিফান্ড প্রক্রিয়া সম্পন্ন করতে রিফান্ড রিকুস্টের তারিখ হতে ১৫ কার্যদিবস সময় লাগতে পারে। এছাড়াও, কিছু কিছু ব্যাংকের রিফান্ড প্রক্রিয়া সম্পন্ন করতে ১০-১২ ব্যাংকিং সপ্তাহ কিংবা পরবর্তী বিলিং সাইকেল পর্যন্তও সময় লাগতে পারে। ডুয়াল কারেন্সি রিফান্ডের ক্ষেত্রে, আপনি আপনার ক্রেডিট কার্ড কোম্পানির মাধ্যমে কনভার্টেড কারেন্সি রিসিভ করবেন।
            </AnswerB>
            <br />
            <div>
              <b className="text-gray-800">Refund Modality:</b> hamsfly will
              automatically refund the money precisely how it received it. As
              per the payment modality, the refund process will be the same.
              However, the customer will incur a service charge or cashout
              charge for any refund claim through MFS (Mobile Financial
              Services), e.g. Bkash, Nagad, Rocket, etc. The charge amount is as
              per MFS&apos;s terms and policy.
            </div>
            <br />
            <div>
              <b className="text-gray-800">রিফান্ড পদ্ধতি:</b> যেভাবে পেমেন্ট রিসিভ করা হয়, হামস
 ঠিক একইভাবে স্বয়ংক্রিয় পদ্ধতিতে টাকা রিফান্ড করে থাকে। রিফান্ড ও পেমেন্ট, উভয়ের পদ্ধতি একই হয়ে থাকে। তবে, গ্রাহক যদি এম.এফ.এস (মোবাইল ফাইন্যান্সিয়াল সার্ভিস) যেমন: বিকাশ, নগদ, রকেট, ইত্যাদির মাধ্যমে রিফান্ড পেতে চান, তাহলে নির্ধারিত পরিমাণ সার্ভিস চার্জ বা ক্যাশ আউট চার্জ পরিশোধ করতে হবে। চার্জের পরিমাণ এম.এফ.এস -এর শর্ত ও পলিসির উপর নির্ভরশীল।
            </div>
            <br />
            <Question>What is a Service fee on hamsfly?</Question>
            <Answer>
              Cancellation and refund policies differ from airline to airline.
              For cancellation by Airline, hamsfly will not charge any
              additional fees. For voluntary cancellation charges are applicable
              and given below.
            </Answer>
            <br />
            <Question>What is the combo fare?</Question>
            <Answer>
              A Combo Fare combines flights from different airlines into one
              itinerary, providing greater flexibility and potentially lower
              costs for your travel plans. hamsfly users can now acquire their
              preferred tickets at exclusive rates from a diverse selection of
              combo fares accessible on the hamsfly app and website. By
              booking a Combo Fare, customers can combine flights from different
              airlines into one trip.
            </Answer>
            <br />
            <Question>
              Is the combo fare applicable for both Domestic international
              flights?
            </Question>
            <Answer>
              Yes. The combo fare will apply for both domestic & international
              air tickets.
            </Answer>
            <br />
            <Question>
              {" "}
              What are the terms and conditions for booking a Combo Fare?
            </Question>
            <Answer>
              All flights under a Combo Fare must be booked together as a single
              itinerary. Separate tickets will be issued for each airline in the
              Combo Fare. <br />
              Booking changes or cancellations may be subject to the individual
              terms and conditions of each airline involved. Any kind of Refund,
              Cancellation and/or date change requests will follow the standard
              airline and ShareTrip&apos;s policy along with ShareTrip&apos;s convenience
              fee.
            </Answer>
            <br />
            <Question>
              Can someone purchase the tickets for anyone else?
            </Question>
            <Answer>
              hamsfly users will be eligible to purchase tickets for anyone
              else under this offer.
            </Answer>
            <br />
            <Question>
              What are the date change and cancellation policy under this offer?
            </Question>
            <Answer>
              Date change and cancellation will be as per the existing policy of
              hamsfly and Airlines.
            </Answer>
            <br />
            <Question>
              {" "}
              What will be the payment policy under this fare?
            </Question>
            <Answer>
              Full payment must be made at the time of booking. <br />
              The fare displayed includes the cost of all flights in the Combo
              Fare but may not include additional fees such as baggage, seat
              selection, or in-flight services.
            </Answer>
            <br />
            <div className="flex flex-col gap-2 text-gray-600">
              <b className="text-gray-800">
                What are the contact details for any queries of hamsfly?
              </b>
              <span>Contact number: +8809617617617</span>
              <span>Email: flight@hamsfly.com</span>
            </div>
            <br />
            <div className="text-center text-gray-800">Domestic flights</div>
            <table className="table min-w-full">
              <thead>
                <tr>
                  <td className="bg-green-50 p-2 border">Type of Service</td>
                  <td className="bg-green-50 p-2 border">Airline Charge</td>
                  <td className="bg-green-50 p-2 border">HAMS Service Charge</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Refund</td>
                  <td className="p-2 border">As per airlines policy</td>
                  <td className="p-2 border">
                    BDT 300 (Adult) <br />
                    BDT 300 (Child) <br />
                    BDT 0 (Infant)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">Re-issue</td>
                  <td className="p-2 border">As per airlines policy</td>
                  <td className="p-2 border">
                    BDT 200 (Adult) <br />
                    BDT 200 (Child) <br />
                    BDT 0 (Infant)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">VOID</td>
                  <td className="p-2 border">As per airlines policy</td>
                  <td className="p-2 border">
                    BDT 300 (Adult) <br />
                    BDT 300 (Child) <br />
                    BDT 0 (Infant)
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <div className="text-gray-800 font-semibold flex flex-col gap-2">
              <span>Airlines policy wise charges</span>
              <span>Biman Bangladesh Airlines</span>
            </div>
            <br />
            <table className="table min-w-full">
              <thead>
                <tr>
                  <th className="border bg-green-100 p-2" colSpan={2}>
                    Refund
                  </th>
                  <th className="border bg-green-100 p-2" colSpan={2}>
                    Re-issue
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-gray-800 p-2 border bg-green-50">
                    Before 24 Hours of Flight
                  </td>
                  <td className="text-gray-800 p-2 border bg-green-50">
                    Within and After 24 Hours of Flight
                  </td>
                  <td className="text-gray-800 p-2 border bg-green-50">
                    Before 24 Hours of Flight
                  </td>
                  <td className="text-gray-800 p-2 border bg-green-50">
                    Within & After 24 Hours of Flight
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border ">BDT 1,500</td>
                  <td className="p-2 border ">BDT 2,000</td>
                  <td className="p-2 border ">BDT 1,000</td>
                  <td className="p-2 border ">BDT 1,500</td>
                </tr>
              </tbody>
            </table>{" "}
            <br />
            <br />
            <div className="text-gray-800 font-semibold">Other Airlines</div>
            <table className="table min-w-full">
              <thead>
                <tr>
                  <td className="bg-green-50 border p-2">Refund</td>
                  <td className="bg-green-50 border p-2">
                    more than 24 hours of departure
                  </td>
                  <td className="bg-green-50 border p-2">
                    within 24 hours of departure
                  </td>
                  <td className="bg-green-50 border p-2">
                    within 6 hours of departure
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Air Astra</td>
                  <td className="p-2 border">BDT 1,500</td>
                  <td className="p-2 border">BDT 1,800</td>
                  <td className="p-2 border">BDT 2,000</td>
                </tr>
                <tr>
                  <td className="p-2 border">NOVOAIR</td>
                  <td className="p-2 border">BDT 1,500</td>
                  <td className="p-2 border">BDT 2,000</td>
                  <td className="p-2 border">BDT 2,000</td>
                </tr>
                <tr>
                  <td className="p-2 border">US-Bangla Airlines</td>
                  <td className="p-2 border">BDT 1,500</td>
                  <td className="p-2 border">BDT 1,800</td>
                  <td className="p-2 border">BDT 2,000</td>
                </tr>
              </tbody>
            </table>{" "}
            <br />
            <div className="text-gray-800 font-semibold">Other Airlines</div>
            <table className="table min-w-full">
              <thead>
                <tr>
                  <td className="bg-green-50 border p-2">Re-issue</td>
                  <td className="bg-green-50 border p-2">
                    more than 24 hours of departure
                  </td>
                  <td className="bg-green-50 border p-2">
                    within 24 hours of departure
                  </td>
                  <td className="bg-green-50 border p-2">
                    within 6 hours of departure
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Air Astra</td>
                  <td className="p-2 border">BDT 1,200</td>
                  <td className="p-2 border">BDT 1,500</td>
                  <td className="p-2 border">BDT 2,000</td>
                </tr>
                <tr>
                  <td className="p-2 border">NOVOAIR</td>
                  <td className="p-2 border">BDT 1,200</td>
                  <td className="p-2 border">BDT 1,500</td>
                  <td className="p-2 border">BDT 2,000</td>
                </tr>
                <tr>
                  <td className="p-2 border">US-Bangla Airlines</td>
                  <td className="p-2 border">BDT 1,200</td>
                  <td className="p-2 border">BDT 1,800</td>
                  <td className="p-2 border">BDT 2,000</td>
                </tr>
              </tbody>
            </table>{" "}
            <br />
            <br />
            <div className="text-gray-800 font-semibold">
              International Flights
            </div>
            <table className="table min-w-full">
              <thead>
                <tr>
                  <td colSpan={2} className="bg-green-50 border p-2">
                    Type of Service Airline Charge
                  </td>
                  <td className="bg-green-50 border p-2">HAMS Service Charge</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Refund</td>
                  <td className="p-2 border">As per Airline Policy</td>
                  <td className="p-2 border">
                    BDT 1,500 (Adult) <br />
                    BDT 1,500 (Child) <br />
                    BDT 0 (Infant)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">Re-issue</td>
                  <td className="p-2 border">As per Airline Policy</td>
                  <td className="p-2 border">
                    BDT 500 (Adult) <br />
                    BDT 500 (Child) <br />
                    BDT 0 (Infant)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">VOID</td>
                  <td className="p-2 border">As per Airline Policy</td>
                  <td className="p-2 border">
                    BDT 1000 (Adult) <br />
                    BDT 1,000 (Child) <br />
                    BDT 0 (Infant)
                  </td>
                </tr>
              </tbody>
            </table>{" "}
            <br />
            <br />
            <div>
              For cancellations and refunds, we always follow the airline&apos;s
              refund policy. The airline solely holds the right to change any
              policy. hamsfly has no control over the airline&apos;s policy.
            </div> <br /> 




























            <QuestionB>হামস
-এর সার্ভিস ফি কেমন?</QuestionB>
            <AnswerB>
            বিভিন্ন এয়ারলাইনের বাতিল ও রিফান্ড পলিসি ভিন্ন ভিন্ন হয়ে থাকে। <br />

এয়ারলাইন থেকে বাতিল করা হলে, হামস
 কোনো বাড়তি ফি চার্জ করবে না। কাস্টমারের অনুরোধে বাতিলের ক্ষেত্রে নিম্নোক্ত চার্জ প্রযোজ্য:
            </AnswerB>
            <br />
            
              A Combo Fare combines flights from different airlines into one
              itinerary, providing greater flexibility and potentially lower
              costs for your travel plans. hamsfly users can now acquire their
              preferred tickets at exclusive rates from a diverse selection of
              combo fares accessible on the hamsfly app and website. By
              booking a Combo Fare, customers can combine flights from different
              airlines into one trip.
        
            <div className="text-center text-gray-800">ডোমেস্টিক ফ্লাইট</div>
            <table className="table min-w-full">
              <thead>
                <tr>
                  <td className="bg-green-50 p-2 border">সার্ভিসের ধরণ</td>
                  <td className="bg-green-50 p-2 border">এয়ারলাইন চার্জ</td>
                  <td className="bg-green-50 p-2 border">হামস
 সার্ভিস চার্জ

</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">রিফান্ড</td>
                  <td className="p-2 border">এয়ারলাইনের পলিসি অনুসারে হয়ে থাকে।</td>
                  <td className="p-2 border">
                  ৳ ৩০০ (প্রাপ্তবয়স্ক) <br />
                  ৳ ৩০০ (শিশু) <br />
                  ৳ ০ (নবজাতক)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">রি-ইস্যু

</td>
                  <td className="p-2 border">এয়ারলাইনের পলিসি অনুসারে হয়ে থাকে।

</td>
                  <td className="p-2 border">
                  ৳ ২০০ (প্রাপ্তবয়স্ক) <br />
                  ৳ ২০০ (শিশু) <br />
                  ৳ ০ (নবজাতক)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">বাতিল</td>
                  <td className="p-2 border">এয়ারলাইনের পলিসি অনুসারে হয়ে থাকে।

</td>
                  <td className="p-2 border">  	
৳ ৩০০ (প্রাপ্তবয়স্ক)
                    
                     <br />
                     ৳ ৩০০ (শিশু) <br />
                     ৳ ০ (নবজাতক)
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <div className="text-gray-800 font-semibold flex flex-col gap-2">
              <span>এয়ারলাইনসের পলিসি অনুযায়ী চার্জ</span>
              <span>বিমান বাংলাদেশ এয়ারলাইনস</span>
            </div>
            <br />
            <table className="table min-w-full">
              <thead>
                <tr>
                  <th className="border bg-green-100 p-2" colSpan={2}>
                    
রিফান্ড
                  </th>
                  <th className="border bg-green-100 p-2" colSpan={2}>
                
রিইস্যু
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-gray-800 p-2 border bg-green-50">
                  ২৪ ঘন্টা আগে


                  </td>
                  <td className="text-gray-800 p-2 border bg-green-50">
                  ২৪ ঘন্টা পরে


                  </td>
                  <td className="text-gray-800 p-2 border bg-green-50">
                  ২৪ ঘন্টা আগে


                  </td>
                  <td className="text-gray-800 p-2 border bg-green-50">
                  ২৪ ঘন্টা পরে


                  </td>
                </tr>
                <tr>
                  <td className="p-2 border ">৳ ১,৫০০

</td>
                  <td className="p-2 border ">৳ ২,০০০

</td>
                  <td className="p-2 border ">৳ ১,০০০

</td>
                  <td className="p-2 border ">৳ ১,৫০০

</td>
                </tr>
              </tbody>
            </table>{" "}
            <br />
            <br />
            <div className="text-gray-800 font-semibold">অন্যান্য এয়ারলাইনস</div>
            <table className="table min-w-full">
              <thead>
                <tr>
                  <td className="bg-green-50 border p-2">রিফান্ড</td>
                  <td className="bg-green-50 border p-2">
                  যাত্রার ২৪ ঘন্টারও আগে


                  </td>
                  <td className="bg-green-50 border p-2">
                  যাত্রার ২৪ ঘন্টার মধ্যে


                  </td>
                  <td className="bg-green-50 border p-2">
                  যাত্রার ৬ ঘন্টার মধ্যে


                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">এয়ার অ্যাস্ট্রা

</td>
                  <td className="p-2 border">৳ ১,৫০০

</td>
                  <td className="p-2 border">৳ ১,৮০০

</td>
                  <td className="p-2 border">৳ ২,০০০

</td>
                </tr>
                <tr>
                  <td className="p-2 border">নভোএয়ার</td>
                  <td className="p-2 border">৳ ১,৫০০

</td>
                  <td className="p-2 border">৳ ২,০০০</td>
                  <td className="p-2 border">৳ ২,০০০

</td>
                </tr>
                <tr>
                  <td className="p-2 border">ইউএস-বাংলা এয়ারলাইনস

</td>
                  <td className="p-2 border">৳ ১,৫০০

</td>
                  <td className="p-2 border">৳ ১,৮০০

</td>
                  <td className="p-2 border">৳ ২,০০০

</td>
                </tr>
              </tbody>
            </table>{" "}
            <br />
            <div className="text-gray-800 font-semibold">অন্যান্য এয়ারলাইনস</div>
            <table className="table min-w-full">
              <thead>
                <tr>
                  <td className="bg-green-50 border p-2">রিইস্যু

</td>
                  <td className="bg-green-50 border p-2">
                  যাত্রার ২৪ ঘন্টারও আগে


                  </td>
                  <td className="bg-green-50 border p-2">
                  যাত্রার ২৪ ঘন্টার মধ্যে


                  </td>
                  <td className="bg-green-50 border p-2">
                  যাত্রার ৬ ঘন্টার মধ্যে


                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">এয়ার অ্যাস্ট্রা

</td>
                  <td className="p-2 border">৳ ১,২০০

</td>
                  <td className="p-2 border">৳ ১,৫০০

</td>
                  <td className="p-2 border">৳ ২,০০০

</td>
                </tr>
                <tr>
                  <td className="p-2 border">নভোএয়ার</td>
                  <td className="p-2 border">৳ ১,২০০

</td>
                  <td className="p-2 border">৳ ১,৫০০

</td>
                  <td className="p-2 border">৳ ২,০০০

</td>
                </tr>
                <tr>
                  <td className="p-2 border">ইউএস-বাংলা এয়ারলাইনস

</td>
                  <td className="p-2 border">৳ ১,২০০

</td>
                  <td className="p-2 border">৳ ১,৮০০

</td>
                  <td className="p-2 border">৳ ২,০০০

</td>
                </tr>
              </tbody>
            </table>{" "}
            <br />
            <br />
            <div className="text-gray-800 font-semibold">
            ইন্টারন্যাশনাল ফ্লাইট
            </div>
            <table className="table min-w-full">
              <thead>
                <tr>
                  <td colSpan={2} className="bg-green-50 border p-2">
                  সার্ভিসের ধরণ এয়ারলাইন চার্জ


                  </td>
 
                  <td className="bg-green-50 border p-2">হামস
 সার্ভিস চার্জ

</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">রিফান্ড</td>
                  <td className="p-2 border">এয়ারলাইনের পলিসি অনুসারে হয়ে থাকে।

</td>
                  <td className="p-2 border">
                  ৳ ১,৫০০ (প্রাপ্তবয়স্ক)
 <br />
 ৳ ১,৫০০ (শিশু)
 <br />
 ৳ ০ (নবজাতক)


                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">রি-ইস্যু

</td>
                  <td className="p-2 border">এয়ারলাইনের পলিসি অনুসারে হয়ে থাকে।

</td>
                  <td className="p-2 border">
                  ৳ ৫০০ (প্রাপ্তবয়স্ক)
                  <br />
                  ৳ ৫০০ (শিশু)
 <br />
 ৳ ০ (নবজাতক)


                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">বাতিল</td>
                  <td className="p-2 border">এয়ারলাইনের পলিসি অনুসারে হয়ে থাকে।

</td>
                  <td className="p-2 border">
                  ৳ ১,০০০ (প্রাপ্তবয়স্ক)
                  <br />
                  ৳ ১,০০০ (শিশু)
                  <br />
                  ৳ ০ (নবজাতক)


                  </td>
                </tr>
              </tbody>
            </table>{" "}
            <br />
            <br />
            <div>
            বুকিং বাতিল এবং রিফান্ডের ক্ষেত্রে আমরা এয়ারলাইনসের পলিসি অনুসরণ করে থাকি। এয়ারলাইনস তাদের রিফান্ড পলিসির সত্ত্বাধিকারী এবং যেকোনো সময় তা পরিবর্তনের ক্ষমতা রাখে। এয়ারলাইনের পলিসির ওপর  হামস
-এর কোনো প্রকারের নিয়ন্ত্রণ নেই।
            </div>
















            <Question>May I know about baggage details?</Question>
            <Answer>
              Search a particular flight from our website to know the specific
              baggage information for that flight. On the booking page, you will
              find a section called Baggage policy. Plus, your printed or
              e-tickets also holds specific luggage details.
            </Answer>
            <br />
            <QuestionB>আমি কি ব্যাগেজের ব্যাপারে বিস্তারিত জানতে পারি?</QuestionB>
            <AnswerB>
            আমাদের ওয়েবসাইটে নির্দিষ্ট ফ্লাইট সার্চ করলে, ফ্লাইটির ব্যাগেজ সম্পর্কিত তথ্য জানতে পারবেন। বুকিং পেইজে &apos;ব্যাগেজ পলিসি&apos; নামে একটি সেকশন দেখতে পাবেন। আপনার প্রিন্টেড বা ই-টিকিটেও নির্দিষ্ট।
            </AnswerB>
            <br />
            <Question>
              What is the cost of arranging a wheelchair at an airport?
            </Question>
            <Answer>
              Upon notifying us beforehand, we can arrange a wheelchair.
              However, the cost varies from airport to airport. When you confirm
              the request, we shall communicate with the concerned personnel for
              a specific price.
            </Answer>
            <br />
            <QuestionB>
            এয়ারপোর্টে হুইলচেয়ারের ব্যবস্থা করতে কেমন ব্যয় হবে?
            </QuestionB>
            <AnswerB>
            আগাম জানিয়ে রাখলে, আমরা হুইলচেয়ারের ব্যবস্থা করতে পারি। এক্ষত্রে, এয়ারপোর্টের উপর ভিত্তি করে চার্জ নির্ধারিত হয়। আপনার অনুরোধ নিশ্চিত করার পর আমরা নির্দিষ্ট চার্জের ব্যাপারে যথাযথ কর্তৃপক্ষের সাথে যোগাযোগ করতে পারি।
            </AnswerB>
            <br />
            <Question>
              What is the process of reissue/date change of the ticket for any
              child passenger crossing the child age to adult?
            </Question>
            <Answer>
              For date reissue/date change of a child&apos;s ticket who will be
              crossing the child age to adult, you will incur additional cost in
              total care. In addition, a charge of current tickets airfare
              difference and date changing fee plus any convenience fee will be
              applicable as per airlines&apos; policy.
            </Answer>
            <br />
            <QuestionB>
            কোন শিশু বয়সসীমা পেরিয়ে বয়স্কতে উত্তীর্ণ হলে, এক্ষেত্রে তার টিকিট রি-ইস্যু/তারিখ পরিবর্তন করার প্রক্রিয়া কী?
            </QuestionB>
            <AnswerB>
            শিশু বয়সসীমা&apos; অতিক্রম করে &apos;প্রাপ্তবয়স্ক&apos; বয়সে প্রবেশ করা ব্যক্তির ক্ষেত্রে টিকিটের রি-ইস্যু/তারিখ পরিবর্তনের সম্পূর্ণ ফেয়ারের ওপর অতিরিক্ত চার্জ প্রযোজ্য। উপরন্তু, এয়ারলাইন পলিসি অনুসারে বর্তমান টিকিটের এয়ারফেয়ার পার্থক্য, রি-ইস্যু ফি ও কনভিনিয়েন্স ফি প্রযোজ্য।
            </AnswerB>
            <br />
            <Question>Why has the Airfare increased when I checked?</Question>
            <Answer>
              According to the airline&apos;s policy, Airfare can fluctuate at any
              time without any prior notice. If you don&apos;t purchase the ticket
              right away, we cannot ensure the same Airfare next time you search
              for your destination.
            </Answer>
            <br />
            <QuestionB>বর্তমানে এয়ারফেয়ার বাড়তি দেখাচ্ছে কেন?</QuestionB>
            <AnswerB>
            এয়ারলাইন পলিসি অনুযায়ী আগামবার্তা ছাড়াই যেকোনো সময় এয়ারফেয়ার পরিবর্তন হতে পারে। তাই আপনি তাৎক্ষণিক টিকিট বুক না করলে পরবর্তীতে একই এয়ারফেয়ারের নিশ্চয়তা দেওয়া আমাদের পক্ষে সম্ভব নয়।
            </AnswerB>
            <br />
            <Question>
              What will happen if the fare increase after I book the ticket?
            </Question>
            <Answer>
              If the fares increase, the customer must pay the price difference
              on booked tickets. Alternatively, you will get the refund amount.
            </Answer>
            <br />
            <QuestionB>
            আমি টিকিট বুক করার পরপরই ফেয়ার বৃদ্ধি পেলে কী হবে?
            </QuestionB>
            <AnswerB>
            ফেয়ার বৃদ্ধি পেলে, সম্মানিত গ্রাহকের অবশ্যই বর্ধিত মূল্য পরিশোধ করতে হবে। আর যদি ফেয়ার হ্রাস পায়, তাহলে তাঁকে রিফান্ড দেওয়া হবে।
            </AnswerB>
            <br />
            <Question>
              Do I need to upload Visa and passport copies while booking
              Low-Cost Carrier (LCC) flights on hamsfly?
            </Question>
            <Answer>
              For LCC flights, users must upload the following documents:
              <br />
              copy of valid passport <br />
              copy of visa and other necessary documents <br />
              When you issue the tickets, you should upload the above documents
              to avoid cancellation from the respective Airlines (Indigo, Salam
              Air, etc.)
            </Answer>
            <br />
            <QuestionB>
            হামস
-এ লো-কস্ট ক্যারিয়ার (এলসিসি) ফ্লাইট বুক করার সময় আমার কি ভিসা এবং পাসপোর্টের কপি আপলোড করতে হবে?
            </QuestionB>
            <AnswerB>
            এলসিসি ফ্লাইট বুক করার ক্ষেত্রে, নিম্নোক্ত ডকুমেন্ট আপলোড করা আবশ্যক: <br />

বৈধ পাসপোর্টের কপি <br />
ভিসা ও অন্যান্য প্রয়োজনীয় ডকুমেন্টের কপি <br />
সংশ্লিষ্ট এয়ারলাইনস (ইন্ডিগো, সালাম এয়ার, ইত্যাদি) কর্তৃক টিকিট বাতিল হওয়ার ঝামেলা এড়াতে টিকিট ইস্যু করার সময় অবশ্যই উপরিউক্ত ডকুমেন্ট আপলোড করতে হবে।
            </AnswerB>
            <br />
            <Question>
              Do I need to upload Visa and passport copies while booking flights
              on hamsfly?
            </Question>
            <Answer>
              When purchasing ticket from hamsfly, it is mandatory to upload
              copy of your passport and visa. Failure to provide the required
              documents will result in cancellation of your booking by
              hamsfly. hamsfly reserves the right to cancel any booking if
              the necessary documents are not received within the stipulated
              time frame.
            </Answer>
            <br />
            <QuestionB>
            হামস
-এ ফ্লাইট বুক করার সময় আমার কি ভিসা এবং পাসপোর্টের কপি আপলোড করতে হবে?
            </QuestionB>
            <AnswerB>
            শেয়ারট্রিপ থেকে টিকেট বুক করার সময়, আপনাকে আপনার পাসপোর্ট এবং ভিসার একটি কপি বাধ্যতামূলক ভাবে আপলোড করতে হবে। আবশ্যক ডকুমেন্ট সরবরাহ না করলে, শেয়ারট্রিপ আপনার বুকিংটি বাতিল করবে। শেয়ারট্রিপ অবশ্যই নির্দিষ্ট সময়সীমার মধ্যে প্রয়োজনীয় ডকুমেন্ট না পেলে, বুকিংটি বাতিল করতে পারে।
            </AnswerB>
            <br />
          </>
        ),
      },
      {
        id: "Hotel",
        title: "Hotel",
        content: (
          <>
            <Question>How do I make a booking on hamsfly?</Question>
            <Answer>
              {" "}
              <br />
              Please follow the steps below for booking on hamsfly <br />
              - Click the hotel&apos;s tab from our homepage.
              <br />
              - Enter your destination and desired date.
              <br />
              - Click the SEARCH HOTELS button. You&apos;ll get a page with a hotel
              list that is available on your desired date and destination.
              <br />
              -First, click on show details and get the full hotel details. Then
              select your rooms from the available option.
              <br />
              -Then click Reserve, which will take you to a booking page where
              you will need to update your information.
              <br />
              -Finally, pay through your card or MFS to complete your purchase
            </Answer>{" "}
            <br />
            <QuestionB>হামস
-এ আমি কিভাবে হোটেল বুক করব?</QuestionB>
            <AnswerB>
              {" "}
              <br />
              হামস
-এ হোটেল বুক করতে নীচে উল্লিখিত ধাপ অনুসরণ করতে পারেন:<br />
              আমাদের হোমপেজের &apos;হোটেল&apos; ট্যাব ক্লিক করুন। <br />
আপনার পছন্দের লোকেশন ও তারিখ লিখুন।<br />
&apos;Search Hotels&apos; বাটনে ক্লিক করুন। আপনার দেওয়া লোকেশন ও তারিখে কোন কোন হোটেল অ্যাভেইলেবেল, তার একটি লিস্ট পাবেন।<br />
রিস্তারিত জানতে আপনার পছন্দের হোটেলে ক্লিক করে হোটেল সম্পর্কে জেনে নিন। তারপর অ্যাভেইলেবেল অপশন থেকে রুম সিলেক্ট করুন।<br />
তারপর &apos;রিজার্ভ&apos; বাটনে ক্লিক করলে আপনাকে নিয়ে যাওয়া হবে একটি বুকিং পেইজে। এখানে আপনার সকল তথ্য যুক্ত করুন।<br />
সবশেষে, আপনার কার্ড কিংবা এম.এফ.এস-এর মাধ্যমে পেমেন্ট করে বুকিং নিশ্চিত করুন।
            </AnswerB>{" "}
            <br />
            <Question>
              Can you provide the room rates per person or room-wise on
              hamsfly?
            </Question>
            <Answer>
              You will see the room rates as per room choice. You will never see
              room rent as per person.
            </Answer>
            <br />
            <QuestionB>
            হামস
-এ কি জন প্রতি রুম রেট বা রুম অনুযায়ী রুম রেট জানা যাবে?
            </QuestionB>
            <AnswerB>
            আপনি রুমের ধরণ অনুসারে রুম রেট জানতে পারবেন। তবে জন প্রতি রুম রেট জানা যাবে না।
            </AnswerB>
            <br />
            <Question>Can I check for budget hotels on hamsfly?</Question>
            <Answer>
              You can easily filter hotels to find the best match within your
              budget. Search for hotels at your desired destination, click on
              the <b> &apos;&apos;Lowest Price&apos;&apos; </b> filter, and find the budget hotels for
              your convenience.
            </Answer>
            <br />
            <QuestionB>আমি কি হামস
-এ সাশ্রয়ী হোটেল পাব?</QuestionB>
            <AnswerB>
            আপনি হোটেল ফিল্টার করে আপনার বাজেটের মধ্যেই হোটেল খুঁজে পেতে পারেন খুব সহজে। আপনার পছন্দের লোকেশনের জন্য হোটেল খুঁজুন, <b>
              &apos;লোয়েস্ট প্রাইজ&apos; 
              </b> ফিল্টারে ক্লিক করুন এবং বাজেটের মধ্যে বেছে নিন সেরা হোটেল।
            </AnswerB>
            <br />
            <Question>
              Does the room rates include tax and service charges on hamsfly?
            </Question>
            <Answer>
              Yes, the room rates include tax, service charge and others.
            </Answer>
            <br />
            <QuestionB>
            হামস
-এর হোটেল রেটে কি ট্যাক্স ও সার্ভিস চার্জ অন্তর্ভুক্ত? 
            </QuestionB>
            <AnswerB>
            হ্যাঁ, ট্যাক্স, সার্ভিস চার্জ ও অন্যান্য চার্জ রুম রেটের অন্তর্ভুক্ত।
            </AnswerB>
            <br />
            <Question>
              What is the cancellation policy for hotel booking on hamsfly?
            </Question>
            <Answer>
              In the room details section, you will find the cancellation policy
              for the room. Each room type has different types of cancellation
              policies.
            </Answer>
            <br />
            <QuestionB>
            হামস
-এ হোটেল বুকিং বাতিলের পলিসি কী?
            </QuestionB>
            <AnswerB>
            রুম বিস্তারিত সেকশনে আপনি বুকিং বাতিলের পলিসি দেখতে পাবেন। রুমের ভিত্তিতে বাতিলের পলিসি বিভিন্ন হয়।
            </AnswerB>
            <br />
            <Question>
              May I know why there is more than one rate for the same room type?
            </Question>
            <Answer>
              Room rents are sometimes different on the exact search. And this
              is because of special discounts, offer prices, promotions and
              cancellation policy.
            </Answer>
            <br />
            <QuestionB>
            একই ধরণের রুমের ক্ষেত্রে একাধিক রেট দেখা যায় কেন?
            </QuestionB>
            <AnswerB>
            একই ধরণের রুমের রেট মাঝে মাঝে ভিন্ন হয়ে থাকে। স্পেশাল ডিসকাউন্ট, অফার, প্রমোশন ও বাতিল পলিসির কারণে এই তারতম্য হয়ে থাকে।
            </AnswerB>
            <br />
            <Question>
              How can I be sure whether I received a discount on hamsfly?
            </Question>
            <Answer>
              {" "}
              You can know if you have received a discount as it shows along
              with the room&apos;s actual rent and your final price after the
              applicable discount. That is how you will know the availed deal.
            </Answer>
            <br />
            <Question>
            আমি হামস
-এ ডিসকাউন্ট পেয়েছি কিনা, কিভাবে নিশ্চিত হব?
            </Question>
            <Answer>
              {" "}
              রুমের প্রকৃত রেট ও ডিসকাউন্টের পর দেখানো ফাইনাল রেটের মাধ্যমেই আপনি প্রাপ্ত ডিল সম্পর্কে জানতে পারবেন।
            </Answer>
            <br />
            <Question>Can I add an extra bed/baby cot in my room?</Question>
            <Answer>
              Yes, you can easily add an extra baby cot or bed in your desired
              room. However, you need to notify us beforehand to get the service
              on time. Plus, an additional charge may apply based on some
              property available.
            </Answer>
            <br />
            <QuestionB>আমি কি রুমে আলাদা বিছানা/শিশুর খাট যুক্ত করতে পারি?</QuestionB>
            <AnswerB>
            হ্যাঁ, আপনি অবশ্যই আপনার রুমে অতিরিক্ত বিছানা/শিশুর খাট যুক্ত করতে পারেন। তবে যথাসময়ে সার্ভিসটি উপভোগ করতে চাইলে আপনার যথাযথ কর্তৃপক্ষকে আগাম বার্তা দিতে হবে। অ্যাভেইলেবিলিটির উপর ভিত্তি করে চার্জ প্রযোজ্য হতে পারে।
            </AnswerB>
            <br />
            <Question>
              When sharing a room with their parents, is there an additional
              charge for children?
            </Question>
            <Answer>
              Children below 12 years can share a room with their parents. And
              this will not incur any additional charge. However, this depends
              solely on the hotel&apos;s policy which you will find in the terms and
              conditions section.
            </Answer>
            <br />
            <QuestionB>
            অভিভাবকের সাথে রুম শেয়ার করলেও কি শিশুর ক্ষেত্রে অতিরিক্ত চার্জ প্রযোজ্য হবে?
            </QuestionB>
            <AnswerB>
            সর্বোচ্চ ১২ বছর বয়সী শিশু অভিভাবকের সাথে রুম শেয়ার করতে পারে এবং এক্ষেত্রে কোনরূপ বাড়তি চার্জ প্রযোজ্য নয়। তবে, এটি সম্পূর্ণভাবে হোটেলের পলিসির ওপর নির্ভরশীল, যা আপনি শর্তাবলীর সেকশনে দেখতে পাবেন।
            </AnswerB>
            <br />
            <Question>
              Why is &apos;&apos;Non-refundable&apos;&apos; stated next to my room type?
            </Question>
            <Answer>
              This means when you rent this specific room at that price, you
              cannot claim a refund even if you want to cancel the room.
            </Answer>
            <br />
            <QuestionB>
            রুমের ধরণের পাশে &apos;&apos;নন-রিফান্ডেবল&apos;&apos; লিখা কেন?
            </QuestionB>
            <AnswerB>
            এটি উল্লেখ থাকার কারণ হলো, আপনি নির্দিষ্ট রুমটি বুক করার পর পরবর্তীতে বুকিং বতিল করলেও রিফান্ড দেওয়া হবে না।
            </AnswerB>
            <br />
            <Question>
              How do I apply for refund/cancellation on hamsfly?
            </Question>
            <Answer>
              Yes, you can reach us through Customer Support or send an email to
              vacation@hamsfly.com
            </Answer>
            <br />
            <QuestionB>
            আমি কিভাবে হামস
-এ বুকিং বাতিলের জন্য আবেদন করতে পারি?
            </QuestionB>
            <AnswerB>
            বুকিং বাতিল করতে আপনি &apos;কাস্টমার সাপোর্ট&apos; এর মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারেন অথবা vacation@hamsfly.com ঠিকানায় ই-মেইল পাঠাতে পারেন।
            </AnswerB>
            <br />
            <Question>
              For a check-in date of today, is it possible to make a booking on
              the hamsfly website?
            </Question>
            <Answer>
              You can book that preferred room if you can see the room available
              on our hamsfly website or mobile App.
            </Answer>
            <br />
            <QuestionB>
            যে দিন চেক-ইন করতে চাই, সেদিনই কি বুকিং দিতে পারবো?
            </QuestionB>
            <AnswerB>
            হ্যাঁ, হামস
 অ্যাপ বা ওয়েবসাইটে আপনার পছন্দের তারিখে নির্দিষ্ট রুমটি অ্যাভেইলেবল দেখালে আপনি অবশ্যই বুকিং দিতে পারেন।
            </AnswerB>
            <br />
            <Question>
              What should I do if I want to book more than four rooms?
            </Question>
            <Answer>
              At a time, you can book a maximum of four rooms. You can book
              additional rooms on your next booking. You may also contact us for
              additional booking.
            </Answer>
            <br />
            <QuestionB>
            আমি কিভাবে চারটির বেশি রুম বুক করতে পারি?
            </QuestionB>
            <AnswerB>
            আপনি একসাথে সর্বোচ্চ চারটি রুম বুক করতে পারেন। এরপর বাকি রুমগুলো বুক করতে পারেন। আপনি এ ব্যাপারে আমাদের সাথে যোগাযোগ করতে পারেন।
            </AnswerB>
            <br />
            <Question>Why has the room rate changed?</Question>
            <Answer>
              Room rates can change anytime due to the Hotel Authorities&apos; terms
              and conditions.
            </Answer>
            <br />
            <QuestionB>রুম রেট পরিবর্তন হয়েছে কেন?</QuestionB>
            <AnswerB>
            হোটেল কতৃপক্ষ প্রদত্ত শর্তাবলীর কারণে যেকোনো সময় রুম রেট পরিবর্তন হতে পারে।
            </AnswerB>
            <br />
          </>
        ),
      },
      {
        id: "Holiday",
        title: "Holiday",
        content: (
          <>
            <Question>
              Are the prices for holidays shown on hamsfly Website for two
              people?
            </Question>
            <Answer>
              Whatever price for a holiday you see is always for a single
              traveller. However, suppose you are travelling as a couple or
              two-person. In that case, you can also view availability for a
              minimum of two travellers travelling together.
            </Answer>
            <br />
            <Question>Can I customise any holiday on hamsfly?</Question>
            <Answer>
              Yes, you can easily customise any holiday based on your
              requirements. For such, reach us through Customer Support or send
              an email to vacation@hamsfly.com
            </Answer>
            <br />
            <Question>
              How do I apply for refund/cancellation on hamsfly?
            </Question>
            <Answer>
              Yes, you can reach us through Customer Support or send an email to
              vacation@hamsfly.com
            </Answer>
            <br />
            <Question>Are holiday prices constant on hamsfly?</Question>
            <Answer>
              No, our holiday prices are not constant. They can change due to
              airfare differences and hotel price fluctuations. Plus, holiday
              rates are not applicable for events like Eid, Durga Puja,
              Christmas, Long Weekends and even New Year&apos;s Eve.
            </Answer>
            <br />
            <Question>What are the cancellation policies?</Question>
            <Answer>
              Cancellation policies are as follows: <br />
              Cancellation 15 days before the actual date, 50% deduction of the
              total package cost.
              <br />
              Cancellation made ten days before the exact date, 75% deduction of
              the total package cost.
              <br />
              Cancellation made five days before the actual date, 100% deduction
              of the total package cost.
            </Answer>
            <br />
            <Question>Can I get a refund for any unutilised service?</Question>
            <Answer>
              You cannot claim a refund for an unutilised service if you have
              already availed it as part of the itinerary provided.
            </Answer>
            <br />
            <Question>Can I change the itinerary once purchased?</Question>
            <Answer>
              Any change in the itinerary is possible as per the availability of
              your purchase. For such amendment, please get in touch with us 72
              hrs in advance.
            </Answer>
            <br />
            <Question>I did not get the airport pick-up service; why?</Question>
            <Answer>
              Maximum waiting time at the airport shall be 30 minutes to 1 hour
              from the flight&apos;s touchdown. However, any delay of more than a
              maximum of 1 hr will incur an additional charge.
            </Answer>
            <br />
          </>
        ),
      },
      {
        id: "Visa",
        title: "Visa",
        content: (
          <>
            <Question>
              What is a Visa? What are the different types of visas?
            </Question>
            <Answer>
              Visa is the documentation required to travel to a foreign country.
              Types of visas are:
            </Answer>
            <ul className="pl-4">
              <li>Tourist Visa</li>
              <li>Transit Visa</li>
              <li>Visitor or Short Stay Visa</li>
              <li>Business Visa</li>
              <li>Immigrant Visa</li>
              <li>Residence Visa</li>
              <li>Medical Visa etc</li>
            </ul>
            <br />
            <Question>
              What is the cost of applying for a visa on hamsfly?
            </Question>
            <Answer>
              Visa cost varies from country to country which you are applying to
              visit. You will incur a visa fee based on the countries terms and
              conditions. However, some countries wave this with a favourable
              travel arrangement.
            </Answer>{" "}
            <br />
            <Question>
              May I know the visa process of e-visa at hamsfly?
            </Question>
            <Answer>
              We will send a sample invitation letter format when you confirm a
              booking. Please fill up all the details with a digital signature
              and share them via email. After receiving the invitation letter,
              we will apply for Visa at the Embassy. Usually, Embassy takes 4-5
              working days for visa approval if additional documents are not
              required. Once visas are approved, we will share an e-visa via
              mail to the applicant.
            </Answer>{" "}
            <br />
            <Question>
              What do you mean by a tourist visa? Do I always need a visa to
              travel?
            </Question>
            <Answer>
              Tourist Visa is a limited period visa required to travel a country
              for holiday purposes. You can use this Visa for tourist purposes
              only. For business activities, you cannot use a tourist visa. Visa
              requirement varies from country to country. Some countries allow
              visas on arrival for Bangladeshi citizens. At the same time, some
              other countries require a valid pre-approved travel visa to visit
              the country.
            </Answer>{" "}
            <br />
            <Question>
              {" "}
              What is the difference between a sticker visa and an e-visa?{" "}
            </Question>
            <Answer>
              The E-Visa applying process is entirely online. For this, you
              don&apos;t need to submit your passport or any documents physically.
              After approval, you will get your Visa via email, and there will
              be no sticker stamp on your passport. You must submit your
              physical passport and other supporting documents to the Embassy
              for a sticker visa. As soon as you get approval, you will get a
              sticker visa from Embassy.
            </Answer>{" "}
            <br />
            <Question>
              What documents do I require to get a travel visa?
            </Question>
            <Answer>
              Primary documents required for Visa are as follows: <br />
              Valid Passport (Minimum validity six months)
              <br />
              Visa Application Form
              <br />
              Passport Sized Photographs
              <br />
              Visa Fees
              <br />
              Bank Statement (Country-wise, six months or more)
              <br />
              <br />
              Additional requirements can be are as follows:
              <br />
              Driving License
              <br />
              Birth Certificate
              <br />
              Police Verification Certificate
              <br />
              Marriage Certificate
              <br />
              Office/Student Identity
              <br />
              No Objection Letter/Certificate
              <br />
              Travel Ticket and Accommodation Confirmation
            </Answer>{" "}
            <br />
            <Question>How will I get my Visa?</Question>
            <Answer>
              We will mail you the e-visa upon visa approval for the countries
              that issue e-visa.
            </Answer>{" "}
            <br />
            <Question>
              How many days does it take for processing visa applications?
            </Question>
            <Answer>
              Most countries usually take around ten (10) working days for
              sticker visas. For e-visa, it usually takes about five (5) working
              days. It may vary during the peak travel time of the year.
            </Answer>{" "}
            <br />
            <Question>Can I cancel my Visa?</Question>
            <Answer>
              You can cancel your Visa before your documents are submitted to
              the Embassy. However, you cannot cancel the visa process after
              submitting the papers.
            </Answer>{" "}
            <br />
            <Question>Can I claim a refund for cancelling my Visa?</Question>
            <Answer>
              If you cancel the Visa before submitting it to the Embassy, you
              will only get back the visa fee. hamsfly Processing Fee is
              non-refundable.{" "}
            </Answer>{" "}
            <br />
            <Question>If there is a rejection, can I get a refund?</Question>
            <Answer>
              No, you cannot claim a refund under any circumstances for the Visa
              Fee, and hamsfly Processing Fee in case of your visa is
              rejected.
            </Answer>{" "}
            <br />
            <Question>Can I reapply if my visa is rejected?</Question>
            <Answer>
              Yes, you can reapply after rejection. However, it depends on your
              reason for visa rejection and also after completion of a specific
              period (Mentioned as per in Embassy Visa Submission guideline)
            </Answer>{" "}
            <br />
            <Question>What do you mean by having a valid passport?</Question>
            <Answer>
              The passport is considered valid with a validity of at least six
              (06) months when you intend to depart. Plus, you need to have a
              minimum of two blank pages for visa stamps along with the old
              passport.
            </Answer>{" "}
            <br />
            <Question>Who will fill up the visa application?</Question>
            <Answer>
              {" "}
              If you submit your visa application through hamsfly, the
              hamsfly team will do the tasks on your behalf, including filing
              your visa request and processing it. hamsfly charges a service
              fee for processing individual files per country.
            </Answer>{" "}
            <br />
            <Question>Who will submit the visa application?</Question>
            <Answer>
              In most cases, the hamsfly team will submit the visa application
              file on behalf of the clients. But for specific countries, clients
              need to submit their application physically as per the requirement
              of the Embassies.{" "}
            </Answer>{" "}
            <br />
            <Question>
              Do I need to have the picture on a white background?
            </Question>
            <Answer>
              Most countries require you to have your photo against a white
              background. Hence, we suggest that our clients take their pictures
              against a white backdrop to be on the safe side. Plus, any
              photographs taken must not be older than three months or used in
              any other previous visas.
            </Answer>{" "}
            <br />
            <Question>
              What is the minimum duration of the bank statement needed to
              submit along with the visa?
            </Question>
            <Answer>
              It solely depends on which country you are applying for the Visa.
              However, most countries generally require a recent six-month bank
              statement.
            </Answer>{" "}
            <br />
            <Question>
              Can hamsfly manage the travel tickets and hotel bookings?
            </Question>
            <Answer>
              hamsfly team will manage bookings of travel tickets & hotel
              bookings for visa applications if you do the visa requests and
              process through hamsfly.
            </Answer>{" "}
            <br />
            <Question>
              Can hamsfly manage the Letter of introduction (LOI) where
              required?
            </Question>
            <Answer>
              hamsfly will manage the Letter of Introduction (LOI), taking
              necessary information from you if the Visa is processed through
              hamsfly.
            </Answer>{" "}
            <br />
            <Question>Do you process student/business/work visas?</Question>
            <Answer>
              Right now, hamsfly only processes tourist/travel visa and do not
              process/assist in student/business/work visa.
            </Answer>{" "}
            <br />
            <Question>Do you assist with the Schengen visa?</Question>
            <Answer>
              We provide visa assistance for most first-world countries,
              including Schengen countries.
            </Answer>{" "}
            <br />
            <Question>Is there any guarantee of getting a visa?</Question>
            <Answer>
              Approval/Rejection of Visa is entirely subject to the decision by
              the Embassy. hamsfly is not liable for visa rejection and holds
              no authority on approval or rejection of the Visa. If the Embassy
              requests additional documents, your visa request will be on hold
              for the time being.
            </Answer>{" "}
            <br />
            <Question>
              I haven&apos;t booked my flight tickets. Can I apply for Visa?
            </Question>
            <Answer>
              Yes, you can apply for Visa even though you haven&apos;t booked your
              flight tickets. hamsfly will manage the ticket bookings if
              required for your visa submission.
            </Answer>{" "}
            <br />
            <div className="flex flex-col gap-2 text-black">
              <b>Transit Visa</b>
              <p className="text-gray-700">
                \ Millions of people travel to different destinations every
                year. Unfortunately, not all flights can be completed in one
                journey without stopping somewhere along the way. For this
                reason, most countries issue transit visas to help travelers who
                will only be transiting in that specific country for a few hours
                before moving on to their destination.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-black">
              <b>What is a Transit Visa?</b>
              <p className="text-gray-700">
                A transit visa is a travel document that permits you to pass
                through another country until you reach your destination. For
                example, if you are traveling from South Asia (Bangladesh,
                India, Nepal, etc.) to the US but need to stop in the Schengen
                Zone to continue your flight to the US, you require a transit
                visa for the Schengen Area.
                <br />
                London (Heathrow) has the Direct Airside Transit Visa (DATV).
                While most flyers transiting through London require a DATV,
                exemptions exist for travelers bound for the US, Canada,
                Australia, or Japan with valid visas. However, changing airports
                from Heathrow to Gatwick en route to the West Indies
                necessitates a transit visa.
                <br />
                A US visa is mandatory for flights overflying the US en route to
                Canada and vice versa for flights for most international
                nationalities.
                <br />
                Transit visas are short-term and usually not required for
                everyone. That is why you must contact an embassy, consulate, or
                airline before you travel to see if you need one.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-black">
              <b>What is the Transit Zone?</b>
              <p className="text-gray-700">
                The transit zone is a designated area within an international
                airport where you can stay until your flight to your destination
                is ready to board. Transit zones allow you to wait in the
                airport without going through immigration if you don&apos;t leave the
                airport.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-black">
              <b>Do I Need a Transit Visa If I Leave the Transit Zone?</b>
              <p className="text-gray-700">
                Yes, you need a transit visa if you leave the transit area.
                However, nationals from specific countries (Iran, Syria, Guinea,
                etc.) will need a transit visa regardless of whether they leave
                the transit area.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-black">
              <b>Difference Between Transit and Transfer Passenger?</b>
              <p className="text-gray-700">
                As a transit passenger, you will continue your journey on the
                same aircraft. As a transfer passenger, you will continue your
                flight in another aircraft or airline. Usually, for transfers,
                you must check in again at the airport.
                <br />
                Important: You need to check with your airline whether you need
                a visa when transferring during your flight.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-black">
              <b>
                Difference Between Direct, Connecting, and Non-Stop Flights?
              </b>
              <p className="text-gray-700">
                There is a significant difference between a direct, connecting,
                and non-stop flight:
                <br />
                - A direct flight follows a route from point A to point B
                without changing flight numbers but may stop to pick up new
                passengers.
                <br />
                - A connecting flight follows a route from point A to point B
                with a stop in point C (in this case, you will need a transit
                visa).
                <br />- A non-stop flight follows a route from point A to point
                B without stopping or transiting in point C.
              </p>
            </div>
          </>
        ),
      },
      {
        id: "mobileRecharge",
        title: "Mobile Recharge",
        content: (
          <>
            <Question>How do I recharge my mobile using hamsfly?</Question>
            <Answer>
              To recharge your mobile, log in to your hamsfly account,
              navigate to the Mobile Recharge section, enter your mobile number,
              select the desired plan, and proceed to payment. Choose from the
              available payment methods, complete the transaction, and your
              mobile will be recharged instantly.
            </Answer>{" "}
            <br />
            <Question>
              What payment methods are accepted for mobile recharge?
            </Question>
            <Answer>
              hamsfly accepts various payment methods, including HAMS Pay,
              credit/debit cards, and other options. The available payment
              methods will be displayed during the transaction process.
            </Answer>{" "}
            <br />
            <Question>
              Are there any transaction fees for mobile recharge?
            </Question>
            <Answer>
              Transaction fees are not applicable, if applicable, will be
              visible before you make the payment. We strive to provide
              transparent information about any charges associated with the
              mobile recharge transaction.
            </Answer>{" "}
            <br />
            <Question>
              How long does it take for the mobile recharge to reflect on my
              account?
            </Question>
            <Answer>
              Mobile recharge transactions are typically processed instantly.
              However, there might be occasional delays depending on the
              processing times of your mobile operator.
            </Answer>{" "}
            <br />
            <Question>Can I get a refund if my mobile recharge fails?</Question>
            <Answer>
              Yes, in the case of a failed mobile recharge, you can request a
              refund. Please contact our customer support team at
              info@hamsfly.com to initiate the refund process.
            </Answer>{" "}
            <br />
            <Question>
              What is the minimum and maximum recharge amount per transaction?
            </Question>
            <Answer>
              Currently, For Prepaid the minimum recharge amount per transaction
              is 20 TK, and the maximum is 1000 TK. For Postpaid, the minimum
              recharge amount per transaction is 20 TK, and the maximum is 5000
              TK. for Postpaid
            </Answer>{" "}
            <br />
            <Question>
              How can I get assistance if I encounter issues with the Mobile
              Recharge feature?
            </Question>
            <Answer>
              For any assistance or inquiries regarding the Mobile Recharge
              feature, please contact our customer support team at e-mail:{" "}
              <a href="#" className="text-green-500">
                info@hamsbd.com
              </a>{" "}
              or Phone: at{" "}
              <a className="text-green-500" href="#">
                +880 2-48957730
              </a>{" "}
              We are here to help you with any issues or questions you may have.
            </Answer>{" "}
            <br />
            <Question>
              Is my personal information secure during the mobile recharge
              process?
            </Question>
            <Answer>
              Yes, hamsfly prioritizes the security and privacy of your
              information. Please refer to our privacy policy at{" "}
              <a className="text-green-500" href="#">
                hamsfly policy
              </a>{" "}
              for details on how we handle user data and information.
            </Answer>{" "}
            <br />
            <Question>
              What happens if there is an interruption or issue with the mobile
              operator during the recharge process?
            </Question>
            <Answer>
              hamsfly does not guarantee uninterrupted service and is not
              liable for any interruptions or issues caused by mobile operators.
              If you face any problems, please contact our customer support for
              assistance.
            </Answer>{" "}
            <br />
          </>
        ),
      },
      {
        id: "PayBill",
        title: "Pay Bill",
        content: (
          <>
            <Question>How do I use hamsfly&apos;s Pay Bill feature?</Question>
            <Answer>
              To pay your bills through hamsfly, go to the Pay Bill feature.
              Select the type of bill you want to pay (electricity, water, gas,
              internet, etc.). Choose your preferred organization for the bill
              payment from a list that includes reputable options like DESCO,
              Dhaka WASA, Jalalabad Gas, Bakhrabad Gas, BTCL, and more. Make
              secure and hassle-free online payments through HAMS Pay or other
              available payment gateways within hamsfly.
            </Answer>{" "}
            <br />
            <Question>
              Can I access my payment history for bills on hamsfly?
            </Question>
            <Answer>
              Yes, you can easily view your payment history within the app. It
              provides a convenient overview of all your bill payment
              transactions in the &apos;&apos;View Invoice&apos;&apos; section.
            </Answer>{" "}
            <br />
            <Question>
              What types of bills can I pay with hamsfly&apos;s Pay Bill feature?
            </Question>
            <Answer>
              hamsfly allows you to pay various bills, including electricity,
              water, gas, internet, land tax, and more. A wide range of bill
              types is available to meet your specific needs.
            </Answer>{" "}
            <br />
            <Question>Is it safe to pay bills through hamsfly?</Question>
            <Answer>
              Absolutely. hamsfly ensures secure and hassle-free online
              payments through trusted gateways like HAMS Pay, VISA, AMEX,
              MasterCard, and more. Your transactions are conducted with the
              highest level of security.
            </Answer>{" "}
            <br />
            <Question>
              Can I use different payment methods to pay my bills?
            </Question>
            <Answer>
              Yes, hamsfly offers the flexibility to use various payment
              methods, including HAMS Pay and other available gateways. You can
              choose the one that best suits your preferences.
            </Answer>{" "}
            <br />
            <Question>
              What if I encounter issues while making a bill payment?
            </Question>
            <Answer>
              If you face any difficulties or have questions while using the Pay
              Bill feature, you can contact our customer support
              (ask@hamsfly.com) for assistance. We&apos;re here to help you
              navigate through the process and address any concerns.
            </Answer>{" "}
            <br />
            <Question>
              How does hamsfly streamline my financial responsibilities with
              Pay Bill?
            </Question>
            <Answer>
              hamsfly&apos;s Pay Bill feature simplifies the entire bill payment
              process, making it hassle-free and efficient. You can manage all
              your bills in one place, access your payment history, and enjoy
              secure online payments. This feature ensures that you stay
              organized and never miss a bill payment, contributing to a more
              convenient and stress-free financial experience.
            </Answer>{" "}
            <br />
          </>
        ),
      },
      {
        id: "Shop",
        title: "Shop",
        content: (
          <>
            <Question>What is a Shop?</Question>
            <Answer>
              Shopping online from your favorite brands is much easier on
              hamsfly. Purchase anything, from mobile devices and electronics
              to fashion, footwear, and more items, all on the hamsfly App.
            </Answer>{" "}
            <br />
            <Question>
              What categories are available for the &apos;&apos;Shop&apos;&apos; feature on the
              hamsfly platform?
            </Question>
            <Answer>
              Many categories are available on the hamsfly platform: <br />
              Electronics & Home Appliances
              <br />
              Footwear
              <br />
              Mobile & Gadgets
              <br />
              Fashion
              <br />
              Computer & Accessories
              <br />
              Essentials
              <br />
              Travel & Accessories
              <br />
              Subscriptions
              <br />
              Healthcare & Fitness
              <br />
              Kids Fashion
              <br />
              Furniture
              <br />
              Automobile
              <br />
              Arts & Crafts
              <br />
              Event Management
              <br />
              Beauty
              <br />
              Plastics
              <br />
              Many more.
            </Answer>{" "}
            <br />
            <Question>How do I place orders on hamsfly?</Question>
            <Answer>
              To begin ordering, download and install the hamsfly app or you
              can visit ww.hamsfly.com. <br />
              Steps to place an order:
              <br />
              Select the Feature Shop and then select the categories you want to
              shop and <order className="br"></order>
              Add those items to your &apos;&apos;Shopping Cart&apos;&apos;. <br />
              After reviewing your shopping cart, click on &apos;&apos;Proceed to
              Checkout&apos;&apos;. <br />
              Note: The delivery speeds, dates, and delivery address cannot be
              changed once an order is placed.
            </Answer>{" "}
            <br />
            <Question> What occurs after placing an order?</Question>
            <Answer>
              After a successful payment, your order will be marked as
              &apos;processing.&apos; Once a partner accepts it, the order will move to
              the next stage and be prepared for packaging.
            </Answer>{" "}
            <br />
            <Question>
              Can I change my delivery method after placing an order?
            </Question>
            <Answer>
              No, once your order is confirmed, you won&apos;t be able to change to a
              different delivery method.
            </Answer>{" "}
            <br />
            <Question>
              {" "}
              How long does it take for items to be delivered?
            </Question>
            <Answer>
              Delivery Timing:
              <br />
              Inside Dhaka: 3-5 working days* <br />
              Outside Dhaka: 5 to 9 working days* <br />
              *Delivery timing may vary based on the location and other factors
              such as weather conditions, public holidays, logistical
              challenges, and so on.
            </Answer>{" "}
            <br />
            <Question>What occurs after placing an order?</Question>
            <Answer>
              After a successful payment, your order will be marked as
              &apos;processing.&apos; Once a partner accepts it, the order will move to
              the next stage and be prepared for packaging.
            </Answer>{" "}
            <br />
            <Question>
              Can I change my delivery method after placing an order?
            </Question>
            <Answer>
              No, once your order is confirmed, you won&apos;t be able to change to a
              different delivery method.
            </Answer>{" "}
            <br />
            <Question>
              {" "}
              How long does it take for items to be delivered?
            </Question>
            <Answer>
              Delivery Timing:
              <br />
              Inside Dhaka: 3-5 working days*
              <br />
              Outside Dhaka: 5 to 9 working days*
              <br />
              *Delivery timing may vary based on the location and other factors
              such as weather conditions, public holidays, logistical
              challenges, and so on.
            </Answer>{" "}
            <br />
            <Question>
              Are there any delivery charges associated with my order?
            </Question>
            <Answer>
              Yes, you have to pay an additional charge while receiving the
              product.
              <br />
              Delivery Charge (General):
              <br />
              Inside Dhaka: Tk 80*
              <br />
              Outside Dhaka: Tk 150*
              <br />
              *Charges may vary based on the product&apos;s weight and the delivery
              location. Please check the product description for the delivery
              charge.
            </Answer>{" "}
            <br />
            <Question>What is a Coupon?</Question>
            <Answer>
              Hamsfly provides different extra discounts on various payment
              methods through coupons.
            </Answer>{" "}
            <br />
            <Question>How to avail a coupon?</Question>
            <Answer>
              To avail a coupon: <br />
              Add the product to your Cart.
              <br />
              Go to Cart.
              <br />
              Provide the required information and select &apos;&apos;Place Order.&apos;&apos;
              <br />
              Select &apos;&apos;Coupon.&apos;&apos;
              <br />
              Select &apos;&apos;Payment Method.&apos;&apos;
              <br />
              Then select &apos;&apos;Pay Now.&apos;&apos;
            </Answer>{" "}
            <br />
            <Question>
              Can I change my shipping address once my parcel is ready for
              delivery?
            </Question>
            <Answer>
              No, once your order has been packed and is ready for delivery,
              you&apos;ll not be able to opt to collect it at a different
              location/address.
            </Answer>{" "}
            <br />
            <Question>Can I add additional instructions or notes?</Question>
            <Answer>
              Yes. You can add notes if you have any other instructions you need
              to provide.
            </Answer>{" "}
            <br />
            <Question>Where can I see my purchase history?</Question>
            <Answer>
              Go to the &apos;&apos;History&apos;&apos; option, then select &apos;&apos;Shop&apos;&apos; to see the history
              of your purchases.
            </Answer>{" "}
            <br />
            <Question>
              Can I change or modify orders that are already placed?
            </Question>
            <Answer>
              You will not be able to change or modify the number of items once
              you have already placed an order. You can place another fresh
              order with the desired modifications.
            </Answer>{" "}
            <br />
            <Question>
              {" "}
              I ordered the wrong item. How can I stop the order?
            </Question>
            <Answer>
              If you have ordered the wrong item, you can cancel the order by
              emailing us at lifestyle@hamsfly.com.
            </Answer>{" "}
            <br />
            <Question>What payment methods are accepted?</Question>
            <Answer>
              hamsfly accepts various payment methods, including credit/debit
              cards, mobile banking. Please check the payment options available
              at checkout for more details.
            </Answer>
            <br />
            <Question>What should I do if I receive a damaged item?</Question>
            <Answer>
              If you receive a damaged item, please contact our customer service
              immediately at ask@hamsfly.com or call +880 9617 617617. Provide
              your order details and a description of the damage for assistance.
            </Answer>
            <br />
            <Question>How do I update my account information?</Question>
            <Answer>
              To update your account information, log in to the hamsfly app,
              go to &apos;&apos;Account Settings,&apos;&apos; and make the necessary changes.
            </Answer>
            <br />
          </>
        ),
      },
    ],
    bn: [
      {
        id: "2",
        title: "Second Title",
        content: "Second Content ",
      },
    ],
  };

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <>
      <div className="flex justify-end py-6">
        {/* <button
          onClick={() => setLanguage(language === "en" ? "bn" : "en")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {language === "en" ? "বাংলা" : "English"}
        </button> */}
      </div>

      <div className="flex h-screen">
        <div className="w-0 lg:w-1/4 p-4 pl-20 mt-10 overflow-auto sticky top-0 bottom-0 hidden lg:block border-r">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-green-600 mt-4">Categories</h2>
          </div>
          <ul className="hidden lg:block">
            {sections[language].map((section) => (
              <li
                key={section.id}
                className="mb-2 text-gray-600 font-normal text-base"
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
          className="w-full lg:w-3/4 p-4 pr-10 mt-10 lg:pl-10 overflow-auto"
        >
          <h1 className="text-green-600 font-bold text-3xl mt-4 mb-4">
            Frequently Asked Questions
          </h1>
          {sections[language].map((section) => (
            <div key={section.id} id={section.id} className="mb-8 section">
              <Title>{section?.title}</Title>
              <ParagraphItem>{section?.content}</ParagraphItem>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
