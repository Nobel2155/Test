"use client"
import React, { useState } from "react";
import Title from "../../../components/termsAndCondition/Title";
import Paragraph from "../../../components/termsAndCondition/Paragraph";

function CookiePolicy() {
  const [activeTabCookies, setActiveTabCookies] = useState(1);
  const [activeTabAudit, setActiveTabAudit] = useState(1);
  const [activeTabSocial, setActiveTabSocial] = useState(1);

  const tabsCookies = [
    {
      id: 1,
      title: "Information about Our Use of Cookies",
      content: (
        <>
          HAMS uses cookies to distinguish you from other users
          of our website. This helps us to provide you with a good experience
          when you browse our website and also allows us to improve our website.
          Privacy laws in the European Economic Area (EEA), including the
          General Data Protection Regulation, or GDPR, require websites to
          obtain consent for using or storing some cookies (or similar
          technologies) on your computers or mobile devices. By indicating your
          consent to the use of cookies, you agree that we can place cookies and
          other similar technology on your device, including a mobile device.{" "}
          <br /> <br />
          This cookie policy provides you with clear and comprehensive
          information about the cookies we use and the purposes for using those
          cookies. To review the general privacy policies that apply to users of
          www.hamsfly.com Please read our Privacy Policy.
        </>
      ),
    },
    {
      id: 2,
      title: "What is a Cookie?",
      content: (
        <>
          A cookie is a small file of letters and numbers that we store on your
          browser or the hard drive of your computer, and is downloaded to your
          computer or mobile device when you visit our website.
        </>
      ),
    },
    {
      id: 3,
      title: "Key Concepts",
      content: (
        <>
          First and third-party cookies: whether a cookie is &apos;first&apos; or &apos;third&apos;
          party refers to the domain placing the cookie. First-party cookies are
          those set by a website that is being visited by the user at the time
          (e.g. cookies placed by{" "}
          <a className="text-green-500" href="https://hamsfly.com/">
            www.hamsfly.com
          </a>{" "}
          ).
          <br /> <br />
          Third-party cookies: are cookies that are set by a domain other than
          that of the website being visited by the user. If a user visits a
          website and another entity sets a cookie through that website this
          would be a third-party cookie.
          <br /> <br />
          Persistent cookies: these cookies remain on a user&apos;s device for the
          period of time specified in the cookie. They are activated each time
          that the user visits the website that created that particular cookie.
          Session cookies: these cookies allow website operators to link the
          actions of a user during a browser session. A browser session starts
          when a user opens the browser window and finishes when they close the
          browser window. Session cookies are created temporarily. Once you
          close the browser, all session cookies are deleted.
        </>
      ),
    },
    {
      id: 4,
      title: "How to Delete and Block our Cookies",
      content: (
        <>
          By indicating your consent to the use of cookies, you agree that we
          can place cookies on your device. If you do not consent, no cookies
          will be placed on your device, and no data will be collected. You may
          also block or delete cookies by activating the setting on your browser
          that allows you to refuse the setting of all or some cookies. However,
          please note that if you use your browser settings to block all cookies
          (including essential cookies) you may not be able to access all or
          parts of our website. For more information on how to delete or block
          cookies, see
          <a className="text-green-500 underline" href="#">
            {" "}
            http://www.aboutcookies.org/{" "}
          </a>
          or
          <a className="text-green-500 underline" href="#">
            {" "}
            http://www.cookiecentral.com/faq/{" "}
          </a>
        </>
      ),
    },
    {
      id: 5,
      title: "How to change Cookie setting?",
      content: (
        <>
          Internet browsers allow you to change your cookie settings. These
          settings are usually found in the &apos;options&apos; or &apos;preferences&apos; menu of
          your internet browser. You should use the &apos;Help&apos; option in your
          internet browser for more details.
        </>
      ),
    },
  ];

  const tabsAudits = [
    {
      id: 1,
      title: "2.1 What Cookies do we use and why",
      content: (
        <>
          To find out about specific cookies we use on this website, please see
          below for details. However, please note that not all cookies may be
          used in all jurisdictions or websites. <br />
          <br />
          The cookies used on our website are categorized as follows:
          <br />
          <br />
          Strictly
          <br />
          Necessary
          <br />
          Preferences
          <br />
          Statistics
          <br />
          Marketing
          <br />
          Third Party
        </>
      ),
    },
    {
      id: 2,
      title: "2.2 Strictly Necessary",
      content: (
        <>
          &apos;&apos;Strictly necessary&apos;&apos; cookies let you move around the website and use
          essential features like accessing your profile and posting feedback.
          Without these cookies, these services cannot be provided. Please note
          that these cookies do not gather any information about you that could
          be used for marketing or remembering where you have been on the
          internet.
          <br /> <br />
          Identify you as being logged in to our website; and
          <br /> <br />
          Enable you to submit information via online forms such as registration
          and feedback forms.
          <br /> <br />
          Without acceptance of cookies, you prevent these cookies basis which
          we cannot guarantee your use of our website or how the security on our
          website will perform during your visit.
        </>
      ),
    },
  ];

  const tabsSocial = [
    {
      id: 1,
      title: "YouTube",
      content: (
        <>
          Purpose: Show targeted, relevant advertisements. Show embedded videos
          on hamsfly.com <br />
          <br />
          Applicable Privacy/Cookie Policy Link:
          <a href="#" className="text-green-500 underline">
            {" "}
            https://policies.google.com/privacy
          </a>
          <br />
          Opt Out:{" "}
          <a href="#" className="text-green-500 underline">
            {" "}
            https://adssettings.google.com/
          </a>
        </>
      ),
    },
    {
      id: 2,
      title: "Twitter",
      content: (
        <>
          Purpose: Show targeted, relevant advertisements and re-targeted
          advertisements to visitors of hamsfly.com
          <br />
          <br />
          Applicable Privacy/Cookie Policy Link:
          <a href="#" className="text-green-500 underline">
            {" "}
            https://twitter.com/en/privacy
          </a>
          <br />
          Opt Out:{" "}
          <a href="#" className="text-green-500 underline">
            {" "}
            https://twitter.com/personalization
          </a>
        </>
      ),
    },
    {
      id: 3,
      title: "LinkedIn",
      content: (
        <>
          Purpose: Show targeted, relevant advertisements and re-targeted
          advertisements to visitors of Hams Fly website
          <br />
          <br />
          Applicable Privacy/Cookie Policy Link:
          <a href="#" className="text-green-500 underline">
            {" "}
            https://www.linkedin.com/legal/privacy-policy
          </a>
          <br />
          Opt Out:{" "}
          <a href="#" className="text-green-500 underline">
            {" "}
            https://www.linkedin.com/legal/cookie-table
          </a>
        </>
      ),
    },
    {
      id: 4,
      title: "Facebook",
      content: (
        <>
          Purpose: Show targeted, relevant advertisements and re-targeted
          advertisements to visitors of Hams Fly website
          <br />
          <br />
          Applicable Privacy/Cookie Policy Link:
          <a href="#" className="text-green-500 underline">
            {" "}
            https://www.facebook.com/privacy/explanation
          </a>
          <br />
          Opt Out:{" "}
          <a href="#" className="text-green-500 underline">
            {" "}
            https://www.facebook.com/help/568137493302217
          </a>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-7">
      <h1 className="text-2xl text-green-500 font-bold pt-8 text-center mt-12">Cookie Policy</h1>
      <div className="py-4">
        <Title>1. Cookies</Title>
        <div className="flex items-center gap-1 mb-4">
          {tabsCookies.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabCookies(tab.id)}
              className={`p-2 border rounded-sm text-base ${
                activeTabCookies === tab.id
                  ? "bg-green-50 border-green-300"
                  : "bg-white border-gray-300"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div>
          {tabsCookies.map((tab) =>
            activeTabCookies === tab.id ? (
              <Paragraph key={tab.id} className="text-gray-500 text-base">
                {tab.content}
              </Paragraph>
            ) : null
          )}
        </div>
      </div>
      <div className="py-4">
        <Title>2. COOKIE AUDIT</Title>
        <Paragraph>
          We will perform a cookie audit on a regular basis, which will identify
          all cookies that our website installs, who owns those cookies, and
          their purpose, whether or not they fall within the definition
          &apos;&apos;Strictly Necessary&apos;&apos; for the service requested by the user, how
          intrusive the cookies are, and what steps should be taken to either
          remove the intrusive cookie or obtain the user&apos;s informed consent.
        </Paragraph>
        <div className="flex items-center gap-1 mb-4 pt-4">
          {tabsAudits.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabAudit(tab.id)}
              className={`p-2 border rounded-sm text-base ${
                activeTabAudit === tab.id
                  ? "bg-green-50 border-green-300"
                  : "bg-white border-gray-300"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div>
          {tabsAudits.map((tab) =>
            activeTabAudit === tab.id ? (
              <Paragraph key={tab.id} className="text-gray-500 text-base">
                {tab.content}
              </Paragraph>
            ) : null
          )}
        </div>
      </div>
      <div className="py-4">
        <Title>3. PREFERENCES</Title>
        <Paragraph>
        &apos;&apos;Preference&apos;&apos; cookies enable a website to remember information that
          changes the way the website behaves or looks, like your preferred
          language or the region that you are in. We use cookies that collect
          information about your choices and preferences. These cookies allow us
          to remember language or other local settings and customize the sites
          accordingly. We may store settings and preferences of our logged in
          users.
        </Paragraph>
      </div>
      <div className="py-4">
        <Title>4. STATISTIC</Title>
        <Paragraph>
        &apos;&apos;Statistic&apos;&apos; cookies enable a website to gather data related the way
          the website behaves or looks, like your preferred language or the
          region that you are in.
        </Paragraph>
      </div>
      <div className="py-4">
        <Title>5. MARKETING</Title>
        <Paragraph>
        &apos;&apos;Marketing&apos;&apos; cookies are used to track visitors across websites. The
          intention is to display advertisements that are relevant and engaging
          for the individual user and thereby more valuable for publishers and
          third party advertisers. We use cookies to deliver many types of
          digital marketing. They store user data and behavior information,
          which allows advertising agencies to target audience groups according
          to different variables, like age, gender, location, interests.
        </Paragraph>
      </div>
      <div className="py-4">
        <Title>6. THIRD PARTY COOKIES</Title>
        <Paragraph>
        &apos;&apos;Third Party&apos;&apos; cookies are used within our services which are set by
          other organizations. We use cookies served by third parties in order
          to improve our website; personalize your experience; and understand
          how our website is used.
          <br /> <br />
          While accessing our website, some cookies may be sent from other
          websites like Facebook, Twitter, etc. These Third Party cookies are
          responsible for having their own cookie and privacy policies. They are
          not under our control and are not monitored or reviewed by us.
          <br />
          <br />
          Before using Third Party cookies, please read and understand their
          cookie and privacy policies to ensure you agree to their terms.
        </Paragraph>
      </div>

      <div className="py-4">
        <Title>7. COOKIE AUDIT</Title>
        <Paragraph>
          We will perform a cookie audit on a regular basis, which will identify
          all cookies that our website installs, who owns those cookies, and
          their purpose, whether or not they fall within the definition
          &apos;&apos;Strictly Necessary&apos;&apos; for the service requested by the user, how
          intrusive the cookies are, and what steps should be taken to either
          remove the intrusive cookie or obtain the user&apos;s informed consent.
          <br />
          <br />
          To find out about specific cookies we use on this website, please see
          below for details. However, please note that not all cookies may be
          used in all jurisdictions or websites.
        </Paragraph>
        <div className="flex items-center gap-1 pt-4 mb-4">
          {tabsSocial.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabSocial(tab.id)}
              className={`p-2 border rounded-sm text-base ${
                activeTabSocial === tab.id
                  ? "bg-green-50 border-green-300"
                  : "bg-white border-gray-300"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div>
          {tabsSocial.map((tab) =>
            activeTabSocial === tab.id ? (
              <Paragraph key={tab.id} className="text-gray-500 text-base">
                {tab.content}
              </Paragraph>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;
