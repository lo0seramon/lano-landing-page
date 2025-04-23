import React, { useState } from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const GetLead = ({ navigateTo }) => {
  const screenWidth = useWindowWidth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Please enter your name");
      return false;
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("https://send.api.mailtrap.io/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_MAILTRAP_TOKEN}`,
        },
        body: JSON.stringify({
          from: { email: "welcome@lano.com", name: formData.name },
          to: [{ email: formData.email }],
          subject: "🎉 Welcome to Lano Waitlist!",
          text: `Hi ${formData.name},\n\nThank you for joining our waitlist!`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #2563eb;">Welcome to Lano, ${formData.name}!</h1>
              <p>You've successfully joined our exclusive waitlist.</p>
              <p>We'll notify you as soon as we launch our platform.</p>
              <p style="margin-top: 30px;">Best regards,<br/>The Lano Team</p>
            </div>
          `,
          category: "Waitlist Signup",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.errors?.[0] || "Failed to join waitlist");
      }

      navigateTo("payment");
    } catch (err) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const renderFormFields = () => (
    <>
      <div className="frame-17">
        <input
          type="text"
          name="name"
          required
          className="text-wrapper-13"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          disabled={loading}
          style={{
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "text",
          }}
        />
      </div>

      <div className="frame-17">
        <input
          type="email"
          name="email"
          required
          className="text-wrapper-13"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          disabled={loading}
          style={{
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "text",
          }}
        />
      </div>
    </>
  );

  const renderSubmitButton = () => (
    <div
      className="frame-15"
      onClick={handleSubmit}
      style={{
        cursor: loading ? "not-allowed" : "pointer",
        opacity: loading ? 0.7 : 1,
        position: "relative",
      }}
    >
      <div className="text-wrapper-14">
        {loading ? (
          <>
            <span className="button-loader"></span>
            Sending...
          </>
        ) : (
          "Send"
        )}
      </div>
    </div>
  );

  return (
    <div
      className="large-desktop"
      style={{
        gap:
          screenWidth < 744
            ? "80px"
            : screenWidth >= 744 && screenWidth < 1728
            ? "180px"
            : screenWidth >= 1728
            ? "247px"
            : undefined,
        minWidth:
          screenWidth < 744
            ? "390px"
            : screenWidth >= 744 && screenWidth < 1728
            ? "744px"
            : screenWidth >= 1728
            ? "1728px"
            : undefined,
        padding:
          (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
            ? "32px 0px 0px"
            : screenWidth >= 1728
            ? "100px 0px 0px"
            : undefined,
      }}
    >
      <div
        className="frame"
        style={{
          alignItems:
            (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
              ? "flex-start"
              : screenWidth >= 1728
              ? "center"
              : undefined,
          gap:
            screenWidth < 744
              ? "150px"
              : screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
              ? "200px"
              : undefined,
          padding:
            screenWidth < 744
              ? "0px 32px 64px"
              : screenWidth >= 744 && screenWidth < 1728
              ? "0px 60px"
              : screenWidth >= 1728
              ? "0px 100px"
              : undefined,
        }}
      >
        <div
          className="div"
          style={{
            gap:
              screenWidth >= 1728
                ? "50px"
                : (screenWidth >= 744 && screenWidth < 1728) ||
                  screenWidth < 744
                ? "90px"
                : undefined,
          }}
        >
          {screenWidth >= 1728 && (
            <div className="group">
              <div className="text-wrapper">lano</div>

              <div className="text-wrapper-2">Get early access ↗</div>

              <div className="text-wrapper-3">Log in</div>

              <div className="frame-2">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">EN</div>
                </div>

                <div className="frame-3">
                  <div className="text-wrapper-5">ES</div>
                </div>

                <div className="frame-3">
                  <div className="text-wrapper-5">PT</div>
                </div>
              </div>
            </div>
          )}

          {((screenWidth >= 744 && screenWidth < 1728) ||
            screenWidth < 744) && (
            <>
              <div
                className="frame-4"
                style={{
                  alignSelf:
                    screenWidth >= 744 && screenWidth < 1728
                      ? "stretch"
                      : undefined,
                  display:
                    screenWidth < 744
                      ? "inline-flex"
                      : screenWidth >= 744 && screenWidth < 1728
                      ? "flex"
                      : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1728
                      ? "100%"
                      : undefined,
                }}
              >
                <div
                  className="frame-5"
                  style={{
                    gap:
                      screenWidth < 744
                        ? "4px"
                        : screenWidth >= 744 && screenWidth < 1728
                        ? "8px"
                        : undefined,
                  }}
                >
                  <div
                    className="frame-6"
                    style={{
                      padding:
                        screenWidth < 744
                          ? "6px 8px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "8px 12px"
                          : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-6"
                      style={{
                        fontSize:
                          screenWidth < 744
                            ? "14px"
                            : screenWidth >= 744 && screenWidth < 1728
                            ? "16px"
                            : undefined,
                        lineHeight:
                          screenWidth < 744
                            ? "14px"
                            : screenWidth >= 744 && screenWidth < 1728
                            ? "16px"
                            : undefined,
                      }}
                    >
                      EN
                    </div>
                  </div>

                  <div
                    className="frame-7"
                    style={{
                      padding:
                        screenWidth < 744
                          ? "6px 8px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "8px 12px"
                          : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-7"
                      style={{
                        fontSize:
                          screenWidth < 744
                            ? "14px"
                            : screenWidth >= 744 && screenWidth < 1728
                            ? "16px"
                            : undefined,
                        lineHeight:
                          screenWidth < 744
                            ? "14px"
                            : screenWidth >= 744 && screenWidth < 1728
                            ? "16px"
                            : undefined,
                      }}
                    >
                      ES
                    </div>
                  </div>

                  <div
                    className="frame-8"
                    style={{
                      padding:
                        screenWidth < 744
                          ? "6px 8px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "8px 12px"
                          : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-8"
                      style={{
                        fontSize:
                          screenWidth < 744
                            ? "14px"
                            : screenWidth >= 744 && screenWidth < 1728
                            ? "16px"
                            : undefined,
                        lineHeight:
                          screenWidth < 744
                            ? "14px"
                            : screenWidth >= 744 && screenWidth < 1728
                            ? "16px"
                            : undefined,
                      }}
                    >
                      PT
                    </div>
                  </div>
                </div>

                <div
                  className="frame-9"
                  style={{
                    alignSelf:
                      screenWidth >= 744 && screenWidth < 1728
                        ? "stretch"
                        : undefined,
                    width:
                      screenWidth < 744
                        ? "326px"
                        : screenWidth >= 744 && screenWidth < 1728
                        ? "100%"
                        : undefined,
                  }}
                >
                  <div
                    className="text-wrapper-9"
                    style={{
                      fontSize:
                        screenWidth < 744
                          ? "36px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "48px"
                          : undefined,
                      lineHeight:
                        screenWidth < 744
                          ? "36px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "48px"
                          : undefined,
                      marginBottom:
                        screenWidth >= 744 && screenWidth < 1728
                          ? "-5.00px"
                          : undefined,
                      marginTop:
                        screenWidth < 744
                          ? "-1.00px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "-7.00px"
                          : undefined,
                    }}
                  >
                    lano
                  </div>

                  <div
                    className="text-wrapper-10"
                    style={{
                      fontSize:
                        screenWidth < 744
                          ? "14px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : undefined,
                      letterSpacing:
                        screenWidth < 744
                          ? "-0.70px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "-0.80px"
                          : undefined,
                      lineHeight:
                        screenWidth < 744
                          ? "14px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : undefined,
                    }}
                  >
                    Log in
                  </div>

                  <div
                    className="text-wrapper-11"
                    style={{
                      fontSize:
                        screenWidth < 744
                          ? "14px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : undefined,
                      letterSpacing:
                        screenWidth < 744
                          ? "-0.70px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "-0.80px"
                          : undefined,
                      lineHeight:
                        screenWidth < 744
                          ? "14px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : undefined,
                    }}
                  >
                    Get early access ↗
                  </div>
                </div>
              </div>

              <div className="frame-10">
                <div className="frame-11">
                  <p
                    className="p"
                    style={{
                      fontSize:
                        screenWidth < 744
                          ? "40px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "80px"
                          : undefined,
                      lineHeight:
                        screenWidth < 744
                          ? "40px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "80px"
                          : undefined,
                    }}
                  >
                    Get early access to Lano
                  </p>

                  <div
                    className="text-wrapper-12"
                    style={{
                      fontSize:
                        screenWidth < 744
                          ? "20px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "32px"
                          : undefined,
                      letterSpacing:
                        screenWidth < 744
                          ? "-1.00px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "-1.60px"
                          : undefined,
                      lineHeight:
                        screenWidth < 744
                          ? "20px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "32px"
                          : undefined,
                    }}
                  >
                    Join waitlist and ----------
                  </div>
                </div>

                <div
                  className="frame-12"
                  style={{
                    alignSelf:
                      screenWidth >= 744 && screenWidth < 1728
                        ? "stretch"
                        : undefined,
                    display:
                      screenWidth < 744
                        ? "inline-flex"
                        : screenWidth >= 744 && screenWidth < 1728
                        ? "flex"
                        : undefined,
                    width:
                      screenWidth >= 744 && screenWidth < 1728
                        ? "100%"
                        : undefined,
                  }}
                >
                  <div
                    className="frame-13"
                    style={{
                      alignSelf:
                        screenWidth >= 744 && screenWidth < 1728
                          ? "stretch"
                          : undefined,
                      width:
                        screenWidth < 744
                          ? "326px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "100%"
                          : undefined,
                    }}
                  >
                    <div className="text-wrapper-13">Name</div>
                  </div>

                  <div
                    className="frame-14"
                    style={{
                      alignSelf:
                        screenWidth >= 744 && screenWidth < 1728
                          ? "stretch"
                          : undefined,
                      width:
                        screenWidth < 744
                          ? "326px"
                          : screenWidth >= 744 && screenWidth < 1728
                          ? "100%"
                          : undefined,
                    }}
                  >
                    <div className="text-wrapper-13">Email</div>
                  </div>
                </div>

                <div
                  className="frame-15"
                  style={{
                    alignSelf:
                      screenWidth >= 744 && screenWidth < 1728
                        ? "stretch"
                        : undefined,
                    width:
                      screenWidth < 744
                        ? "326px"
                        : screenWidth >= 744 && screenWidth < 1728
                        ? "100%"
                        : undefined,
                  }}
                  onClick={() => navigateTo("payment")}
                >
                  <div className="text-wrapper-14">Send</div>
                </div>
              </div>
            </>
          )}
        </div>

        {screenWidth >= 1728 && (
          <div className="frame-16">
            <div className="frame-11">
              <p className="text-wrapper-15">Get early access to Lano</p>

              <div className="text-wrapper-16">
                Join waitlist and ----------
              </div>
            </div>

            <div className="frame-11">
              {renderFormFields()}
              {renderSubmitButton()}

              {error && (
                <div
                  className="error-message"
                  style={{
                    marginTop: "20px",
                    padding: "10px",
                    borderRadius: "4px",
                    backgroundColor: "#fee2e2",
                    color: "#dc2626",
                    fontSize: screenWidth < 744 ? "14px" : "16px",
                  }}
                >
                  {error}
                </div>
              )}
            </div>

            <div
              className="frame-18"
              onClick={() => navigateTo("payment")}
              style={{ cursor: "pointer" }}
            >
              <div className="text-wrapper-14">Send</div>
            </div>
          </div>
        )}
      </div>

      <div
        className="frame-wrapper"
        style={{
          alignSelf:
            screenWidth >= 1728 || (screenWidth >= 744 && screenWidth < 1728)
              ? "stretch"
              : undefined,
          height:
            screenWidth < 744
              ? "420px"
              : screenWidth >= 744 && screenWidth < 1728
              ? "577px"
              : screenWidth >= 1728
              ? "680px"
              : undefined,
          padding:
            screenWidth < 744
              ? "250px 32px 0px"
              : screenWidth >= 744 && screenWidth < 1728
              ? "300px 100px 0px"
              : screenWidth >= 1728
              ? "360px 100px 0px"
              : undefined,
          width:
            screenWidth < 744
              ? "390px"
              : screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
              ? "100%"
              : undefined,
        }}
      >
        <div
          className="frame-19"
          style={{
            alignItems: screenWidth < 744 ? "flex-start" : undefined,
            display: screenWidth < 744 ? "flex" : undefined,
            flex: screenWidth < 744 ? "0 0 auto" : undefined,
            flexDirection: screenWidth < 744 ? "column" : undefined,
            gap: screenWidth < 744 ? "12px" : undefined,
            height:
              screenWidth >= 1728 || (screenWidth >= 744 && screenWidth < 1728)
                ? "146px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-17"
            style={{
              fontSize:
                screenWidth < 744
                  ? "36px"
                  : screenWidth >= 1728 ||
                    (screenWidth >= 744 && screenWidth < 1728)
                  ? "48px"
                  : undefined,
              left:
                screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
                  ? "0"
                  : undefined,
              lineHeight:
                screenWidth < 744
                  ? "36px"
                  : screenWidth >= 1728 ||
                    (screenWidth >= 744 && screenWidth < 1728)
                  ? "48px"
                  : undefined,
              marginTop: screenWidth < 744 ? "-1.00px" : undefined,
              position:
                screenWidth < 744
                  ? "relative"
                  : screenWidth >= 1728 ||
                    (screenWidth >= 744 && screenWidth < 1728)
                  ? "absolute"
                  : undefined,
              top:
                screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
                  ? "-1px"
                  : undefined,
              width: screenWidth < 744 ? "fit-content" : undefined,
            }}
          >
            lano
          </div>

          <div
            className="policy-privacy"
            style={{
              fontSize:
                screenWidth < 744
                  ? "14px"
                  : screenWidth >= 1728 ||
                    (screenWidth >= 744 && screenWidth < 1728)
                  ? "24px"
                  : undefined,
              left:
                screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
                  ? "0"
                  : undefined,
              lineHeight:
                screenWidth < 744
                  ? "14px"
                  : screenWidth >= 1728 ||
                    (screenWidth >= 744 && screenWidth < 1728)
                  ? "24px"
                  : undefined,
              position:
                screenWidth < 744
                  ? "relative"
                  : screenWidth >= 1728 ||
                    (screenWidth >= 744 && screenWidth < 1728)
                  ? "absolute"
                  : undefined,
              top:
                screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
                  ? "119px"
                  : undefined,
              width: screenWidth < 744 ? "fit-content" : undefined,
            }}
          >
            {screenWidth < 744 && <>Policy &amp; Privacy</>}

            {(screenWidth >= 1728 ||
              (screenWidth >= 744 && screenWidth < 1728)) && (
              <p className="text-wrapper-18">
                All rights protected © Lano 2025
              </p>
            )}
          </div>

          <div
            className="all-rights-protected"
            style={{
              fontSize:
                screenWidth < 744
                  ? "14px"
                  : screenWidth >= 1728 ||
                    (screenWidth >= 744 && screenWidth < 1728)
                  ? "24px"
                  : undefined,
              left:
                screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
                  ? "0"
                  : undefined,
              lineHeight:
                screenWidth < 744
                  ? "14px"
                  : screenWidth >= 1728 ||
                    (screenWidth >= 744 && screenWidth < 1728)
                  ? "24px"
                  : undefined,
              position:
                screenWidth < 744
                  ? "relative"
                  : screenWidth >= 1728 ||
                    (screenWidth >= 744 && screenWidth < 1728)
                  ? "absolute"
                  : undefined,
              top:
                screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
                  ? "71px"
                  : undefined,
              width: screenWidth < 744 ? "fit-content" : undefined,
            }}
          >
            {screenWidth < 744 && (
              <p className="text-wrapper-18">
                All rights protected © Lano 2025
              </p>
            )}

            {(screenWidth >= 1728 ||
              (screenWidth >= 744 && screenWidth < 1728)) && (
              <>Policy &amp; Privacy</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
